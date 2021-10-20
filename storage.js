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
        let elim = null;
        if(id == this._inicio.getId()){
            elim = this._inicio;
            this._inicio = this._inicio.siguiente;
            elim.siguiente = null;
            return(elim);
        }
        let temp = this._inicio;
        while(temp.siguiente != null && elim == null){
            if(temp.siguiente.getId() == id){
                elim = temp.siguiente;
                temp.siguiente = temp.siguiente.siguiente;
                elim.siguiente = null;
            }
            else{
                temp = temp.siguiente;
            }
        }
        return(elim);
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
        if(this._inicio == null){
            return("");
        }
        else{
            return(this._showAll(this._inicio));
        }
    }

    _showAll(n){
        if(n.siguiente == null){
            return(n.info());
        }
        else{
            return(n.info() + "<br>" + this._showAll(n.siguiente));
        }
    }

    showAllInv(){
        if(this._inicio == null){
            return("");
        }
        else{
            return(this._showAllInv(this._inicio));
        }
    }

    _showAllInv(n){
        if(n.siguiente == null){
            return(n.info());
        }
        else{
            return(this._showAllInv(n.siguiente) + "<br>" + n.info());
        }
    }

}