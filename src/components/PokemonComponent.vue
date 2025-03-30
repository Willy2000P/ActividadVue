<template>

        <div class="block-container">
                <div v v-if="disponible == 1" class="card card-true">
                    
                        <span v-if="disponible == 1" class="disponibilidad dispon-si">Disponible</span>
                        <span v-else class="disponibilidad dispon-no">No Disponible</span>
                        <img :src="imagen" alt="">
                        <h3>{{ nombre }}</h3>
                        <span :style="{
                            'background-color': color
                        }" class="span">{{ tipo }}</span>
                        <ButtonPrime @click="openModal">Abrir</ButtonPrime>
                </div>

                <div v v-else class="card card-false">
                    
                    <span v-if="disponible == 1" class="disponibilidad dispon-si">Disponible</span>
                    <span v-else class="disponibilidad dispon-no">No Disponible</span>
                    <img :src="imagen" alt="">
                    <h3>{{ nombre }}</h3>
                    <span :style="{
                        'background-color': color
                    }" class="span">{{ tipo }}</span>
                    <ButtonPrime @click="openModal">Abrir</ButtonPrime>

                </div>
        </div>


        
        <DialogPrime
        :visible="abierto" 
        maximizable 
        modal 
        header="Header" 
        :style="{ width: '50rem' }" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        >
            <div >
           
                <div class="card card-true">
                    
                        <span v-if="disponible == 1" class="disponibilidad dispon-si">Disponible</span>
                        <span v-else class="disponibilidad dispon-no">No Disponible</span>
                        <div class="card-div">
                            <ImagePrime class="card-image"  :src="imagen" alt="" preview />
                        </div>
                        <h3>{{ nombre }}</h3>
                        <span :style="{
                            'background-color': color
                        }" class="span">{{ tipo }}</span>
                        <ButtonPrime @click="closeModal">Cerrar</ButtonPrime>
                </div>

                
        
            </div>
        </DialogPrime>
  
</template>

<script>
export default {
    name: "PokemonComponent",

    data(){
    return {

      abierto: false
    }
    },

    props: {
        id: Number,
        imagen: String,
        nombre: String,
        tipo: String,
        color: String,
        disponible: Number
    },

    methods: {
        alertPokemon: function (nombre) {
            alert(`Ha seleccionado el Pokemon ${nombre}`)
            return
        },

        closeModal: function() {
            this.abierto = false
        },

        openModal: function() {
            this.abierto = true
        }


        
    }

}
</script>

<style scope>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



.card-div {
    display: flex;
    justify-content: center;
    align-items: center;
}


.card-image {
    width: 100px;
}

.block-container {
    display: flex;
    padding: 1rem;

}
.card {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    
}

img {
    width: 100%;
}

.span {

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    width: 100%;

}

.disponibilidad {
    position: absolute;
    top: 0;
    right: 0;
    background-color: green;
    color: white;
    padding: 5px;
    border-radius: 12px;
    margin: 4px;
}

.dispon-si {
    background-color: green;
    

}


.dispon-no {
    background-color: red;
    

}

.card-true {
    cursor: pointer;
}

.card-true img {
    transition: filter 0.3s ease-in-out; 
}



.card-false {
    background-color: lightgray;
    cursor: not-allowed;
}

.card-false img {
    transition: filter 0.3s ease-in-out; 
}

.card-false:hover img {
    filter: grayscale(100%); 
}
</style>
