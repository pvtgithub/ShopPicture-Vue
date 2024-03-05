<template>
    <el-row class="home__row__container">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <BreadCrumb :listBreadCrumb="breadCrumb" />
        </el-col>
        <el-col :xs="1" :sm="4"></el-col>
    </el-row>
    <el-row class="home__row__container">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <el-breadcrumb class="timeline__checkout" :separator-icon="ArrowRight" style="padding: 10px; font-size: 16px;">
                <el-breadcrumb-item>SHOPPING CART</el-breadcrumb-item>
                <el-breadcrumb-item style="font-weight: bold;">CHECKOUT DETAILS</el-breadcrumb-item>
                <el-breadcrumb-item>ORDER COMPLETE</el-breadcrumb-item>
            </el-breadcrumb>
            <el-row>
                <el-col :xl="12" :md="24" style="padding: 5%;">
                    <div class="detail__bill">
                        <h2 style="text-align: center;">ĐƠN HÀNG CỦA BẠN</h2>
                        <table>
                            <tr>
                                <th></th>
                                <th>Sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Tổng phụ</th>
                            </tr>
                            <tr v-for="(item, index) in cart.products" :key="index">
                                <td style="display:flex; align-items: center; justify-content: space-around;">
                                    <el-popconfirm width="220" confirm-button-text="OK" cancel-button-text="Cancel"
                                        :icon="InfoFilled" icon-color="#626AEF" title="Xóa sản phẩm khỏi giỏ hàng?"
                                        @confirm="removeItem(item.id)">
                                        <template #reference>
                                            <el-icon style="cursor: pointer;">
                                                <CloseBold />
                                            </el-icon>
                                        </template>
                                    </el-popconfirm>
                                    <img width="50" height="50" :src="require(`@/assets/tranh_son_dau/${item.image}`)"
                                        alt="">
                                </td>
                                <td><span class="text_item">{{ item.name }}</span></td>
                                <td><span class="text_item">{{ item.quantity }}</span></td>
                                <td> <span class="text_item">{{ MainUtils.toCurrency(item.price * item.quantity) }}</span>
                                </td>
                            </tr>
                        </table>
                        <div class="delivery">
                            <h5>Chọn phương thức vận chuyển</h5>
                            <el-radio-group v-model="deliveryService" @change="deliveryComputed()">
                                <el-radio :label="2">Chuyển phát truyền thống</el-radio>
                                <el-radio :label="5">Chuyển phát thương mại điện tử</el-radio>
                            </el-radio-group>
                            <span v-if="deliveryService == 2">Phí vận chuyển (Chuyển phát truyền thống): {{
                                MainUtils.toCurrency(deliveryPrice)
                            }}</span>
                            <span v-if="deliveryService == 5">Phí vận chuyển (Chuyển phát thương mại điện tử): {{
                                MainUtils.toCurrency(deliveryPrice) }}</span>

                            <span v-if="!ruleForm?.ward" style="color: red;">Chọn địa chỉ để cập nhập giá giao hàng</span>

                        </div>
                        <div class="sum__bill">
                            <span>Tổng tiền</span>
                            <span>{{ MainUtils.toCurrency(cart.sumPrice + deliveryPrice) }}</span>
                        </div>
                        <h3>Xác nhận thông tin</h3>
                        <p>Quý khách vui lòng điền đầy đủ thông tin để tiện cho việc giao hàng.</p>
                    </div>
                </el-col>
                <el-col :xl="12" :md="24" style="padding: 5%;">
                    <div>
                        <h2>THÔNG TIN THANH TOÁN</h2>
                    </div>
                    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="form__payment"
                        size="default" status-icon>
                        <el-form-item prop="name">
                            <el-input v-model="ruleForm.name" placeholder="Họ và tên" />
                        </el-form-item>
                        <el-form-item prop="province">
                            <el-select v-model="ruleForm.province" placeholder="Tỉnh thành"
                                @change="loadDistrict(ruleForm.province.ProvinceID)" value-key="ProvinceID">
                                <el-option v-for="(item) in listProvince" :key="item.ProvinceID" :label="item.ProvinceName"
                                    :value="item" />
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="district">
                            <el-select v-model="ruleForm.district" placeholder="Quận huyện"
                                @change="loadWard(ruleForm.district.DistrictID)" value-key="DistrictID">
                                <el-option v-for="(item) in listDistrict" :key="item.DistrictID" :label="item.DistrictName"
                                    :value="item" />
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="ward">
                            <el-select @change="deliveryComputed()" v-model="ruleForm.ward" placeholder="Xã phường"
                                value-key="WardCode">
                                <el-option v-for="(item) in listWard" :key="item.WardCode" :label="item.WardName"
                                    :value="item" />
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="detail">
                            <el-input v-model="ruleForm.detail" placeholder="Địa chỉ chi tiết" />
                        </el-form-item>
                        <el-form-item prop="phone">
                            <el-input v-model="ruleForm.phone" placeholder="Số điện thoại" />
                        </el-form-item>
                        <el-form-item prop="email">
                            <el-input v-model="ruleForm.email" placeholder="Email" />
                        </el-form-item>
                        <el-form-item prop="note">
                            <el-input v-model="ruleForm.note" type="textarea" placeholder="Ghi chú" />
                        </el-form-item>
                        <div class="payment">
                            <h4>Phương thức thanh toán</h4>
                            <el-tabs v-model="activeName" class="demo-tabs">
                                <el-tab-pane label="Tiền mặt" name="first">
                                    <h4>Thanh toán bằng tiền mặt</h4>
                                    <p>
                                        Khi thanh toán bằng tiền mặt nhân viên của cửa hàng sẽ liên hệ xác nhận đơn hàng và
                                        quý khách phải chuyển khoản trước 20% giá trị đơn hàng
                                    </p>
                                    <el-button :disabled="disableButton" @click="resetForm(ruleFormRef)">Reset</el-button>
                                    <el-button :loading="disableButton" type="primary"
                                        @click="submitForm(ruleFormRef, true)">
                                        Đặt hàng
                                    </el-button>
                                </el-tab-pane>
                                <el-tab-pane label="ATM / Momo" name="second">

                                    <div class="item1">
                                        <h5>Quét mã QR</h5>
                                        <el-button width="200" height="110" :disabled="disableButton"
                                            @click="paymentMomoCaptureWallet(ruleFormRef)">
                                            <img src="../../public/images/atm_momo/momo.jpg" height="120" width="auto" />
                                        </el-button>
                                    </div>
                                    <div class="item2">
                                        <h5>ATM</h5>
                                        <el-button width="200" height="110" :disabled="disableButton"
                                            @click="paymentMomoAtm(ruleFormRef)">
                                            <img src="../../public/images/atm_momo/atm.jpg" height="120" width="auto" />
                                        </el-button>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-form>

                </el-col>
            </el-row>

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
<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { reactive, ref, h } from 'vue'
import { type FormInstance, type FormRules } from 'element-plus'
import billService from '@/service/billService'
import momoService from '@/service/momoService'
import * as CryptoJS from 'crypto-js';
import { InfoFilled } from '@element-plus/icons-vue';
import ConstVariable from '../../const'
import { ElMessageBox } from 'element-plus'

