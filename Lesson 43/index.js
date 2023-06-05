const demo = document.getElementById('demo')


fetch('https://jsonplaceholder.typicode.com/photos')
  .then((a) =>{
    return a.json()
  })
  .then((response) =>{
    let index = 0
    setInterval(() => {
        demo.innerHTML = `<img src="${response[index]['url']}"`
        index++
    },3000)
  });
