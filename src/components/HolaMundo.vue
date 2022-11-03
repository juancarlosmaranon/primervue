<template>
    <router-view></router-view>
    <div>
        <h1>Mi primer componente VUE!!!</h1>
        <h2>KLKENTOKI</h2>
        <img src="./../assets/images/home.png"/>
    </div>
</template>

<script> 
    //SIEMPRE DEBEMOS EXPORTAR EL NOMBRE DEL COMPONENTE
    //EN EL SCRIPT
    export default{
        name : "HolaMundo",
        data(){
            //AQUI DENTRO DEBEMO DEVOLVER LAS VARIABLES A UTILIZAR
            //EN EL COMPONENT
            return{
                nombre: "Alumno",
                numero: "14",
                miArray: []
            }
        }
    }
</script>


<style scoped>
    @import './../assets/css/estilosvue.css';
</style>