import { GetTrackPage } from "./assets/pages/GetTrackPage";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import theme from "./assets/theme/theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import { CreateTrackPage } from "./assets/pages/CreateTrackPage";
import { CreateTrackPageMobile } from "./assets/pages/CreateTrackPageMobile";
import { RouteReset } from "./assets/routes/RouteReset";
import { GetTrackPageMobile } from "./assets/pages/GetTrackPageMobile";

function App() {
  // defines from what point mobile pages are used
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <RouteReset />
        <Routes>
          <Route
            path="/"
            element={isMobile ? <GetTrackPageMobile /> : <GetTrackPage />}
          />
          <Route
            path="/create"
            element={isMobile ? <CreateTrackPageMobile /> : <CreateTrackPage />}
          />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;