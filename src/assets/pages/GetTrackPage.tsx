import { IsrcSearchForm } from "../components/IsrcSearchForm";
import { TrackMetadata } from "../components/TrackMetaData";
import { ErrorMessage } from "../components/ErrorMessage";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import { LoadingBackdrop } from "../components/LoadingBrackdrop";
import { useTrack } from "../hooks/useTrack";

export function GetTrackPage() {

  const { track, error, getTrackByIsrc, clear } = useTrack();

  useEffect(() => {
    clear();
  }, [clear]);

  const columnStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "50%"
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
          <IsrcSearchForm onSubmit={getTrackByIsrc} label="Get Track" />
          <Link component={RouterLink} to="/create"
            mt={2}
            align="left"
          >
            Create tracks
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