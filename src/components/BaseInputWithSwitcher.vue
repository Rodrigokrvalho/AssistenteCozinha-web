<template>
  <div class="switcher">
    <p>{{ switcherLabel }}</p>
    <label class="switch">
      <input type="checkbox" @change="$emit('switcher')" />
      <span class="slider round"></span>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    switcherLabel: { type: String },
  },
  emits: ["switcher"],
};
</script>

<style scoped>
.switcher {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding: 0px;
  margin-bottom: 20px;
  margin-left: -25px;
}

.switcher p {
  padding: 10px 10px 0px 0%;
  width: 600px;
  max-width: 70%;
}

.switch label {
  width: 60px;
  height: 34px;
  visibility: visible;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  height: 21px;
  width: 50px;
  background-color: var(--red);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--blue-light);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--blue-light);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>