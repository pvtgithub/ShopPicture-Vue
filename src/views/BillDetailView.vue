<template>
    <el-button plain @click="outerVisible = true">
        Kiểm tra đơn hàng
    </el-button>
    <el-dialog v-model="outerVisible" title="Thông tin chi tiết đơn hàng" :style="`max-width: ${widthDialog}`" width="90%" class="bill_detail">
       
        <el-form v-if="!displayDetailBill" :model="form" class="form_detail_bill">
            <el-form-item>
                <el-input v-model="form.phone" autocomplete="off" placeholder="Nhập số điện thoại đặt hàng..."
                    style="width: 70%;" />
            </el-form-item>
            <div>
                <el-button @click="outerVisible = false" :disabled="buttonLoading">Cancel</el-button>
                <el-button type="primary" @click="checkBill(form.phone)" :loading="buttonLoading">
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
                        <strong>Họ tên: </strong> {{ bill_detail_info.customer.name }}
                    </p>
                    <p>
                        <strong>Email: </strong> {{ bill_detail_info.customer.email }}
                    </p>
                    <p>
                        <strong>Địa chỉ: </strong> {{ bill_detail_info.customer.address }}
                    </p>
                    <p>
                        <strong>Số điện thoại: </strong> {{ bill_detail_info.customer.phone }}
                    </p>
                    <p>
                        <strong>Ghi chú: </strong> {{ bill_detail_info.customer.note }}
                    </p>
                </div>
                <div class="payment_service">
                    <h2>Thông tin thanh toán</h2>
                    <el-divider></el-divider>
                    <h3 v-if="cashPayment">Thanh toán bằng tiền mặt</h3>
                    <div v-if="!cashPayment">
                        <h3>Thanh toán điện tử</h3>
                        <p><strong>Mã đơn hàng: </strong> {{ payment_detail_info.orderId }}</p>
                        <p><strong>Thông tin đơn hàng: </strong> {{ payment_detail_info.orderInfo }}</p>
                        <p><strong>Loại dịch vụ:</strong> {{ payment_detail_info.payType }}</p>
                        <p><strong>Thời gian đặt hàng: </strong> {{ payment_detail_info.responseTime }}</p>
                        <p><strong>Kết quả thanh toán: </strong> {{ payment_detail_info.message }}</p>
                        <p><strong>Tổng tiền đã thanh toán: </strong> {{
                            MainUtils.toCurrency(parseInt(payment_detail_info.amount)) }}
                        </p>
                    </div>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="products">
                <div v-for="item in listProduct" :key="item.id" class="item_detail_bill">
                    <img :src="require(`@/assets/tranh_son_dau/${item.image}`)" width="70px" height="70px" />
                    <h4>{{ item.name }}</h4>
                    <h4>X{{ item.quantity }}</h4>
                    <h4>{{ MainUtils.toCurrency(item.price) }} </h4>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="price_bill_detail">
                <p><strong>Tổng tạm tính: </strong> {{ MainUtils.toCurrency(bill_detail_info.details.sum_price) }} </p>
                <p><strong>Phí vận chuyển: </strong>{{ MainUtils.toCurrency(bill_detail_info.details.delivery_price) }} </p>
                <p><strong>Thành tiền: </strong>{{ MainUtils.toCurrency(bill_detail_info.details.total_price) }} </p>
            </div>
            <el-divider></el-divider>
            <div class="price_bill_detail">
                <el-button @click="outerVisible = false" type="danger" size="large">Đóng</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { MainUtils } from '@/utils/MainUtils'
</script>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import billService from '@/service/billService'
import { ElMessage } from 'element-plus'
import { Bill } from '@/interface/Bill'
import { Payment } from '@/interface/Payment'
import { Product } from '@/interface/Product'
import pictureService from '@/service/pictureService'

export default defineComponent({
    name: 'BillDetailView',
    data() {
        return {
            outerVisible: false,
            cashPayment: false,
            displayDetailBill: false,
            form: reactive({
                phone: '',
            }),
            active: ref(1),
            bill_detail_info: {} as Bill,
            payment_detail_info: {} as Payment,
            listProduct: [] as Product[],
            buttonLoading: false,
            widthDialog: '500px'
        }
    },
    methods: {
        resetAllVariable() {
            this.outerVisible = false
            this.cashPayment = false
            this.displayDetailBill = false
            this.form = reactive({
                phone: '',
            })
            this.active = 1
            this.bill_detail_info = {} as Bill
            this.payment_detail_info = {} as Payment
            this.listProduct = [] as Product[]
            this.buttonLoading = false
            this.widthDialog = '500px'
        },
        checkBill(phoneNumber: any) {
            this.buttonLoading = true;
            setTimeout(() => {
                billService.getBillByPhoneNumber(phoneNumber).then((res) => {
                    if (res.data.length == 0) {
                        this.widthDialog = '500px'
                        this.listProduct = []
                        ElMessage.error('Không tìm thấy hóa đơn cho số điện thoại này')
                    } else {
                        this.bill_detail_info = res.data[0];
                        this.cashPayment = this.bill_detail_info.details.cash
                        this.active = this.bill_detail_info.details.status
                        this.bill_detail_info.details.products.forEach(element => {
                            pictureService.getPictureById(element.product_id).then((res) => {
                                const product: Product = res.data
                                product.quantity = element.quanlity
                                this.listProduct.push(product)
                            })
                        });
                        if (!this.cashPayment) {
                            billService.getPaymentByOrderId(this.bill_detail_info.id).then((res) => {
                                if (res.data.length > 0) {
                                    this.payment_detail_info = res.data[0]
                                    this.payment_detail_info.responseTime = MainUtils.timeToDateTimeFormat(parseInt(this.payment_detail_info.responseTime))
                                    this.widthDialog = '900px'
                                    this.displayDetailBill = true
                                }else{
                                    this.widthDialog = '500px'
                                    this.listProduct = []
                                    ElMessage.error('Đơn hàng chưa được thanh toán')
                                }
                            })
                        } else {
                            this.widthDialog = '900px'
                            this.displayDetailBill = true
                        }
                    }
                })
                this.buttonLoading = false;
            }, 500);
        }
    },
    watch: {
        outerVisible() {
            if (this.outerVisible == false) {
                this.resetAllVariable()
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
.bill_detail .info .payment_service {
    width: 40%;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 5px;

}

.bill_detail .products {
    display: flex;
    flex-direction: column;
}

.bill_detail .products .item_detail_bill {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 15px;
}

.bill_detail .price_bill_detail {
    text-align: right;
    margin-right: 30px;
}
</style>