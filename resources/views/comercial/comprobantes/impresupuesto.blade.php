<!DOCTYPE html>
<html lang="en">
<head>
    <link href="{{ public_path('css/app.css') }}" rel="stylesheet">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <title>Presupuesto La Economica</title>
</head>
<body>
    <table class="table border-bottom">
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
                        <strong>Fecha:</strong> 
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
        <table class="table table-striped" style="width:100%">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio unitario</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total de Linea</th>
                </tr>
            </thead>
            <tbody>
                @foreach($presupuesto->lineas as $linea)
                    <tr>
                        <td>{{$linea->producto->nombre}}</td>
                        <td>${{$linea->precio}}</td>
                        <td>{{$linea->cantidad}}</td>
                        <td>${{$linea->total_linea}}</td>
                    </tr>
                @endforeach
            <tbody>
        </table>
    </div>
    <table class="table mt-2">
        <tbody>
            <tr>
                <td class="ml-2">
                    <textarea class="form-control" 
                    id="detalle_presupuesto" 
                    rows="3">
                        {{$presupuesto->detalles}}
                    </textarea>
                </td>
                <td class="w-25">
                    <div class="alert alert-primary text-center">
                        <p class="h5">Total</p>
                        <p class="h3"><strong>${{$presupuesto->total}}</strong></p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="alert alert-dark text-center p">
        <p>Comprobante no valido como factura</p>
    </div>
</body>
</html>

<style>
    div.t{
        font-size: 10px;
    }
    div.p{
        font-size: 12px;
    }    
</style>


