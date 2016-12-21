<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    <a href="https://github.com/LasseHaslev/vue-crud">
                        @lassehaslev/vue-crud
                    </a>
                </h3>
            </div>
        </section>

        <simple-crud></simple-crud>
        <simple-crud-item></simple-crud-item>

        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container is-fluid">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import SimpleCrud from './tutorials/SimpleCrud';
import SimpleCrudItem from './tutorials/SimpleCrudItem';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SimpleCrud,
        SimpleCrudItem,
    }
}
</script>
