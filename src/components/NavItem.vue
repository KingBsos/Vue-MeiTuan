<script>
export default {
  props: {
    item: {
      type: Object,
      require: true
    },
    linkClass: {
      type: [String, Array]
    },
    useRouter: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    _useRouter() {
      return this.$router ? (this.useRouter ? true : false) : false;
    },
    _linkStyle() {
      return ["vc-link"].concat(this.linkClass);
    }
  },
  render(h) {
    let { tag, value, url } = this.item;
    let link = "";
    let childElements = [];
    let option = {
      attrs: {},
      props: {},
      domProps: {},
      class: this._linkStyle
    };
    if (!url) {
      link = "span";
    } else if (this._useRouter) {
      link = "router-link";
      option.props.to = url;
    } else {
      link = "a";
      option.attrs.href = url;
    }
    if (tag == "img") {
      childElements.push(
        h("img", {
          attrs: {
            src: value
          }
        })
      );
    } else {
      option.domProps.innerHTML = value;
    }
    return h(link, option, childElements);
  }
};
</script>

<style scoped>
.vc-link {
  display: inline-block;
  padding: 2px;
  font-size: 12px;
  color: #999;
}
.vc-link:hover {
  color: #fe8c00;
}
.vc-link img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
</style>