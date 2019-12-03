<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVendedorRequest extends FormRequest
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
            'dni' => 'required|unique:vendedores,dni,'.$this->route('vendedore'),
            'cuil' => 'required|unique:vendedores,cuil,'.$this->route('vendedore'),
            'email' => 'email|required|unique:vendedores,email,'.$this->route('vendedore'),
            'password' => 'nullable|confirmed'
        ];
    }
}
