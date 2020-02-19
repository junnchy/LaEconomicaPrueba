<!DOCTYPE html>
<html lang="en">
<head>
    <link href="{{ public_path('css/app.css') }}" rel="stylesheet">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <title>Presupuesto La Economica</title>
</head>
<body>
    <table class="table table-sm border-bottom">
        <tbody> 
            <tr>
                <td>
                    <img src="{{public_path('assets/Logo-Completo(1).png')}}" width="200" height="75"> 
                    <br>
                    <div class="t">
                        <strong>CUIT:</strong> {{$datosEmpresa->cuit}}
                        <br>
                        <strong>Ingresos Brutos:</strong> {{$datosEmpresa->nroIgBrutos}}
                    </div>
                </td>
                <td>
                    <p class="h3"><strong>Presupuesto</strong></p>
                    <div class="t">
                        <strong>Fecha:</strong> {{$presupuesto->fecha_emision}}
                        <br>
                        <strong>telefono:</strong> {{$datosEmpresa->telefono}}
                        <br>
                        <strong>email:</strong> {{$datosEmpresa->email}}
                        <br>
                        <strong>Web:</strong> {{$datosEmpresa->web}}
                    </div>
                </td>                
            </tr>
            <tr>
                <td class="border-right">
                    <div class="t">
                        <strong>Cliente:</strong>  {{$presupuesto->cliente->nombre}}
                        <br>
                        <strong>Direccion:</strong> {{$presupuesto->cliente->direccion}}
                        <br>
                        <strong>Celular:</strong> {{$presupuesto->cliente->celular}}
                    </div>
                </td>
                <td>
                    <div class="t">
                        <strong>Vendedor:</strong> {{$presupuesto->vendedor->nombre}}
                        <br>
                        <strong>Condicion Iva:</strong> {{$presupuesto->cliente->condicion_iva->denominacion}}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="p">
        <table class="table table-striped table-sm" style="width:100%">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col" class="w-20">Precio unitario</th>
                    @if($presupuesto->cliente->condicion_iva_id === 1)
                        <th scope="col" class="w-10">Iva</th>
                    @endif
                    <th scope="col" class="w-10">Cantidad</th>
                    <th scope="col" class="w-20">Total de Linea</th>
                </tr>
            </thead>
            <tbody>
                @foreach($presupuesto->lineas as $linea)
                    <tr>
                        <td>{{$linea->producto->nombre}}</td>
                        <td class="w-20">${{$linea->precio}}</td>
                        @if($presupuesto->cliente->condicion_iva_id === 1)
                            <td class="w-10">{{$linea->producto->iva}}%</td>
                        @endif
                        <td class="w-10">{{$linea->cantidad}}</td>
                        <td class="w-20">${{$linea->total_linea}}</td>
                    </tr>
                @endforeach
            <tbody>
        </table>
        
        @if($presupuesto->cliente->condicion_iva_id === 1)
            <table class="table table-primary table-sm">
                <tr>
                    <td class="ml-2" colspan="2">
                        <div class="p">
                            <label>Detalles: </label>
                            <textarea 
                            class="form-control" 
                            id="detalle_presupuesto" 
                            rows="3">
                                {{$presupuesto->detalles}}
                            </textarea>
                        </div>
                    </td>
                    <th scope="col" class="w-10 text-center">
                        <p><strong>Subtotal</strong></p>
                        <p class="border-dark"> ${{$presupuesto->subtotal}}</p>
                    </th>
                    <th scope="col" class="w-10 text-center">
                        <p><strong>Iva</strong></p>
                        <p class="border-dark"> ${{$presupuesto->iva}}</p>
                    </th>
                    <th scope="col" class="w-20 text-center">
                        <p><strong>Total</strong> </p>
                        <p class="border border-dark"> ${{$presupuesto->total}}</p>
                    </th>
                </tr>
            </table>
        @endif  
    </div>
    @if($presupuesto->cliente->condicion_iva_id != 1)
    <table class="table mt-2">
        <tbody>
            <tr>
                <td class="ml-2">
                    <div class="p">
                        <textarea 
                        class="form-control" 
                        id="detalle_presupuesto" 
                        rows="3">
                            {{$presupuesto->detalles}}
                        </textarea>
                    </div>
                </td>
                <td class="w-25">
                    <div class="alert alert-primary text-center">
                        <p>Total</p>
                        <p class="h5"><strong>${{$presupuesto->total}}</strong></p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    @endif
    <table class="table table-sm fixed-bottom2 text-center">
        <td class="table-secondary">
            <div class="p">
                <p><strong> Comprobante no valido como factura </strong></p>
            </div>
        </td>
    </table>
</body>
</html>

<style>
    div.t{
        font-size: 10px;
    }
    div.p{
        font-size: 11px;
    }
    .w-10 {
        width: 10% !important;
    }    
    .w-20 {
        width: 20% !important;
    }
    .fixed-bottom2 {
        position: fixed;
        right: 0;
        bottom: 20;
        left: 0;
        z-index: 1030;
    }
</style>


