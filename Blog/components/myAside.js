import config from "../storage/config.js";

export default {
    workerAside(){

        config.dataMyAside();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")))

        const ws = new Worker("storage/wsMyAside.js");

        let id = [];

        ws.postMessage({module: "showAside", data: this.nav})
        id = ["#nav"];

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector(id).append(...doc.body.children);

            ws.terminate();
        })
    }
}