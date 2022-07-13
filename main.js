// VARIABLES

var weathCity = [

    {
        'weather_status': 'Fog',
        'weather_city': 'Khulna City',
        'weather_temp': '28 C',
        'weather_humidity': '53%',
        'weather_air_pressucre': '1009.454 PS',
        'weather_change_of_air': '3%',
        'weather_wind_speed': '1.2 km/h',
        'weather_3_pm': '16',
        'weather_4_pm': '18',
        'weather_5_pm': '20',
        'weather_6_pm': '20',
        'weather_7_pm': '13',
        'weather_8_pm': '12',
        'weather_9_pm': '9',
        'weather_10_pm': '7',
        'value': 0
    },

    {
        'weather_status': 'Cold',
        'weather_city': 'Syria City',
        'weather_temp': '12 C',
        'weather_humidity': '23%',
        'weather_air_pressucre': '1012.213 PS',
        'weather_change_of_air': '6%',
        'weather_wind_speed': '1.5 km/h',
        'weather_3_pm': '14',
        'weather_4_pm': '15',
        'weather_5_pm': '13',
        'weather_6_pm': '19',
        'weather_7_pm': '13',
        'weather_8_pm': '21',
        'weather_9_pm': '21',
        'weather_10_pm': '23',
        'value': 1
    },

    {
        'weather_status': 'Hot',
        'weather_city': 'Saudi City',
        'weather_temp': '32 C',
        'weather_humidity': '76%',
        'weather_air_pressucre': '982.123 PS',
        'weather_change_of_air': '52%',
        'weather_wind_speed': '2.3 km/h',
        'weather_3_pm': '12',
        'weather_4_pm': '31',
        'weather_5_pm': '34',
        'weather_6_pm': '45',
        'weather_7_pm': '32',
        'weather_8_pm': '29',
        'weather_9_pm': '19',
        'weather_10_pm': '18',
        'value': 2
    },

    {
        'weather_status': 'Normal',
        'weather_city': 'Lapina City',
        'weather_temp': '25 C',
        'weather_humidity': '32%',
        'weather_air_pressucre': '1299.231 PS',
        'weather_change_of_air': '33%',
        'weather_wind_speed': '3.2 km/h',
        'weather_3_pm': '18',
        'weather_4_pm': '12',
        'weather_5_pm': '22',
        'weather_6_pm': '23',
        'weather_7_pm': '23',
        'weather_8_pm': '34',
        'weather_9_pm': '35',
        'weather_10_pm': '37',
        'value': 3
    },

    {
        'weather_status': 'Very Cold',
        'weather_city': 'Abha City',
        'weather_temp': '5 C',
        'weather_humidity': '76%',
        'weather_air_pressucre': '1030.324 PS',
        'weather_change_of_air': '12%',
        'weather_wind_speed': '0.9 km/h',
        'weather_3_pm': '24',
        'weather_4_pm': '14',
        'weather_5_pm': '16',
        'weather_6_pm': '12',
        'weather_7_pm': '12',
        'weather_8_pm': '15',
        'weather_9_pm': '18',
        'weather_10_pm': '19',
        'value': 4

    },

    {
        'weather_status': 'Kno',
        'weather_city': 'Rhiady City',
        'weather_temp': '21 C',
        'weather_humidity': '34%',
        'weather_air_pressucre': '1032.236 PS',
        'weather_change_of_air': '81%',
        'weather_wind_speed': '2.1 km/h',
        'weather_3_pm': '21',
        'weather_4_pm': '16',
        'weather_5_pm': '12',
        'weather_6_pm': '15',
        'weather_7_pm': '15',
        'weather_8_pm': '18',
        'weather_9_pm': '21',
        'weather_10_pm': '23',
        'value': 5

    },

    {
        'weather_status': 'Lop',
        'weather_city': 'Jeddah City',
        'weather_temp': '24 C',
        'weather_humidity': '87%',
        'weather_air_pressucre': '1031.214 PS',
        'weather_change_of_air': '15%',
        'weather_wind_speed': '2.1 km/h',
        'weather_3_pm': '41',
        'weather_4_pm': '43',
        'weather_5_pm': '34',
        'weather_6_pm': '31',
        'weather_7_pm': '27',
        'weather_8_pm': '24',
        'weather_9_pm': '12',
        'weather_10_pm': '11',
        'value': 6

    },

    {
        'weather_status': 'Ver',
        'weather_city': 'Jaramna City',
        'weather_temp': '18 C',
        'weather_humidity': '74%',
        'weather_air_pressucre': '1032.124 PS',
        'weather_change_of_air': '51%',
        'weather_wind_speed': '2.8 km/h',
        'weather_3_pm': '41',
        'weather_4_pm': '38',
        'weather_5_pm': '35',
        'weather_6_pm': '34',
        'weather_7_pm': '33',
        'weather_8_pm': '27',
        'weather_9_pm': '23',
        'weather_10_pm': '21',
        'value': 7
    },

    {
        'weather_status': 'Dere',
        'weather_city': 'Lopirty City',
        'weather_temp': '13 C',
        'weather_humidity': '31%',
        'weather_air_pressucre': '2012.124 PS',
        'weather_change_of_air': '31%',
        'weather_wind_speed': '2.2 km/h',
        'weather_3_pm': '23',
        'weather_4_pm': '25',
        'weather_5_pm': '18',
        'weather_6_pm': '24',
        'weather_7_pm': '21',
        'weather_8_pm': '26',
        'weather_9_pm': '21',
        'weather_10_pm': '24',
        'value': 8

    },
    
    {
        'weather_status': 'NotNo',
        'weather_city': 'Al Bab City',
        'weather_temp': '3 C',
        'weather_humidity': '43%',
        'weather_air_pressucre': '1215.214 PS',
        'weather_change_of_air': '23%',
        'weather_wind_speed': '3.2 km/h',
        'weather_3_pm': '15',
        'weather_4_pm': '12',
        'weather_5_pm': '19',
        'weather_6_pm': '21',
        'weather_7_pm': '25',
        'weather_8_pm': '28',
        'weather_9_pm': '19',
        'weather_10_pm': '21',   
        'value': 9

    },
  
];

