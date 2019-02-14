<template>
  <div class="post">
    <h1>Post</h1>
    <post-list/>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'

export default {
  name: 'post',
  components: {
    PostList
  }
}
</script>
