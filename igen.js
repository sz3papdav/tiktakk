let player = 'X';
const gridItems = document.querySelectorAll('.cellak');

function katt(row, col) {
    const index = row * 3 + col;
    if (gridItems[index].textContent === '') {
        gridItems[index].textContent = player;
        player = player === 'X' ? 'O' : 'X';
    }
}

function torles() {
    gridItems.forEach(item => item.textContent = '');
    console.log('Négyzetrács törlődött, és a háttérszín megváltozott.');
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const row = Math.floor(index / 3) + 1;
        const col = index % 3 + 1;
        console.log(`Kattintás volt a ${row}. sor ${col}. oszlopában.`);
    });
});