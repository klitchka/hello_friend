import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-SRCyw_fzQm6QzOCcka-pyP9qCwKDJl0",
  authDomain: "hello-klitchka.firebaseapp.com",
  projectId: "hello-klitchka",
  storageBucket: "hello-klitchka.appspot.com",
  messagingSenderId: "37045171502",
  appId: "1:37045171502:web:e9cfea68e63a257258b6bf",
  measurementId: "G-KBSY38VQJ5"
};


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const statusDocRef = doc(db, 'status/rSKQNfaGMjl9CnJ47cQ6');

  function StatusButton() {
    const [happy, setHappy] = useState(false);
    
    useEffect(() => {
      const unsubscribe = onSnapshot(statusDocRef, (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setHappy(data.happy);
        }
      });
  
      return unsubscribe;
    });
  
    function handleButtonClick(name, value) {
      setDoc(statusDocRef, { [name]: !value }, { merge: true });
    }
  
    return (
      <div>
        <button className="status-button" id="happy" onClick={() => handleButtonClick('happy', happy)}>
          {happy ? 'yes' : 'no'}
        </button>
      </div>
    );
  }
  
  export default StatusButton;
  
