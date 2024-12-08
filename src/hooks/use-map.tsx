import {useEffect, useState, MutableRefObject, useRef} from 'react';
import L, {Map, TileLayer} from 'leaflet';
import { City } from '../types/city';

export function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.coordinates.latitude,
          lng: city.coordinates.longitude
        },
        zoom: city.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }

    if (map !== null && isRenderedRef.current) {
      map.panTo(new L.LatLng(city.coordinates.latitude, city.coordinates.longitude));
      map.setZoom(city.zoom);
    }
  }, [mapRef, city, map]);

  return map;
}
