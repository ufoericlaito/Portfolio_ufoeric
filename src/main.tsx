import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";



const root = ReactDOM.createRoot(document.getElementById("root")!);
const basename = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL;

root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
