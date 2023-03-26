import FirebaseConfig from "./firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";
import { parseFirebaseError, isFirebaseError } from "./utils";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import componentSignIn from "./components/sign-in-from";
import componentSignedIn from "./components/signed-in";

const firebase = new FirebaseConfig();
const auth = firebase.auth();

const app = document.getElementById("app") as HTMLIFrameElement;

function setSignInComponent() {
    app.innerHTML = componentSignIn();
}

function setSignedInComponent() {
    app.innerHTML = componentSignedIn();
}

function setSignInSubmitListener(signInForm: HTMLFormElement) {
    signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = signInForm["email"].value;
        const password = signInForm["password"].value;
        signUserIn(email, password);
    });
}

function removeSignInSubmitListener(signInForm: HTMLFormElement) {
    signInForm?.removeEventListener("submit", () => {});
}

let signedInUser: User | null = null;

window.onmessage = function (event) {
    if (event.origin === "http://localhost:3001" || event.origin === "http://localhost:3002") {
        if (event.data === "signOut") {
            signUserOut();
        }
    }
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        signedInUser = user;
        removeSignInSubmitListener(document.getElementById("sign-in-form") as HTMLFormElement);
        setSignedInComponent();
    } else {
        setSignInComponent();
        setSignInSubmitListener(document.getElementById("sign-in-form") as HTMLFormElement);
    }
});

async function signUserIn(email: string, password: string) {
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

async function signUserOut() {
    signedInUser = null;
    try {
        await signOut(auth);
    } catch (error) {
        if (isFirebaseError(error)) {
            const readableError = parseFirebaseError(error.message);
            console.error(readableError);
        } else {
            console.error(error);
        }
    }
}
