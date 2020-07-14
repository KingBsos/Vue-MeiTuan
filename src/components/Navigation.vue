<template>
  <div>
    <ul :class="_navClass">
      <li v-for="(item,index) in navList" :key="index" :class="__itemClass(index)">
        <i v-if="frontSymbolClass" :class="__frontSymbolClass(index)"></i>
        <NavItem v-if="typeof item.value == 'string'" :item="item" :linkClass="linkClass"></NavItem>
        <template v-else v-for="(item2,index2) in item.value">
          <NavItem :key="index2" :item="item2" :linkClass="linkClass" />
          <span
            v-if="index2 < item.value.length - 1"
            :key="-index2 - 1"
            :class="spacerClass || linkClass"
          >{{ spacer }}</span>
        </template>
        <span v-if="postSymbol" :class="_postSymbolClass">{{ postSymbol }}</span>
        <div v-if="hasChildMap[index]" :class="_childNavClass">
          <slot :name="index" :childNav="item.childNav">
            <Navigation
              :vertical="true"
              :navList="item.childNav"
              :itemClass="_childItemClass"
              :linkClass="_childLinkClass"
            />
          </slot>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  name: "Navigation",
  components: {
    NavItem
  },
  props: {
    navList: {
      type: Array,
      require: true
    },
    vertical: {
      type: Boolean,
      default: false
    },
    multiLine: {
      type: Boolean,
      default: false
    },
    spacer: {
      type: String,
      default: "/"
    },
    postSymbol: {
      type: String
    },
    itemClass: {
      type: [String, Array]
    },
    linkClass: {
      type: [String, Array]
    },
    spacerClass: {
      type: [String, Array]
    },
    frontSymbolClass: {
      type: [String, Array],
    },
    extraFrontSymbolClass: {
      type: Array,
      default: () => []
    },
    postSymbolClass: {
      type: String
    },
    childNavClass: {
      type: [String, Array]
    },
    childItemClass: {
      type: [String, Array]
    },
    childLinkClass: {
      type: [String, Array]
    }
  },
  computed: {
    _navClass() {
      let vertical = this.vertical ? "vc-vertical" : "";
      let multiLine = this.multiLine ? "vc-multi-line" : "";
      return ["vc-nav", vertical, multiLine];
    },
    _itemClass() {
      return ["vc-nav-item"].concat(this.itemClass);
    },
    _postSymbolClass() {
      return this.postSymbolClass
        ? this.postSymbolClass
        : ["vc-nav-post-symbol"].concat(this.linkClass);
    },
    _childNavClass() {
      let position = this.vertical ? "vc-child-nav-position-column" : "";
      return ["vc-child-nav"].concat(position, this.childNavClass);
    },
    _childItemClass() {
      return ["vc-nav-item"].concat(this.childItemClass);
    },
    _childLinkClass() {
      return this.childLinkClass || this.linkClass;
    },
    hasChildMap() {
      return this.navList.map(item => {
        return item.childNav && item.childNav.length != 0 ? true : false;
      });
    }
  },
  methods: {
    __itemClass(index) {
      return this._itemClass.concat(this.hasChildMap[index] ? "has-child" : "");
    },
    __frontSymbolClass(index) {
      if(this.frontSymbolClass)
      return [].concat(this.frontSymbolClass).concat(this.extraFrontSymbolClass[index]);
    }
  }
};
</script>

<style scoped>
.vc-vertical {
  flex-direction: column;
}
.vc-multi-line {
  flex-wrap: nowrap;
}
.vc-nav {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  z-index: 0;
}
.vc-nav-item {
  position: relative;
  display: flex;
  align-items: center;
}
.vc-nav-post-symbol {
  margin: 0 5px;
  margin-left: auto;
}
.vc-child-nav {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  transition: opacity 0.3s;
  border: 1px solid rgb(206, 206, 206);
  box-shadow: 0px 0px 2px rgb(206, 206, 206);
  background-color: #fff;
  top: 100%;
}
.vc-child-nav-position-column {
  left: 100%;
  top: 0;
}
.vc-nav-item:hover .vc-child-nav {
  opacity: 1;
  width: auto;
  height: auto;
}
</style>