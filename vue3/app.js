Vue.createApp({
	data: () => ({
		name: 'Jordan',
		age: 28,
		image:
			'https://media.licdn.com/dms/image/C4E03AQEZX4DbhoL6rw/profile-displayphoto-shrink_800_800/0/1644869564784?e=1677110400&v=beta&t=TQLAw1AEwSh8kQhStxS1N2OZJJKsGqtvFDAYQdZOoQY',
	}),
	methods: {
		oldAge: () => this.age + 5,
		randomNumber: () => Math.random(),
	},
}).mount('#assignment')
