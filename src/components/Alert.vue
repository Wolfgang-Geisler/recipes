<template>
  <div v-if="message" class="alert" :class="`alert-${type}`" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: ["message", "type"],
};
</script>