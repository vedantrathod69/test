// js/admin.js

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc, updateDoc, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

// Initialize Firebase (assuming config is in config/firebase-config.js)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// DOM Elements
const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const authError = document.getElementById('auth-error');
const adminContainer = document.getElementById('admin-container');
const adminContent = document.getElementById('admin-content');
const logoutButton = document.getElementById('logout-button');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const themeIcon = document.getElementById('theme-icon');
const passwordPromptContainer = document.createElement('div'); // Container for the password prompt

// Book Management Elements
const uploadBookForm = document.getElementById('upload-book-form');
const uploadStatus = document.getElementById('upload-status');
const bookListContainer = document.getElementById('book-list');
const searchTermInput = document.getElementById('search-term');
const filterClassSelect = document.getElementById('filter-class');
const searchFilterButton = document.getElementById('search-filter-button');

// Task Dashboard Elements
const brozListContainer = document.getElementById('broz-list');

// Book Requests Elements
const requestListContainer = document.getElementById('request-list');

// Notifications Element
const notificationsContainer = document.getElementById('notifications');

// Admin Roles (Example - can be fetched from Firestore or a static map)
const adminRoles = {
    'admin@example.com': 'Owner',
    'manager@example.com': 'Manager',
    'uploader@example.com': 'Uploader'
};

const ACCESS_PASSWORD = 'GENZCLANX';
let currentAdminRole = null;
let isLoggedInWithEmail = false;
let allBooks = [];
let allBroz = [];
let allRequests = [];

// Function to show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.classList.add('bg-' + (type === 'success' ? 'green' : 'red') + '-100', 'border-' + (type === 'success' ? 'green' : 'red') + '-400', 'text-' + (type === 'success' ? 'green' : 'red') + '-700', 'px-4', 'py-2', 'rounded-md', 'mb-2', 'animate-slide-in');
    notification.textContent = message;
    notificationsContainer.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to play sound (optional)
function playSound(soundFile) {
    const audio = new Audio(`public/sounds/${soundFile}`);
    audio.play();
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    themeIcon.classList.toggle('fa-moon', !isDarkMode);
    themeIcon.classList.toggle('fa-sun', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    toggleDarkMode();
}

darkModeToggle.addEventListener('click', toggleDarkMode);

// Function to display password prompt
function showPasswordPrompt() {
    passwordPromptContainer.className = 'bg-white dark:bg-gray-800 shadow-md rounded-md p-6 max-w-md mx-auto mt-8';
    passwordPromptContainer.innerHTML = `
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Enter Access Password</h2>
        <div class="mb-4">
            <label for="access-password" class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Password:</label>
            <input type="password" id="access-password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700" placeholder="Access Password">
        </div>
        <button id="verify-password-button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Verify</button>
        <div id="password-error" class="text-red-500 text-sm mt-2 hidden"></div>
    `;
    adminContainer.appendChild(passwordPromptContainer);

    const verifyPasswordButton = document.getElementById('verify-password-button');
    const passwordInput = document.getElementById('access-password');
    const passwordError = document.getElementById('password-error');

    verifyPasswordButton.addEventListener('click', () => {
        if (passwordInput.value === ACCESS_PASSWORD) {
            isLoggedInWithEmail = true;
            passwordPromptContainer.remove();
            adminContent.classList.remove('hidden');
            loadAdminData(); // Load books, broz, requests
            console.log('Access password verified.');
        } else {
            passwordError.textContent = 'Incorrect password.';
            passwordError.classList.remove('hidden');
        }
    });
}

// Function to load admin data (books, broz, requests)
async function loadAdminData() {
    await loadBooks();
    await loadBroz();
    await loadBookRequests();
}

// --- Authentication ---
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // Check if the user is an admin (email in the adminRoles list)
        if (adminRoles.hasOwnProperty(user.email)) {
            authSection.classList.add('hidden');
            // Now show the password prompt
            showPasswordPrompt();
        } else {
            window.location.href = '/'; // Redirect unauthorized users
        }
    } else {
        authSection.classList.remove('hidden');
        adminContent.classList.add('hidden');
        isLoggedInWithEmail = false;
        if (passwordPromptContainer && passwordPromptContainer.parentNode) {
            passwordPromptContainer.remove();
        }
    }
});

loginButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        authError.classList.add('hidden');
        // After successful email login, the onAuthStateChanged listener will handle the password prompt
    } catch (error) {
        authError.textContent = error.message;
        authError.classList.remove('hidden');
    }
});

logoutButton.addEventListener('click', async () => {
    try {
        await signOut(auth);
        showNotification('Logged out successfully.');
    } catch (error) {
        console.error('Error logging out:', error);
        showNotification('Error logging out.', 'error');
    }
});

// --- Book Management ---
uploadBookForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!isLoggedInWithEmail) {
        showNotification('Access denied. Please verify the admin password.', 'error');
        return;
    }

    uploadStatus.textContent = 'Uploading...';
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const tagsInput = document.getElementById('tags').value.trim();
    const tags = tagsInput.split(',').map(tag => tag.trim());
    const className = document.getElementById('class').value.trim();
    const coverImageFile = document.getElementById('cover-image').files[0];
    const downloadLink = document.getElementById('download-link').value.trim();

    if (!title || !author || !className || !coverImageFile || !downloadLink) {
        uploadStatus.textContent = 'Please fill in all required fields.';
        return;
    }

    const coverImageRef = ref(storage, `covers/<span class="math-inline">\{coverImageFile\.name\}\-</span>{Date.now()}`);
    const uploadTask = uploadBytesResumable(coverImageRef, coverImageFile);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploadStatus.textContent = `Upload Progress: ${progress.toFixed(2)}%`;
        },
        (error) => {
            console.error('Error uploading cover image:', error);
            uploadStatus.textContent = 'Error uploading cover image.';
            showNotification('Error uploading cover image.', 'error');
        },
        async () => {
            const coverImageUrl = await getDownloadURL(uploadTask.snapshot.ref);
            try {
                const bookData = {
                    title,
                    author,
                    tags,
                    class: className,
                    coverUrl: coverImageUrl,
                    downloadUrl: downloadLink,
                    createdAt: new Date()
                };
                await setDoc(collection(db, 'books'), bookData);
                uploadBookForm.reset();
                uploadStatus.textContent = 'Book uploaded successfully!';
                showNotification('Book uploaded successfully!');
                loadBooks(); // Reload the book list
            } catch (error) {
                console.error('Error adding book to Firestore:', error);
                uploadStatus.textContent = 'Error adding book data.';
                showNotification('Error adding book data.', 'error');
            }
        }
    );
});

async function loadBooks() {
    if (!isLoggedInWithEmail) return;
    bookListContainer.innerHTML = '<p>Loading books...</p>';
    try {
        const querySnapshot = await getDocs(collection(db, 'books'));
        allBooks = [];
        querySnapshot.forEach((doc) => {
            allBooks.push({ id: doc.id, ...doc.data() });
        });
        renderBookList(allBooks);
        populateClassFilter(allBooks);
    } catch (error) {
        console.error('Error loading books:', error);
        bookListContainer.innerHTML = '<p class="text-red-500">Error loading books.</p>';
        showNotification('Error loading books.', 'error');
    }
}

function populateClassFilter(books) {
    const classes = [...new Set(books.map(book => book.class))].sort();
    filterClassSelect.innerHTML = '<option value="">All Classes</option>';
    classes.forEach(className => {
        const option = document.createElement('option');
        option.value = className;
        option.textContent = className;
        filterClassSelect.appendChild(option);
    });
}

searchFilterButton.addEventListener('click', () => {
    const searchTerm = searchTermInput.value.toLowerCase();
    const selectedClass = filterClassSelect.value;

    const filteredBooks = allBooks.filter(book => {
        const titleMatch = book.title.toLowerCase().includes(searchTerm);
        const authorMatch = book.author.toLowerCase().includes(searchTerm);
        const tagsMatch = book.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        const classMatch = selectedClass ? book.class === selectedClass : true;

        return classMatch && (titleMatch || authorMatch || tagsMatch);
    });
    renderBookList(filteredBooks);
});

