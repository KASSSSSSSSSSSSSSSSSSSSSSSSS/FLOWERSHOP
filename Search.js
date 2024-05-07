const flowerList = document.getElementById('flowerList');
let flowers = [];

const loadflowers = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        flowers = await res.json();
        displayFlowers(flowers);
    } catch (err) {
        console.error(err);
    }
};

const displayFlowers = (flowers) => {
    const htmlString = flowers
        .map((character) => {
            return `
            <li class="character">
                <h2>${flower.name}</h2>
                
                <img src="${flower.image}"></img>
            </li>
        `;
        })
        .join('');
    flowerList.innerHTML = htmlString;
};

loadflower();