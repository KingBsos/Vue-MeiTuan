<template>
  <div>
    <ul class="vc-ul" :style="{flexDirection: direction,flexWrap}">
      <li v-for="(item,index) in navList" :key="index" :class="['vc-nav', navStyle]">
        <NavItem
          v-if="autoHead && index == 0"
          :item="item"
          :linkStyle="['vc-head-link-style'].concat(headStyle)"
        />
        <template v-else>
          <span
            :class="['vc-before-each'].concat(beforeEachStyle)"
            v-if="item.beforeEach || beforeEach"
            v-html="item.beforeEach.value || beforeEach"
          />
          <NavItem
            v-if="typeof item.value == 'string'"
            :item="item"
            :linkStyle="linkStyleClass(index)"
          />
          <template v-else v-for="(item2,index2) in item.value">
            <NavItem :key="index2" :item="item2" :linkStyle="linkStyleClass(index)" />
            <NavItem
              v-if="index2 != item.value.length-1"
              :key="index2-2*item.value.length"
              :item="{value: spacer}"
              :linkStyle="['vc-spacer', spacerStyle]"
            >{{ spacer }}</NavItem>
          </template>
          <span
            v-if="item.afterEach || afterEach"
            v-html="item.afterEach || afterEach"
            :class="['vc-after-each'].concat(afterEachStyle)"
          />
        </template>

        <div v-if="$scopedSlots[index]" :class="['vc-child-nav', defaultChildNavPosition, childNavStyle]">
          <slot :name="index" :childNav="item.childNav"></slot>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// navList: [
//     {
//         [type: String],
//         value: String|Array,
//         [url: String]
//     }
// ]
import NavItem from "./NavItem.vue";
export default {
  name: "Navigation",
  components: {
    NavItem
  },
  computed: {
    useRouter() {
      return this.$router ? true : false;
    },
    defaultChildNavPosition() {
      if(this.direction == 'column') {
        return 'vc-child-nav-position-column';
      } else {
        return 'vc-child-nav-position';
      }
    }
  },
  props: {
    navList: {
      type: Array,
      require: true
    },
    direction: {
      type: String,
      default: "row"
    },
    flexWrap: {
      type: String,
      default: 'nowrap'
    },
    autoHead: {
      type: Boolean,
      default: false
    },
    beforeEach: {
      type: String,
      default: ""
    },
    afterEach: {
      type: String,
      default: ""
    },
    spacer: {
      type: String,
      default: "/"
    },
    navStyle: {
      type: String
    },
    linkStyle: {
      type: String
    },
    headStyle: [String, Array],
    childNavStyle: {
      type: String
    },
    spacerStyle: {
      type: String
    },
    beforeEachStyle: [String, Array],
    afterEachStyle: [String, Array]
  },
  methods: {
    linkStyleClass(name) {
      let base = ["vc-link"];
      if (this.$scopedSlots[name]) {
        return base.concat(this.linkStyle);
      } else {
        return base.concat([this.linkStyle, this.linkStyle + "-restore"]);
      }
    }
  }
};
</script>

<style>
@import "../assets/css/component.css";
</style>