<template>
    <div class="cart_container">
        <div v-if="checkProductInCart">
            <h3>Thông tin giỏ hàng</h3>
            <el-row>
                <el-col :span="7"></el-col>
                <el-col :span="7"><strong style="font-size: 12px">Sản phẩm</strong></el-col>
                <el-col :span="5"><strong style="font-size: 12px">Số lượng</strong></el-col>
                <el-col :span="5"><strong style="font-size: 12px">Tổng giá</strong></el-col>
            </el-row>
            <template v-for="(item, index) in cart.products" :key="index">
                <el-divider style="margin: 0"></el-divider>
                <el-row class="item_product">
                    <el-col :span="7">
                        <div class="img_product">
                            <el-popconfirm width="220" confirm-button-text="OK" cancel-button-text="Cancel"
                                :icon="InfoFilled" icon-color="#626AEF" title="Xóa sản phẩm khỏi giỏ hàng?"
                                @confirm="removeItem(item.id)">
                                <template #reference>
                                    <el-icon style="cursor: pointer;">
                                        <CloseBold />
                                    </el-icon>
                                </template>
                            </el-popconfirm>

                            <img style="width: 50px; height: 50px" :src="require(`@/assets/tranh_son_dau/${item.image}`)" />

                        </div>
                    </el-col>
                    <el-col :span="7">
                        <span class="text_item">{{ item.name }}</span>
                    </el-col>
                    <el-col :span="5">
                        <span class="text_item">{{ item.quantity }}</span>
                    </el-col>
                    <el-col :span="5">
                        <span class="text_item">{{ item.price * item.quantity }}</span>
                    </el-col>
                </el-row>
            </template>

            <el-divider style="margin: 0"></el-divider>
            <div class="cart_footer">
                <h3>Tổng tiền: {{ cart.sumPrice }}$</h3>
                <el-button @click="closeCart()" type="danger">Đóng</el-button>
                <el-button type="primary" @click="goCheckout()">Thanh toán</el-button>
            </div>
        </div>
        <div v-if="!checkProductInCart">
            <span style="font-weight: 100;">Không có sản phẩm nào <br> trong giỏ hàng</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { InfoFilled } from '@element-plus/icons-vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/LanguageStore'
import { Cart } from '@/interface/Cart'
import { ElMessage } from 'element-plus'

export default defineComponent({
    name: "CartComponent",
    data() {
        return {
            cart: {
                products: [
                ],
                sumPrice: 0
            } as Cart,
        }
    },
    methods: {
        closeCart() {
            this.$emit('closeCart')
        },
        removeItem(id: number) {
            store.dispatch('removeItem', id)

            ElMessage({
                showClose: true,
                message: 'Đã xóa sản phẩm khỏi giỏ hàng.',
                type: 'success',
            })
        },
        goCheckout() {
            this.closeCart();
            this.$router.push('/checkout');
        }
    },
    computed: {
        cartStore() {
            return store.state.cart
        },
        checkProductInCart(): boolean {
            return this.cart.products.length > 0
        }
    },
    mounted() {
        this.cart = this.cartStore

        store.watch(
            state => state.cart,
            newValue => {
                this.cart = this.cartStore
            },
            { deep: true }
        )
    }
})
</script>
<style lang="css">
.cart_container {
    display: block;
    border: 1px solid rgb(189, 188, 188);
    border-radius: 10px;
    background-color: white;
    font-family: monospace;
}

.item_product {
    display: flex;
    align-items: center;
}

.img_product {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
}

.text_item {
    font-size: 13px;
}

.cart_footer {
    text-align: right;
    padding: 10px
}
</style>