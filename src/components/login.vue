<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
  <v-form actions="http://localhost:8081/login" method="post">
    <v-text-field
      v-model="username"
      :counter="10"
      label="username"
    ></v-text-field>
    <v-text-field
      v-model="password"
      label="password"
    ></v-text-field>
        <v-card-actions>
    <v-btn type="submit" @click="submit" color="success">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
         </v-card-actions>
  </v-form>
    </v-flex>
  </v-layout>
</template>

<script>

  export default {
    data: () => ({
      username: '',
      password: ''
    }),
    methods: {
      submit () {
        this.$v.$touch()
        // fetch('http://localhost:8081/login')
        // .then(response => console.log(response.json())
        // .catch(err => err)
        // eslint-disable-next-line
        console.log(this.username)
      },
      clear () {
        this.$v.$reset()
        this.username = ''
        this.password = ''
      }
    }
  }
</script>