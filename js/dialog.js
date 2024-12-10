// Open and close the dialog modal :3
function OpenModal(btnId, dialogId) {
  let dialog = document.getElementById(dialogId);
  dialog.showModal();
}
function CloseModal(btnId, dialogId) {
  let dialog = document.getElementById(dialogId);
  dialog.close();
}
