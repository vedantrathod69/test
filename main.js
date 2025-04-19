// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc,
  onSnapshot, updateDoc, doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  getStorage, ref, uploadBytes, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCXn-Vf5f6O79P4pn049bZf-uBhnVfcy8o",
    authDomain: "genzlib.firebaseapp.com",
    projectId: "genzlib",
    storageBucket: "genzlib.firebasestorage.app",
    messagingSenderId: "393458004184",
    appId: "1:393458004184:web:bc53aa14dfab221316e7ad",
    measurementId: "G-4SDESL8H5J"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

window.db = db;
window.storage = storage;

// devpanel.js

const bookRef = collection(db, "books");

// Add new book
async function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const bookClass = document.getElementById("class").value;
  const tags = document.getElementById("tags").value.split(",").map(t => t.trim());
  const link = document.getElementById("link").value;
  const coverFile = document.getElementById("cover").files[0];

  if (!title || !author || !bookClass || !link || !coverFile) {
    alert("Fill all fields + select a cover image");
    return;
  }

  const coverRef = ref(storage, `covers/${Date.now()}_${coverFile.name}`);
  await uploadBytes(coverRef, coverFile);
  const coverURL = await getDownloadURL(coverRef);

  await addDoc(bookRef, {
    title,
    author,
    class: bookClass,
    tags,
    link,
    cover: coverURL,
    createdAt: new Date()
  });

  alert("✅ Book added!");
}

// Real-time fetch books
onSnapshot(bookRef, (snapshot) => {
  const container = document.getElementById("bookList");
  container.innerHTML = "";
  snapshot.forEach((docSnap) => {
    const book = docSnap.data();
    const bookID = docSnap.id;
    container.innerHTML += `
      <div class="bg-gray-800 p-4 rounded-lg shadow-md">
        <img src="${book.cover}" class="w-full h-48 object-cover rounded mb-2"/>
        <h3 class="text-xl font-bold">${book.title}</h3>
        <p class="text-sm">by ${book.author}</p>
        <p class="text-xs mt-1 mb-2">${book.class} | ${book.tags.join(", ")}</p>
        <div class="flex gap-2 flex-wrap text-sm">
          <a href="${book.link}" target="_blank" class="bg-blue-600 px-2 py-1 rounded">Download</a>
          <button onclick="deleteBook('${bookID}')" class="bg-red-600 px-2 py-1 rounded">Delete</button>
        </div>
      </div>
    `;
  });
});

// Delete book
async function deleteBook(id) {
  await deleteDoc(doc(db, "books", id));
  alert("🗑️ Book deleted");
}
