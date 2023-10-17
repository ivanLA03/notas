import Delete from "./delete.js"
import Edit from "./edit.js"

export default class List{
    constructor(){
        this.content = document.querySelector(".content")
    }

    noteTemplate(note){
        return `
        <article class="item" id="note-${note.id}">
            <h3 class="title">${note.title}</h3>
            <p class="description">${note.description}</p>

            <button class="edit" data-id="${note.id}">Editar</button>
            <button class="delete" data-id="${note.id}">Borrar</button>
        </article>
        `
    }

    show(notes){
        this.content.innerHTML = ""

        notes.forEach(note => {
            this.content.innerHTML += this.noteTemplate(note)
        });

        Delete()
        Edit()
    }
}