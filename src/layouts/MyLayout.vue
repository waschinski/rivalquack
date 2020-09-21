<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="fas fa-bars"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-none q-mb-md">
        <div class="header">{{ $t("title") }}</div>
      </div>
      <q-img src="quedlinburg.jpg" class="header-image absolute-top" />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      bordered
      content-class="bg-grey-3"
      :width="200"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="fas fa-user" />
            </q-item-section>
            <q-item-section>{{ $t("play") }}</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/rules" exact>
            <q-item-section avatar>
              <q-icon name="fas fa-book" />
            </q-item-section>
            <q-item-section>{{ $t("solorules") }}</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/info" exact>
            <q-item-section avatar>
              <q-icon name="fas  fa-info-circle" />
            </q-item-section>
            <q-item-section>{{ $t("info") }}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      leftDrawerOpen: false,
    }
  },
}
</script>
