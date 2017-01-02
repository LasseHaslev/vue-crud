import HasItems from './mixins/HasItems';
export default {

    mixins: [ HasItems ],

    methods: {
        removeItem( item ) {
            this.remove( this.items.indexOf( item ) );
        },
        remove( index ) {
            this.items.splice( index, 1 );
        },
        add( item ) {
            return this.prepend( item );
        },
        prepend( item ) {
            item = this.adaptor( item );
            if (item instanceof Array) {
                for (var i = item.length-1, len = 0; i >= len; i--) {
                    this.items.unshift( item[i] );
                }
                return;
            }
            this.items.unshift( item );
        },
        append( item ) {
            item = this.adaptor( item );
            if (item instanceof Array) {
                for (var i = 0, len = item.length; i < len; i++) {
                    this.items.push( item[i] );
                }
                return;
            }
            this.items.push( item );
        },
        update( item, index ) {
            item = this.adaptor( item );
            this.$set( this.items, index, item );
        },

        removeAll() {
            this.items = [];
        }
    }
}
