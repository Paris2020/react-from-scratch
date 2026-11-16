import { useState } from "react";
import "./App.css";
import Errands from "./Errands";

function App() {
  const [completedErrands, setCompletedErrands] = useState([
    { text: "Take out the trash", isCompleted: true },
    { text: "Make supper", isCompleted: true },
  ]);
  const [incompleteErrands, setIncompleteErrands] = useState([
    { text: "Paint the walls", isCompleted: false },
  ]);

  function markErrandAsCompleted(text) {
    setIncompleteErrands(incompleteErrands.filter(er => er.text !== text));
    setCompletedErrands(...completedErrands, incompleteErrands.find(er => er.text === text));
  }

  function deleteErrand(text) {
    setCompletedErrands(completedErrands.filter(er => er.text !== text));
  }

  return (
    <>
      <Errands
        completedErrands={completedErrands}
        incompleteErrands={incompleteErrands}
        onCompletedClicked={}
        onDeleteClicked={}
        
      />
    </>
  );
}

export default App;
