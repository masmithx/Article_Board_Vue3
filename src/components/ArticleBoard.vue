<template>
  <div class="article-board p-4" style="min-height: 900px;">
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
    <div class="row g-4 mb-4 article-grid-area" style="min-height: 440px; position: relative;">
      <template v-if="filteredArticles.length > 0" v-for="idx in 6">
        <div v-if="filteredArticles[idx-1]" class="col-12 col-md-6 col-lg-4" :key="'card-' + idx">
          <ArticleCard
            :category="filteredArticles[idx-1].category"
            :title="filteredArticles[idx-1].title"
            :bgImage="filteredArticles[idx-1].bgImage"
            :bookmarked="filteredArticles[idx-1].bookmarked"
            @toggle-bookmark="toggleBookmark(idx-1)"
          />
        </div>
        <div v-else class="col-12 col-md-6 col-lg-4" :key="'placeholder-' + idx" style="visibility: hidden; height: 0;"></div>
      </template>
      <div v-if="filteredArticles.length === 0" class="no-match-resources d-flex flex-column align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0" style="min-height: 440px;">
        <i class="bi bi-emoji-frown" style="font-size: 2.5rem; color: #C9E6FF;"></i>
        <div class="fw-semibold fs-4 mt-3 mb-1" style="color: #0E4C87;">No Match Resources</div>
        <div class="text-muted">Try a different category or add new resources.</div>
      </div>
    </div>
    <!-- Show More Button -->
    <div v-if="filteredArticles.length > 0" class="d-flex justify-content-center mb-4">
      <button class="show-more-btn d-flex align-items-center">
        <i class="bi bi-arrow-down-circle me-2"></i> Show More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import ArticleCard from './ArticleCard.vue'
import { ArticleCategory } from '../const/ArticleCategory'
import { articles as initialArticles } from '../const/articles'
import type { Article } from '../const/articles'

const categories = [
  ArticleCategory.ALL,
  ArticleCategory.ACQUISITION,
  ArticleCategory.COMMUNICATION,
  ArticleCategory.ENGINEERING,
  ArticleCategory.EDUCATION,
  ArticleCategory.PRODUCTIVITY,
  ArticleCategory.TRAINING,
  ArticleCategory.WORKPLACE,
]

const selectedCategory = ref(ArticleCategory.ALL)

const articles = reactive(initialArticles.map(article => ({ ...article })))

const filteredArticles = computed(() => {
  if (selectedCategory.value === ArticleCategory.ALL) return articles
  return articles.filter((article: Article) => article.category === selectedCategory.value)
})

function toggleBookmark(idx: number) {
  filteredArticles.value[idx].bookmarked = !filteredArticles.value[idx].bookmarked
}
</script>

<style>
@import './ArticleBoard.css';
</style>