<template>
  <div class="event-card" v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <p v-else>Loading Event details</p>
</template>

<script>
import EventService from '@/services/EventService';
export default {
  props: ['id'],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.event(this.id) //this.$route.params.id
      .then((response) => (this.event = response.data))
      .catch((error) => console.log(error));
  },
};
</script>
