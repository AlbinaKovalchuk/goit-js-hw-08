
// Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки,
//  продовжувати відтворювати відео з цього часу.
// 1.Ознайомся з документацією бібліотеки Vimeo плеєра.++
// 2.Додай бібліотеку як залежність проекту через npm.++
// 3.Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.++
// 4.Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// 5.Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// 6.Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// 7.Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

import Player from "@vimeo/player";
import throttle  from  "lodash.throttle";

const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);
console.log (player)

// за допомогою методу on() почали відстежувати подію timeupdate - оновлення часу відтворення.++
player.on('timeupdate', throttle(onPlay,1000));

// Добавлен прослушиватель событий для указанного события. Вызовет обратный вызов с одним параметром, data который содержит данные для этого события. 
function onPlay (event){
        const time = event.seconds;
        localStorage.setItem( "videoplayer-current-time", time);
    };
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
const currentTime = localStorage.getItem("videoplayer-current-time");
const startTime = JSON.parse(currentTime );
 console.log(currentTime);

// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
player.setCurrentTime(currentTime).then(function(seconds) {
 }).catch(function(error) {
     switch (error.name) {
       case 'RangeError':
            break;
        default:
            break;
     }
 });










