<script setup>
async function submit() {
  await new Promise(r => setTimeout(r, 1000))
  alert('Submitted! 🎉')
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <!-- <button class="border-2 px-2 py-1 mb-4" @click="changeLocale('en')">
      Show in Englisch
    </button> -->

    <h1 class="text-2xl mb-4">
      Sommerfest Skills
    </h1>

    <FormKit
      v-slot="{ value }"
      type="form"
      :config="{ validationVisibility: 'live' }"
      @submit="submit"
    >
      <!-- <FormKit type="text" label="name" /> -->
      <FormKit
        type="text"
        name="name"
        label="Dein Name"
        placeholder="Namen eingeben"
        help="Wie willst du genannt werden?"
        validation="required|length:4"
        :validation-messages="{ required: 'Ohne Name keine Party', length: 'Dein Name ist zu kurz' }"
        validation-visibilty="live"
      />
    
      <FormKit
        type="radio"
        name="radios"
        label="Anreise"
        :options="[
          'Bike',
          'E-Scooter',
          'U-/S-/Bahn',
          'Zu Fuß',
          'Luftkissenfahrzeug',
        ]"
      />

      <FormKit
        id="dance"
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
          :options="{
            'boogie': 'Boogie',
            'dab': 'Dab',
            'headbanging': 'Headbanging',
            'disco-fox': 'Disco Fox',
            'macarena': 'Macarena',
            'shuffle': 'Shuffle',
            'rhabarberbarbara': 'Rhabarberbarbara',
          }"
          validation="required|min:2"
        />  
      </FormKit>
      
      <FormKit
        type="repeater"
        name="songs"
        label="Party-Songs"
        help="Welche Songs sollen unbedingt gespiel werden?"
      >
        <FormKit
          type="text"
          name="song"
          label="Dein Song"
          validation="required"
        />
      </FormKit>

      <FormKit
        type="time"
        label="Polnischen?"
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

      <!-- <pre class="font-mono text-sm p-4 bg-slate-100 mb-4">{{ value }}</pre> -->
    </FormKit>
  </div>
</template>
