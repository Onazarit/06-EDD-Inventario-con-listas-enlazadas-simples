import Product from "./product.js";
import Storage from "./storage.js";

class Main{
    constructor(){
        const btnAdd = document.getElementById("btnAdd");
        const btnDelete = document.getElementById("btnDelete");
        const btnSearch = document.getElementById("btnSearch");
        const btnShowAll = document.getElementById("btnShowAll");
        const btnShowAllInv = document.getElementById("btnShowAllInv");
        const btnAddOnPos = document.getElementById("btnAddOnPos");

        this._storage = new Storage();

        btnAdd.addEventListener('click', this._addToList);
        btnDelete.addEventListener('click', this._removeFromList);
        btnSearch.addEventListener('click', this._searchFromList);
        btnShowAll.addEventListener('click', this._ShowAll);
        btnShowAllInv.addEventListener('click', this._ShowAllInv);
        btnAddOnPos.addEventListener('click', this._addOnPosition);
    }

    sendMessage(tipo,text){
        let detalles = document.getElementById("detalles");
        detalles.innerHTML=`
            <h2>${tipo}</h2>
            <p>${text}
        `;
    }

    _addToList = () => {
        let codigo = document.getElementById("id").value;
        let nombre = document.getElementById("name").value;
        let cantidad = document.getElementById("quantity").value;
        let precio = document.getElementById("price").value;

        let producto = new Product(codigo,nombre,cantidad,precio);
        
        this._storage.add(producto);

        this.sendMessage("Añadir",`Registro completo, se añadieron: [${producto.getQuantity()} unidades de ${producto.getName()} a ${producto.getPrice()} C/U]`);
    }

    _removeFromList = () => {
        let codigo = document.getElementById("id").value;
        let result = this._storage.remove(codigo);
        if(result == null){
            this.sendMessage("Eliminar",`No se encontro un producto con el codigo ${codigo}`);
        }else{
        let text = `Se elimino: <br> ${result.info()}`
        this.sendMessage("Eliminar",text);
        }
    }

    _searchFromList = () => {
        let codigo = document.getElementById("id").value;
        let result = this._storage.search(codigo);
        if(result == null){
            this.sendMessage("Buscar",`No se encontro un producto con el codigo ${codigo}`);
        }
        let text = `Se encontro: <br> ${result.info()}`
        this.sendMessage("Buscar",text);
    }

    _ShowAll = () => {
        let text = this._storage.showAll();
        if(text == ""){
            this.sendMessage("Mostrar","No se encontro nada en la lista")
        }
        else{
            this.sendMessage("Mostrar",`Los productos encontrados fueron: <br>` + text);
        }
    }

    _ShowAllInv = () => {
        let text = this._storage.showAllInv();
        if(text == ""){
            this.sendMessage("Mostrar Invertido","No se encontro nada en la lista")
        }
        else{
            this.sendMessage("Mostrar Invertido",`Los productos encontrados fueron: <br>` + text);
        }
    }

    _addOnPosition = () => {
        let codigo = document.getElementById("id").value;
        let nombre = document.getElementById("name").value;
        let cantidad = document.getElementById("quantity").value;
        let precio = document.getElementById("price").value;

        let producto = new Product(codigo,nombre,cantidad,precio);

        let position = document.getElementById("position").value;
        
        this._storage.addOnPosition(position,producto);

        this.sendMessage("Añadir en posición",`El producto ${producto.info()} se añadio en la posición ${position} <br> Revisalo con el botón "Recuperar los productos"`);
    }
    
}

new Main();