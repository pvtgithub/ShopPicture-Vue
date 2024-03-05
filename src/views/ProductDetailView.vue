<template>
    <el-row class="home__row__container breadcrumb">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <BreadCrumb :listBreadCrumb="breadCrumb" />
        </el-col>
        <el-col :xs="1" :sm="4"></el-col>
    </el-row>
    <el-row class="home__row__container">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <ProductDetail :productId="productId" />
        </el-col>
        <el-col :xs="1" :sm="4"></el-col>
    </el-row>
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
import ProductDetail from '@/components/product/ProductDetail.vue';
import BreadCrumb from '@/components/shared/BreadCrumb.vue'

export default defineComponent({
    name: 'ProductDetailView',
    components: {
        FooterMain,
        FooterTop,
        ProductDetail,
        BreadCrumb
    },
    props: ['productId'],
    data() {
        return {
            breadCrumb: [
                {
                    name: 'Trang chủ',
                    path: '/'
                },
                {
                    name: 'Chi tiết sản phẩm',
                    path: ''
                }
            ]
        }
    }

})
</script>
<style lang="css">
.home__row__container {
    margin-top: 30px;
    background-color: var(--color-background-home-main);
}
.home__row__container.breadcrumb{
    background-color: var(--color-text);
}

.dark__mode .home__row__container {
    background-color: var(--color-background-darkmode);
}
</style>