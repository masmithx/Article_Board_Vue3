<template>
  <div class="article-board p-4">
    <!-- Header Section -->
    <div class="header mb-4">
      <div class="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 class="mb-2 fw-bold fs-2">Your Resources</h1>
          <p class="text-muted mb-0 fs-6">You may add more or edit your existing resources</p>
        </div>
        <!-- Action Buttons -->
        <div class="action-buttons">
          <button class="btn btn-light me-2">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn btn-light me-2">
            <i class="bi bi-plus-lg"></i>
          </button>
          <button class="btn btn-light me-2">
            <i class="bi bi-list-task"></i>
          </button>
          <button class="btn btn-light">
            <i class="bi bi-sort-up-alt"></i>
          </button>
        </div>
      </div>
      
      <!-- Filter Chips -->
      <div class="filter-chips">
        <button 
          v-for="category in categories" 
          :key="category"
          class="btn btn-outline-primary me-4 mb-2"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          <i v-if="selectedCategory === category" class="bi bi-check2 me-1"></i>
          {{ category }}
        </button>
      </div>
    </div>
    <!-- Article Cards Grid -->
    <div class="row g-4 mb-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="(article, idx) in articles" :key="idx">
        <ArticleCard
          :category="article.category"
          :title="article.title"
          :bgImage="article.bgImage"
        />
      </div>
    </div>
    <!-- Show More Button -->
    <div class="d-flex justify-content-center mb-4">
      <button class="show-more-btn d-flex align-items-center">
        <i class="bi bi-arrow-down-circle me-2"></i> Show More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ArticleCard from './ArticleCard.vue'

const categories = ['ALL', 'Acquisition', 'Communication', 'Engineering', 'Education', 'Productivity', 'Training', 'Workplace']
const selectedCategory = ref('ALL')

const articles = [
  {
    category: 'Workplace',
    title: 'Ignition Podcast: Innovation, Agility, Talent, Workplace, Culture, and more',
    bgImage: '1.png',
  },
  {
    category: 'Training',
    title: 'Threat Briefing',
    bgImage: '2.png',
  },
  {
    category: 'Productivity',
    title: 'SSC Telework Portal',
    bgImage: '3.png',
  },
  {
    category: 'Education',
    title: 'AIR FORCE Virtual Education',
    bgImage: '4.png',
  },
  {
    category: 'Education',
    title: 'Guide to DigitalU',    
    bgImage: '5.png',
  },
  {
    category: 'Workplace',
    title: 'How Build a Collaborative Team Environment',    
    bgImage: '6.png',
  },
]
</script>

<style>
@import './ArticleBoard.css';
</style>