# @lassehaslev/vue-crud

> Create read update delete logic for Vue

# Installation
Run ```npm install @lassehaslev/vue-crud --save``` in your project folder

## Usage
```js
import Crud from '@lassehaslev/vue-crud';
export default {

    mixins: [ Crud ],

    template: `
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
        <button @click="append(null)" class="button is-primary">Append empry</button>
        <button @click="prepend(null)" class="button is-primary">Prepend empry</button>
        <button @click="removeAll" class="button is-danger">Delete all</button>
    </section>
    `,

    data() {
        return {
            items: [
                'Html',
                'Css',
                'Javascript',
            ],
        }
    },
```

## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
