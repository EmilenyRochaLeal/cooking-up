<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';

export default {
    props:{
        categoria: {type: Object as PropType<ICategoria>, required: true},
        
  },
    }
</script>

<template>
    <article class="categoria">
        <header class="categoria_cabecalho">
            <img :src="`/images/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria_imagem">

            <h2 class="paragrafo-lg categoria_nome">
                {{ categoria.name }}
            </h2>
        </header>

        <ul class="categoria__ingredientes">
            <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
                {{ ingrediente }}
            </li>
        </ul>
    </article>
</template>
  