<!-- components/Header.vue -->
<template>
    <header class="absolute top-0 left-0 right-0 z-50">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-bold text-white">
              AKB Pixels
            </router-link>
          </div>
  
          <!-- Desktop Navigation -->
          <div class="hidden md:flex md:items-center md:space-x-8">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="text-sm text-white hover:text-gray-300"
            >
              {{ item.name }}
            </router-link>
          </div>
  
          <!-- Mobile Menu Button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              aria-label="Toggle menu"
            >
              <Menu v-if="!isMobileMenuOpen" class="block h-6 w-6" aria-hidden="true" />
              <X v-else class="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
  
          <!-- Social Icons -->
          <div class="hidden md:flex md:items-center md:space-x-2">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              :title="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-gray-300"
            >
              <component :is="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>
  
        <!-- Mobile Menu -->
        <Transition
          enter-active-class="duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div v-if="isMobileMenuOpen" class="md:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
                @click="isMobileMenuOpen = false"
              >
                {{ item.name }}
              </router-link>
            </div>
            <div class="border-t border-gray-700 pb-3 pt-4">
              <div class="flex justify-center space-x-4">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.href"
                  :title="social.name"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white hover:text-gray-300"
                >
                  <component :is="social.icon" class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </Transition>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Menu, X, Facebook, Instagram, Mail } from 'lucide-vue-next'
  
  const isMobileMenuOpen = ref(false)
  
  const navigation = ref([
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' }
  ])
  
  const socials = ref([
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/akbpixels', 
      icon: Facebook 
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/akbpixels',
      icon: Instagram 
    },
    { 
      name: 'Email', 
      href: 'mailto:akbpixels@gmail.com',
      icon: Mail 
    }
  ])
  </script>