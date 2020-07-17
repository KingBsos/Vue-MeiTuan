import Mock from 'mockjs';

Mock.mock(/.*/, {
    'topNav': [
        {
            value: '我的美团',
            url: '#1',
            childNav: [[
                {
                    value: '我的订单',
                    url: '#22'
                },
                {
                    value: '我的收藏',
                    url: '#22'
                },
                {
                    value: '抵用券',
                    url: '#22'
                },
                {
                    value: '账户设置',
                    url: '#22'
                }
            ]]
        },
        {
            value: '手机APP',
            url: '#1'
        },
        {
            value: '商家中心',
            url: '#1',
            childNav: [...Mock.mock({ 'data|3-8': [{ 'value': '@cword(4,6)', 'url': '@url' }] }).data]
        }, {
            value: '美团规则',
            url: '#1',
            childNav: [...Mock.mock({ 'data|3-5': [{ 'value': '@cword(4,6)', 'url': '@url' }] }).data]
        },
        {
            value: '网站导航',
            url: '#1',
            childNav: [
                [...Mock.mock({ 'data|3-8': [{ 'value': '@cword(2,5)', 'url': '@url' }] }).data],
                [...Mock.mock({ 'data|3-8': [{ 'value': '@cword(2,5)', 'url': '@url' }] }).data],
                [...Mock.mock({ 'data|3-8': [{ 'value': '@cword(2,5)', 'url': '@url' }] }).data],
                [...Mock.mock({ 'data|3-8': [{ 'value': '@cword(2,5)', 'url': '@url' }] }).data],
                [...Mock.mock({ 'data|3-8': [{ 'value': '@cword(2,5)', 'url': '@url' }] }).data],
                [...Mock.mock({ 'data|3-8': [{ 'value': '@cword(2,5)', 'url': '@url' }] }).data],
                [...Mock.mock({ 'data|5': [{ 'type': 'img', 'value': '@dataImage(50x50)', 'url': '@url' }] }).data]
            ]
        }
    ],
    'allNav|16': [
        {
            'value|3': [
                {
                    'value': '@cword(2,4)',
                    'url': '@url'
                }
            ],
            'childNav|3': [
                [...Mock.mock({
                    'data|20': [
                        {
                            'value': '@cword(2,4)',
                            'url': '@url'
                        }
                    ]
                }).data]
            ]
        }
    ],
    'rightTopNav|6': [
        {
            'value': '@cword(4)',
            'url': '@url'
        }
    ],
    'headImg': 'https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg',
    'carouselPics|5': ['@dataImage(550x240)'],
    'advertPics': ['@dataImage(230x165)', '@dataImage(230x165)', '@dataImage(150x240)', '@dataImage(150x165)'],
    'catEyeMovieNav': [{'value': '猫眼电影'}, {'value': '即将上映'}, {'value': '全部 >'}],
    'famousHostelNav': [{'value': '推荐名宿'}, ...Mock.mock({'data|8': [{'value': '@city'}]}).data, {'value': '全部 >'}],
    'guessYouLikeNav': [{'value': '猜你喜欢'}, {'value': '为你甄选最适合的'}, {'value': '全部 >'}]
});