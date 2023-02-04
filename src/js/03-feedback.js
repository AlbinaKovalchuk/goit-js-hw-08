// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.
// 1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
//  у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2.Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.
// 3.Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4.Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle  from  "lodash.throttle";

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

const STORAGE_KEY = 'feedback-form-state';


const ref ={
form: document.querySelector('.feedback-form') ,
input:document.querySelector('.feedback-form input') ,
textarea: document.querySelector('.feedback-form textarea'),
}

ref.form.addEventListener ('submit', onFormSubmit);
ref.form.addEventListener ('input', throttle(onTextInput,500));

// 1. получаем значение из хранилища и если там что-то было,обновляем DOM
populateText ()

// получаем значение поля и  сохраняем его в хранилище
//  перед записью в  хранилище забираем данные из хранилища так как у нас  менялось только одно поле
function onTextInput(evt){
    const fromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...fromStorage, [evt.target.name]: evt.target.value }));
    }

// убираем сообщение из хранилища  и   ощищаем форму
function onFormSubmit(evt) {
    // останавливаем поведение по умолчанию
    evt.preventDefault();
    // Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    //  !!!!  доработать код -если поле email пустое, то нельзя отправить форму  
   // очищаем поля формы
     evt.currentTarget.reset()
    //  очищаем хранилища
    localStorage.removeItem(STORAGE_KEY) 
   // есть еще метод localStorage.clear() - повністю очищає ВСІ записи(ключи) сховища. 
}


// получаем значение из хранилища если там что-то было , обновляем DOM
function populateText (){
    const savedformData = localStorage.getItem(STORAGE_KEY);
    // если ключа нет в харнилище по будет null, а null-> fasle( всё остальное к true ) 
    //  если savedformData есть (приводиться к true) то можем  с ним работать -есть какие то данные)
   if (savedformData){ 
        const parsFormData = JSON.parse(savedformData);
        // console.log ('перетворюемо данні на обект:', parsFormData);
        if (parsFormData.email) {ref.input.value = parsFormData.email; }
        if (parsFormData.message) {ref.textarea.value = parsFormData.message;}
}
}