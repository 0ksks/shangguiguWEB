<template>
  <div class="LoginContainer">
    <el-row>
      <!-- 占位 -->
      <el-col :span="8" :xs="0"></el-col>
      <el-col :span="8" :xs="24">
        <el-form class="LoginForm">
          <h1>Hello</h1>
          <h2>welcome</h2>
          <el-form-item
            ><el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input
          ></el-form-item>
          <el-form-item
            ><el-input
              :prefix-icon="Lock"
              type="password"
              v-model="loginForm.password"
              show-password
            ></el-input
          ></el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              color="rgb(218, 101, 121)"
              size="default"
              class="LoginBTN"
              @click="login"
            >
              log in
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!-- 占位 -->
      <el-col :span="8" :xs="0"></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import { User, Lock } from '@element-plus/icons-vue'
  import { reactive } from 'vue'
  import useUserStore from '@/store/modules/user'

  let useStore = useUserStore()
  let loginForm = reactive({
    username: 'admin',
    password: '111111',
  })
  const login = () => {
    useStore.user_login()
  }
</script>

<style scoped lang="scss">
  .LoginContainer {
    background-image: url('@/assets/images/BTR.PNG');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;

    .LoginForm {
      position: relative;
      top: 30vh;
      background-color: rgba(255, 192, 203, 0.7);
      padding: 40px;

      h1 {
        color: white;
        font-size: 40px;
      }

      h2 {
        color: white;
        font-size: 20px;
        margin: 20px, 0px;
      }

      .LoginBTN {
        width: 100%;
        color: white;
      }

      .test {
        color: rgb(218, 101, 121);
      }
    }
  }
</style>
