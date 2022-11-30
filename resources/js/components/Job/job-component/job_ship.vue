<template>
  <v-card>
    <v-card-title class="mx-3 my-3 text-dark">เรือ</v-card-title>
        <v-card-text >
            <v-row>
                <v-col cols="6">               
                    <v-text-field label="ชื่อ" variant="outlined" clearable></v-text-field>  
                </v-col>
                <v-col cols="6">
                    <v-text-field label="ปลายทาง" variant="outlined" clearable></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mb-5">
              <v-col cols="3" class="ms-4 " >       
                  <h4>คืนก่อนวันที่และเวลา</h4>
              </v-col>
              <v-col cols="12">                        
                <Datepicker v-model="date" ></Datepicker>  
              </v-col>

            </v-row>        
            <v-row>
                <v-col cols="6">                        
                    <v-combobox label="เอเย่นต์" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"></v-combobox>     
                </v-col>

                <v-col cols="6">
                    <v-text-field label="อินวอยซ์" variant="outlined" clearable></v-text-field>
                </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">                        
                    <v-text-field label="ETD" variant="outlined" clearable></v-text-field>
              </v-col>

              <v-col cols="6">
                    <v-text-field label="หมายเหตุ" variant="outlined" clearable></v-text-field>
              </v-col>
          </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
</script>
<script>
export default {
  data() {
    return {
      date:null,
    }
  },
}
</script>

<style>

</style>