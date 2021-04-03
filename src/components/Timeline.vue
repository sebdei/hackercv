<template>
  <section>
    <div id="line" />
    <div v-for="(post, index) in posts" :key="post.title" class="row mb-5">
      <div v-if="index % 2 === 0" class="row">
        <div class="col-sm-5 text-end">
          <TimelinePost :title="post.title" :text="post.text" />
        </div>
        <div class="col-sm-2 text-center rounded-circle border border-dark date">
          {{ post.year }}
        </div>
        <div class="col-sm-5" />
      </div>
      <div v-else class="row">
        <div class="col-sm-5" />
        <div class="col-sm-2 text-center rounded-circle border border-dark date">
          {{ post.year }}
        </div>
        <div class="col-sm-5">
          <TimelinePost :title="post.title" :text="post.text" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TimelinePost from './TimelinePost'
import posts from '@/ressources/components/timeline.json'

export default {
  name: 'Timeline',
  components: {
    TimelinePost
  },
  computed: {
    posts: function () {
      return posts
    }
  }
}
</script>
<style scoped>
#line {
  left: calc(50% - 10px); /*TODO: fix scrollbar extra width*/
  position: absolute;
  width: 3px;
  height: 500px; /*TODO: calculate*/
  background: #c7c7c7;
  content: '';
  z-index: -1;
}
.date {
  display: inline-block;
  margin: auto;
  width: 80px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
