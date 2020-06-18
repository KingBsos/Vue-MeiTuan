
<script>
// itme: {
//         [type: String],
//         value: String,
//         [url: String]
//     }
export default {
    props: {
        item: {
            type: Object,
            require: true
        },
        linkStyle: {
            type: String
        }
    },
    computed: {
        useRouter(){
            return this.$router ? true : false;
        }
    },
    render(h){
        let {tag, value, url} = this.item;
        let link = '';
        let childElement = null;
        let option = {
            attrs: {},
            props: {},
            domProps: {},
            class: ['vc-link', this.linkStyle]
        };
        if(tag == 'img') {
            childElement = h('img', {
                attrs: {
                    src: value
                }
            });
        } else {
            option.domProps.innerHTML = value;
        }
        if(!url) {
            link = 'span';
        } else if(this.useRouter) {
            link = 'router-link';
            option.props.to = url;
        } else {
            link = 'a';
            option.attrs.href = url;
        }
        return h(link, option, [childElement]);
    }
}
</script>

<style>
@import '../assets/css/component.css';
</style>