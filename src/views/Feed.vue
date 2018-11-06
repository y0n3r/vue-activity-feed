<template>
  <div class="feed">
    <loading v-if="items.length === 0"/>
    <feed-item
      v-for="item in items"
      :key="item.id"
      :type="item.type"
      :member-avatar="item.memberAvatar"
      :member-name="item.memberName"
      :member-profile-url="item.memberProfileUrl"
    />
  </div>
</template>

<script>
import FeedItem from '@/components/FeedItem';
import Loading from '@/components/Loading';
import API from '@/constants/api';
import http from '@/api';
import { mapState } from 'vuex';

export default {
  name: 'feed',
  components: {
    FeedItem,
    Loading
  },
  data() {
    return {
      items: []
    };
  },
  computed: {
    ...mapState([
      'activeFilter',
      'page'
    ])
  },
  created() {
    this.fetchItems();
  },
  methods: {
    clearFeed() {
      this.items = [];
    },
    async fetchItems() {
      let response = await http({
        url: API[this.activeFilter],
        params: {
          pn: this.page,
          size: 20
        }
      });

      response.data.data.items.forEach(item => {
        this.items.push(item);
      });
    }
  },
  watch: {
    $route() {
      this.clearFeed();
      this.fetchItems();
    }
  }
};
</script>
