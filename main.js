


let infoss = document.querySelector('.infoss');
infoss.addEventListener('click', loadCss1);

let priceList = document.querySelector('.price-list');
priceList.addEventListener('click', loadCss2);

let shop = document.querySelector('.shop');
shop.addEventListener('click', loadCss3);

let news = document.querySelector('.news');
news.addEventListener('click', loadCss4);

let wrapper1 = document.querySelector('.wrapper1');
let wrapper2 = document.querySelector('.wrapper2');
let wrapper3 = document.querySelector('.wrapper3');
let wrapper4 = document.querySelector('.wrapper4');


let z;


function loadCss1() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./style1.css";
    document.head.appendChild(link);

   
    console.log('kjhgfd');
    wrapper1.style.display = 'block';
    wrapper2.style.display = 'none';
    wrapper3.style.display = 'none';
    wrapper4.style.display = 'none';
   
}
    loadCss1()





    function loadCss2() {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "./style3.css";
        document.head.appendChild(link);
    
       
    
        wrapper1.style.display = 'none';
        wrapper2.style.display = 'none';
        wrapper3.style.display = 'block';
        wrapper4.style.display = 'none';
    
        console.log('three')
    
       
    
      
    }
    




function loadCss3() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./style4.css";
    document.head.appendChild(link);

    wrapper1.style.display = 'none';
    wrapper2.style.display = 'none';
    wrapper3.style.display = 'none';
    wrapper4.style.display = 'block';

    console.log('four')

    z=4; 

    console.log(z); 

    

        
       let oneB = document.querySelector('#oonebtnn');
       let twoB= document.querySelector('#ttwobtnn');
       let threeB = document.querySelector('#tthreebtnn');
       let fourB = document.querySelector('#ffourbtnn');

       console.log(oneB);
       console.log(twoB);
       console.log(threeB);
       console.log(fourB);
        
        oneB.addEventListener('click', ccss1);
        twoB.addEventListener('click', ccss2);
        threeB.addEventListener('click', ccss3);
        fourB.addEventListener('click', ccss4);

        function ccss1() {

            console.log('blabla')
            loadCss1()
        }

        function ccss2() {

            console.log('blabla')
            loadCss4()
        }
        function ccss3() {

            console.log('blabla')
            loadCss2()
        }
        function ccss4() {

            console.log('blabla')
            loadCss3()
        }
        
    
        

  

 
   
}



function loadCss4() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./style2.css";
    document.head.appendChild(link);

    
    wrapper1.style.display = 'none';
    wrapper2.style.display = 'block';
    wrapper3.style.display = 'none';
    wrapper4.style.display = 'none';


   
    console.log('two')

    // praiselist 4

 

   

}

