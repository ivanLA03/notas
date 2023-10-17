import Storage from "./storage.js"
import List from "./list.js"

export default class Add {
    constructor(){
        this.storage = new Storage()
        this.list = new List()

        this.title = document.querySelector(".add_title")
        this.description = document.querySelector(".add_description")
        this.save = document.querySelector(".add_save")
    }

    noteSave(){
        this.save.onclick = (e) =>{
            e.preventDefault()

            let notes = this.storage.getData()
            let lastId = this.storage.getLastId()

            let title = this.title.value
            let description = this.description.value
            if(title == "" || description == ""){
                alert("te faltar rellenar datos")
                return false
            }
            let note = {
                id: lastId++,
                title,
                description
            }

            notes.push(note)

            this.storage.save(notes)

            this.list.show(notes)
            return false
        }
    }
}