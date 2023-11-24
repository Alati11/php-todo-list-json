const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Lista di cose da fare",
            todos:[
                {
                'text': 'HTML',
                'done' :false,
                },
                {
                'text' : 'CSS',
                'done' : false,
                },
                {
                'text' : 'JavaScript',
                'done' : true,
                },
                {
                'text' : 'PHP',
                'done' : true,
                },
                {
                'text' : 'Python',
                'done' : false,
                }
                
            ]
        }
    },
    methods: {
		fetchData() {
			axios.get('server.php').then((res) => {
				console.log(res.data.results)
				this.todos.todo = res.data.results
			})
		},
	},
	created() {
		this.fetchData()
	},

}).mount('#app')
