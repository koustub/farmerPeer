let ArrOfVeggies = [
    {   id:1,
        name:'Green Beans',
        type : 'Hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 70,
        gallonsOfWaterPerWeek : 2,
        veggieimg :'assets/veggies-img/beans.jpg'

    },
    {   id:2,
        name:'Beetroot',
        type : 'half-hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 50,
        gallonsOfWaterPerWeek : 1,
        veggieimg :'assets/veggies-img/beans.jpg'
    },
    {   id:3,
        name:'Broccoli',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 125,
        gallonsOfWaterPerWeek : 1,
        veggieimg :'assets/veggies-img/beans.jpg'
    },
    {   id:4,
        name:'Cabbage',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 120,
        gallonsOfWaterPerWeek : 1,
        veggieimg :'assets/veggies-img/beans.jpg'
    },
    {   id:5,
        name:'Carrot',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 75,
        gallonsOfWaterPerWeek : 2,
        veggieimg :'assets/veggies-img/beans.jpg'
    },
    {   id:6,
        name:'Corn',
        type : 'tender',
        minTemp : 10,
        maxTemp : 27,
        timeToGrow : 80,
        gallonsOfWaterPerWeek : 2,
        veggieimg :'assets/veggies-img/beans.jpg'
    },
    {   id:7,
        name:'Egg Plant',
        type : 'hardy',
        minTemp : 18,
        maxTemp : 25,
        timeToGrow : 80,
        gallonsOfWaterPerWeek : 2,
        veggieimg :'assets/veggies-img/beans.jpg'
    },
    {   id:8,
        name:'Spinach',
        type : 'tender',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 50,
        gallonsOfWaterPerWeek : 1,
        veggieimg :'assets/veggies-img/beans.jpg'
    },
    {   id:9,
        name:'Tomato',
        type : 'tender',
        minTemp : 18,
        maxTemp : 27,
        timeToGrow : 85,
        gallonsOfWaterPerWeek : 1,
        veggieimg :'assets/veggies-img/beans.jpg'
    },
    {
        id:10,
        name:'cucumber',
        type:'extreme tender',
        minTemp : 15,
        maxTemp : 22,
        timeToGrow : 60,
        gallonsOfWaterPerWeek :1,
        veggieimg :'assets/veggies-img/beans.jpg'
    }

];
plantsToGrow();


function plantsToGrow()
{   
    var temp = prompt("give your temp in your area");
    var humidity = prompt('chances of rain in your location');
    var percentOfSoilMoisture = prompt('give me your soil moisture in your location');
    var plantType = "";
    var arrOfSelectedVeggieForFarmer = [];
     for (i=0;i < ArrOfVeggies.length;i++)
    {
        console.log('i have entered first for loop');
        if((temp > ArrOfVeggies[i].minTemp) && (temp < ArrOfVeggies[i].maxTemp) )
        {  
            var plantType = "";
            if (humidity > 0 && humidity < 25) {
                plantType ='hardy';
            }
            else if (humidity > 25 && humidity < 50) {
                plantType = 'half-hardy';
            }
            else if (humidity > 50 && humidity < 75) {
                plantType = 'tender';
            }
            else {
                plantType = 'extreme tender'
            }
            if (plantType.localeCompare(ArrOfVeggies[i].type) == 0){
            console.log("i have entered this loop");
            arrOfSelectedVeggieForFarmer.push(ArrOfVeggies[i].name);  
            }
        }
    }
    console.log(`${arrOfSelectedVeggieForFarmer}`);
    var displayCrops = document.getElementById('cropsToGrow');
    for (i = 0; i < arrOfSelectedVeggieForFarmer.length; i++) {
        for (j= 0; j < ArrOfVeggies.length; j++) {
            if (arrOfSelectedVeggieForFarmer[i].localeCompare(ArrOfVeggies[j].name) == 0) {
                if(percentOfSoilMoisture > 0 && percentOfSoilMoisture < 15){var waterForPlant = ArrOfVeggies[j].gallonsOfWaterPerWeek * 4;}
                else if(percentOfSoilMoisture > 15 && percentOfSoilMoisture < 30){var waterForPlant = ArrOfVeggies[j].gallonsOfWaterPerWeek * 2;}
                else{var waterForPlant = ArrOfVeggies[j].gallonsOfWaterPerWeek };
                displayCrops.innerHTML += `<h1>${ArrOfVeggies[j].name}</h2><img src='${ArrOfVeggies[j].veggieimg}'>
                <h2>Plant Type :${ArrOfVeggies[j].type}</h2><h2>Days to Grow :${ArrOfVeggies[j].timeToGrow} Days</h2>
                <h2>No of Gallons Per Week :${waterForPlant}</h2><br>`;
            }
        }
    }
}