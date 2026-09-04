import { createRoot } from "react-dom/client";
import App from "../src/App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App message="Hey, you're using a component from another file" />);
