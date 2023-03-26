window.onmessage = function (e) {
    console.log(e.data);
};

const app = document.querySelector("#app") as HTMLDivElement;
setIframe();

function setIframe() {
    app.innerHTML = /*html*/ `<iframe id="sign-in-form" src="https://localhost:3000" class="w-[100vw] h-[100vh]"></iframe>`;
}

// const signInForm = document.querySelector("#sign-in-form") as HTMLIFrameElement;
// signInForm.contentWindow.postMessage("signOut", "https://localhost:3000");

// const getUser = document.querySelector("#get-user") as HTMLButtonElement;
// const signInForm = document.querySelector("#sign-in-form") as HTMLIFrameElement;

// signInForm.onload = () => {
//     if (signInForm.contentWindow) {
//         signInForm.contentWindow.postMessage("getUserInfo", "https://localhost:3000");
//     }
// };

// signInForm.addEventListener("load", () => {
//     if (signInForm.contentWindow) {
//         signInForm.contentWindow.postMessage("signOut", "https://localhost:3000");
//     }
// });

// getUser.addEventListener("click", () => {
//     signInForm.contentWindow.postMessage("getUserInfo", "https://localhost:3000");
// });

export default {};
