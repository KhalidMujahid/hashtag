// vuejs
new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    subject: "",
    message: ""
  },
  methods: {
    async sendMessage() {
      const data = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      };

      try {
        await fetch("/submit", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
      } catch (error) {
        console.log(error);
      }
    }
  }
});
