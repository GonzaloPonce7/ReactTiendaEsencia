import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyC6AId4ypHwiOSE9rTxMgYTZa0U_U2GKvQ",
  authDomain: "reacttiendaesencia.firebaseapp.com",
  projectId: "reacttiendaesencia",
  storageBucket: "reacttiendaesencia.appspot.com",
  messagingSenderId: "803202138333",
  appId: "1:803202138333:web:fe53722203f92c2ebb9b34",
  measurementId: "G-ENZ06C0VN6"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
