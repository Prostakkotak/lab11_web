<template>
  <li class="todo-list__item">
    <p class="todo-list__name">
      Задача №{{ todo.id }}
      <span
        v-bind:class="{
          'todo-list__priority': true,
          'todo-list__priority_1': todo.priority === '1',
          'todo-list__priority_2': todo.priority === '2',
          'todo-list__priority_3': todo.priority === '3',
        }"
        >{{ todo.priority }}</span
      >
    </p>

    <div class="todo-list__description">
      {{ todo.name }}
    </div>

    <div class="todo-list__date">
      <span>Создано:</span> {{ todo.creationDate }}
    </div>

    <div class="todo-list__buttons-block">
      <button
        v-on:click="onPromote"
        class="todo-list__button todo-list__button_promote"
      >
        В работу
      </button>
      <button
        v-on:click="onRemove"
        class="todo-list__button todo-list__button_remove"
      >
        Удалить
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["todo", "todosInProgress", "todos", "todosCompleted"],
  methods: {
    onPromote: function () {
      this.todo.status = "inProgress";

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

      this.todo.date = today.toLocaleDateString("ru", options);

      this.todosInProgress.push(this.todo);
      this.onRemove();

      console.log(this.todosInProgress);
    },
    onRemove: function () {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id == this.todo.id) {
          this.todos.splice(i, 1);
          break;
        }
      }
    },
  },
};
</script>

<style>
</style>