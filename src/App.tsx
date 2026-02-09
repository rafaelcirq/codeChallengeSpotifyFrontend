import { BrowserRouter as Router } from "react-router-dom";
import { GetTrackPage } from "./assets/pages/GetTrackPage";
import { CreateTrackPage } from "./assets/pages/CreateTrackPage";

function App() {
  return (
    <Router>
      <GetTrackPage />
      <CreateTrackPage />
    </Router>
  );
}

export default App;