/* import Banner from '../src/components/Banner' */
import "./App.css";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Section3 from "./components/Section3";
import SectionJohnDoe from "./components/SectionJohnDoe";

function App() {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <Section3 />
      <SectionJohnDoe />
      <Newsletter />
    </>
  );
}

export default App;
