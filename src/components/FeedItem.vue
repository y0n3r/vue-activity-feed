<template>
  <div class="feed-item">
    <div class="feed-item__icon">
      <img :src="feedItemIcon"/>
    </div>
    <div class="feed-item__content">
      <div class="feed-item__info">
        <div class="feed-item__avatar">
          <img :src="memberAvatar" :alt="memberName">
        </div>
        <div>
          <h3 class="feed-item__title"><a :href="memberProfileUrl">{{ memberName }}</a> {{ action }} <a v-if="type !== 'follow'" :href="recipeUrl" v-html="recipeTitle"></a><a v-else :href="followedProfileUrl">{{ followedName }}</a></h3>
          <h4 class="feed-item__timestamp">{{ timestamp }}</h4>
        </div>
      </div>
      <div 
        class="feed-item__star-rating"
        v-if="this.isReview">
        <img v-for="n in rating" src="../assets/icons/star.svg">
      </div>
      <div 
        class="feed-item__text"
        v-if="hasText">
        <p>{{ itemText }}</p>
      </div>
      <img
        v-if="hasPhoto" 
        class="feed-item__image"
        :src="photoUrl">
      <div
        v-if="type !== 'follow'" 
        class="feed-item__action-links">
        <ul>
          <li><a href="#" class="feed-item__action-links__like"><img src="../assets/icons/like.svg">Like <span v-if="counts && counts.like > 0">({{ counts.like }})</span></a></li>
          <li><a href="#" class="feed-item__action-links__reply"><img src="../assets/icons/reply.svg">Reply</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    counts: Object,
    followedName: String,
    followedProfileUrl: String,
    itemText: String,
    memberAvatar: String,
    memberName: String,
    memberProfileUrl: String,
    photo: String,
    rating: Number,
    recipeTitle: String,
    recipeUrl: String,
    timestamp: String,
    type: String,
    url: String
  },
  computed: {
    action() {
      switch(this.type) {
        case 'creation':
          return 'added recipe';
        case 'follow':
          return 'followed';
        case 'review':
          return 'reviewed';
        case 'photo':
          return 'added a photo to';
        case 'question':
          return 'asked a question about';
        case 'tweak':
          return 'tweaked';
      }
    },
    feedItemIcon() {
      return `../assets/icons/${this.type}.svg`;
    },
    hasPhoto() {
      return typeof this.photo !== 'undefined' || this.type === 'photo';
    },
    hasText() {
      return typeof this.itemText !== 'undefined';
    },
    isReview() {
      return this.type === 'review';
    },
    photoUrl() {
      if (this.type === 'photo') {
        return this.url;
      } else {
        return this.photo;
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/import-all.scss';

.feed-item {
  display: grid;
  grid-template-columns: 40px auto;
  grid-gap: 10px;
  margin-bottom: 20px;

  &__info {
    display: grid;
    grid-template-columns: 40px auto;
    grid-column-gap: 10px;
    margin-bottom: 10px;
  }

  &__icon {
    img {
      width: 40px;
    }
  }

  &__content {
    border-bottom: 1px dashed gray;
    padding-bottom: 20px;
  }

  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 40px;
    }
  }

  &__title {
    font-size: 14px;
  }

  &__timestamp {
    font-size: 12px;
  }

  &__star-rating {
    img {
      width: 15px;
      margin-right: 3px;
      margin-bottom: 10px;
    }
  }

  &__text {
    p {
      margin: 0 0 10px 0;
    }
  }

  &__image {
    margin-bottom: 10px;
    width: 100%;
  }
  
  &__action-links {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    img {
      fill: $vue-green;
      margin-right: 5px;
      position: relative;
      top: 1px;
      width: 15px;
    }
  }
}
</style>
