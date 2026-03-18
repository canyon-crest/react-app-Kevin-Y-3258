import Card from './Card.jsx'
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "firebase/firestore";

function Home(){
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  
  // --- READ: Load items from Firestore ---
  const loadItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const loaded = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setItems(loaded);
  };
  // Load items once when the page first renders
  useEffect(() => {
    loadItems();
  }, []);

  // --- WRITE: Add a new item to Firestore ---
  const handleAdd = async () => {
    if (inputText.trim() === "") return;
    await addDoc(collection(db, "items"), {
      text: inputText,
      createdAt: serverTimestamp()
    });
    setInputText("");   // clear the input
    loadItems();        // refresh the list
  };

    return (
        <div>
            <h1>Fruit Shop</h1>
            <p>Welcome to my fruit shop!</p>
            
            <Card name="Lychee" description="Lychees are white." />
            <Card name="Pineapple" description="Pineapples are orange?" />
            <Card name="Cherry" description="Cherries are blue???" />

            {/* Firestore Items List */}
            <h2>My Items List</h2>
            <div>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter something..."
                style={{ padding: "0.5rem", width: "300px", marginRight: "0.5rem" }}
              />
              <button onClick={handleAdd}>Add Item</button>
            </div>
            {items.length === 0 ? (
              <p>No items yet.</p>
            ) : (
              <ul style={{ display: 'block', listStylePosition: 'inside', paddingLeft: '0', margin: '1rem 0' }}>
                {items.map((item) => (
                  <li key={item.id} style={{ display: 'block', marginBottom: '0.5rem' }}>{item.text}</li>
                ))}
              </ul>
            )}
        </div>
    )
}

export default Home

