<template>
  <div>
    <input
      type="text"
      v-for="(item, key) in user"
      :key="item"
      v-model="user[key]"
    />
    <input type="text" placeholder="密码：留空则不修改" v-model="pwd" />
    <button class="active submit">修改</button>
  </div>
</template>

<script>
import { nextTick, reactive } from "vue";
import { getUser } from "./api";

export default {
  data() {
    return {
      user: {},
      pwd: null,
    };
  },
  mounted() {
    const path = this.$route.path;
    if (path === "/user") {
      const user = window.localStorage.getItem("user");
      const u = JSON.parse(user);
      for (const k in u) {
        if (k === "id") continue;
        this.user[k] = u[k];
      }
    } else {
      getUser(null, 0, this.$route.params.qq).then((res) => {
        const u = res.result;
        for (const k in u) {
          if (k === "id") continue;
          this.user[k] = u[k];
        }
      });
    }
  },
};
</script>

<style scoped>
li {
  display: flex;
  width: auto;
  font-size: 13px;
}
</style>