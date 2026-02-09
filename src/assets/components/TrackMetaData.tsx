import { Card, CardContent, Typography } from "@mui/material";
import type { Track } from "../model/Track";
import { getCoverUrl } from "../api/trackApi";

export function TrackMetadata({ track }: { track: Track }) {
  return (
    <Card>
      <img
        src={getCoverUrl(track.isrc)}
        alt="Cover Image"
      />
      <CardContent>
        <Typography>{track.name}</Typography>
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