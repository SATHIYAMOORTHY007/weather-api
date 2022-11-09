let res=fetch("https://restcountries.com/v2/all").then((data)=>data.json()).then((data)=>
{
  
    let big = document.createElement("div");
    big.setAttribute("class","container")
    document.body.append(big);
    for(let i=0;i<data.length;i++)
    {
      let lat= data[i].latlng[0];
      let lon=data[i].latlng[1];
      let name=data[i].name;
      console.log(lat,lon,name);
        let div1 = document.createElement("div");
        div1.setAttribute("class","card mult-color")
      
        div1.style.width="18rem";

        let div2 = document.createElement("div");
        div2.setAttribute("class","card-header");
        
        div2.innerText=`${data[i].name}`
        div2.setAttribute("id","data");
       
        
        
        let card_body = document.createElement("div");
        card_body.setAttribute("class","card-body");
        
        let image = document.createElement("img");
        image.setAttribute("class","card-img");
        image.setAttribute("src",`${data[i].flag}`);
        image.style.width="100px";
        image.style.height="100px";

        div1.append(div2,card_body)
       

        let p1 = document.createElement("p");
         p1.setAttribute("class","text-center");
        p1.innerText=`capital:${data[i].capital}`

        let p2 = document.createElement("p");
        p2.setAttribute("class","text-center");
        p2.innerText=`Latitude:${data[i].latlng[0]}`
        
        let p3= document.createElement("p");
        p3.setAttribute("class","text-center");
        p3.innerText=`Latitude:${data[i].latlng[1]}`

        let btn = document.createElement("div");
       
        card_body.append(image,p1,p2,p3,btn);
         btn.innerHTML=`
        <button  class="btn btn-primary" onclick="opendata(${lat},${lon})">Click For Weather</button>
        `  
        big.append(div1)
        document.body.append(big);
    }
   
});

  async function opendata(lat,lon){
  try {
  let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207`);
  let res1= await res.json();
   alert(`countryname: ${res1.name} weather is ${res1.main.temp}`)
}
 catch (error) {
      console.log(error.message);
  }
  } 
  