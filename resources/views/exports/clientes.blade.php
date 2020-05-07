<table>
    <thead>
    <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Condicion de Iva</th>
    </tr>
    </thead>
    <tbody>
    @foreach($clientes as $cliente)
        <tr>
            <td>{{ $cliente->nombre }}</td>
            <td>{{ $cliente->email }}</td>
            <td>{{ $cliente->condicion_iva->denominacion}}</td>
        </tr>
    @endforeach
    </tbody>
</table>
