import './App.css';
import ReactTypingEffect from 'react-typing-effect';

function App() {
  return (
    <div className="App">
       <ReactTypingEffect
        text={["Coming Soon.", "We don't need to wait for our website to help you."]}
        staticText = {<h1>StructureKart</h1>}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text) => <h1>{text}</h1>}
        speed = {200}       
      />
      <br/>
      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname">
        </input><br/>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"></input>
        <br/>
        <input type="button" id="submit" name = "submit"></input>
      </form>
    </div>
  );
}

export default App;
