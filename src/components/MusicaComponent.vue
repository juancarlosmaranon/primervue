<template>
    <router-view></router-view>
    <div>
        <h1 style="color:red">Componente Home</h1>
        <img src="./../assets/images/musica.png"/>
    </div>
</template>

<script>
export default {
    name: "CineComponent"
}
</script>

<style scoped>
    @import "./../assets/css/estilosvue.css"
</style>