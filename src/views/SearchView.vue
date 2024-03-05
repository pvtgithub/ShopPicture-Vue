<template>
    <el-row class="home__row__container search__view">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <BreadCrumb :listBreadCrumb="listBreadCrumb"></BreadCrumb>

            <div class="header__search">
                <span>Hiển thị {{ fromToRecords.from }}–{{ fromToRecords.to }} của {{ fromToRecords.totalRecord }} kết
                    quả</span>
                <el-select @change="handleCurrentChange(1)" v-model="valueSelect" placeholder="Độ liên quan"
                    size="large" style="width: 240px">
                    <el-option v-for="item in optionsSelect" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
            </div>
            <el-row>
                <el-col :lg="6" :md="24">
                    <h3 style="text-align: left;">Danh mục</h3>
                    <el-divider style="margin: 10px 0 ; width: 130px;"></el-divider>
                    <div class="category_container">
                        <template v-for="(item, index) in categories" :key="index">
                            <div style="text-align: left;">
                                <router-link :to="item.link">{{ item.title }}</router-link>
                                <el-divider style="margin: 10px 0 ; width: 200px;"></el-divider>
                            </div>
                        </template>
                    </div>
                </el-col>

                <template v-if="fromToRecords.totalRecord == 0">
                    <el-col :lg="18" :md="24">
                        <el-row>
                            <el-col :span="24">
                                <h2 style="text-align: center; color: red;">Không tìm thấy kết quả nào!</h2>

                            </el-col>
                        </el-row>
                    </el-col>
                </template>

                <template v-else>
                    <el-col :lg="18" :md="24">
                        <el-row>
                            <el-col :span="24">
                                <el-pagination :hide-on-single-page="true" @current-change="handleCurrentChange"
                                    v-model:current-page="currentPage" background layout="prev, pager, next"
                                    :total="totalPage * 10" />
                            </el-col>
                            <el-col v-for="item in resultSearch" :key="item.id" :lg="8" :md="8" :sm="12" :xs="24"
                                class="home__highlight__item">
                                <el-card @click="productDetail(item.id)" :body-style="{ padding: '0px' }">
                                    <img style="width: 100% ; height: 250px"
                                        :src="require(`@/assets/tranh_son_dau/${item.image}`)" class="image" />
                                    <div style="padding: 14px">
                                        <span>{{ item.name }}</span>
                                        <div class="bottom" style="text-align: left;">
                                            <p class="time">{{ item.description }}</p>
                                            <div>
                                                <p>Giá: {{ MainUtils.toCurrency(item.price) }} </p>
                                                <el-button type="success" class="button">
                                                    <el-icon size="20">
                                                        <View></View>
                                                    </el-icon>
                                                </el-button>
                                                <el-button :loading="checkLoading && checkButtonId == item.id"
                                                    @click="addToCart(item.id)" type="success" class="button">
                                                    <el-icon size="20">
                                                        <ShoppingCart></ShoppingCart>
                                                    </el-icon>
                                                </el-button>
                                            </div>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="24" style="padding: 15px;">
                                <el-pagination :hide-on-single-page="true" @current-change="handleCurrentChange"
                                    v-model:current-page="currentPage" background layout="prev, pager, next"
                                    :total="totalPage * 10" />
                            </el-col>
                        </el-row>
                    </el-col>
                </template>
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
import { MainUtils } from '@/utils/MainUtils';

const optionsSelect = [
    {
        value: 1,
        label: 'Mức độ phổ biến',
    },
    {
        value: 2,
        label: 'Mức độ đánh giá',
    },
    {
        value: 3,
        label: 'Giá tiền từ thấp -> cao',
    },
    {
        value: 4,
        label: 'Giá tiền từ cao -> thấp',
    },
]
</script>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FooterMain from '@/components/layouts/footer/FooterMain.vue';
import FooterTop from '@/components/layouts/footer/FooterTop.vue';
import BreadCrumb from '@/components/shared/BreadCrumb.vue';
import pictureService from '@/service/pictureService';
import { Product } from '@/interface/Product';
import { ElMessage } from 'element-plus'
import store from '@/store/LanguageStore'

