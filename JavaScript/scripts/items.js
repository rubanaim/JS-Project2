
var products = [
    {
        id:1 ,
        img:"images2/discover-01.jpg" ,
        name:"Product one",
        price:30,
        number:1,

    },
    {
        id:2 ,
        img:"images2/discover-02.jpg" ,
        name:"Product two",
        price:45,
       number:1,
    },
    {
        id:3 ,
        img:"images2/discover-03.jpg" ,
        name:"Product three",
        price:28,
        number:1,
    },
    {
        id:4 ,
        img:"images2/discover-04.jpg" ,
        name:"Product four",
        price:28,
        number:1,
    },
    {
        id:5 ,
        img:"images2/discover-05.jpg" ,
        name:"Product five",
        price:50,
        number:1,
    },
    {
        id:6 ,
        img:"images2/discover-01.jpg" ,
        name:"Product six",
        price:60,
      number:1,
    },
    {
        id:7 ,
        img:"images2/featured-02.jpg" ,
        name:"Product seven",
        price:75,
        number:1,
    },
    {
        id:8 ,
        img:"images2/featured-03.jpg" ,
        name:"Product eight",
        price:72,
        number:1,
    },
] 
let str=''
document.addEventListener('DOMContentLoaded', function() {
    products.map(function(el,index){
        str+=`<div class="card">
                <div class="img-con">
                    <img src="images/author.jpg" alt="">
                    <img src=${el.img} alt="">
                </div>
                <div class="details">
                    <p>${el.name}</p>
                    <div class="line"></div>
                    <div class="price">
                        <div>
                            <span>Current Price: </span>
                            <b>${el.price} $</b>
                        </div>
                    </div>
                </div>
                <button class="btn" onclick = 'addItem(${index})'>Add to Cart</button>
            </div>`
    })
    setTimeout(()=>{
         $('.OurItems .container').html(str)
    },1500)
   
});



