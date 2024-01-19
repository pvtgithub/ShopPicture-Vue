<template >
    <template v-if="languageValue == 1">
        <el-row class="header__category__container">
        <el-col :span="4"></el-col>
        <el-col class="header__category__item" :span="16">
            <el-dropdown class="category_item">
                <span class="el-dropdown-link">
                    {{  listMenuVi.listDropdown[0].name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-dropdown class="category_item">
                <span class="el-dropdown-link">
                    {{  listMenuVi.listDropdown[1].name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <router-link class="category_item" :to="listMenuVi.listLink[0].link">{{  listMenuVi.listLink[0].name }}</router-link>
            <router-link class="category_item" :to="listMenuVi.listLink[1].link">{{ listMenuVi.listLink[1].name }}</router-link>
            <el-dropdown class="category_item">
                <span class="el-dropdown-link">
                    {{  listMenuVi.listDropdown[2].name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <router-link class="category_item" :to="listMenuVi.listLink[3].link">{{ listMenuVi.listLink[3].name }}</router-link>
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
    </template>
    <template v-if="languageValue == 2">
        <el-row class="header__category__container">
        <el-col :span="4"></el-col>
        <el-col class="header__category__item" :span="16">
            <el-dropdown class="category_item">
                <span class="el-dropdown-link">
                    {{  listMenuEn.listDropdown[0].name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-dropdown class="category_item">
                <span class="el-dropdown-link">
                    {{  listMenuEn.listDropdown[1].name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <router-link class="category_item" :to="listMenuEn.listLink[0].link">{{  listMenuEn.listLink[0].name }}</router-link>
            <router-link class="category_item" :to="listMenuEn.listLink[1].link">{{ listMenuEn.listLink[1].name }}</router-link>
            <el-dropdown class="category_item">
                <span class="el-dropdown-link">
                    {{  listMenuEn.listDropdown[2].name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <router-link class="category_item" :to="listMenuEn.listLink[3].link">{{ listMenuEn.listLink[3].name }}</router-link>
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
    </template>
    <template v-if="languageValue == 3">
        <el-row class="header__category__container">
        <el-col :span="4"></el-col>
        <el-col class="header__category__item" :span="16">
            <el-dropdown class="category_item">
                <span class="el-dropdown-link">
                    {{  listMenuJp.listDropdown[0].name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-dropdown class="category_item">
                <span class="el-dropdown-link">
                    {{  listMenuJp.listDropdown[1].name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <router-link class="category_item" :to="listMenuJp.listLink[0].link">{{  listMenuJp.listLink[0].name }}</router-link>
            <router-link class="category_item" :to="listMenuJp.listLink[1].link">{{ listMenuJp.listLink[1].name }}</router-link>
            <el-dropdown class="category_item">
                <span class="el-dropdown-link">
                    {{  listMenuJp.listDropdown[2].name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <router-link class="category_item" :to="listMenuJp.listLink[3].link">{{ listMenuJp.listLink[3].name }}</router-link>
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
    </template>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/LanguageStore'

export default defineComponent({
    name: "HeaderCategory",
    data() {
        return{
            languageValue: 1,
            listMenuVi : {
                listDropdown : [
                    {"id" : 1, "name" : "Tranh sơn dầu"},
                    {"id" : 2, "name" : "Tranh phong cảnh"},
                    {"id" : 3, "name" : "Tranh sơn mài"}
                ],
                listLink: [
                    {"id" : 1, "name" : "Tranh nghệ thuật", "link" :"/tranh-nghe-thuat"},   
                    {"id" : 2, "name" : "Tranh trừu tượng", "link" :"/tranh-truu-tuong"},   
                    {"id" : 3, "name" : "Tranh dán tường", "link" :"/tranh-dan-tuong"},   
                    {"id" : 4, "name" : "Khung tranh", "link" :"/khung-tranh"},   
                ]
            },
            listMenuEn : {
                listDropdown : [
                    {"id" : 1, "name" : "Oil paint"},
                    {"id" : 2, "name" : "Landscape picture"},
                    {"id" : 3, "name" : "Lacquer painting"}
                ],
                listLink: [
                    {"id" : 1, "name" : "Art picture", "link" :"/tranh-nghe-thuat"},   
                    {"id" : 2, "name" : "Abstract picture", "link" :"/tranh-truu-tuong"},   
                    {"id" : 3, "name" : "Wall paintings", "link" :"/tranh-dan-tuong"},   
                    {"id" : 4, "name" : "Picture frames", "link" :"/khung-tranh"},   
                ]
            },
            listMenuJp : {
                listDropdown : [
                    {"id" : 1, "name" : "油絵の具"},
                    {"id" : 2, "name" : "風景写真"},
                    {"id" : 3, "name" : "漆塗装"}
                ],
                listLink: [
                    {"id" : 1, "name" : "アートピクチャー", "link" :"/tranh-nghe-thuat"},   
                    {"id" : 2, "name" : "抽象的な", "link" :"/tranh-truu-tuong"},   
                    {"id" : 3, "name" : "壁画", "link" :"/tranh-dan-tuong"},   
                    {"id" : 4, "name" : "写真フレーム", "link" :"/khung-tranh"},   
                ]
            }
        }
    },
    mounted() {
        this.languageValue = store.state.language
        store.watch(
            state => state.language,
            newValue => {
                this.languageValue = newValue
            }
        )
    }
})
</script>
<style lang="css">
.header__category__container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background-header-category);
    padding: 10px 0;
}

.header__category__item {
    font-size: var(--fontsize-small);
    color: var(--color-text);
    text-transform: uppercase;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center
}

.header__category__item .category_item {
    margin-left: 10px;
    margin-top: 10px;
    width: 180px;
    color: var(--color-text);
    display: flex;
    justify-content: center;
}
.header__category__item .category_item:hover{
    cursor: pointer;
    font-weight: 600;
}
.header__category__item .category_item .el-dropdown-link:focus-visible{
    outline: none !important;
}
</style>