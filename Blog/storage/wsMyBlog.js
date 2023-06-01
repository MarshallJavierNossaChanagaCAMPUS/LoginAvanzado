let wsMyBlog = {
    listSection1(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla +=  ` <h2 class="blog-post-title" id="${val.id}" ">${val.title}</h2> <pclass="blog-post-meta">${val.content.date}</p><p>${val.content.paragraph1}</p><p>${val.content.paragraph2}</p><p>${val.content.paragraph3}</p>`
        });
        return plantilla
    },
    listSection2(p1) {
        return `<h2 class="blog-post-title">${p1.title} </h2><pclass="blog-post-meta">${p1.content.date}</p><p>${p1.content.paragraph1}</p> `
    },
    listTable(p1) {
        planTable = "";
        plantilla = `
            <tr>
                <td>Server</td>
                <td>Jugadores</td>
                <td>Ip</td>
            </tr>
        `;
        p1.forEach((val, id) => {
            planTable += `
            <tr>
                <td>${val.server}</td>
                <td>${val.players}</td>
                <td>${val.ip}</td>
            </tr>`
        });
        plant = `<table class="table table-success table-striped table-bordered border-success">${plantilla + planTable}</table>`
        
        return plant;
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyBlog[`${e.data.module}`](e.data.data))
})