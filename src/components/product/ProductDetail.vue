<template>
    <el-row class="product__detail">
        <el-col class="item" :xl="10" :sm="24">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item>
                    <img :src="require(`@/assets/tranh_son_dau/${productDetail.image}`)" />
                </el-carousel-item>
            </el-carousel>
        </el-col>
        <el-col class="item" :xl="10" :sm="24">
            <h2>{{ productDetail.name }}</h2>
            <el-divider></el-divider>
            <h2 class="price">{{ productDetail.price }}$</h2>
            <p>
                {{ productDetail.description }}
            </p>
            <p>
                Chất liệu: Acrylic<br>
                Kích thước: 60 x 80cm (Chưa tính kích thước khung tranh)<br>
                Năm sáng tác: 2024
            </p>
            <div class="button">
                <el-button type="danger" style="width: 50%">Thêm vào giỏ</el-button>
                <el-button type="warning" style="width: 70%; margin: 10px 0">Mua ngay</el-button>
            </div>
            <div class="detail">
                <span>Mã: 29114</span>
                <el-divider border-style="dotted" />
                <span>Số lượt xem: 17</span>
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
<script lang="ts">
import { defineComponent } from 'vue'
import { Product } from '@/interface/Product'
import pictureService from '@/service/pictureService'

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
                quantity: 1
            } as Product,
        }
    },
    methods: {
        async getProductById(id: number) {
            return await pictureService.getPictureById(id);
        }
    },
    mounted() {
        this.getProductById(this.productId).then((res) => {
            this.productDetail = res.data;
            console.log(this.productDetail);

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
</style>