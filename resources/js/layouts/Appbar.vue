<template>
  <v-app-bar >    
        <v-row  >
          <v-col style="background-color: #EB1D36">                
              <v-sheet class="pa-2 ma-2" style="background-color: #EB1D36" >                  
                  <div class="mx-5 text-white" >  
                        <v-btn variant="text" size="x-large" href="/">
                          หน้าหลัก
                        </v-btn>
                        <v-btn variant="text" size="large" href="/job">
                          เพิ่มงาน
                        </v-btn>
                        <v-btn variant="text" size="large" href="/profit">
                          กำไร
                        </v-btn>
                        <v-btn variant="text" size="large" disabled>
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