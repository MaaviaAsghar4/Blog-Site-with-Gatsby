import "./src/styles/index.css";
import "firebase/auth";
import reduxProvider from "./reduxProvider";

export const wrapRootElement = reduxProvider;
