var cityData = {
     "Istanbul": {
       "crimeRate": 3.2,
       "averageSalary": 30000,
       "averageRent": 1200,
     },
     "Ankara": {
       "crimeRate": 2.9,
       "averageSalary": 29000,
       "averageRent": 1000,
     },
     "Bursa": {
          "crimeRate": 0.9,
          "averageSalary": 19000,
          "averageRent": 700,
        },
     "Izmir": {
          "crimeRate": 1.9,
          "averageSalary": 25000,
          "averageRent": 800,
        },
     "Antalya": {
          "crimeRate": 2.0,
          "averageSalary": 24000,
          "averageRent": 750,
        },
     
   };
   
   document.getElementById('compareButton').onclick = function() {
     var city1 = document.getElementById('city1').value;
     var city2 = document.getElementById('city2').value;
   
     var city1Data = cityData[city1];
     var city2Data = cityData[city2];
   
     var result = "";
   
     if (city1Data && city2Data) {
       result = "<h2>Comparison</h2>" +
       "<p><b>" + city1 + ":</b> Crime rate: " + city1Data.crimeRate + ", Average salary: " + city1Data.averageSalary + ", Average rent: " + city1Data.averageRent + "</p>" +
       "<p><b>" + city2 + ":</b> Crime rate: " + city2Data.crimeRate + ", Average salary: " + city2Data.averageSalary + ", Average rent: " + city2Data.averageRent + "</p>";
     } else {
       result = "Sorry, data for one or both cities is not available."
     }
   
     document.getElementById('result').innerHTML = result;
   };
   