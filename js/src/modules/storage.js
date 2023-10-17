export default class Storage{
    constructor(){
        this.id = 1
    }

    getData(){
        let notes = JSON.parse(localStorage.getItem("notes"))

        if(!notes || notes.length < 1){
            notes = [
                {
                    id:0,
                    title:"Titulo",
                    description:"Descripción"
                }
            ]
            this.id = 1
            return notes
        }
        this.id = notes[notes.length - 1].id +1
        return notes
    }

    getLastId(){
        return this.id
    }

    save(data){
        localStorage.setItem('notes', JSON.stringify(data))
    }

}