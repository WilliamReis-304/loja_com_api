const breedsContainer = document.getElementById('breeds-container');
const imagesContainer = document.getElementById('images-container');
const errorMessage = document.getElementById('error-message');

// Função para obter a lista de raças da API e criar botões
const fetchBreeds = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breeds = Object.keys(data.message);

        breeds.forEach(breed => {
            const button = document.createElement('button');
            button.innerText = capitalizeFirstLetter(breed);
            button.className = 'breed-button';
            button.onclick = () => fetchBreedImages(breed);
            breedsContainer.appendChild(button);
        });
    } catch (error) {
        errorMessage.innerText = 'Erro ao carregar as raças. Por favor, tente novamente mais tarde.';
    }
};

// Função para obter e exibir imagens de uma raça específica
const fetchBreedImages = async (breed) => {
    try {
        errorMessage.innerText = '';
        imagesContainer.innerHTML = '';
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`);
        const data = await response.json();
        const images = data.message;

        images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `${breed} image`;
            img.className = 'dog-image';
            imagesContainer.appendChild(img);
        });
    } catch (error) {
        errorMessage.innerText = 'Erro ao carregar as imagens. Por favor, tente novamente mais tarde.';
    }
};

// Função para capitalizar a primeira letra de cada raça
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Chamar a função para carregar as raças ao iniciar a aplicação
fetchBreeds();
