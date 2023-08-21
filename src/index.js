// for(var i =0;i<(document.getElementsByClassName("conatiner").length);i++){
//     document.querySelectorAll(".song")[i].addEventListener("click" ,function(){
//         var element=this.classList[2];   
      
        // console.log(element);
//     });
// }
let audio = new Audio;
$(".song").click(function (event) { 

    var ele = this.className;
    var elem = ele[12]+ele[13];
    // console.log(this.className[10])
    console.log(elem)

    // if(audio){
    //     audio.pause();
    // }

    if(elem==="ho"){
        // var audio = new Audio("../audio/"+elem+".ogg");
        audio.src="../audio/"+elem+".ogg";
    }else{
    // var audio = new Audio("../audio/"+elem+".mp3");
    audio.src = "../audio/"+elem+".mp3"
    }
    audio.play();

});