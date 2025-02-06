<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        $articles = Article::where('is_published', true)
            ->paginate();

        return view('index', compact('articles'));
    }
}
