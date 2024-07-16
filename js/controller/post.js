import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post.js";


function pushData(){
    var namapemain = getValue("namapemain");

    let data = {
        namapemain : getValue("namapemain"),
        tim : {
            namapemain : getValue("namapemain"),
            nama_club : getValue("nama_club"),
            liga : [{
                tahun_berdiri : parseInt(getValue("tahun_berdiri")),
                stadion : getValue("stadion"),
                manajer : getValue("manajer"),
                logo : getValue(""),

            }],
            namapemain : namapemain.split(",")
        }
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);