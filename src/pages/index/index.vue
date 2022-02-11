<template>
  <view class="index">
    <costom>
      <template v-slot:left>
        <view :class="indexStyle.avatar"></view>
      </template>
      <template v-slot:center>
        <image src="../../assets/image/logo.png" :class="indexStyle.image"></image>
      </template>
    </costom>
    <seach></seach>
    <view :class="indexStyle.list">
      <index-list :list="info"></index-list>
    </view>

  </view>
</template>

<script lang="ts">
import {defineComponent, reactive, ref } from "vue"
import indexStyle from "./index.module.scss"
import indexList from "./cpns/indexList/indexList.vue"
import infoList from "./test"
import InfoList from "./test"
import Seach from "@/components/seach/seach.vue"
export default defineComponent({
  name: 'Index',
  components: {
    indexList,
    Seach
  },
  setup(){
    const isBack = ref<boolean>(true);
    const info = reactive<typeof InfoList>(infoList)
    return{
      indexStyle,
      isBack,
      info
    }
  }
})
</script>

<style>
</style>
