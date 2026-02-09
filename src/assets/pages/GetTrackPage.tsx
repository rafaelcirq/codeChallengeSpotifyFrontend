import { IsrcSearchForm } from "../components/IsrcSearchForm";
import { TrackMetadata } from "../components/TrackMetaData";
import { ErrorMessage } from "../components/ErrorMessage";
import { useTrackStore } from "../store/trackStore";
import { getTrackMetadata } from "../api/trackApi";

export function GetTrackPage() {
  const { track, setTrack, error, setError, setLoading } = useTrackStore();

  const handleSubmit = async (isrc: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getTrackMetadata(isrc);
      setTrack(response);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to get track");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <IsrcSearchForm onSubmit={handleSubmit} label="Get Track" />
      {error && <ErrorMessage message={error} />}
      {track && <TrackMetadata track={track} />}
    </>
  );
}