<template>
    <v-card>
        <v-card-title class="mx-3 my-3 text-dark">งาน</v-card-title>
            <v-card-text >
                <v-row>
                    <v-col cols="6">
                        <v-row>             
                       
                            <v-col cols="6">
                                <v-text-field v-model="order" label="Order#" variant="outlined"  clearable ></v-text-field>
                            </v-col>     
                            <v-col cols="6">
                                <v-combobox label="ประเภทงาน" :items="job_type.list" variant="outlined" @update:modelValue="selectIndex($event,this.job_type.list,'job_type')"></v-combobox>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="6">
                            <v-text-field label="Booking No." variant="outlined" clearable></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">                        
                        <v-combobox label="ลูกค้า" :items="customer.list" variant="outlined"  @update:modelValue="selectIndex($event,this.customer.list,'customer')"></v-combobox>     
                    </v-col>

                    <v-col cols="6">
                        <v-combobox disabled label="สถานะงาน" :items="job_status.list" variant="outlined"></v-combobox>     
                    </v-col>
                </v-row>        
                <v-row>
                    <v-col cols="6">                        
                        <v-combobox label="Shipper" :items="shipper.list" variant="outlined" @update:modelValue="selectIndex($event,this.shipper.list,'shipper')"></v-combobox>     
                    </v-col>

                    <v-col cols="6">
                        <v-text-field label="Ref No." variant="outlined" clearable></v-text-field>
                    </v-col>
                </v-row>
        </v-card-text>
    </v-card>
</template>

<script setup>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
import { endOfWeekWithOptions } from 'date-fns/fp';
</script>
<script>
export default {
    data() {
        return {
            order: null,
            job_type:{id:null,list:['l1','l2']},
            customer:{id:null,list:['c1','c2']},
            shipper:{id:null,list:['s1','s2']},
            job_status:{id:null,list:['js1','js2']},
            JobPage:null,
        }
    },
    created() {
        this.AddOrEdit();
    },
    methods: {
        AddOrEdit(){
            this.job_status.id = 0;
        },
        selectIndex($event,list,type){               
            console.log($event);
            if(type === 'job_type')
            {   
                this.job_type.id=list.indexOf($event);
                console.log(this.job_type);              
            }
            else if(type === 'customer')
            {
                this.customer.id=list.indexOf($event);
                console.log(this.customer);              
            }
            else if(type === 'shipper')
            {
                this.shipper.id=list.indexOf($event);
                console.log(this.shipper);            
            }
            else if(type === 'status')
            {                
                this.job_status.id=list.indexOf($event);     
                console.log(this.job_status);     
            }   
        },
    },
}
</script>

<style>

</style>