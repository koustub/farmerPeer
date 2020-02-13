let ArrOfVeggies = [
    {   id:1,
        name:'Green Beans',
        type : 'Hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 70,
        gallonsOfWaterPerWeek : 2

    },
    {   id:2,
        name:'Beetroot',
        type : 'half-hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 50,
        gallonsOfWaterPerWeek : 1
    },
    {   id:3,
        name:'Broccoli',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 125,
        gallonsOfWaterPerWeek : 1
    },
    {   id:4,
        name:'Cabbage',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 120,
        gallonsOfWaterPerWeek : 1
    },
    {   id:5,
        name:'Carrot',
        type : 'hardy',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 75,
        gallonsOfWaterPerWeek : 2
    },
    {   id:6,
        name:'Corn',
        type : 'tender',
        minTemp : 10,
        maxTemp : 27,
        timeToGrow : 80,
        gallonsOfWaterPerWeek : 2
    },
    {   id:7,
        name:'Egg Plant',
        type : 'hardy',
        minTemp : 18,
        maxTemp : 25,
        timeToGrow : 80,
        gallonsOfWaterPerWeek : 2
    },
    {   id:8,
        name:'Spinach',
        type : 'tender',
        minTemp : 5,
        maxTemp : 24,
        timeToGrow : 50,
        gallonsOfWaterPerWeek : 1
    },
    {   id:9,
        name:'Tomato',
        type : 'tender',
        minTemp : 18,
        maxTemp : 27,
        timeToGrow : 85,
        gallonsOfWaterPerWeek : 1
    },
    {
        id:10,
        name:'Cucumber',
        type:'extreme tender',
        minTemp : 15,
        maxTemp : 22,
        timeToGrow : 60,
        gallonsOfWaterPerWeek :1
    },
    {
        id:11,
        name:'Cauliflower',
        type:'half-hardy', 
        minTemp : 10,
        maxTemp : 25,
        timeToGrow : 25,
        gallonsOfWaterPerWeek :1
    },
    {
        id:12,
        name:'Lettuce',
        type:'fairly hardy', 
        minTemp : 12,
        maxTemp : 28,
        timeToGrow : 55,
        gallonsOfWaterPerWeek :0.5
    },
    {
        id:13,
        name:'Celery',
        type:'half-hardy', 
        minTemp : 15,
        maxTemp : 21,
        timeToGrow : 140,
        gallonsOfWaterPerWeek :3
    },
    {
        id:14,
        name:'Squash',
        type:'tender', 
        minTemp : 15,
        maxTemp : 29,
        timeToGrow : 60,
        gallonsOfWaterPerWeek :0.004
    },
    {
        id:15,
        name:'Brussels Sprouts',
        type:'hardy', 
        minTemp : 15,
        maxTemp : 18,
        timeToGrow : 90,
        gallonsOfWaterPerWeek :1 /*Weird  */
    },
    {
        id:16,
        name:'Onions',
        type:'hardy', 
        minTemp : 20,
        maxTemp : 25,
        timeToGrow : 30,
        gallonsOfWaterPerWeek :1.6 
    },
    {
        id:17,
        name:'Muskmelon',
        type:'tender', 
        minTemp : 21,
        maxTemp : 32,
        timeToGrow : 90,
        gallonsOfWaterPerWeek :0.004 
    },
    {
        id:18,
        name:'Endives',
        type:'half-hardy', 
        minTemp : 15,
        maxTemp : 18,
        timeToGrow : 100,
        gallonsOfWaterPerWeek :2
    },
    {
        id:19,
        name:'Pepper',
        type:'tender', 
        minTemp : 18,
        maxTemp : 26,
        timeToGrow : 90,
        gallonsOfWaterPerWeek :0.004
    },
    {
        id:20,
        name:'Collard',
        type:'hardy', 
        minTemp : 4,
        maxTemp : 15,
        timeToGrow : 85,
        gallonsOfWaterPerWeek :1.5
    },

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
                displayCrops.innerHTML += `<h1>${ArrOfVeggies[j].name}</h2>
                <h2>Plant Type :${ArrOfVeggies[j].type}</h2><h2>Days to Grow :${ArrOfVeggies[j].timeToGrow} Days</h2>
                <h2>No of Gallons Per Week :${waterForPlant}</h2><br>`;
            }
        }
    }
}
