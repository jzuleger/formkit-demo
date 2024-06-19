// https://formkit.com/plugins/multi-step
<FormKit
id="sommerfest"
v-slot="{ value }"
type="form"
:actions="false"
>
  <FormKit
    type="multi-step"
    tab-style="progress"
  >
    <FormKit
      type="step"
      name="01"
    >
    ...
    </FormKit>
    
    <FormKit
      type="step"
      name="02"
    >
    ...
    </FormKit>
    
  </FormKit>
</FormKit