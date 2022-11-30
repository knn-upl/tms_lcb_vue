<template>
    <v-card class="mb-5">
        <v-card-title class="mx-3 my-3 text-dark">ข้อมูลตู้</v-card-title>
            <v-card-text >
                <v-row>
                    <v-col cols="4">
                        <v-text-field label="จำนวนตู้" variant="outlined" clearable required type="number"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field label="เบอร์ตู้" variant="outlined" clearable type="text"></v-text-field>
                    </v-col>   
                    <v-col cols="4">
                        <v-combobox label="ขนาดตู้" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"></v-combobox>     
                    </v-col>    
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-text-field label="น้ำหนัก (กก.)" variant="outlined" clearable type="number"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field label="สินค้า" variant="outlined" clearable></v-text-field>
                    </v-col>   
                    <v-col cols="4">
                        <v-combobox label="สถานะตู้" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"></v-combobox>     
                    </v-col>    
                </v-row>
            </v-card-text>
    </v-card>

    <div v-for="(item,index) in cabinet_card_item" :key="index" class="mb-5">
        <v-card>
            <v-card-title class="mx-3 my-3 text-dark">{{item}}</v-card-title>
            <v-card-text>                
                    <v-row>
                        <v-col cols="4">
                            <v-combobox :label="'คนขับรถ' + item" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"></v-combobox>     
                        </v-col>    
                        <v-col cols="4">
                            <v-combobox label="ทะเบียน" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"></v-combobox>     
                        </v-col>
                        <v-col cols="4">
                            <v-text-field label="ค่าเที่ยว" variant="outlined" clearable type="number"></v-text-field>
                        </v-col>   
                    
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-combobox :label="'สถานที่' + item" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"></v-combobox>
                        </v-col>
                        <v-col cols="8">
                            <Datepicker v-model="date[date_item[index]]" class="py-2"></Datepicker>
                        </v-col>    
                    </v-row>
            </v-card-text>
        </v-card>
    </div>
   
</template>
<script setup>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
</script>
<script>
export default {
    data() {
        return {
            cabinet_card_item :["รับตู้","ส่งตู้","คืนตู้"],
            date:{},
            date_item:['reveice','load','returned']
        }
    },
}
</script>

<style>

</style>