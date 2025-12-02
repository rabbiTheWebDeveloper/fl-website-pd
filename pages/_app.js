import { Provider } from "react-redux";
import store from "../redux/store";
import { getTotals } from "../redux/stateSlices/CartSlice";


// Common Css
import "../styles/common.css";

import "../styles/main_page/main_page.css";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


// Theme Css
import "../styles/theme_1/style.css";

// Font Link Css
import '../styles/landing-pages-css/landing-common-css/landing-font.css';

// Landing Page Css
import '../styles/landing-pages-css/landing-common-css/landing-common.css';

import '../styles/landing-pages-css/landing-1.css';

import '../styles/landing-pages-css/landing-2.css';

import '../styles/landing-pages-css/landing-3.css';

import '../styles/landing-pages-css/landing-4.css';

import '../styles/landing-pages-css/landing-5.css';

import '../styles/landing-pages-css/landing-6.css';

import '../styles/landing-pages-css/landing-7.css';

import '../styles/landing-pages-css/landing-8.css';

import '../styles/landing-pages-css/landing-9.css';

import '../styles/landing-pages-css/landing-10.css';

import '../styles/landing-pages-css/landing-12.css';

import '../styles/landing-pages-css/landing-11.css';

import '../styles/landing-pages-css/landing-13.css';

import '../styles/landing-pages-css/landing-14.css';

import '../styles/landing-pages-css/landing-15.css';

import '../styles/landing-pages-css/landing-16.css';

import '../styles/landing-pages-css/landing-17.css';

import '../styles/landing-pages-css/landing-18.css';

import '../styles/landing-pages-css/landing-19.css';

import '../styles/landing-pages-css/landing-20.css';

import '../styles/landing-pages-css/landing-21.css';

import '../styles/landing-pages-css/landing-22.css';

import '../styles/landing-pages-css/landing-23.css';

import '../styles/landing-pages-css/landing-24.css';

import '../styles/landing-pages-css/landing-25.css';

import '../styles/landing-pages-css/landing-26.css';

import '../styles/landing-pages-css/landing-27.css';

import '../styles/landing-pages-css/landing-28.css';

import '../styles/landing-pages-css/landing-29.css';

import '../styles/landing-pages-css/landing-31.css';

import '../styles/landing-pages-css/landing-32.css';

import '../styles/landing-pages-css/landing-33.css';

import '../styles/landing-pages-css/landing-34.css';

import '../styles/landing-pages-css/landing-35.css';

import '../styles/landing-pages-css/landing-36.css';
import '../styles/landing-pages-css/landing-37.css';
import '../styles/landing-pages-css/landing-38.css';

// Multi page one
import "../styles/multipage/multipage-1.css"
import "../styles/multipage/multipage-common.css"



import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

import ScrollToTop from "react-scroll-to-top";
import { BsArrowUpCircleFill } from "react-icons/bs";


function MyApp({ Component, pageProps }) {
  store.dispatch(getTotals());
  return (
    <>
      <Provider store={store}>
        <ToastContainer autoClose={1000} pauseOnHover={false} />
        <Component {...pageProps} />
        <Toaster position="top-center" />
        <ScrollToTop smooth component={<BsArrowUpCircleFill />} />
      </Provider>
    </>
  );
}

export default MyApp;
