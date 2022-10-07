import { useState } from "react";
import "./App.css";

function App() {
  const [resultMsg, setResultMsg] = useState("");
  const [showRes, setShowRes] = useState(false);
  const [variable, setVariable] = useState("");

  const onChangeHyderabad = (e) => {
    setVariable(e.target.value);
  };
  const onChangeChennai = (e) => {
    setVariable(e.target.value);
  };
  const onChangeDelhi = (e) => {
    setVariable(e.target.value);
  };
  const onChangeMumbai = (e) => {
    setVariable(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (variable === "") {
      setResultMsg("Please select an answer");
      setShowRes(true);
    } else if (variable === "Delhi") {
      setResultMsg("Correct Answer..!!");
      setShowRes(true);
    } else {
      setResultMsg("Wrong Answer!!");
      setShowRes(true);
    }
  };

  const resClassName =
    resultMsg === "Please select an answer" || resultMsg === "Wrong Answer!!"
      ? "wrong-result-msg mt-4"
      : "correct-result-msg mt-4";

  return (
    <div className="bg-container p-4">
      <h1 className="mb-4 text-center heading">Answer the Question</h1>
      <form
        id="questionsForm"
        className="p-5 questions-form"
        onSubmit={onSubmitForm}
      >
        <h1 className="question">What is the capital of India?</h1>
        <div id="cities" className="d-flex flex-column ml-4">
          <div className="mt-2 mb-2">
            <input
              type="radio"
              value="Hyderabad"
              id="cityHyderabad"
              name="city"
              onChange={onChangeHyderabad}
            />
            <label className="ml-2 option-label" htmlFor="cityHyderabad">
              Hyderabad
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              value="Chennai"
              id="cityChennai"
              name="city"
              onChange={onChangeChennai}
            />
            <label className="ml-2 option-label" htmlFor="cityChennai">
              Chennai
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              value="Delhi"
              id="cityDelhi"
              name="city"
              onChange={onChangeDelhi}
            />
            <label className="ml-2 option-label" htmlFor="cityDelhi">
              Delhi
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              value="Mumbai"
              id="cityMumbai"
              name="city"
              onChange={onChangeMumbai}
            />
            <label className="ml-2 option-label" htmlFor="cityMumbai">
              Mumbai
            </label>
          </div>
        </div>
        <div className="ml-4">
          <button id="submitBtn" className="btn btn-primary" type="submit">
            Submit
          </button>
          <p id="resultMsg" className={resClassName}>
            {showRes && resultMsg}
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;