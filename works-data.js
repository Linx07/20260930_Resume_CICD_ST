// 第 5 课：作品数据。
//
// 每个对象代表一个作品。**数据和界面完全分开**——
// 想加一个作品，只在这里加一个对象，HTML 一个字都不用动。
// 这是本课最重要的一个观念。
//
// 六个字段各管一件事：
//   title        卡片标题
//   description  一句话说明
//   image        封面图路径
//   url          点击去哪
//   year         年份，用来排序和显示右上角徽标
//   tags         标签数组，用来筛选。一个作品可以有多个标签
//
// 【维护提示】改完这里，index.html 里那份"不写 JavaScript 也要能看"的静态卡片
// 最好一起改，两边保持一致。
const works = [
  {
    title: '个人主页 · 作品集',
    description: 'HTML5 结构、CSS Grid 响应式布局、自动部署。',
    image: 'assets/cover-homepage.svg',
    url: 'https://linx07.github.io/p1-lesson-03-0120251157/',
    year: 2026,
    tags: ['前端', '部署'],
  },
  {
    title: '垃圾图像识别分类',
    description: '数据集训练、模型调用与摄像头实时识别。',
    image: 'assets/cover-trash.svg',
    url: 'https://github.com/Linx07',
    year: 2026,
    tags: ['Python', 'AI'],
  },
  {
    title: 'ESP32 远程灯控',
    description: 'MQTT 上云，网页端下发指令控制设备。',
    image: 'assets/cover-esp32.svg',
    url: 'https://github.com/Linx07',
    year: 2026,
    tags: ['物联网', '前端'],
  },
  {
    title: 'Flask 多页应用',
    description: '路由、表单与多页面组织。',
    image: 'assets/cover-flask.svg',
    url: 'https://github.com/Linx07',
    year: 2026,
    tags: ['Python', '后端'],
  },
]
