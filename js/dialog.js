// Constants
const DIALOG = document.querySelector("dialog");
const SHOW_BUTTON = document.querySelector("dialog + button");
const CLOSE_BUTTON = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
SHOW_BUTTON.addEventListener("click", () => {
    DIALOG.showModal();
});

// "Close" button closes the dialog
CLOSE_BUTTON.addEventListener("click", () => {
    DIALOG.close();
});
