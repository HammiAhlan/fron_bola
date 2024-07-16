import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put.js";


function pushData(){

    let data = {
        nama_pemain : getValue("nama_pemain"),
        tim : {
            nama_club : getValue("nama_club"),
            liga : getValue("liga"),
            tahun_berdiri : getValue("tahun_berdiri"),
            stadion : getValue("stadion"),
            manajer : getValue("manajer"),
            jumlah_pemain : getValue("jumlah_pemain"),
            logo : getValue("logo")
        },
        posisi : parseFloat(getValue("posisi")),
        tinggi : parseFloat(getValue("tinggi")),
        berat : parseFloat(getValue("berat")),
        tanggal_lahir : parseFloat(getValue("tanggal_lahir")),
        negara : parseFloat(getValue("negara")),
        no_punggung : parseFloat(getValue("no_punggung")),
       
      
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);