<template>
  <div class="events">
    <img alt="Vue logo" src="../assets/logo.png" />
    <event-container :events="events" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventContainer from '@/components/EventContainer.vue';
import EventService from '@/services/EventService.js';

export default {
  data() {
    return {
      events: [],
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => (this.events = response.data))
      .catch((error) => console.log(error));
  },
  name: 'HomeView',
  components: {
    EventContainer,
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
