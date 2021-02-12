<template>
  <div class="swiper-item" :style="{'-webkit-transform':imgLateX, 'width':width+'px', 'height':height+'px'}">
    <img :src="img" :style="{'width':width+'px', 'height':height+'px'}"/>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
  props: {
    img: {
      type: String,
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    },
    trans_width: {
      type: Number,
      default: 100
    },
  },
  data() {
    return {}
  },
  computed: {
    imgLateX() {
      return 'translate3d(' + (this.trans_width) + 'px,0,0)'
    }
  }
}
</script>

<style lang="css">
.swiper-item {
  position: absolute;
  top: 0;
  left: 0;
}

.swiper-item img {
  filter: alpha(opacity=240)
}
</style>
