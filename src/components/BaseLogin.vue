<template>
<aside class='section'>
  <h3>Sign in Anonymously</h3>
  <button
    type='button'
    @click='auth.signInAnonymously()'
    class='inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  >Sign In
    <slot></slot>
   <!--  Login Anonymously -->
    <MailIcon class='ml-2 -mr-0.5 h-4 w-4' aria-hidden='true' />
  </button>
  <div v-if='newUser'>
    <h3>Sign Up for a New Account</h3>
    <a href='#' @click='newUser = false'>Returning User?</a>
    </div>
    <div v-else>
      <h3>Sign In with Email</h3>
      <a href='#' @click='newUser = true'>New User?</a>
    </div>

    <label for='email'>Email</label>
    <br />
    <input v-model='email' placeholder='email' type='email' class='input' />

    <label for='password'>Password</label>
    <br />
    <input v-model='password' type='password' class='input' />
    <br />
   <button
      class='button is-info'
      :class="{ 'is-loading': loading }"
      @click='signInOrCreateUser()'>
      {{ newUser ? 'Sign Up' : 'login' }}
    </button>
    <p class='has-text-danger' v-if='errorMessage'>{{ errorMessage }}</p>
  </aside>

  <!--  <div>
    {{ email }}
    {{ password }}
  </div> -->
</template>

<script>
import { auth } from '../server/firebase'
import { MailIcon } from '@heroicons/vue/solid'

export default {
  components: {
    MailIcon
  },
  data () {
    return {
      auth,
      newUser: false,
      email: '',
      password: '',
      errorMessage: '',
      loading: false
    }
  },
  methods: {
    async signInOrCreateUser () {
      // TODO Validate Form
      this.loading = true
      this.errorMessage = ''
      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password)
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password)
        }
      } catch (error) {
        this.errorMessage = error.message
      }
      this.loading = false
    }
  }
}
</script>
