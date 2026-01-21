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

// async function searchCard(name){
//     const card = allCards.filter(card => card.name.toLowerCase().includes(name.toLowerCase()));

//     let cardimg = document.getElementsByTagName('img')[0];
//     let cardimg1 = document.getElementsByTagName('img')[1];
//     let cardimg2 = document.getElementsByTagName('img')[2];
//     let cardimg3 = document.getElementsByTagName('img')[3];
//     let cardimg4 = document.getElementsByTagName('img')[4];


//     let cardname = document.getElementsByTagName('h4')[0];
//     // Set the image source to the card's image URL
//     cardimg.src = card[0].card_images[0].image_url;
//     cardimg1.src = card[1].card_images[0].image_url;
//     cardimg2.src = card[2].card_images[0].image_url;
//     cardimg3.src = card[3].card_images[0].image_url;
//     cardimg4.src = card[4].card_images[0].image_url;

//     cardname.textContent = card[0].name;
// }

async function matchCards(name){
    const grid = document.getElementById('cardGrid');
    grid.innerHTML= '';
    const card = allCards.filter(card => card.name.toLowerCase().includes(name.toLowerCase()));

    for(let i = 0; i<card.length; i++){
       const imgElement = document.createElement('img');
       imgElement.classList.add('cardGrid');
       imgElement.src = card[i].card_images[0].image_url;
       grid.appendChild(imgElement);
    }
    
}

const form = document.getElementById("cardForm");
const input = document.getElementById("cardInput");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const name = input.value;
    // searchCard(name);
    matchCards(name);
});
