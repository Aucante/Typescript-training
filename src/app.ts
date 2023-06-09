const compteur = <HTMLButtonElement>document.querySelector('#compteur');

let i = 0;

const increment = function (e: Event) {
    i++;
    const span = compteur.querySelector('span');

    if (span) {
        span.innerText = i.toString();
    }
}
compteur.addEventListener('click', increment);