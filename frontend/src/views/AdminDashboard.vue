<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div class="flex items-center">
            <img src="/icon.ico" alt="AnantAcademy Logo" class="h-8 w-8 rounded-lg" />
            <h1 class="ml-3 text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-600">Welcome, {{ adminUser?.email }}</span>
            <button
              @click="handleLogout"
              class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Navigation Tabs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8">
          <button
            @click="activeTab = 'dashboard'"
            :class="activeTab === 'dashboard' ? 'border-brand text-brand' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            class="whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
          >
            Dashboard
          </button>
          <button
            @click="activeTab = 'users'"
            :class="activeTab === 'users' ? 'border-brand text-brand' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            class="whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
          >
            User Management
          </button>
          <button
            @click="activeTab = 'tutors'"
            :class="activeTab === 'tutors' ? 'border-brand text-brand' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            class="whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
          >
            Tutors
          </button>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Dashboard Tab Content -->
      <div v-if="activeTab === 'dashboard'">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Total Requests</dt>
                  <dd class="text-lg font-medium text-gray-900">{{ stats.totalRequests }}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Pending</dt>
                  <dd class="text-lg font-medium text-gray-900">{{ stats.pendingRequests }}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Completed</dt>
                  <dd class="text-lg font-medium text-gray-900">{{ stats.completedRequests }}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Today</dt>
                  <dd class="text-lg font-medium text-gray-900">{{ stats.todayRequests }}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        </div>

        <!-- Demo Requests Table -->
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Demo Requests</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">All submitted demo class requests</p>
          </div>
          
          <div v-if="loading" class="flex justify-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
          </div>
          
          <div v-else-if="requests.length === 0" class="text-center py-8 text-gray-500">
            No demo requests found
          </div>
          
          <div v-else class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <template v-for="request in requests" :key="request.id">
                  <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">{{ request.parentName }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ request.studentName || 'N/A' }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ request.email }}</div>
                      <div class="text-sm text-gray-500">{{ request.phoneCountryCode }} {{ request.phone }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {{ getSubjectName(request.subject) }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Class {{ request.classGrade }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ formatDate(request.preferredDate) }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getStatusClass(request.status)" class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                        {{ request.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        @click="toggleRequestDetails(request.id)"
                        class="text-brand hover:text-brand-dark mr-3"
                      >
                        {{ expandedRequest === request.id ? 'Hide' : 'View' }}
                      </button>
                      <button
                        v-if="request.status === 'pending'"
                        @click="confirmComplete(request)"
                        class="text-green-600 hover:text-green-900"
                      >
                        Complete
                      </button>
                    </td>
                  </tr>
                  
                  <!-- Expanded Details Row -->
                  <tr v-if="expandedRequest === request.id" class="bg-gray-50">
                    <td colspan="8" class="px-6 py-4">
                      <div class="bg-white rounded-lg p-6 shadow-sm">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">Full Request Details</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 class="font-medium text-gray-700 mb-3">Contact Information</h5>
                            <div class="space-y-2 text-sm">
                              <div><span class="font-medium">Parent Name:</span> {{ request.parentName }}</div>
                              <div><span class="font-medium">Student Name:</span> {{ request.studentName || 'N/A' }}</div>
                              <div><span class="font-medium">Email:</span> {{ request.email }}</div>
                              <div><span class="font-medium">Phone:</span> {{ request.phoneCountryCode }} {{ request.phone }}</div>
                            </div>
                          </div>
                          
                          <div>
                            <h5 class="font-medium text-gray-700 mb-3">Class Details</h5>
                            <div class="space-y-2 text-sm">
                              <div><span class="font-medium">Subject:</span> {{ getSubjectName(request.subject) }}</div>
                              <div><span class="font-medium">Class:</span> Class {{ request.classGrade }}</div>
                              <div><span class="font-medium">Language:</span> {{ request.preferredLanguage || 'Not specified' }}</div>
                            </div>
                          </div>
                          
                          <div>
                            <h5 class="font-medium text-gray-700 mb-3">Schedule Preferences</h5>
                            <div class="space-y-2 text-sm">
                              <div><span class="font-medium">Preferred Date:</span> {{ formatDate(request.preferredDate) || 'Not specified' }}</div>
                              <div><span class="font-medium">Preferred Time:</span> {{ request.preferredTime || 'Not specified' }}</div>
                            </div>
                          </div>
                          
                          <div>
                            <h5 class="font-medium text-gray-700 mb-3">Technical Requirements</h5>
                            <div class="space-y-2 text-sm">
                              <div><span class="font-medium">Device Available:</span> 
                                <span :class="request.hasDevice ? 'text-green-600' : 'text-red-600'">
                                  {{ request.hasDevice ? 'Yes' : 'No' }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div v-if="request.notes" class="mt-6">
                          <h5 class="font-medium text-gray-700 mb-2">Additional Notes</h5>
                          <div class="bg-gray-50 p-3 rounded-md text-sm text-gray-700">
                            {{ request.notes }}
                          </div>
                        </div>
                        
                        <div class="mt-6 pt-4 border-t border-gray-200">
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                            <div><span class="font-medium">Request ID:</span> {{ request.id }}</div>
                            <div><span class="font-medium">Submitted:</span> {{ formatDateTime(request.createdAt) }}</div>
                            <div><span class="font-medium">Last Updated:</span> {{ formatDateTime(request.updatedAt) }}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- User Management Tab Content -->
      <div v-if="activeTab === 'users'">
        <UserManagement />
      </div>

      <!-- Tutors Tab Content -->
      <div v-if="activeTab === 'tutors'">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Tutor Applications</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">All submitted tutor applications</p>
          </div>
          
          <div v-if="tutorsLoading" class="flex justify-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
          </div>
          
          <div v-else-if="tutorApplications.length === 0" class="text-center py-8 text-gray-500">
            No tutor applications found
          </div>
          
          <div v-else class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requirements</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <template v-for="application in tutorApplications" :key="application.id">
                  <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">{{ application.name }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ application.email }}</div>
                      <div class="text-sm text-gray-500">{{ application.phone }}</div>
                    </td>
                    <td class="px-6 py-4">
                      <a :href="application.resumeLink" target="_blank" rel="noopener noreferrer" class="text-sm text-brand hover:text-brand-dark">
                        View Resume
                      </a>
                    </td>
                    <td class="px-6 py-4">
                      <div class="text-xs space-y-1">
                        <div :class="application.comfortableWithOnlineClass ? 'text-green-600' : 'text-red-600'">
                          {{ application.comfortableWithOnlineClass ? '✓' : '✗' }} Online Class
                        </div>
                        <div :class="application.hasPenTab ? 'text-green-600' : 'text-red-600'">
                          {{ application.hasPenTab ? '✓' : '✗' }} Pen Tab
                        </div>
                        <div :class="application.hasLaptopWithWebcam ? 'text-green-600' : 'text-red-600'">
                          {{ application.hasLaptopWithWebcam ? '✓' : '✗' }} Laptop/Webcam
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ formatDate(application.createdAt) }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getTutorStatusClass(application.status)" class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                        {{ application.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        @click="toggleTutorDetails(application.id)"
                        class="text-brand hover:text-brand-dark mr-3"
                      >
                        {{ expandedTutor === application.id ? 'Hide' : 'View' }}
                      </button>
                      <button
                        @click="confirmUpdateTutorStatus(application)"
                        class="text-green-600 hover:text-green-900"
                      >
                        Update Status
                      </button>
                    </td>
                  </tr>
                  
                  <!-- Expanded Details Row -->
                  <tr v-if="expandedTutor === application.id" class="bg-gray-50">
                    <td colspan="7" class="px-6 py-4">
                      <div class="bg-white rounded-lg p-6 shadow-sm">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">Full Application Details</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 class="font-medium text-gray-700 mb-3">Contact Information</h5>
                            <div class="space-y-2 text-sm">
                              <div><span class="font-medium">Name:</span> {{ application.name }}</div>
                              <div><span class="font-medium">Email:</span> {{ application.email }}</div>
                              <div><span class="font-medium">Phone:</span> {{ application.phone }}</div>
                              <div><span class="font-medium">Resume:</span> <a :href="application.resumeLink" target="_blank" rel="noopener noreferrer" class="text-brand hover:underline">{{ application.resumeLink }}</a></div>
                            </div>
                          </div>
                          
                          <div>
                            <h5 class="font-medium text-gray-700 mb-3">Requirements</h5>
                            <div class="space-y-2 text-sm">
                              <div>
                                <span class="font-medium">Comfortable with Online Class:</span> 
                                <span :class="application.comfortableWithOnlineClass ? 'text-green-600' : 'text-red-600'">
                                  {{ application.comfortableWithOnlineClass ? 'Yes' : 'No' }}
                                </span>
                              </div>
                              <div>
                                <span class="font-medium">Has Pen Tab:</span> 
                                <span :class="application.hasPenTab ? 'text-green-600' : 'text-red-600'">
                                  {{ application.hasPenTab ? 'Yes' : 'No' }}
                                </span>
                              </div>
                              <div>
                                <span class="font-medium">Has Laptop with Webcam:</span> 
                                <span :class="application.hasLaptopWithWebcam ? 'text-green-600' : 'text-red-600'">
                                  {{ application.hasLaptopWithWebcam ? 'Yes' : 'No' }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div v-if="application.adminNotes" class="mt-6">
                          <h5 class="font-medium text-gray-700 mb-2">Admin Notes</h5>
                          <div class="bg-gray-50 p-3 rounded-md text-sm text-gray-700">
                            {{ application.adminNotes }}
                          </div>
                        </div>
                        
                        <div class="mt-6 pt-4 border-t border-gray-200">
                          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                            <div><span class="font-medium">Application ID:</span> {{ application.id }}</div>
                            <div><span class="font-medium">Submitted:</span> {{ formatDateTime(application.createdAt) }}</div>
                            <div><span class="font-medium">Last Updated:</span> {{ formatDateTime(application.updatedAt) }}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>

    <!-- Tutor Status Update Modal -->
    <div v-if="showTutorStatusModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Update Tutor Application Status</h3>
          <div v-if="tutorToUpdate" class="mb-4 p-3 bg-gray-50 rounded-md">
            <p class="text-sm font-medium text-gray-900">{{ tutorToUpdate.name }}</p>
            <p class="text-sm text-gray-600">{{ tutorToUpdate.email }}</p>
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">Status *</label>
            <select v-model="newTutorStatus" class="w-full border-gray-300 focus:border-brand focus:ring-brand rounded-md px-3 py-2">
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">Admin Notes</label>
            <textarea 
              v-model="tutorAdminNotes" 
              rows="3" 
              class="w-full border-gray-300 focus:border-brand focus:ring-brand rounded-md px-3 py-2"
              placeholder="Add any notes about this application..."
            ></textarea>
          </div>
          
          <div class="flex items-center gap-3">
            <button
              @click="confirmTutorStatusUpdate"
              class="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Update
            </button>
            <button
              @click="cancelTutorStatusUpdate"
              class="px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3 text-center">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mt-4">Mark Request as Completed</h3>
          <div class="mt-2 px-7 py-3">
            <p class="text-sm text-gray-500">
              Are you sure you want to mark this demo request as completed?
            </p>
            <div v-if="requestToComplete" class="mt-3 p-3 bg-gray-50 rounded-md text-left">
              <p class="text-sm font-medium text-gray-900">{{ requestToComplete.parentName }}</p>
              <p class="text-sm text-gray-600">{{ getSubjectName(requestToComplete.subject) }} - Class {{ requestToComplete.classGrade }}</p>
              <p class="text-sm text-gray-600">{{ requestToComplete.email }}</p>
            </div>
          </div>
          <div class="items-center px-4 py-3">
            <button
              @click="confirmUpdateStatus"
              class="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md w-24 mr-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Yes
            </button>
            <button
              @click="cancelComplete"
              class="px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md w-24 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '../services/apiClient'
import UserManagement from '../components/UserManagement.vue'

const router = useRouter()

const adminUser = ref(null)
const requests = ref([])
const tutorApplications = ref([])
const activeTab = ref('dashboard')
const expandedRequest = ref(null)
const expandedTutor = ref(null)
const showConfirmModal = ref(false)
const showTutorStatusModal = ref(false)
const requestToComplete = ref(null)
const tutorToUpdate = ref(null)
const newTutorStatus = ref('pending')
const tutorAdminNotes = ref('')
const stats = reactive({
  totalRequests: 0,
  pendingRequests: 0,
  completedRequests: 0,
  todayRequests: 0
})
const loading = ref(false)
const tutorsLoading = ref(false)

const subjects = {
  P: 'Physics',
  C: 'Chemistry', 
  M: 'Maths',
  B: 'Biology'
}

onMounted(() => {
  checkAuth()
  loadDashboardData()
})

// Watch for tab changes to load tutor applications
watch(() => activeTab.value, (newTab) => {
  if (newTab === 'tutors') {
    loadTutorApplications()
  }
})

function checkAuth() {
  const token = localStorage.getItem('adminToken')
  const user = localStorage.getItem('adminUser')
  
  if (!token || !user) {
    router.push('/admin/login')
    return
  }
  
  adminUser.value = JSON.parse(user)
  
  // Set default authorization header
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

async function loadDashboardData() {
  loading.value = true
  
  try {
    const [statsResponse, requestsResponse] = await Promise.all([
      apiClient.get('/admin/dashboard/stats'),
      apiClient.get('/admin/demo-requests')
    ])
    
    if (statsResponse.data.success) {
      Object.assign(stats, statsResponse.data.data)
    }
    
    if (requestsResponse.data.success) {
      requests.value = requestsResponse.data.data.requests
    }
  } catch (error) {
    if (error.response?.status === 401) {
      handleLogout()
    } else {
      console.error('Failed to load dashboard data:', error)
    }
  } finally {
    loading.value = false
  }
}

function getSubjectName(code) {
  return subjects[code] || code
}

function formatDate(dateString) {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString()
}

function formatDateTime(dateString) {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function getStatusClass(status) {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function toggleRequestDetails(requestId) {
  expandedRequest.value = expandedRequest.value === requestId ? null : requestId
}

function confirmComplete(request) {
  requestToComplete.value = request
  showConfirmModal.value = true
}

function cancelComplete() {
  showConfirmModal.value = false
  requestToComplete.value = null
}

async function confirmUpdateStatus() {
  if (!requestToComplete.value) return
  
  try {
    await apiClient.patch(`/admin/demo-requests/${requestToComplete.value.id}/status`, {
      status: 'completed'
    })
    
    // Close modal and reload data
    showConfirmModal.value = false
    requestToComplete.value = null
    loadDashboardData()
  } catch (error) {
    console.error('Failed to update status:', error)
    // Close modal even if there's an error
    showConfirmModal.value = false
    requestToComplete.value = null
  }
}

async function updateStatus(requestId, newStatus) {
  try {
    await apiClient.patch(`/admin/demo-requests/${requestId}/status`, {
      status: newStatus
    })
    
    // Reload data
    loadDashboardData()
  } catch (error) {
    console.error('Failed to update status:', error)
  }
}

function handleLogout() {
  localStorage.removeItem('adminToken')
  localStorage.removeItem('adminUser')
  delete apiClient.defaults.headers.common['Authorization']
  router.push('/admin/login')
}

async function loadTutorApplications() {
  tutorsLoading.value = true
  try {
    const response = await apiClient.get('/admin/tutor-applications')
    if (response.data.success) {
      tutorApplications.value = response.data.data.applications
    }
  } catch (error) {
    if (error.response?.status === 401) {
      handleLogout()
    } else {
      console.error('Failed to load tutor applications:', error)
    }
  } finally {
    tutorsLoading.value = false
  }
}

function toggleTutorDetails(applicationId) {
  expandedTutor.value = expandedTutor.value === applicationId ? null : applicationId
}

function getTutorStatusClass(status) {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'reviewed':
      return 'bg-blue-100 text-blue-800'
    case 'approved':
      return 'bg-green-100 text-green-800'
    case 'rejected':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function confirmUpdateTutorStatus(application) {
  tutorToUpdate.value = application
  newTutorStatus.value = application.status
  tutorAdminNotes.value = application.adminNotes || ''
  showTutorStatusModal.value = true
}

function cancelTutorStatusUpdate() {
  showTutorStatusModal.value = false
  tutorToUpdate.value = null
  newTutorStatus.value = 'pending'
  tutorAdminNotes.value = ''
}

async function confirmTutorStatusUpdate() {
  if (!tutorToUpdate.value) return
  
  try {
    await apiClient.patch(`/admin/tutor-applications/${tutorToUpdate.value.id}/status`, {
      status: newTutorStatus.value,
      adminNotes: tutorAdminNotes.value
    })
    
    showTutorStatusModal.value = false
    tutorToUpdate.value = null
    newTutorStatus.value = 'pending'
    tutorAdminNotes.value = ''
    loadTutorApplications()
  } catch (error) {
    console.error('Failed to update tutor status:', error)
    showTutorStatusModal.value = false
    tutorToUpdate.value = null
  }
}
</script>
