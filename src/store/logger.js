/**
 * File định nghĩa logger middleware
 * Middleware này giúp log các thay đổi state trong quá trình phát triển
 */

/**
 * Logger middleware
 * @param {Function} reducer - Reducer function
 * @returns {Function} Reducer function đã được wrap với logging
 */
const logger = (reducer) => {
    return (prevState, action) => {
        // Log thông tin về action và state
        console.group(action.type);
        console.log('Prev State:', prevState);
        console.log('Action:', action);
        
        // Gọi reducer để tính toán state mới
        const newState = reducer(prevState, action);
        
        // Log state mới
        console.log('New State:', newState);
        console.groupEnd();
        
        return newState;
    }
}

export default logger;
