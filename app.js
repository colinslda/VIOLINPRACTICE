// Gestion des pièces
const pieceForm = document.getElementById('pieceForm');
const pieceInput = document.getElementById('pieceInput');
const piecesList = document.getElementById('piecesList');

// Gestion des notes
const notesInput = document.getElementById('notesInput');
const notesDisplay = document.getElementById('notesDisplay');

// Chargement initial
loadData();

pieceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addPiece(pieceInput.value);
    pieceInput.value = '';
});

function addPiece(pieceName) {
    const li = document.createElement('li');
    li.innerHTML = `
        ${pieceName}
        <button onclick="this.parentElement.remove(); saveData();">✓</button>
    `;
    piecesList.appendChild(li);
    saveData();
}

function saveNotes() {
    localStorage.setItem('violonNotes', notesInput.value);
    notesDisplay.textContent = notesInput.value;
    notesInput.value = '';
    loadNotes();
}

function loadData() {
    // Charger les pièces
    const savedPieces = localStorage.getItem('violonPieces');
    if (savedPieces) {
        piecesList.innerHTML = savedPieces;
    }
    
    // Charger les notes
    loadNotes();
}

function loadNotes() {
    const savedNotes = localStorage.getItem('violonNotes');
    if (savedNotes) {
        notesDisplay.textContent = savedNotes;
    }
}

function saveData() {
    localStorage.setItem('violonPieces', piecesList.innerHTML);
}

function clearData() {
    if (confirm('Êtes-vous sûr de vouloir tout effacer ?')) {
        localStorage.clear();
        piecesList.innerHTML = '';
        notesDisplay.textContent = '';
    }
}
