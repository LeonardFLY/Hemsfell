document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-blue');
    const totalCards = 200; // Substitua pelo número total de cartas

    const folders = [
        'Verde/Campeões', 'Verde/Criatura', 'Verde/Feitiço', 'Verde/Feitiço acelerado', 'Verde/Encanto', 'Verde/Artefato', 'Verde/Terreno Cruel',
        
        'Roxo/Campeões', 'Roxo/Criatura', 'Roxo/Feitiço', 'Roxo/Feitiço acelerado', 'Roxo/Encanto', 'Roxo/Artefato', 'Roxo/Terreno Cruel',
        
        'Azul/Campeões', 'Azul/Criatura', 'Azul/Feitiço', 'Azul/Feitiço acelerado', 'Azul/Encanto', 'Azul/Artefato', 'Azul/Terreno Cruel',
        
        'Vermelho/Campeões', 'Vermelho/Criatura', 'Vermelho/Feitiço', 'Vermelho/Feitiço acelerado', 'Vermelho/Encanto', 'Vermelho/Artefato', 'Vermelho/Terreno Cruel',
        
        'Neutro/Campeões', 'Neutro/Criatura', 'Neutro/Feitiço', 'Neutro/Feitiço acelerado', 'Neutro/Encanto', 'Neutro/Artefato', 'Neutro/Terreno Cruel',
        
        'Multi/Campeões', 'Multi/Criatura', 'Multi/Feitiço', 'Multi/Feitiço acelerado', 'Multi/Encanto', 'Multi/Artefato', 'Multi/Terreno Cruel'
    ];

    let cardIndex = 1;

    folders.forEach(folder => {
        for (let i = 1; i <= totalCards; i++) {
            const cardPath = `Cartas Tabletopia/${folder}/Carta (${i}).png`;
            const img = new Image();
            img.src = cardPath;
            img.onload = () => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `<img src="${cardPath}" alt="Carta ${cardIndex}">`;
                cardContainer.appendChild(card);
                cardIndex++;
            };
        }
    });

    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const closeModal = document.querySelector('.close');

    cardContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            modal.style.display = 'flex';
            modalImg.src = e.target.src;
        }
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

cardContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
    modal.style.display = 'flex';
    modalImg.src = e.target.src;
    currentImageIndex = Array.from(cardContainer.children).indexOf(e.target.parentNode); // Encontrar o índice da imagem clicada
    }
});

// Botões de navegação
const prevButton = document.createElement('button');
prevButton.classList.add('prev-button');
prevButton.textContent = '<';
const nextButton = document.createElement('button');
nextButton.classList.add('next-button');
nextButton.textContent = '>';

modal.appendChild(prevButton);
modal.appendChild(modalImg);
modal.appendChild(nextButton);

prevButton.addEventListener('click', () => {
currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = totalCards - 1; // Voltar para a última imagem
    }
modalImg.src = cardContainer.children[currentImageIndex].querySelector('img').src;
});

nextButton.addEventListener('click', () => {
currentImageIndex++;
    if (currentImageIndex >= totalCards) {
        currentImageIndex = 0; // Ir para a primeira imagem
    }
modalImg.src = cardContainer.children[currentImageIndex].querySelector('img').src;
});
});