<template>
  <div class="feed">
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
    <loading v-if="loading"/>
    <gk-button
      v-if="showLoadMore" 
      text="Load More"
      @onClick="fetchItems"
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
import GkButton from '@/components/GkButton';
import Loading from '@/components/Loading';
import API from '@/constants/api';
import http from '@/api';
import * as log from 'loglevel';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'feed',
  components: {
    FeedItem,
    GkButton,
    Loading
  },
  data() {
    return {
      error: false,
      loading: true,
      items: []
    };
  },
  computed: {
    ...mapState([
      'activeFilter',
      'page',
      'results'
    ]),
    showLoadMore() {
      return this.items.length < this.results && !this.loading;
    }
  },
  created() {
    this.fetchItems();
  },
  methods: {
    ...mapMutations([
      'incrementPage',
      'resetPage',
      'updateResults'
    ]),
    clearFeed() {
      this.items = [];
      if (this.error) {
        this.error = false;
      }
    },
    async fetchItems() {
      this.loading = true;

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

        this.incrementPage();

        this.updateResults({
          results: response.data.total
        });
      } catch (error) {
        this.error = true;
        log.error(`Something went wrong! ${error}`);
      }

      this.loading = false;
    }
  },
  watch: {
    $route() {
      this.clearFeed();
      this.resetPage();
      this.fetchItems();
    }
  }
};
</script>

<style lang="scss" scoped>
.feed {
  margin: 0 auto;
  max-width: 600px;
}
</style>

