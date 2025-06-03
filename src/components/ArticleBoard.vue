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
      <div class="col-12 col-md-6 col-lg-4" v-for="n in 6" :key="n">
        <div class="card article-card h-100 position-relative">
          <div class="article-card-img bg-secondary" style="height: 160px; background: #0e4c87; opacity: 0.7;"></div>
          <div class="card-body text-white position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-3" style="background: rgba(14,76,135,0.3);">
            <div>
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-lightbulb me-2"></i>
                <span class="small">Workplace • Resources</span>
              </div>
              <div class="fw-semibold fs-6 mb-1">Article Title Placeholder</div>
              <div class="small">Short description or subtitle goes here.</div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <button class="btn btn-light btn-sm rounded-circle p-2"><i class="bi bi-bookmark"></i></button>
              <button class="btn btn-light btn-sm rounded-circle p-2"><i class="bi bi-three-dots-vertical"></i></button>
            </div>
          </div>
        </div>
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

const categories = ['ALL', 'Acquisition', 'Communication', 'Engineering', 'Education', 'Productivity', 'Training', 'Workplace']
const selectedCategory = ref('ALL')
</script>

<style>
@import './ArticleBoard.css';
</style>