<template>
  <div id="app">
    <div class="cabecalho">
      <p>Loja De Ingressos</p>
      <ListaCarrinho/>
    </div>
    <ListaIngressos/>
  </div>
</template>

<script>
import ListaCarrinho from './components/ListaCarrinho.vue';
import ListaIngressos from './components/ListaIngressos.vue';




export default {
  name: 'App',
  components: {
    ListaIngressos,
    ListaCarrinho
},
  methods:{

    }
}
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

#app {

}

.cabecalho {
  background: whitesmoke;
  height: max-content;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  padding-left: 40px;
  padding-right: 30px;
}

.cabecalho p {
  color: black;
  font-size: xx-large;
  font-style: italic;
  font-weight: bold;
}

@media only screen and (max-width: 300px) {
  .cabecalho p {
    font-size: x-large;
  }

  .cabecalho {
    gap: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }
}

.cabecalho img {
  width: 37px;
  height: 29px;
  cursor: pointer;
}
</style>
