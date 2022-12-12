let fields=[];
let currentShape="circle";

function changeCurrentShape(){
    if (currentShape=="cross"){
        currentShape="circle";
        document.getElementById("player-1").classList.add("bg-active");
        document.getElementById("player-2").classList.remove("bg-active");
    }else{
        currentShape="cross";
        document.getElementById("player-2").classList.add("bg-active");
        document.getElementById("player-1").classList.remove("bg-active");
    }
}

function fillShape(i){
   
    changeCurrentShape();
    fields[i]=currentShape;
    console.log(fields);
    draw();
    getWinner();
}

function draw(){
    for (let i=0;i<fields.length;i++){
        if(fields[i]=="cross"){
            document.getElementById("cross"+i).classList.remove("d-none")
        }
        if(fields[i]=="circle"){
            document.getElementById("circle"+i).classList.remove("d-none")
        }
    }
}

function getWinner(){
    let winner;
    if(fields[0]==fields[1] && fields[0]==fields[2]&&fields[0]){
        winner=fields[0];
    }
    if(fields[3]==fields[4] && fields[3]==fields[5]&&fields[3]){
        winner=fields[3];
    }
    if(fields[6]==fields[7] && fields[6]==fields[8]&&fields[6]){
        winner=fields[6];
    }
    if(fields[0]==fields[3] && fields[0]==fields[6]&&fields[0]){
        winner=fields[0];
    }
    if(fields[1]==fields[4] && fields[1]==fields[7]&&fields[1]){
        winner=fields[1];
    }
    if(fields[2]==fields[5] && fields[2]==fields[8]&&fields[2]){
        winner=fields[2];
    }
    if(fields[0]==fields[4] && fields[0]==fields[8]&&fields[0]){
        winner=fields[0];
    }if(fields[2]==fields[4] && fields[2]==fields[6]&&fields[2]){
        winner=fields[2];
    }
    console.log(winner);
}