import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
