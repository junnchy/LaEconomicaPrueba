<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateVendedorRequest extends FormRequest
{
    /**
     * Determine if the vendedor is authorized to make this request.
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
            'dni' => 'required|unique:vendedores,dni',
            'cuil' => 'required|unique:vendedores,cuil',
            'email' => 'email|required|unique:users,email',
            'password' => 'required|confirmed'
        ];
    }
}
