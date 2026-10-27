function validStatisCode(status){
    if(status>=200 && status<=300){
        console.log("Request is fine");
    }
}

const validStatisCode_Exp= function(status) {
     if(status>=200 && status<=300){
        console.log("Request is fine");
    }
}

const validStatisCode_Arrow=(status)=>{
     if(status>=200 && status<=300){
    console.log("Request is fine");
    }};


  validStatisCode(200)
  validStatisCode_Exp(200)
  validStatisCode_Arrow(200)