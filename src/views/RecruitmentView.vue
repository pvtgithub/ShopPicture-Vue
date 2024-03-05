<template>
    <el-row class="home__row__container recruit_container">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <h2>Mô tả công việc</h2>
            <h3>Cửa hàng Khung & Tranh của chúng tôi đang cần tuyển 2 họa sĩ vẽ tranh sơn dầu</h3>
            <p>
                – Có thể vẽ được tất cả các thể loại tranh bao gồm như: Tranh phong cảnh, tĩnh vật, trừu tượng, hiện đại,
                đặc biệt nếu vẽ được chân dung là một lợi thế.
                <br />
                – Ưu tiên những bạn đã có kinh nghiệm, đã từng làm việc và vẽ tranh cho các xưởng vẽ tranh.
                <br />
                – Cụ thể trao đổi khi phỏng vấn.
            </p>
            <h3>Yêu cầu công việc</h3>
            <p>
                – Tư duy màu và bố cục tốt, có khả năng sáng tác
                <br />
                – Trung thực, chỉn chu và sáng tạo
                <br />
                – Ưu tiên tốt nghiệp lớp hội hoạ các trường ĐH mỹ thuật
                <br />
                – Có khả năng làm việc độc lập và nhóm tốt.
            </p>
            <h3>Quyền lợi được hưởng</h3>
            <p>
                – Làm việc trong môi trường sáng tạo và thân thiện.
                <br />
                – Được làm việc với các nhóm vẽ chuyên nghiệp, có nhiều năm kinh nghiệm.
                <br />
                – Cơ hội phát triển bản thân cũng như nghề nghiệp, có thể gắn bó lâu dài với thu nhập hấp dẫn.
            </p>
            <h3>Liên hệ</h3>
            <p>
                Cửa hàng Khung & Tranh
                <br />
                Địa chỉ: 385 đường Ngọc Hồi, Thanh Trì, Hà Nội
                <br />
                Số đt: 0983568361
            </p>
            <h3>Loại hình công việc</h3>
            <p>
                – Toàn thời gian, Bán thời gian
                <br />
                – Lương: Thỏa thuận
            </p>
        </el-col>
        <el-col :xs="1" :sm="4"></el-col>
    </el-row>
    <el-row class="home__row__container recruit_container">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <FooterTop />
        </el-col>
        <el-col :xs="1" :sm="4"></el-col>
    </el-row>
    <el-row class="home__row__container recruit_container">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <FooterMain />
        </el-col>
        <el-col :xs="1" :sm="4"></el-col>
    </el-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import FooterMain from '@/components/layouts/footer/FooterMain.vue';
import FooterTop from '@/components/layouts/footer/FooterTop.vue';
export default defineComponent({
    name: 'MapView',
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

.recruit_container h2,
.recruit_container h3,
.recruit_container p {
    text-align: left;
    line-height: 1.5;
}
</style>