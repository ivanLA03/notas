import Storage from "./storage.js"
import List from "./list.js";

export default function(){
    const storage = new Storage()
    const list = new List()

    let NoteStored = storage.getData()
    let noteViewed = document.querySelectorAll(".item")

    noteViewed.forEach(note =>{
        let delete_btn = note.querySelector(".delete")

        delete_btn.onclick = function(){
            const note_id = this.getAttribute("data-id")

            const newNotesStored = NoteStored.filter(note => note.id !== parseInt(note_id))

            storage.save(newNotesStored)
            list.show(newNotesStored)
        }
    })
}