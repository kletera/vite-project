import collection from 'easter-egg-collection';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4'
console.log(uuidv4());

let map = L.map('map').setView([43.5433, 1.4786], 143);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([43.5433, 1.4786]).addTo(map);

let circle = L.circle([43.5433, 1.4786], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

let polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");