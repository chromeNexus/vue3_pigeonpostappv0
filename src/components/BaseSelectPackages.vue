<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium text-gray-700">
      Package Type
    </ListboxLabel>
    <div class="mt-1 relative full">
      <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <img :src="selected.avatar" alt="" class="flex-shrink-0 h-20 w-20 rounded-full" />
          <span class="ml-3 block truncate">{{ selected.name }}
            <br>
            <p :class="[active ? 'text-indigo-200' : 'text-gray-500', 'mt-2']">
            {{ selected.desc }} </p>
          </span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
      <!--    <ListboxOption as="template" v-for="person in people" :key="person.id" :value="person" v-slot="{ active, selected }"> -->
          <ListboxOption as="template" v-for="pack in packageOptions" :key="pack.id" :value="pack" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <!--    <img :src="person.avatar" alt="" class="flex-shrink-0 h-20 w-20 rounded-full" />  -->
            <img :src="pack.avatar" alt="" class="flex-shrink-0 h-20 w-20 rounded-full" />
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  <!--   {{ person.name }}  -->
                  {{ pack.name }} <br>
                  <p :class="[active ? 'text-indigo-200' : 'text-gray-500', 'mt-2']">
                  {{ pack.desc }}
                </p>
                </span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

const packageOptions = [
  {
    id: 1,
    name: 'Rigid Package',
    avatar: 'https://bit.ly/3gA2gwM',
    desc: 'Max. size is 108" combined length & girth'
  },
  {
    id: 2,
    name: 'Soft Package',
    avatar: 'https://bit.ly/2S29xeH',
    desc: 'PolyMailer no greater than 18” x 18”'
  },
  {
    id: 3,
    name: 'Priority Mail Small Flat Rate Box',
    avatar: 'https://bit.ly/3epRxT7',
    desc: 'Dim: 8 ⅝" x 5 ⅜" x 1 ⅝" Contents must weigh less than 70 lbs.'
  },
  {
    id: 4,
    name: 'Priority Mail Medium Flat Rate Box',
    avatar: 'https://bit.ly/3tN5dOz',
    desc: 'Dim: 11" x 8 ½" x 5 ½" Contents must weigh less than 70 lbs.'
  },
  {
    id: 5,
    name: 'Priority Mail Large Flat Rate Box',
    avatar: 'https://bit.ly/2QVKQzP',
    desc: 'Dim: 12" x 12" x 5 ½" Contents must weigh less than 70 lbs.'
  },
  {
    id: 6,
    name: 'Priority Mail Flat Rate Padded Envelope',
    avatar: 'https://bit.ly/3sKUF0T',
    desc: 'Dim: 12 ½" x 9 ½" Contents must weigh less than 70 lbs. International Weight limit: 4 lbs.'
  },
  {
    id: 7,
    name: 'Priority Mail Express Box',
    avatar: 'https://bit.ly/3vswTJ1',
    desc: 'Combined Length and Girth < 108" (274 cm)'
  },
  {
    id: 8,
    name: 'Priority Mail Medium Flat Rate Box',
    avatar: 'https://bit.ly/3tN5dOz',
    desc: 'Dim: 11" x 8 ½" x 5 ½" Contents must weigh less than 70 lbs.'
  },
  {
    id: 9,
    name: 'Priority Mail Express Flat Rate Envelope',
    avatar: 'https://bit.ly/3aB1iwC',
    desc:
      'Dim. 12 ½" x 9 ½" Contents must weigh < 70 lbs. International Wt limit: 4 lbs.'
  },
  {
    id: 10,
    name: 'Regional Box A',
    avatar: 'https://bit.ly/3gzvMTn',
    desc:
      'Dim: 10 ⅛" x 7 ⅛" x 5" or 16 ⅙" x 11 ⅙" x 2 ½" Contents must weigh less than 15 lbs.'
  },
  {
    id: 11,
    name: 'Regional Box B',
    avatar: 'https://bit.ly/3gB3Uy8',
    desc:
      'Dim: 12 ¼" x 10 ½" x 5 ½" or 16 ¼" x 14 ½" x 3" Contents must weigh less than 20 lbs.'
  }
]

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon
  },
  setup () {
    // const selected = ref(people[3])
    const selected = ref(packageOptions[0])

    return {
      packageOptions,
      selected
    }
  }
}
</script>
