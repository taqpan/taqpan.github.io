import React from "react"
import ReactDOM from "react-dom/client"
import { Global } from "@emotion/react";
import App from "./components/app/App"
import globalCss from "./global-styles";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Global styles={globalCss}/>
        <App />
    </React.StrictMode>,
);
