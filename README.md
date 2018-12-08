# weather-app
To get the weather of a location first you have to get a key from google maps platform and paste that key in geocode.js.

>**The link for getting  a key:** https://cloud.google.com/maps-platform/

>**Paste the key here:**
  var url=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=`;
  
  >**command required to run the code:** `node app.js -a:"location"`
  
  >(where location is the location whose weather you want to find out)
