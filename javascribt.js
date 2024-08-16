var upp = document.querySelector(".fa-arrow-up")
var shop = document.querySelector(".sohp")
var closses = document.querySelector(".fa-xmark")
var oping = document.querySelector(".fa-cart-shopping")
var fa_bars = document.querySelector(".fa-bars")
var ull = document.querySelector(".ul")
var sohp = document.querySelector(".caard")
// var detals = document.querySelector(".p2")
var botm = document.querySelector(".botm span")
var manyee = document.querySelector(".manye")








window.onscroll = function(){
    if(window.scrollY > 600){
        upp.style.display = "flex"
    }else{
        upp.style.display = "none"
        
    }
}
upp.addEventListener("click" , function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })


})
oping.addEventListener("click" , function(){
    shop.classList.remove("colsis")
})



closses.addEventListener("click" , function(){
    shop.classList.add("colsis")
})




fa_bars.addEventListener("click" , function(){ ull.classList.toggle("toggell"), this.classList.toggle("toggel")});


var proadict = [{
    id : 1,
    img:"images/plate-1.png",
    namee:"Russian Salad",
    discawnt: 130,
    praice: 147,
    nmabar: 0,
},
{
    id : 2,
    img:"images/plate-2.png",
    namee:"Croissant Salad",
    discawnt: 120 ,
    praice:135,
    nmabar: 0,
},
{   
     id : 3,
    img:"images/plate-3.png",
    namee:"green Salad",
    discawnt: 110,
    praice:130,
    nmabar: 0,
},
{
    id : 4,
    img:"images/1.jpg",
    namee:"pants",
    discawnt: 230,
    praice:250,
    nmabar: 0,
},
{
    id : 5,
    img:"images/2.jpg",
    namee:"shoes",
    discawnt: 200,
    praice:220,
    nmabar: 0,
},
{
    id : 6,
    img:"images/3.jpg",
    namee:"T-shirt",
    discawnt: 290,
    praice:330,
    nmabar: 0,
},
{
    id : 7,
    img:"images/4.jpg",
    namee:"socks",
    discawnt: 30,
    praice:60,
    nmabar: 0,
},
{
    id : 8,
    img:"images/5.jpg",
    namee:"Wrist Watches",
    discawnt: 190,
    praice:230,
    nmabar: 0,
},
{
    id : 9,
    img:"images/6.jpg",
    namee:"Wrist Watches",
    discawnt: 220,
    praice:260,
    nmabar: 0,
},
{
    id : 10,
    img:"images/7.jpg",
    namee:"shoes",
    discawnt: 300,
    praice:330,
    nmabar: 0,
},
{
    id : 11,
    img:"images/8.jpg",
    namee:"shoes",
    discawnt: 200,
    praice:220,
    nmabar: 0,
},
]










// function setProadct(){
// var ittme = ""

// for( var i = 0 ; i < proadict.length ; i++ ){
//  ittme += ` 
//     <div class="p3">
//     <img src=${proadict[i].img} alt="">
//     <div>
//      <p>${proadict[i].namee}</p>
//      <b>$${proadict[i].discawnt}  <span> $${proadict[i].praice}</span></b>
//     </div>
//     <button onclick="addToCart(${i})" >Add To Cart</button>
// </div>`
// }
// // detals.innerHTML=ittme

// }
// setProadct()

    

var data;
if(localStorage.getItem("proadict")){
    data = JSON.parse(localStorage.getItem("proadict"))
}else{
    data = []
}


function addToCart(e){
    if(proadict[e].nmabar == 0){
        var new_nambar = proadict[e].nmabar + 1;
        proadict[e].nmabar = new_nambar ;
        data.push( proadict[e] )
        localStorage.setItem("proadict" , JSON.stringify(data))
        cardProdact()
    }
}
function cardProdact(){
    var item = ""
    var prrece = 0
    for(var i = 0 ; i < data.length ; i++){
        prrece += data[i].discawnt
        item += `
        <div class="cardddd">
        <div class="img">
           <img src=${data[i].img} alt="">
       </div>
        <div class="ditals">
           <p>${data[i].namee}</p>
           <b>price : $${data[i].discawnt}</b>
        </div>
        <div class="icons">
           <i onclick="zayed(${i} , ${data[i].nmabar - 1} , ${data.id})" class="fa-regular fa-square-minus"></i>
           <span>${data[i].nmabar}</span>
           <i onclick="zayed(${i} , ${data[i].nmabar + 1} , ${data.id})" class="fa-regular fa-square-plus"></i>
        </div>
        <i onclick='deleteA(${i})' class="fa-solid fa-trash"></i>

       </div>
        `
    }
    manyee.innerHTML = data.length 
    botm.innerHTML = "$" + prrece + ".00"
    if(data.length > 0 ){
        sohp.innerHTML = item
        manyee.style.color = "var(---main-color)"
    }else{
        sohp.innerHTML = "ur cart is empty"
        shop.style.textAling = "center"
        shop.style.color = "white"
        manyee.style.color = "red"   
    }
    localStorage.setItem("proadict" , JSON.stringify(data))
    
} 
cardProdact()

function deleteA(dl) {
    data.splice(dl , 1)
    localStorage.setItem("proadict" , JSON.stringify(data))
    cardProdact()

}

function zayed(e , nmabar , id , ){
    console.log(e);
    if(nmabar == 0){
        data.splice(e,1)
    }else{
        data[e].nmabar = nmabar
        data[e].discawnt = nmabar * proadict[id -1 , e].discawnt;
    }
    localStorage.setItem("proadict" , JSON.stringify(data))

    cardProdact()
}
cardProdact()


