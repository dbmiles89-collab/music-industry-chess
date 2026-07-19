<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
use App\Http\Controllers\AnnotationController;

Route::post('/annotations', [AnnotationController::class, 'store']);
Route::get('/annotations', [AnnotationController::class, 'index']);
