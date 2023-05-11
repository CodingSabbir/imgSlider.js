var picture=['./img/img1.jpg','./img/img2.jpg','./img/img4.jpg','./img/img5.png'];
var index=0;
var imge=document.querySelector('#imge');


function next(){
index++
if(index>=picture.length){
    index=0;
    imge.src=picture[index];
}else{
    imge.src=picture[index];
}

};

function prev(){
    index++
    if(index>=picture.length){
        index=0;
        imge.src=picture[index];
    }else{
        imge.src=picture[index];
    }
    
    };
    
