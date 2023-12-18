import React from 'react'
import './App.css'
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';

import * as panel from "https://js.arcgis.com/4.28/@arcgis/core/chunks/panel.js";
panel.P.prototype.renderHeaderNode = function() { return null; };

function App() {
  
  React.useEffect(() => {

    const mapView = new MapView({
      container: "mapDiv",
      map: new Map({
        basemap: "streets-navigation-vector"
      })
    });

    mapView.popupEnabled = false;
    mapView.on("click", (event) => {
      mapView.openPopup({
        content: `${event.mapPoint.x}`,
        location: event.mapPoint
      });
    });

  }, [])

  return (    
      <div id="mapDiv">        
      </div>
  )
}

export default App
