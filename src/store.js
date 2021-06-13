import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        darkTheme: localStorage.darkTheme || '0',
        todosCounter: 0,
        todos: [],
    },
    getters: {
        darkTheme(state) {
            return state.darkTheme;
        },
        todosCounter(state) {
            return state.todosCounter;
        }
    },
    mutations: {
        changeTheme(state) {

            /* Здесь такая кривая конструкция поскольку 
            localStorage может хранить только строки */

            if (state.darkTheme == '1') {
                state.darkTheme = '0';
                localStorage.darkTheme = '0';
            } else {
                state.darkTheme = '1';
                localStorage.darkTheme = '1';
            }
        },
        increaseTodosCounter(state) {
            state.todosCounter++;
        }
    }
});

export default store;