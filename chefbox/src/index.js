import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// export default index;
// function index() {
//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#F9C959",
//       },
//     },
//   });
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme} /> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
