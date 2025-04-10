// script.js

// Definir personajes
const characters = [
    { name: "Jeff", gender: "masculino", hat: true, glasses: false, hair: "corto", hairColor: "rubio", image: "jeff.png" },
    { name: "Pedro", gender: "masculino", hat: false, glasses: true, hair: "largo", hairColor: "castano", image: "pedro.png" },
    { name: "Luis", gender: "masculino", hat: true, glasses: true, hair: "corto", hairColor: "rubio", image: "luis.png" },
    { name: "Carlos", gender: "masculino", hat: false, glasses: true, hair: "largo", hairColor: "rubio", image: "carlos.png" },
    { name: "Miguel", gender: "masculino", hat: false, glasses: false, hair: "corto", hairColor: "castano", image: "miguel.png" },
    { name: "David", gender: "masculino", hat: true, glasses: false, hair: "largo", hairColor: "negro", image: "david.png" },
    { name: "Ana", gender: "femenino", hat: false, glasses: false, hair: "corto", hairColor: "rubio", image: "ana.png" },
    { name: "Laura", gender: "femenino", hat: true, glasses: false, hair: "largo", hairColor: "castano", image: "laura.png" },
    { name: "Maria", gender: "femenino", hat: false, glasses: true, hair: "corto", hairColor: "negro", image: "maria.png" },
    { name: "Sofia", gender: "femenino", hat: true, glasses: false, hair: "largo", hairColor: "rubio", image: "sofia.png" },
    { name: "Carla", gender: "femenino", hat: false, glasses: true, hair: "corto", hairColor: "castano", image: "carla.png" },
    { name: "Isabel", gender: "femenino", hat: true, glasses: true, hair: "largo", hairColor: "negro", image: "isabel.png" }
];

function displayCharacters(charactersToDisplay) {
    const container = document.getElementById('characters-container');
    container.innerHTML = '';

    charactersToDisplay.forEach(character => {
        const div = document.createElement('div');
        div.className = 'character';
        div.innerHTML = `
            <img src="img/${character.image}" alt="${character.name}">
            <strong>${character.name}</strong>
            <p>${character.gender}</p>
            <p>Sombrero: ${character.hat ? 'Sí' : 'No'}</p>
            <p>Lentes: ${character.glasses ? 'Sí' : 'No'}</p>
            <p>Pelo: ${character.hair}, ${character.hairColor}</p>
        `;
        container.appendChild(div);
    });
}

// Filtrar personajes que coinciden exactamente con un personaje aleatorio
function nextRound() {
    const random = characters[Math.floor(Math.random() * characters.length)];
    const matching = characters.filter(c =>
        c.hat === random.hat &&
        c.glasses === random.glasses &&
        c.hair === random.hair &&
        c.hairColor === random.hairColor
    );
    displayCharacters(matching);
}

document.getElementById('next-round').addEventListener('click', nextRound);

// Mostrar todos al inicio
displayCharacters(characters);
