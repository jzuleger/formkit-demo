<script setup></script>

<template>
  <FormKit
    type="email"
    name="email"
    label="Email-Adresse"
  />

  <FormKit
    type="tel"
    name="phone"
    label="Telefonnummer"
    validation="matches:/^[0-9]{3}-[0-9]{8}$/"
    :validation-messages="{
      matches: 'Die Telefonnummer muss dem Format entsprechen: xxx-xxxxxxxx',
    }"
  />
</template>
