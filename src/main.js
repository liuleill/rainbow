const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')

let n = 1

level1.addEventListener('click',(e)=>{
    const t = e.currentTarget
    setTimeout(()=>{
        t.classList.remove('x')
    },1000*n)
   n += 1
},false)

level2.addEventListener('click',(e)=>{
    const t = e.currentTarget
    setTimeout(()=>{
        t.classList.remove('x')
    },1000*n)
   n += 1
},false)

level3.addEventListener('click',(e)=>{
    const t = e.currentTarget
    setTimeout(()=>{
      t.classList.remove('x')
    },1000*n)
   n += 1
},false)

level4.addEventListener('click',(e)=>{
    const t = e.currentTarget
    setTimeout(()=>{
        t.classList.remove('x')
    },1000*n)
   n += 1
},false)

level5.addEventListener('click',(e)=>{
    const t = e.currentTarget
    setTimeout(()=>{
       t.classList.remove('x')
    },1000*n)
   n += 1
},false)

level6.addEventListener('click',(e)=>{
    const t = e.currentTarget
    setTimeout(()=>{
       t.classList.remove('x')
    },1000*n)
   n += 1
},false)

level7.addEventListener('click',(e)=>{
    const t = e.currentTarget
    setTimeout(()=>{
        t.classList.remove('x')
    },1000*n)
   n += 1
},false)
