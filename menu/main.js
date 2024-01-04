const btn = document.getElementById('btn');
const btnClose = document.getElementById('close');
const list = document.getElementById('list');

btn.addEventListener('click' , ()=>{
    list.style.transform = "translateY(0px)"
    btnClose.style.display = "block"
    btn.style.display = "none"
})
btnClose.addEventListener('click' , ()=>{
    list.style.transform = "translateY(-2000px)"
    btnClose.style.display = "none"
    btn.style.display = "block"
})