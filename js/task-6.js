function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  inputField: document.querySelector('.input-js'),
  boxPlace: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', () => {
  const amount = parseInt(refs.inputField.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    refs.inputField.value = '';
  }
});

refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    refs.boxPlace.appendChild(newBox);
    boxSize += 10;
  }
}

function destroyBoxes() {
  refs.boxPlace.innerHTML = '';
}
