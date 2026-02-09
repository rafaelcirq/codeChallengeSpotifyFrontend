import { createTrack, getTrackMetadata } from "../api/trackApi";
import { useTrackStore } from "../store/trackStore";

export function useTrack() {
  const { track, error, loading, setTrack, setError, setLoading, clear } = useTrackStore();

  const getTrackByIsrc = async (isrc: string) => {
    try {
      setError(null);
      setLoading(true);
      const data = await getTrackMetadata(isrc);
      setTrack(data);
    } catch {
      setError("Track search failed.");
    } finally {
      setLoading(false);
    }
  };

  const createByIsrc = async (isrc: string, token: string) => {
    try {
      setError(null);
      setLoading(true);
      const data = await createTrack(isrc, token);
      setTrack(data);
    } catch {
      setError("Track creation failed.");
    } finally {
      setLoading(false);
    }
  };

  return { track, error, loading, getTrackByIsrc, createByIsrc, clear };
}
