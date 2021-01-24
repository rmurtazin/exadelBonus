import { tileLayer } from "leaflet"

const mapOptions: L.MapOptions =  {
    layers: [ 
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }) 
    ],
    
    minZoom: 3,
    zoom: 10,
    scrollWheelZoom: true
}

//TODO: mowe to container

export { mapOptions } 