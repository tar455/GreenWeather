const btm=document.getElementById('search_btm');
const cityName=document.getElementById('cityName');
const outputcityName=document.getElementById('city_name');
const temp=document.getElementById('temp');
let temp_status=document.getElementById('temp-status');
const day=document.getElementById('day');
const date=document.getElementById('date-today');
var d=new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var month=new Array(12);
month[0]="Jan";
month[1]="Feb";
month[2]="Mar";
month[3]="Apr";
month[4]="May";
month[5]="Jun";
month[6]="Jul";
month[7]="Aug";
month[8]="Sep";
month[9]="Oct";
month[10]="Noc";
month[11]="Dec";
var n=weekday[d.getDay()];
var da=d.getDate();
var mo=month[d.getMonth()];
day.innerHTML=n;
date.innerHTML=da+" "+mo;
const getInfo=async(event)=>{
    event.preventDefault();
    // alert('Hello');
    let cityVal=cityName.value;
    if(cityVal==""){
        outputcityName.innerHTML="Please Enter City Name before search ";
    }else{
        
        try{
            const response=await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${cityVal}&cnt=1&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "9037d9a228msh8846136421922a6p1f7b6ajsnd83a1e34112c",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            
        }});
        // console.log(response)
        const data=await response.json();
        const arrdata=[data];
        console.log(arrdata)

        
        var temp_in_kelvin=arrdata[0].list[0].main.temp;
        var centi=temp_in_kelvin-273.15;
        outputcityName.innerHTML=arrdata[0].list[0].name;
        temp.innerHTML=parseFloat(centi).toFixed(1);
        temp_status=arrdata[0].list[0].weather[0].main;
        console.log(temp_status);
        
        
        // console.log(temp_status=="Mist");
        // temp.innerHTML=arrdata[0].main.temp;
        }catch{
            outputcityName.innerHTML=`Enter City name properly`;
        }
    }
}
btm.addEventListener('click',getInfo);

// function autocomplete(inp,arr){
//     var currfo;
//     inp.addEventListener("input",function(e){
//         //var declaration

//         closeAllLists();

//     })

// }


