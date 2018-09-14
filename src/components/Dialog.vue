<template>
  <div class="dialog">
    <div class="dialog-nav left" @click="pre">
      <svg t="1536898769350" class="icon" style="display:inline-block" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9055" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M510.720867 63.996546c-247.703545 0-448.505897 200.803375-448.505897 448.505897s200.803375 448.505897 448.505897 448.505897 448.505897-200.803375 448.505897-448.505897S758.424412 63.996546 510.720867 63.996546zM628.282377 641.489166c14.632255 14.632255 14.632255 38.356586 0 52.988842l-12.761652 12.761652c-14.632255 14.632255-38.356586 14.632255-52.988842 0L391.944693 536.65247c-14.632255-14.632255-14.632255-38.356586 0-52.988842l170.58719-170.58719c14.632255-14.632255 38.356586-14.632255 52.988842 0l12.761652 12.761652c14.632255 14.632255 14.632255 38.355563 0 52.988842l-131.331118 131.331118L628.282377 641.489166z" p-id="9056" fill="#fff"></path></svg>
    </div>
    <div class="dialog-wrap">
      <div class="dialog-head">
        <div class="title">
          <span v-text="title"></span>
        </div>
        <div class="close">
          <span @click="close">
            <svg t="1536898697077" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4392" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><defs></defs><path d="M512 0C229.222 0 0 229.222 0 512s229.222 512 512 512 512-229.222 512-512S794.752 0 512 0z m218.778 681.78c13.516 13.516 13.516 35.48 0 48.998s-35.482 13.516-48.999 0L512 560.998l-169.78 169.78c-13.516 13.516-35.48 13.516-48.998 0s-13.516-35.482 0-48.999L463.002 512l-169.78-169.78c-13.516-13.516-13.516-35.48 0-48.998s35.482-13.516 48.999 0L512 463.002l169.78-169.78c13.516-13.516 35.48-13.516 48.998 0s13.516 35.482 0 48.999L560.998 512l169.78 169.78z" fill="#fff" p-id="4393"></path></svg>
          </span>
        </div>
      </div>
      <div class="dialog-body">
        <div class="content">
          <div class="main">
            <slot name="main"></slot>
          </div>
        </div>


      </div>
      <div class="dialog-foot">
        <div class="foot-content">
            <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <div class="dialog-nav right" @click="next">
      <svg t="1536898795504" class="icon" style="display:inline-block" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11409" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M512 962.56C262.68672 962.56 61.44 760.35072 61.44 512S263.68 61.44 512 61.44c248.35072 0 450.56 202.20928 450.56 450.56S761.32352 962.56 512 962.56z m159.0272-475.11552L447.21152 262.66624c-6.8608-6.8608-15.69792-9.8304-24.54528-9.8304a34.37568 34.37568 0 0 0-24.53504 58.91072l200.27392 200.2432-199.2704 197.30432c-13.75232 13.75232-13.75232 35.34848 0 48.10752 13.73184 13.73184 35.328 13.73184 48.09728 0L671.0272 535.56224c6.8608-6.8608 9.80992-14.72512 9.80992-24.54528 0-7.85408-2.93888-16.6912-9.80992-23.57248z" p-id="11410" fill="#fff"></path></svg>
    </div>
  </div>
</template>

<script>
//可能要针对移动端做些处理
export default{
  props:{
    title: {
      type: String,
      default: "hello"
    },
    nav:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    close(){

    },
    pre(){
      this.$emit('pre')
    },
    next(){
      this.$emit('next')
    }
  }
}
</script>

<style lang="stylus">
@import '~@/common/css/base'
.dialog
  position: fixed
  z-index: 100
  top: 0
  right: 0
  bottom: 0
  left: 0
  display: flex
  justify-content: space-around
  align-items: center
  background: $g-black-op
  .dialog-nav
    &.left
      order: 1
    &.right
      order: 3
  .dialog-wrap
    order: 2
    width: 70%
    height: auto
    .dialog-head
      display: flex
      justify-content: space-between
      .close
        color: $white
    .dialog-body
      width: 100%
      height: 0
      padding-bottom: 56.2%
      position: relative
      display: flex
      .content
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        overflow: hidden

    .dialog-foot
      width: 100%
      height: 10px
      background: $white
</style>
