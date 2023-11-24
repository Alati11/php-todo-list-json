const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Lista di cose da fare",
            todos:[ ],  
        }
    },
    methods: {
		fetchData() {
			axios.get('./server.php').then((res) => {
				// console.log(res.data.text)
				this.todos = res.data.text  
			})
		},
	},
	created() {
		this.fetchData()
	},

}).mount('#app')
