import "../styles/globals.css";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import store from "../redux/store/configureStore";
import { Provider } from "react-redux";
import configureStore from "../redux/store/configureStore";

const store = configureStore();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
