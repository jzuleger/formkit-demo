<script setup>
  const props = defineProps({
    context: Object,
  })

  function handleInput(e) {
    props.context.node.input(e.target.value)
  }
</script>

<template>
  <input
    :value="props.context._value"
    class="border border-gray-700"
    @input="handleInput"
  >
</template>