import { create } from "zustand";
import type { Track } from "../model/Track";

interface TrackState {
    track: Track | null;
    loading: boolean;
    error: string | null;
    setTrack: (track: Track) => void;
    clear: () => void;
    setError: (error: string | null) => void;
    setLoading: (loading: boolean) => void;
}

export const useTrackStore = create<TrackState>((set) => ({
    track: null,
    loading: false,
    error: null,
    setTrack: (track) => set({ track }),
    setError: (error) => set({ error }),
    setLoading: (loading) => set({ loading }),
    clear: () => set({ track: null, error: null, loading: false }),
}));