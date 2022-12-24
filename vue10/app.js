Vue.createApp({
	data: () => ({
		task: '',
		tasks: [],
		show: true,
	}),
	computed: {
		hideShowLabel() {
			return this.show ? 'Hide' : 'Show'
		},
	},
	methods: {
		add() {
			this.tasks.push(this.task)
			this.task = ''
		},
		toggle() {
			this.show = !this.show
		},
	},
}).mount('#assignment')
