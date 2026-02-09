import { IsrcSearchForm } from "../components/IsrcSearchForm";
import { TrackMetadata } from "../components/TrackMetaData";
import { ErrorMessage } from "../components/ErrorMessage";
import { Box, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { LoadingBackdrop } from "../components/LoadingBrackdrop";
import { useTrack } from "../hooks/useTrack";
import { useAuthToken } from "../hooks/useAuthToken";

export function CreateTrackPage() {

  const { track, error, createByIsrc } = useTrack();
  const { token, setToken } = useAuthToken();

  const columnStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "50%"
  };

  const handleSubmit = (isrc: string) => {
    if (!token.trim()) return;
    createByIsrc(isrc, token);
  };

  return (
    <>
      <Box
        display="flex"
        width="100vw"
        height="100vh"
      >
        <Box sx={{ ...columnStyles }}
          display="flex"
          flexDirection="column"
          alignItems="stretch"
        >
          <TextField
            label="Bearer token"
            value={token}
            onChange={(e) => {
              setToken(e.target.value);
            }}
            sx={{ mb: 2 }}
            type="password"
          />
          <IsrcSearchForm isTokenMissing={!(token.trim().length > 0)} onSubmit={handleSubmit} label="Create Track" />
          <Link component={RouterLink} to="/"
            mt={2}
            align="left"
          >
            Get tracks
          </Link>
        </Box>
        <Box sx={{ ...columnStyles }}>
          {error && <ErrorMessage message={error} />}
          {!error && track && <TrackMetadata track={track} />}
        </Box>
      </Box>
      <LoadingBackdrop />
    </>
  );
}