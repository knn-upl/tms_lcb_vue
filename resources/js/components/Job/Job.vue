<template>
  <v-row justify="end">
    <v-col cols="1">
      <v-btn variant="tonal" color="#0D6EFD" width="200" height="50">เพิ่มงาน</v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <jobInfo class="mb-5"></jobInfo>
      <jobCabinet class="mb-5"></jobCabinet>
    </v-col>
    <v-col cols="6">
      <jobShip class="mb-5"></jobShip>
      <jobFuel style="margin-top:5.25rem" disables></jobFuel>
    </v-col>
  </v-row>


</template>

<script setup>
  import jobInfo from './job-component/job_info.vue'
  import jobCabinet from './job-component/job_cabinet.vue'
  import JobShip from './job-component/job_ship.vue'
  import jobFuel from './job-component/job_fuel.vue'
</script>
<script>
export default {

}
</script>

<style>

</style>