<template>
  <view :class="indexListStyle.list" v-for="user in list" :key="user.id">
    <view :class="indexListStyle.avatar">
      <image :src="user.avatar"></image>
    </view>
    <view :class="indexListStyle.main">
      <view :class="indexListStyle.info">
        <view :class="indexListStyle.title">
          {{user.title}}
        </view>
        <view :class="indexListStyle.time">
         {{user.time}}
        </view>
      </view>
      <view :class="indexListStyle.sign">
        {{user.sign}}
      </view>
    </view>

  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import indexListStyle from "./indexList.module.scss"

export default defineComponent({
  props:{
    list:{
      type:Array,
      default:() => {
        return []
      }
    }
  },
  setup() {
    return{
      indexListStyle,
    }

  },
})
</script>
