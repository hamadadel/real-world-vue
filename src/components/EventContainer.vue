<template>
  <div class="container">
    <div v-for="event in events" :key="event.id">
      <event-card :event="event" />
    </div>
  </div>
</template>

<script>
import EventCard from './EventCard.vue';
export default {
  name: 'EventContainer',
  components: {
    EventCard,
  },
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style></style>
