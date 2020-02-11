<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/productos/home', 'HomeProductosController@index')->name('homeProductos');

Route::get('/usuarios/home', 'HomeUsersController@index')->name('homeUsers');

Route::resource('/proveedores', 'ProveedorControler')->middleware('auth');

Route::resource('/provincias', 'ProvinciaController')->middleware('auth');

Route::resource('/productos', 'ProductosController')->middleware('auth');

Route::resource('/categoria', 'CategoriaController')->middleware('auth');

Route::resource('/datosDeEmpresa', 'DatosEmpresaContoller')->middleware('auth');

Route::resource('/clientes', 'ClienteController')->middleware('auth');

Route::resource('/usuarios', 'UsersController')->middleware('auth');

Route::resource('/vendedores', 'VendedoresController')->middleware('auth');

Route::resource('/depositos', 'DepositoController')->middleware('auth');

Route::resource('/fichaStock', 'FichaDeStockController')->middleware('auth');

Route::resource('/presupuestos', 'PresupuestoController')->middleware('auth');

Route::resource('/lineaPresupuesto', 'LineaPresupuestoController')->middleware('auth');

Route::resource('/lineaFichaStock', 'LineaFichaStockController')->middleware('auth');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/proveedores/{any}', 'SpaController@proveedores')->where('any', '.*')->middleware('auth');

Route::get('/productos/{any}', 'SpaController@productos')->where('any', '.*')->middleware('auth');

Route::get('/clientes/{any}', 'SpaController@clientes')->where('any', '.*')->middleware('auth');\

Route::get('/comercial/{any}', 'SpaController@comercial')->where('any', '.*')->middleware('auth');

Route::resource('/localidades', 'LocalidadController')->middleware('auth');
Route::resource('/condicionIva', 'CondicionIvaController')->middleware('auth');
Route::resource('/categoriaCliente', 'CategoriaClienteController')->middleware('auth');


