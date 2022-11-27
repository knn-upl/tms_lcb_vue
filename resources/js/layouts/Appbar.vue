<template>
  <v-app-bar >    
        <v-row  >
          <v-col style="background-color: lightblue">                
              <v-sheet class="pa-2 ma-2" style="background-color: lightblue" >                  
                  <div class="mx-5" >  
                        <v-btn variant="text" size="x-large">
                          หน้าหลัก
                        </v-btn>
                        <v-btn variant="text" size="large">
                          เพิ่มงาน
                        </v-btn>
                        <v-btn variant="text" size="large">
                          กำไร
                        </v-btn>
                        <v-btn variant="text" size="large">
                          แจ้งซ่อม
                        </v-btn>
                  </div>               
              </v-sheet >   
          </v-col>    
        </v-row>   
    </v-app-bar>
</template>
<script>
export default {
  
  setup() {
    
  },
  data() {
    return {
        toggle: false,
      }
  },
  methods: {
      changeToggleSidebar(){      
          this.$emit('toggleSidebar',this.toggle);
      },
    },
}
</script>