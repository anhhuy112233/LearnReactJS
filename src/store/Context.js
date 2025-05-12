/**
 * File tạo React Context để quản lý state toàn cục
 * Context được sử dụng để truyền state và dispatch xuống các component con
 */

import { createContext } from "react";

// Tạo Context object để lưu trữ state và dispatch
export const Context = createContext();

export default Context;
