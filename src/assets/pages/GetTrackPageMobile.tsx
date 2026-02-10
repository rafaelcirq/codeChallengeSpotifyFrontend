import { IsrcSearchForm } from "../components/IsrcSearchForm";
import { TrackMetadata } from "../components/TrackMetaData";
import { ErrorMessage } from "../components/ErrorMessage";
import { Box, Link, Dialog, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingBackdrop } from "../components/LoadingBrackdrop";
import { useTrack } from "../hooks/useTrack";
import CloseIcon from "@mui/icons-material/Close";

export function GetTrackPageMobile() {
    const { track, error, getTrackByIsrc, clear } = useTrack();
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        clear();
    }, [clear]);

    const handleSubmit = async (isrc: string) => {
        clear();
        await getTrackByIsrc(isrc);
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
                    <Box sx={{ mb: 2 }}>
                    
                    </Box>
                    <IsrcSearchForm onSubmit={handleSubmit} label="Get Track" />
                    <Link component={RouterLink} to="/create" mt={2} align="left">
                        Create tracks
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
                {track && <TrackMetadata track={track} />}
                {error && <ErrorMessage message={error} />}
            </Dialog>

            <LoadingBackdrop />
        </>
    );
}