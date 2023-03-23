import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducsers/Reducer";

const store = configureStore({reducer})

export default store