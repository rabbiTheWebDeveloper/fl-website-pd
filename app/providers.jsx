"use client";
import { Provider } from "react-redux";
import store from "../redux/store";
import { getTotals } from "../redux/stateSlices/CartSlice";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";
import { BsArrowUpCircleFill } from "react-icons/bs";

function MyApp({ children }) {
  store.dispatch(getTotals());
  return (
    <>
      <Provider store={store}>
        <ToastContainer autoClose={1000} pauseOnHover={false} />
        {children}
        <Toaster position="top-center" />
        <ScrollToTop smooth component={<BsArrowUpCircleFill />} />
      </Provider>
    </>
  );
}

export default MyApp;
