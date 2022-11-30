<template>
  <v-card>
    <v-card-title class="mx-3 my-3 text-dark">เลขไมล์ ระยะทาง ค่าน้ำมัน ค่าเที่ยว</v-card-title>
        <v-card-text >

            <v-row>
                <v-col cols="3">        
                </v-col>
                <v-col cols="3" v-for="item in header" :key="item">
                  <v-text-field :value="item" variant="solo" disabled></v-text-field>
                </v-col>           
            </v-row>

            <v-row v-for="items in body" :key="items">
              <v-col cols="3" v-for="item in items" :key="item">
                <v-text-field :value="item.name" variant="solo" disabled></v-text-field>
              </v-col>        
              <v-col cols="3" v-for="item in items" :key="item">
                <v-text-field v-model="item.receive" variant="outlined" disabled></v-text-field>
              </v-col>    
              <v-col cols="3" v-for="item in items" :key="item">
                <v-text-field v-model="item.load" variant="outlined" disabled></v-text-field>
              </v-col>   
              <v-col cols="3" v-for="item in items" :key="item">
                <v-text-field v-model="item.returned" variant="outlined" disabled></v-text-field>
              </v-col>      
          </v-row>
    </v-card-text>
  </v-card>

</template>

<script>
export default {
  data() {
    return {
      header:["รับตู้","ส่งตู้","คืนตู้"],
      body_list:["จำนวนเงิน","เลขไมล์หลังวิ่งงาน","เลชไมล์ก่อนวิ่งงาน","ระยะทาง (กม.)","จำนวนเงิน (กม.)","จำนวนลิตร" ,"ราคาลิตรละ","จำนวนเงิน (น้ำมัน)"],
      body:[
        {amount:{name:"จำนวนเงิน",receive:null,load:null,returned:null}},
        {mileage_after:{name:"เลขไมล์หลังวิ่งงาน",receive:null,load:null,returned:null}},
        {mileage_before:{name:"เลชไมล์ก่อนวิ่งงาน",receive:null,load:null,returned:null}},
        {distance:{name:"ระยะทาง (กม.)",receive:null,load:null,returned:null}},
        {distance_cost:{name:"จำนวนเงิน (กม.)",receive:null,load:null,returned:null}},
        {liters_amount:{name:"จำนวนลิตร",receive:null,load:null,returned:null}},
        {price_per_liters:{name:"ราคาลิตรละ",receive:null,load:null,returned:null}},
        {total_price_fuel:{name:"จำนวนเงิน (น้ำมัน)",receive:null,load:null,returned:null}},     

      ]
    }
  },
}
</script>

<style>

</style>