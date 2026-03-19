If you're already using npm and a module bundler such as webpack or Rollup, you can run the following command to install the latest SDK (Learn more):

npm install firebase
Then, initialize Firebase and begin using the SDKs for the products you'd like to use.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmlgnO7NdhjwW2exjRlnouS8MaAzQUybs",
  authDomain: "am-abdulmueed-website.firebaseapp.com",
  projectId: "am-abdulmueed-website",
  storageBucket: "am-abdulmueed-website.firebasestorage.app",
  messagingSenderId: "485853116233",
  appId: "1:485853116233:web:e203ace98eda5ebab3cc98",
  measurementId: "G-GDXTC5HPM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
Note: This option uses the modular JavaScript SDK, which provides reduced SDK size.

Learn more about Firebase for web: Get Started, Web SDK API Reference, Samples

