<template>
  <li class="todo-list__item">
    <p class="todo-list__name">
      {{ todo.name }} | id: {{ todo.id }} | Status: {{ todo.status }}
    </p>

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

      this.todo.date = today.toLocaleDateString();

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
.todo-list__item {
  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 20px auto;
  padding: 20px 5px;
  padding-bottom: 80px;
  border-radius: 4px;
  background-color: #fff;
  max-width: 300px;
  min-height: 250px;
  text-align: center;
  font-size: 18px;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
}

.todo-list__name {
  max-width: 100%;
  word-wrap: break-word;
}

.todo-list__employee {
  margin: 10px 0;
}

.todo-list__employee > span {
  font-weight: 700;
}

.todo-list__date {
    margin: 10px 0;
}

.todo-list__date span {
    font-weight: 700;
}

.todo-list__buttons-block {
  position: absolute;
  bottom: 0;
  left: 5px;
  width: calc(100% - 10px);
}

.todo-list__button {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 4px;
  border: 0;
  margin: 5px 0;
  color: #fff;
  text-transform: uppercase;
  transition: 200ms;
  cursor: pointer;
}

.todo-list__button:focus {
  outline: 0;
}

.todo-list__button:active {
  transform: translate(0, 1px);
  box-shadow: 0px 7px 14px 0px rgba(34, 60, 80, 0.2);
}

.todo-list__button:hover {
  background-color: #30475e;
  transition: 200ms;
}

.todo-list__button_promote {
  background-color: var(--main-color-1);
}
.todo-list__button_remove {
  background-color: #222831;
}
</style>