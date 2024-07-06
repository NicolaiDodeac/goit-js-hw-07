const inputDataRef = document.querySelector('input#name-input');
const outputTextRef = document.querySelector('span#name-output');

inputDataRef.addEventListener('input', onUsernameInput);

function onUsernameInput() {
  const userName = inputDataRef.value.trim() || 'Anonymous';
  outputTextRef.textContent = userName;
}
