// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXn-Vf5f6O79P4pn049bZf-uBhnVfcy8o",
    authDomain: "genzlib.firebaseapp.com",
    projectId: "genzlib",
    storageBucket: "genzlib.firebasestorage.app",
    messagingSenderId: "393458004184",
    appId: "1:393458004184:web:bc53aa14dfab221316e7ad",
    measurementId: "G-4SDESL8H5J"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Function to add book to Firebase Firestore and Storage
const addBook = async () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const classLevel = document.getElementById("class").value;
  const tags = document.getElementById("tags").value.split(",");
  const link = document.getElementById("link").value;
  const coverFile = document.getElementById("cover").files[0];

  if (title && author && classLevel && link && coverFile) {
    // Upload cover image
    const coverRef = ref(storage, 'covers/' + coverFile.name);
    const uploadTask = uploadBytesResumable(coverRef, coverFile);
    uploadTask.on('state_changed', null, (error) => {
      console.log(error);
    }, async () => {
      // Get download URL after upload
      const coverUrl = await getDownloadURL(coverRef);
      
      // Add book data to Firestore
      await addDoc(collection(db, "books"), {
        title,
        author,
        classLevel,
        tags,
        link,
        coverUrl,
      });
      
      alert("Book added successfully!");
      location.reload(); // Reload to update the list
    });
  } else {
    alert("All fields must be filled!");
  }
};

// Function to fetch books from Firestore
const fetchBooks = async () => {
  const querySnapshot = await getDocs(collection(db, "books"));
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const book = doc.data();
    const bookCard = document.createElement("div");
    bookCard.classList.add("bg-gray-800", "rounded-lg", "p-4", "shadow-xl");
    
    bookCard.innerHTML = `
      <img src="${book.coverUrl}" alt="${book.title}" class="rounded-md w-full h-40 object-cover mb-4" />
      <h3 class="text-xl font-bold text-yellow-400">${book.title}</h3>
      <p class="text-sm text-gray-400">${book.author}</p>
      <p class="text-sm text-gray-400">Class: ${book.classLevel}</p>
      <a href="${book.link}" target="_blank" class="text-blue-400 mt-2 block">Download</a>
      <button onclick="deleteBook('${doc.id}')" class="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700">
        🗑️ Delete
      </button>
    `;
    
    bookList.appendChild(bookCard);
  });
};

// Function to delete a book
const deleteBook = async (bookId) => {
  await deleteDoc(doc(db, "books", bookId));
  alert("Book deleted successfully!");
  location.reload(); // Reload to update the list
};

// Fetch books when the page loads
window.onload = fetchBooks;
