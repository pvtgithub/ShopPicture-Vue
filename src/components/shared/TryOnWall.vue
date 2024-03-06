<template>
    <el-button plain @click="dialogVisitable = true" class="try__onwall">
        Thử trên tường
    </el-button>

    <el-dialog v-model="dialogVisitable" title="Warning" width="800" >
        <span>Open the dialog from the center from the screen</span>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisitable = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisitable = false">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisitable = ref(false)
</script>