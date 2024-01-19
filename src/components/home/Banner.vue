<template>
    <el-carousel class="banner__container" :interval="2000" type="card" height="200px">
            <el-carousel-item >
                <img src="https://bantranh.com/wp-content/uploads/2019/02/chieu-ven-song-300x302.jpg"/>
            </el-carousel-item>
            <el-carousel-item >
                <img src="https://bantranh.com/wp-content/uploads/2022/07/tranh-phong-canh-bien1.jpg"/>
            </el-carousel-item>
            <el-carousel-item >
                <img src="https://bantranh.com/wp-content/uploads/2024/01/415027840_250573957936364_1417725020089460803_n-300x233.jpg"/>
            </el-carousel-item>
            <el-carousel-item >
                <img src="https://bantranh.com/wp-content/uploads/2024/01/EDEB49C9-33DD-4E90-BA46-CEAD47418742-300x206.jpeg"/>
            </el-carousel-item>
            <el-carousel-item >
                <img src="https://bantranh.com/wp-content/uploads/2023/10/tranh-son-mai-bieu-phong-canh-dong-que-lang-que.jpg"/>
            </el-carousel-item>
            <el-carousel-item >
                <img src="https://bantranh.com/wp-content/uploads/2021/10/tranh-phong-canh-dong-que.jpg"/>
            </el-carousel-item>
        </el-carousel>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BannerComponent'
})
</script>
<style lang="css">

</style>