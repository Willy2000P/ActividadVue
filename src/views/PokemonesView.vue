<template>
  <div class="pokemon-container">
    <div v-for="pokemon in pokemones" :key="pokemon.id">
        
        <PokemonComponent 
        :id="pokemon.id" 
        :nombre="pokemon.nombre"
        :color="pokemon.type_color"
        :imagen="pokemon.imagen"
        :tipo="pokemon.type_name"
        :disponible="pokemon.disponible"
        >
        </PokemonComponent>
    </div>
  </div>
  
</template>

<script>

import PokemonComponent from '@/components/PokemonComponent.vue';

export default {
    data() {

        return {
            pokemones: [],
        }
    },

    methods: {
        getAllPokemones: async function() {
            let url = "https://cobuses.com.co/APIV2/model/pokemon.php?dato=getallpokemon";
            let vue = this;
            await this.axios
            .get(url)
            .then(function(response) {
                console.log("Estos son los datos");
                console.log(response.data);
                
                console.log("Estos son los status");
                console.log(response.status);

                vue.pokemones = response.data;
                
            })
            .catch(function(error) {
                console.log(error);
                
            })
            .finally(function() {
                console.log("Operacion Finalizada");
                
            });

        }
    },

    created: function() {
        this.getAllPokemones()
    },


    components: {
        PokemonComponent
    
    }
}
</script>

<style scoped>

.pokemon-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin: 0 auto;
    width: 80%;
    gap: 8px;
}

</style>