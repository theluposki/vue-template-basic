//Components 
const Navigation = Vue.component('navigation', {
    template: '#navigation',
    data(){
        return {

        }
    },
    created(){},
    methods: {}
})
//Rotas
const Home = {
    template: '#home',
    data(){
        return {

        }
    },
    created(){},
    methods: {}
}

const Info = {
    template: '#info',
    data(){
        return {

        }
    },
    created(){},
    methods: {}
}

const routes = [
    { path:'/', component: Home },
    { path:'/info', component: Info },
]

const router = new VueRouter({ routes })

const app = new Vue({
    el:'#app',
    components: { Navigation },
    router,
    data(){
        return {
            titulo: 'VueJs'
        }
    }
})