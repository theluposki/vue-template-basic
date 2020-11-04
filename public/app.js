//Components 
const Navigation = Vue.component('navigation', {
    template: '#navigation',
    data(){
        return {
            classMenuMobile: 'nav-links-mobile none'
        }
    },
    created(){},
    methods: {
        toggleMobile(){
            const none = 'nav-links-mobile none'
            const block = 'nav-links-mobile'

            this.classMenuMobile === 'nav-links-mobile' ? this.classMenuMobile = none : this.classMenuMobile = block
        },
    }
})
//Rotas
const Home = {
    template: '#home',
    data(){
        return {
            titulo: 'VueJs'
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
            
        }
    }
})