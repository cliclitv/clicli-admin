<template>
  <div>
    <input type="text" placeholder="请输入标题" v-model="title" />
    <textarea class="md" placeholder="请输入简介" v-model="content" />
    <ul>
      <li v-for="(item, index) in p" :key="item">
        <input
          type="text"
          v-for="(j, k) in item"
          :key="j"
          :value="j"
          class="input-p"
          @blur="changeP($event, index, k)"
        />
      </li>
    </ul>
    <button @click="addP">+</button>
    <select v-model="status">
      <option>待审核</option>
      <option>已发布</option>
      <option>待删除</option>
      <option>已下架</option>
    </select>
    <select v-model="sort">
      <option>原创</option>
      <option>番剧</option>
      <option>剧场版</option>
    </select>
  </div>
  <ul class="tags">
    <li
      v-for="item in tags"
      :key="item"
      :class="{ active: tag.indexOf(item) > -1, tag: true }"
      @click="selectTag(item)"
    >
      {{ item }}
    </li>
  </ul>
  <button class="active submit" @click="upload" v-if="!id">投稿</button>
  <button class="active submit" @click="upload" v-if="id">修改</button>
  <Poptop :msg="msg" v-if="msg" @cleanMsg="cleanMsg" />
</template>

<script>
import TinyMDE from "tinymde";
import { nextTick, reactive, ref } from "vue";
import { add, getPost, update } from "./api";
import Poptop from "./Poptop.vue";
import Cookies from "js-cookie";

export default {
  setup(props, context) {
    nextTick(() => {
      const md = new TinyMDE(".md");
    });
    const p = reactive([]);
    const tags = [
      "推荐",
      "转载",
      "漫画改",
      "小说改",
      "耽美",
      "乙女",
      "百合",
      "后宫",
      "热血",
      "战斗",
      "运动",
      "奇幻",
      "神魔",
      "搞笑",
      "冒险",
      "校园",
      "恐怖",
      "穿越",
      "推理",
      "科幻",
      "日常",
      "古风",
      "恋爱",
      "r15",
      "泡面番",
      "治愈",
      "鬼畜",
      "AMV/MAD",
      "音乐·PV",
      "游戏·GMV",
      "VOCALOID",
      "影视",
      "特摄",
      "真人剧",
      "文章",
      "其它",
    ];
    return {
      p,
      tags,
      msg: ref(null),
    };
  },
  data() {
    return {
      sort: "原创",
      status: "待审核",
      title: null,
      content: "",
      tag: " 其它",
      time: "",
      videos: null,
      uid: Cookies.get("uid"),
      id: null,
    };
  },
  mounted() {
    const path = this.$route.path;
    if (path === "/") {
    } else {
      getPost(this.$route.params.gv).then((data) => {
        for (const k in data.result) {
          if (k === "videos") {
            this.p = data.result[k].split("\n").map((i) => i.split("|"));
          }
          this[k] = data.result[k];
        }
      });
    }
  },
  methods: {
    addP() {
      this.p.push(["", "", ""]);
    },
    changeP(e, i, k) {
      const target = e.target;
      this.p[i][k] = target.value;
      this.videos = this.p.map((i) => i.join("|")).join("\n");
    },
    cleanMsg() {
      this.msg = null;
    },
    selectTag(tag) {
      if (this.tag.indexOf(tag) > -1) {
        this.tag = this.tag.replace(` ${tag}`, "");
      } else {
        this.tag += ` ${tag}`;
      }
    },
    upload() {
      if (this.title && this.content && this.videos) {
        if (this.id) {
          update(this).then((res) => {
            this.msg = "上传成功";
          });
        } else {
          add(this).then((res) => {
            this.msg = "上传成功";
          });
        }
      } else {
        this.msg = "全部都得填";
      }
    },
  },
  components: {
    Poptop,
  },
};
</script>

<style scoped>
.md {
  height: 300px;
}
li {
  display: flex;
  width: auto;
  font-size: 13px;
}

.input-p:nth-child(1) {
  flex: 1;
  border-radius: 5px 0 0 5px;
}

.input-p:nth-child(2) {
  flex: 2;
  border-radius: 0;
}

.input-p:nth-child(3) {
  border-radius: 0 5px 5px 0;
  flex: 4;
}
.tag {
  background: var(--second);
  color: var(--theme);
  padding: 4px 8px;
  border-radius: 40px;
  display: inline-block;
  cursor: pointer;
  margin: 5px;
}
.tags {
  padding: 20px;
}
.active {
  background: var(--theme);
  color: #fff;
}
select,
option {
  padding: 10px;
  border: 1px solid var(--second);
  outline: none;
  margin: 10px;
  border-radius: 5px;
}
select:hover {
  border: 1px solid var(--theme);
}

.submit {
  margin: 50px auto;
}
</style>