<template>
    <div>
        <h1 class="text-center">Tablas de Datos de Clientes</h1>
        <ul class="nav nav-tabs mt-4">
            <li class="nav-item">
                <a :class="ctab0" href="#" @click="setTab(0)">Localidades</a>
            </li>
            <li class="nav-item">
                <a :class="ctab1" href="#" @click="setTab(1)">Categorias</a>
            </li>
            <li class="nav-item">
                <a :class="ctab2" href="#" @click="setTab(2)">Condicones de Iva</a>
            </li>
        </ul>
        <!--Localidades-->
        <div :class="containers" v-if="tab === 0">
            <div class="row">
                <div class="col-8">
                    <h3>Localidades</h3>
                </div>
                <div class="col-4">
                    <componente-fagregarlocalidad/>
                </div>
            </div>
            <div class="container mt-4">
                <componente-lidadolocalidades/>
            </div>
        </div>
        <!--Categorias de Cliente-->
        <div :class="containers" v-if="tab === 1">
            <div class="row">
                <div class="col-8">
                    <h3>Categorias Cliente</h3>
                </div>
                <div class="col-4">
                    <componente-fagregarcatecli/>
                </div>
            </div>
            <div class="container mt-4">
                <componente-lidadocategoriascli/>
            </div>
        </div>
        <!--Condiciones de Iva-->
        <div :class="containers" v-if="tab === 2">
            <h3 class="text-center">Condiciones de Iva</h3>
            <div class="container mt-4">
                <componente-lidadocondicionesiva/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tab: 0,
            ctab0: 'nav-link active',
            ctab1: 'nav-link',
            ctab2: 'nav-link',
            containers: 'container mt-4'
        }
    },
    methods:{
        setTab(nro){
            this.tab = nro
            if (this.tab===0) {
                this.ctab0 ='nav-link active'
                this.ctab1 ='nav-link',
                this.ctab2 ='nav-link'
            }
            if (this.tab===1) {
                this.ctab0 ='nav-link'
                this.ctab1 ='nav-link active'
                this.ctab2 ='nav-link'
            }
            if (this.tab===2) {
                this.ctab0 ='nav-link'
                this.ctab1 ='nav-link'
                this.ctab2 ='nav-link active'
            }
        }
    }
    
}
</script>