const activeName = ref('first')
const disableButton = ref(false)

interface RuleForm {
    name: string
    province: any
    district: any
    ward: any
    detail: string
    phone: string
    email: string
    note: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: '',
    province: null,
    district: null,
    ward: null,
    detail: '',
    phone: '',
    email: '',
    note: ''
})

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: 'Nhập tên khách hàng', trigger: 'blur' },
        { min: 3, max: 50, message: 'Chiều dài từ 3 -> 50', trigger: 'blur' },
    ],
    province: [
        {
            required: true,
            message: 'Chọn tỉnh thành',
            trigger: 'change',
        },
    ],
    district: [
        {
            required: true,
            message: 'Chọn quận huyện',
            trigger: 'change',
        },
    ],
    ward: [
        {
            required: true,
            message: 'Chọn xã phường',
            trigger: 'change',
        },
    ],
    phone: [
        {
            required: true,
            message: 'Nhập số điện thoại',
            trigger: 'change',
        },
    ],
    email: [
        {
            required: true,
            message: 'Nhập email',
            trigger: 'change',
        },
    ]
})

const payment = (typePayment: string, id_bill: number) => {
    const requestIdRandom = Math.floor(Math.random() * 1000000);
    const partnerCode = 'MOMOBKUN20180529';
    const accessKey = 'klm05TvNBzhg7h7j';
    const secretKey = 'at67qH6mk8w5Y1nAyMoYKMWACiEi2bsa';
    const orderInfo = "Thanh toán đơn hàng của: " + ruleForm.name;
    const amount = (store.state.cart.sumPrice + deliveryPrice.value).toString();
    const orderId = id_bill;
    const redirectUrl = ConstVariable.BASE_URL + "/complete";
    const ipnUrl = ConstVariable.BASE_URL_API;
    const extraData = "";

    const requestId = requestIdRandom;
    const requestType = typePayment;
    const rawHash = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;

    const signature = CryptoJS.HmacSHA256(rawHash, secretKey).toString();


    const data = {
        "partnerCode": partnerCode,
        "partnerName": "Test",
        "storeId": "MomoTestStore",
        "requestId": requestId,
        "amount": amount,
        "orderId": orderId,
        "orderInfo": orderInfo,
        "redirectUrl": redirectUrl,
        "ipnUrl": ipnUrl,
        "lang": "vi",
        "extraData": extraData,
        "requestType": requestType,
        "signature": signature
    }
    momoService.payment(data).then((res) => {
        window.open(res.data.payUrl, '_self')
    }).catch((e) => {
        console.log(e)
    })
}
const id_bill = ref(0)
const paymentMomoCaptureWallet = async (formEl: FormInstance | undefined) => {
    disableButton.value = true
    if (!formEl) {
        disableButton.value = false
        return
    }
    await formEl.validate((valid, fields) => {
        if (valid) {
            submitForm(formEl, false)
            setTimeout(() => {
                if (checkNotExistBillAndStatusByPhone.value) {
                    payment("captureWallet", id_bill.value)
                }
            }, 500);
        } else {
            disableButton.value = false
            console.log('error submit!', fields)
        }
    })
}

