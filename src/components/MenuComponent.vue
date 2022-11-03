<template>
    <div>
        <nav>
            <uL>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/cine">cine</router-link>
                </li>
                <li>
                    <router-link to="/musica">Musica</router-link>
                </li>
                <li>
                    <router-link to="/hooks">Ciclo de vida</router-link>
                </li>
                <li>
                    <router-link to="/direc">Directiva</router-link>
                </li>
                <li>
                    <router-link to="/propiedad">Propiedad Conmutada</router-link>
                </li>
                <li>
                    <router-link to="/filtrar">Metodos filtrar</router-link>
                </li>
            </uL>
        </nav>
    </div>
</template>


<script>
    export default{
        name:"MenuComponent"
    }
</script>


<style scoped>
    ul#menu li {
        display: inline
    }
</style>