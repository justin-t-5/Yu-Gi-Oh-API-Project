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
       imgElement.addEventListener('click', () => openModal(card[i]))
       const img = document.createElement('img');
       img.src = card[i].card_images[0].image_url;
       imgElement.appendChild(img);
       grid.appendChild(imgElement);
    }  }

const modal = document.getElementById('my-modal');

function openModal(card){
    modal.innerHTML ='';
    const name = document.createElement('p');
    name.textContent = card.name;
    const price = document.createElement('p');

    price.textContent = 
    `1) Card Market Price: ${card.card_prices[0].cardmarket_price}
    2) TCGPlayer Price: ${card.card_prices[0].tcgplayer_price}
    3) Ebay Price: ${card.card_prices[0].ebay_price}
    4) Amazon Price: ${card.card_prices[0].amazon_price}
    5) Cool Stuff Inc. Price: ${card.card_prices[0].coolstuffinc_price}`;

    const close = document.createElement('button');
    close.textContent = "Return to Hand";
    close.addEventListener('click', () => {
    modal.close();
    })
    modal.appendChild(name);
    modal.appendChild(price);
    modal.appendChild(close);
     modal.showModal();
}


const form = document.getElementById("cardForm");
const input = document.getElementById("cardInput");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const name = input.value;
    // searchCard(name);
    matchCards(name);
});
