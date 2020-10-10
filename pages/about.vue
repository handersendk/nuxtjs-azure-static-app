<template>
  <div>
    <h1 class="title">About Page</h1>
    <p class="subtitle">This is statically generated page</p>
    <a v-if="!this.$auth.loggedIn" @click="$auth.loginWith('aad')"
      >Sign in with Microsoft</a
    >
    <a v-else @click="$auth.logout('aad')">Sign out</a>
    <NuxtLink to="/">Back to Home</NuxtLink>
  </div>
</template>
<script>
export default {
  auth: false,
};
</script>