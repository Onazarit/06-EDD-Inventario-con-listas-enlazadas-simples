export default class Storage{
    constructor(){
        this._inicio = null;
    }

    add(nuevo){
        if(this._inicio == null){
            this._inicio = nuevo;
        }
        else{
            this._add(nuevo,this._inicio);
        }
    }

    _add(nuevo,nodo){
        if(nodo.siguiente == null){
            nodo.siguiente = nuevo;
        }
        else{
            this._add(nuevo, nodo.siguiente);
        }
    }

    remove(id){
        let pos = this._storage.findIndex( (p) => {
            if(p.getId() == id){
                return(true);
            }else {
                return(false);
            }
        });
        if(pos >= 0){
            let text = `Se ha removido el producto [${this._storage[pos].getName()}] de la lista`;
            this._storage.splice(pos,1);
            return(text);
        }
        return(null);
    }

    search(id){
        let temp = this._inicio;
        while(temp!=null){
            if(temp.getId() == id){
                return(temp);
            }
            temp = temp.siguiente;
        }
        return null;
    }

    showAll(){
        let text = "Los productos en la lista son: <br>";
        let total = 0;
        let temp = this._inicio;
        while(temp!=null){
            text += `${temp.info()} <br>`;
            total += temp.getTotal();
            temp = temp.siguiente;
        }
        text += `Total = $ ${total}`;
        return(text);
    }

    showAllInv(){
        let text = "Los productos en la lista invertida son: <br>";
        let total = 0;
        this._storage.reverse().forEach((p) => {
            text = text + `[Codigo ${p.getId()}: ${p.getName()} ${p.getQuantity()} unidades, $${p.getPrice()} C/U] <br>`
            total += p.getTotal();
        });
        text += `Total = $ ${total}`;
        this._storage.reverse();
        return(text);
    }

    _exists(id){ // Funcion para que al añadir revise que no haya un producto con mismo ID
        let aux = false;
        this._storage.forEach((p) =>{
            if(p.getId() == id){
                aux = true;
            }
        });
        return(aux);
    }

    _sortStorage(){
        if(this._storage.length >= 2){
            for(let i = 1; i<this._storage.length; i++){
                for(let j = this._storage.length-1; j>=i;j--){
                    console.log(this._storage[j-1]);
                    if(this._storage[j-1].getId() > this._storage[j].getId()){
                        let aux = this._storage[j-1];
                        this._storage[j-1] = this._storage[j];
                        this._storage[j] = aux;
                    }
                }
            }
        }
    }

}