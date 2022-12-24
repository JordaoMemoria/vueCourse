const randomNumber = (max, min) => Math.floor(Math.random() * (max - min)) + min

Vue.createApp({
	data: () => ({
		round: 0,
		playerHealth: 100,
		monsterHealth: 100,
		logs: [],
	}),
	computed: {
		pBar() {
			return { width: this.playerHealth + '%' }
		},
		mBar() {
			return { width: this.monsterHealth + '%' }
		},
		canSpecialAttack() {
			return this.round % 3 !== 0
		},
		finished() {
			return this.playerHealth === 0 || this.monsterHealth === 0
		},
		won() {
			return this.monsterHealth === 0
		},
		draw() {
			return this.playerHealth === 0 && this.monsterHealth === 0
		},
	},
	watch: {
		playerHealth(value) {
			if (value > 100) {
				this.playerHealth = 100
			} else if (value < 0) {
				this.playerHealth = 0
			}
		},
		monsterHealth(value) {
			if (value > 100) {
				this.monsterHealth = 100
			} else if (value < 0) {
				this.monsterHealth = 0
			}
		},
	},
	methods: {
		heal() {
			this.round++
			const h = randomNumber(20, 8)
			this.addLogMessage('Player', 'heals', h)
			this.playerHealth += h
			this.attackPlayer()
		},
		attack(max, min) {
			this.round++
			const damage = randomNumber(max, min)
			this.monsterHealth -= damage
			this.addLogMessage('Player', 'attack', damage)
			this.attackPlayer()
		},
		attackPlayer() {
			const damage = randomNumber(15, 8)
			this.addLogMessage('Monster', 'attack', damage)
			this.playerHealth -= damage
		},
		start() {
			this.round = 0
			this.playerHealth = 100
			this.monsterHealth = 100
			this.logs = []
		},
		surrender() {
			this.playerHealth = 0
		},
		addLogMessage(who, what, value) {
			this.logs.unshift({
				who,
				what,
				value,
			})
		},
	},
}).mount('#game')
