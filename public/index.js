document.querySelector(".myin").addEventListener("click",function (){

    var myran1= (Math.floor(Math.random() * 6)) + 1;
    var myran2= (Math.floor(Math.random() * 6)) + 1;
    
    document.getElementById("img1").setAttribute("src","public/images/dice"+myran1+".png");
    document.getElementById("img2").setAttribute("src","public/images/dice"+myran2+".png");
    
    
    if(myran1>myran2){
        document.querySelector(".output").textContent="Player 1 Won!!";
    }
    else if(myran1<myran2){
        document.querySelector(".output").textContent="Player 2 Won!!";
    }
    else
    {
        document.querySelector(".output").textContent="There is a Tie"; 
    }
 

});

