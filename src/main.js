import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDqGJ8_QmalrYTvAcwgO0_aCZUFly6oWrc",
  authDomain: "vite-project-19fe1.firebaseapp.com",
  projectId: "vite-project-19fe1",
  storageBucket: "vite-project-19fe1.appspot.com",
  messagingSenderId: "1071413227868",
  appId: "1:1071413227868:web:1bd216626f0c23282e5199",
  measurementId: "G-W76WKFRB8V"
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig); ここだけ少し変更しています
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");
