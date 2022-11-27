<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="#d50000"
      color="white"
    >
      <v-tab value="table">Job Table</v-tab>
      <v-tab value="calendar">Job Calendar</v-tab>
    
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="table">
          <v-table>
            <thead>
              <tr >
                  <th v-for="item in table_header" :key="item"> {{item}}</th>             
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in table_body" :key="item.job_id" >
                <td v-for="data in item" :key="data">{{data}}</td>
                <td v-for="btn in table_btn" :key="btn">
                  <v-btn variant="tonal" :color="btn.color" width="120">
                    {{btn.name}}
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-window-item>

        <v-window-item value="calendar">
          Calendar
        </v-window-item>

       
      </v-window>
    </v-card-text>
  </v-card>
    

 
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        table_header:[
          "Job#","Order#","ลูกค้า","Booking No","ประเภทงาน","เบอร์ตู้","ขนาดตู้","สถานที่รับตู้","วันที่รับตู้","สถานที่ส่งตู้ (Load)","วันที่ส่งตู้ (Load)","สถานที่คืนตู้","วันที่คืนตู้",
        ],
        table_body: [     
          {
              job_id: '1',
              order: 1,
              customer:null,
              booking:1,
              job_type:2,
              cabinet_number:3,
              cabinet_size:4,
              cabinet_recieve:5,
              date_recieve:6,
              cabinet_load:7,
              date_load:8,
              cabinet_return:9,
              date_return:0,      
          },   
        ],
        table_btn:[
          {name:"แก้ไข",color:"blue"},{name:"เพิ่มค่าใช้จ่าย",color:"red"},{name:"สร้างใบงาน",color:"gray"}
        ]
        
      }
    },
  }
</script>
<style>

</style>