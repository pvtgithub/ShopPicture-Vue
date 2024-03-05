<template>
    <div>
        <el-row class="header__main__container">
            <el-col :lg="4" :md="4"></el-col>
            <el-col :lg="3" :xs="24" :md="5">
                <img class="header__main__logo" src="../../../../public/images/logo.png" />
            </el-col>
            <el-col :lg="9" :xs="24" :md="11" class="header__main__center">
                <el-select v-model="selectValue" :placeholder="placeholderSelect" style="width: 115px">
                    <el-option label="--- Tất cả ---" value="0" />
                    <el-option label="Tranh sơn dầu" value="1" />
                    <el-option label="Tranh phong cảnh" value="2" />
                    <el-option label="Tranh nghệ thuật" value="3" />
                    <el-option label="Tranh trừu tượng" value="4" />
                    <el-option label="Tranh sơn mài" value="5" />
                    <el-option label="Khung tranh" value="6" />
                </el-select>
                <el-autocomplete :placeholder="placeholderInput" v-model="searchValue" @keyup.enter="searchDetail"
                    :fetch-suggestions="changeSearchInput" @select="handleSelect" style="max-width: 450px; width: 90%;">
                    <template #default="{ item }">
                        <div class="item__search">
                            <img width="50" height="50" :src="require(`@/assets/tranh_son_dau/${item.image}`)"
                                :alt="item.name">
                            <div>
                                <span>{{ item.name }}</span>
                                <span>{{ MainUtils.toCurrency(item.price) }}</span>
                            </div>
                        </div>
                        <el-divider style="margin: 3px 0;"></el-divider>
                    </template>
                </el-autocomplete>

                <el-button @click="searchDetail">
                    <el-icon>
                        <Search />
                    </el-icon>
                </el-button>
            </el-col>
            <el-col :lg="4" :xs="24" :md="24" class="header__main__center">
                <el-badge :value="12" class="item header__main__hobby">
                    <el-button>{{ textHobby }}
                        <el-icon size="20" style="margin-left: 5px;">
                            <View />
                        </el-icon>
                    </el-button>
                </el-badge>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <el-badge :value="quantityItemCart" class="item header__main__cart">
                    <el-button @click="displayCart()">{{ textCart }}
                        <el-icon size="20">
                            <ShoppingCart />
                        </el-icon>
                    </el-button>
                    <Cart v-if="cartDisplay" class="cart" @closeCart="displayCart()" />
                </el-badge>
            </el-col>
            <el-col :lg="4" :md="4"></el-col>

        </el-row>
    </div>
</template>

<script lang="ts" setup>
interface ItemResult {
    image: string,
    title: string,
    price: number,
    link: string
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { Search } from '@element-plus/icons-vue'
import store from '@/store/LanguageStore'
import Cart from '@/components/header/Cart.vue'
import pictureService from '@/service/pictureService'
import { MainUtils } from '@/utils/MainUtils'
import { Product } from '@/interface/Product'
import router from '@/router/index'

export default defineComponent({
    name: "HeaderMain",
    components: {
        Cart
    },
    data() {
        return {
            cartDisplay: false,
            input_search: "",
            placeholderSelect: "",
            placeholderInput: "",
            textHobby: "",
            textCart: "",
            languageValue: 1,
            searchValue: "",
            selectValue: "0",
            time: 0,
            timeOut: 1000,
            resultSearch: [] as Product[]
        }
    },
    methods: {
        searchDetail() {
            const dataSearch = {
                name: this.searchValue,
                category: this.selectValue,
                page: 1,
                limit: 6
            }
            router.push(`/search?name=${dataSearch.name}&category=${dataSearch.category}&page=${dataSearch.page}&limit=${dataSearch.limit}`)
        },
        handleSelect(product: Product) {
            router.push(`/detail/${product.id}`)
        },
        changeSearchInput(queryString: string, cb) {
            if (queryString.length == 0) {
                this.resultSearch = []
                cb(this.resultSearch)
            } else {
                const dataSearch = {
                    name: queryString,
                    category: this.selectValue,
                    page: 1,
                    limit: 20
                }

                clearTimeout(this.time)
                this.time = setTimeout(() => {
                    pictureService.filterAndSearchPicture(2, dataSearch).then((res) => {
                        this.resultSearch = res.data
                        cb(this.resultSearch)
                    })
                }, this.timeOut);
            }
        },
        displayCart() {
            this.cartDisplay = !this.cartDisplay
        },
        changeLanguage() {
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
    computed: {
        quantityItemCart() {
            let quantity = 0
            store.state.cart.products.forEach(element => {
                quantity += element.quantity
            });
            return quantity
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

        store.watch(
            state => state.cart,
            () => {
                this.cartDisplay = true
            },
            { deep: true }
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

.header__main__cart {
    position: relative;
}

.cart {
    position: absolute;
    width: 350px;
    z-index: 100;
}

.header__main__hobby .el-icon {
    margin-left: 5px;
}

.item__search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.item__search div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}

.el-col.el-col-24.el-col-xs-24.el-col-md-24.el-col-lg-4.header__main__center {
    padding: 10px;
}
</style>