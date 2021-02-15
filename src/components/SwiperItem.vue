<template>
  <div class="swiper-item" :style="{'-webkit-transform':imgLateX, 'width':width+'px', 'height':height+'px'}">
    <transition name="fade">
      <div class="swiper-inter-item">
        <span class="swiper-item-title">{{obj.name}}</span>
        <span class="swiper-item-university" v-if="obj.univerityList.length > 0">{{obj.univerityList.split('；')[0]}}</span>
        <a :href="obj.url">
          <img :src="obj.cover" :style="{'width':width+'px', 'height':height+'px'}" v-if="show"/>
        </a>
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
  z-index: 1;
}

.fade-enter-active, .fade-leave-active
{
  -webkit-transition:opacity 2s;
  transition:opacity 2s
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
  right:40px;
  top:250px;
  max-width: 300px;
  font-weight:700;
  font-size:25px;
  color:rgb(100,100,100);
  line-height:40px;
  text-shadow:0 2px 2px rgba(0,0,0,.4);
  z-index: 2;
}
.swiper-item-university{
  position:absolute;
  background-color: rgb(143, 161, 205);
  border: 5px solid rgb(143, 161, 255);
  color: white;
  border-radius: 5px;
  right:40px;
  top:210px;
  max-width: 300px;
  font-weight:700;
  font-size:15px;
  z-index: 2;
}
</style>
