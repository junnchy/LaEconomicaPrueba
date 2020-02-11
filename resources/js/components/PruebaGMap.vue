<template>
<div v-if="cliente.localidad">
    <GmapMap
    :center="latlog"
    :zoom="15"
    map-type-id="roadmap"
    style="width: block; height: 300px">
        <GmapMarker
            key=1
            :position="latlog"
            :clickable="true"
            :draggable="true"
            @click="center=buscar"
        />
    </GmapMap>
    {{buscar}}
</div>
</template>
<script>
import { Script } from 'vm'
import { mapState, mapActions } from 'vuex'

export default {
    props:{
        cliente:{
            type: Object,
            required: true
        }
    },
    data() {
        return {
            markers:[],
            posicion: {lat:-33.029912, lng:-60.651809},
            aux: 0,
            direccionActual: 'direccion',
            localidadActual: 0,
            state: null
            // markers:[{posicion: {lat:-32.9421951, lng:-60.6356147}}]
        }
    },
    created(){
        
    },
    mounted () {
        // At this point, the child GmapMap has been mounted, but
        // its map has not been initialized.
        // Therefore we need to write mapRef.$mapPromise.then(() => ...)
    
        /* this.$refs.mapRef.$mapPromise.then((map) => {
        map.panTo({lat:-33.029912, lng:-60.651809})
        }) */
    }, 
    methods:{

    },
    computed:{
        ...mapState('mapas',['latlog']),
        buscar(){
            if (this.cliente.localidad.id > 0 && this.cliente.direccion != '') {
                if (this.cliente.localidad.id != this.localidadActual || this.cliente.direccion != this.direccionActual){
                   let cad = `${this.cliente.direccion} ${this.cliente.localidad.nombre} ${this.cliente.localidad.provincia.iso_nombre}`
                    console.log(cad)
                    this.getDireccion(cad)
                    this.posicion.lat = this.latlog.lat
                    this.posicion.lng = this.latlog.lng
                    // console.log(this.posicion)
                    this.markers = []
                    this.markers.push(this.posicion)
                    this.direccionActual = this.cliente.direccion
                    this.localidadActual = this.cliente.localidad.id
                    // console.log(this.markers)
                    // return this.posicion 
               }else{
                // return this.posicion
            }
            }else{
                // return this.posicion
            }
        }  
    },
    methods:{
        ...mapActions('mapas', ['getDireccion']),
        ...mapActions('localidades', ['getLocalidad'])
    }
}
</script>

