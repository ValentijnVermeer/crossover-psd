
import "./App.css";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Ticket from '../src/components/Tickets'
import Section3 from "./components/Section3";
import SectionJohnDoe from "./components/SectionJohnDoe";

function App() {
  return (
    <>
      <Header />
      <Section3 /> 
      <SectionJohnDoe />
      <Newsletter />
    <Ticket/>
    </>
  );
}

export default App;
