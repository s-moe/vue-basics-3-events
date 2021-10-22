const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      confirmedName: "",
      // fullName: "",
    };
  },
  //can watch any property with them, or run something in reaction (non-data updates to make). Used the least.
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
  },
  //use computed for data binding - computed properties are only re-evaluated if one of their "used values" changed (not if other data changes)
  computed: {
    fullName() {
      console.log("hi");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  //use methods to bind data, event binding - for data it will be executed for every re-render, so it should only be used for event binding or data binding IF YOU WNAT IT TO RE-RENDER
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
