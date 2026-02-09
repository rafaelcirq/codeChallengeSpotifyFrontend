import { Backdrop, CircularProgress } from "@mui/material";
import { useTrackStore } from "../store/trackStore";

export function LoadingBackdrop() {
  const loading = useTrackStore((state) => state.loading);

  return (
    <Backdrop
      open={loading}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1,
        color: "#fff",
        cursor: "wait",
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}