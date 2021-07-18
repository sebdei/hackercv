/* Inspired by https://www.w3schools.com/howto/howto_css_timeline.asp */
<template>
  <section id="timeline">
    <!-- <div id="line" /> -->
    <div v-for="(item, index) in items" :key="item.title" class="mb-5">
      <div v-if="index % 2 === 0" class="timeline-post post-left">
        <TimelinePost :title="item.title" :text="item.text" />
      </div>

      <div v-else class="timeline-post post-right">
        <TimelinePost :title="item.title" :text="item.text" />
      </div>
    </div>
  </section>
</template>

<script>
import api from '@/service/api'

import TimelinePost from './TimelinePost'

export default {
  name: 'Timeline',
  components: {
    TimelinePost
  },
  data () {
    return {
      items: null
    }
  },   
  mounted () {
    this.setItems()
  },
  methods: {
    setItems: async function () {
      this.items = await api.getItems('timelineEntries')
    }
  }
}
</script>

<style scoped lang="scss">
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
  background: $subtle;
  content: '';
  z-index: 1;
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

/* Timeline dots  */
.timeline-post::after {
  position: absolute;
  content: '';
  right: -17px;
  background-color: $background;
  border: 4px solid $accent;
  top: 15px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  z-index: 2;
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
