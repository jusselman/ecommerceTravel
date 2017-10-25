// var litNotOne = {city:"San Francisco", population:800000, flower: "Dahlia", img:url("https://wallpaperscraft.com/image/san_francisco_top_view_panorama_night_building_63107_3840x2400.jpg")}
// var litNotTwo = {}





function city(name, attraction, hotel, food, image) {
    this.name = name;
    this.attraction = attraction;
    this.hotel = hotel;
    this.food = food;
    this.image = image;
    // this.productOfPop = function() {
    //   return this.population * this.hippies
    //   }
  }
var cityArray = new Array

var sanFran = new city("San Francisco", "Golden Gate Bridge", "The Fairmont","Fish & Chips", "img/sanfrancisco.jpg")
var parIs = new city("Paris", "Eiffel Tower", "Le Meurice", "Fancy Cheeses", "img/paris.jpg")
var porTlan = new city("Portland", "The Rose Garden", "Ace Hotel", "Craft Beer", "img/portland.jpg")
var palMadm = new city("Palma", "Castle Bellver", "Hotel Saratoga", "Pamboli", "img/palma.png" )
var detRoit = new city("Detroit", "The Detroit Opera House", "Fort Shelby Hotel","Corned Beef Eggrolls", "img/detroit.jpg")
var marRakech = new city("Marrakech", "Les Jardins Menara", "La Maison Arabe du Centre Ville", "Tangine", "img/marrakech.jpg")
var guaYaquil = new city("Guayaquil", "La Perla", "Oro Verde Guayaquil", "Ceviche", "img/guayaquil.jpg" )
var nagAsaki = new city("Nagasaki", "Huis ten Bosch", "Inasayama Kanko Hotel", "Sushi Rolls", "img/nagasaki.jpg" )

cityArray.push(sanFran, parIs, porTlan, palMadm, detRoit, marRakech, guaYaquil, nagAsaki)


for(i = 0; i < cityArray.length; i++) {
    var cityName = document.createTextNode(cityArray[i].name)
    var cityAttraction = document.createTextNode("Popular Attraction: " + cityArray[i].attraction)
    var cityHotel = document.createTextNode("Your Next Hotel: " + cityArray[i].hotel)
    var cityFood = document.createTextNode("Local Cuisine: " + cityArray[i].food)
    var cityVisit = document.createTextNode("Reserve!")
    var cityImg = cityArray[i].image

    var newCol = document.createElement('div');
    var newDiv = document.createElement('div');
    var h1name = document.createElement('h1');
    var h4attraction = document.createElement('h4');
    var h4hotel = document.createElement('h4');
    var h4food = document.createElement('h4');
    var visit = document.createElement('button');
    var image = document.createElement('img');

    h1name.appendChild(cityName)
    h4attraction.appendChild(cityAttraction)
    h4hotel.appendChild(cityHotel)
    h4food.appendChild(cityFood)
    visit.appendChild(cityVisit)
    visit.className = "btn btn-2"
    image.src = cityImg
    image.className = "img-responsive"

    newCol.className =  "col-md-6"
    newDiv.className = "travelCity cityName" + " thumbnail"
    newDiv.appendChild(h1name)
    newDiv.appendChild(image)
    newDiv.appendChild(h4attraction)
    newDiv.appendChild(h4hotel)
    newDiv.appendChild(h4food)
    newDiv.appendChild(visit)
    newCol.appendChild(newDiv)



    document.getElementById("cities").appendChild(newCol)

}



// var newImg = document.createElement('img')
// newImg.src(this.img)
//
// for(i = 0; i < city.length; i++) {
//     document
// }
