/**
 * File định nghĩa Provider component
 * Provider component wrap toàn bộ ứng dụng để cung cấp state và dispatch
 */

import React, { useReducer } from "react";
import { Context } from "./Context";
import reducer, { initialState } from "./reducer";
import logger from "./logger";

/**
 * Provider component
 * @param {Object} props - Props của component
 * @param {React.ReactNode} props.children - Các component con
 * @returns {JSX.Element} Context.Provider với state và dispatch
 */
const Provider = ({ children }) => {
  // Sử dụng useReducer với logger middleware
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  
  // Wrap children với Context.Provider và truyền state, dispatch xuống
  return <Context.Provider value={{state, dispatch }}>{children}</Context.Provider>;
};

export default Provider;
