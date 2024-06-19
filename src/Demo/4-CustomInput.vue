// https://formkit.com/guides/create-a-custom-input
<script setup>
import { createInput } from '@formkit/vue'
import CustomInput from './components/Custom-Input.vue';

 const custom = createInput(CustomInput);
</script>

<template>
  <FormKit
    :type="custom"
    name="custom"
    label="Custom Input"
  />
</template>
