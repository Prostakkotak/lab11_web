<template>
  <li class="todo-list__item">
    <p class="todo-list__name">
      {{ todo.name }} | id: {{ todo.id }} | Status: {{ todo.status }}
    </p>
    <p class="todo-list__date"><span>Начато:</span> {{todo.date}}</p>
    <p class="todo-list__employee"><span>Ответственный:</span> Вася</p>

    <div class="todo-list__buttons-block">
      <button
        v-on:click="onPromote"
        class="todo-list__button todo-list__button_promote"
      >
        Завершить
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
  props: ["todo", "todosInProgress", "todosCompleted"],
  methods: {
    onRemove: function () {
      for (let i = 0; i < this.todosInProgress.length; i++) {
        if (this.todosInProgress[i].id == this.todo.id) {
          this.todosInProgress.splice(i, 1);
          break;
        }
      }
    },
    onPromote: function () {
      this.todo.status = "done";

      let timeElapsed = Date.now();
      let today = new Date(timeElapsed);

      this.todo.dateEnd = today.toLocaleDateString();

      this.todosCompleted.push(this.todo);
      this.onRemove();

      console.log(this.todosCompleted);
    },
  },
};
</script>

<style>
</style>