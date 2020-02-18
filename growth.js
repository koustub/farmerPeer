var farmersCropArr = JSON.parse(localStorage.getItem('farmersCrop'));
console.log(`${farmersCropArr}`);

growthApi();

function growthApi(){
   $.ajax({
      url:"http://harvesthelper.herokuapp.com/api/v1/plants?api_key=324ce6305a7559e91581645b9ae72c7c",
      method: "GET"
   }).then(function (response){
      for (var i = 0; i < 45; i++){
            for(var j = 0; j <farmersCropArr.length; j++){
               if(response[i].name == farmersCropArr[j]){
                  var displayDiv = document.getElementById('plantInfo'); 
                  displayDiv.innerHTML += 
                  `
                  <div class="row">
                     <div class="col-lg-6 col-md-12 col-12 heading">
                        <h1>${response[i].name}</h1>
                        <hr style="border: 1px solid olivedrab; width: 50%;" />
                        <img src="https://res-4.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/${response[i].image_url}" class="img-fluid"/>
                        <p>${response[i].description}</p>

                     </div>
                     <div class="col-lg-6 col-md-12 col-12">
                        <p>
                           <span id='sideHeadings'>Optimal-sun: </span> ${response[i].optimal_sun}<br><br>
                           <span id='sideHeadings'>Optimal-soil: </span> ${response[i].optimal_soil}<br><br>
                           <span id='sideHeadings'>Planting-Considerations: </span> ${response[i].planting_considerations}<br><br>
                           <span id='sideHeadings'>When-to-Plant: </span> ${response[i].when_to_plant}<br><br>
                           <span id='sideHeadings'>Spacing:</span> ${response[i].spacing}<br><br>
                           <span id='sideHeadings'>Watering:</span> ${response[i].watering}<br><br> 
                           <span id='sideHeadings'>Feeding:</span> ${response[i].feeding}<br><br>
                           <span id='sideHeadings'>Harvesting:</span> ${response[i].harvesting}<br><br> 
                           <span id='sideHeadings'>Extra Care:</span> ${response[i].other_care} <br><br>
                           <span id='sideHeadings'>Storage Use:</span> ${response[i].storage_use} <br><br>
                           <span id='sideHeadings'>Pests:</span> ${response[i].pests}<br><br> 
                        
                        </p>
                     </div>
                  </div>
                  
                  `    

               }
                  
            }
      }
            
   });
}