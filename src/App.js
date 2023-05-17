import { Typography } from '@mui/material';
import './App.css';
import LeftSide from './components/LeftSide';
import rightImage from './rightImage.jpg'

function App() {
  return (
    <div className="App">
      <div className="text">
        <Typography variant='h2' style={{ fontWeight: '600' }}>HOW TO INVEST ?</Typography>
        <Typography variant='h5'>It is one of the most important asset classes to own and to build long term</Typography>
      </div>

      <div className="main-container">
        <div className="left-side">
          <LeftSide />
        </div>

        <div className="right-side">
          <div className="image-container">
            <img src={rightImage} alt="message" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
