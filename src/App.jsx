import { Stack } from "@mui/material";
import Navbar from "./layout/navbar";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Stack width="100%">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Stack>
  );
}

export default App;
