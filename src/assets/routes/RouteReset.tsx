import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTrackStore } from "../store/trackStore";

export function RouteReset() {
  const location = useLocation();
  const clear = useTrackStore((state) => state.clear);

  useEffect(() => {
    // resets ISRC number on page change
    clear();
  }, [location.pathname, clear]);

  return null;
}