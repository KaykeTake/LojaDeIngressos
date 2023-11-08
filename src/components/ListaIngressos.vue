<template>
    <div class="container">
        <div class="ingresso" v-for="(item) in ing" :key="item.id">
            <p>Ingresso</p>
            <div class="boxIngresso">
                <label>{{ item.name }}</label>
                <label>quantidade: {{ item.integer }}</label>
                <label>valor: {{ item.valor }}</label>
            </div>
            <a href="#" @click.prevent="adicionarCarrinho(item)">Comprar</a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'ListaIngressos',
    
    computed: {
        ...mapState({
            ing: state => state.ingressos
        })
    },
    methods: {
        adicionarCarrinho(id){
            this.$store.dispatch('adicionarIngresso', id)
        }
    }
}
</script>

<style>
body {
    overflow-x: hidden;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.ingresso {
    width: 500px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.boxIngresso {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.ingresso p {
    color: white;
    font-size: small;
    font-weight: bold;
    white-space: nowrap;
    text-orientation: upright;
    writing-mode: vertical-rl;
    width: 100px;
    height: 100%;
    background-color: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 550px) {
    .ingresso {
        width: 150px;
        height: 500px;
        overflow: hidden;
        flex-direction: column;
        justify-content: space-between;
    }

    .ingresso p {
        height: 100px;
        width: 150px;
        white-space: normal;
        text-orientation: unset;
        writing-mode: horizontal-tb;
        align-items: center;
        justify-content: space-evenly;
    }
}
</style>