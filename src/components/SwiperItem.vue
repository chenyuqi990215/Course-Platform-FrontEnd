<template>
  <div class="swiper-item" :style="{'-webkit-transform':imgLateX, 'width':width+'px', 'height':height+'px'}">
    <transition name="fade">
      <img :src="obj.url" :style="{'width':width+'px', 'height':height+'px'}" v-if="show"/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
  props: {
    obj: {
      type: Object,
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
    show: {
      type: Boolean,
      default: true
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
  filter: grayscale(50%);
}

.fade-enter-active, .fade-leave-active
{
  -webkit-transition:opacity 1s;
  transition:opacity 1s
}
.fade-enter,.fade-leave-to
{
  opacity:0
}
</style>
