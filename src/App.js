import './App.css';
import Navbar from './Components/Navbar';
import './index.css';
import Main from './Components/Main';
import VirtualAppoinments from './Components/VirtualAppoinments';
import Personalize from './Components/Personalize';
import Explore from './Components/Explore';
import Guide from './Components/Guide';
import GetInTouch from './Components/GetInTouch';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      <VirtualAppoinments />
      <Personalize />
      <Explore />
      <Guide /> 
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
