import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyB-SRCyw_fzQm6QzOCcka-pyP9qCwKDJl0",
    authDomain: "hello-klitchka.firebaseapp.com",
    projectId: "hello-klitchka",
    storageBucket: "hello-klitchka.appspot.com",
    messagingSenderId: "37045171502",
    appId: "1:37045171502:web:e9cfea68e63a257258b6bf",
    measurementId: "G-KBSY38VQJ5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    // Leer el recuento de me gusta de Firestore y actualizar el estado
    const docRef = doc(db, 'statusAndritte/x72pPnJ1pY2DPmgtqCbz');
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setLikeCount(doc.data().likecount);
      } else {
        console.log('No se encontró el documento');
      }
    });
  }, []);

  function handleButtonClick() {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
    // Actualizar el número de me gusta en Firestore
    const docRef = doc(db, 'statusAndritte/x72pPnJ1pY2DPmgtqCbz');
    updateDoc(docRef, { likecount: newLikeCount });
  }

  return (
    <div>
      <button id="like-button" onClick={handleButtonClick}>
        Give love ({likeCount})
      </button>
    </div>
  );
}

export default LikeButton;
