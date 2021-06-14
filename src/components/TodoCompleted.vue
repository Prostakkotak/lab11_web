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

    <div>
      <p class="todo-list__date"><span>Начато:</span> {{ todo.date }}</p>
      <p class="todo-list__date"><span>Закончено:</span> {{ todo.dateEnd }}</p>
      <div class="todo-list__date"><span>Создано:</span> {{ todo.creationDate }}</div>
    </div>

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