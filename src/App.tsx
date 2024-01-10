import "./App.css";
import Greet from "./assets/component/Greet";

function App() {
  return (
    <>
      <Greet name="Bruce" heroName="Batman">
        <p>This is Batman</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <p>This is Superman</p>
      </Greet>
      <Greet name="Diana" heroName="WonderWomen">
        <p>This is Wonder Women</p>
      </Greet>
      <Greet name="Arther" heroName="AquaMan">
        <p>This is Aqua Man</p>
      </Greet>
    </>
  );
}

export default App;
