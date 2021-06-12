<template>
  <li class="todo-list__item">
    <p class="todo-list__name">
      {{ todo.name }} | id: {{ todo.id }} | Status: {{ todo.status }}
    </p>

    <p class="todo-list__date"><span>Начато:</span> {{todo.date}}</p>
    <p class="todo-list__date"><span>Закончено:</span> {{todo.dateEnd}}</p>
    <p class="todo-list__employee"><span>Ответственный:</span> Вася</p>

    <div class="todo-list__buttons-block">
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
  props: ["todo", "todosCompleted"],
  methods: {
    onRemove: function () {
      for (let i = 0; i < this.todosCompleted.length; i++) {
        if (this.todosCompleted[i].id == this.todo.id) {
          this.todosCompleted.splice(i, 1);
          break;
        }
      }
    },
  },
};
</script>

<style>
</style>