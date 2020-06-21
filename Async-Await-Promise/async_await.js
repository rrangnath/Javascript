
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
let dell = {
    id:1,
    name:'Dell',
    color:'Black'
}



let buyLapy = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dell)
    }, 9000);
})

let buylap2 = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())

function fetch1(){
   //let data = buyLapy;
     this.result1.innerHTML = 'fetching data';
    buyLapy.then(res => {
    console.log(res);
    this.result1.innerHTML = JSON.stringify(res); 
   })
}

async function fetch2(){
    this.result2.innerHTML = 'fetching data...'
    let data = await buyLapy;
    console.log(data);
    this.result2.innerHTML = JSON.stringify(data);
}

function fetch3(){
    this.result3.innerHTML = 'fetching data...'
  
   
    buylap2.then(res =>{
        console.log(res);
        this.result3.innerHTML = JSON.stringify(res);
    })
}

