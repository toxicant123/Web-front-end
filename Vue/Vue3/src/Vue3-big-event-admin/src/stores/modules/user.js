import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user.js'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')

    const setToken = (newToken) => {
      token.value = newToken
    }

    const removeToken = () => {
      token.value = ''
    }

    const user = ref({})

    const getUser = async () => {
      const res = await userGetInfoService()
      user.value = res.data
    }

    const setUser = (newUser) => (user.value = newUser)

    const removeUser = () => {
      user.value = {}
    }

    return {
      token,
      setToken,
      removeToken,
      user,
      getUser,
      setUser,
      removeUser
    }
  },
  {
    persist: true
  }
)
