<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
      <nav class="space-y-1">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white'
              : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          <component
            :is="item.icon"
            :class="[
              item.current
                ? 'text-indigo-500 group-hover:text-indigo-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
            ]"
            aria-hidden="true"
          />
          <span class="truncate">
            {{ item.name }}
          </span>
        </a>
      </nav>
    </aside>
    <!--Beginning of form -->
    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <form action="#" method="POST" @submit.prevent="sendForm">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Ship To:
              </h3>
              <p class="mt-1 text-sm text-gray-500">Address of recipient</p>
            </div>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <BaseInput
                  v-model="toAddress.name"
                  label="Name"
                  type="text"
                  id="name"
                  name="name"
                  autocomplete="first-name"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <BaseInput
                  v-model="toAddress.company"
                  label="Company (optional)"
                  type="text"
                  id="company"
                  name="company"
                  autocomplete="company"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <BaseInput
                  v-model="toAddress.address1"
                  label="Street address"
                  type="text"
                  id="address1"
                  name="address1"
                  autocomplete="address-line-1"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <BaseInput
                  v-model="toAddress.address2"
                  label="Address Line 2 (apt/suite/unit) (optional)"
                  type="text"
                  id="address2"
                  name="address2"
                  autocomplete="address-line-2"
                />
              </div>
              <div class="col-span-6 sm:col-span-2">
                <BaseInput
                  v-model="toAddress.city"
                  label="City"
                  type="text"
                  id="city"
                  name="city"
                  autocomplete="city"
                />
              </div>
              <div class="col-span-6 sm:col-span-2">
                <BaseInput
                  v-model="toAddress.state"
                  label="State / Province"
                  type="text"
                  id="state"
                  name="state"
                  autocomplete="state"
                />
              </div>
              <div class="col-span-6 sm:col-span-2">
                <BaseInput
                  v-model="toAddress.postalCode"
                  label="Zip / Postal Code"
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  autocomplete="zip-postal"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <BaseSelect
                  :options="countries"
                  v-model="countries.code"
                  id="country"
                  name="country"
                  label="Country"
                />
              </div>
              <div class="col-start-1 col-end-3">
                <BaseInput
                  v-model="toAddress.email"
                  label="Email (optional)"
                  type="text"
                  id="email"
                  name="email"
                  autocomplete="email"
                />
              </div>
              <div class="col-span-6 sm:col-span-2">
                <BaseInput
                  v-model="toAddress.phone"
                  label="Phone (optional)"
                  type="text"
                  id="phone"
                  name="phone"
                  autocomplete="phone"
                />
              </div>
              <div class="col-start-1 col-end-6">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  Package Options:
                </h4>
              </div>
              <div class="col-start-1 col-end-6">
                <BaseSelectPackages />
              </div>
              <div class="col-start-1 col-end-6">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  Package Weight:
                </h4>
              </div>
              <div class="col-span-6 sm:col-span-2">
                <BaseInput
                  v-model="order.pounds"
                  label="Pounds"
                  type="Number"
                  id="pounds"
                  name="pounds"
                />
              </div>

              <div class="col-span-6 sm:col-span-2">
                <BaseInput
                  v-model="order.ounces"
                  label="Ounces"
                  type="Number"
                  id="ounces"
                  name="ounces"
                />
              </div>
              <div class="col-start-1 col-end-6">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  Package Dimensions:
                </h4>
              </div>
              <div class="col-span-6 sm:col-span-2">
                <BaseInput
                  v-model="order.length"
                  label="Length"
                  type="Number"
                  id="length"
                  name="length"
                />
              </div>

              <div class="col-span-6 sm:col-span-2">
                <BaseInput
                  v-model="order.width"
                  label="Width"
                  type="Number"
                  id="width"
                  name="width"
                />
              </div>
              <div class="col-span-6 sm:col-span-2">
                <BaseInput
                  v-model="order.height"
                  label="Height"
                  type="Number"
                  id="height"
                  name="height"
                />
              </div>
            </div>
            <fieldset>
              <legend class="text-base font-medium text-gray-900">
                Additional Options
              </legend>
              <div class="mt-4 space-y-4">
                <div class="flex items-start">
                  <div class="h-5 flex items-center">
                    <BaseCheckbox
                      v-model="add.customsForm"
                      label="  Add Customs Form"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// https://support.goshippo.com/hc/en-us/articles/115004081066-USPS-Soft-Pack
// https://www.bubblefast.com/cubicpricing.asp

import axios from 'axios'
import {
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  MailOpenIcon
} from '@heroicons/vue/outline'

const navigation = [
  { name: 'Shipping Info', href: '#', icon: MailOpenIcon, current: true },
  { name: 'Account', href: '#', icon: UserCircleIcon, current: false },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Team', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false }
]
export default {
  data () {
    return {
      toAddress: {
        name: '',
        company: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        phone: '',
        email: ''
      },
      order: { // packDetails
        length: null,
        width: null,
        height: null,
        pounds: null,
        ounces: null
      },
      countries: [
        { name: 'United States', code: 'US' },
        { name: 'Canada', code: 'CA' }
      ],
      add: { customsForm: false },
      navigation
    }
  },
  methods: {
    sendForm () {
      axios.post('https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events', this.event)
        .then(function (response) {
          console.log('Response', response)
        })
        .catch(function (err) {
          console.log('Error', err)
        })
    }
  }
}
/*
  sendForm(event) {
    const { toAddress.name toAddress.company } = Object.fromEntries(new FormData(event.target));
    this.$ref.dialog.show()
    console.log(event)
      https://www.youtube.com/watch?v=K_dSDBC_K_I
     }   ga2497QZQTq9ISBhiXDa
     */
</script>
