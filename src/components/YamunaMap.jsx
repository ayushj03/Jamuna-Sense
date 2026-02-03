import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet"; // ✅ REQUIRED
import "leaflet/dist/leaflet.css";

const FitBounds = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (!data) return;

    const layer = L.geoJSON(data);
    map.fitBounds(layer.getBounds(), {
      padding: [30, 30]
    });
  }, [data, map]);

  return null;
};

const YamunaMap = () => {
  const [riverData, setRiverData] = useState(null);

  useEffect(() => {
    fetch("/yamuna.geojson")
      .then((res) => res.json())
      .then((data) => setRiverData(data));
  }, []);

  return (
    <MapContainer
      center={[28.6, 77.2]}   // ✅ REQUIRED
      zoom={6}               // ✅ REQUIRED
      style={{
        height: "450px",
        width: "100%",
        borderRadius: "16px"
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      {riverData && (
        <>
          <GeoJSON
            data={riverData}
            style={{
              color: "#0066ff",
              weight: 6,
              opacity: 0.9
            }}
          />
          <FitBounds data={riverData} />
        </>
      )}
    </MapContainer>
  );
};

export default YamunaMap;
