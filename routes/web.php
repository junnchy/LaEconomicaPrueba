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

Route::resource('/proveedores', 'ProveedorControler')->middleware('auth');

Route::resource('/productos', 'ProductosController')->middleware('auth');

Route::resource('/categoria', 'CategoriaController')->middleware('auth');