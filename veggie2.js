let veggiesArr = [
    {   id:1,
        name:'Beans',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 70,
        gallonsOfWaterPerWeek : 2,
        veggieImg: "assets/veggies-img/beans.jpg"

    },
    {   id:2,
        name:'Beets',
        type : 'half-hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 50,
        gallonsOfWaterPerWeek : 1,
        veggieImg: "assets/veggies-img/beetroot.jpg"
    },
    {   id:3,
        name:'Broccoli',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 125,
        gallonsOfWaterPerWeek : 1,
        veggieImg: "assets/veggies-img/broccoli.jpg"
    },
    {   id:4,
        name:'Cabbage',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 120,
        gallonsOfWaterPerWeek : 1,
        veggieImg: "assets/veggies-img/cabbage.jpg"
    },
    {   id:5,
        name:'Carrots',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 75,
        gallonsOfWaterPerWeek : 2,
        veggieImg: "assets/veggies-img/carrots.jpg"
    },
    {   id:6,
        name:'Sweet Corn',
        type : 'tender',
        minTemp : 10,
        maxTemp : 27,
        timeToGrow : 80,
        gallonsOfWaterPerWeek : 2,
        veggieImg: "assets/veggies-img/corn.jpg"
    },
    {   id:7,
        name:'Eggplant',
        type : 'hardy',
        minTemp : 18,
        maxTemp : 25,
        timeToGrow : 80,
        gallonsOfWaterPerWeek : 2,
        veggieImg: "assets/veggies-img/eggplant.jpg"
    },
    {   id:8,
        name:'Spinach',
        type : 'tender',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 50,
        gallonsOfWaterPerWeek : 1,
        veggieImg: "assets/veggies-img/spinach.jpg"
    },
    {   id:9,
        name:'Tomatoes',
        type : 'tender',
        minTemp : 18,
        maxTemp : 27,
        timeToGrow : 85,
        gallonsOfWaterPerWeek : 1,
        veggieImg: "assets/veggies-img/tomatoes.jpg"
    },
    {
        id:10,
        name:'Cucumbers',
        type:'extreme tender',
        minTemp : 15,
        maxTemp : 22,
        timeToGrow : 60,
        gallonsOfWaterPerWeek :1,
        veggieImg: "assets/veggies-img/cucumber.jpg"
    },
    {
        id:11,
        name:'Cauliflower',
        type:'half-hardy', 
        minTemp : 10,
        maxTemp : 25,
        timeToGrow : 25,
        gallonsOfWaterPerWeek :1,
        veggieImg: "assets/veggies-img/cauliflower.jpg"
    },
    {
        id:12,
        name:'Lettuce',
        type:'fairly hardy', 
        minTemp : 12,
        maxTemp : 28,
        timeToGrow : 55,
        gallonsOfWaterPerWeek :0.5,
        veggieImg: "assets/veggies-img/lettuce.jpg"
    },
    {
        id:13,
        name:'Celery',
        type:'half-hardy', 
        minTemp : 15,
        maxTemp : 21,
        timeToGrow : 140,
        gallonsOfWaterPerWeek :3,
        veggieImg: "assets/veggies-img/celery.jpg"

    },
    {
        id:14,
        name:'Summer Squash',
        type:'tender', 
        minTemp : 15,
        maxTemp : 29,
        timeToGrow : 60,
        gallonsOfWaterPerWeek :0.004,
        veggieImg: "assets/veggies-img/squash.jpg"
    },
    {
        id:15,
        name:'Brussels Sprouts',
        type:'hardy', 
        minTemp : 15,
        maxTemp : 18,
        timeToGrow : 90,
        gallonsOfWaterPerWeek :1,
        veggieImg: "assets/veggies-img/sprouts.jpg"

    },
    {
        id:16,
        name:'Onion',
        type:'hardy', 
        minTemp : 20,
        maxTemp : 25,
        timeToGrow : 30,
        gallonsOfWaterPerWeek :1.6,
        veggieImg: "assets/veggies-img/onions.jpg"

    },
    {
        id:17,
        name:'Potatoes',
        type:'hardy', 
        minTemp : 15,
        maxTemp : 26,
        timeToGrow : 120,
        gallonsOfWaterPerWeek :0.03,
        veggieImg: "assets/veggies-img/potatoes.jpg"

    },
    {
        id:18,
        name:'Mint',
        type:'hardy', 
        minTemp : 13,
        maxTemp : 21,
        timeToGrow : 90,
        gallonsOfWaterPerWeek :0.02,
        veggieImg: "assets/veggies-img/mint.jpg"

    },
    {
        id:19,
        name:'Bell Peppers',
        type:'tender', 
        minTemp : 18,
        maxTemp : 26,
        timeToGrow : 90,
        gallonsOfWaterPerWeek :0.004,
        veggieImg: "assets/veggies-img/bell-peppers.jpg"

    },
    {
        id:20,
        name:'Collard Greens',
        type:'hardy', 
        minTemp : 4,
        maxTemp : 15,
        timeToGrow : 85,
        gallonsOfWaterPerWeek :1.5,
        veggieImg: "assets/veggies-img/collard.jpg"

    },

];

