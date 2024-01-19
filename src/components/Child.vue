<template lang="">
    <div>
      <h2>Thành phần con</h2>
    </div>
  </template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'ChildComponent',
    props: {
        data: Object
    },
    data() {
        return {
            something: "",
            firstname: "Phan",
            lastname: "Tho",
            fullname: ""
        }
    },
    methods: {
        clickMe() {
            this.$emit('getFullName', this.fullname)
        },
        changeName() {
            this.lastname = "Long"
            console.log("do once");

        }
    },
    mounted() {
        this.fullname = this.firstname + this.lastname
    },
    watch: {
        lastname: function () {
            this.fullname = this.firstname + this.lastname
        }
    }
})
</script>
<style copsed>
h2 {
    color: blue
}
</style>