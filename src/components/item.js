
class Item {
    

    constructor(text){
        let lastId = Math.floor(Date.now() * Math.random()).toString(36)
        this.id = lastId ;
        this.text = text;
        this.done = false;
    }
}
export default Item