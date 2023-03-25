import FirebaseConfig from "./firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";
import { parseFirebaseError, isFirebaseError } from "./utils";
import { signInWithEmailAndPassword } from "firebase/auth";

const firebase = new FirebaseConfig();
const auth = firebase.auth();

const signInForm = document.getElementById("sign-in-form") as HTMLFormElement;
let signedInUser: User;

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signInForm["email"].value;
    const password = signInForm["password"].value;
    signIn(email, password);
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        signedInUser = user;
    } else {
        console.log("User is not signed in");
    }
});

async function signIn(email: string, password: string) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        if (isFirebaseError(error)) {
            const readableError = parseFirebaseError(error.message);
            console.error(readableError);
        } else {
            console.error(error);
        }
    }
}
