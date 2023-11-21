<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

public function index()
{
    $categories = Category::all()->toArray();
    return array_reverse($categories);
}


public function add(Request $request)
{
    $category = new Category([
        'title' => $request->title,
        'description' => $request->description
    ]);
    $category->save();

    return response()->json('The Category is successfully added');
}


public function edit($id)
{
    $category = Category::find($id);
    return response()->json($category);
}


public function update($id, Request $request)
{
    $category = Category::find($id);
    $category->update($request->all());

    return response()->json('The book successfully updated');
}


public function delete($id)
{
    $category = Category::find($id);
    $category->delete();

    return response()->json('The book successfully deleted');
}
}