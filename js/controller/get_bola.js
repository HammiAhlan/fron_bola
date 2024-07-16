import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel } from "../../temp/table_bola.js";
export function isiTableBola(results) {
    results.forEach(isiRow);
}

function isiRow(value) {
    let content = 
    isiTabel.replace("#id#", value._id)
            .replace("#nama#", value.nama_pemain)
            .replace("#nama_club#", value.tim.nama_club)
            .replace("#liga#", value.tim.liga)
            .replace("#tahun_berdiri#", value.tim.tahun_berdiri)
            .replace("#stadion#", value.tim.stadion)
            .replace("#manajer#", value.tim.manajer)
            .replace("#logo#", `<img src="${value.tim.logo}"/>`)
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id);
            
        addInner("isiTabel", content);
}




