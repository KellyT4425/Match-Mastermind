document.addEventListener("DOMContentLoaded", setupgame);


function setupgame () {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.addEventListener("click", flipcard);
    });

}

function flipcard () {
    this.innerHTML = `<p> Clicked </p>`;
}

