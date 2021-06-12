<template>
  <div id="app">
    <header class="header">
      <div class="header__logo-block">
        <figure class="header__logo">
          <img src="./assets/logo_header.png" alt="" />
        </figure>
        <h1 class="header__text">Task Manager</h1>
      </div>
      <div class="header__guide-block">
        <img class="header__icon" src="./assets/info-icon.svg" alt="" />
        <p>
          Kanban - метод управления разработкой, реализующий принцип "точно в
          срок"
        </p>
      </div>
    </header>
    <main class="main">
      <div class="modal-open-button__wrap">
        <button
          id="openModal"
          class="modal-open-button"
          @click="openModal()"
        >
          Создать задачу
        </button>
      </div>
      <AddTodo
        :todos="todos"
        :showModal="showModal"
        v-if="showModal"
        @close="showModal = false"
        ref="modal"
      />
      <TodoList v-bind:todos="todos" />
    </main>
    <footer class="footer">
      Васьковский Сергей Павлович, 201-322, 01.02.2021
    </footer>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      showModal: false,
    };
  },
  methods: {
    openModal() {

      this.showModal = true

      this.$nextTick(() => {
        this.$refs.modal.focus();
      });
    }
  },
  components: { TodoList, AddTodo },
};
</script>

<style lang="scss">
@import "reset-css";

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

body {
  background-color: #e8e8e8;
  font-family: "Roboto", sans-serif;
  background-image: url("./assets/polytech_logo.png");
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: right;
  background-position-y: 30vh;
}

#app {
  position: relative;
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #f05454;
}

.header__logo-block {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.header__guide-block {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 18px;
  margin-left: 10px;

  img {
    margin-right: 10px;
  }

  p {
    max-width: 35ch;
  }
}

.header__guide-block:hover {
  img {
    animation: pulse 3s infinite;
  }
}

.header__icon {
  width: 48px;
}

.header__logo {
  img {
    width: 200px;
  }
}

.header__text {
  font-size: 36px;
  font-weight: 700;
  color: #30475e;
  margin-left: 100px;
}

.modal-open-button__wrap {
  text-align: center;
}

.modal-open-button {
  padding: 7px 15px;
  border-radius: 5px;
  border: 1px solid #f05454;
  text-transform: uppercase;
  background-color: #f05454;
  color: #fff;
  transition: 200ms;
}

.modal-open-button:hover {
  color: #f05454;
  background-color: transparent;
  transition: 200ms;
  cursor: pointer;
}

.list-empty {
  text-align: center;
  font-size: 36px;
  margin-top: 100px;
}

.main {
  max-width: 1700px;
  margin: 50px auto 0 auto;
  padding-bottom: 200px;
  min-height: 100vh;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 70px;
  padding-left: calc((100% - 1700px) / 2);
  background-color: #222831;
  color: #fff;
}

@media screen and (max-width: 970px) {
  .footer {
    text-align: center;
  }
}
</style>