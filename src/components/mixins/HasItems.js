export default {
	props: {
	    objects: {
	        type: Array,
	        default: null,
	    },

        url: {
            type: String,
            default: null,
        },

        adaptor: {
            type:Function,
            default( item ) {
                return item;
            },
        },

        filter: {
            type:Function,
            default( item ) {
                return item;
            },
        },
	},

    mounted() {
        if ( this.$data.items ) {
            this.items = this.$data.items;
        }
    },

    computed: {
        items: {
            get() {
                return this.hiddenItems;
            },
            set( items ) {
                this.hiddenItems = items;
            }
        }
    },

	data() {
	    return {
	        hiddenItems: [],
	    }
	},

	methods: {
	    open() {
	        return '';
	    },
	},
}
