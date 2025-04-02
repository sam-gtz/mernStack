import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import NavBar from "./components/Navbar"

function App() {

  return (
    <>
    <Box minH={"100vh"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} /> 
      </Routes>
    </Box>
    </>
      
  );
}

export default App
