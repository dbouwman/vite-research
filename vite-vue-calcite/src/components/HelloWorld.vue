<script setup lang="ts">
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-navigation';
import '@esri/calcite-components/dist/components/calcite-navigation-logo';
import '@esri/calcite-components/dist/components/calcite-navigation-user';
import '@esri/calcite-components/dist/components/calcite-menu';
import '@esri/calcite-components/dist/components/calcite-menu-item';
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style src="@esri/calcite-components/dist/calcite/calcite.css"></style>

<template>
  
  <calcite-shell>
      <calcite-navigation slot="header">
          <calcite-navigation-logo slot="logo" heading="Snow Plow Map" description="City of AcmeCo">
          </calcite-navigation-logo>
          <calcite-menu slot="content-end">
              <calcite-menu-item text="Drivers" icon-start="license" text-enabled></calcite-menu-item>
              <calcite-menu-item active text="Routes" icon-start="road-sign" text-enabled></calcite-menu-item>
              <calcite-menu-item text="Forecast" icon-start="snow" text-enabled></calcite-menu-item>
          </calcite-menu>
          <calcite-navigation slot="navigation-secondary">
              <calcite-menu slot="content-start">
                  <calcite-menu-item breadcrumb text="All Routes" icon="book" text-enabled></calcite-menu-item>
                  <calcite-menu-item active text="South Hills" icon="apps" text-enabled></calcite-menu-item>
              </calcite-menu>
          </calcite-navigation>
          <calcite-navigation-user slot="user" full-name="Wendell Berry" username="w_berry"></calcite-navigation-user>
      </calcite-navigation>
  </calcite-shell>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
