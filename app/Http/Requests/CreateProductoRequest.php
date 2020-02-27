<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombre' => 'required',
            'precioBase' => 'required|numeric',
            'precioBase' => 'numeric|gt:0',
            'iva' => 'required|numeric',
            'iva' => 'numeric|gt:0',
            'rentabilidad' => 'required|numeric',
            'rentabilidad' => 'numeric|gt:0',
            'proveedor_id' => 'required',
            'proveedor_id' => 'numeric|gt:0',
            'categoria_id' => 'required',
            'categoria_id' => 'numeric|gt:0'
        ];
    }
}
