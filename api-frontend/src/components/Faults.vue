<template>
    <div>
        <h1>Get all Faults</h1>
        <button v-on:click="loadFaults">Load Faults</button>
    
    <div v-for="f in faults" v-bind:key="f._id">
            <h2>{{f.title}}</h2>
            <ul>
                <li>Date : {{f.date}}</li>
                <li>Location : {{f.location}}</li>
                <li>Block : {{f.block}}</li>
            </ul>
        </div>
     </div>    
</template>

<script>
import axios from 'axios';
export default {
     created: async  function(){
        let response = await axios.get('https://3000-c5e0210a-cbc2-4d53-aad7-6f6c588963a8.ws-us03.gitpod.io/faults/');
        this.faults = response.data;
    },
    data : function(){
        return{
            'faults' : [],
            'searchTitle' : ''
         
        }
    },
    methods: {
        loadFaults : async function(){
            let response = await axios.get('https://3000-c5e0210a-cbc2-4d53-aad7-6f6c588963a8.ws-us03.gitpod.io/faults/');
            this.faults = response.data;
        }
    }
  
}
</script>

<style scoped>

</style>