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
  render(h) {
    let { type, value, url } = this.item;
    let link = "";
    let childElements = [];
    let option = {
      attrs: {},
      props: {},
      domProps: {},
      class: this.linkClass
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
</style>