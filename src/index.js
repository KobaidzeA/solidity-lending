import ReactDom from "react-dom";
import "./styles.css"
import { BrowserRouter } from "react-router-dom";
import App from "./App.js"
// ReactDom.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>,
//     document.getElementById("root")
//     );  

    const root = ReactDom.createRoot(document.getElementById("root"));
    root.render( <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
    </BrowserRouter>);