<!-- LandingPage.vue -->
<template>
  <div class="min-h-screen bg-black text-white">
    <!-- <Header /> -->
    
    <div class="relative h-screen">
      <img
        src="@/assets/images/IMG_771845.jpg"
        alt="Camera background"
        loading="lazy"
        class="absolute inset-0 w-full h-full object-cover opacity-50 object-top"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      <div class="relative h-full flex items-center">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            I'M PROFESSIONAL<br />PHOTOGRAPHER
          </h1>
          <p class="text-xl max-w-2xl mb-8">
            Based in London, I specialize in ceremonial, landscape, advertorial and conceptual photography. Here you will be able to find my latest shots.
          </p>
          <router-link to="#contact">
            <button class="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
              Get in touch →
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="py-20 bg-black" id="services">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold mb-16">SERVICES I PROVIDE</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="service in services" :key="service.title" class="bg-zinc-900 p-8 rounded-lg">
            <component :is="service.icon" class="h-8 w-8 mb-4" />
            <h3 class="text-xl font-bold mb-4">{{ service.title }}</h3>
            <p class="text-gray-400">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20 bg-zinc-900" id="portfolio">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-16">
          <h2 class="text-4xl font-bold">SELECTED PROJECTS</h2>
          <router-link to="/projects" class="text-sm hover:text-gray-300">
            More projects →
          </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" class="group relative">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              class="w-full aspect-[3/4] object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <p class="text-sm mb-2">{{ project.category }} • {{ project.year }}</p>
                <h3 class="text-xl font-bold">{{ project.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20 bg-black" id="contact">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
        <div>
          <h2 class="text-4xl font-bold mb-8">GET IN TOUCH</h2>
          <p class="text-gray-400 mb-8">
            Feel free to reach out if you want to collaborate with us, or simply have a chat.
          </p>
          <div class="space-y-4">
            <p><a href="tel:+447399068099">+447399068099</a></p>
            <p><a href="mailto:akbpixels@gmail.com">akbpixels@gmail.com</a></p>
            <p>2-4 Deacon Street</p>
            <p>Elephant Park, Elephant and Castle</p>
            <p>London</p>
          </div>
        </div>
        <form class="space-y-4" @submit.prevent="handleSubmit">
          <input v-model="form.name" type="text" placeholder="Full Name" class="w-full bg-zinc-900 p-4 rounded" />
          <input v-model="form.email" type="email" placeholder="Email address" class="w-full bg-zinc-900 p-4 rounded" />
          <input v-model="form.phone" type="tel" placeholder="Phone number" class="w-full bg-zinc-900 p-4 rounded" />
          <textarea v-model="form.message" placeholder="Message..." class="w-full bg-zinc-900 p-4 rounded h-32" />
          <button class="bg-white text-black px-8 py-3 rounded hover:bg-gray-200">
            Send
          </button>
        </form>
      </div>
    </div>

    <footer>
      <div class="py-8 px-6 text-center">
        <p>Copyright © {{ new Date().getFullYear() }}. Suptle Solutions Ltd</p>
      </div>
    </footer>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { Camera, Video, Image, User } from 'lucide-vue-next'
import Header from "@/components/header.vue";
import img1 from '@/assets/images/projects/IMG_7990.jpeg'
import img2 from '@/assets/images/projects/water3.jpg'
import img3 from '@/assets/images/projects/water2.jpg'


const projects = ref([
  {
    title: 'Autumn Wedding',
    category: 'WEDDING',
    year: '2024',
    // image: '../assets/images/projects/IMG_7990.jpeg'
    image: img1
  },
  {
    title: 'Urban Style',
    category: 'PORTRAIT',
    year: '2023',
    // image: 'images/projects/water3.jpg'
    image: img2
  },
  {
    title: 'Nature Vibes',
    category: 'LANDSCAPE',
    year: '2024',
    // image: new URL('../assets/images/projects/IMG_7990.jpeg', import.meta.url).href
    image: img3
  }
])


   const getImg = function (img) {
    console.log(projects.image);
      return (`/assets/${img}`)
    }


const services = ref([
  {
    title: 'Videography',
    description: 'Step into a realm where photography transcends into storytelling. Our videography captures the essence of your moments.',
    icon: Video
  },
  {
    title: 'Photography',
    description: 'Professional photography services for events, portraits, and commercial needs.',
    icon: Camera
  },
  {
    title: 'Interior shots',
    description: 'From breathtaking interior shots that tell a story to the elegance of studio portraits.',
    icon: Image
  },
  {
    title: 'Studio portraits',
    description: 'Step into our studio, where every portrait is a masterpiece. From business headshots to family portraits.',
    icon: User
  }
])

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log(form.value)
}
</script>