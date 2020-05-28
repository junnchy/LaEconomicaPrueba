<template>
    <div>
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        :class="fPassword" 
                        name="password" 
                        placeholder="Contraseña"
                        v-model="usuario.password"/>
                    <span class="invalid-feedback" role="alert" v-if="errors.password != ''"> 
                        <strong>{{errors.password[0]}}</strong>
                    </span>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>Confirmación de Contraseña</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        name="password_confirmation" 
                        placeholder="Confirmación de Contraseña"/>
                </div>
            </div>            
        </div>
        {{validar}}
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            fPassword: "form-control",
            formClass: "form-control",
            iFormClass: "form-control is-invalid"
        }
    },
    props:{
        usuario:{
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapState('usuarios',['errors']),
        validar(){
            if(this.errors.password != ''){
                this.fPassword = this.iFormClass
            } else{
                this.fPassword = this.formClass
            }
        }
    }
}
</script>