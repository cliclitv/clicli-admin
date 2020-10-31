<template>
  <ul>
    <li>
      <input type="text" placeholder="输入 gv 号" v-model="gv" />
      <button @click="pushGv">管理稿件</button>
    </li>
    <li>
      <input type="text" placeholder="输入 qq" v-model="uid" />
      <button @click="pushUid">管理账号</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      gv: null,
      uid: null,
    };
  },
  methods: {
    pushGv(e) {
      this.$router.push(`/${this.gv}`);
    },
    pushUid(e) {
      this.$router.push(`/user/${this.uid}`);
    },
  },
};
</script>

<style scoped>
button {
  display: inline-block;
}
input {
  display: inline-block;
  width: 50%;
  margin-right: 20px;
}
</style>