var farmersCropArr = JSON.parse(localStorage.getItem('farmersCrop'));
console.log(`${farmersCropArr}`);

growthApi();

function growthApi(){
    $.ajax({
       url:"http://harvesthelper.herokuapp.com/api/v1/plants?api_key=324ce6305a7559e91581645b9ae72c7c",
        method: "GET"
     }).then(function (response){
         //goes through the response object
         for (var i = 0; i < 45; i++){
            //goes through farmers crop section
             for(var j = 0; j <farmersCropArr.length; j++){
                                 if(response[i].name == farmersCropArr[j]){
  
                 //console.log needs to be changed to whatever container that u are putting the information in -----> .append()
                 console.log(response[i].name);
                 console.log(response[i].description);
                 console.log(response[i].optimal_sun);
                  console.log(response[i].optimal_soil);
                 console.log(response[i].planting_considerations);
                console.log(response[i].when_to_plant);
                  console.log(response[i].spacing);
                 console.log(response[i].disease);
                 console.log(response[i].watering);

                var displayDiv = document.getElementById('plant1Info'); 
                displayDiv.innerHTML =`
                <h1>${response[i].name}</h1>
                <p><span id='sideHeadings'>Description :</span> ${response[i].description}<br><span id='sideHeadings'>Optimal-sun :</span> ${response[i].optimal_sun}<br>
                <span id='sideHeadings'>Optimal-soil :</span> ${response[i].optimal_soil}<br><span id='sideHeadings'>Planting-Considerations :</span>${response[i].planting_considerations}<br>
                <span id='sideHeadings'>When-to-Plant :</span> ${response[i].when_to_plant}<br><span id='sideHeadings'>Spacing :</span>${response[i].spacing}<br>
                <span id='sideHeadings'>Watering :</span>${response[i].watering} /p>`;                 

                }
              }
         }
              
      });
   }
                  