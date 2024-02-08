import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./pages/AppLayout";

import 'bootstrap-icons/font/bootstrap-icons.min.css'


function App() {
  return (
    <Router >
      <AppLayout />
    </Router>
  );
}

export default App;
