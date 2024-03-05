<template>
    <div class="home__row__container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3726.1689572700748!2d105.844549!3d20.945729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad5744a4d893%3A0x3609c25a0582cb97!2sKhung%20%26%20Tranh%20M%E1%BB%99c%20Sinh!5e0!3m2!1sen!2sus!4v1708498803772!5m2!1sen!2sus"
            width="100%" height="700" style="border:0;" allowfullscreen="true" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <el-row class="home__row__container">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <FooterTop />
        </el-col>
        <el-col :xs="1" :sm="4"></el-col>
    </el-row>
    <el-row class="home__row__container">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <FooterMain />
        </el-col>
        <el-col :xs="1" :sm="4"></el-col>
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
}</style>