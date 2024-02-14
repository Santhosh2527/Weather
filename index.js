// "use strict"

let input_search=document.querySelector(".search-box")
console.log("input_search")
let input_btn=document.getElementById("btn")
let input_num=document.querySelector(".num")
let input_city=document.querySelector(".city")
let input_count=document.querySelector(".count")
let input_speed=document.querySelector(".speed")
let mincondainer = document.getElementById("condinerimg")
let input_para = document.querySelectorAll("p")
console.log(input_para);

// let input_degree=document.querySelector(".degree")
// console.log(input_degree).firstchild

input_btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let apikey = "1ac41d822f470089588e62f6ac6cbdce";

 let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
 let cityName = input_search.value


   fetch(apiurl+`&appid=${apikey}&q=${cityName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let temp=data.main.temp
        console.log(temp)
        let name=data.name
        let humidity=data.main.humidity
        let wind=data.wind.speed

        input_city.innerHTML=name
        input_num.innerHTML=`${temp}℃`
        input_count.innerHTML=`${humidity}%`
        input_speed.innerHTML=`${wind}km/h`

       
     if (temp > 26) {
    mincondainer.style.backgroundImage = "url('sun.webp')";
    input_para.forEach((p) => {
        p.style.color = "#000000"; 
    });
} else if (temp > 20 && temp < 25) {
    mincondainer.style.backgroundImage = "url('moon.png')";
    input_para.forEach((p) => {
        p.style.color = "#000000";
    });
} else {
    mincondainer.style.backgroundImage = "url('full moon.webp')";
    input_para.forEach((p) => {
        p.style.color = "#ffffff"; 
    });
}
    })
})




          