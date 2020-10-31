<template>
  <header>
    <img
      src="http://ww1.sinaimg.cn/large/0065Zy9ely1gatw2cpvxwj30sg0sg0t9.jpg"
      alt=""
    />
    clicli 投稿中心
  </header>
  <nav>
    <ul>
      <router-link to="/"><li>投稿</li></router-link>
      <router-link to="/manage"><li>管理</li></router-link>
      <router-link to="/user"><li>账号</li></router-link>
    </ul>
  </nav>
  <main>
    <section>
      <router-view></router-view>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  background: #fff;
  color: var(--theme);
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 10px #e2dcec;
  right: 0;
}
header img {
  width: 40px;
  height: 40px;
  margin: 15px;
  border-radius: 10px;
}
nav {
  width: 250px;
  height: 100%;
  position: fixed;
  border-right: 1px solid var(--second);
  box-sizing: border-box;
  margin-top: 70px;
}
li {
  /* border-right: 2px solid var(--theme); */
  margin: 50px 0;
  padding: 10px 50px;
  text-align: right;
  border-right: 5px solid var(--bg);
}
.router-link-active li {
  border-right: 5px solid var(--theme);
  background: var(--second);
  color: var(--theme);
  box-sizing: border-box;
}
main {
  padding: 100px 50px 20px 300px;
}
section {
  width: 80%;
  margin: 0px auto;
  max-width: 800px;
}
</style>
