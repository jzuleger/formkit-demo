<script setup>
  import { dance, songs, locations, travel } from './config';

  async function submit() {
    await new Promise(r => setTimeout(r, 1000))
    this.$formkit.reset('sommerfest')
    alert('Submitted! 🎉')
  }
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[720px]" />
</template>
