
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
    },
    // 全部关闭
    REMOVE_ALL(state) {
        for (let i = 0; i < state.tags.length; i++) {
            if (state.tags[i].path !== '/home') {
                state.tags.splice(i, 1)
                i--
            }
        }
    },
    // 关闭其它
    REMOVE_OTHOR(state, path) {
        for (let i = 0; i < state.tags.length; i++) {
            if (state.tags[i].path !== '/home' && state.tags[i].path !== path) {
                state.tags.splice(i, 1)
                i--
            }
        }
    }
}
