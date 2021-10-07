<template>
  <div class="block text-sm font-medium text-gray-700">
    <label v-if="label">
      {{ label }}
    </label>

    <input
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  // name: "BaseInput",
  // components: "BaseInput",
  // attrs:  class style id
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
<style></style>
