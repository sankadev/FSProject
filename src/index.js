import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";

function Index() {
  // return <App />

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="device/:deviceID" element={<App />} />
      </Routes>
    </Router>
  )
}

function TestPage() {
  let { deviceID } = useParams();
  return <h1>Test Page {deviceID}</h1>
}


ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

