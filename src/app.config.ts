interface ITabList {
  pagePath: string;
  text: string;
  iconPath?: string;
  selectedIconPath?: string;
}
const tabList: ITabList[] = [
  {
    pagePath: "pages/index/index",
    text: "首页",
    iconPath: "assets/image/talk.png",
    selectedIconPath: "assets/image/talk_select.png",
  },
  {
    pagePath: "pages/frends/frends",
    text: "朋友圈",
    iconPath: "assets/image/frend.png",
    selectedIconPath: "assets/image/frend_select.png",
  },
];
export default defineAppConfig({
  pages: ["pages/index/index", "pages/frends/frends"],
  window: {
    backgroundTextStyle: "light",
    // navigationBarBackgroundColor: "#fff",
    // navigationBarTitleText: "WeChat",
    // navigationBarTextStyle: "black",
    navigationStyle: "custom",
  },
  tabBar: {
    color: "#ccc",
    selectedColor: "#000000",
    backgroundColor: "#fafafaf",
    borderStyle: "black",
    list: tabList,
    position: "bottom",
  },
});
