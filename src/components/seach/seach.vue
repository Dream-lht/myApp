<template>
  <view :class="seachStyle.seach">
    <input type="text" placeholder="" :focus="true" />
    <text>取消</text>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import seachStyle from "./seach.module.scss"

export default defineComponent({
  setup() {
    return {
      seachStyle
    }

  },
})
</script>
