<template>
<!-- Recibe como parametro el arreglo de filtro usualmente se llama filtered_... -->
<!-- 
    Para su uso incluir en codigo
        import Paginacion from '../components/Paginacion'
        
        components:{
            Paginacion
        },
        >>>>>>
            created(){
                ...
                this.$store.commit('setArregloPaginado', this.filtered_...)
            }
            computed: {
                ...
                ...mapState(['arregloPaginado']),
            },
            mutations:{
                ...mapMutations(['setArregloPaginado']),
            }

            -------Llamada==============
                <Paginacion v-bind:filtered="filtered_...." v-bind:nro_filas="N"/>
            ============end---------

            Arreglo a iterar: arregloPaginado
        <<<<<<
 -->
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end pagination-sm">
                <li :class="downType">
                <a class="page-link" aria-label="Previous"  @click="changePageDown()">
                    <i class="fas fa-backward"></i>
                </a>
                </li>
                <li class="page-item" v-for="(item, index) in count" :key="index">
                    <a class="page-link" @click="numero(item)">{{item+1}}</a>
                </li>
                <li :class="upType">
                <a class="page-link" aria-label="Next" @click="changePageUp()">
                    <i class="fas fa-forward"></i>
                </a>
                </li>
            </ul>
        </nav>
        {{paginado}}
    </div>
</template>

<script>
import {mapActions, mapState, mapGetters, mapMutations} from 'vuex'

export default {
    data() {
        return {
            upType: "page-item",
            downType:"page-item disabled",
            cantidadDeLineas: 0,
            linePerPage: this.nro_filas,
            nro: 0,
            ult: 0,
            paginas: [],
            act: 1,
            nroItems: 3,
            pDesde: 0,
            PHasta: 3
        }
    },
    props:{
        filtered:{
            type:Array,
            required: true
        },
        nro_filas:{
            type:Number,
            required: true    
        }
    },
    methods: {
        changePageUp(){
            this.act++
            this.pDesde += this.nroItems
            this.PHasta += this.nroItems
            if (this.act === 1) {
                this.downType = "page-item disabled"
            }else{
                this.downType = "page-item"
            }

            if (this.act === this.ult) {
                this.upType = "page-item disabled"
            }else{
                this.upType = "page-item"
            }
        },
        changePageDown(){
            this.act--
            this.pDesde -= this.nroItems
            this.PHasta -= this.nroItems
            if (this.act === 1) {
                this.downType = "page-item disabled"
            }else{
                this.downType = "page-item"
            }
            
            if (this.act === this.ult) {
                this.upType = "page-item disabled"
            }else{
                this.upType = "page-item"
            }
        },
        numero(n){
            this.nro = n
        }
    },
    created() {
    
    },
    computed: {
        ...mapState(['arregloPaginado']),
        count(){
            let aux
            this.paginas = []
            this.cantidadDeLineas = this.filtered.length
            aux = Math.ceil(this.cantidadDeLineas / this.linePerPage)
            for (let index = 0; index < aux; index++) {
                this.paginas.push(index)
            }
            this.ult = Math.ceil(this.paginas.length / this.nroItems)
            return this.paginas.slice(this.pDesde, this.PHasta) 
        },
        paginado(){
            let desde 
            let hasta
            if (this.nro === 0) {
                desde = 0
                hasta = this.linePerPage
            }else{
                desde = this.nro*this.linePerPage
                hasta = desde + this.linePerPage
            }
            let aux = this.filtered.slice(desde,hasta)
            this.$store.commit('setArregloPaginado', aux) 
        }
    },
    mutations:{
        ...mapMutations(['setArregloPaginado']),
    }
}
</script>