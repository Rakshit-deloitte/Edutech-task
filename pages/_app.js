import "../styles/globals.css";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configureStore from "../redux/store/configureStore";
import CustomHead from "../components/Head";

const store = configureStore();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CustomHead/>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
