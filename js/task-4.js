// Напиши скрипт управління формою логіна.

const loginFormRef = document.querySelector('.login-form');
loginFormRef.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = loginFormRef.elements.email.value.trim();
  const passwordValue = loginFormRef.elements.password.value.trim();

  if (inputValue && passwordValue) {
    const formData = { email: inputValue, password: passwordValue };
    console.log(formData);

    loginFormRef.reset();
    return;
  }
  alert('All form fields must be filled in');
});

// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// На що буде звертати увагу ментор при перевірці:

// Прослуховується подія submit
// Під час відправлення форми сторінка не перезавантажується
// Якщо при сабміті у формі є незаповнені поля, виводиться alert
// При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
// Після сабміту елементи форми очищаються