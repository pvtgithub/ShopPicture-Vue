<template lang="">
  <div>
    <h1>Thành phần cha</h1>
    <HeaderComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Child from '@/components/Child.vue'
import HeaderComponent from '@/components/layouts/header/Header.vue'

@Options({
    components: {
        Child, HeaderComponent
    },
    methods: {
        handleFullName(data: string) {
            console.log("This is full name: " + data);

        }
    },
})

export default class Parent extends Vue {
    msg: any = "This is first message"
    datas: any = [
        { id: 1, name: "Phan Van Tho" },
        { id: 2, name: "Tran Thien Long" },
        { id: 3, name: "Huynh Trong Quy" },
        { id: 4, name: "Nguyen Cong Nam" },
        { id: 5, name: "Le Ngoc Au" },
    ]
    handleFullName: any;

    updateMessage() {
        this.msg = "New message"
        this.$nextTick(() => {
            console.log(document.getElementById("message")?.textContent);
        })
    }
}
</script>
<style lang="">
    
</style>