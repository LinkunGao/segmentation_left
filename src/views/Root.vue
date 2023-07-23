<template>
  <!-- main -->
  <Painter />
</template>

<script setup lang="ts">
import Painter from "./Painter/index.vue";
import { useRoute } from 'vue-router';
import emitter from "@/utils/bus";
import {onUpdated, onMounted} from "vue";
const route = useRoute()
onMounted(()=>{

})


</script>

<style scoped></style>
