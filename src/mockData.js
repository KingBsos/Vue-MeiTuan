import Mock from 'mockjs';

Mock.mock(/.*/, {
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
    'advertPics': ['@dataImage(230x165)', '@dataImage(230x165)', '@dataImage(150x240)', '@dataImage(150x165)']
});