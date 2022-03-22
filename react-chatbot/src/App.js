import logo from "./logo.svg";
import { Chatbot } from "react-chatbot-kit";
import "./App.css";
import ActionProvider from "./chatbot/ActionProvider";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </header>
    </div>
  );
}

export default App;
