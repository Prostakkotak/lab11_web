<template>
  <section class="todo-list">
    <ul class="todo-list__list">
      <h2 class="todo-list__header">Backlog</h2>
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
      <h2 class="todo-list__header">In progress</h2>
      <TodoInProgress
        v-bind:todo="todo"
        v-bind:todosInProgress="todosInProgress"
        v-bind:todosCompleted="todosCompleted"
        v-for="todo in todosInProgress"
        :key="todo"
      />
    </ul>
    <ul class="todo-list__list todo-list__list_ready">
      <h2 class="todo-list__header">Done</h2>
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
.todo-list {
  margin-top: 50px;
  display: flex;
  flex-wrap: nowrap;
}

.todo-list__list {
  width: 33%;
  min-height: 500px;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
}

.todo-list__list:last-child {
  border-right: 0;
}

.todo-list__header {
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
}

@media screen and (max-width: 970px) {
  .todo-list {
    flex-wrap: wrap;
  }

  .todo-list__list {
    margin-bottom: 100px;
    border-right: 0;
    width: 100%;
  }
}
</style>