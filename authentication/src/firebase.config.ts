import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default class FirebaseConfig {
    private firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
    };

    private app: FirebaseApp;

    constructor() {
        this.firebaseConfig = {
            apiKey: import.meta.env.VITE_API_KEY,
            authDomain: import.meta.env.VITE_AUTH_DOMAIN,
            projectId: import.meta.env.VITE_PROJECT_ID,
            storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
            appId: import.meta.env.VITE_APP_ID,
        };
        this.app = initializeApp(this.firebaseConfig);
    }

    auth() {
        return getAuth(this.app);
    }
}
