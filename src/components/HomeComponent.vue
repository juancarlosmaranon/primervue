<template>
    <router-view></router-view>
    <div>
        <h1>Componente Home</h1>
        <img src="./../assets/images/home.png"/>
    </div>
</template>

<script>
export default {
    name: "HomeComponent"
}
</script>

<style scoped>
    @import './../assets/css/estilosvue.css';
</style>