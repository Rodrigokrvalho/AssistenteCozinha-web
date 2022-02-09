<template>
  <div class="radio-group-container">
    <p>{{ label }}</p>
    <BaseInputRadio
      id="kgPack"
      label="Quilograma (kg)"
      name="radio-pack"
      @onClick="$emit('clickedItem', 'kg')"
    />
    <BaseInputRadio
      id="gPack"
      label="Grama (g)"
      name="radio-pack"
      @onClick="$emit('clickedItem', 'g')"
    />
    <BaseInputRadio
      id="lPack"
      label="Litro (l)"
      name="radio-pack"
      @onClick="$emit('clickedItem', 'l')"
    />
    <BaseInputRadio
      id="mlPack"
      label="Mililitro (ml)"
      name="radio-pack"
      @onClick="$emit('clickedItem', 'ml')"
    />
    <BaseInputRadio
      id="unitPack"
      label="Unidade"
      name="radio-pack"
      @onClick="$emit('clickedItem', 'Unidades')"
    />
  </div>
</template>

<script>
import BaseInputRadio from "./BaseInputRadio.vue";
export default {
  components: { BaseInputRadio },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  emits: ["clickedItem"],
};
</script>
