<script setup>
  import { createInput } from '@formkit/vue'
  import { dance, songs, locations, travel } from './config';
  import Contact from './components/Contact-Information.vue';
  import CustomInput from './components/Custom-Input.vue';

  async function submit() {
    await new Promise(r => setTimeout(r, 1000))
    this.$formkit.reset('sommerfest')
    alert('Submitted! 🎉')
  }

  const custom = createInput(CustomInput);
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
      :config="{ validationVisibility: 'submit' }"
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
            help="Wie willst du genannt werden?"
            validation="required|(1000)length:2|alpha:latin"
            :validation-messages="{ required: 'Ohne Name keine Party', length: 'Dein Name ist zu kurz' }"
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

          <FormKit
            type="group"
            name="contact"
          >
            <h2 class="text-lg mt-12 mb-3">
              Kontakt angeben für Fundsachen, etc
            </h2>
            
            <FormKit
              type="checkbox"
              name="addContact"
              label="Deinen Kontakt angeben"
            />

            <Contact v-if="value.contact?.addContact" />
          </FormKit>

          <FormKit
            :type="custom"
            name="custom"
            label="Custom Input"
          /> 
        </div>
        <div>
          <FormKit
            type="group"
            name="dance"
          >
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
          </FormKit>
      
          <FormKit
            type="repeater"
            name="songs"
            label="Party-Songs"
            help="Welche Songs sollen unbedingt gespiel werden?"
            add-label="Song hinzufügen"
          >
            <FormKit
              type="autocomplete"
              name="song"
              label="Dein Song"
              validation="required"
              :options="songs"
              popover
            />
          </FormKit>

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

      <details class="mb-5">
        <summary>Live Form Data</summary>
        <pre>{{ value }}</pre>
      </details>
    </FormKit>
  </div>
</template>
