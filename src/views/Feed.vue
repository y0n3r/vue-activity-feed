<template>
  <div class="feed">
    <loading v-if="items.length === 0"/>
  </div>
</template>

<script>
import Loading from '@/components/Loading';
import API from '@/constants/api';
import http from '@/api';

export default {
  name: 'feed',
  data() {
    return {
      items: []
    }
  },
  components: {
    Loading
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {

    }
  },
  computed: {
    
  }
};
</script>
