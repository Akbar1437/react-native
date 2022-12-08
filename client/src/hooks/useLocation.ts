import { useState, useEffect } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const res = await Location.getLastKnownPositionAsync();

      if (!res) return;
      const latitude = res.coords.latitude;
      const longitude = res.coords.longitude;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  return location;
};
