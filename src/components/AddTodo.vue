<template>
  <section
  tabindex="0"
    class="form-section"
    @keyup.esc="$emit('close')"
    @click.self="$emit('close')"
  >
    <form @submit.prevent="onSubmit" class="todo-add">
      <button class="todo-add__close" type="button" @click="$emit('close')">
        X
      </button>
      <label class="todo-add__title" for="name-input">Новая задача</label>
      <input
        placeholder="Описание задачи"
        type="text"
        class="todo-add__input"
        id="name-input"
        v-model="name"
        required
      />

      <button type="submit" class="todo-add__submit">Добавить</button>
    </form>
  </section>
</template>

<script>
export default {
  props: ["todos", "showModal"],
  methods: {
    onSubmit() {
      if (this.name.trim()) {
        let newTodo = {
          name: this.name,
          status: "backlog",
        };

        if (this.todos.length != 0) {
          newTodo.id = this.todos[this.todos.length - 1].id + 1;
        } else {
          newTodo.id = 0;
        }

        this.todos.push(newTodo);
        this.name = "";
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit("close");
    },
    mounted: function () {
      document.addEventListener("keydown", (e) => {
        if (this.show && e.code == 27) {
          this.$emit("close");
        }
      });
    },
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style>
.form-section {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.dark-theme .form-section {
    background-color: transparent;
}

.todo-add {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 100px;
  font-size: 19px;
  border-radius: 5px;
  background-color: #fff;
}

.todo-add__close {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid var(--main-color-1);
  border-radius: 5px;
  color: var(--main-color-1);
  background-color: transparent;
  font-size: 16px;
  text-align: center;
  transition: 200ms;
}

.todo-add__close:hover {
  color: #fff;
  background-color: var(--main-color-1);
  transition: 200ms;
  cursor: pointer;
}

.todo-add__title {
  position: absolute;
  font-size: 22px;
  top: 20px;
}

.todo-add__input {
  margin: 25px 0;
  border: 0;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  padding: 10px;
  max-width: 300px;
  width: 100%;
  transition: 200ms;
  font-size: 17px;
  text-align: center;
}

.todo-add__input:focus {
  background-color: rgba(21, 97, 109, .1);
  outline: 0;
  transition: 200ms;
}

.todo-add__submit {
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  text-transform: uppercase;
  background-color: var(--main-color-1);
  color: #fff;
  font-size: 17px;
  transition: 200ms;
  max-width: 300px;
  width: 100%;
  cursor: pointer;
}

.todo-add__submit:hover {
  background-color: #30475e;
  transition: 200ms;
}

.todo-add__submit:focus {
  outline: 0;
}

.todo-add__submit:active {
  box-shadow: 0px 7px 14px 0px rgba(34, 60, 80, 0.2);
  transform: translate(0, 1px);
  transition: 200ms;
}

@media screen and (max-width: 970px) {
  .todo-add__input {
    margin: 10px 20px;
  }
}
</style>