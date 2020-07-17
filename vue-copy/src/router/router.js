import Vue from "vue";
import index from "./Index";
import VueRouter from "vue-router";
import LocationSelect from "../views/headMenuItem/LocationSelect";
import Register from "../views/headMenuItem/Register";
import VisitByPhone from "../views/headMenuItem/VisitByPhone";
import MyTaobao from "../views/headMenuItem/MyTaobao";
import ShoppingCar from "../views/headMenuItem/ShoppingCar";
import Favorite from "../views/headMenuItem/Favorite";
import Category from "../views/headMenuItem/Category";
import Seller from "../views/headMenuItem/Seller";
import ContactService from "../views/headMenuItem/ContactService";
import Navigation from "../views/headMenuItem/Navigation";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    redirect:"/index",
  },
  {
    path:"/index",
    name:"首页",
    component:index,
  },
  {
    path: "/locationSelect",
    name: "中国大陆",
    component: LocationSelect,
    children:[
      {
        path: "/locationSelect",
        name: "全球",
        component: LocationSelect,
    },
      {
        path: "/locationSelect",
        name: "中国大陆",
        component: LocationSelect,
      },
      {
        path: "/locationSelect",
        name: "中国香港",
        component: LocationSelect,
      },
      {
        path: "/locationSelect",
        name: "中国澳门",
        component: LocationSelect,
      },
      {
        path: "/locationSelect",
        name: "中国台湾",
        component: LocationSelect,
      },
    ]
  },
  {
    path: "/login",
    name: "亲，请登录",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/headMenuItem/Login")
  },
  {
    path: "/register",
    name: "免费注册",
    component: Register
  },
  {
    path: "/visitByPhone",
    name: "手机逛淘宝",
    component: VisitByPhone
  },
  {
    path: "/myTaobao",
    name: "我的淘宝",
    component: MyTaobao,
    children:[
      {
        path: "/myTaobao",
        name: "已买到的宝贝",
        component: MyTaobao,
      },
      {
        path: "/myTaobao",
        name: "我的足迹",
        component: MyTaobao,
      },
    ]
  },
  {
    path: "/shoppingCar",
    name: "购物车",
    component: ShoppingCar,
    icon:"shoppingCar",
  },
  {
    path: "/favorite",
    name: "收藏夹",
    component: Favorite,
    icon:"favorite",
    children:[
      {
        path: "/favorite",
        name: "收藏的宝贝",
        component: Favorite,
      },
      {
        path: "/favorite",
        name: "收藏的店铺",
        component: Favorite,
      },
    ]
  },
  {
    path: "/category",
    name: "商品分类",
    component: Category
  },
  {
    path: "/seller",
    name: "千牛卖家中心",
    component: Seller,
    children:[
      {
        path: "/seller",
        name: "免费开店",
        component: Seller,
      },
      {
        path: "/seller",
        name: "已卖出的宝贝",
        component: Seller,
      },
      {
        path: "/seller",
        name: "出售中的宝贝",
        component: Seller,
      },
      {
        path: "/seller",
        name: "卖家服务市场",
        component: Seller,
      },
      {
        path: "/seller",
        name: "卖家培训中心",
        component: Seller,
      },
    ]
  },
  {
    path: "/contactService",
    name: "联系客服",
    component: ContactService,
    children:[
      {
        path: "/contactService",
        name: "消费者客服",
        component: ContactService,
      },
      {
        path: "/contactService",
        name: "卖家客服",
        component: ContactService,
      },
    ]
  },
  {
    path: "/navigation",
    name: "网站导航",
    component: Navigation,
    icon:"menu",
  }
];

const router = new VueRouter({
  routes
});

export default router;
