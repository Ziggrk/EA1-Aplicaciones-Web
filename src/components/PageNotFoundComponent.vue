<script setup>

</script>

<template>
  <div class="containerNotFound">
      <pv-card>
          <template #title>
              {{$t('pageNotFound')}}
          </template>
          <template #content>
              <h1>404</h1>
          </template>
          <template #footer>
              <router-link to="/home">
                  <pv-button :label="$t('backHome')"/>
              </router-link>
          </template>
      </pv-card>
  </div>
</template>

<style scoped>
.containerNotFound{
    background-color: #2c3e50;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-height: 84vh;
    padding: 20px;
}
h1{
    color: #0069d9;
    font-size: 150px;
    font-family: "Segoe UI Black",sans-serif;
}
</style>