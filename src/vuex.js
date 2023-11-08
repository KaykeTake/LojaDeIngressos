import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        ingressos: [{
            name: 'Liga das Lendas',
            integer: 5,
            valor: 10,
            id: 0
        },
        {
            name: 'Harry Potter',
            integer: 3,
            valor: 30,
            id: 1
        },
        {
            name: 'Star Wars',
            integer: 4,
            valor: 50,
            id: 2
        },
        {
            name: 'Senhor dos Anéis',
            integer: 2,
            valor: 20,
            id: 3
        }],
        ingcarrinho: [],
        valortotal: 0
    },
    mutations:{
        addCarrinho: (state, item) => {
            state.ingcarrinho.unshift({...item, integer: 1})
        },
        rmCarrinho: (state, item) => {
            state.ingcarrinho = state.ingcarrinho.filter(ingresso => ingresso.id !== item.id)
        },
        aumentarCarrinho: (state, item) => {
            const ingresso = state.ingcarrinho.findIndex(ingresso => ingresso.id === item.id)
            state.ingcarrinho[ingresso].integer += 1
        },
        dimunuirCarrinho: (state, item) => {
            const ingresso = state.ingcarrinho.findIndex(ingresso => ingresso.id === item.id)
            state.ingcarrinho[ingresso].integer -= 1
        },
        aumentarEstoque: (state, item) => {
            const origem = state.ingressos.findIndex(ingresso => ingresso.id === item.id)
            state.ingressos[origem].integer += 1
        },
        dimunuirEstoque: (state, item) => {
            const origem = state.ingressos.findIndex(ingresso => ingresso.id === item.id)
            state.ingressos[origem].integer -= 1
        },
        aumentarValor: (state, item) => {
            state.valortotal += item.valor 
        },
        diminuirValor: (state, item) => {
            state.valortotal -= item.valor 
        }
    },
    actions: {
        adicionarIngresso({state, dispatch}, item){
            if (state.ingcarrinho.some(ingresso => ingresso.id === item.id)){
                dispatch('incrementarIngresso', item)
            }
            else {
                dispatch('adicionarCarrinho', item)
            }
        },
        adicionarCarrinho({commit}, item){
            commit('addCarrinho', item)
            commit('dimunuirEstoque', item)
            commit('aumentarValor', item)
        },
        incrementarIngresso({state, commit}, item){
            const origem = state.ingressos.find(ingresso => ingresso.id === item.id)
            if (origem.integer <= 0){
                return
            }
            commit('aumentarCarrinho', item)
            commit('aumentarValor', item)
            commit('dimunuirEstoque', item)
        },
        removerIngresso({state, commit}, item){
            const ingresso = state.ingcarrinho.find(ingresso => ingresso.id === item.id)
            if (ingresso.integer <= 1){
                commit('rmCarrinho', item)
                commit('aumentarEstoque', item)
                commit('diminuirValor', item)
                return
            }
            commit('dimunuirCarrinho', item)
            commit('diminuirValor', item)
            commit('aumentarEstoque', item)
        }
    }

})

export { store }