import componentNavigation from "./components/navigation";

window.onmessage = function (e) {
    setUserInfo(e.data);
};

const navigation = document.querySelector("#navigation") as HTMLDivElement;
const signInIframe = document.querySelector("#sign-in-iframe") as HTMLIFrameElement;

setNavigationComponent();
setSignInIframe();

function setUserInfo(userInfo: any) {
    setNavigationComponent(userInfo);
}

function setNavigationComponent(userInfo: any = null) {
    navigation.innerHTML = componentNavigation(userInfo?.email, userInfo === null ? false : true);
    if (userInfo !== null) {
        const signOutButton = document.querySelector("#sign-out-button") as HTMLButtonElement;
        signOutButton.addEventListener("click", signOut);
    }
}

function setSignInIframe() {
    signInIframe.innerHTML = /*html*/ `<iframe id="sign-in-form" src="https://localhost:3000" class="w-[100vw] h-[600px]"></iframe>`;
}

function signOut() {
    const iFrame = document.querySelector("#sign-in-form") as HTMLIFrameElement;
    if (iFrame.contentWindow) {
        iFrame.contentWindow.postMessage("signOut", "https://localhost:3000");
    }
}
