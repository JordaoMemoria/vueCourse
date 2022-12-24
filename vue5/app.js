Vue.createApp({
	data: () => ({
		out1: 'OUTPUT',
		out2: 'OUTPUT',
	}),
	methods: {
		setOut1(event) {
			this.out1 = event.target.value
		},
		setOut2(event) {
			this.out2 = event.target.value
		},
		showAlert() {
			alert('New Alert')
		},
	},
}).mount('#assignment')
