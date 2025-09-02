import { ThemeProvider, styled } from 'styled-components';
import { lightTheme } from './utils/Themes.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authentication from './pages/Authentication.jsx';
import { useState } from 'react';
import Navbar from "./components/Navbar.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Workout from "./pages/Workout.jsx"
import Program from "./pages/Program.jsx"
import TrainingLog from "./pages/TrainingLog.jsx"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
background-color: ${({theme}) => theme.bg};
color: ${({theme}) => theme.text_primary};
overflow-x: hidden;
overflow-y: hidden;
transition: all 0.2s ease;
`;

function App() {
  const [user, setUser] = useState(true);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {user ? (
          <Container>
            <Navbar/>
            <Routes>
              <Route path = "/" exact element = {<Dashboard/>}></Route>
              <Route path = "/workout" exact element = {<Workout/>}></Route>
              <Route path = "/program" exact element = {<Program/>}></Route>
              <Route path = "/training-log" exact element = {<TrainingLog/>}></Route>
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication/>
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
