import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import AppLayout from "./pages/AppLayout";
import React from "react";


function App() {
  return (
    <Router >
      <AppLayout />
    </Router>
  );
}

export default App;
