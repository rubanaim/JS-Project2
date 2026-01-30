



window.onscroll= function(){
    if(window.scrollY >=600){
       $('.toUp').css({visibility:'visible',opacity:'1',bottom:'25px'});
    }
    else{
         $('.toUp').css({visibility:'hidden',opacity:'0',bottom:'100%'});
    }
    if (window.innerWidth > 1000) {
    if(window.scrollY>=300){
        $('nav').css({width:'100%', position:'fixed', borderRadius: '0px',top:'0',left: '0',height: '70px', padding: '0 100px'})
        $('nav .logo img').css({width:'170px'})
    }
    else{
          $('nav').css({width:'85%', position:'absolute', borderRadius: '50px',top:'40px',left: '100px',height: '90px', padding: '0 30px'})
        $('nav .logo img').css({width:'200px'})
    }}
}
$('.toUp').click(()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

let myCart
let findedData=localStorage.getItem('myCart')
console.log(findedData );

if(!findedData){
    myCart=[]
}
else{
    myCart=JSON.parse(findedData)
}
function addItem(index){
    let value= products[index].name
   const findedValue = myCart.find(function(val){
    return val.name===value
   })
   console.log(findedValue)
   if(findedValue){
      products[index].number+=1
   }
   else{
    myCart.push(products[index])
    }
    displayItems()
}
displayItems()
function displayItems(){
    
const card=myCart.map((el,index)=> 
        `<div class="container">
                    <div class="details1">
                        <img src=${el.img} alt="">
                        <div>
                            <p>${el.name}</p>
                            <p>$${el.price}</p>
                        </div>
                    </div>
                    <div class="details2">
                        <div>
                            <button onclick='multiples(${index}, "add")'>+</button>
                            <span>${el.number ?? 1}</span>
                            <button onclick='multiples(${index}, "subtract")'>-</button>
                        </div>
                        <i class="fa-solid fa-trash" onclick='deletItem(${index})'></i>
                    </div>
                </div>`).join()
     if(myCart.length>0){
        console.log(true);
        
        document.querySelector('.cart .itemss').innerHTML=card
    } else{
        document.querySelector('.cart .itemss').innerHTML='Your cart is empty'
        console.log(false);
}
let totalPrice=document.querySelector('.totalPrice')
const t=myCart.reduce((a,b)=>{return a+(b.price*b.number)},0)
totalPrice.innerHTML='$'+t.toFixed(2)
localStorage.setItem('myCart',JSON.stringify(myCart))
}

$('.cartHandeler').click(function(){
    if($(this).hasClass('openCart')){  
        $('.cart').addClass('active')
        $('.overlay').addClass('active')
    }
   else{
        $('.cart').removeClass('active')
        $('.overlay').removeClass('active')
    }
})

function deletItem(index){
    let x=window.confirm('Are you sure you want to delete this item?')
    if(x){
        let product=myCart[index]
       let filteredArray=myCart.filter((el)=> el.id!==product.id)
       myCart=filteredArray
       displayItems()
    }
}

function multiples(index, operation){
 if(operation=='add'){
     myCart[index].number++
 }
 else {
     myCart[index].number--
 }
 displayItems()
}
let barsOpen=false
$('.bars').click(function(){
  if(!barsOpen){
    $('nav .ul').css({height:'250px', opacity:'1'})
    barsOpen=true
  }
  else{
     $('nav .ul').css({height:'0px', opacity:'0'})
      barsOpen=false
  }
    
})

let theme= document.querySelector('.theme')
let open=false 
theme.addEventListener('click',()=>{
if(!open){
    $('main').addClass('open')
    $('.theme').addClass('open')
    open=true
}
else{
    $('main').removeClass('open')
    $('.theme').removeClass('open')
    open=false
}
})

let pink=document.querySelector('.pink')
let gray=document.querySelector('.gray')
let blue=document.querySelector('.blue')
let original=document.querySelector('.original')

pink.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--main-color','#f783ac')
    setThemeColor('#f783ac')
})
gray.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--main-color',' #555657')
    setThemeColor('#555657')
})
blue.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--main-color','#1864ab')
       setThemeColor('#1864ab')
})
original.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--main-color','#7453fc')
     setThemeColor('#7453fc')
})

function setThemeColor(color){
    document.documentElement.style.setProperty('--main-color', color)
    localStorage.setItem('themeColor', color)
}

let savedColor = localStorage.getItem('themeColor')

if(savedColor){
    document.documentElement.style.setProperty('--main-color', savedColor)
}
