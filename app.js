const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addOne() {
      return this.counter++;
    },
    subtractOne() {
      return this.counter--;
    },
  },
});

app.mount("#events");
