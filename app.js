var listMouses = document.querySelectorAll('.mouse');
var score_game = document.querySelector('.game_score span');
var time_game = document.querySelector('.game_time span');
var message_end_game = document.querySelector('.message--span');
var index_mouse = Math.floor(Math.random() * 100 ) + 1 ;
var score = 0;
var time = 10;




var play_game = setInterval(function(){
    index_mouse = Math.floor(Math.random() * 100 ) + 1 ;
    listMouses[index_mouse].classList.add('mouse_animation');
    if(listMouses[index_mouse].classList.contains('mouse_animation')){
        listMouses[index_mouse].onclick = ()=>{
            isCheck = true;
            listMouses[index_mouse].classList.remove('mouse_animation');
            if(!listMouses[index_mouse].classList.contains('mouse_animation')){
                score = score + 1;
                score_game.innerHTML = score;
                listMouses[index_mouse].onclick = {};
            }
        }
    }
    setTimeout(function(){
        if(listMouses[index_mouse].classList.contains('mouse_animation')){
            let index_current = index_mouse;
            listMouses[index_current].classList.remove('mouse_animation');
        }
    }, 1900)
}, 2000);

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

 




