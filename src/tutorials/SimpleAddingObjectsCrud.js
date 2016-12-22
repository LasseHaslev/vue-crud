import Crud from '../index';

var Table = {

    mixins: [ Crud ],

    template: `
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="( item, index ) in items">
                        <td>{{ item }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
}

export default {

    template: `
    <section class="section">
        <div class="container">
            <h1 class="title">Adding Of crud elements with property</h1>
            <p>When adding items as property use "objects" as item prop.</p>
        <br>
        
            <p>You can use a adaptor when setting objects items  :adaptor="function( item ) {return 'Hello ' + item;}"</p>
            <vue-table :objects="[ 'hello', 'world' ]"></vue-table>
        </div>
    </section>
    `,

    components: {
        'vue-table': Table,
    }

}
