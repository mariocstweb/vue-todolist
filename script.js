console.log("ok", Vue);

const { createApp } = Vue;
const app = createApp({
  data: () => ({
    tasks: [
      { id: 1, done: false, text: "Fare la spesa" },
      { id: 2, done: true, text: "Lavare i capelli" },
      { id: 3, done: false, text: "Comprare una marca da bollo" },
      { id: 4, done: false, text: "Aggiornare il PC" },
    ],
  }),
  methods: {
    removeTasks(id) {
      const newTasks = this.tasks.filter((task) => {
        if (id !== task.id) {
          return true;
        } else {
          return false;
        }
      });
      this.tasks = newTasks;
    },
  },
});

app.mount("#root");
