export default {
    props: {
        index: {
            type: Number,
            required: true,
        },

        item: {
            type: Object,
            default() {
                return {};
            }
        }
    },

    methods: {
        remove() {
            this.$emit( 'remove', this.index );
        },
        update( item ) {
            this.$emit( 'update', item, this.index );
        },
    }
}
