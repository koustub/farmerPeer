let veggiesArr = [
    {   id:1,
        name:'Green Beans',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 70,
        gallonsOfWaterPerWeek : 2,
        veggieImg: "assets/veggies-img/beans.jpg"

    },
    {   id:2,
        name:'Beetroot',
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
        name:'Carrot',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 75,
        gallonsOfWaterPerWeek : 2,
        veggieImg: "assets/veggies-img/carrots.jpg"
    },
    {   id:6,
        name:'Corn',
        type : 'tender',
        minTemp : 10,
        maxTemp : 27,
        timeToGrow : 80,
        gallonsOfWaterPerWeek : 2,
        veggieImg: "assets/veggies-img/corn.jpg"
    },
    {   id:7,
        name:'EggPlant',
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
        name:'Tomato',
        type : 'tender',
        minTemp : 18,
        maxTemp : 27,
        timeToGrow : 85,
        gallonsOfWaterPerWeek : 1,
        veggieImg: "assets/veggies-img/tomatos.jpg"
    },
    {
        id:10,
        name:'Cucumber',
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
        name:'Squash',
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
        name:'Onions',
        type:'hardy', 
        minTemp : 20,
        maxTemp : 25,
        timeToGrow : 30,
        gallonsOfWaterPerWeek :1.6,
        veggieImg: "assets/veggies-img/onions.jpg"

    },
    {
        id:17,
        name:'Muskmelon',
        type:'tender', 
        minTemp : 21,
        maxTemp : 32,
        timeToGrow : 90,
        gallonsOfWaterPerWeek :0.004,
        veggieImg: "assets/veggies-img/melon.jpg"

    },
    {
        id:18,
        name:'Endives',
        type:'half-hardy', 
        minTemp : 15,
        maxTemp : 18,
        timeToGrow : 100,
        gallonsOfWaterPerWeek :2,
        veggieImg: "assets/veggies-img/endives.jpg"

    },
    {
        id:19,
        name:'Pepper',
        type:'tender', 
        minTemp : 18,
        maxTemp : 26,
        timeToGrow : 90,
        gallonsOfWaterPerWeek :0.004,
        veggieImg: "assets/veggies-img/bell-peppers.jpg"

    },
    {
        id:20,
        name:'Collard',
        type:'hardy', 
        minTemp : 4,
        maxTemp : 15,
        timeToGrow : 85,
        gallonsOfWaterPerWeek :1.5,
        veggieImg: "assets/veggies-img/collard.jpg"

    },

];

plantsToGrow();

function plantsToGrow() {   
    var temp = prompt("Temperature of your Area");
    var humidity = prompt('Humidity');
    var soilMoisture = prompt('Soil Moisture in your location');
    var plantType = "";
    var farmersCrop = [];

    for ( var i = 0; i < veggiesArr.length ; i++) {
        console.log('i have entered first for loop');

        //Checks if temperature is between min and max temp of each veggie
        if( (temp >= veggiesArr[i].minTemp) && (temp <= veggiesArr[i].maxTemp) ){  
            if (humidity >= 0 && humidity <= 25) {
                plantType ='hardy';

            } else if (humidity > 25 && humidity <= 50) {
                plantType = 'half-hardy';

            } else if (humidity > 50 && humidity < 75) {
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


             displayCrops.innerHTML +=
                `
                <div class="col-6 col-md-8 col-lg-3 veggies-card">
                    <h5 class=" text-uppercase veggies-title">${veggiesArr[j].name}</h5>
                    <img src="${veggiesArr[j].veggieImg}" class="img-fluid veggies-img " >
                    <p class="veggies-text">Plant Type :${veggiesArr[j].type}</p>
                    <p class="veggies-text">Days to Grow :${veggiesArr[j].timeToGrow} Days</p>
                    <p class="veggies-text">No of Gallons Per Week :${waterForPlant}</p>
                </div> 
                `
            }   
        }
    }
    
}


