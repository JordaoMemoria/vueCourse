Vue.createApp({
	data: () => ({
		info: '',
		show: 'visible',
		color: '',
	}),
	methods: {
		toggle() {
			console.log('cliked')
			this.show === 'visible' ? (this.show = 'hidden') : (this.show = 'visible')
		},
	},
}).mount('#assignment')
