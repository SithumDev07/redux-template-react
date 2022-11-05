import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "./store/reducers/sample.slice";
import "./app.css";

function App() {
  // here we are using that name sample in order to get the state of the store
  const { count } = useSelector((state) => state.sample);
  // here we are getting only the count state from the store, we can get the other values too

  const dispatch = useDispatch(); // we need a dispatcher in order to dispatch any of our defined reducers

  const handleClick = () => {
    dispatch(increaseCount()); // here we don't have to pass anything because in our reducer, we are just increasing the current state
  };

  // Summary
  /*
    useSelector is used to get the current state of the store
    useDispatch is used to update the current state of the store
  */

  return (
    <div className="App container">
      <p className="para">{count}</p>
      <button type="button" onClick={handleClick} className="button">
        Increase
      </button>
    </div>
  );
}

export default App;
