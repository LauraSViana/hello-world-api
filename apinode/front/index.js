const url = 'http://localhost:3000/'


 fetch(url).then(data => data.json()).then(data => {
  
  document.querySelector('.resp').innerHTML = data.message
  
 
})