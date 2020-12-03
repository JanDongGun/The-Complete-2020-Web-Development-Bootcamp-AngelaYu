var buttons = document.querySelectorAll('.btn');
var h1 = document.getElementById("level-title");
var random;
var level = 1;
var timeClearInterVal;
var autoBtn = [];
var clickBtn = [];

document.addEventListener("keypress", function(e){
    if(e.key === "a"){
        
        h1.textContent = "Level " + level;

        buttons.forEach(button => 
            button.addEventListener('click', function(){   
                stylePressKey(button);
                }))
        

        //////////////
        
        // tu dong click button

        var autoPress =  setInterval(function(){
            random = randomBtn();
            buttons.forEach(button => {
                if(button.classList.contains(random)){
                    button.click();
                    autoBtn.push(random);
                }
            }
        )
        
        }, 1000)


        timeClearInterVal = parseInt(level + "001");

        // Moi level se co tuong ung bao nhiu btn duoc nhan level 2 thi 2 btn dc an
        
        setInterval(function(){
            clearInterval(autoPress);
        }, timeClearInterVal)


        setTimeout(function(){
            buttons.forEach(button => 
                button.addEventListener('click', function(){   
                    stylePressKey(button);
                    clickBtn.push(button.classList[1]);
                    }))
        }, timeClearInterVal)
        // press key
        




        
    }
})




function getSound(btn){
    var source = "sounds/";
    switch (btn) {
        case "red":
            source += "red.mp3";
            break;
        case "blue":
            source += "blue.mp3";
            break;
        case "green":
            source += "green.mp3";
            break;
        case "yellow":
            source += "yellow.mp3";
            break;
    
        default:
            break;
    }

    var audio = new Audio(source);
    audio.play();
}

function randomBtn(){
    var btnClass = "";
    var random = Math.floor(Math.random() * 4 + 1);
    if(random === 1){
        btnClass = "green";
    } else if(random === 2){
        btnClass = "red";
    } else if(random === 3){
        btnClass = "yellow";
    } else{
        btnClass = "blue";
    }

    return btnClass;
}


function stylePressKey(button){
    button.classList.add('pressed');
                    
    setTimeout(function(){
        button.classList.remove('pressed');
    },100)      
            
    getSound(button.classList[1]);
}






