<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  props: ["msg"],
  mounted() {
    setTimeout(() => {
      this.$emit("cleanMsg");
    }, 3000);
  },
};
</script>

<style scoped>
div {
  border-radius: 5px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--theme);
  color: #fff;
  padding: 10px 20px;
}
</style>