import axios from 'axios';

const state = {
    todos: []
};

const getters = {
allTodos: (state) => state.todos,
}
const actions = {
    fetchTodos() {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            (response)=>{
                return response.data;
            }
        )
    }
};

const mutations = {};

export default{
    state,
    getters,
    actions,
    mutations
}