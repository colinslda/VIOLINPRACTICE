document.addEventListener("DOMContentLoaded", loadPieces);

function addPiece() {
    let pieceInput = document.getElementById("pieceInput");
    let pieceName = pieceInput.value.trim();
    
    if (pieceName) {
        let pieces = JSON.parse(localStorage.getItem("pieces")) || [];
        pieces.push({ name: pieceName, notes: "" });
        localStorage.setItem("pieces", JSON.stringify(pieces));
        
        pieceInput.value = "";
        loadPieces();
    }
}

function loadPieces() {
    let pieceList = document.getElementById("pieceList");
    pieceList.innerHTML = "";

    let pieces = JSON.parse(localStorage.getItem("pieces")) || [];

    pieces.forEach((piece, index) => {
        let li = document.createElement("li");
        
        let title = document.createElement("h3");
        title.textContent = piece.name;

        let textarea = document.createElement("textarea");
        textarea.value = piece.notes;
        textarea.oninput = () => updateNotes(index, textarea.value);

        li.appendChild(title);
        li.appendChild(textarea);
        pieceList.appendChild(li);
    });
}

function updateNotes(index, notes) {
    let pieces = JSON.parse(localStorage.getItem("pieces"));
    pieces[index].notes = notes;
    localStorage.setItem("pieces", JSON.stringify(pieces));
}
