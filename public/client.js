var button = document.querySelector('button');
var input = document.querySelector('input');

button.addEventListener('click',()=>{
    fetch('http://localhost:3000/status?search='+input.value).then(res=>res.json()).then(data=>console.log(data))
})