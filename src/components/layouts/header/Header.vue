<template>
  <HeaderIntruction @darkMode="handleDarkMode"/>
  <div class="header__fixed" id="header_fixed_id">
    <HeaderMain />
    <HeaderCategory />
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import HeaderIntruction from './HeaderIntruction.vue'
import HeaderMain from './HeaderMain.vue'
import HeaderCategory from './HeaderCategory.vue'

document.addEventListener('scroll', function (e) {
  var heightCur = window.pageYOffset;
  var eleFixed = document.getElementById("header_fixed_id")

  if (eleFixed) {
    if (heightCur > 0) {
      eleFixed.classList.add("ele_scroll");
    } else {
      eleFixed.classList.remove("ele_scroll");
    }
  }

})

export default defineComponent({
  name: "HeaderComponent",
  components: {
    HeaderIntruction,
    HeaderMain,
    HeaderCategory
  },
  data() {
    return {

    }
  },
  methods: {
    handleDarkMode(darkMode : any) {
      this.$emit("darkMode", darkMode)
    }
  }
})
</script>
  
<style scoped>
.header__fixed.ele_scroll {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
  animation-name: bounceIn;
  animation-duration: .6s;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>
  