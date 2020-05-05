<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $handle = $next($request);

    if(method_exists($handle, 'header'))
    {
        // Standard HTTP request.

        $handle->header('Access-Control-Allow-Origin' , '*');
    }
    else
    {
        // Download Request?

        $handle->headers->set('Some-Other-Header' , 'value');
    }

    return $handle;

    }
}
