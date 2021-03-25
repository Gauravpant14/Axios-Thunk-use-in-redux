import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/Store/store";
import FetchApi from "./components/FetchApi";
// import UserContainer from "./components/UserContainer";
// import UseSel from "./components/UseSel";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer /> */}
        {/* <UseSel /> */}
        <FetchApi />
      </div>
    </Provider>
  );
}

export default App;
