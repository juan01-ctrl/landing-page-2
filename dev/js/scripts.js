//  let firstScroll = window.pageYOffset;


//  window.addEventListener('scroll', ()=>{
//      const actualScroll = window.pageYOffset;
//       const header = document.getElementById('header')
     
//       if(firstScroll >= actualScroll){
//           header.style.top = '0';
//         }else{
//             header.style.top = '-100px';
//         }
//         if(actualScroll < 730){
//           header.style.top = '0';
//         }
//         firstScroll = actualScroll;
//  })
const menuBtn = document.getElementById('menu-btn')


menuBtn.addEventListener('click', (e)=>{
  const menu = document.getElementById('menu')

  menuBtn.firstElementChild.classList.toggle('none')
  menuBtn.lastElementChild.classList.toggle('none')
  menu.classList.toggle('active')

})

document.addEventListener('click',e=>{
    if(!e.target.matches('.menu-item')) return false;
        menuBtn.firstElementChild.classList.remove('none')
        menuBtn.lastElementChild.classList.add('none')
        menu.classList.remove('active')
   
})
