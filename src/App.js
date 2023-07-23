import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import React from "react";

import 'bootstrap-icons/font/bootstrap-icons.min.css'


function App() {
  return (
    <Router >
      <AppLayout />
    </Router>
  );
}

export default App;
