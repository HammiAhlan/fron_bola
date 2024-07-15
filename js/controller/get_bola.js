import { addInner } from "https://bukulapak.github.io/element/process.js";
import { eusiBola } from "../../temp/table_bola.js";
export function ngisiTabel(results) {
    hapusTabel()
    results.forEach(isitable);
}
function isitable(value){
    let content = 
    eusiBola.replace('<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="id">1</td>', '<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="id">' + value._id + '</td>')
            .replace('<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="nama">John Doe</td>', '<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="nama">' + value.nama_pemain + '</td>')
            .replace('<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="club">John Doe</td>', '<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="club">' + value.tim.nama_club + '</td>')
            .replace('<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="liga">John Doe</td>', '<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="liga">' + value.tim.liga + '</td>')
            .replace('<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="tahun">John Doe</td>', '<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="tahun">'+ value.tim.tahun_berdiri + '</td>')
            .replace('<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="stadion">John Doe</td>', '<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="stadion">' + value.tim.stadion + '</td>')
            .replace('<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="manajer">John Doe</td>', '<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="manajer">' + value.tim.manajer + '</td>')
            .replace('<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="logo"><img src="timmy"></td>', '<td class="px-6 py-4 whitespace-nowrap border-b border-gray-200" id="logo"><img src="' + value.tim.logo + '"></td>')
        addInner("eusitable", content);
}

function hapusTabel() {
    document.getElementById("eusitable").innerHTML = '';
}