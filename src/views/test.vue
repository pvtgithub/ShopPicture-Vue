<template>
    <div>

    </div>
    <el-row class="home__row__container">
        <el-col :span="4"></el-col>
        <el-col :span="16">
            <FooterTop />
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
    <el-row class="home__row__container">
        <el-col :span="4"></el-col>
        <el-col :span="16">
            <FooterMain />
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import FooterMain from '@/components/layouts/footer/FooterMain.vue';
import FooterTop from '@/components/layouts/footer/FooterTop.vue';
export default defineComponent({
    name: 'MapView',
    components: {
        FooterMain,
        FooterTop
    }
})
</script>
<style lang="css">
.home__row__container {
  margin-top: 30px;
  background-color: var(--color-background-home-main);
}

.dark__mode .home__row__container {
  background-color: var(--color-background-darkmode);
}
</style>