// SCRIPT TO GET USER LOCATION, CREATE POLYGON, GET POLYGON ID, GET DATA FOR POLYGON, AND COVERT THAT DATA INTO VARs
// SCRIPT TO GET USER LOCATION, CREATE POLYGON, GET POLYGON ID, GET DATA FOR POLYGON, AND COVERT THAT DATA INTO VARs
// SCRIPT TO GET USER LOCATION, CREATE POLYGON, GET POLYGON ID, GET DATA FOR POLYGON, AND COVERT THAT DATA INTO VARs

var x = document.getElementById("demo");
let polygonCache = {};
var png = '';
// variables from retreived data
let soilTemp ;
let soilMoisture;
let humidity;
let temp;
let uvIndex;
let latitude;
let longitude;
let sampleLocations ;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation();

function showMexicoCity(){
    console.log('Showing mexico');
    sampleLocations = [{ name: 'Mexico City', lat: 19.4326, long: -99.1332 }];
    latitude = Number(sampleLocations[0].lat);
    longitude = Number(sampleLocations[0].long);
    sampleLocations.forEach( requestPolygonId )
}
document.getElementById('Mexico').addEventListener('click', showMexicoCity);

function showHouston(){
    console.log('Showing Houston');
    document.getElementById('veggies').innerHTML="";
    sampleLocations = [{ name: 'Houston', lat: 29.7604, long: -95.3698 }];
    latitude = Number(sampleLocations[0].lat);
    longitude = Number(sampleLocations[0].long);
    sampleLocations.forEach( requestPolygonId );
}
document.getElementById('Houston').addEventListener('click', showHouston);

function showLasVegas(){
    console.log('Las Vegas');
    document.getElementById('veggies').innerHTML="";
    sampleLocations = [{ name: 'Las Vegas', lat: 36.1699, long: -115.1398 }];
    latitude = Number(sampleLocations[0].lat);
    longitude = Number(sampleLocations[0].long);
    sampleLocations.forEach( requestPolygonId );
}
document.getElementById('lasVegas').addEventListener('click', showLasVegas);

function showPosition(position) {
      latitude = (position.coords.latitude);
      longitude = (position.coords.longitude);
      sampleLocations = [
    //   { name: 'Mexico City', lat: 19.4326, long: -99.1332 },
    //   { name: 'New York', lat: 40.7128, long: -74.0060 },
    //   { name: 'Houston', lat: 29.7604, long: -95.3698 },
    //   { name: 'Denver', lat: 39.7392, long: -104.9903 },
      { name: 'currentLocation', lat: Number(latitude), long: Number(longitude) }
    
    ]
    latitude = Number(sampleLocations[0].lat);
      longitude = Number(sampleLocations[0].long);

    $(".long").text(`Longitude: ${longitude}`)
    $(".lat").text(`Latitude: ${latitude}`)
    console.log(`latitude: ${latitude}, longitude: ${longitude}`);
    // loop through sample data and get info
    sampleLocations.forEach( requestPolygonId )
   //requestPolygonId();
}
// function to create polygon and submit QueryUrl to request polygon Id
function requestPolygonId( city ){
  // check if we are caching this already
  console.log( `[requestPolygonId] called with city: `, city );

  if( polygonCache[city] && polygonCache[city].long )
    return polygonCache[city];

  let lonAdd = (city.long + 0.02);
  let lonMin = (city.long - 0.02);
  let latAdd = (city.lat + 0.01);
  let latMin = (city.lat - 0.01);

  console.log( `.. requesting agro polygon...` );
  const url = 'https://api.agromonitoring.com/agro/1.0/polygons?appid=78dc899eb37cab91867a345825f4223c';
  const data = {
        "name":`${city.name}_Polygon`,
        "geo_json":{
            "type":"Feature",
            "properties":{

            },
            "geometry":{
              "type":"Polygon",
              "coordinates":[
                  [
                    [lonAdd, latAdd],
                    [lonMin, latAdd],
                    [lonMin, latMin],
                    [lonAdd, latMin],
                    [lonAdd, latAdd],
                  ]
                ]
              }
            }
  };
  $.ajax({
    url: url, 
    type: 'POST',
    data: JSON.stringify( data ),
    contentType: "application/json; charset=utf-8"
  })
    .then( function( response ){ submitPolygonId( response, city ); });
}

function submitPolygonId(response,city) {
    console.log(`[submitPolygonId] city(${city}), response: `, response);
    polygonCache[city] = response;

    getSoilData(response);
    getWeatherData(response);
    getSateliteImage(response);
    getUvIndex(response);
}

