<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';


export default {
    data() {
        return {
            ingredientes: ['Alho', 'Manteiga', 'Orégano',]
        }
    },
    components: {SelecionarIngredientes}
}
</script>


<template>
    <main class="conteudo-principal">
        <section>
            <span class="subtitulo-lg sua-lista-texto">
                Sua lista: 
            </span>
            <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
                <li v-for="ingrediente in ingredientes" :key="ingrediente" class="ingrediente">
                     {{ ingrediente }}
                </li>

        </ul>

        <p v-else class="parafrafo lista-vazia">
          <img src="../assets/image/iconepesquisa.svg" alt="Icone de pesquisa">
          Sua lista está vazia selecione ingredientes para iniciar.
        </p>
        </section>

        <SelecionarIngredientes/>
    </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.conteudo-principal section {
  margin-top: 50px;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}
li.ingrediente {
  padding: 5px;
  background-color: var(--coral);
  color: var(--creme);
  font-weight: bold;
  border-radius: 4px;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>