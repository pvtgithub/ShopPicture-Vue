<template>
  <el-row class="home__row__container">
    <el-col :span="4"></el-col>
    <el-col :span="16" class="about_container">
      <h1>Về Bán Tranh – Tranh Phong Cảnh, Tranh Sơn Dầu, Tranh Nghệ Thuật & Khung Tranh Đẹp</h1>
      <el-row>
        <el-col :span="16">
          <p>Kính chào quý khách, lời đầu tiên chúng tôi xin chân thành cảm ơn quý khách đã tín nhiệm và ủng chúng tôi
            trong suốt thời gian chúng tôi xây dựng và phát triển cửa hàng Khung & Tranh Mộc Sinh. Trong những năm gần đây
            nhu cầu sử dụng tranh để trang trí cho các phòng trong gia đình, nhà hàng, khách sạn, thậm chí là những bức
            tranh tường ở các nơi khu dân cư ngày càng tăng và được ưa chuộng. Đó là một nhu cầu làm đẹp tất yếu cho cuộc
            sống và đáp ứng lại nhu cầu này, chúng tôi đã đã luôn luôn cải tiến dịch vụ để phục vụ quý khách tốt nhất.
            Chính vì lẽ đó, chúng tôi cùng các họa sĩ tài năng trên khắp Việt Nam đã cho ra đời những bức tranh sơn dầu
            đẹp, những khung tranh ấn tượng nhất để phục vụ mọi người trên toàn quốc.</p>
          <p>Cùng với sự làm việc không biết mệt mỏi của đội ngũ nhân viên Bán Tranh, những họa sĩ tài hoa, đầy sáng tạo,
            cùng các chuyên gia hội họa dày dạn kinh nghiệm đã cho ra đời nhiều tác phẩm tranh độc đáo và ấn tượng. Các
            bức tranh phong cảnh như một sự quảng bá những hình ảnh đẹp nhất từ khắp mọi miền tổ quốc và các phong cảnh
            đẹp trên thế giới đến mọi người và khơi dậy tình yêu cái đẹp của con người Việt Nam. Cũng vậy, những bức tranh
            nghệ thuật, tranh sơn dầu…như càng làm tăng thêm vẻ đẹp, tô điểm thêm những sắc màu cuộc sông cho không gian
            của bạn thêm phần lộng lẫy và sang trọng.</p>
          <h2>Nhiệm vụ của chúng tôi</h2>
          <p>
            – Chúng tôi luôn luôn cố gắng cải thiện kỹ năng mà chuyên môn để tạo ra những tác phẩm đẹp và phục vụ quý
            khách với chất lượng tốt nhất.
            <br />
            – Những yêu cầu của khách như những thước đo để chúng tôi phấn đấu. Những đánh giá của quý khách như những lời
            khuyên giúp chúng tôi cải thiện để ngày một tốt hơn.
            <br />
            – Chúng tôi luôn luôn cố gắng lắng nghe và thấu hiểu mọi yêu cầu của quý khách để mang lại sự hài lòng cho quý
            khách. Đó cũng là kim chỉ nam cho chúng tôi để cải thiện dịch vụ ngày một tốt hơn.
          </p>
        </el-col>
        <el-col :span="8">
          <img src="https://bantranh.com/wp-content/uploads/2019/10/cua-hang-khung-tranh-385-duong-ngoc-hoi.jpg"
            alt=""></el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <h2>Đội ngũ sáng tác của chúng tôi</h2>
          <p>Chúng tôi luôn luôn xây dựng một đội ngũ các tư vấn viên, kiến trúc sư, họa sĩ với sự nhiệt tình cao nhất,
            chăm
            chỉ và sáng tạo trong công việc, tạo ra những sản phẩm ưng ý nhất và luôn luôn đảm bảo chất lượng dịch vụ như
            yêu cầu.</p>
          <h2>Những mục tiêu</h2>
          <p>
            – Luôn luôn phục vụ chăm sóc khách hàng với tinh thần nhiệt tình và chu đáo nhất.
            <br />
            – Luôn cải thiện kỹ năng cho đội ngũ nhân viên phù hợp với những yêu cầu của xu hướng hiện tại ai ở Việt Nam
            hay
            thế giới.
          </p>
          <h2>Thông tin liên hệ</h2>
          <p>
            Cửa hàng Khung & Tranh <br />
            Địa chỉ: 385 đường Ngọc Hồi, Thanh Trì, Hà Nội <br />
            Email: info@bantranh.com <br />
            Điện thoại: 0961136825 <br />
            Phone: 0983568361 <br />
          </p>
          <p>
            Chúng tôi xin chân thành cảm ơn quý khách đã ủng hộ Bán Tranh.<br />
            Chúng tôi xin chúc quý khách an khang thịnh vượng!
          </p>
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
<script lang="ts">
import { defineComponent } from 'vue'
import FooterMain from '@/components/layouts/footer/FooterMain.vue';
import FooterTop from '@/components/layouts/footer/FooterTop.vue';

export default defineComponent({
  name: 'AboutView',
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

.about_container p, .about_container h2, .about_container h1{
  text-align: left;
  line-height: 1.5;
}
</style>