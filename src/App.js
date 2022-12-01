import {AppBar, Toolbar, Typography} from "@mui/material";
import Carlist from "./components/Carlist";
import './App.css';

function App() {

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography>
            My Carshop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist/>
    </div>
  );
}

export default App;
