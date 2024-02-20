<template>
    <div class="cart_container">
        <h3>Thông tin giỏ hàng</h3>
        <el-row>
            <el-col :span="7"></el-col>
            <el-col :span="7"><strong style="font-size: 12px">Sản phẩm</strong></el-col>
            <el-col :span="5"><strong style="font-size: 12px">Số lượng</strong></el-col>
            <el-col :span="5"><strong style="font-size: 12px">Tổng giá</strong></el-col>
        </el-row>
        <el-divider style="margin: 0"></el-divider>
        <el-row class="item_product">
            <el-col :span="7">
                <div class="img_product">
                    <el-icon>
                        <CloseBold />
                    </el-icon>
                    <img style="width: 50px; height: 50px"
                        src="https://bantranh.com/wp-content/uploads/2021/10/tranh-son-dau-1.jpg" />

                </div>
            </el-col>
            <el-col :span="7">
                <span class="text_item">Tên sản phẩm</span>
            </el-col>
            <el-col :span="5">
                <span class="text_item">3</span>
            </el-col>
            <el-col :span="5">
                <span class="text_item">300</span>
            </el-col>
        </el-row>

        <el-divider style="margin: 0"></el-divider>
        <div class="cart_footer">
            <el-button type="danger">Đóng</el-button>
            <el-button type="primary">Thanh toán</el-button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "CartComponent"
})
</script>
<style lang="css">
.cart_container {
    display: block;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: white;
    font-family: monospace;
}
.item_product{
    display: flex;
    align-items: center;
}
.img_product {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
}
.text_item{
    font-size: 13px;
}
.cart_footer{
    text-align: right;
    padding: 10px
}
</style>