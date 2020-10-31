<template>
  <div className="login">
    <h1>登录</h1>
    <ul>
      <li>
        <input type="text" placeholder="用户名" v-model="name" />
      </li>
      <li>
        <input type="password" placeholder="密码" v-model="pwd" />
      </li>
      <li>
        <button @click="onLogin">登录</button>
      </li>
      <li>注册</li>
    </ul>
  </div>
</template>

<script>
import { nextTick, ref } from "vue";
import { login } from "./api";
import Cookies from 'js-cookie'

export default {
  setup() {
    const name = ref("");
    const pwd = ref("");
    const onLogin = () => {
      login({ name: name.value, pwd: pwd.value }).then((data) => {
        window.localStorage.setItem("user", JSON.stringify(data.user));
        window.localStorage.setItem("token", data.token);
        Cookies.set("token", data.token);
        Cookies.set("uid", data.user.id);
      });
    };
    return { name, pwd, onLogin };
  },
};
</script>

<style scoped>
.login {
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login li {
  padding: 8px 0;
  text-align: center;
}

.login li input {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px rgba(70, 75, 150, 0.2);
  border: 0px;
  border: 1px solid var(--second);
}

.login li button {
  background: var(--theme);
  width: 100%;
  border: 0px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
}
.login li a {
  text-align: center;
}

.login h1 {
  color: #7e5fd9;
  font-size: 40px;
  padding: 10px;
}
</style>