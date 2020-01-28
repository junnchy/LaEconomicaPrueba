<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateClienteRequest extends FormRequest
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
            'cuit' => 'required|unique:clientes,cuit',
            'email' => 'nullable|email|unique:clientes,email',
            'direccion' => 'required',
            'cat_clientes_id' => 'required',
            'condicion_iva_id' => 'required',
            'localidad_id' => 'required'
        ];
    }
}
