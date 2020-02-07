
export default {
    // 存储tags
    SET_TAGS(state, data) {
        let flag = state.tags.some(item => {
            return item.path === data.path
        })
        
        if (!flag) {
            state.tags.push(data)
        }
    },
    // 移除tags
    REMOVE_TAGS(state, data) {
        state.tags.forEach((item, i) => {
            if (item.path === data.path) {
                state.tags.splice(i, 1)
            }
        })
    }
}
