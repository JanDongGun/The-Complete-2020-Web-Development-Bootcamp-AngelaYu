var buttons = document.querySelectorAll("button");

buttons.forEach(button => 
    button.addEventListener("click", function(){
        playAudio(this.classList[0]);
        btnAnimation(this.classList[0]);

    })
)

document.addEventListener('keypress', function(e){
    playAudio(e.key);
    btnAnimation(e.key);
})

function playAudio(listener){
    var audioSource = "sounds/";
    switch (listener) {
        case "w":
            audioSource = audioSource + "tom-1.mp3";
            break;
        case "a":
            audioSource = audioSource + "tom-2.mp3";
            break;
        case "s":
            audioSource = audioSource + "tom-3.mp3";
            break;
        case "d":
            audioSource = audioSource + "tom-4.mp3";
            break;
        case "j":
            audioSource = audioSource + "snare.mp3";
            break;
        case "k":
            audioSource = audioSource + "crash.mp3";
            break;
        case "l":
            audioSource = audioSource + "kick-bass.mp3";
            break;

        default:
            break;
    }

    var audio = new Audio(audioSource);
    audio.play();
}

function btnAnimation(keyCLass){
    var activeBtn = document.querySelector("." + keyCLass);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}
