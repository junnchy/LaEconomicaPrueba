@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="container bg-primary">
            <div class="col-md-8">
                    <h1 class="text-light">Productos</h1>
            </div>
        </div>
        <div class="container mt-3">
          <div class="row">
              <div class="col-md-3">
                  <a class="btn btn-outline-success" href="{{route('productos.create')}}">Agregar nuevo</a>
              </div>  
          </div>
          <!--Buscador sacado de https://bootsnipp.com/snippets/35V6b-->
          <div class="container"><br/>
            <div class="row justify-content-center">
              <div class="col-12 col-md-10 col-lg-8">
                <form class="card card-sm">
                  <div class="card-body row no-gutters align-items-center">
                    <div class="col-auto">
                      <i class="fas fa-search h4 text-body"></i>
                    </div>
                    <!--end of col-->
                    <div class="col">
                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Producto a buscar">
                    </div>
                    <!--end of col-->
                    <div class="col-auto">
                      <button class="btn btn-lg btn-primary" type="submit">Buscar</button>
                    </div>
                    <!--end of col-->
                  </div>
                </form>
              </div>
              <!--end of col-->
              </div>
            </div>  
        </div>
        <div class="container mt-5">
          <div class="row">
              @foreach ($productos as $producto)
                <div class="col-md-4">
                  <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">{{$producto->id}}</h5>
                      <h5 class="card-subtitle">{{$producto->nombre}}</h5>
                      <p class="card-text">${{$producto->precioBase}}</p>
                      <a href="{{route('productos.show', $producto)}}" class="btn btn-primary">Ver mas</a>
                    </div>
                  </div>
                </div>
              @endforeach
          </div>
        </div>
    </div>
    
@endsection