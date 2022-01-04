/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Ryan",
      showInfo: false,
      fruits: ["apple", "banana", "orange"],
      newFruit: "",
      todos: [],
      title: "",
    };
  },
  created: function () {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response.data);
      this.todos = response.data;
    });
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa...";
    },
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
    createTodo: function () {
      var params = { userId: 1, title: this.title, completed: false };
      axios.post("https://jsonplaceholder.typicode.com/todos", params).then((response) => {
        console.log(response.data);
        this.todos.push(response.data);
        this.title = "";
      });
    },
  },
});