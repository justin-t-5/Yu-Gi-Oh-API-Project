let allCards = [];

async function getCards() {
    const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
    const data = await res.json();

    allCards = data.data;
    // Filter for Dark Magician
    // const result = data.data.filter(card => card.name.includes("Dark Magician"));

    // // Get the first <img> tag on the page
    // let cardimg = document.getElementsByTagName('img')[0];
    // let cardname = document.getElementsByTagName('h4')[0];
    // // Set the image source to the card's image URL
    // cardimg.src = result[0].card_images[0].image_url;
    // cardname.textContent = result[0].name;
}
getCards();

async function searchCard(name){
    const card = allCards.filter(card => card.name.toLowerCase().includes(name.toLowerCase()));

    let cardimg = document.getElementsByTagName('img')[0];
    let cardname = document.getElementsByTagName('h4')[0];
    // Set the image source to the card's image URL
    cardimg.src = card[0].card_images[0].image_url;
    cardname.textContent = card[0].name;
}

const form = document.getElementById("cardForm");
const input = document.getElementById("cardInput");
// const form = document.getElementById("cardForm");
// const input = document.getElementById("cardInput");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const name = input.value;
    searchCard(name);
});
