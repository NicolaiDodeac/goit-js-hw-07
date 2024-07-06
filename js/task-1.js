// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

// На що буде звертати увагу ментор при перевірці:

// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
// У консолі має бути виведено наступне повідомлення:

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
