<template>
<div>
    <h1> Confirm delete of fault : {{fault.title}}</h1>
    <button @click="todelete">Ok</button>
    <router-link to='/faults'>Cancel</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    created : async function(){
        this.faultId = this.$route.params.id;
        let response = await axios.get('https://3000-c5e0210a-cbc2-4d53-aad7-6f6c588963a8.ws-us03.gitpod.io/faults/'+this.faultId);
        this.fault = response.data;
    },
    data : function(){
        return{
            'fault' : {},
            'faultId': 0
        }
    },
    methods : {
        todelete : async function(){
            await axios.delete('https://3000-c5e0210a-cbc2-4d53-aad7-6f6c588963a8.ws-us03.gitpod.io/faults/'+this.faultId);
            alert("The fault has been deleted");
        }
    }
    
}
</script>
<style scoped>

</style>