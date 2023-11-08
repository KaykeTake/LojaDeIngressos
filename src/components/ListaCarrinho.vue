<template>
    <div class="container">
        <img @click.prevent="teste" src="/carrinho.png" />
        <div class="carrinho" v-if="carrinho === true">
            <div class="ingressoCar" v-for="(item) in ing" :key="item.id">
                <div class="esquerdaCar">
                    <label>ingresso</label>
                </div>
                <div id="boxCar">
                    <label>{{ item.name }}</label>
                    <label>${{ item.valor }}</label>
                </div>
                <div class="controle">
                    <a href="#" @click.prevent="menos(item)">-</a>
                    <label>{{ item?.integer }}</label>
                    <a href="#" @click.prevent="mais(item)">+</a>
                </div>
            </div>
            <div>
                <span>Total: {{ valortotal }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'ListaCarrinho',

    computed: {
        ...mapState({
            ing: state => state.ingcarrinho,
            valortotal: state => state.valortotal
        })
    },
    data() {
        return {
            carrinho: false,
        }
    },
    methods: {
        teste() {
            this.carrinho = !this.carrinho
        },
        mais(item){
            this.$store.dispatch('incrementarIngresso', item)
        },
        menos(item){
            this.$store.dispatch('removerIngresso', item)
        }
    }
}
</script>
<style>
.carrinho {
    margin-right: 270px;
    margin-top: 40px;
    position: absolute;
    width: 300px;
    height: 300px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #d7d7d7;
}

.ingressoCar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#boxCar{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.esquerdaCar {
    height: 40px;
    width: 80px;
    color: white;
    background-color: blueviolet;
    display: flex;
    align-items: center;
    justify-content: center;
}
.controle{
    display: flex;
    gap: 3px;
}
.controle a{
    text-decoration: none;
    color: black;
}
</style>