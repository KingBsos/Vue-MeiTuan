import Mock from 'mockjs';

Mock.mock(/.*/, {
    'headImg': 'https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg',
    'carouselPics|5': ['@dataImage(550x240)'],
    'advertPics': ['@dataImage(230x165)', '@dataImage(230x165)', '@dataImage(150x240)', '@dataImage(150x165)']
});