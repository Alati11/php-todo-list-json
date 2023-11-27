console.log('todo')

const { createApp } = Vue

createApp({
    data() {
        return {
            message: "LISTA DI COSE DA FARE",
			newTodo: '', 
			todos: [
				// {
				// text:'HTML',
				// done : true,
				// },
				// {
				// text:'CSS',
				// done : true,
				// },
				// {
				// text:'JavaScript',
				// done : true,
				// },
				// {
				// text:'Python',
				// done : false,
				// },
			],
        }
    },
	methods: {
		fetchTodos() {
			axios.get('./server.php').then((res) => {
				console.log(res.data)
				this.todos = res.data.results
			})
		},
		storeTodo() {
			const data = {
				todo: this.newTodo,
			}

			axios
				.post('./store.php', data, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then((res) => {
					console.log(res.data)
					this.todos = res.data.results
				})
		},
		destroyTodo(index) {
			const data = {
				id: index,
			}

			axios.post('./destroy.php', data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
		},
	},
	created() {
		this.fetchTodos()
	},
}).mount('#app')