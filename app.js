const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      fullName: "",
    };
  },
  watch: {
    name(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = value + " " + "Moe";
      }
    },
  },
  computed: {
    // fullName() {
    //   console.log("hi");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Moe";
    // },
  },
  methods: {
    // outputFullName() {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Moe";
    // },
    resetInput() {
      this.name = "";
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted");
    },
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
