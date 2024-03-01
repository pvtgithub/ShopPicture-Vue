<template>
    <el-row class="home__row__container">
        <el-col :span="4"></el-col>
        <el-col :span="16" style="padding: 30px;">
            <el-breadcrumb class="timeline__checkout" :separator-icon="ArrowRight" style="padding: 10px; font-size: 16px;">
                <el-breadcrumb-item>SHOPPING CART</el-breadcrumb-item>
                <el-breadcrumb-item>CHECKOUT DETAILS</el-breadcrumb-item>
                <el-breadcrumb-item class="complete">ORDER COMPLETE</el-breadcrumb-item>
            </el-breadcrumb>
            <h2 v-if="queryParam.resultCode == 0">Bạn đã thanh toán và đặt hàng thành công!</h2>
            <h2 v-if="queryParam.resultCode != 0">{{ message }}</h2>
            <img :src="require(`@/assets/result_payment/${urlImage}`)" alt="Thanh cong"><br>
            <el-button @click="goHome()" style="height: 40px;" type="primary">Quay về trang chủ</el-button>
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
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
<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue';
</script>
<script lang="ts">
import { defineComponent } from 'vue'
import FooterMain from '@/components/layouts/footer/FooterMain.vue';
import FooterTop from '@/components/layouts/footer/FooterTop.vue';
import billService from '@/service/billService';
export default defineComponent({
    name: 'CompleteView',
    components: {
        FooterMain,
        FooterTop
    },
    data() {
        return {
            queryParam: {
                amount: "",
                extraData: "",
                message: "",
                orderId: "",
                orderInfo: "",
                orderType: "",
                partnerCode: "",
                payType: "",
                paymentOption: "",
                requestId: "",
                responseTime: "",
                resultCode: "",
                signature: "",
                transId: ""
            } as any,
            message: "",
            urlImage: "complete.png"
        }
    },
    mounted() {
        this.queryParam = this.$route.query
        this.message = this.queryParam.message
        this.urlImage = this.queryParam.resultCode == 0 ? "complete.png" : "error.png"
        this.queryParam.orderId = parseInt(this.queryParam.orderId)

        if (!this.queryParam.message) {
            this.$router.push('/')
        } else {
            billService.getPaymentByOrderId(this.queryParam.orderId).then((res) => {
                if (res.data.length == 0) {
                    billService.postPayment(this.queryParam)
                }
            })
        }
    },
    methods: {
        goHome() {
            window.open('/', '_self')
        }
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

.el-breadcrumb__item:last-child.complete .el-breadcrumb__inner {
    font-weight: bold;
}
</style>