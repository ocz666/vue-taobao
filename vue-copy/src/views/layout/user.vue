<template>
  <div class="user-wrap">
    <div class="head-wrap">
      <img src="../../static/imgs/head.jpg" alt="默认头像" />
      <span>Hi! 你好</span>
    </div>
    <div class="icon-box-wrap">
      <div class="icon-wrap" style="float:left;margin-left:30px">
        <svg-icon icon="coin" className="user-icon" />
        <span>领淘金币抵钱</span>
        <div style="clear:both"></div>
      </div>
      <div class="icon-wrap" style="float:right;margin-right:30px">
        <svg-icon icon="vip" className="user-icon" />
        <span>会员俱乐部</span>
        <div style="clear:both"></div>
      </div>
      <div style="clear:both"></div>
    </div>
    <div class="button-box-wrap">
      <button>登录</button>
      <button>注册</button>
      <button>开店</button>
    </div>
    <div class="report-wrap">
      <span>网上有害信息举报专区</span>
      <svg-icon icon="right-tri" className="report-icon" />
    </div>
    <div class="menu-wrap">
      <div class="menu-item" @mouseover="changeMenu">
        <span
          v-for="(item, index) in menu"
          :key="index"
          :data-index="index"
          :style="
            index === menuActive
              ? 'border-bottom: 3px solid rgb(255, 80, 0)'
              : ''
          "
          >{{ item.title }}</span
        >
      </div>
      <div class="content-item">
        <span
          v-for="(subitem, subindex) in menu[menuActive].content"
          :key="subindex"
          :data-index="subindex"
          >{{ subitem }}</span
        >
      </div>
    </div>
    <el-row class="guide-wrap">
      <el-col
        v-for="(item, index) in guide"
        :span="6"
        :key="index"
        class="guide-item"
      >
        <svg-icon :icon="item.icon" className="guide-icon" />
        <p>{{ item.title }}</p>
      </el-col>
    </el-row>

    <!-- app弹窗 -->
    <div class="app-wrap">
      <div>
        <span>阿里APP</span>
        <span style="float:right">更多</span>
      </div>
      <div class="app-wrap">
        
      </div>
      <el-popover
        id="QCode"
        placement="top"
        trigger="hover"
        :visible-arrow="false"
        v-for="(item, index) in app" 
        :key="index">
        <div>
          <img src="../../static/imgs/popover/taobao.jpg" />
          <p>扫一扫{{item}}</p>
        </div>
            <svg-icon
              :icon="item"
              className="app-icon"
              :span="4"
              :data-index="index"
              slot="reference"
            />
      </el-popover>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "公告",
          content: [
            "95公益周阿里、腾讯等六家公司同台联合做公益",
            "淘宝造物节之城市秘密",
            "聚划算88红包省钱卡",
          ],
        },
        {
          title: "规则",
          content: [
            "新增《淘宝网汽配行业",
            "《淘宝网区域零售服务",
            "《淘宝网票务行业管理",
            "《淘宝网数字娱乐市场",
          ],
        },
        {
          title: "论坛",
          content: [
            "淘宝618大促报名",
            "金牌卖家志愿者招募",
            "618大促报名激励",
            "运营神器年中大促",
          ],
        },
        {
          title: "安全",
          content: [
            "魔豆妈妈公益项目",
            "让母爱永不打烊！",
            "卖家注意：风险通报！",
            "售假获刑又起诉！",
          ],
        },
        {
          title: "公益",
          content: [
            "淘宝公益平台正式更名",
            "益起来商家招募即将截",
            "卖家如何设置公益宝贝",
            "公益机构开店全攻略",
          ],
        },
      ],
      guide: [
        { title: "充话费", icon: "phone" },
        { title: "旅行", icon: "travel" },
        { title: "车险", icon: "car" },
        { title: "游戏", icon: "game" },
        { title: "彩票", icon: "lottery" },
        { title: "电影", icon: "movie" },
        { title: "酒店", icon: "hotel" },
        { title: "理财", icon: "financial" },
      ],
      app: ["淘宝", "天猫", "支付宝", "钉钉", "店铺"],
      menuActive: 0,
      guideActive: 0,
      popwindowVisible: false,
    };
  },
  methods: {
    changeMenu(e) {
      if (e.target.nodeName.toLowerCase() === "span") {
        const index = parseInt(e.target.dataset.index);
        this.menuActive = index;
      }
    },
    showPopover(e) {
      this.popwindowVisible = true;
      console.log(e.target.dataset.index);
    },
  },
};
</script>
<style lang="scss" scoped>
.user-wrap {
  background-color: rgb(244, 244, 244);
  margin-top: 45px;
  left: 1145px;
  position: absolute;
  height: 637px;
  width: 255px;
  .head-wrap {
    margin-top: 10px;
    text-align: center;
    img {
      display: block;
      width: 70px;
      height: 70px;
      border-radius: 35px;
      margin: auto;
    }
  }
  .icon-box-wrap {
    .icon-wrap {
      border-radius: 15px;
      padding-right: 10px;
      background-color: rgb(255, 228, 219);
    }
    font-size: 10px;
    .user-icon {
      display: block;
      float: left;
      width: 20px;
      height: 20px;
    }
    span {
      margin-top: 5px;
      display: block;
      float: left;
      color: rgb(255, 80, 0);
    }
  }
  .icon-wrap:hover {
    cursor: pointer;
  }
  .button-box-wrap {
    margin-top: 10px;
    button {
      outline: none;
      border: 0;
      width: 70px;
      margin: 0 5px;
      color: white;
      border-radius: 5px;
      background-color: rgb(255, 87, 1);
    }
    button:hover {
      cursor: pointer;
    }
  }
  .report-wrap {
    margin-top: 10px;
    background-color: rgb(255, 228, 221);
    .report-icon {
      width: 15px;
      height: 15px;
      float: right;
      margin-top: 5px;
      margin-right: 60px;
      fill: rgb(255, 80, 0);
    }
    span {
      color: rgb(255, 80, 0);
      line-height: 25px;
      font-size: 10px;
      padding-left: 50px;
      padding-right: 10px;
    }
  }
  .report-wrap:hover {
    cursor: pointer;
  }
  .menu-wrap {
    text-align: center;
    margin-top: 10px;
    .menu-item {
      span {
        font-size: 10px;
        margin: 5px;
        padding: 3px 5px;
      }
      span:hover {
        cursor: pointer;
        color: rgb(255, 80, 0);
      }
    }
    .content-item {
      margin-top: 10px;
      span {
        font-size: 10px;
        margin: 5px;
        white-space: nowrap;
      }
    }
  }
  .guide-wrap {
    margin: auto;
    text-align: center;
    .guide-item {
      border: 1px solid gray;
      .guide-icon {
        margin-top: 10px;
        width: 30px;
        height: 30px;
      }
    }
    .guide-item:hover {
      color: red;
      cursor: pointer;
    }
  }
  .app-wrap {
    margin: 20px;
    .app-icon {
      width: 40px;
      height: 40px;
    }
    img{
      width: 80px;
      height: 80px;
    }
  }
}

#QCode{
  height: 300px !important;
  min-width: 0 !important;
}
</style>
