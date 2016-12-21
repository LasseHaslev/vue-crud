import { BaseCrudItem } from '../../index';
export default {
    template: `
        <div>
            <div style="
        padding-bottom: 100%;
        " :style="{
            'background-color': item ? item.hex : hex,
        }"></div>
        <p class="control">
            <input class="input" type="text" @blur="setHex" v-model="hex">
        </p>
        </div>
    `,

    data() {
        return {
            hex: '#CCC',
        }
    },

    methods: {
        setHex() {
            var myObject = this.item;
            myObject.hex = this.hex;
            this.update( myObject, this.index );
        }
    },

    mixins: [ BaseCrudItem ],
}
