<template>
  <section class="todo-list">
    <ul class="todo-list__list">
      <h2 class="todo-list__header">Задачи</h2>
      <Todo
        v-bind:todo="todo"
        v-bind:todos="todos"
        v-bind:todosInProgress="todosInProgress"
        v-bind:todosCompleted="todosCompleted"
        v-for="todo in todos"
        :key="todo"
      />
    </ul>
    <ul class="todo-list__list todo-list__list_in-progress">
      <h2 class="todo-list__header">В процессе</h2>
      <TodoInProgress
        v-bind:todo="todo"
        v-bind:todosInProgress="todosInProgress"
        v-bind:todosCompleted="todosCompleted"
        v-for="todo in todosInProgress"
        :key="todo"
      />
    </ul>
    <ul class="todo-list__list todo-list__list_ready">
      <h2 class="todo-list__header">Завершены</h2>
      <TodoCompleted
        v-bind:todo="todo"
        v-bind:todosCompleted="todosCompleted"
        v-for="todo in todosCompleted"
        :key="todo"
      />
    </ul>
  </section>
</template>

<script>
import Todo from "@/components/Todo";
import TodoInProgress from "@/components/TodoInProgress";
import TodoCompleted from '@/components/TodoCompleted';

export default {
  props: ["todos"],
  components: {
    Todo,
    TodoInProgress,
    TodoCompleted,
  },
  data() {
    return {
      todosInProgress: [],
      todosCompleted: [],
    };
  },
};
</script>

<style>

</style>