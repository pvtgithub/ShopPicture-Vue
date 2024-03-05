<template>
    <el-row class="header__intruction__container">
        <el-col :xs="1" :sm="4"></el-col>
        <el-col :xs="22" :sm="16">
            <nav class="header__intruction__element__ul__menu">
                <template v-if="languageValue == 1">
                    <router-link v-for="item in listLinkVi" :key="item.id" :to="item.link" class="item">{{
                        item.title }}</router-link>
                </template>
                <template v-if="languageValue == 2">
                    <router-link v-for="item in listLinkEn" :key="item.id" :to="item.link" class="item">{{
                        item.title }}</router-link>
                </template>
                <template v-if="languageValue == 3">
                    <router-link v-for="item in listLinkJp" :key="item.id" :to="item.link" class="item">{{
                        item.title }}</router-link>
                </template>
                <a href="tel:0348485360" class="item">
                    <el-icon>
                        <Phone />
                    </el-icon>
                </a>
                <router-link to="gioi-thieu" class="item">
                    <el-icon>
                        <Shop />
                    </el-icon>
                </router-link>
                <router-link to="/map" class="item">
                    <el-icon>
                        <LocationFilled />
                    </el-icon>
                </router-link>
                <el-button @click="changeMode()">
                    <el-icon v-if="darkMode">
                        <Moon />
                    </el-icon>
                    <el-icon v-if="!darkMode">
                        <Sunny />
                    </el-icon>
                </el-button>
                &nbsp;
                <el-select v-model="languageValue" placeholder="Select" style="width: 120px">
                    <el-option v-for="item in languages" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
                &nbsp;
                <BillDetailView/>
            </nav>
        </el-col>
        <el-col :xs="1" :sm="4"></el-col>
    </el-row>
</template>
<script lang="ts">
import store from '@/store/LanguageStore'
import { defineComponent, ref } from 'vue'
import { ElLoading } from 'element-plus'
import BillDetailView from '@/views/BillDetailView.vue'

export default defineComponent({
    name: 'HeaderIntruction',
    components: {
        BillDetailView
    },
    setup() {
        const outerVisible = ref(false);

        const showDialog = () => {
            outerVisible.value = true;
        };

        return {
            outerVisible,
            showDialog
        };
    },
    data() {
        return {
            isNavigating: false,
            listLinkVi: [
                { "id": 1, "title": "Trang chủ", "link": "/" },
                { "id": 2, "title": "Giới thiệu", "link": "/gioi-thieu" },
                { "id": 3, "title": "Liên hệ", "link": "/lien-he" },
                { "id": 4, "title": "Bản đồ đến shop", "link": "/map" },
                { "id": 5, "title": "Tuyển dụng", "link": "/tuyen-dung" },
                { "id": 6, "title": "Đăng tranh", "link": "/dang-tranh" },
                { "id": 7, "title": "Đăng nhập", "link": "/dang-nhap" },
                { "id": 8, "title": "Đăng ký", "link": "/dang-ky" },
            ],
            listLinkEn: [
                { "id": 1, "title": "Home", "link": "/" },
                { "id": 2, "title": "Introduction", "link": "/gioi-thieu" },
                { "id": 3, "title": "Contact", "link": "/lien-he" },
                { "id": 4, "title": "Map to shop", "link": "/map" },
                { "id": 5, "title": "Recruitment", "link": "/tuyen-dung" },
                { "id": 6, "title": "Post picture", "link": "/dang-tranh" },
                { "id": 7, "title": "Login", "link": "/dang-nhap" },
                { "id": 8, "title": "Register", "link": "/dang-ky" },
            ],
            listLinkJp: [
                { "id": 1, "title": "ホームページ", "link": "/" },
                { "id": 2, "title": "導入", "link": "/gioi-thieu" },
                { "id": 3, "title": "接触", "link": "/lien-he" },
                { "id": 4, "title": "地図", "link": "/map" },
                { "id": 5, "title": "募集", "link": "/tuyen-dung" },
                { "id": 6, "title": "写真を投稿する", "link": "/dang-tranh" },
                { "id": 7, "title": "ログイン", "link": "/dang-nhap" },
                { "id": 8, "title": "登録する", "link": "/dang-ky" },
            ],
            darkMode: false,
            languages: [
                { "id": 1, "name": "Tiếng Việt" },
                { "id": 2, "name": "English" },
                { "id": 3, "name": "Japanese" }
            ],
            languageValue: 1
        }
    },
    emits: ["darkMode"],
    methods: {
        navigate(url: string) {
            const loading = ElLoading.service({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)',
            })
            setTimeout(() => {
                loading.close()
                this.$router.push(url)
            }, 2000)
        },
        changeMode() {
            this.darkMode = !this.darkMode
            this.$emit("darkMode", this.darkMode)
        }
    },
    watch: {
        languageValue: function (newData) {
            store.commit('changeLanguage', newData)
            this.languageValue = store.state.language
        }
    },
    mounted() {
        this.languageValue = store.state.language
    }
})
</script>
<style lang="css">
nav {
    padding: 7px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}


.header__intruction__container {
    background-color: var(--color-background-header-intruction);
}

.header__intruction__element__ul__menu .item:not(:last-child)::after {
    content: "|";
    margin: 0px 10px;
}

.header__intruction__element__ul__menu .item {
    font-size: var(--fontsize-small);
    color: var(--color-text);
    font-weight: 100;
    display: inline-block;
}
</style>