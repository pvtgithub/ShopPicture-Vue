<template>
    <el-divider class="home__divider__custom">
        <span>{{ textTitle }}</span>
    </el-divider>
    <el-row>
        <el-col :lg="6" :md="8" :sm="12" :xs="24" v-for="item in products" :key="(item as any).id" class="home__highlight__item">
            <el-card :body-style="{ padding: '0px' }">
                <img style="width: 100% ; height: auto" :src="(item as any).image" class="image" />
                <div style="padding: 14px">
                    <span>{{ (item as any).name }}</span>
                    <div class="bottom">
                        <p class="time">{{ (item as any).description }}</p>
                        <p>{{ textPrice }}: {{ (item as any).price }} <el-button type="success" class="button">Mua ngay</el-button></p>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/LanguageStore'
import pictureService from '@/service/pictureService'

export default defineComponent({
    name: 'HomeHighlight',
    data() {
        return {
            products: [],
            languageValue: 1,
            textTitle: "Tranh nổi bật",
            textPrice: "Giá"
        }
    },
    methods: {
        changeLanguage() {
            if (this.languageValue == 1) {
                this.textTitle = "Tranh nổi bật"
                this.textPrice = "Giá"
            } else if (this.languageValue == 2) {
                this.textTitle = "Highlight picture"
                this.textPrice = "Price"
            } else if (this.languageValue == 3) {
                this.textTitle = "優れた絵画"
                this.textPrice = "価格"
            }
        },
        async getAllPicture(language : number) {
            const {data} = await pictureService.getAll(language)
            this.products = data
        }
    },
    mounted() {
        this.languageValue = store.state.language
        this.changeLanguage()
        store.watch(
            state => state.language,
            newValue => {
                this.languageValue = newValue
                this.changeLanguage()
                this.getAllPicture(this.languageValue);
            }
        )
        this.getAllPicture(this.languageValue);
    }
})
</script>
<style lang="css">
.home__divider__custom span {
    font-size: 20px;
    font-weight: 600;
    color: rgb(94, 93, 93);
}

.home__highlight__item {
    padding: 20px;
}

.home__highlight__item:hover {
    cursor: pointer;
    transform: scale(1.03);
    animation-duration: .6s;
}
</style>