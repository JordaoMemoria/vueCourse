const app = Vue.createApp({
	data: () => ({
		counter: 10,
		name: '',
		lastName: '',
		// fullname: '',
	}),
	watch: {
		counter(value) {
			if (value > 50) {
				const that = this
				setTimeout(() => {
					that.counter = 0
				}, 2000)
			}
		},
		// name(value) {
		// 	value === ''
		// 		? (this.fulname = '')
		// 		: (this.fullname = value + ' ' + this.lastName)
		// },
	},
	computed: {
		fullname() {
			return this.name === '' && this.lastName === ''
				? ''
				: this.name + ' ' + this.lastName
		},
	},
	methods: {
		submitForm() {
			alert('Submitted')
		},
		setName(event) {
			this.name = event.target.value
		},
		outputName(lastName) {
			console.log('outputName method')
			return this.name === '' ? '' : this.name + ' ' + lastName
		},
		count(n) {
			this.counter += n
		},
		resetInput() {
			this.name = ''
		},
	},
})

app.mount('#events')
