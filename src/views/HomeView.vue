<template>
    <el-row class="home__row__container">
      <el-col :span="4"></el-col>
      <el-col :span="16">
        <BannerComponent />
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <el-row class="home__row__container">
      <el-col :span="4"></el-col>
        <el-col :span="16">
          <HomeIntroduct />
        </el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <el-row class="home__row__container">
      <el-col :span="4"></el-col>
        <el-col :span="16">
          <HomeHighlight/>
        </el-col>
      <el-col :span="4"></el-col>
    </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BannerComponent from '@/components/home/Banner.vue';
import HomeIntroduct from '@/components/home/Introduct.vue';
import HomeHighlight from '@/components/home/Highlight.vue';
export default defineComponent({
  name: "HomeView",
  components: {
    BannerComponent,
    HomeIntroduct,
    HomeHighlight
  }
})
</script>

<style lang="css">
.home__row__container{
  margin-top: 30px;
  background-color: var(--color-background-home-main);
}
.dark__mode .home__row__container{
  background-color: var(--color-background-darkmode);
}
</style>
