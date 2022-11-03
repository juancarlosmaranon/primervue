<template>
    <div>
        <h1>Hooks VUE</h1>
        <button @click="cambiarSaludo()">Despidete chaval</button>
        <h2>
            {{saludo}}
        </h2>
    </div>
</template>

<script>
    export default{
        name:"CicloVida",
        data(){
            return{
                saludo: "Hola palomo"
            }
            
        },
        methods:{
            //AQUI INCLUIMOS NUESTROS METODOS PERSONALIZADOS
            cambiarSaludo(){
                //TODA VARIABLE O METODO DEBEMOS LLAMARLO CON THIS
                this.saludo = "Adios mamañema";
            }
        },
        mounted(){
            console.log("Component montado");
        },
        created(){
            console.log("Component creado");
        },
        unmounted(){
            console.log("Component destruido");
        },
        updated(){
            console.log("Component modificado");
        }
    }
</script>

<style>
</style>