// functions to send polygon it and retreive objects with data (soil data, weather, satelite image)
function getSoilData(response) {
    $.ajax({
                url: `https://api.agromonitoring.com/agro/1.0/soil?polyid=${response.id}&appid=78dc899eb37cab91867a345825f4223c`,
                method: "GET"
            }).then(soilData);
}

function getWeatherData() {
    $.ajax({
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${Math.round(latitude)}&lon=${Math.round(longitude)}&appid=748ff1a0b719ff81bb15bda076c9541d`,
                method: "GET"
            }).then(weatherData);
}

function getSateliteImage(response) {
    $.ajax({
                url: `https://api.agromonitoring.com/agro/1.0/image/search?start=1414819564&end=1577891564&resolution_min=1000&&clouds_max=10&polyid=${response.id}&appid=78dc899eb37cab91867a345825f4223c`,
                method: "GET"
            }).then(showSateliteImage);
}

function getUvIndex(response) {
    $.ajax({
                url: `https://api.agromonitoring.com/agro/1.0/uvi?polyid=${response.id}&appid=78dc899eb37cab91867a345825f4223c`,
                method: "GET"
            }).then(showUvIndex);
}

// functions to convert retreived data into variables/ append satelite image
function soilData(response){
    //soilTemp = Math.round(response.t0-273.15);
    //  celcius10 = Math.round(response.t10-273.15);
    //console.log(`soil temp: ${soilTemp}`);
    soilMoisture = response.moisture;
    $("#soilMoisture").text(`${soilMoisture}`)

}

function weatherData(response) {
    console.log(response);
      temp = Math.round(response.main.temp-273.15);
  $("#temp").html(`${temp} &#8451;`);
  console.log(`Temperature: ${temp}`);


  humidity = response.main.humidity;
  $("#humidity").text(`${humidity}`);
}

function showSateliteImage(response) {
  console.log(response);
  let arrayLength = response.length-1
  
  if (response.length===0){
    alert('No satellite image available!');
  } else {
    $('#satImage').attr( 'src', response[arrayLength].image.truecolor);
  }
}

function showUvIndex(response) {
  uvIndex = response.uvi;
  $("#uv").text(`${uvIndex}`);
  plantsToGrow();

}
                        // API SCRIPT STOPS HERE!
                        // API SCRIPT STOPS HERE!
                        // API SCRIPT STOPS HERE!

function plantsToGrow() {   
    var farmersCrop = [];
    farmersCrop.length = 0;
    document.getElementById('veggies').innerHTML="";    
    
    var plantType = "";
    for ( var i = 0; i < veggiesArr.length ; i++) {
        console.log('i have entered first for loop');

        //Checks if temperature is between min and max temp of each veggie
        if( (temp >= veggiesArr[i].minTemp) && (temp <= veggiesArr[i].maxTemp) ){  
            if (humidity >= 0 && humidity <= 50) {
                plantType ='hardy';

            } else if (humidity > 50 && humidity <= 70) {
                plantType = 'half-hardy';

            } else if (humidity > 70 && humidity < 85) {
                plantType = 'tender';

            } else {
                plantType = 'extreme tender'
            }

            if (plantType == veggiesArr[i].type) {
                console.log("i have entered this loop");
                farmersCrop.push(veggiesArr[i].name);  
            }
        }
    }
  
    var displayCrops = document.getElementById('veggies');
    
    for (var i = 0; i < farmersCrop.length; i++) {

        for (var j= 0; j < veggiesArr.length; j++) {
            if (farmersCrop[i].localeCompare(veggiesArr[j].name) == 0) {

                if(soilMoisture > 0 && soilMoisture < 15){
                    var waterForPlant = veggiesArr[j].gallonsOfWaterPerWeek * 4;
                
                }else if(soilMoisture > 15 && soilMoisture < 30){
                    var waterForPlant = veggiesArr[j].gallonsOfWaterPerWeek * 2;
                
                }else { 
                    var waterForPlant = veggiesArr[j].gallonsOfWaterPerWeek 
                }
                console.log(`${farmersCrop}`);
                console.log('displaying farmer crops');
               
            
             displayCrops.innerHTML +=
                `
                <div class="col-6 col-md-8 col-lg-3 veggies-card">
                    <h5 class=" text-uppercase veggies-title">${veggiesArr[j].name}</h5>
                    <img src="${veggiesArr[j].veggieImg}" class="img-fluid veggies-img " >
                    <p class="veggies-text"><strong>Plant Type:</strong> ${veggiesArr[j].type}</p>
                    <p class="veggies-text"><strong>Days to Grow:</strong> ${veggiesArr[j].timeToGrow} Days</p>
                    <p class="veggies-text"><strong>No of Gallons Per Week:</strong> ${waterForPlant}</p>
                </div> 
              `
            }   
        }
    }
    
    localStorage.setItem("farmersCrop",JSON.stringify(farmersCrop));     
    if(farmersCrop.length===0) {
        console.log('no vegetables');
        displayCrops.innerHTML = '<h2 id="noVegAvb">Sorry no Vegetables available for your Area!</h2>'
    }
}
 




