const store = new Vuex.Store({
    state: {
        language: localStorage.getItem('lang')
    },
    mutations: {
        setLng(state) {
            state.language = localStorage.setItem(app.language)
        }
    },
    getters: {
        lang: state => {
            return state.language
        }
    }
})

export default store