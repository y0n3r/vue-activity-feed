<template>
  <div class="feed">
    <loading v-if="items.length === 0"/>
    <feed-item
      v-for="item in items"
      :key="item.id"
      :counts="item.counts"
      :followed-name="item.followedName"
      :followed-profile-url="item.followedProfileUrl"
      :item-text="item.text"
      :member-avatar="item.memberAvatar"
      :member-name="item.memberName"
      :member-profile-url="item.memberProfileUrl"
      :photo="item.photo"
      :rating="item.rating"
      :recipe-title="item.recipeTitle"
      :recipe-url="item.recipeUrl"
      :timestamp="item.submitted"
      :type="item.type"
      :url="item.url"
    />
    <div 
      v-if="error" 
      class="feed__error-message">
      <h2 class="feed__error-message__title">Uh Oh!</h2>
      <p>There appears to have been an error.</p>
    </div>
  </div>
</template>

<script>
import FeedItem from '@/components/FeedItem';
import Loading from '@/components/Loading';
import API from '@/constants/api';
import http from '@/api';
import * as log from 'loglevel';
import { mapState } from 'vuex';

export default {
  name: 'feed',
  components: {
    FeedItem,
    Loading
  },
  data() {
    return {
      error: false,
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
      if (this.error) {
        this.error = false;
      }
    },
    async fetchItems() {
      try {
        let response = await http({
          url: API.URI[this.activeFilter],
          params: {
            pn: this.page,
            size: 20
          }
        });

        response.data.data.items.forEach(item => {
          this.items.push(item);
        });
      } catch (error) {
        this.error = true;
        log.error(`Something went wrong! ${error}`);
      }
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
