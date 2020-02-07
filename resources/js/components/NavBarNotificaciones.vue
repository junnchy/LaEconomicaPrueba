<template>
    <div>
        <a id="navbarDropdown" 
        class="nav-link" 
        href="#" 
        role="button" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false" v-pre>
            <h5 :class="notC">
                <i class="fas fa-bell"></i>
            </h5>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">
                Sin Notificaciones
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notC: "",
        }
    },

    computed: {
    },
}
</script>