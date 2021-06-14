<template>
  <form @submit.prevent="onSubmit" class="modal">
      <button class="modal__close" type="button" @click="$store.dispatch('closeModal')">
        X
      </button>
      <label class="modal__title" for="name-input">Изменение задачи</label>
      <input
        placeholder="Описание задачи"
        value=""
        type="text"
        class="modal__input"
        id="name-input"
        v-model="name"
        required
      />

      <label for="todo-priority" hidden></label>
      <select v-model="priority" class="modal__input" name="todo-priority" id="priority-select" required>
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button type="submit" class="modal__submit">Добавить</button>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>