var locationIcon = document.querySelector('.loc-icon');
var locationDiv = document.getElementById('location-div');



// EVENT LISTENRS
locationDiv.addEventListener('click' , showPopup);


// locationIcon

// FUNCTIONS


 function showPopup() {
    document.getElementById('popup-area').classList.add('show-me');
};



// LOOPING
var output = "";
for (var i in weathCity) {
    
    output += `
    <ul class="generated-list">
   <li>City Name: 
   <a id='city-name-select' class="city-name-a ${weathCity[i].weather_city.trim()} " value=${i} > ${i} ${weathCity[i].weather_city} </a> </li>
    </ul>
    `;

}




document.getElementById('popup-area').innerHTML = output;

let selectCity = document.querySelectorAll('.city-name-a');

let iO = 0;
while(iO < selectCity.length) {
    selectCity[iO].addEventListener('click' , chooseCity)
    iO++;
}
//  selectCity.addEventListener('click' , chooseCity);

function chooseCity(e) {
    
    // addLeopx();
    // console.log(e.target.classList.contains('Khulna City'))
    // console.log(e.target.textContent)
    // console.log(e.target.classList.value == 'city-name-a Khulna City')
    // console.log(e.target.classList.value)
    let u = 0;
    while (u < weathCity.length) {
      
    //  var match = weathCity[u].weather_city == selectCity[u].textContent.trim();
    //   var match2 = selectCity[u].classList.contains('checkedName');
    var IndexP =  e.target.textContent.slice(1, 2);
    var Indexi =  e.target.textContent.slice(2, 100);
    //  console.log(e.target.textContent.trim())
    //  console.log(Indexi)
    //  console.log(weathCity[IndexP].weather_temp);

    if (e.target.textContent.slice(2 , 100).trim() == weathCity[u].weather_city.trim()) {
    
      console.log("its work now")
        console.log(IndexP)
     //  console.log(weathCity[IndexP].weather_temp) 
       document.getElementById('weather-status-h').textContent = weathCity[IndexP].weather_status;
       document.getElementById('city-name-h').textContent = weathCity[IndexP].weather_city;
       document.getElementById('weather-temp-h').textContent = weathCity[IndexP].weather_temp;
       document.getElementById('humitdity-prec').textContent = weathCity[IndexP].weather_humidity;
       document.getElementById('wind-speed-prec').textContent = weathCity[IndexP].weather_wind_speed;
       document.getElementById('air-prescure-prec').textContent = weathCity[IndexP].weather_air_pressucre;
       document.getElementById('chance-of-rain-prec').textContent = weathCity[IndexP].weather_change_of_air;
       document.getElementById('3pm-temp').textContent = weathCity[IndexP].weather_3_pm + `'C`;
       document.getElementById('4pm-temp').textContent = weathCity[IndexP].weather_4_pm + `'C`;
       document.getElementById('5pm-temp').textContent = weathCity[IndexP].weather_5_pm + `'C`;
       document.getElementById('6pm-temp').textContent = weathCity[IndexP].weather_6_pm + `'C`;
       document.getElementById('7pm-temp').textContent = weathCity[IndexP].weather_7_pm + `'C`;
       document.getElementById('8pm-temp').textContent = weathCity[IndexP].weather_8_pm + `'C`;
       document.getElementById('9pm-temp').textContent = weathCity[IndexP].weather_9_pm + `'C`;
       document.getElementById('10pm-temp').textContent = weathCity[IndexP].weather_10_pm + `'C`;
       
   document.getElementById('feels-like-3pm').textContent = `Feels Like ${parseFloat(weathCity[IndexP].weather_3_pm) + 2} 'C`;
   document.getElementById('feels-like-4pm').textContent = `Feels Like ${parseFloat(weathCity[IndexP].weather_4_pm) + 2} 'C`;
   document.getElementById('feels-like-5pm').textContent = `Feels Like ${parseFloat(weathCity[IndexP].weather_5_pm) + 2} 'C`;
   document.getElementById('feels-like-6pm').textContent = `Feels Like ${parseFloat(weathCity[IndexP].weather_6_pm) + 2} 'C`;
   document.getElementById('feels-like-7pm').textContent = `Feels Like ${parseFloat(weathCity[IndexP].weather_7_pm) + 2} 'C`;
   document.getElementById('feels-like-8pm').textContent = `Feels Like ${parseFloat(weathCity[IndexP].weather_8_pm) + 2} 'C`;
   document.getElementById('feels-like-9pm').textContent = `Feels Like ${parseFloat(weathCity[IndexP].weather_9_pm) + 2} 'C`;
   document.getElementById('feels-like-10pm').textContent = `Feels Like ${parseFloat(weathCity[IndexP].weather_10_pm) + 2} 'C 
   
   `;
   console.log(parseFloat(weathCity[IndexP].weather_temp))
   // CHANGING BACKGROUND
   if (parseFloat(weathCity[IndexP].weather_temp) >= 0 && parseFloat(weathCity[IndexP].weather_temp) < 5) {
    document.getElementById('background-banner').style.background = 'linear-gradient(#3ac7ff36 , #16682371 , rgba(34, 34, 34, 0.455)) , url(../../images/ishan-seefromthesky-KgCbvOWYuU0-unsplash.jpg) center / cover no-repeat'

   } 

   else if (parseFloat(weathCity[IndexP].weather_temp) >= 5 && parseFloat(weathCity[IndexP].weather_temp) < 12) {
        document.getElementById('background-banner').style.background = 'linear-gradient(#6429cb58 , #0917d676) , url(../../images/mohamed-ahsan-UQXF_w83Z5s-unsplash.jpg) center / cover no-repeat'
   }
   else if (parseFloat(weathCity[IndexP].weather_temp) >= 12 && parseFloat(weathCity[IndexP].weather_temp) < 20) {
        document.getElementById('background-banner').style.background = 'linear-gradient(#f7db3da1 , #b77d2cb8 ) , url(../../images/luke-vodell-C7FXIG9DoaU-unsplash.jpg) center / cover no-repeat'
        
   }
   else if (parseFloat(weathCity[IndexP].weather_temp) >= 20 && parseFloat(weathCity[IndexP].weather_temp) < 28) {
        document.getElementById('background-banner').style.background = 'linear-gradient(#ff007b7b , #8e0e7068 ) , url(../../images/rory-hennessey-PBrovES5uuI-unsplash.jpg) center / cover no-repeat'
   }
   else if (parseFloat(weathCity[IndexP].weather_temp) >= 28 && parseFloat(weathCity[IndexP].weather_temp) < 36) {
        document.getElementById('background-banner').style.background = ' linear-gradient(#6352e680 , #211a5c7e ) , url(../../images/spencer-watson-7OPzL-Y0O5o-unsplash.jpg) center / cover no-repeat'
   }
   else if (parseFloat(weathCity[IndexP].weather_temp) >= 36 && parseFloat(weathCity[IndexP].weather_temp) < 42) {
        document.getElementById('background-banner').style.background = 'linear-gradient(#2fe4ab7e , #0f73536a ) , url(../../images/hakon-grimstad-4oxBtRXHGeU-unsplash.jpg) center / cover no-repeat;'
   }
   else if (parseFloat(weathCity[IndexP].weather_temp) >= 42) {
        document.getElementById('background-banner').style.background = 'linear-gradient(#a5f7476d , #578c1a6f) , url(../../images/chandler-chen-aEJVd7WUjf8-unsplash.jpg) center / cover no-repeat'
   }
    }
            
            else {
              console.log("not correct")
            }

         // return questionBtn[u].value;
      
        u = u+1;
       }
}

function addLeopx(e) {
    e.target.classList.add('checkedName');
}