const paymentMomoAtm = async (formEl: FormInstance | undefined) => {
    disableButton.value = true
    if (!formEl) {
        disableButton.value = false
        return
    }
    await formEl.validate((valid, fields) => {
        if (valid) {
            submitForm(formEl, false)
            setTimeout(() => {
                if (checkNotExistBillAndStatusByPhone.value) {
                    payment("payWithATM", id_bill.value)
                }
            }, 500);
        } else {
            disableButton.value = false
            console.log('error submit!', fields)
        }
    })
}
const checkNotExistBillAndStatusByPhone = ref(false)

const submitForm = async (formEl: FormInstance | undefined, cash: boolean) => {
    disableButton.value = true
    if (!formEl) {
        disableButton.value = false
        return
    }
    await formEl.validate((valid, fields) => {
        if (valid) {
            const bill: Bill = {
                "customer": {
                    "name": ruleForm.name,
                    "address": `${ruleForm.detail} - ${ruleForm.ward.WardName} - ${ruleForm.district.DistrictName} - ${ruleForm.province.ProvinceName}`,
                    "phone": ruleForm.phone,
                    "email": ruleForm.email,
                    "note": ruleForm.note
                },
                "details": {
                    "products": [],
                    "sum_price": 0,
                    "delivery_price": 0,
                    "total_price": 0,
                    "cash": false,
                    "status": 1
                },
                id: 0
            }
            const products: any = []
            const cart: Cart = store.state.cart
            cart.products.forEach(element => {
                const product = {
                    "product_id": element.id,
                    "quanlity": element.quantity
                }
                products.push(product)
            });

            bill.details.products = products
            bill.details.sum_price = cart.sumPrice
            bill.details.delivery_price = deliveryPrice.value
            bill.details.total_price = cart.sumPrice + deliveryPrice.value
            bill.details.cash = cash
            bill.details.status = 1
            bill.id = Math.floor(Math.random() * 1000000);

            billService.getBillByPhoneNumber(ruleForm.phone).then((res) => {
                checkNotExistBillAndStatusByPhone.value = res.data.length == 0 || res.data[0].details.status == 4
                if (checkNotExistBillAndStatusByPhone.value) {
                    billService.postBill(bill).then((res) => {
                        if (cash) {
                            ElMessageBox({
                                title: 'THÔNG BÁO',
                                message: h('h4', null, 'Bạn đã đặt hàng thành công!'),
                                type: 'success'
                            }).catch((e) => { console.log(e); })
                        }
                        id_bill.value = res.data.id
                        disableButton.value = false
                    })
                } else {
                    ElMessage.error('Số điện đã đặt hàng và đơn hàng chưa hoàn tất!')
                    disableButton.value = false
                }
            })
        } else {
            disableButton.value = false
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
const listDistrict = ref([] as any)
const listWard = ref([] as any)

const deliveryPrice = ref(0)
const deliveryService = ref(2)
var receiveService: ReceiveServiceGhn = {
    code: 0,
    message: '',
    data: {
        total: 0,
        service_fee: 0,
        insurance_fee: 0,
        pick_station_fee: 0,
        coupon_value: 0,
        r2s_fee: 0,
        return_again: 0,
        document_return: 0,
        double_check: 0,
        cod_fee: 0,
        pick_remote_areas_fee: 0,
        deliver_remote_areas_fee: 0,
        cod_failed_fee: 0
    }
}
const deliveryComputed = () => {
    if (ruleForm?.ward) {
        const products: ItemSend[] = []
        var height = 0
        var weight = 0

        store.state.cart.products.forEach(element => {
            const product: ItemSend = {
                name: element.name,
                quantity: element.quantity,
                height: 50,
                weight: 3000,
                length: 70,
                width: 50
            }
            height += 50
            weight += 3000
            products.push(product)
        });

        const data: SendServiceGhn = {
            service_type_id: deliveryService.value,
            to_district_id: ruleForm.district.DistrictID,
            to_ward_code: ruleForm.ward.WardCode,
            height: height,
            length: 70,
            weight: weight,
            width: 50,
            insurance_value: store.state.cart.sumPrice,
            cod_value: store.state.cart.sumPrice,
            coupon: "",
            items: products
        }

        ghnService.getDeliveryPrice(data).then((res) => {
            receiveService = res.data
            deliveryPrice.value = receiveService.data.total

        }).catch((e) => { 
            deliveryPrice.value = 0
            ElMessage({
                showClose: true,
                message: e.response.data.code_message_value,
                type: 'error',
            })
         })
    } else {
        deliveryPrice.value = 0
        return
    }
}
const loadDistrict = (idProvince: number) => {
    ruleForm.district = null
    ruleForm.ward = null
    deliveryComputed()

    ghnService.getDistrictFromProvince(idProvince).then((res) => {
        listDistrict.value = res.data.data
    }).catch((e) => {
        window.alert('Có lỗi')
    })
}
const loadWard = (idDistrict: number) => {
    ruleForm.ward = null
    deliveryComputed()

    ghnService.getWardFromDistrict(idDistrict).then((res) => {
        listWard.value = res.data.data
    }).catch((e) => {
        window.alert('Có lỗi')
    })
}


</script>
<script lang="ts">
import { defineComponent } from 'vue'
import FooterMain from '@/components/layouts/footer/FooterMain.vue';
import FooterTop from '@/components/layouts/footer/FooterTop.vue';
import BreadCrumb from '@/components/shared/BreadCrumb.vue';
import { Cart } from '@/interface/Cart';
import store from '@/store/LanguageStore';
import { ElMessage } from 'element-plus'
import router from '@/router';
import { Bill } from '@/interface/Bill';
import ghnService from '@/service/ghnService'
import { ReceiveServiceGhn } from '@/interface/ghn/ReceiveServiceGhn';
import { SendServiceGhn, ItemSend } from '@/interface/ghn/SendServiceGhn';
import { MainUtils } from '@/utils/MainUtils'

export default defineComponent({
    name: 'CheckoutView',
    components: {
        FooterMain,
        FooterTop,
        BreadCrumb,
    },
    data() {
        return {
            breadCrumb: [
                {
                    name: 'Trang chủ',
                    path: '/'
                },
                {
                    name: 'Thanh toán',
                    path: ''
                }
            ],
            cart: {
                products: [],
                sumPrice: 0
            } as Cart,
            listProvince: [] as any,

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
    methods: {
        removeItem(id: number) {
            store.dispatch('removeItem', id)

            ElMessage({
                showClose: true,
                message: 'Đã xóa sản phẩm khỏi giỏ hàng.',
                type: 'success',
            })
        },
        loadProvince() {
            ghnService.getAllProvince().then((res) => {
                this.listProvince = res.data.data

            }).catch((e) => {
                window.alert('Có lỗi')
            })
        },

    },
    mounted() {
        this.loadProvince()
        this.cart = this.cartStore
        if (!this.checkProductInCart) {
            router.push('/')
        }

        store.watch(
            state => state.cart,
            newValue => {
                this.cart = this.cartStore
                if (!this.checkProductInCart) {
                    router.push('/')
                }
            },
            { deep: true }
        )
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

.timeline__checkout span.el-breadcrumb__item {
    font-size: 27px;
    font-family: emoji;
}

.detail__bill {
    padding: 2%;
    border: 2px solid orange;
    text-align: left;
}

.detail__bill table {
    text-align: center;
    width: 100%;
}

.detail__bill table tr {
    height: 30px;
    border: 1px solid gray;
}

.detail__bill .sum__bill {
    display: flex;
    justify-content: space-between;
    padding: 30px 5% 5px 5%;
}

.detail__bill .sum__bill span:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
}

.detail__bill .sum__bill span:nth-child(2) {
    font-size: 30px;
    font-weight: bold;
    color: red;
}

.timeline__checkout {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.form__payment .el-form-item__content {
    margin-left: 0 !important;
}

.payment div#pane-second {
    display: flex;
    justify-content: space-evenly;
}

.payment div#pane-second .item1 button,
.payment div#pane-second .item2 button {
    cursor: pointer;
    border: 0px solid;
    background-color: var(--color-background-home-main);
    height: 110px;
}

.delivery {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.delivery span {
    padding: 10px;
}
</style>