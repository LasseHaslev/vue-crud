import { BaseCrudItem } from '../../index';
export default {
    template: `
        <div>
            <div style="
        padding-bottom: 100%;
        " :style="{
            'background-color': item ? item.hex : '#CCC',
        }"></div>
        <p class="control">
            <input class="input" type="text" @blur="setHex" v-model="hex">
        </p>
        <div @click="remove" class="button is-danger is-fullwidth">Remove</div>
        </div>
    `,

    mounted() {
        if ( ! this.item ) {
            this.hex = '#CCC';
            this.setHex();
        }
        else {
            this.hex = this.item.hex;
        }
    },

    data() {
        return {
            hex: '#CCC',
        }
    },

    methods: {
        setHex() {
            this.update( { hex: this.hex }, this.index );
        }
    },

    mixins: [ BaseCrudItem ],
}
