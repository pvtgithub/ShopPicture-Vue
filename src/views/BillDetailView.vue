<template>
    <el-button plain @click="outerVisible = true">
        Kiểm tra đơn hàng
    </el-button>
    <el-dialog v-model="outerVisible" width="75%" class="bill_detail">
        <template #title>
            <h2>Thông tin chi tiết đơn hàng</h2>
        </template>
        <el-form v-if="!displayDetailBill" :model="form" class="form_detail_bill">
            <el-form-item>
                <el-input v-model="form.phone" autocomplete="off" placeholder="Nhập số điện thoại đặt hàng..."
                    style="width: 70%;" />
            </el-form-item>
            <div>
                <el-button @click="outerVisible = false">Cancel</el-button>
                <el-button type="primary" @click="checkBill()">
                    Kiểm tra
                </el-button>
            </div>
        </el-form>
        <template v-if="displayDetailBill">
            <el-steps :active="active" align-center>
                <el-step title="Đặt hàng" description="Gửi đơn hàng đến cửa hàng" />
                <el-step title="Xác nhận đơn hàng" description="Cửa hàng xác nhận đơn đặt hàng" />
                <el-step title="Giao hàng" description="Gửi cho đơn vị vận chuyển giao hàng" />
                <el-step title="Thành công" description="Đơn hàng đã giao thành công" />
            </el-steps>
            <div class="info">
                <div class="info_customer">
                    <h2>Thông tin khách hàng</h2>
                    <el-divider></el-divider>
                    <p>
                        <strong>Họ tên: </strong> Phan Văn Thọ
                    </p>
                    <p>
                        <strong>Email: </strong> phanvantho0906@gmail.com
                    </p>
                    <p>
                        <strong>Địa chỉ: </strong> Thôn 3 - Nghĩa Lâm - Tư Nghĩa - Quảng Ngãi
                    </p>
                    <p>
                        <strong>Số điện thoại: </strong> 0348485360
                    </p>
                    <p>
                        <strong>Ghi chú: </strong> This is note
                    </p>
                </div>
                <div class="payment_service">
                    <h2>Thông tin thanh toán</h2>
                    <el-divider></el-divider>
                    <h3 v-if="cashPayment">Thanh toán bằng tiền mặt</h3>
                    <div v-if="!cashPayment">
                        <h3>Thanh toán điện tử</h3>
                        <p><strong>Mã đơn hàng: </strong> 11252</p>
                        <p><strong>Thông tin đơn hàng: </strong> Đơn hàng của Thọ</p>
                        <p><strong>Loại dịch vụ:</strong> momo_walet</p>
                        <p><strong>Thời gian đặt hàng: </strong> 10-7-2023</p>
                        <p><strong>Trạng thái đơn hàng: </strong> Thành công</p>
                        <p><strong>Tổng tiền đã thanh toán: </strong> 122220 VNĐ</p>
                    </div>
                </div>
            </div>
            <div class="status">
                <p style="text-align: left; padding: 15px;"><strong style="font-size: larger;">Trạng thái: </strong>Đã đặt hàng</p>
            </div>
            <el-divider></el-divider>
            <div class="products">
                <div class="item_detail_bill">
                    <img src="https://bantranh.com/wp-content/uploads/2024/02/z5171225992871_288f1c59318be35d5122958518e6503f-100x100.jpg" width="70px" height="70px"/>
                    <h4>Johnnie Walker 18 YO gift box</h4>
                    <h4>X2</h4>
                    <h4>15200000 VNĐ</h4>
                </div>
                <div class="item_detail_bill">
                    <img src="https://bantranh.com/wp-content/uploads/2024/02/z5171225992871_288f1c59318be35d5122958518e6503f-100x100.jpg" width="70px" height="70px"/>
                    <h4>Johnnie Walker 18 YO gift box</h4>
                    <h4>X2</h4>
                    <h4>15200000 VNĐ</h4>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="price_bill_detail">
                <p><strong>Tổng tạm tính: </strong> 1100000 VNĐ</p>
                <p><strong>Phí vận chuyển: </strong>100000 VNĐ</p>
                <p><strong>Thành tiền: </strong>12000000 VNĐ</p>
            </div>
            <el-divider></el-divider>
            <div class="price_bill_detail">
                <el-button @click="outerVisible = false" type="danger" size="large">Đóng</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
    name: 'BillDetailView',
    data() {
        return {
            outerVisible: false,
            cashPayment : false,
            displayDetailBill: false,
            form: reactive({
                phone: '',
            }),
            active: ref(1)
        }
    },
    methods: {
        checkBill() {
            this.displayDetailBill = true
        }
    },
    watch: {
        outerVisible() {
            if (this.outerVisible == false) {
                this.displayDetailBill = false
            }
        }
    }
})
</script>
<style lang="css">
.home__row__container {
    background-color: var(--color-background-home-main);
}

.dark__mode .home__row__container {
    background-color: var(--color-background-darkmode);
}

.form_detail_bill .el-form-item__content {
    justify-content: center;
}

.bill_detail .info {
    display: flex;
    text-align: left;
    justify-content: space-around;
    margin-top: 15px;
}
.bill_detail .info .info_customer,
.bill_detail .info .payment_service{
    width: 40%;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 5px;

}
.bill_detail .products{
    display: flex;
    flex-direction: column;
}
.bill_detail .products .item_detail_bill{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 15px;
}
.bill_detail .price_bill_detail{
    text-align: right;
    margin-right: 30px;
}
</style>