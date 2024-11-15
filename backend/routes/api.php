<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\FollowUpController;
use App\Http\Controllers\LeadController;
use App\Models\User;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware(['auth:sanctum', 'role:' . User::ADMIN])->group(function () {
    Route::post('/roles/create', [RoleController::class, 'store']);
    Route::post('/users/create', [UserController::class, 'store']);

    Route::post('/leads', [LeadController::class, 'store']);
    Route::get('/leads/get', [LeadController::class, 'index']);
    Route::get('/leads/{id}/followups', [LeadController::class, 'followUps']);

    Route::post('/followups', [FollowUpController::class, 'store']);   
    Route::put('/followups/{id}/status', [FollowUpController::class, 'update']);
});


Route::middleware(['auth:sanctum', 'role:' . User::SALES_MANAGER])->group(function () {
   

    Route::post('/leads', [LeadController::class, 'store']);
    Route::get('/leads/get', [LeadController::class, 'index']);
    Route::get('/leads/{id}/followups', [LeadController::class, 'followUps']);

    Route::post('/followups', [FollowUpController::class, 'store']);
    Route::put('/followups/{id}/status', [FollowUpController::class, 'update']);
});

Route::middleware(['auth:sanctum', 'role:' . User::SALES_REPRESENTATIVE])->group(function () {
   
    Route::post('/followups', [FollowUpController::class, 'store']);
    // Route::get('/leads/{id}/followups', [LeadController::class, 'followUps']);
});



Route::post('/login', [UserController::class, 'loginUser']);
Route::post('/users/logout', [UserController::class, 'logoutUser'])->middleware('auth:sanctum');



