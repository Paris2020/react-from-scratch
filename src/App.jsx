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

  return (
    <>
      <Errands
        completedErrands={completedErrands}
        incompleteErrands={incompleteErrands}
      />
    </>
  );
}

export default App;
