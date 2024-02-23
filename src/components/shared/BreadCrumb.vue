<template>
    <el-breadcrumb :separator-icon="ArrowRight" style="padding: 10px; font-size: 16px;">
        <el-breadcrumb-item v-for="(item, index) in props.listBreadCrumb" :key="index" :to="{ path: item.path }">{{
            item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
  
<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { defineProps } from 'vue'
interface BreadCrumbItem {
    name: string
    path: string
}

const props = defineProps<{
    listBreadCrumb: BreadCrumbItem[];
}>();
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BreadCrumb'
})
</script>