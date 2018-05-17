<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Notification;

class NotificationController extends Controller
{
    public function create(Request $request) {
        $notification = new Notification();
        $notification->notification = $request->notification;
        $notification->save();

        return response()->json($notification, 200);
    }

    public function get() {
        return Notification::orderBy('created_at', 'desc')->get();
    }
}