function renderBookList(books) {
    bookListContainer.innerHTML = '';
    if (books.length === 0) {
        bookListContainer.innerHTML = '<p>No books found.</p>';
        return;
    }
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'bg-white dark:bg-gray-700 shadow-md rounded-md p-4';
        bookCard.innerHTML = `
            <img src="<span class="math-inline">\{book\.coverUrl\}" alt\="</span>{book.title} cover" class="w-24 h-36 object-cover mb-2 rounded">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">${book.title}</h3>
            <p class="text-gray-600 dark:text-gray-300">By ${book.author}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Class: <span class="math-inline">\{book\.class\}</p\>
<div class\="mt\-2 flex space\-x\-2"\>
<button class\="bg\-blue\-500 hover\:bg\-blue\-700 text\-white font\-bold py\-1 px\-2 rounded text\-sm edit\-book\-btn" data\-book\-id\="</span>{book.id}">Edit</button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm delete-book-btn" data-book-id="${book.id}">Delete</button>
            </div>
        `;
        bookListContainer.appendChild(bookCard);
    });

    // Attach event listeners to edit and delete buttons after rendering
    attachBookActionListeners();
}

function attachBookActionListeners() {
    const deleteButtons = document.querySelectorAll('.delete-book-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            if (!isLoggedInWithEmail) {
                showNotification('Access denied. Please verify the admin password.', 'error');
                return;
            }
            const bookId = e.target.dataset.bookId;
            if (confirm('Are you sure you want to delete this book?')) {
                try {
                    const bookSnapshot = await getDoc(doc(db, 'books', bookId));
                    const bookData = bookSnapshot.data();
                    if (bookData && bookData.coverUrl) {
                        const coverRef = ref(storage, bookData.coverUrl);
                        // Attempt to delete the file if the path looks like a storage URL
                        if (coverRef.toString().startsWith("gs://")) {
                            await deleteObject(coverRef);
                            console.log('Cover image deleted:', bookData.coverUrl);
                        } else {
                            console.log('Cover URL does not seem to be a Firebase Storage URL, skipping deletion:', bookData.coverUrl);
                        }
                    }
                    await deleteDoc(doc(db, 'books', bookId));
                    showNotification('Book deleted successfully!');
                    loadBooks(); // Reload the book list
                } catch (error) {
                    console.error('Error deleting book:', error);
                    showNotification('Error deleting book.', 'error');
                }
            }
        });
    });

    const editButtons = document.querySelectorAll('.edit-book-btn');
    editButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            if (!isLoggedInWithEmail) {
                showNotification('Access denied. Please verify the admin password.', 'error');
                return;
            }
            const bookId = e.target.dataset.bookId;
            // Implement your edit book functionality here
            // This might involve fetching book details and displaying an edit form
            console.log('Edit button clicked for book ID:', bookId);
            // For now, let's just show a notification
            showNotification(`Editing book with ID: ${bookId} (functionality to be implemented)`);
        });
    });
}

// --- GENZ BROZ Task Dashboard ---
async function loadBroz() {
    if (!isLoggedInWithEmail) return;
    brozListContainer.innerHTML = '<p>Loading GENZ BROZ...</p>';
    try {
        const querySnapshot = await getDocs(collection(db, 'broz'));
        allBroz = [];
        querySnapshot.forEach((doc) => {
            allBroz.push({ id: doc.id, ...doc.data() });
        });
        renderBrozList(allBroz);
    } catch (error) {
        console.error('Error loading GENZ BROZ:', error);
        brozListContainer.innerHTML = '<p class="text-red-500">Error loading GENZ BROZ.</p>';
        showNotification('Error loading GENZ BROZ.', 'error');
    }
}

function renderBrozList(broz) {
    brozListContainer.innerHTML = '';
    if (broz.length === 0) {
        brozListContainer.innerHTML = '<p>No GENZ BROZ found.</p>';
        return;
    }
    broz.forEach(bro => {
        const broCard = document.createElement('div');
        broCard.className