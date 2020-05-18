<template>
    <div>
        <div class="row">
            <div class="col-12 text-center ">
                <h2>Menu Gastos </h2>
            </div>
        </div>
        <div class="container shadow-sm mt-3 p-3 bg-white rounded border border-secondary">
            <div class="row">
                <div class="col-12">
                    <router-link :to="{name:'categoriasDeGastos'}">
                        <button class="btn btn-outline-primary">
                            Categorias <i class="fas fa-sitemap"></i>
                        </button>  
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>