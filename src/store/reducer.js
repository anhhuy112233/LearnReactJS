/**
 * Import các action types từ file constants
 * Các action types này định nghĩa các hành động có thể thực hiện trong ứng dụng
 */
import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./constants";

/**
 * Khởi tạo state ban đầu của ứng dụng
 * @property {Array} todos - Mảng chứa danh sách các công việc cần làm
 * @property {string} todoInput - Giá trị input của người dùng
 */
const initialState = {
    todos: [], // Mảng chứa danh sách các công việc cần làm
    todoInput: "", // Giá trị input của người dùng
}

/**
 * Reducer function xử lý các action và cập nhật state
 * @param {Object} state - State hiện tại của ứng dụng
 * @param {Object} action - Action được dispatch
 * @returns {Object} State mới sau khi xử lý action
 */
function reducer(state, action) {
    switch (action.type) {
        // Xử lý khi người dùng nhập text vào input
        case SET_TODO_INPUT:
            return { ...state, todoInput: action.payload };
        
        // Xử lý khi thêm một todo mới
        case ADD_TODO:
            return {
                ...state,
                // Thêm todo mới vào mảng todos với completed mặc định là false
                todos: [...state.todos, { text: state.todoInput, completed: false }],
                // Reset input về rỗng sau khi thêm
                todoInput: ""
            };
        
        // Xử lý khi xóa một todo
        case DELETE_TODO:
            return {
                ...state,
                // Lọc ra các todo không trùng với index cần xóa
                // action.payload chứa index của todo cần xóa
                todos: state.todos.filter((_, index) => index !== action.payload)
            };
        
        // Xử lý khi toggle trạng thái completed của todo
        case TOGGLE_TODO:
            return {
                ...state,
                // Map qua mảng todos và đảo ngược trạng thái completed của todo được chọn
                // action.payload chứa index của todo cần toggle
                todos: state.todos.map((todo, index) =>
                    index === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        
        // Trả về state hiện tại nếu không có action type phù hợp
        default:
            return state;
    }
}

// Export initialState để có thể sử dụng ở các file khác
export { initialState };
// Export reducer function làm default export
export default reducer;


