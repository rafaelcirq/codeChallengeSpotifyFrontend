import { Alert } from "@mui/material";

export function ErrorMessage({ message }: { message: string }) {
  return <Alert severity="error">{message}</Alert>;
}