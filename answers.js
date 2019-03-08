function berekenCircle() {
  if(document.getElementById("circleAnswer").value == 0){
    alert("Je hebt geen straal ingevuld!");
  }else{
    //Oppervlakte cirkel
    var oppervlakteTotaal = document.getElementById("circleAnswer").value;
    var oppervlakteAnswer = document.getElementById("oppervlakteAnswer");
    oppervlakteAnswer.value = Math.PI * oppervlakteTotaal * oppervlakteTotaal;

    //Omtrek cirkel
    var omtrekTotaal = document.getElementById("circleAnswer").value;
    var omtrekAnswer = document.getElementById("omtrekAnswer");
    omtrekAnswer.value = 2 * Math.PI * omtrekTotaal;
  }
};

function berekenRechthoek() {
  if(document.getElementById("rechthoekAnswer1").value == 0 && document.getElementById("rechthoekAnswer2").value == 0){
    alert("Je hebt geen lengte of breedte ingevuld!");
  }else if(document.getElementById("rechthoekAnswer1").value == 0){
    alert("Je hebt geen lengte ingevuld!");
  }else if(document.getElementById("rechthoekAnswer2").value == 0){
    alert("Je hebt geen breedte ingevuld!");
  }else{
    //Oppervlakte rechthoek
    var oppervlakteTotaal1 = document.getElementById("rechthoekAnswer1").value;
    var oppervlakteTotaal2 = document.getElementById("rechthoekAnswer2").value;
    var oppervlakteAnswer = document.getElementById("oppervlakteAnswer");
    oppervlakteAnswer.value = oppervlakteTotaal1 * oppervlakteTotaal2;

    //Omtrek rechthoek
    var omtrekTotaal1 = document.getElementById("rechthoekAnswer1").value;
    var omtrekTotaal2 = document.getElementById("rechthoekAnswer2").value;
    var omtrekAnswer = document.getElementById("omtrekAnswer");
    omtrekAnswer.value = 2 * omtrekTotaal1 + 2 * omtrekTotaal2;

    //Diagonaal rechthoek
    var diagonaalTotaal1 = document.getElementById("rechthoekAnswer1").value;
    var diagonaalTotaal2 = document.getElementById("rechthoekAnswer2").value;
    var diagonaalAnswer = document.getElementById("diagonaalAnswer");
    diagonaalAnswer.value = +diagonaalTotaal1 + +diagonaalTotaal2 + "2";
  }
};

function berekenTemp() {
  if(document.getElementById("tempAnswer").value == 0){
    alert("Je hebt geen temperatuur ingevuld!");
  }else{
    //Kelvin temperatuur
    var tempTotaal = document.getElementById("tempAnswer").value;
    var kelvinAnswer = document.getElementById("kelvinAnswer");
    kelvinAnswer.value = +tempTotaal + 273.15;

    //Fahrenheid temperatuur
    var tempTotaal = document.getElementById("tempAnswer").value;
    var fahrAnswer = document.getElementById("fahrAnswer");
    fahrAnswer.value = 9 * tempTotaal / 5 + 32;
  }
};


function berekenKelvin() {
  if(document.getElementById("tempAnswer").value == 0){
    alert("Je hebt geen temperatuur ingevuld!");
  }else{
    //Celsius temperatuur
    var tempTotaal = document.getElementById("tempAnswer").value;
    var celsiusAnswer = document.getElementById("celsiusAnswer");
    celsiusAnswer.value = +tempTotaal - 273.15;

    //Fahrenheid temperatuur
    var tempTotaal = document.getElementById("tempAnswer").value;
    var fahrAnswer = document.getElementById("fahrAnswer");
    fahrAnswer.value = tempTotaal * 9/5 - 459.67;
  }
};
