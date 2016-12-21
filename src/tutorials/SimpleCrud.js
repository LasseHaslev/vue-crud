import Crud from '../index';
export default {

    mixins: [ Crud ],

    template: `
    <section class="section">
        <div class="container">

        <h3 class="title">Add to list</h3>
        <div class="columns is-multiple">
            <div class="column">
                <h5 class="title is-4">Prepend</h5>
                <div>
                    <div v-for="item in itemsToAdd" style="margin-right: 3px;" @click="prepend( item )" class="button is-small control is-primary">{{ item }}</div>
                </div>
                <div class="button is-success is-large" @click="prepend( itemsToAdd )">Add all!</div>
            </div>
            <div class="column">
                <h5 class="title is-4">Append</h5>
                <div>
                    <div v-for="item in itemsToAdd" style="margin-right: 3px;" @click="append( item )" class="button is-small control is-primary">{{ item }}</div>
                </div>
                <div class="button is-success is-large" @click="append( itemsToAdd )">Add all!</div>
            </div>
        </div>

        <div class="button is-danger is-large" @click="removeAll">Delete all!</div>

        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th><div class="has-text-right">Action</div></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="( item, index ) in items">
                    <td>{{ item }}</td>
                    <td class="has-text-right">
                        <button class="button is-warning" @click="update( null, index )">Empty</button>
                        <button class="button is-danger" @click="removeItem( item )">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>

        </div>
    </section>
    `,

    data() {
        return {
            items: [
                'ActionScript.',
                'Ada (multi-purpose language)',
                'ALGOL (extremely influential language design – the second high level language compiler) ...',
            ],

            itemsToAdd: [
                'Ateji PX, an extension of the Java language for parallelism.',
                'BASIC (some dialects, including the first version of Dartmouth BASIC)',
                'BCPL.',
                'Blue.',
            ],
        }
    },

    components: {
        Crud
    },
}
