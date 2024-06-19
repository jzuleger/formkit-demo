// Basic Inputs Demo
<script setup>
  import { dance, songs, locations, travel } from './config';

  async function submit() {
    await new Promise(r => setTimeout(r, 1000))
    this.$formkit.reset('sommerfest')
    alert('Submitted! 🎉')
  }

</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[720px]">
    <h1 class="text-2xl mb-4">
      Sommerfest Skills
    </h1>

    <FormKit
      id="sommerfest"
      v-slot="{ value }"
      type="form"
      submit-label="Absenden"
      @submit="submit"
    >
      <div class="flex justify-between gap-10">
        <div class="grow">
          <FormKit
            type="text"
            name="name"
            label="Dein Name"
            placeholder="Namen eingeben"
          />
    
          <FormKit
            type="radio"
            name="travel"
            label="Anreise"
            :options="travel"
          />

          <FormKit
            type="select"
            label="Aus welchem Standort kommst du?"
            name="standort"
            :options="locations"
          />
        </div>
        <div>
          <FormKit
            type="range"
            name="level"
            label="Tanz-Skills"
            value="5"
            min="1"
            max="10"
            step="1"
            help="Wie schätzt du deine Tanz-Skills ein?"
          />

          <FormKit
            type="checkbox"
            name="moves"
            label="Tanz-Moves"
            help="Was sind deine besten Tanz-Moves?"
            :options="dance"
            validation="required|min:2"
          />  


          <FormKit
            type="time"
            label="Polnischen?"
            name="leave"
            min="1:00"
            max="5:00"
            help="Wann sollte man frühestens einen Polnischen machen?"
          />

          <FormKit
            type="checkbox"
            name="agree"
            label="Deine Party-Policy"
            help="Ich verspreche meine besten Dance-Move zu zeigen"
            validation="required"
          />
        </div>
      </div>

      <div class="absolute right-0 bottom-0">
        <pre class="font-mono text-sm p-4 bg-slate-100 mb-4">{{ value }}</pre> 
      </div>
    </FormKit>
  </div>
</template>
