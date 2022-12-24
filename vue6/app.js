Vue.createApp({
	data: () => ({ counter: 0 }),
	computed: {
		result() {
			if (this.counter > 37) {
				return 'Too much!'
			}
			if (this.counter === 37) {
				return '37'
			}
			return 'Not there yet'
		},
	},
	watch: {
		result() {
			const timeout = setTimeout(() => {
				this.counter = 0
				clearTimeout(timeout)
			}, 5000)
		},
	},
	methods: {
		add(n) {
			this.counter += n
		},
	},
}).mount('#assignment')
