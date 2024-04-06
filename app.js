var listMouses = document.querySelectorAll('.mouse');
var score_game = document.querySelector('.game_score span');
var time_game = document.querySelector('.game_time span');
var message_end_game = document.querySelector('.message--span');
var formElement =document.getElementById('form-level');
var selectElement = document.getElementById('choose-level')
var startGame = document.getElementById('btnSubmit');
var articleElement = document.querySelector('article');



var index_mouse = 0 ;
var score = 0;
var time = 0;
var speed = 0;
var level = 0;
var animationTime = "1s";
var temp = 0;
startGame.onclick = ()=>{
    level = selectElement.value;
    if(level === "1"){
        time = 10;
        speed = 1500;
        animationTime = "1s";
        temp = 500;
    }else if(level === "2"){
        time = 20;  
        speed = 1200;
        animationTime = "0.9s";
        temp = 300;
    } else if(level ==="3"){
        time = 30;
        speed = 1000;
        animationTime = '0.5s';
        temp = 500;
    }

    time = 30;
    formElement.style.display = 'none';
    articleElement.style.display = 'block'
    var displayTime = speed-temp;

    var play_game = setInterval(function(){

        index_mouse = Math.floor(Math.random() * 100 ) + 1 ;
        listMouses[index_mouse].classList.add('mouse_animation'); 
        listMouses[index_mouse].style.animationDuration = animationTime;

        var display = setTimeout(function(){
            listMouses[index_mouse].classList.remove('mouse_animation');
        }, displayTime);

        listMouses[index_mouse].onclick = ()=>{
            if(listMouses[index_mouse].classList.contains('mouse_animation')){
                listMouses[index_mouse].classList.remove('mouse_animation');
                score = score + 1;
                score_game.innerHTML = score; 
            }
            clearTimeout(display);
            listMouses[index_mouse].onclick= {};
        }
    }, speed);

    var end_game = setInterval(function(){
        if(time === 0){
            clearInterval(play_game);
            clearInterval(end_game);
            message_end_game.classList.add('isGameOver');
            message_end_game.innerHTML = `Score: ${score }`;
        }
        time_game.innerHTML = time + "s";
        time--;
    }, 1000)

}




 




