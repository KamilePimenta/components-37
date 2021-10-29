<template>
  <div>
    <div v-show="messageText" :class="classesMessage">{{ messageText }}</div>
    <label>
      <input :type="type" :class="classesInput" :value="value" @click="onClick">
      <span class="label">{{ label }}</span>
    </label>
  </div>
</template>

<script>
import './input.css';
import { reactive, computed } from 'vue';

export default {
  name: 'input',

  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
    messageText: {
      type: String,
      default: '',
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classesMessage: computed(() => ({
        'message': true,
        'success': props.success,
        'error': props.error,
        'warning': props.warning,
      })),
      classesInput: computed(() => ({
        'input': true,
        'primary': props.filled,
        'error': props.error,
        'filled': props.filled,
        'warning': props.warning,
        'dark': props.darkMode,
        'light': !props.darkMode,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
