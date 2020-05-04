<template>
    <div>
        <div class="card text-center">
            <div class="card-header">
                <h4>Datos</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6 border-right ">
                        <ul class="list-group list-group-flush text-left">
                            <li class="list-group-item">Fecha: <strong>{{ventaActual.created_at}}</strong> </li>
                            <li class="list-group-item">Cliente: <strong>{{ventaActual.cuenta.cliente.nombre}}</strong> </li>
                            <li class="list-group-item">Direccion:: <strong>{{ventaActual.cuenta.cliente.direccion}} - {{ventaActual.cuenta.cliente.localidad.nombre}}</strong> </li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="list-group list-group-flush text-left">
                            <li class="list-group-item">Vendedor: <strong>{{ventaActual.vendedor.nombre}}</strong></i>
                            <li class="list-group-item">Forma de Pago: <strong>{{ventaActual.fdp.descripcion}}</strong> </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        ventaActual:{
            type: Object
        }
    }
}
</script>