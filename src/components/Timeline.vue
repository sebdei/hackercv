/* Inspired by https://www.w3schools.com/howto/howto_css_timeline.asp */
<template>
  <section id="timeline">
    <!-- <div id="line" /> -->
    <div v-for="(post, index) in posts" :key="post.title" class="mb-5">
      <div v-if="index % 2 === 0" class="timeline-post post-left">
        <TimelinePost :title="post.title" :text="post.text" />
      </div>
      <div v-else class="timeline-post post-right">
        <TimelinePost :title="post.title" :text="post.text" />
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
#timeline {
  position: relative;
  /* max-width: 1200px; */
  /* margin: 0 auto; */
}

#timeline::after {
  left: 50%; /*TODO: fix scrollbar extra width*/
  position: absolute;
  width: 4px;
  top: 0;
  bottom: 0;
  background: #c7c7c7;
  content: '';
  z-index: -1;
}

.timeline-post {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}


/* Place the container to the right */
.post-right {
  left: 50%;
}

/* The dots  */
.timeline-post::after {
  position: absolute;
  content: '';
  right: -17px;
  background-color: white;
  border: 4px solid #c90e00;
  top: 15px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  z-index: 1;
}

.post-right::after {
  left: -16px;
}

@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  #timeline::after {
    left: 31px;
  }

  .timeline-post {
    width: 100%;
    padding-left: 70px;
  }

  .timeline-post::after {
    left: 16px;
  }

  .post-left, .post-right {
    left: 0;
  }
}

</style>
