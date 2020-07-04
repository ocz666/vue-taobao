<template>
    <svg :class="iconClass" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
export default {
  name:"svgIcon",
  props:["icon","className"],
  data(){
    return {
    }
  },
  computed: {
    iconName: {
        get: function() {
          return `#icon-${this._props.icon}`;
      }
    },
    iconClass: {
        get: function() {
          if(this._props.className){
            return `svg-icon ${this._props.className}`;
          }else{
            return `svg-icon`;
          }
      }
    },
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
.svg-icon{
  width: 10px;
  height: 10px;
}
</style>
