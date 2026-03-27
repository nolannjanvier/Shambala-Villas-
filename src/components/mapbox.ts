import mapboxgl from 'mapbox-gl';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || 'YOUR_MAPBOX_TOKEN_HERE';

export function initMap(containerId: string, lng: number, lat: number, zoom = 15): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  mapboxgl.accessToken = MAPBOX_TOKEN;
  const map = new mapboxgl.Map({
    container: containerId,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [lng, lat],
    zoom,
    scrollZoom: false,
  });

  new mapboxgl.Marker({ color: '#B8956A' })
    .setLngLat([lng, lat])
    .addTo(map);

  map.addControl(new mapboxgl.NavigationControl(), 'top-right');
}
