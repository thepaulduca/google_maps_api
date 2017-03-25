function loadScript(src,callback){

var script = document.createElement("script");
script.type = "text/javascript";
if(callback)script.onload=callback;
document.getElementsByTagName("head")[0].appendChild(script);
script.src = src;
}


loadScript('http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=initialize',
          function(){
            log('google-loader has been loaded, but not the maps-API ');
          });


function initialize() {

log('maps-API has been loaded, ready to use');
var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);
}

function log(str){
document.getElementsByTagName('pre')[0].appendChild(document.createTextNode('['+new Date().getTime()+']\n'+str+'\n\n'));
}
