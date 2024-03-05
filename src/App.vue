<template>
  <div :class="{ dark__mode: darkMode }">
    <header>
      <HeaderComponent @darkMode="handleDarkMode" />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <FooterComponent />
    </footer>
    <a href="tel:0348485360" class="call">
    </a>
    <div class="zalo-chat-widget" data-oaid="1183967342950239704" data-welcome-message="Rất vui khi được hỗ trợ bạn!"
      data-autopopup="0" data-width="350" data-height="420">
    </div>

  </div>
</template>

<script lang="ts">
import HeaderComponent from './components/layouts/header/Header.vue';
import FooterComponent from './components/layouts/footer/Footer.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ArtApp",
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      darkMode: false
    }
  },
  emits: ["darkMode"],
  methods: {
    handleDarkMode(darkMode: any) {
      this.darkMode = darkMode;

    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-background-darkmode);
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

:root {
  --color-main: #42b983;
  --color-background-header-intruction: #D36B97;
  --color-background-header-main: #ffffff;
  --color-background-header-category: #846a88;
  --color-background-home-main: #f6f6f6;
  --color-text: white;
  --fontsize-small: 13px;
  --fontsize-normal: 16px;
  --color-background-darkmode: #191e22;
}

a.router-link-exact-active {
  font-weight: 1000 !important;
}

.dark__mode {
  background-color: #191e22;
  animation-name: gradually;
  animation-duration: 0.3s;
}

.dark__mode footer {
  color: var(--color-text);
}

.call {
  position: fixed;
  bottom: 120px;
  right: 50px;
  height: 60px;
  width: 60px;
  background-image: url(../public/images/call.png);
  background-position: center;
  /* Center the image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  background-size: cover;
}

@keyframes gradually {
  0% {
    opacity: 0;
  }

  15% {
    opacity: 0.15;
  }

  30% {
    opacity: 0.3;
  }

  45% {
    opacity: 0.45;
  }

  60% {
    opacity: 0.6;
  }

  75% {
    opacity: 0.75;
  }

  90% {
    opacity: 0.9;
  }

  100% {
    opacity: 1;
  }
}
</style>
