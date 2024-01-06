<script setup>
import { ref, defineEmits } from "vue";

const update = (value) => {
  const messageObj = {
    // displayName: "自分さん", → 削除
    message: value,
  }
  emit('sendMessage', messageObj)
}
const emit = defineEmits(['sendMessage']);
const input = ref('');
const doSend = () => {
  if (input.value === '') return;
  update(input.value);
  input.value = '';
};
</script>

<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="メッセージを入力してください"
      v-model="input"
    />
    <button
      class="btn btn-outline-secondary js-send-message"
      type="button"
      @click="doSend"
    >
      メッセージ送信
    </button>
  </div>
</template>