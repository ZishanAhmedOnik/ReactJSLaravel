<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function create(Request $request) {
        echo $request->name;
    }

    public function test() {
        return response(['hello, world']);
    }
}
