// FormKit PRO Inputs
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