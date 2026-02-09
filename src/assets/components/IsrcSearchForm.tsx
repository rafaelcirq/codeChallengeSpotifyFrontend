import { Button, TextField, Stack } from "@mui/material";
import { useState } from "react";

interface Props {
  onSubmit: (isrc: string) => void;
  label: string;
  disabled?: boolean;
}

export function IsrcSearchForm({ onSubmit, label, disabled }: Props) {
  const [isrc, setIsrc] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(isrc.trim());
      }}
    >
      <Stack spacing={2}>
        <TextField
          label="ISRC Code"
          value={isrc}
          onChange={(e) => setIsrc(e.target.value)}
          fullWidth
          disabled={disabled}
        />
        <Button
          type="submit"
          disabled={!isrc || disabled}
        >
          {label}
        </Button>
      </Stack>
    </form>
  );
}

