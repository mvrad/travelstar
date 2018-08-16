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

Route::view('/', 'pages.home');
Route::view('/about', 'pages.about');
Route::view('/attractions', 'pages.attractions');
Route::view('/activities', 'pages.activities');
Route::view('/media', 'pages.media');
Route::view('/map', 'pages.map');