import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    const storage = new Storage()
    const list = new List()

    let notes_stored = storage.getData()
    let notes_viewed = document.querySelectorAll(".item")

    notes_viewed.forEach(note =>{
        let edit_btn = note.querySelector(".edit")
        
        edit_btn.onclick = function(){
            const id = parseInt(this.getAttribute("data-id"))

            edit_btn.remove()
            note.querySelector(".delete").remove()
 
            let note_edit_html = `
                <div class="edit_form">
                    <h3 class="title">Editar nota</h3>
                    <form>
                        <input type="text" class="edited_title" value="${note.querySelector(".title").innerHTML}" />
                        <textarea class="edited_description" value="${note.querySelector(".description").innerHTML}"></textarea>
                        <input type="submit" class="update" value="Actualizar" />
                    </form> 
                </div>
            `

            note.innerHTML += note_edit_html

            let update_btn = note.querySelector(".update")

            update_btn.onclick = function(e){
                e.preventDefault()
                let index = notes_stored.findIndex(note => note.id === id)

                notes_stored[index] = {
                    id:id,
                    title:note.querySelector(".edited_title").value,
                    description:note.querySelector(".edited_description").value
                }

                storage.save(notes_stored)
                list.show(notes_stored)

                return false
            }
        }
    })
}