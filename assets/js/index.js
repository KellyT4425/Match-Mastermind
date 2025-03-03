document.addEventListener("DOMContentLoaded", setupgame);

const cards = document.querySelectorAll(".card");

function setupgame () {
    cards.forEach((card, index) => {
        card.addEventListener("click", flipcard)
    })

}

function flipcard () {
    this.innerHTML = `<p> Clicked </p>`;
}

