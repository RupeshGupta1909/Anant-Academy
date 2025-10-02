<template>
  <div class="space-y-6">
    <!-- Change Password Section -->
    <div class="bg-white shadow rounded-lg p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
      <form @submit.prevent="handleChangePassword" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Current Password</label>
          <input
            v-model="passwordForm.currentPassword"
            type="password"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand focus:border-brand sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">New Password</label>
          <input
            v-model="passwordForm.newPassword"
            type="password"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand focus:border-brand sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Confirm New Password</label>
          <input
            v-model="passwordForm.confirmPassword"
            type="password"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand focus:border-brand sm:text-sm"
          />
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            :disabled="passwordLoading"
            class="bg-brand text-white px-4 py-2 rounded-md hover:bg-brand-dark disabled:opacity-50"
          >
            {{ passwordLoading ? 'Changing...' : 'Change Password' }}
          </button>
        </div>
        <div v-if="passwordMessage" :class="passwordError ? 'text-red-600' : 'text-green-600'" class="text-sm">
          {{ passwordMessage }}
        </div>
      </form>
    </div>

    <!-- Add New User Section -->
    <div class="bg-white shadow rounded-lg p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Add New Admin User</h3>
      <form @submit.prevent="handleCreateUser" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="userForm.email"
            type="email"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand focus:border-brand sm:text-sm"
            placeholder="admin@example.com"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="userForm.password"
            type="password"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand focus:border-brand sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            v-model="userForm.confirmPassword"
            type="password"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand focus:border-brand sm:text-sm"
          />
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            :disabled="userLoading"
            class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
          >
            {{ userLoading ? 'Creating...' : 'Create User' }}
          </button>
        </div>
        <div v-if="userMessage" :class="userError ? 'text-red-600' : 'text-green-600'" class="text-sm">
          {{ userMessage }}
        </div>
      </form>
    </div>

    <!-- Users List Section -->
    <div class="bg-white shadow rounded-lg p-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-900">Admin Users</h3>
        <button
          @click="loadUsers"
          class="text-brand hover:text-brand-dark text-sm font-medium"
        >
          Refresh
        </button>
      </div>
      
      <div v-if="usersLoading" class="flex justify-center py-4">
        <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-brand"></div>
      </div>
      
      <div v-else-if="users.length === 0" class="text-center py-4 text-gray-500">
        No users found
      </div>
      
      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in users" :key="user._id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ user.email }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {{ user.role }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" 
                      class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                  {{ user.isActive ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ user.lastLogin ? formatDate(user.lastLogin) : 'Never' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  @click="toggleUserStatus(user._id, !user.isActive)"
                  :class="user.isActive ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'"
                >
                  {{ user.isActive ? 'Deactivate' : 'Activate' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import apiClient from '../services/apiClient'

const passwordForm = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const userForm = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

const users = ref([])
const passwordLoading = ref(false)
const userLoading = ref(false)
const usersLoading = ref(false)
const passwordMessage = ref('')
const passwordError = ref(false)
const userMessage = ref('')
const userError = ref(false)

onMounted(() => {
  loadUsers()
})

async function loadUsers() {
  usersLoading.value = true
  try {
    const response = await apiClient.get('/admin/users')
    if (response.data.success) {
      users.value = response.data.data
    }
  } catch (error) {
    console.error('Failed to load users:', error)
  } finally {
    usersLoading.value = false
  }
}

async function handleChangePassword() {
  if (passwordForm.newPassword !== passwordForm.confirmPassword) {
    passwordMessage.value = 'New passwords do not match'
    passwordError.value = true
    return
  }

  passwordLoading.value = true
  passwordMessage.value = ''
  passwordError.value = false

  try {
    const response = await apiClient.patch('/admin/change-password', {
      currentPassword: passwordForm.currentPassword,
      newPassword: passwordForm.newPassword,
      confirmPassword: passwordForm.confirmPassword
    })

    if (response.data.success) {
      passwordMessage.value = 'Password changed successfully'
      passwordError.value = false
      Object.assign(passwordForm, { currentPassword: '', newPassword: '', confirmPassword: '' })
    }
  } catch (error) {
    passwordMessage.value = error.response?.data?.message || 'Failed to change password'
    passwordError.value = true
  } finally {
    passwordLoading.value = false
  }
}

async function handleCreateUser() {
  if (userForm.password !== userForm.confirmPassword) {
    userMessage.value = 'Passwords do not match'
    userError.value = true
    return
  }

  userLoading.value = true
  userMessage.value = ''
  userError.value = false

  try {
    const response = await apiClient.post('/admin/users', {
      email: userForm.email,
      password: userForm.password,
      confirmPassword: userForm.confirmPassword
    })

    if (response.data.success) {
      userMessage.value = 'User created successfully'
      userError.value = false
      Object.assign(userForm, { email: '', password: '', confirmPassword: '' })
      loadUsers() // Refresh users list
    }
  } catch (error) {
    userMessage.value = error.response?.data?.message || 'Failed to create user'
    userError.value = true
  } finally {
    userLoading.value = false
  }
}

async function toggleUserStatus(userId, newStatus) {
  try {
    await apiClient.patch(`/admin/users/${userId}/status`, {
      isActive: newStatus
    })
    loadUsers() // Refresh users list
  } catch (error) {
    console.error('Failed to toggle user status:', error)
  }
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
