<!-- ProjectsPage.vue -->
<template>
    <div class="min-h-screen bg-black text-white">
      <!-- <Header /> -->
      
      <!-- Hero Section -->
      <div class="relative h-[50vh]">
        <img 
          src="@/assets/images/IMG_771845.jpg"
          alt="Projects hero"
          loading="lazy"
          class="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div class="relative h-full flex items-center">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
            <h1 class="text-6xl md:text-7xl font-bold tracking-tight mb-4">
              MY WORK
            </h1>
            <p class="text-xl max-w-2xl">
              A showcase of my best photography projects and collaborations.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Filter Section -->
      <div class="bg-black py-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap gap-4 justify-center">
            <button
              v-for="category in categories"
              :key="category"
              @click="setActiveFilter(category)"
              :class="[
                'px-6 py-2 rounded-full border transition-colors',
                activeFilter === category
                  ? 'bg-white text-black'
                  : 'border-white text-white hover:bg-white hover:text-black'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
  
      <!-- Projects Grid -->
      <div class="bg-black py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="project in filteredProjects" 
              :key="project.title" 
              class="group relative"
            >
              <img 
                :src="project.image"
                :alt="project.title"
                loading="lazy"
                class="w-full aspect-[3/4] object-cover"
              />
              <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p class="text-sm mb-2">{{ project.category }} • {{ project.year }}</p>
                  <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                  <p class="text-sm text-gray-300">Client: {{ project.client }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- CTA Section -->
      <div class="bg-zinc-900 py-20">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p class="text-gray-400 mb-8">
            Let's create something amazing together. Get in touch to discuss your vision.
          </p>
          <button class="bg-white text-black px-8 py-3 rounded hover:bg-gray-200">
            Contact me →
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import Header from '@/components/header.vue'
    // Imports
import img7990 from '@/assets/images/projects/IMG_7990.jpeg'
import img0662 from '@/assets/images/projects/IMG_0662.jpg'
import img0681 from '@/assets/images/projects/IMG_0681.jpg'
import img2860 from '@/assets/images/projects/IMG_2860.jpg'
import img3313 from '@/assets/images/projects/IMG_3313.jpg'
import img3320 from '@/assets/images/projects/IMG_3320.jpg'
import img5252 from '@/assets/images/projects/IMG_5252.jpg'
import img5319 from '@/assets/images/projects/IMG_5319.jpg'
import img5362 from '@/assets/images/projects/IMG_5362.jpg'
import img6615 from '@/assets/images/projects/IMG_6615.jpeg'
import img6624 from '@/assets/images/projects/IMG_6624.jpeg'
import img6631 from '@/assets/images/projects/IMG_6631.jpeg'
import img6633 from '@/assets/images/projects/IMG_6633.jpeg'
import img7645 from '@/assets/images/projects/IMG_7645.jpeg'
import img7976 from '@/assets/images/projects/IMG_7976.jpeg'
import img8528 from '@/assets/images/projects/IMG_8528.jpeg'
import img8531 from '@/assets/images/projects/IMG_8531.jpeg'
import img8543 from '@/assets/images/projects/IMG_8543.jpeg'
import img8571 from '@/assets/images/projects/IMG_8571.jpeg'
import img8572 from '@/assets/images/projects/IMG_8572.jpeg'
import water from '@/assets/images/projects/water.jpg'
import water2 from '@/assets/images/projects/water2.jpg'
import water3 from '@/assets/images/projects/water3.jpg'


  
  const activeFilter = ref('ALL')
  const categories = ['ALL', 'WEDDING', 'PORTRAIT', 'LANDSCAPE', 'COMMERCIAL']
  

const projects = ref([
  {
    title: 'Wedding Story',
    category: 'WEDDING',
    year: '2024',
    client: 'Smith Family',
    image: img7990
  },
  {
    title: 'Landscape Views',
    category: 'LANDSCAPE',
    year: '2024',
    client: 'Nature Magazine',
    image: img0662
  },
  {
    title: 'Urban Portrait',
    category: 'PORTRAIT',
    year: '2024',
    client: 'Fashion Weekly',
    image: img0681
  },
  {
    title: 'City Life',
    category: 'LANDSCAPE',
    year: '2024',
    client: 'Urban Stories',
    image: img2860
  },
  {
    title: 'Portrait Session',
    category: 'PORTRAIT',
    year: '2024',
    client: 'Johnson Family',
    image: img3313
  },
  {
    title: 'Natural Light',
    category: 'PORTRAIT',
    year: '2024',
    client: 'Model Portfolio',
    image: img3320
  },
  {
    title: 'Commercial Shoot',
    category: 'COMMERCIAL',
    year: '2024',
    client: 'Business Corp',
    image: img5252
  },
  {
    title: 'Evening Portraits',
    category: 'PORTRAIT',
    year: '2024',
    client: 'Fashion Brand',
    image: img5319
  },
  {
    title: 'Studio Session',
    category: 'PORTRAIT',
    year: '2024',
    client: 'Artist Portfolio',
    image: img5362
  },
  {
    title: 'Wedding Moments',
    category: 'WEDDING',
    year: '2024',
    client: 'Brown Family',
    image: img6615
  },
  {
    title: 'Reception Party',
    category: 'WEDDING',
    year: '2024',
    client: 'Wilson Wedding',
    image: img6624
  },
  {
    title: 'Seaside Wedding',
    category: 'WEDDING',
    year: '2024',
    client: 'Beach Ceremony',
    image: img6631
  },
  {
    title: 'Urban Wedding',
    category: 'WEDDING',
    year: '2024',
    client: 'City Couple',
    image: img6633
  },
  {
    title: 'Nature Escape',
    category: 'LANDSCAPE',
    year: '2024',
    client: 'Travel Magazine',
    image: img7645
  },
  {
    title: 'Mountain Views',
    category: 'LANDSCAPE',
    year: '2024',
    client: 'Adventure Weekly',
    image: img7976
  },
  {
    title: 'Corporate Event',
    category: 'COMMERCIAL',
    year: '2024',
    client: 'Tech Corp',
    image: img8528
  },
  {
    title: 'Product Launch',
    category: 'COMMERCIAL',
    year: '2024',
    client: 'Startup Inc',
    image: img8531
  },
  {
    title: 'Fashion Editorial',
    category: 'COMMERCIAL',
    year: '2024',
    client: 'Style Magazine',
    image: img8543
  },
  {
    title: 'Brand Campaign',
    category: 'COMMERCIAL',
    year: '2024',
    client: 'Luxury Brand',
    image: img8571
  },
  {
    title: 'Lifestyle Shoot',
    category: 'COMMERCIAL',
    year: '2024',
    client: 'Fashion House',
    image: img8572
  },
  {
    title: 'Water Series I',
    category: 'LANDSCAPE',
    year: '2024',
    client: 'Nature Gallery',
    image: water
  },
  {
    title: 'Water Series II',
    category: 'LANDSCAPE',
    year: '2024',
    client: 'Art Collection',
    image: water2
  },
  {
    title: 'Water Series III',
    category: 'LANDSCAPE',
    year: '2024',
    client: 'Ocean Magazine',
    image: water3
  }
])

  
  const filteredProjects = computed(() => {
    if (activeFilter.value === 'ALL') return projects.value
    return projects.value.filter(project => project.category === activeFilter.value)
  })
  
  const setActiveFilter = (category) => {
    activeFilter.value = category
  }
  </script>