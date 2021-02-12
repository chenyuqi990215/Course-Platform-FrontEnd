import Course from './Course'

function Data() {
    var obj = {};
    obj.imgList = [
        {
            'course': new Course(1, '[中英字幕]吴恩达机器学习系列课程', 'https://www.bilibili.com/video/BV164411b7dx?from=search&seid=719799793224630018',
                'https://i0.hdslb.com/bfs/archive/0aff68fab987a889d1cca8620266e66b2b03d9f2.jpg@640w_400h.webp', 'Bilibili',
                100,"","斯坦福大学","")
        },
        {
            'course': new Course(2, '李宏毅2020机器学习深度学习(完整版)国语', 'https://www.bilibili.com/video/BV1JE411g7XF?from=search&seid=719799793224630018',
                'https://i2.hdslb.com/bfs/archive/9685eae51d940ea37804efdcb5b92d57d191512c.jpg@640w_400h.webp', 'Bilibili',
                100,"","台湾大学","")
        },
        {
            'course': new Course(3, '【一起啃书】机器学习西瓜书白话解读', 'https://www.bilibili.com/video/BV17J411C7zZ?from=search&seid=719799793224630018',
                'https://i1.hdslb.com/bfs/archive/bfc2b7b0def91541903140bc532a16d9af8eebd7.jpg@640w_400h.webp', 'Bilibili',
                100,"","","")
        }
    ]
    obj.username = "Chen Yuqi";
    obj.url = "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3251219681,3891116775&fm=26&gp=0.jpg";
    return obj;
}

export default Data;