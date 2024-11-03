const countButton=document.getElementById("count-button");

countButton.addEventListener("click", function(){
    
    const count=document.getElementById("count");

    //span içinde yazılı 0 string olarak gelir.Onu number'a çevirmek gerek.
    
    let countNumber=Number(count.innerHTML);
    
    countNumber++;
    count.innerHTML=countNumber;
   
    if(countNumber===5){
        alert("Git bi dinlen!");
    }
    
    
});

const birdAudioPlay=document.getElementById("birdAudioPlay");

const birdIcon=document.getElementById("birdIcon");

birdIcon.addEventListener("click", function(){
    if(birdAudioPlay.paused){
        birdAudioPlay.play()
        
    }else{
        birdAudioPlay.pause()
    }
})
