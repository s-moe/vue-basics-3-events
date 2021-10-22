const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addOne(num) {
      this.counter = this.counter + num;
    },
    subtractOne(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
