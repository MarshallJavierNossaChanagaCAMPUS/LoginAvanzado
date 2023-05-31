import config from "../storage/config.js";

export default {
    worker(){
        //llamamos al config los datos de my header
        config.dataMyHeader();
        //parseamos el json y asignamos la data del config
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader")))
        //Creamos el worker
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});
        //enviamos un mensaje al worker
        let id = [];
        let count = 0;
        //Aqui metemos title en la variable id
        ws.postMessage({module: "listTitle", data: this.title});
        //Aqui metemos games en la variable id
        ws.postMessage({module: "listarGames", data: this.games});
        id=["#title", "#games"];

        //Aqui recibimos el mensaje del worker
        ws.addEventListener("message", (e)=>{
            //recorremos o parseamos lo que trae el evento mensaje
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            //metemos en el index en el selector
            document.querySelector(id[count]).append(...doc.body.children);
            //terminamos el proceso del worker
            (id.length-1==count) ? ws.terminate(): count++;
        })
    }
};
