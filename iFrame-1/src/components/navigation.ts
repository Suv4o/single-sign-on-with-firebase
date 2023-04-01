export default function componentNavigation(userEmail = "", showSignIn = true) {
    return /*html*/ `
    <nav class="bg-green-700">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="text-white rounded-md px-3 py-2 text-sm font-medium">${userEmail}</div>
                ${
                    showSignIn
                        ? /*html*/ `<button id="sign-out-button" class=" text-white hover:bg-green-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sign Out</button>`
                        : ""
                }
            </div>
        </div>
    </nav>
`;
}
