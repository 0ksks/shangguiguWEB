<template>
  <div class="LoginContainer">
    <el-row>
      <!-- 占位 -->
      <el-col :span="8" :xs="0"></el-col>
      <el-col :span="8" :xs="24">
        <el-form class="LoginForm" :model="loginForm" :rules="rules">
          <h1>Hello</h1>
          <h2>welcome</h2>
          <el-form-item prop="username"
            ><el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input
          ></el-form-item>
          <el-form-item prop="password"
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
              :loading="loading"
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
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { ElMessage, ElNotification } from 'element-plus'

  import useUserStore from '@/store/modules/user'

  let loading = ref(false)
  let $router = useRouter()
  let useStore = useUserStore()
  let loginForm = reactive({
    username: 'admin',
    password: '111111',
  })

  const rules = {
    username: [
      { required: true, message: 'required', trigger: 'blur' },
      { min: 3, max: 10, message: 'length should be 3 to 10', trigger: 'blur' },
    ],
    password: [
      { required: true, message: 'required', trigger: 'blur' },
      { min: 3, max: 10, message: 'length should be 3 to 10', trigger: 'blur' },
    ],
  }

  const getTime = () => {
    let message = ''
    let hour = new Date().getHours()
    if (hour >= 4 && hour < 12) {
      message = 'morning'
    } else if (hour < 18) {
      message = 'afternoon'
    } else {
      message = 'night'
    }
    return message
  }

  const login = async () => {
    loading.value = true
    try {
      await useStore.userLogin(loginForm)
      $router.push('/')
      ElNotification({
        type: 'success',
        message: 'welcome back',
        title: `good ${getTime()}`,
        showClose: false,
        duration: 5000,
      })
    } catch (error) {
      ElMessage({
        type: 'error',
        message: error.message,
      })
    } finally {
      loading.value = false
    }
  }
</script>

<style scoped lang="scss">
  .LoginContainer {
    background-image: $login_background_pic;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
    .LoginForm {
      position: relative;
      top: 30vh;
      background-color: $login_form_color;
      padding: 40px;
      h1 {
        color: $login_form_text_color;
        font-size: 40px;
      }
      h2 {
        color: $login_form_text_color;
        font-size: 20px;
        margin: 20px, 0px;
      }
      .LoginBTN {
        width: 100%;
        color: $login_button_text_color;
      }
    }
  }
</style>
