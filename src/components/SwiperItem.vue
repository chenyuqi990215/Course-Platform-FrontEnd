<template>
  <div class="swiper-item" :style="{'-webkit-transform':imgLateX, 'width':width+'px', 'height':height+'px'}">
    <transition name="fade">
      <div class="swiper-inter-item">
        <span class="swiper-item-title">{{obj.name}}</span>
        <img :src="obj.url" :style="{'width':width+'px', 'height':height+'px'}" v-if="show"/>
      </div>
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

.swiper-inter-item {
  position: relative;
}

.swiper-item-title{
  position:absolute;
  left:-250px;
  top:148px;
  max-width: 200px;
  font-weight:700;
  font-size:30px;
  color:rgb(200,200,200);
  line-height:40px;
  text-shadow:0 2px 2px rgba(0,0,0,.4)
}
</style>
