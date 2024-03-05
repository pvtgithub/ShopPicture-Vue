<template>
    <el-row class="product__detail">
        <el-col class="item" :xl="10" :sm="24">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item>
                    <img :src="require(`@/assets/tranh_son_dau/${productDetail.image}`)" />
                </el-carousel-item>
            </el-carousel>
            <el-button plain @click="zoomPicture = true" style="margin-top: 20px;">
                Phóng to hình &nbsp; <el-icon>
                    <FullScreen />
                </el-icon>
            </el-button>

            <el-dialog v-model="zoomPicture"
                style="max-width: 700px;background-color: transparent;" width="100%"
                align-center>
                <img width="100%" height="100%" :src="require(`@/assets/tranh_son_dau/${productDetail.image}`)" />
            </el-dialog>
        </el-col>
        <el-col class="item" :xl="10" :sm="24">
            <h2>{{ productDetail.name }}</h2>
            <el-divider></el-divider>
            <h2 class="price">{{ MainUtils.toCurrency(productDetail.price) }}</h2>
            <p>
                {{ productDetail.description }}
            </p>
            <p>
                Chất liệu: Acrylic<br>
                Kích thước: 60 x 80cm (Chưa tính kích thước khung tranh)<br>
                Năm sáng tác: 2024
            </p>
            <div class="button">
                <el-button type="danger" @click="addToCart(productDetail.id)" :loading="checkLoading"
                    style="width: 50%">Thêm vào giỏ</el-button>
                <el-button type="warning" :disabled="checkLoading" style="width: 70%; margin: 10px 0">Mua
                    ngay</el-button>
            </div>
            <div class="detail">
                <span>Mã: {{ productDetail.id }}</span>
                <el-divider border-style="dotted" />
                <span>Số lượt xem: {{ productDetail.view }}</span>
                <el-divider border-style="dotted" />
                <span>Danh mục: Tranh Phong Cảnh Đồng Quê</span>
                <el-divider border-style="dotted" />
            </div>
        </el-col>
        <el-col class="item" :xl="4" :sm="24">
            <h4>Đặt hàng và thanh toán</h4>
            <el-divider></el-divider>
            <div>
                <el-icon>
                    <Menu />
                </el-icon>
                <h5>Đặt hàng trực tiếp trên website</h5>
            </div>
            <div>
                <el-icon>
                    <Iphone />
                </el-icon>
                <h5>Đặt hàng qua điện thoại zalo: 0348485360</h5>
            </div>
            <div>
                <el-icon>
                    <Promotion />
                </el-icon>
                <h5>Thanh toán tiền mặt trực tiếp hoặc chuyển khoản</h5>
            </div>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { MainUtils } from '@/utils/MainUtils'

const zoomPicture = ref(false)
</script>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Product } from '@/interface/Product'
import pictureService from '@/service/pictureService'
import { ElMessage } from 'element-plus'
import store from '@/store/LanguageStore'

export default defineComponent({
    name: 'ProductDetail',
    props: ['productId'],
    data() {
        return {
            productDetail: {
                id: 1,
                name: '',
                description: '',
                content: '',
                price: 1,
                image: 'tranh3.png',
                quantity: 1,
                category_id: 1,
                highlight: 1,
                view: 12,
                star: 4.5
            } as Product,
            checkLoading: false,

        }
    },
    updated() {
        this.getProductById(this.productId).then((res) => {
            this.productDetail = res.data;
        }).catch((e) => {
            console.log(e.message);
        })
    },
    methods: {
        async getProductById(id: number) {
            return await pictureService.getPictureById(id);
        },
        addToCart(id: number) {
            this.checkLoading = true;
            setTimeout(() => {
                store.dispatch('addToCart', id);
                ElMessage({
                    showClose: true,
                    message: 'Đã thêm sản phẩm vào giỏ hàng.',
                    type: 'success',
                })
                this.checkLoading = false
            }, 500);
        }
    },
    mounted() {
        this.getProductById(this.productId).then((res) => {
            this.productDetail = res.data;
        }).catch((e) => {
            console.log(e.message);
        })

    },
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

.product__detail .item {
    padding: 15px 30px;
}

.product__detail h2,
.product__detail h4,
.product__detail h5,
.product__detail h3,
.product__detail p,
.product__detail .detail {
    text-align: left;
}

.product__detail .detail {
    display: flex;
    flex-direction: column;
    margin-top: 20px
}

.product__detail .price {
    color: red;
    font-weight: bold;
}

.product__detail .button {
    display: flex;
    flex-direction: column;
}

.product__detail .el-carousel.el-carousel--horizontal {
    margin-top: 20%;
}

.product__detail .el-divider--horizontal {
    margin: 10px 0;
}
.product__detail .el-dialog_body{
    box-shadow: transparent !important;
}
</style>