import { addInner } from "https://bukulapak.github.io/element/process.js";
import { eusiTabel } from "../../temp/table.js";
export function ngisianTabel(results) {
    hapusTabel()
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
        eusiTabel.replace('<img id="logokieu" src="images/players/player-1.png" alt="" class="w-16 h-16 flex justify-center items-center">', '<img id="logokieu" src="'+ value.tim.logo +'" alt="" class="w-16 h-16 flex justify-center items-center">')
                 .replace('<h2 id="ngaran" class="font-bold">Huaaa</h2>', '<h2 id="ngaran" class="font-bold">'+ value.nama_pemain +'</h2>')
                 .replace('<p id="posisi">Fullstack</p>', '<p id="posisi">'+ value.posisi +'</p>')
        addInner("iniTabel", content);
}

function hapusTabel() {
    document.getElementById("iniTabel").innerHTML = '';
}