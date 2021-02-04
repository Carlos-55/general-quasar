<template>
  <div id="Localization">
      <!-- {{message}} -->
      <div id="map"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import * as leaflet from 'leaflet';
import { getLocalization } from '../../helpers/helpers';
declare var L : any; 
import 'leaflet-routing-machine'
@Component
export default class Localization extends Vue {
    message: string = 'Aqui vamos a ver el mapa desde vue';
    

    async mounted() {
       let current_location = await getLocalization();
       let data = L.map('map').setView([current_location.lat, current_location.lng],15);
       L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        //   maxZoom: 18
       }).addTo(data);
       let marker = L.marker([current_location.lat, current_location.lng]).addTo(data);
       marker.bindPopup("<b>Hola!</b><br>Estamos localizados aqui.").openPopup();
        L.Routing.control({
        waypoints: [
            L.latLng(current_location.lat, current_location.lng),
            // L.latLng(19.4294183,-98.9713894)
        ]
        })
        .addTo(data);
        
    }
    
}
</script>
<style>
#map {
    width: 100%; 
    height: 80em;
}
</style>