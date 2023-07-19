function moveRight(count){

    const slideOne=document.querySelector('.slide1')
    const slideTwo=document.querySelector('.slide2')
    const left=document.querySelector('.left')
    const right=document.querySelector('.right')
  
    if(count===1){
        slideOne.style='transform: translateX(200%)'
        slideTwo.style='transform: translateX(0%)'
        left.style='opacity:1;cursor:pointer'
        right.style='opacity:0;cursor:default'
    }

}

export default moveRight