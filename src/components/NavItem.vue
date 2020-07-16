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
      default: false
    }
  },
  computed: {
    _linkStyle() {
      return ["vc-link"].concat(this.linkClass);
    }
  },
  render(h) {
    let { type, value, url } = this.item;
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
    } else if (this.useRouter) {
      link = "router-link";
      option.props.to = url;
    } else {
      link = "a";
      option.attrs.href = url;
    }
    if (type == "img") {
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
  padding: 3px;
  font-size: 12px;
  color: #999;
}
span.vc-link {
  color: #222;
}
a.vc-link:hover {
  color: #fe8c00;
}
.vc-link img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
</style>