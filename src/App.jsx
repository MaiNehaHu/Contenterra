import "./App.css";
import React, { useState } from "react";
import Card from "./Card/Card";
import { fetchListOfData } from "./store/slices/fetchDataSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [textToCopy, setTextToCopy] = useState("Text to copy");

  const dispatch = useDispatch();

  const dataToDisplay = useSelector((state) => {
    return state.fetchData.data;
  });

  window.addEventListener("load", () => {
    init();
  });

  //window after load will fetch the data from API
  function init() {
    dispatch(fetchListOfData());
  }

  const handleCopyClick = (receivedID) => {
    const textArea = document.createElement("textarea");

    //Get the data of HTML from list received from API
    const Object = dataToDisplay.filter((item) => item.data.id === receivedID);

    //set textToCopy to the selftext_html
    setTextToCopy(Object[0].data.selftext_html);

    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      const copySuccessful = document.execCommand("copy");
      console.log(copySuccessful);
    } catch (err) {
      console.error("Copy failed:", err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <ul className="cards-container">
          {dataToDisplay.map((item, key) => (
            <li key={key} className="card">
              <Card item={item} handleCopyClick={handleCopyClick} />
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;