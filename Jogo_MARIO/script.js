const mario = document.querySelector('.mario');
const pipr = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{

    console.log('loop')

    const pipePostition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
    if (pipePostition <= 120 && pipePostition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePostition}px`;

        pipe.style.animation = 'none';
        mario.style.bottom = `${marioPostition}px`;

        mario.src="./mario-jump/game-over.png";
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'´

        clearInterval(loop);
    } 

}, 18);

document.addEventListener('keydown', jump);