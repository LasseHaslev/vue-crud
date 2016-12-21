import Crud from '../index';
import CrudItem from './components/CrudItem';
export default {

    mixins: [ Crud ],

    template: `
    <section class="section">
        <div class="container">
            <h1 class="title">Crud item</h1>
            <div class="columns is-multiline">
                <div v-for="( item, index ) in items" class="column is-2">
        <crud-item @remove="remove" @update="update" :item="item" :index="index"></crud-item>
                </div>
                <div class="column is-2">
                    <div style="
                padding-bottom: 100%;
                background-color: #CCC;
                cursor: pointer;
                    "
    @click="append(null)"></div>
                </div>
            </div>
        </div>

    </section>
    `,

    data() {
        return {
            items: [
                {
                    name: 'Red',
                    hex: '#F00',
                },
                {
                    name: 'Green',
                    hex: '#0F0',
                },
                {
                    name: 'Blue',
                    hex: '#00F',
                },
            ],
        }
    },

    components: {
        CrudItem,
    },
}
