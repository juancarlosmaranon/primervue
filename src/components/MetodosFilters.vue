<template>
    <div>
        <h1>Metodos Filters</h1>
        <ul v-for="num in numeros" :key="num">
            {{$filters.getNumeroDoble(num)}}
        </ul>
        <ul>
            <li v-for="name in nombres" :key="name">
                {{$filters.mayuscula(name) }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"MetodosFiltrar",
        data(){
            return{
                nombres:["elpepe","yeizy","eljotase","jc","lanevula"],
                numeros:["1","3","5","7","9"]
            }
        }
    }
</script>

<style>
</style>