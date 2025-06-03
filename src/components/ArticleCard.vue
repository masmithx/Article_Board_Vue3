<template>
  <div class="article-card-custom position-relative overflow-hidden rounded-4">
    <img :src="resolvedBg" class="article-bg-img position-absolute w-100 h-100 top-0 start-0" alt="background" />
    <div class="article-card-overlay position-absolute w-100 h-100 top-0 start-0"></div>
    <div class="article-card-content position-relative h-100 p-3">
      <div class="d-flex justify-content-between align-items-start w-100 mb-2">
        <div></div>
        <div class="d-flex gap-2">
          <button class="btn btn-icon" :class="{ bookmarked }" @click="$emit('toggle-bookmark')">
            <i :class="bookmarked ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'" />
          </button>
          <button class="btn btn-icon"><i class="bi bi-three-dots-vertical"></i></button>
        </div>
      </div>
      <div class="article-card-text">
        <div class="d-flex align-items-center mb-2">
          <i class="bi bi-lightbulb me-2"></i>
          <span class="small">{{ category }} • Resources</span>
        </div>
        <div class="fw-semibold fs-6 mb-1">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { ArticleCategory } from '../const/ArticleCategory'
import defaultBg from '../assets/card_img/1.png'

const imageMap = Object.fromEntries(
  Object.entries(import.meta.glob('../assets/card_img/*.png', { eager: true, import: 'default' }))
    .map(([path, mod]) => [path.split('/').pop(), mod])
)

const props = defineProps({
  category: { type: String, default: ArticleCategory.WORKPLACE },
  title: { type: String, required: true },
  bgImage: { type: String, default: '' },
  bookmarked: { type: Boolean, default: false },
})

const resolvedBg = computed(() => {
  if (!props.bgImage) return defaultBg
  if (props.bgImage in imageMap) return imageMap[props.bgImage]
  return defaultBg
})
</script>

<style scoped>
.article-card-custom {
  height: 200px;
  width: 100%;
  background: #00263A;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.article-bg-img {
  object-fit: cover;
  z-index: 1;
}
.article-card-overlay {
  background: linear-gradient(120deg, rgba(14,76,135,0.35) 60%, rgba(0,38,58,0.25) 100%);
  z-index: 2;
}
.article-card-content {
  z-index: 3;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
}
.article-card-text {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-10%);
  padding: 1rem;
}
.btn-icon {
  background: rgba(0,38,58,0.7);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C9E6FF;
  transition: background 0.2s, color 0.2s;
}
.btn-icon.bookmarked {
  color: #0E4C87;
}
.btn-icon.bookmarked i {
  color: #67DBB1;
}
.btn-icon:hover {
  background: #C9E6FF;
  color: #00263A;
}
</style> 