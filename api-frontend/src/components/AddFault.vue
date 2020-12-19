<template>
    <div>
        <h1> Add a new Fault</h1>
        <div>
            <label> Title : </label>
            <input type="text" v-model="title"/>
        </div>
         <div>
            <label> Location: </label>
            <input type="text" v-model="location"/>
        </div>
         <div>
            <label> Block : </label>
            <input type="text" v-model="block"/>
        </div>
    <button @click="addFault"> Add new fault</button>
     </div>
</template>

<script>
import axios from 'axios';
export default {
    data : function(){
        return {
            'title' : '',
            'location' : '',
            'block': '',
        }
    },
    methods : {
        addFault : async function(){
            await axios.post('https://3000-c5e0210a-cbc2-4d53-aad7-6f6c588963a8.ws-us03.gitpod.io/faults', {
               'title' : this.title,
            'location' : this.location,
            'block': this.block,
            'date' : new Date()
            })

            this.title = "";
            this.location ="";
            this.block = "";
            alert('New Fault has been reported')
        }
    }
}
</script>