<template >
    <el-row class="home__row__container">
        <el-col :span="4"></el-col>
        <el-col :span="16">
            <el-row>
                <el-col :xl="12" class="contact_item">
                    <h2>Các câu hỏi thường gặp</h2>
                    <el-divider></el-divider>
                    <p>Vui lòng đọc những hướng dẫn của chúng tôi trước khi gửi yêu cầu hỗ trợ.</p>
                    <el-collapse v-model="activeNames">
                        <el-collapse-item name="1">
                            <template #title>
                                <div>
                                    <h3 class="item_title">
                                        Phí giao hàng đến tận nhà như thế nào?
                                    </h3>
                                </div>
                            </template>
                            <div>
                                Chúng tôi miễn phí giao hàng cho các khu vực trong nội thành Hà Nội và những bức tranh có
                                giá
                                trị lớn hơn 2.000.000vnđ
                            </div>
                        </el-collapse-item>
                        <el-collapse-item name="2">
                            <template #title>
                                <div>
                                    <h3 class="item_title">
                                        Những phương thức thanh toán nào được chấp nhận?
                                    </h3>
                                </div>
                            </template>
                            <div>
                                Thanh toán bằng tiền mặt, hoặc chuyển khoản là được chấp nhận.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item name="3">
                            <template #title>
                                <div>
                                    <h3 class="item_title">
                                        Trong bao lâu hàng sẽ được chuyển đến ?
                                    </h3>
                                </div>
                            </template>
                            <div>
                                Trong vòng 24h kể từ lúc mua hàng, hàng sẽ được chuyển đến bạn. Trường hợp các trường hợp
                                khách
                                quan ảnh hưởng đến vấn đề chuyển hàng, sẽ cộng thêm 1 ngày.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item name="4">
                            <template #title>
                                <div>
                                    <h3 class="item_title">
                                        Dữ liệu khách hàng sẽ được bảo mật?
                                    </h3>
                                </div>
                            </template>
                            <div>
                                Chúng tôi đảm bảo dữ liệu thông tin của bạn đã đăng ký với chúng tôi sẽ được bảo mật và an
                                toàn.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item name="5">
                            <template #title>
                                <div>
                                    <h3 class="item_title">
                                        Việc đặt hàng online diễn ra trong bao lâu?
                                    </h3>
                                </div>
                            </template>
                            <div>
                                Chỉ vài phút nếu bạn đã chọn được một bức tranh ưng ý.
                            </div>
                        </el-collapse-item>
                        <el-collapse-item name="6">
                            <template #title>
                                <div>
                                    <h3 class="item_title">
                                        Tôi có thể nhận hóa đơn khi mua tranh?
                                    </h3>
                                </div>
                            </template>
                            <div>
                                Nếu bạn yêu cầu.
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-col>
                <el-col :xl="12" class="contact_item">
                    <h2>Gửi một email đến chúng tôi</h2>
                    <el-divider></el-divider>
                    <p>
                        Nếu bạn muốn liên hệ hoặc hỏi trợ giúp từ chúng tôi thông qua email, vui lòng soạn email và gửi đến
                        địa
                        chỉ phanvantho@luvina.net
                        <br /><br /><br />
                        Chúng tôi sẽ trả lời đến bạn trong thời gian sớm nhất.
                        <br /><br /><br />
                        Cảm ơn!
                    </p>
                    <div>
                        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon>
                            <el-form-item prop="email">
                                <el-input v-model="ruleForm.email" placeholder="Email" />
                            </el-form-item>
                            <el-form-item prop="phone">
                                <el-input v-model="ruleForm.phone" placeholder="Phone Number" />
                            </el-form-item>
                            <el-form-item prop="subject">
                                <el-input v-model="ruleForm.subject" placeholder="Tiêu đề" />
                            </el-form-item>
                            <el-form-item prop="body">
                                <el-input v-model="ruleForm.body" type="textarea" placeholder="Nội dung" rows="5" />
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="$router.push('/')">Cancel</el-button>
                                <el-button type="primary" @click="sendEmail(ruleFormRef)">Gửi mail</el-button>
                            </el-form-item>
                        </el-form>

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
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
    email: string,
    phone: string,
    subject: string,
    body: string
}

const activeNames = ref(['1'])

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    email: '',
    phone: '',
    subject: '',
    body: ''
})
const rules = reactive<FormRules<RuleForm>>({
    email: [
        { required: true, message: 'Email không được để trống', trigger: 'blur' },
        { min: 3, max: 30, message: 'Chiều dài từ 3 -> 30 ký tự', trigger: 'blur' },
    ],
    phone: [
        { required: true, message: 'Số điện thoại không được để trống', trigger: 'blur' },
        { min: 3, max: 11, message: 'Chiều dài từ 3 -> 11 ký tự', trigger: 'blur' },
    ],
    subject: [
        { required: true, message: 'Tiêu đề không được để trống', trigger: 'blur' },
        { min: 3, max: 50, message: 'Chiều dài từ 3 -> 50 ký tự', trigger: 'blur' },
    ],
    body: [
        { required: true, message: 'Nội dung không được để trống', trigger: 'blur' },
        { min: 10, max: 500, message: 'Chiều dài từ 10 -> 500 ký tự', trigger: 'blur' },
    ]
})
const sendEmail = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            let subject = 'From Email: ' + ruleForm.email + ' ' + 'Phone Number: ' + ruleForm.phone + ' ' + ruleForm.subject;
            (window as any).Email.send({
                Host: "smtp.elasticemail.com",
                Username: "phanvantho@luvina.net",
                Password: "398DA43AC04126ECF67955211269C3422E7A",
                To: 'phanvantho@luvina.net',
                From: 'phanvantho@luvina.net',
                Subject: subject,
                Body: ruleForm.body
            }).then(
                (message: any) => alert(message)
            );
        } else {
            console.log('error submit!')
            return false
        }
    })
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import FooterMain from '@/components/layouts/footer/FooterMain.vue';
import FooterTop from '@/components/layouts/footer/FooterTop.vue';
import axios from 'axios'

export default defineComponent({
    name: 'ContactView',
    components: {
        FooterMain,
        FooterTop
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

.contact_item div,
.contact_item p,
.contact_item h2 {
    text-align: left;
}

.item_title {
    font-weight: 500;
    font-size: large;
    line-height: 1;
}

.contact_item {
    padding: 20px;
}
</style>