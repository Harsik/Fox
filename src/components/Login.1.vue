
<template>
  <div>
  <form id="myForm" @submit.prevent="sendPost">
  <input type="text" name="username" label="username" v-model="username"><br>
  <textarea name="password" label="password" v-model="password"></textarea><br>
  <button>Send</button>
</form>
  </div>
</template>

<script>
  export default {
  data: () = > {
  	username: '',
    password: ''
  },
  methods: {
    sendPost() {
      const headers = new Headers({
        'Content-Type': 'application/json'
      })
      // fetch('http://192.168.137.59:8080/Alpha/api/auth/signin', {
      fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      })
        .then(response => {
          if (response.ok) {
            // localStorage.setItem('accessToken', response.accessToken)
            this.$router.push('/Hover')
            return console.log(response.json())
          }
        })
        .then(json => {})
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>