<template >
    <div>
        <el-row class="header__main__container">
            <el-col :lg="4" :md="4"></el-col>
            <el-col :lg="3" :xs="24" :md="5">
                <img class="header__main__logo" src="../../../../public/images/logo.png" />
            </el-col>
            <el-col :lg="9" :xs="24" :md="11"  class="header__main__center">
                <el-input v-model="searchValue" :placeholder="placeholderInput" class="input-with-select">
                    <template #prepend>
                        <el-select v-model="selectValue" :placeholder="placeholderSelect" style="width: 115px">
                            <el-option label="Tranh sơn dầu" value="1" />
                            <el-option label="Tranh phong cảnh" value="2" />
                            <el-option label="Tranh nghệ thuật" value="3" />
                        </el-select>
                    </template>
                    <template #append>
                        <el-button>
                            <el-icon>
                                <Search />
                            </el-icon>
                        </el-button>
                    </template>
                </el-input>
            </el-col>
            <el-col :lg="4" :xs="24" :md="24" class="header__main__center">
                <router-link to="/b">
                    <lg>{{ textHobby }}
                        <el-icon>
                            <Grape />
                        </el-icon>
                    </lg>
                </router-link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <router-link to="/a">
                    <lg>{{ textCart }}
                        <el-icon>
                            <ShoppingCartFull />
                        </el-icon>
                    </lg>
                </router-link>
            </el-col>
            <el-col :lg="4" :md="4"></el-col>

        </el-row>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Search } from '@element-plus/icons-vue'
import store from '@/store/LanguageStore'
export default defineComponent({
    name: "HeaderMain",
    data() {
        return {
            input_search: "",
            placeholderSelect: "",
            placeholderInput : "",
            textHobby : "",
            textCart : "",
            languageValue : 1,
            searchValue : "",
            selectValue : "",
        }
    },
    methods: {
        changeLanguage(){
            switch (this.languageValue) {
                    case 1:
                        this.placeholderSelect = "Thể loại"
                        this.placeholderInput = "Nhập từ khóa để tìm kiếm..."
                        this.textHobby = "Ưa thích"
                        this.textCart = "Giỏ hàng"
                        break;
                    case 2:
                        this.placeholderSelect = "Category"
                        this.placeholderInput = "Please input syntax for search..."
                        this.textHobby = "Hobby"
                        this.textCart = "Cart"
                        break;
                    case 3:
                        this.placeholderSelect = "カテゴリー"
                        this.placeholderInput = "キーワードを入力して検索..."
                        this.textHobby = "興味"
                        this.textCart = "カート"
                        break;
                    default:
                        break;
                }
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
            }
        )
    }
})
</script>
<style lang="css">
.header__main__container {
    background-color: var(--color-background-header-main);
}

.header__main__logo {
    width: 150px;
    height: 70px;
    object-fit: contain;
}

.header__main__center {
    display: flex !important;
    justify-content: center;
    align-items: center;
    font-size: var(--fontsize-normal);
    color: #585656;
    font-weight: 600;
}

.header__main__dropdown {
    margin-right: 20px;
}

.input-with-select .el-input-group__prepend {
    background-color: var(--el-fill-color-blank);
}
</style>