export default defineComponent({
    name: 'SearchView',
    components: {
        FooterMain,
        FooterTop,
        BreadCrumb
    },
    data() {
        return {
            categories: [
                { title: 'Tranh sơn dầu', link: '/search-tranh-son-dau' },
                { title: 'Tranh hoa', link: '/search-tranh-hoa' },
                { title: 'Tranh phong cảnh', link: '/search-tranh-phong-canh' },
                { title: 'Tranh cảnh vật', link: '/search-tranh-canh-vat' },
                { title: 'Tranh trừu tượng', link: '/search-tranh-truu-tuong' },
                { title: 'Tranh núi rừng', link: '/search-tranh-nui-rung' },
                { title: 'Tranh phố cổ', link: '/search-tranh-pho-co' },
                { title: 'Tranh nghệ thuật', link: '/search-tranh-nghe-thuat' },
                { title: 'Tranh khắc gỗ', link: '/search-tranh-khac-go' },
                { title: 'Tranh sơn mài', link: '/search-tranh-son-mai' },
                { title: 'Tranh chân dung', link: '/search-tranh-chan-dung' },
                { title: 'Tranh phong thủy', link: '/search-tranh-phong-thuy' },
                { title: 'Tranh canvas', link: '/search-tranh-canvas' },
                { title: 'khung tranh', link: '/search-khung-tranh' }
            ],
            listBreadCrumb: [
                { name: 'Trang chủ', path: '/' },
                { name: 'Search', path: '' },
            ],
            dataSearch: {} as any,
            resultSearch: [] as Product[],
            currentPage: ref(1),
            totalPage: 1,
            fromToRecords: {
                from: 0,
                to: 0,
                totalRecord: 0
            },
            valueSelect: ref(1),
            checkLoading: false,
            checkButtonId: -1
        }
    },
    methods: {
        addToCart(id: number) {
            this.checkLoading = true;
            this.checkButtonId = id
            setTimeout(() => {
                store.dispatch('addToCart', id);
                ElMessage({
                    showClose: true,
                    message: 'Đã thêm sản phẩm vào giỏ hàng.',
                    type: 'success',
                })
                this.checkLoading = false
                this.checkButtonId = -1
            }, 500);
        },
        productDetail(id: number) {
            if (this.checkLoading == true) {
                return
            } else {
                this.$router.push('/detail/' + id)
            }
        },
        getFromToRecords(totalRecord: number) {
            this.fromToRecords.from = this.dataSearch.limit * this.dataSearch.page - (this.dataSearch.limit - 1)
            const toRecord = this.dataSearch.limit * this.dataSearch.page
            this.fromToRecords.to = toRecord > totalRecord ? totalRecord : toRecord
            this.fromToRecords.totalRecord = totalRecord
        },
        handleSearchResult() {
            this.dataSearch = this.$route.query

            pictureService.filterAndSearchPicture(this.valueSelect, this.dataSearch).then((res) => {
                const totalRecord = (res.headers as any).get('x-total-count')
                this.totalPage = totalRecord / this.dataSearch.limit
                this.totalPage = Math.ceil(this.totalPage)

                this.getFromToRecords(totalRecord)
                this.resultSearch = res.data
            })
        },
        handleCurrentChange(val: number) {
            this.dataSearch.page = val
            this.currentPage = val
            pictureService.filterAndSearchPicture(this.valueSelect, this.dataSearch).then((res) => {
                const totalRecord = (res.headers as any).get('x-total-count')
                this.totalPage = totalRecord / this.dataSearch.limit
                this.totalPage = Math.ceil(this.totalPage)

                this.getFromToRecords(totalRecord)
                this.resultSearch = res.data
            })
        }
    },
    mounted() {
        this.handleSearchResult()
    },
    updated() {
        this.handleSearchResult()
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

.search__view .category_container {
    display: flex;
    flex-wrap: wrap;
}

.search__view .header__search {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: end;
}
</style>