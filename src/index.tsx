import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import SmoothScroll from "./components/SmoothScroll";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<SmoothScroll>
			<App />
		</SmoothScroll>
	</React.StrictMode>,
);
