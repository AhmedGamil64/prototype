let main_imge=document.getElementById("ds");
let imges=document.querySelectorAll('.imges')
for(let i=0;i<imges.length;i++){
    imges[i].onmouseover=()=>{
        main_imge.src=imges[i].src;
}

}