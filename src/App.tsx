import { GetTrackPage } from "./assets/pages/GetTrackPage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./assets/theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateTrackPage } from "./assets/pages/CreateTrackPage";
import { RouteReset } from "./assets/routes/RouteReset";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RouteReset />
        <Routes>
          <Route path="/" element={<GetTrackPage />} />
          <Route path="/create" element={<CreateTrackPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;