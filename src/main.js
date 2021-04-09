const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')

//捕获是从外层向内层走，有就执行，true
//冒泡是从内层向外层走，有就执行，false或者不写
//先捕获后冒泡

let n = 1
const fn = (e) => {
    const t = e.currentTarget
    setTimeout(()=>{
        t.classList.remove('x')
    },1000*n)
   n += 1
}

const fm = (e) => {
    const t = e.currentTarget
    setTimeout(()=>{
        t.classList.add('x')
    },1000*n)
   n += 1
}

level1.addEventListener('click',fn,true)
level1.addEventListener('click',fm,false)

level2.addEventListener('click',fn,true)
level2.addEventListener('click',fm,false)

level3.addEventListener('click',fn,true)
level3.addEventListener('click',fm,false)

level4.addEventListener('click',fn,true)
level4.addEventListener('click',(e)=>{
    //举例说明，阻止冒泡stopPropagation()
    e.stopPropagation()
    fm(e)
},false)

level5.addEventListener('click',fn,true)
level5.addEventListener('click',fm,false)

level6.addEventListener('click',fn,true)
level6.addEventListener('click',fm,false)

level7.addEventListener('click',fn,true)
level7.addEventListener('click',fm,false)
