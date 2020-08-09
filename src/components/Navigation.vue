<template>
  <div>
    <ul :class="_navClass">
      <li
        v-for="(item,index) in _navList"
        :key="index"
        :class="__itemClass(index, _navList)"
      >
        <i v-if="frontSymbolClass" :class="__frontSymbolClass(index)"></i>
        <template v-for="(item2,index2) in item.value">
          <NavItem :key="index2" :item="item2" :useRouter="useRouter" :linkClass="linkClass" 
          v-on="__itemEvent({index,item: item2})"/>
          <span
            v-if="spacer && index2 < item.value.length - 1"
            :key="-index2 - 1"
            :class="spacerClass || linkClass"
          >{{ spacer }}</span>
        </template>
        <span v-if="postSymbol" :class="_postSymbolClass">{{ postSymbol }}</span>
        <div v-if="hasChildMap[index]" :class="_childNavClass">
          <slot :name="index" :childNav="item.childNav" :current="item.value">
            <Navigation
              v-for="(item,index) in item.childNav"
              :key="index"
              :useRouter="useRouter"
              :vertical="true"
              :navList="item"
              :itemClass="_childItemClass"
              :linkClass="_childLinkClass"
            />
          </slot>
        </div>
        <slot v-if="currentIndex === index" name="mark"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  name: "Navigation",
  components: {
    NavItem,
  },
  props: {
    navList: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
    },
    useRouter: {
      type: Boolean,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    multiLine: {
      type: Boolean,
      default: false,
    },
    spacer: {
      type: String,
    },
    postSymbol: {
      type: String,
    },
    titleClass: {
      type: [String, Array],
    },
    tailClass: {
      type: [String, Array],
    },
    itemClass: {
      type: [String, Array],
    },
    linkClass: {
      type: [String, Array],
    },
    spacerClass: {
      type: [String, Array],
    },
    frontSymbolClass: {
      type: [String, Array],
    },
    extraFrontSymbolClass: {
      type: Array,
      default: () => [],
    },
    postSymbolClass: {
      type: String,
    },
    childNavClass: {
      type: [String, Array],
    },
    childItemClass: {
      type: [String, Array],
    },
    childLinkClass: {
      type: [String, Array],
    },
    itemEvent: {
      type: Object,
    },
  },
  computed: {
    _navList() {
      return this.navList.map((item) => {
        let { type, value, url, childNav, ...obj } = item;
        if (!Array.isArray(value)) value = [{ type, value, url }];
        if (childNav && !Array.isArray(childNav[0])) childNav = [[...childNav]];
        return { value, childNav, ...obj };
      });
    },
    _navClass() {
      let vertical = this.vertical ? "vc-vertical" : "";
      let multiLine = this.multiLine ? "vc-multi-line" : "";
      return ["vc-nav", vertical, multiLine];
    },
    _itemClass() {
      let multiLine = this.multiLine ? "vc-multi-line" : "";
      return ["vc-nav-item"].concat(multiLine, this.itemClass);
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
      return this.navList.map((item) => {
        return item.childNav && item.childNav.length != 0 ? true : false;
      });
    },
  },
  methods: {
    __itemClass(index, arr) {
      let base = []
        .concat(this._itemClass)
        .concat(this.hasChildMap[index] ? "has-child" : "");
      if (index == 0 && this.titleClass) return base.concat(this.titleClass);
      if (index == arr.length - 1 && this.tailClass)
        return base.concat(this.tailClass);
      return base;
    },
    __frontSymbolClass(index) {
      if (this.frontSymbolClass)
        return []
          .concat(this.frontSymbolClass)
          .concat(this.extraFrontSymbolClass[index]);
    },
    __itemEvent(obj) {
      let listener = this.itemEvent;
      let newListener = {};
      for (let i in listener) {
        Object.defineProperty(newListener, i, {
          value: function (event) {
            listener[i](event, this, obj);
          },
          enumerable: true,
        });
      }
      return newListener;
    },
  },
};
</script>

<style scoped>
.vc-vertical {
  flex-direction: column;
}
.vc-multi-line {
  flex-wrap: wrap;
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
.vc-nav-item:not(:hover) .vc-child-nav {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  opacity: 0;
}
</style>