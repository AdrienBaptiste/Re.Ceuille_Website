// Script JavaScript
var draggedItem = null;
var dropIndex = -1;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    draggedItem = ev.target;
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragOver(ev) {
    ev.preventDefault();
    var dropContainer = document.getElementById('drop-container');
    var mouseY = ev.clientY - dropContainer.getBoundingClientRect().top;
    var items = dropContainer.querySelectorAll('.item');

    for (var i = 0; i < items.length; i++) {
        var rect = items[i].getBoundingClientRect();
        if (mouseY < rect.top + rect.height / 2) {
            dropIndex = i;
            break;
        }
    }

    if (dropIndex === -1) {
        dropIndex = items.length;
    }

    renderPreview(dropContainer, dropIndex);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dropContainer = ev.target;

    // Si le drop se produit dans la section de dépôt
    if (dropContainer.id === 'drop-container') {
        var items = dropContainer.querySelectorAll('.item');
        if (draggedItem) {
            if (dropIndex > -1) {
                dropContainer.insertBefore(draggedItem, items[dropIndex]);
            } else {
                dropContainer.appendChild(draggedItem);
            }
            draggedItem = null;
            dropIndex = -1;
        }
    } else {
        // Si le drop se produit en dehors de la section de dépôt
        var dragContainer = document.getElementById('drag-container');
        dragContainer.appendChild(draggedItem);
        draggedItem = null;
        dropIndex = -1;
    }

    var preview = document.getElementById('preview');
    if (preview) {
        preview.remove();
    }
}


const imgProfil = document.querySelector(".img_profil");
const imgChristiane = document.querySelector(".img_christiane");
const imgPierrejean = document.querySelector(".img_pierre-jean");
const imgCarmen = document.querySelector(".img_carmen");
const imgManuel = document.querySelector(".img_manuel");
const imgRachel = document.querySelector(".img_rachel");

const txtChristiane = document.querySelector(".txt_christiane");
const txtPierreJean = document.querySelector(".txt_pierre-jean");
const txtCarmen = document.querySelector(".txt_carmen");
const txtManuel = document.querySelector(".txt_manuel");
const txtRachel = document.querySelector(".txt_rachel");


function checkOrder() {
    imgChristiane.classList.add("none");
    imgPierrejean.classList.add("none");
    imgCarmen.classList.add("none");
    imgManuel.classList.add("none");
    imgRachel.classList.add("none");

    txtChristiane.classList.add("none");
    txtPierreJean.classList.add("none");
    txtCarmen.classList.add("none");
    txtManuel.classList.add("none");
    txtRachel.classList.add("none");

    var dropContainer = document.getElementById('drop-container');
    var children = dropContainer.children;
    var order = '';
    for (var i = 0; i < children.length; i++) {
        order += children[i].id;
    }

    switch (order) {
        case 'Pierre-jean':
            imgProfil.classList.toggle("none");
            imgPierrejean.classList.toggle("none");
            txtPierreJean.classList.toggle("none");
            break;
        case 'Ch2ristiane':
            imgProfil.classList.toggle("none");
            imgChristiane.classList.toggle("none");
            txtChristiane.classList.toggle("none");
            break;
        case 'Rachel':
            imgProfil.classList.toggle("none");
            imgRachel.classList.toggle("none");
            txtRachel.classList.toggle("none");
            break;
        case 'Carmen':
            imgProfil.classList.toggle("none");
            imgCarmen.classList.toggle("none");
            txtCarmen.classList.toggle("none");
            break;
        case 'Manuel':
            imgProfil.classList.toggle("none");
            imgManuel.classList.toggle("none");
            txtManuel.classList.toggle("none");
            break;
        default:
            imgProfil.classList.remove("none");
            alert('NON');
    }
}


