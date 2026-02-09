import type { AxiosResponse } from "axios";
import type { Track } from "../model/Track";
import axios from "axios";

// isolated api instance
const api = axios.create({
  baseURL: "http://localhost:8080/codechallenge",
  timeout: 5000,
});

// normalizes api errors
function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ||
      error.response?.statusText ||
      "Failed to communicate to api."
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Unexpected error.";
}

export async function createTrack(
  isrc: string,
  token: string
): Promise<Track> {
  try {
    const response: AxiosResponse<Track> = await api.post(
      "/createTrack",
      null,
      {
        params: { isrc },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("response", response);
    return response.data;
  } catch (err: unknown) {
    throw new Error(getApiErrorMessage(err));
  }
}

export async function getTrackMetadata(isrc: string): Promise<Track> {
  try {
    const response: AxiosResponse<Track> = await api.get("/getTrackMetadata", {
      params: { isrc },
    });
    console.log("response.data", response.data);
    return response.data;
  } catch (err: unknown) {
    throw new Error(getApiErrorMessage(err));
  }
}

// URL helper
export function getCoverUrl(isrc: string): string {
  return `${api.defaults.baseURL}/getCover?isrc=${encodeURIComponent(isrc)}`;
}
