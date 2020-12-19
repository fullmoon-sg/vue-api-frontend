<template>
     <div>
        <h1> Edit Fault</h1>
        <div v-if ="loading == true">
            <h1>Loading...please wait</h1>
            </div>
        <div v-else>
            <div>
            <label> Title : </label>
            <input type="text" v-model="fault.title"/>
             </div>
         <div>
            <label> Location: </label>
            <input type="text" v-model="fault.location"/>
        </div>
         <div>
            <label> Block : </label>
            <input type="text" v-model="fault.block"/>
        </div>
        </div>
    <button @click="EditFault"> Edit fault</button>
     </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function(){
        return {
        'faultId': '',
        'fault' : {},
        'loading': false
        }
    },
     methods : {
        EditFault : async function(){
            await axios.patch('https://3000-c5e0210a-cbc2-4d53-aad7-6f6c588963a8.ws-us03.gitpod.io/faults/' + this.faultId, this.fault);
            this.fault.title = "";
            this.fault.location = "";
            this.fault.block="";
            alert("Fault has been updated")
        }
    },

    created : async function(){
        this.faultId = this.$route.params.id;   
        this.loading = true; 
        let response = await axios.get('https://3000-c5e0210a-cbc2-4d53-aad7-6f6c588963a8.ws-us03.gitpod.io/faults/' + this.faultId);
        this.fault = response.data;
        this.loading = false;
    },
    watch : {
        '$route' : async function(){
        this.faultId = this.$route.params.id; 
        this.loading = true;   
        let response = await axios.get('https://3000-c5e0210a-cbc2-4d53-aad7-6f6c588963a8.ws-us03.gitpod.io/faults/' + this.faultId);
        this.fault = response.data;
        this.loading = false;
        }
    }
   
}
</script>