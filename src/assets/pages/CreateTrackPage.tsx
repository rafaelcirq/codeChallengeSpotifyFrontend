import { useState } from "react";
import { IsrcSearchForm } from "../components/IsrcSearchForm";
import { TrackMetadata } from "../components/TrackMetaData";
import { ErrorMessage } from "../components/ErrorMessage";
import { useTrackStore } from "../store/trackStore";
import { createTrack } from "../api/trackApi";

export function CreateTrackPage() {
  const { track, setTrack, error, setError, setLoading } = useTrackStore();
  const [token, setToken] = useState("");

  const handleSubmit = async (isrc: string) => {
    if (!token) {
      setError("Token required");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const response = await createTrack(isrc, token);
      setTrack(response);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to create track");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Bearer Tolen"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <IsrcSearchForm onSubmit={handleSubmit} label="Create Track" />
      {error && <ErrorMessage message={error} />}
      {track && <TrackMetadata track={track} />}
    </>
  );
}