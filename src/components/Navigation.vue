<template>
  <div>
    <ul class="vc-ul" :style="{flexDirection: direction}">
      <li v-for="(item,index) in navList" :key="index" :class="['vc-nav', navStyle]">
        <NavItem
          v-if="(!autoHead || index != 0) && (item.beforeEach || beforeEach)"
          :item="item.beforeEach || {value: beforeEach}"
          :class="['vc-before-each', beforeEachStyle]"
        />
        <div class="center-each">
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
        </div>
        <NavItem
          v-if="(!autoHead || index != 0) && (item.afterEach || afterEach)"
          :item="item.afterEach || {value: afterEach}"
          linkStyle="afterEachStyle"
        />
        <div v-if="$scopedSlots[index]" :class="['vc-child-navigation',childStyle]">
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
    headStyle: {
      type: String,
      default: "vc-head-link-style"
    },
    childStyle: {
      type: String,
      default: "vc-child-style"
    },
    spacerStyle: {
      type: String
    },
    beforeEachStyle: {
      type: String
    },
    afterEachStyle: {
      type: String,
      default: "vc-after-each"
    }
  },
  methods: {
    linkStyleClass(name) {
      if (this.autoHead && name == 0) {
        return this.headStyle;
      } else if (this.$scopedSlots[name]) {
        return [this.linkStyle];
      } else {
        return this.linkStyle
          ? [this.linkStyle, this.linkStyle + "-restore"]
          : this.linkStyle;
      }
    }
  },
  mounted() {
    console.log("nav:", this.navList);
  }
};
</script>

<style>
@import "../assets/css/component.css";
</style>