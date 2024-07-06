const listRef = document.querySelector('ul#categories');
const liItemRef = document.querySelectorAll('li.item');
const linumRef = document.querySelectorAll('li.item ul');
console.log('🚀 ~ liItemRef:', liItemRef.length);

for (let i = 0; i < liItemRef.length; i++) {
  const titleText = liItemRef[i].firstElementChild.textContent;
  console.log('🚀 ~ titleText:', titleText);
  const categoryAmount =
    liItemRef[i].lastElementChild.querySelectorAll('li').length;
  console.log('🚀 ~ categoryAmount:', categoryAmount);
}
