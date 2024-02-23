<template>
    <el-row class="home__row__container">
        <el-col :span="4"></el-col>
        <el-col :span="16">
            <BreadCrumb :listBreadCrumb="breadCrumb" />
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
    <el-row class="home__row__container">
        <el-col :span="4"></el-col>
        <el-col :span="16">
            <el-breadcrumb class="timeline__checkout" :separator-icon="ArrowRight" style="padding: 10px; font-size: 16px;">
                <el-breadcrumb-item>SHOPPING CART</el-breadcrumb-item>
                <el-breadcrumb-item style="font-weight: bold;">CHECKOUT DETAILS</el-breadcrumb-item>
                <el-breadcrumb-item>ORDER COMPLETE</el-breadcrumb-item>
            </el-breadcrumb>
            <el-row>
                <el-col :xl="12" :md="24" style="padding: 5%;">
                    <div>
                        <h2>THÔNG TIN THANH TOÁN</h2>
                    </div>
                    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                        :size="formSize" status-icon>
                        <el-form-item label="Activity name" prop="name">
                            <el-input v-model="ruleForm.name" />
                        </el-form-item>
                        <el-form-item label="Activity zone" prop="region">
                            <el-select v-model="ruleForm.region" placeholder="Activity zone">
                                <el-option label="Zone one" value="shanghai" />
                                <el-option label="Zone two" value="beijing" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Activity count" prop="count">
                            <el-select-v2 v-model="ruleForm.count" placeholder="Activity count" :options="options" />
                        </el-form-item>
                        <el-form-item label="Activity time" required>
                            <el-col :span="11">
                                <el-form-item prop="date1">
                                    <el-date-picker v-model="ruleForm.date1" type="date" label="Pick a date"
                                        placeholder="Pick a date" style="width: 100%" />
                                </el-form-item>
                            </el-col>
                            <el-col class="text-center" :span="2">
                                <span class="text-gray-500">-</span>
                            </el-col>
                            <el-col :span="11">
                                <el-form-item prop="date2">
                                    <el-time-picker v-model="ruleForm.date2" label="Pick a time" placeholder="Pick a time"
                                        style="width: 100%" />
                                </el-form-item>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="Instant delivery" prop="delivery">
                            <el-switch v-model="ruleForm.delivery" />
                        </el-form-item>
                        <el-form-item label="Activity type" prop="type">
                            <el-checkbox-group v-model="ruleForm.type">
                                <el-checkbox label="Online activities" name="type" />
                                <el-checkbox label="Promotion activities" name="type" />
                                <el-checkbox label="Offline activities" name="type" />
                                <el-checkbox label="Simple brand exposure" name="type" />
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="Resources" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="Sponsorship" />
                                <el-radio label="Venue" />
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="Activity form" prop="desc">
                            <el-input v-model="ruleForm.desc" type="textarea" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm(ruleFormRef)">
                                Create
                            </el-button>
                            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
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
                            <tr>
                                <td style="display:flex; align-items: center; justify-content: space-around;">
                                    <el-icon size="20"><Close/></el-icon>
                                    <img width="50" height="50" src="http://10.1.1.119:8080/img/logo.1eb73c11.png" alt="">
                                </td>
                                <td>Ảnh 1</td>
                                <td>2</td>
                                <td>500$</td>
                            </tr>
                        </table>
                        <div class="sum__bill">
                            <span>Tổng tiền</span>
                            <span>1000$</span>
                        </div>
                        <h3>Chuyển khoản qua ngân hàng</h3>
                        <p>Sau khi đặt hàng, bạn sẽ chuyển khoản trước 50% số tiền trên tổng đơn hàng và chúng tôi sẽ ship
                            hàng đến nơi và nhận số tiền còn lại qua chuyển khoản hoặc tiền mặt.</p>
                        <el-button type="danger">Thanh toán</el-button>    
                    </div>
                </el-col>
            </el-row>

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
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
    name: string
    region: string
    count: string
    date1: string
    date2: string
    delivery: boolean
    type: string[]
    resource: string
    desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: 'Hello',
    region: '',
    count: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    count: [
        {
            required: true,
            message: 'Please select Activity count',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
        },
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
        },
    ],
    desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))
</script>
<script lang="ts">
import { defineComponent } from 'vue'
import FooterMain from '@/components/layouts/footer/FooterMain.vue';
import FooterTop from '@/components/layouts/footer/FooterTop.vue';
import BreadCrumb from '@/components/shared/BreadCrumb.vue';

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

.dark__mode .home__row__container {
    background-color: var(--color-background-darkmode);
}

.timeline__checkout span.el-breadcrumb__item {
    font-size: 27px;
    font-family: emoji;
}
.detail__bill {
    padding: 25px;
    border: 2px solid orange;
    text-align: left;
}
.detail__bill table{
    text-align: center;
    width: 100%;
}
.detail__bill table tr{
    height: 30px;
    border: 1px solid gray;
}
.detail__bill .sum__bill {
    display: flex;
    justify-content: space-between;
    padding: 30px 5% 5px 5%;
}
.detail__bill .sum__bill span:nth-child(1){
    font-size: 20px;
    font-weight: bold;
}
.detail__bill .sum__bill span:nth-child(2){
    font-size: 30px;
    font-weight: bold;
    color: red;
}
.timeline__checkout {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>