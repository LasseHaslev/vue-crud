export default {
	props: {
	    objects: {
	        type: Array,
	        default: null,
	    },

        adaptor: {
            type:Function,
            default( item ) {
                return item;
            },
        },
	},

    mounted() {
        if ( this.$data.items ) {
            this.items = this.$data.items;
            return;
        }

        if ( this.$options.propsData.objects ) {
            // this.items = this.$options.propsData.objects.map( this.adaptor );
            this.items = this.adaptor(this.$options.propsData.objects);
            return;
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
}
