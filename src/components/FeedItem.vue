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
  &__icon {
    img {
      width: 40px;
    }
  }

  &__avatar {
    img {
      width: 40px;
    }
  }
}
</style>
