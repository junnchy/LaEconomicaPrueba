<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTransferenciaCajaRequest extends FormRequest
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
            'caja_emisora'=> 'required|different:caja_receptora',
            'caja_receptora' => 'required',
            'pesos' => 'numeric',
            'dolares' => 'numeric'
        ];
    }
}
