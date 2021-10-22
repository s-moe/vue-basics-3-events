const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    addOne(num) {
      this.counter = this.counter + num;
    },
    subtractOne(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
