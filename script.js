// function getMenu(){
// fetch("https://free-food-menus-api-production.up.railway.app/burgers")
// .then((response)=> response.json())
// .then((data)=>{
//     console.log("DATA>>>>",data);  
//     return data.json();
// });
let mydiv = document.getElementById("flex-container")
let some;
let promise1 = new Promise((resolve,reject)=>{ 
    return fetch(" https://free-food-menus-api-production.up.railway.app/burgers")
            .then((response)=>response.json())
            .then((data)=>{
               some=data
                const newElement = document.createElement('div')
              newElement.className = 'myclass'
              const resInfo = data.map((item)=>{
                return `
              <img class="image" src="${item.img}">
            <p> ${item.dsc}
            <p class="name">MEAL -- ${item.name}</p>
            <p class="name">PRICE -- ${item.price}</p>
                `;
              })
              newElement.innerHTML=resInfo
                mydiv.appendChild(newElement)         
            })
        })
    let selectedmeal;
        promise1.then((res)=>{
            setTimeout(() => {
                function takeorder(){
                   console.log(some)
                }
            },);
        })



