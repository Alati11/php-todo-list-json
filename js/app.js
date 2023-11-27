const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Lista di cose da fare",
			todos : [
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
	},
	created() {
		this.fetchTodos()
	},

}).mount('#app')
