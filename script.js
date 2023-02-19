const student = "Ромашов Владимир Владимирович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

const errchance = 20; // Шанс 20% на дроп ошибки
function throwRandowError(errot) {
    errcat = (Math.random()* 100).toFixed()
    if(errot >= errcat) {
        throw new Error('Произошла ошибка, пожалуйста перезагрузите страницу') // 20 процентов прокнуло
    }
}

try {
    throwRandowError(errchance)
    console.log('Всё в порядке, приложение работает в штатном режиме') // Не прокнуло :с
}
catch (errchance) {
    console.log(`${errchance.message}`)
}