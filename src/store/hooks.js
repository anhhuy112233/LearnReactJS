/**
 * File định nghĩa custom hook useStore
 * Hook này giúp các component dễ dàng truy cập state và dispatch
 */

import { useContext } from "react";
import { Context } from "./Context";

/**
 * Custom hook để lấy state và dispatch từ Context
 * @returns {Array} Mảng chứa [state, dispatch]
 */
const useStore = () => {
    // Lấy state và dispatch từ Context
    const { state, dispatch } = useContext(Context);
    return [state, dispatch];
}

export default useStore;
