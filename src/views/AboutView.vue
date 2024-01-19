<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Parent/>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Parent from '@/components/Parent.vue';


@Options({
  components: {
    Parent
  }
})

export default class AboutView extends Vue { }
</script>