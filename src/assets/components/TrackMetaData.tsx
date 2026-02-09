import { Card, CardContent, Typography } from "@mui/material";
import type { Track } from "../model/Track";
import { getCoverUrl } from "../api/trackApi";

export function TrackMetadata({ track }: { track: Track }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        src={getCoverUrl(track.isrc)}
        alt="Cover Image"
        style={{ width: "50%", borderRadius: "50%" }}
      />
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      >
        <Typography variant="h6"><strong>{track.name}</strong></Typography>
        <Typography>Artist: {track.artistName}</Typography>
        <Typography>Album: {track.albumName}</Typography>
        <Typography>
          Explicit: {track.isExplicit ? "Yes" : "No"}
        </Typography>
        <Typography>
          Playback: {track.playbackSeconds}s
        </Typography>
      </CardContent>
    </Card>
  );
}