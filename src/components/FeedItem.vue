<template>
  <div class="feed-item">
    <div class="feed-item__icon">
      <img src="../assets/icons/review.svg"/>
    </div>
    <div class="feed-item__content">
      <div class="feed-item__info">
        <div class="feed-item__avatar">
          <img src="https://pbs.twimg.com/profile_images/588728470622117889/EWST87ln_bigger.jpg" alt="yoner">
        </div>
        <h3 class="feed-item__title">
          <a href="#">yoner5k</a> reviewed <a href="#">Pork Chops and Potatoes</a>
        </h3>
        <h4 class="feed-item__timestamp">
          12 minutes ago
        </h4>
      </div>
      <div class="feed-item__star-rating">
        <img src="../assets/icons/star.svg">
        <img src="../assets/icons/star.svg">
        <img src="../assets/icons/star.svg">
        <img src="../assets/icons/star.svg">
        <img src="../assets/icons/star.svg">
      </div>
      <div class="feed-item__text">
        <p>Nisi aliqua sunt exercitation dolore duis nulla. Ad laborum do ut cupidatat dolor sit enim excepteur. Ipsum qui in enim aliquip id. Nisi aliqua sunt exercitation dolore duis nulla. Ad laborum do ut cupidatat dolor sit enim excepteur. Ipsum qui in enim aliquip id. Nisi aliqua sunt exercitation dolore duis nulla. Ad laborum do ut cupidatat dolor sit enim excepteur. Ipsum qui in enim aliquip id.</p>
      </div>
      <div class="feed-item__action-links">
        <ul>
          <li><a href="#">Like</a></li>
          <li><a href="#">Reply</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.feed-item {
  display: grid;
  grid-template-columns: 40px auto;
  grid-gap: 10px;

  &__info {
    display: grid;
    grid-template-columns: 40px auto;
    grid-gap: 10px;
  }

  &__icon {
    img {
      width: 40px;
    }
  }

  &__title {
    font-size: 14px;
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

  &__star-rating {
    img {
      width: 15px;
      margin-right: 3px;
    }
  }
}
</style>
