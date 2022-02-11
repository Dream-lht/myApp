import { createApp } from "vue";
import store from "./store";
import "./app.scss";
import costom from "@/components/costom/costom.vue";
import seach from "@/components/seach/seach.vue";

const App = createApp({
  onShow(options) {
    console.log(options);
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(store);
App.component("costom", costom);
App.component("seach", seach);
export default App;
