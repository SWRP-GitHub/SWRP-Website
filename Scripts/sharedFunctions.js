function addClass(component, className) {
    var e = document.getElementById(component);
    e.removeAttribute("class");
    e.classList.add(className);
  }

  function setAnim(e) {
    var btn = document.getElementsByTagName("button");
    for (i = 0; i < btn.length; i++) {
      btn[i].classList.remove("active");
    }
    e.classList.toggle("active");
    value = e.innerText;
    addClass("component", value);
  }

  // first transition by default
  var btn = document.getElementsByTagName("button");
  btn[0].classList.add("active");
  value = btn[0].innerText;
  addClass("component", value);


  //Caesar Cipher
  function rot13(str) {
    
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alphabets.length; j++){
            if(str[i] === alphabets[j]){
            resultStr.push(alphabets13[j]);
            }
        }
    }
    return resultStr.join("");
  };

  function mapCoords() {
    map.on('click', function(e){
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
      });
  }
