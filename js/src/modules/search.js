import List from './list.js'
import Storage from './storage.js'

export default function(){
    const storage = new Storage()
    const list = new List()

    let content = document.querySelector(".content")
    let search_btn = document.querySelector(".search_btn")

    search_btn.onclick = (e) => {
        e.preventDefault()

        let searchField = document.querySelector(".search_field").value
        let notes_stored = storage.getData()

        const newNotes = notes_stored.filter(note =>{
            return note.title.toLowerCase().includes(searchField.toLowerCase())
        })

        list.show(newNotes)

        return false
    }
}