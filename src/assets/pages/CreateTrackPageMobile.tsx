import { IsrcSearchForm } from "../components/IsrcSearchForm";
import { TrackMetadata } from "../components/TrackMetaData";
import { ErrorMessage } from "../components/ErrorMessage";
import { Box, Link, Dialog, IconButton, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { LoadingBackdrop } from "../components/LoadingBrackdrop";
import { useTrack } from "../hooks/useTrack";
import CloseIcon from "@mui/icons-material/Close";
import { useAuthToken } from "../hooks/useAuthToken";

export function CreateTrackPageMobile() {

  const { track, error, clear, createByIsrc } = useTrack();
  const [openModal, setOpenModal] = useState(false);
  const { token, setToken } = useAuthToken();

  const handleSubmit = async (isrc: string) => {
    if (!token.trim()) return;
    clear();
    await createByIsrc(isrc, token);
    setOpenModal(true);
  };

  const columnStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  };

  return (
    <>
      <Box display="flex" width="100vw" height="100vh">
        <Box
          sx={{ ...columnStyles }}
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
      </Box>

      {/* Modal */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)} fullWidth>
        <Box display="flex" justifyContent="flex-end" p={1}>
          <IconButton onClick={() => setOpenModal(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {error && <ErrorMessage message={error} />}
        {track && <TrackMetadata track={track} />}
      </Dialog>

      <LoadingBackdrop />
    </>
  );
}