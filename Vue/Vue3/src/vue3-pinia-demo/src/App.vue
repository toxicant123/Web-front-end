<script setup>
import Son1Com from "@/components/Son1Com.vue";
import Son2Com from "@/components/Son2Com.vue";


</script>

<template>
    <div>
        <h3>App.vue根组件</h3>
        <Son1Com></Son1Com>
        <Son2Com></Son2Com>
    </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
