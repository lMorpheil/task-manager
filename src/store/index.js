import {createStore} from 'vuex'

export default createStore({
    state: {
        tasks: [],
    },
    getters: {
        tasks({tasks}) {
            return tasks;
        }
    },
    mutations: {
        addTasks(state, newTask) {
            state.tasks.push({
                id: Date.now(),
                title: newTask.title,
                text: newTask.text
            })
        },
        deleteTask(state, deletTask) {
            state.tasks = state.tasks.filter((item) => item.id !== deletTask)
        },
        getStore(state, newState) {
            this.replaceState(
                Object.assign(state, newState)
            );
        }
    },
    actions: {
        initializeStore(store) {
            if (localStorage.getItem('state')) {
                store.commit('getStore', JSON.parse(localStorage.getItem('state')));
            }
        },
    },
    modules: {},
    strict: process.env.MODE_ENV !== 'production',
})
