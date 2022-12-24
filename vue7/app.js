Vue.createApp({
	data: () => ({
		boxA: false,
		boxB: false,
		boxC: false,
	}),
	computed: {
		boxAClasses() {
			return { active: this.boxA }
		},
	},
	methods: {
		boxSelected(box) {
			switch (box) {
				case 'A':
					this.boxA = !this.boxA
					break
				case 'B':
					this.boxB = !this.boxB
					break
				case 'C':
					this.boxC = !this.boxC
					break
			}
		},
	},
}).mount('#styling')
