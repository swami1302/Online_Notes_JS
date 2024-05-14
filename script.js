const notesContainer = document.querySelector('.notes-container');
const btn = document.querySelector('.btn');

function showStorage() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

showStorage();

btn.addEventListener('click', () => {
    const input = document.createElement('p');
    input.setAttribute('class', 'input-box');
    input.setAttribute('contenteditable', 'true');
    const img = document.createElement('img');
    img.src = './images/delete.png';
    img.alt = 'delete icon';
    notesContainer.appendChild(input).appendChild(img);
    updateStorage();
});

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
    } else if (e.target.tagName === 'P') {
        const notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = () => {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})