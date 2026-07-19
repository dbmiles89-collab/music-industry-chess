<?php

namespace App\Http\Controllers;

use App\Models\Annotation;
use Illuminate\Http\Request;

class AnnotationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    return Annotation::orderBy('created_at', 'desc')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    $validated = $request->validate([
        'username' => 'nullable|string|max:50',
        'move_san' => 'required|string|max:10',
        'reasoning' => 'required|string|max:2000',
    ]);

    return Annotation::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(Annotation $annotation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Annotation $annotation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Annotation $annotation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Annotation $annotation)
    {
        //
    }
}
