import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivaComponent from "./components/DirectivaComponent.vue";
import PropiedadConmutada from "./components/PropiedadConmutada.vue";
import MetodosFilters from "./components/MetodosFilters.vue";

const misRutas = [
    {
        path:"/",component: HomeComponent
    },
    {
        path:"/musica",component: MusicaComponent
    },
    {
        path:"/cine",component: CineComponent
    },
    {
        path:"/hooks",component: CicloVida
    },
    {
        path:"/direc",component: DirectivaComponent
    },
    {
        path:"/propiedad",component: PropiedadConmutada
    },
    {
        path:"/filtrar",component: MetodosFilters
    }
]

//CREAMOS UNA CONSTANTE QUE CONTENDRA LAS RUTAS Y EL HISTORIAL
//DICHA CONSTANTE SERA LA QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router = createRouter({
    history: createWebHistory(),
    routes: misRutas 
});

//POR ULTIMO, EXPORTAR LA CONSTANTE ROUTER
export default router;