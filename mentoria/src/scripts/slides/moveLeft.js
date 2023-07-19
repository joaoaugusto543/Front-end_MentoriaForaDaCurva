function moveLeft(count){

    const slideOne=document.querySelector('.slide1')
    const slideTwo=document.querySelector('.slide2')
    const left=document.querySelector('.left')
    const right=document.querySelector('.right')
  
    if(count===2){
        slideTwo.style='transform: translateX(-200%)'
        slideOne.style='transform: translateX(0%)'
        right.style='opacity:1;cursor:pointer'
        left.style='opacity:0;cursor:default'
    }

}

export default moveLeft