<template>
  <div>
    <label v-if='label' class='block text-sm font-medium text-gray-700'>
      {{ label }}
    </label>
    <select
      class='field mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
      :value='modelValue'
      v-bind='{
        ...$attrs,
        onChange: ($event) => {
          $emit("update:modelValue", $event.target.value);
        },
      }'
    >
      <option
        v-for='option in options'
        :value='option.code'
        :key='option'
        :selected='option === modelValue'
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
// option.code
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  }
}
</script>
