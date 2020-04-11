<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Coeficiente</th>
                    <th scope="col">Recargo</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(fdp, index) in formasDePago" :key="index">
                    <th scope="row">{{fdp.id}}</th>
                    <td>{{fdp.descripcion}}</td>
                    <td v-if="fdp.estado === 1"><p class="text-success"><i class="fas fa-check-circle"></i></p></td>
                    <td v-if="fdp.estado === 0"><p class="text-danger"><i class="fas fa-exclamation-circle"></i></p></td>
                    <td>{{fdp.coeficiente}}</td>
                    <td>{{fdp.recargo}}</td>
                    <td>
                        <modalEditarFDP v-bind:fdpid="fdp.id"/>
                    </td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
import modalEditarFDP from './ModalEditarFDP'
import { mapActions, mapState } from 'vuex'
export default {
    components:{
        modalEditarFDP
    },
    created(){
        this.getFormasDePago()
    },
    computed: {
        ...mapState('formasDePago', ['formasDePago'])
    },
    methods:{
        ...mapActions('formasDePago', ['getFormasDePago'])
    }
    
}
</script>