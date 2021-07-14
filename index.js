/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Ryan",
      showInfo: false,
      fruits: ["apple", "banana", "orange"],
      newFruit: "",
      todos: []
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa...";
    },
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
    loadTodos: function() { 
      axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        console.log(response.data);
        this.todos = response.data;
      });
    },  
  },
});
