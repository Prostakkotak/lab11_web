<template>
  <section
    tabindex="0"
    v-bind:class="{ 'form-section': true, 'form-section_open': $store.state.modalOpening }"
    @keyup.esc="$store.dispatch('closeModal')"
    @click.self="$store.dispatch('closeModal')"
  >
    <AddTodo :todos="todos" v-if="mode === 'createTodo'" />
    <ChangeTodo v-else-if="mode === 'changeTodo'" />
  </section>
</template>

<script>
import AddTodo from './AddTodo.vue';
import ChangeTodo from './ChangeTodo.vue';

export default {
  props: ["todos", "mode", "id", "todoStatus"],
  methods: {
    onSubmit() {
      if (this.name.trim()) {
        let newTodo = {
          name: this.name,
          priority: this.priority,
          status: "backlog",
        };

        this.$store.commit("increaseTodosCounter");
        newTodo.id = this.$store.state.todosCounter;

        let timeElapsed = Date.now();
        let today = new Date(timeElapsed);

        let options = {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          timezone: "UTC",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        };

        newTodo.creationDate = today.toLocaleDateString('ru', options)

        this.todos.push(newTodo);
        this.name = "";
        this.$store.commit('modalOpeningSwitch', false)
        setTimeout(() => {
          this.$store.dispatch('closeModal')
        }, 10);
      }
    }
  },
  data() {
    return {
      name: "",
      priority: "",
    };
  },
  components: {AddTodo, ChangeTodo},
};
</script>

<style>
</style>