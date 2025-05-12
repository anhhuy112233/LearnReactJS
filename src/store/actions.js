/**
 * File định nghĩa các action creators
 * Action creators là các hàm tạo ra các action object
 */

import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./constants";

/**
 * Action creator để cập nhật giá trị input
 * @param {string} input - Giá trị mới của input
 * @returns {Object} Action object với type SET_TODO_INPUT
 */
export const setTodoInput = (input) => ({
    type: SET_TODO_INPUT,
    payload: input,
});

/**
 * Action creator để thêm một todo mới
 * @returns {Object} Action object với type ADD_TODO
 */
export const addTodo = () => ({
    type: ADD_TODO,
});

/**
 * Action creator để xóa một todo
 * @param {number} index - Index của todo cần xóa
 * @returns {Object} Action object với type DELETE_TODO
 */
export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    payload: index,
});

/**
 * Action creator để toggle trạng thái completed của todo
 * @param {number} index - Index của todo cần toggle
 * @returns {Object} Action object với type TOGGLE_TODO
 */
export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    payload: index,
});




