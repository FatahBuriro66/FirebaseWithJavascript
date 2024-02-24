import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref, get, child, onChildAdded, push } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getStorage, ref as Sref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

API_KEY = myapikey
FIREBASE_CONFIG = {
    "apiKey": "your_api_key",
    "authDomain": "your_auth_domain",
    "databaseURL": "your_database_url",
    "projectId": "your_project_id",
    "storageBucket": "your_storage_bucket",
    "messagingSenderId": "your_messaging_sender_id",
    "appId": "your_app_id",
    "measurementId": "your_measurement_id"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase()


export {
    app,
    db,
    child,
    set,
    ref,
    get,
    getStorage,
    uploadBytesResumable,
    Sref,
    getDownloadURL,
    onChildAdded,
    push,
}
