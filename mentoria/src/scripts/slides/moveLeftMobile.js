function moveLeftMobile(count){

    const classOne=document.querySelector('.class1')
    const classTwo=document.querySelector('.class2')
    const classThree=document.querySelector('.class3')
    const classFour=document.querySelector('.class4')
    const classFive=document.querySelector('.class5')
    const classSix=document.querySelector('.class6')
    const left=document.querySelector('.leftMobile')
    const right=document.querySelector('.rightMobile')

    if(count===6){
        classSix.style='transform: translateX(-550%)'
        classFive.style='transform: translateX(0%)'
        right.style='opacity:1'
    }

    if(count===5){
        classFive.style='transform: translateX(-550%)'
        classFour.style='transform: translateX(0%)'
    }

    if(count===4){
        classFour.style='transform: translateX(-550%)'
        classThree.style='transform: translateX(0%)'
    }

    if(count===3){
        classThree.style='transform: translateX(-550%)'
        classTwo.style='transform: translateX(0%)'
    }

    if(count===2){
        classTwo.style='transform: translateX(-550%)'
        classOne.style='transform: translateX(0%)'
        left.style='opacity:0'
    }
}

export default moveLeftMobile