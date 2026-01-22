let allCards = [];

async function getCards() {
    const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
    const data = await res.json();

    allCards = data.data;}
getCards();

async function matchCards(name){
    const grid = document.getElementById('cardGrid');
    grid.innerHTML= '';
    const card = allCards.filter(card => card.name.toLowerCase().includes(name.toLowerCase()));

    for(let i = 0; i<card.length; i++){
       const imgElement = document.createElement('a');
       imgElement.classList.add('cardGrid');
       imgElement.addEventListener('click', () => openModal())
       const img = document.createElement('img');
       img.src = card[i].card_images[0].image_url;
       imgElement.appendChild(img);
       grid.appendChild(imgElement);
    }  }

const close = document.getElementById('close');
const modal = document.getElementById('my-modal');

function openModal(){
    modal.showModal();
}

close.addEventListener('click', () => {
    modal.close();
})
const form = document.getElementById("cardForm");
const input = document.getElementById("cardInput");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const name = input.value;
    // searchCard(name);
    matchCards(name);
});
