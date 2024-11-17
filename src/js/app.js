function createDiv() {
    let divPole = document.createElement('div');

    divPole.classList = 'pole-game';

    document.querySelector('body').append(divPole);

    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        div.classList = 'pole';
        document.querySelector('.pole-game').append(div);
    }
}

createDiv();


let arr = document.querySelectorAll('.pole');
function intervalGoblin() {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList = 'pole';
    }

    let random = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    arr[random].classList = 'pole goblinPole';
}

setInterval(intervalGoblin, 1500);
