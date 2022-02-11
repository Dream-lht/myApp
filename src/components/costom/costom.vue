<template>
  <view :class="costomStyle.costom">
    <view v-if="isBack" :class="costomStyle.back">
      <image src="../../assets/image/back.svg"></image>
    </view>
    <view v-else :class="costomStyle.back">
      <slot name="left">left</slot>
    </view>
    <view v-if="title" :class="costomStyle.center">
      {{title}}
    </view>
    <view v-else :class="costomStyle.center">
      <slot name="center">center</slot>
    </view>

  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import costomStyle from "./costomStyle.module.scss"

export default defineComponent({
  props:{
    title:{
      type:String,
      default:""
    },
    isBack:{
      type:Boolean,
      default:false
    },
  },
  setup() {
    return{
      costomStyle
    }
  },
})
</script>
