var button = document.querySelector('button');
var input = document.querySelector('input');

button.addEventListener('click',()=>{
    fetch('/status?search='+input.value).then(res=>res.json()).then(data=>console.log(data))
})