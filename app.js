const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addOne() {
      this.counter++;
    },
    subtractOne() {
      this.counter--;
    },
  },
});

app.mount("#events");
