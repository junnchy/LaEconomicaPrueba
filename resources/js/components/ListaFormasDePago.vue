<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Coeficiente</th>
                    <th scope="col">Recargo</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(fdp, index) in formasDePago" :key="index">
                    <th scope="row">{{fdp.id}}</th>
                    <td>{{fdp.descripcion}}</td>
                    <td>{{fdp.coeficiente}}</td>
                    <td>{{fdp.recargo}}</td>
                    <td>
                        <button class="btn btn-warning btn-sm">
                            Ver <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-primary btn-sm">
                            Editar <i class="fas fa-pencil-alt"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
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