import Course from './Course'
import Posting from "./Posting";
import Resource from "./Resource";
import User from "./User"

function Data() {
    var obj = {};
    obj.total_courses = [
        {
            'course': new Course(0, '[中英字幕]吴恩达机器学习系列课程', 'https://www.bilibili.com/video/BV164411b7dx?from=search&seid=719799793224630018',
                'https://i0.hdslb.com/bfs/archive/0aff68fab987a889d1cca8620266e66b2b03d9f2.jpg@640w_400h.webp', 'Bilibili',
                70,"100万","机器学习","斯坦福大学","")
        },
        {
            'course': new Course(1, '李宏毅2020机器学习深度学习(完整版)国语', 'https://www.bilibili.com/video/BV1JE411g7XF?from=search&seid=719799793224630018',
                'https://i2.hdslb.com/bfs/archive/9685eae51d940ea37804efdcb5b92d57d191512c.jpg@640w_400h.webp', 'Bilibili',
                95,"100万","机器学习；深度学习","台湾大学","")
        },
        {
            'course': new Course(2, '【一起啃书】机器学习西瓜书白话解读', 'https://www.bilibili.com/video/BV17J411C7zZ?from=search&seid=719799793224630018',
                'https://i1.hdslb.com/bfs/archive/bfc2b7b0def91541903140bc532a16d9af8eebd7.jpg@640w_400h.webp', 'Bilibili',
                85,"100万","机器学习","","")
        },
        {
            'course': new Course(3,'吴恩达 机器学习 全套 中英字幕版','https://www.bilibili.com/video/BV1Nf4y1z7Wv?from=search&seid=14637659121555266172',
                'https://i2.hdslb.com/bfs/archive/efc7cc1fdc96a2e74210b4c388051edbe23ba4f6.png@640w_400h.webp', 'Bilibili',
                100,"100万","机器学习","","")
        },
        {
            'course': new Course(4,'吴恩达机器学习','https://www.bilibili.com/video/BV1Nf4y1z7Wv?from=search&seid=14637659121555266172',
                'https://i1.hdslb.com/bfs/archive/0755b1540bb41255afd1e2c4276cb056d4a0dcab.jpg@640w_400h.webp', 'Bilibili',
                100,"100万","机器学习","","")
        },
        {
            'course': new Course(5,'机器学习-白板推导系列(一)-开篇',
                'https://www.bilibili.com/video/BV1cW411C7RS?from=search&seid=12396233812789999927',
                'https://i2.hdslb.com/bfs/archive/855168d30591319d44bb82d0fba91d9e81864b45.jpg@640w_400h.webp',
                'Bilibili',65,"6万","机器学习","","机器学习")
        },
        {
            'course': new Course(6,'【机器学习算法实战】基于Apriori算法的商品零售购物',
                'https://www.bilibili.com/video/BV15Z4y1p7ev?from=search&seid=12396233812789999927',
                'https://i1.hdslb.com/bfs/archive/369633f29bdc8499b57249fbd71095fe25ab05bb.png@640w_400h.webp',
                'Bilibili',70,"1万","机器学习","","机器学习")
        },
        {
            'course': new Course(7, '深度学习（卷积网络、循环神经网络、对抗神经网络、Tensorflow实战）', 'https://www.bilibili.com/video/BV1P4411f7hK?from=search&seid=17104411751473767918',
                'https://i1.hdslb.com/bfs/archive/07aed908d43ca6af414d2691e64b4f4d55ad0896.jpg@640w_400h.webp', 'Bilibili',
                85,"150万","深度学习","","")
        },
        {
            'course': new Course(8,'图深度学习-07讲-图论基础7 (复杂图及其在实际生活中的应用)',
                'https://www.bilibili.com/video/BV1zK4y1p7uz?from=search&seid=3076704562222775173',
                'https://i0.hdslb.com/bfs/archive/03e83f5c8d082563185feeb0262310a58d58d664.jpg@640w_400h.webp',
                'Bilibili',75,"12万","机器学习","","机器学习")
        },
    ]
    obj.total_resources = [
        {
            'resource': new Resource(0,'吴恩达《机器学习系列课程》学习笔记（一）',
                'https://blog.csdn.net/tangxiaoyin/article/details/105016097?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266267053%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D&request_id=161336842816780266267053&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-4-105016097.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                "唐门教主",'CSDN',100,"50万","机器学习","")
        },
        {
            'resource': new Resource(1,'机器学习知识点笔记（一）',
                'https://blog.csdn.net/qq_42189368/article/details/87213237?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266267053%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D&request_id=161336842816780266267053&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-6-87213237.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                '邦戈栗子','CSDN',100,"50万","机器学习","")
        },
        {
            'resource': new Resource(2,'《机器学习实战》学习笔记（一）：机器学习基础',
                'https://blog.csdn.net/TeFuirnever/article/details/99734084?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266231212%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fall.%252522%25257D&request_id=161336842816780266231212&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29-9-99734084.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                '我是管小亮','CSDN',100,"50万","机器学习","")
        },
        {
            'resource': new Resource(3,'吴恩达深度学习笔记（1）-深度学习引言',
                'https://www.jianshu.com/p/d03e95fc3734',
                '极客Array','简书',95,"50万","深度学习","")
        },
        {
            'resource': new Resource(4,'深度学习笔记01 - 深度学习的基础概念',
                'https://www.jianshu.com/p/b8956b6a4e34',
                '瓦力人工智能',100,90,"50万","深度学习","")
        },
    ]
    obj.courses = [
        {
            'course': new Course(0, '[中英字幕]吴恩达机器学习系列课程', 'https://www.bilibili.com/video/BV164411b7dx?from=search&seid=719799793224630018',
                'https://i0.hdslb.com/bfs/archive/0aff68fab987a889d1cca8620266e66b2b03d9f2.jpg@640w_400h.webp', 'Bilibili',
                70,"100万","机器学习","斯坦福大学","")
        },
        {
            'course': new Course(1, '李宏毅2020机器学习深度学习(完整版)国语', 'https://www.bilibili.com/video/BV1JE411g7XF?from=search&seid=719799793224630018',
                'https://i2.hdslb.com/bfs/archive/9685eae51d940ea37804efdcb5b92d57d191512c.jpg@640w_400h.webp', 'Bilibili',
                95,"100万","机器学习；深度学习","台湾大学","")
        },
        {
            'course': new Course(2, '【一起啃书】机器学习西瓜书白话解读', 'https://www.bilibili.com/video/BV17J411C7zZ?from=search&seid=719799793224630018',
                'https://i1.hdslb.com/bfs/archive/bfc2b7b0def91541903140bc532a16d9af8eebd7.jpg@640w_400h.webp', 'Bilibili',
                85,"100万","机器学习", "","")
        },
    ]
    obj.machine_learning = {
        'courses': [
            {
                'course': new Course(0, '[中英字幕]吴恩达机器学习系列课程', 'https://www.bilibili.com/video/BV164411b7dx?from=search&seid=719799793224630018',
                    'https://i0.hdslb.com/bfs/archive/0aff68fab987a889d1cca8620266e66b2b03d9f2.jpg@640w_400h.webp', 'Bilibili',
                    70, "100万", "机器学习", "斯坦福大学", "")
            },
            {
                'course': new Course(1, '李宏毅2020机器学习深度学习(完整版)国语', 'https://www.bilibili.com/video/BV1JE411g7XF?from=search&seid=719799793224630018',
                    'https://i2.hdslb.com/bfs/archive/9685eae51d940ea37804efdcb5b92d57d191512c.jpg@640w_400h.webp', 'Bilibili',
                    95, "100万", "机器学习；深度学习", "台湾大学", "")
            },
            {
                'course': new Course(2, '【一起啃书】机器学习西瓜书白话解读', 'https://www.bilibili.com/video/BV17J411C7zZ?from=search&seid=719799793224630018',
                    'https://i1.hdslb.com/bfs/archive/bfc2b7b0def91541903140bc532a16d9af8eebd7.jpg@640w_400h.webp', 'Bilibili',
                    85, "100万", "机器学习", "", "")
            },
        ],
        'resources': [
            {
                'resource': new Resource(0, '吴恩达《机器学习系列课程》学习笔记（一）',
                    'https://blog.csdn.net/tangxiaoyin/article/details/105016097?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266267053%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D&request_id=161336842816780266267053&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-4-105016097.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                    "唐门教主", 'CSDN', 100, "50万", "机器学习", "")
            },
            {
                'resource': new Resource(1, '机器学习知识点笔记（一）',
                    'https://blog.csdn.net/qq_42189368/article/details/87213237?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266267053%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D&request_id=161336842816780266267053&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-6-87213237.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                    '邦戈栗子', 'CSDN', 100, "50万", "机器学习", "")
            },
            {
                'resource': new Resource(2, '《机器学习实战》学习笔记（一）：机器学习基础',
                    'https://blog.csdn.net/TeFuirnever/article/details/99734084?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266231212%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fall.%252522%25257D&request_id=161336842816780266231212&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29-9-99734084.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                    '我是管小亮', 'CSDN', 100, "50万", "机器学习", "")
            },
        ],
        'videos': [
            {
                'course': new Course(5, '机器学习-白板推导系列(一)-开篇',
                    'https://www.bilibili.com/video/BV1cW411C7RS?from=search&seid=12396233812789999927',
                    'https://i2.hdslb.com/bfs/archive/855168d30591319d44bb82d0fba91d9e81864b45.jpg@640w_400h.webp',
                    'Bilibili', 65, "6万", "机器学习", "", "机器学习")
            },
            {
                'course': new Course(6, '【机器学习算法实战】基于Apriori算法的商品零售购物',
                    'https://www.bilibili.com/video/BV15Z4y1p7ev?from=search&seid=12396233812789999927',
                    'https://i1.hdslb.com/bfs/archive/369633f29bdc8499b57249fbd71095fe25ab05bb.png@640w_400h.webp',
                    'Bilibili', 70, "1万", "机器学习", "", "机器学习")
            }]
    }
    obj.deep_learning = {
        'courses': [
            {
                'course': new Course(1, '李宏毅2020机器学习深度学习(完整版)国语', 'https://www.bilibili.com/video/BV1JE411g7XF?from=search&seid=719799793224630018',
                    'https://i2.hdslb.com/bfs/archive/9685eae51d940ea37804efdcb5b92d57d191512c.jpg@640w_400h.webp', 'Bilibili',
                    95, "100万", "机器学习；深度学习", "台湾大学", "")
            },
            {
                'course': new Course(7, '深度学习（卷积网络、循环神经网络、对抗神经网络、Tensorflow实战）', 'https://www.bilibili.com/video/BV1P4411f7hK?from=search&seid=17104411751473767918',
                    'https://i1.hdslb.com/bfs/archive/07aed908d43ca6af414d2691e64b4f4d55ad0896.jpg@640w_400h.webp', 'Bilibili',
                    85, "150万", "深度学习", "", "")
            },
        ],
        'resources': [
            {
                'resource': new Resource(3, '吴恩达深度学习笔记（1）-深度学习引言',
                    'https://www.jianshu.com/p/d03e95fc3734',
                    '极客Array', '简书', 95, "50万", "深度学习", "")
            },
            {
                'resource': new Resource(4, '深度学习笔记01 - 深度学习的基础概念',
                    'https://www.jianshu.com/p/b8956b6a4e34',
                    '瓦力人工智能', 100, "50万", "深度学习", "")
            },
        ],
        'videos': [
            {
                'course': new Course(8,'图深度学习-07讲-图论基础7 (复杂图及其在实际生活中的应用)',
                    'https://www.bilibili.com/video/BV1zK4y1p7uz?from=search&seid=3076704562222775173',
                    'https://i0.hdslb.com/bfs/archive/03e83f5c8d082563185feeb0262310a58d58d664.jpg@640w_400h.webp',
                    'Bilibili',75,"12万","机器学习","","机器学习")
            },
        ]
    }
    obj.relative_course = [
        {
            'course': new Course(3,'吴恩达 机器学习 全套 中英字幕版','https://www.bilibili.com/video/BV1Nf4y1z7Wv?from=search&seid=14637659121555266172',
                'https://i2.hdslb.com/bfs/archive/efc7cc1fdc96a2e74210b4c388051edbe23ba4f6.png@640w_400h.webp', 'Bilibili',
                100,"100万","机器学习","","")
        },
        {
            'course': new Course(4,'吴恩达机器学习','https://www.bilibili.com/video/BV1Nf4y1z7Wv?from=search&seid=14637659121555266172',
                'https://i1.hdslb.com/bfs/archive/0755b1540bb41255afd1e2c4276cb056d4a0dcab.jpg@640w_400h.webp', 'Bilibili',
                100,"100万","机器学习","","")
        }
    ]
    obj.videos=[
        {
            'course': new Course(1,'菊安酱的机器学习','https://www.bilibili.com/video/BV11b411F7sT?from=search&seid=1880358782938769599',
                'https://i2.hdslb.com/bfs/archive/2ecf96e1747ebf8ed27a7785a3a5b973ad98ee58.jpg@400w_250h.webp', 'Bilibili',
                100,"100万","机器学习","","")
        }
    ]
    obj.resources = [
        {
            'resource': new Resource(0,'吴恩达《机器学习系列课程》学习笔记（一）',
                'https://blog.csdn.net/tangxiaoyin/article/details/105016097?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266267053%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D&request_id=161336842816780266267053&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-4-105016097.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                "唐门教主",'CSDN',100,"50万","机器学习","")
        },
        {
            'resource': new Resource(1,'机器学习知识点笔记（一）',
                'https://blog.csdn.net/qq_42189368/article/details/87213237?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266267053%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D&request_id=161336842816780266267053&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-6-87213237.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                '邦戈栗子','CSDN',92,"50万","机器学习","")
        },
        {
            'resource': new Resource(2,'《机器学习实战》学习笔记（一）：机器学习基础',
                'https://blog.csdn.net/TeFuirnever/article/details/99734084?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266231212%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fall.%252522%25257D&request_id=161336842816780266231212&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29-9-99734084.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                '我是管小亮','CSDN',85,"50万","机器学习","")
        },
    ]
    obj.relative_resource =[
        {
            'resource': new Resource(0,'吴恩达《机器学习系列课程》学习笔记（一）',
                'https://blog.csdn.net/tangxiaoyin/article/details/105016097?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266267053%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D&request_id=161336842816780266267053&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-4-105016097.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                "唐门教主",'CSDN',100,"50万","机器学习","")
        },
        {
            'resource': new Resource(1,'机器学习知识点笔记（一）',
                'https://blog.csdn.net/qq_42189368/article/details/87213237?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161336842816780266267053%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D&request_id=161336842816780266267053&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-6-87213237.first_rank_v2_pc_rank_v29_10&utm_term=%25E6%259C%25BA%25E5%2599%25A8%25E5%25AD%25A6%25E4%25B9%25A0%25E5%25AD%25A6%25E4%25B9%25A0%25E7%25AC%2594%25E8%25AE%25B0',
                '邦戈栗子','CSDN',92,"50万","机器学习","")
        },
    ]
    obj.interests = [
        {
            'label': '机器学习',
        },
        {
            'label': '深度学习',
        }
    ]
    obj.postings = [
        {
            'posting': new Posting(0,'课程推荐','推荐《[中英字幕]吴恩达机器学习系列课程》课程',
                "老师讲过拟合讲的真的很好。记录一下：首先老师是从“为什么过拟合和欠拟合的model都会造成误差？误差的来源是哪两个方面？”引入的问题。老师给出的答案是从数学层面给出的，那就是说我们应该",88,100,'2020-11-12',0),
        },
        {
            'posting': new Posting(1,'课程疑惑','数据结构中最小生成树算法有哪些？','',52,110,'2020-11-15',1),
        },
        {
            'posting': new Posting(2,'经验分享','我正在学习JAVA基础，马上就要学习完了，之后我应该怎么继续深入？',"很迷茫，我有点想学习写网站，但是什么都不知道，也不知道从什么地方开始学起，JAVAWeb我也是只知道这个可用来写网站，其他的什么都不知道。",32,100,'2020-11-20',1),
        },
        {
            'posting': new Posting(3,'课程疑惑','Python有做大型游戏的潜力吗？',
                "NeoX和Messiah,都使用Python作为脚本语言。你最近所了解的比较火的挂着猪厂旗号的，也都是Python写的。",16,100,'2021-2-23',0),
        },
        {
            'posting': new Posting(4,'经验分享','PHP、JAVA、Python、C、C++这几种编程语言都各有什么特点或优点？',"PHP：没有优点 Java：库多、库多、库多 Python：语法清楚、语法清楚、语法清楚  C：能操纵底层，能细粒度优化性能。",32,34,'2021-2-20',0),
        },
    ]
    obj.users = [
        {
            'user': new User(0,'Chen Yuqi','华东师范大学','13818981638',
                'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3251219681,3891116775&fm=26&gp=0.jpg'),
        },
        {
            'user': new User(1,'Ding Ruixin','华东师范大学','13462057288','http://1.117.107.95/image/QQ20210218-0.jpg')
        }
    ]
    obj.provs = [
        {key: 1, label: "北京市", value: "北京市"},
        {key: 2, label: "天津市", value: "天津市"},
        {key: 3, label: "河北省", value: "河北省"},
        {key: 4, label: "山西省", value: "山西省"},
        {key: 5, label: "内蒙古自治区", value: "内蒙古自治区"},
        {key: 6, label: "辽宁省", value: "辽宁省"},
        {key: 7, label: "吉林省", value: "吉林省"},
        {key: 8, label: "黑龙江省", value: "黑龙江省"},
        {key: 9, label: "上海市", value: "上海市"},
        {key: 10, label: "江苏省", value: "江苏省"},
        {key: 11, label: "浙江省", value: "浙江省"},
        {key: 12, label: "安徽省", value: "安徽省"},
        {key: 13, label: "福建省", value: "福建省"},
        {key: 14, label: "江西省", value: "江西省"},
        {key: 15, label: "山东省", value: "山东省"},
        {key: 16, label: "河南省", value: "河南省"},
        {key: 17, label: "湖北省", value: "湖北省"},
        {key: 18, label: "湖南省", value: "湖南省"},
        {key: 19, label: "广东省", value: "广东省"},
        {key: 20, label: "广西壮族自治区", value: "广西壮族自治区"},
        {key: 21, label: "海南省", value: "海南省"},
        {key: 22, label: "重庆市", value: "重庆市"},
        {key: 23, label: "四川省", value: "四川省"},
        {key: 24, label: "贵州省", value: "贵州省"},
        {key: 25, label: "云南省", value: "云南省"},
        {key: 26, label: "西藏自治区", value: "西藏自治区"},
        {key: 27, label: "陕西省", value: "陕西省"},
        {key: 28, label: "甘肃省", value: "甘肃省"},
        {key: 29, label: "青海省", value: "青海省"},
        {key: 30, label: "宁夏回族自治区", value: "宁夏回族自治区"},
        {key: 31, label: "新疆维吾尔自治区", value: "新疆维吾尔自治区"},
        {key: 32, label: "台湾省", value: "台湾省"},
        {key: 33, label: "香港特别行政区", value: "香港特别行政区"},
        {key: 34, label: "澳门特别行政区", value: "澳门特别行政区"}
    ]
    obj.cities = [
        {
            key: 1,
            prov: "北京市",
            label: "北京市"
        }, {
            key: 2,
            prov: "天津市",
            label: "天津市"
        }, {
            key: 3,
            prov: "河北省",
            label: "石家庄市"
        }, {
            key: 4,
            prov: "河北省",
            label: "唐山市"
        }, {
            key: 5,
            prov: "河北省",
            label: "秦皇岛市"
        }, {
            key: 6,
            prov: "河北省",
            label: "邯郸市"
        }, {
            key: 7,
            prov: "河北省",
            label: "邢台市"
        }, {
            key: 8,
            prov: "河北省",
            label: "保定市"
        }, {
            key: 9,
            prov: "河北省",
            label: "张家口市"
        }, {
            key: 10,
            prov: "河北省",
            label: "承德市"
        }, {
            key: 11,
            prov: "河北省",
            label: "沧州市"
        }, {
            key: 12,
            prov: "河北省",
            label: "廊坊市"
        }, {
            key: 13,
            prov: "河北省",
            label: "衡水市"
        }, {
            key: 14,
            prov: "山西省",
            label: "太原市"
        }, {
            key: 15,
            prov: "山西省",
            label: "大同市"
        }, {
            key: 16,
            prov: "山西省",
            label: "阳泉市"
        }, {
            key: 17,
            prov: "山西省",
            label: "长治市"
        }, {
            key: 18,
            prov: "山西省",
            label: "晋城市"
        }, {
            key: 19,
            prov: "山西省",
            label: "朔州市"
        }, {
            key: 20,
            prov: "山西省",
            label: "晋中市"
        }, {
            key: 21,
            prov: "山西省",
            label: "运城市"
        }, {
            key: 22,
            prov: "山西省",
            label: "忻州市"
        }, {
            key: 23,
            prov: "山西省",
            label: "临汾市"
        }, {
            key: 24,
            prov: "山西省",
            label: "吕梁市"
        }, {
            key: 25,
            prov: "内蒙古自治区",
            label: "呼和浩特市"
        }, {
            key: 26,
            prov: "内蒙古自治区",
            label: "包头市"
        }, {
            key: 27,
            prov: "内蒙古自治区",
            label: "乌海市"
        }, {
            key: 28,
            prov: "内蒙古自治区",
            label: "赤峰市"
        }, {
            key: 29,
            prov: "内蒙古自治区",
            label: "通辽市"
        }, {
            key: 30,
            prov: "内蒙古自治区",
            label: "鄂尔多斯市"
        }, {
            key: 31,
            prov: "内蒙古自治区",
            label: "呼伦贝尔市"
        }, {
            key: 32,
            prov: "内蒙古自治区",
            label: "巴彦淖尔市"
        }, {
            key: 33,
            prov: "内蒙古自治区",
            label: "乌兰察布市"
        }, {
            key: 34,
            prov: "内蒙古自治区",
            label: "兴安盟"
        }, {
            key: 35,
            prov: "内蒙古自治区",
            label: "锡林郭勒盟"
        }, {
            key: 36,
            prov: "内蒙古自治区",
            label: "阿拉善盟"
        }, {
            key: 37,
            prov: "辽宁省",
            label: "沈阳市"
        }, {
            key: 38,
            prov: "辽宁省",
            label: "大连市"
        }, {
            key: 39,
            prov: "辽宁省",
            label: "鞍山市"
        }, {
            key: 40,
            prov: "辽宁省",
            label: "抚顺市"
        }, {
            key: 41,
            prov: "辽宁省",
            label: "本溪市"
        }, {
            key: 42,
            prov: "辽宁省",
            label: "丹东市"
        }, {
            key: 43,
            prov: "辽宁省",
            label: "锦州市"
        }, {
            key: 44,
            prov: "辽宁省",
            label: "营口市"
        }, {
            key: 45,
            prov: "辽宁省",
            label: "阜新市"
        }, {
            key: 46,
            prov: "辽宁省",
            label: "辽阳市"
        }, {
            key: 47,
            prov: "辽宁省",
            label: "盘锦市"
        }, {
            key: 48,
            prov: "辽宁省",
            label: "铁岭市"
        }, {
            key: 49,
            prov: "辽宁省",
            label: "朝阳市"
        }, {
            key: 50,
            prov: "辽宁省",
            label: "葫芦岛市"
        }, {
            key: 51,
            prov: "吉林省",
            label: "长春市"
        }, {
            key: 52,
            prov: "吉林省",
            label: "吉林市"
        }, {
            key: 53,
            prov: "吉林省",
            label: "四平市"
        }, {
            key: 54,
            prov: "吉林省",
            label: "辽源市"
        }, {
            key: 55,
            prov: "吉林省",
            label: "通化市"
        }, {
            key: 56,
            prov: "吉林省",
            label: "白山市"
        }, {
            key: 57,
            prov: "吉林省",
            label: "松原市"
        }, {
            key: 58,
            prov: "吉林省",
            label: "白城市"
        }, {
            key: 59,
            prov: "吉林省",
            label: "延边朝鲜族自治州"
        }, {
            key: 60,
            prov: "黑龙江省",
            label: "哈尔滨市"
        }, {
            key: 61,
            prov: "黑龙江省",
            label: "齐齐哈尔市"
        }, {
            key: 62,
            prov: "黑龙江省",
            label: "鸡西市"
        }, {
            key: 63,
            prov: "黑龙江省",
            label: "鹤岗市"
        }, {
            key: 64,
            prov: "黑龙江省",
            label: "双鸭山市"
        }, {
            key: 65,
            prov: "黑龙江省",
            label: "大庆市"
        }, {
            key: 66,
            prov: "黑龙江省",
            label: "伊春市"
        }, {
            key: 67,
            prov: "黑龙江省",
            label: "佳木斯市"
        }, {
            key: 68,
            prov: "黑龙江省",
            label: "七台河市"
        }, {
            key: 69,
            prov: "黑龙江省",
            label: "牡丹江市"
        }, {
            key: 70,
            prov: "黑龙江省",
            label: "黑河市"
        }, {
            key: 71,
            prov: "黑龙江省",
            label: "绥化市"
        }, {
            key: 72,
            prov: "黑龙江省",
            label: "大兴安岭地区"
        }, {
            key: 73,
            prov: "上海市",
            label: "上海市"
        }, {
            key: 74,
            prov: "江苏省",
            label: "南京市"
        }, {
            key: 75,
            prov: "江苏省",
            label: "无锡市"
        }, {
            key: 76,
            prov: "江苏省",
            label: "徐州市"
        }, {
            key: 77,
            prov: "江苏省",
            label: "常州市"
        }, {
            key: 78,
            prov: "江苏省",
            label: "苏州市"
        }, {
            key: 79,
            prov: "江苏省",
            label: "南通市"
        }, {
            key: 80,
            prov: "江苏省",
            label: "连云港市"
        }, {
            key: 81,
            prov: "江苏省",
            label: "淮安市"
        }, {
            key: 82,
            prov: "江苏省",
            label: "盐城市"
        }, {
            key: 83,
            prov: "江苏省",
            label: "扬州市"
        }, {
            key: 84,
            prov: "江苏省",
            label: "镇江市"
        }, {
            key: 85,
            prov: "江苏省",
            label: "泰州市"
        }, {
            key: 86,
            prov: "江苏省",
            label: "宿迁市"
        }, {
            key: 87,
            prov: "浙江省",
            label: "杭州市"
        }, {
            key: 88,
            prov: "浙江省",
            label: "宁波市"
        }, {
            key: 89,
            prov: "浙江省",
            label: "温州市"
        }, {
            key: 90,
            prov: "浙江省",
            label: "嘉兴市"
        }, {
            key: 91,
            prov: "浙江省",
            label: "湖州市"
        }, {
            key: 92,
            prov: "浙江省",
            label: "绍兴市"
        }, {
            key: 93,
            prov: "浙江省",
            label: "金华市"
        }, {
            key: 94,
            prov: "浙江省",
            label: "衢州市"
        }, {
            key: 95,
            prov: "浙江省",
            label: "舟山市"
        }, {
            key: 96,
            prov: "浙江省",
            label: "台州市"
        }, {
            key: 97,
            prov: "浙江省",
            label: "丽水市"
        }, {
            key: 98,
            prov: "安徽省",
            label: "合肥市"
        }, {
            key: 99,
            prov: "安徽省",
            label: "芜湖市"
        }, {
            key: 100,
            prov: "安徽省",
            label: "蚌埠市"
        }, {
            key: 101,
            prov: "安徽省",
            label: "淮南市"
        }, {
            key: 102,
            prov: "安徽省",
            label: "马鞍山市"
        }, {
            key: 103,
            prov: "安徽省",
            label: "淮北市"
        }, {
            key: 104,
            prov: "安徽省",
            label: "铜陵市"
        }, {
            key: 105,
            prov: "安徽省",
            label: "安庆市"
        }, {
            key: 106,
            prov: "安徽省",
            label: "黄山市"
        }, {
            key: 107,
            prov: "安徽省",
            label: "滁州市"
        }, {
            key: 108,
            prov: "安徽省",
            label: "阜阳市"
        }, {
            key: 109,
            prov: "安徽省",
            label: "宿州市"
        }, {
            key: 110,
            prov: "安徽省",
            label: "六安市"
        }, {
            key: 111,
            prov: "安徽省",
            label: "亳州市"
        }, {
            key: 112,
            prov: "安徽省",
            label: "池州市"
        }, {
            key: 113,
            prov: "安徽省",
            label: "宣城市"
        }, {
            key: 114,
            prov: "福建省",
            label: "福州市"
        }, {
            key: 115,
            prov: "福建省",
            label: "厦门市"
        }, {
            key: 116,
            prov: "福建省",
            label: "莆田市"
        }, {
            key: 117,
            prov: "福建省",
            label: "三明市"
        }, {
            key: 118,
            prov: "福建省",
            label: "泉州市"
        }, {
            key: 119,
            prov: "福建省",
            label: "漳州市"
        }, {
            key: 120,
            prov: "福建省",
            label: "南平市"
        }, {
            key: 121,
            prov: "福建省",
            label: "龙岩市"
        }, {
            key: 122,
            prov: "福建省",
            label: "宁德市"
        }, {
            key: 123,
            prov: "江西省",
            label: "南昌市"
        }, {
            key: 124,
            prov: "江西省",
            label: "景德镇市"
        }, {
            key: 125,
            prov: "江西省",
            label: "萍乡市"
        }, {
            key: 126,
            prov: "江西省",
            label: "九江市"
        }, {
            key: 127,
            prov: "江西省",
            label: "新余市"
        }, {
            key: 128,
            prov: "江西省",
            label: "鹰潭市"
        }, {
            key: 129,
            prov: "江西省",
            label: "赣州市"
        }, {
            key: 130,
            prov: "江西省",
            label: "吉安市"
        }, {
            key: 131,
            prov: "江西省",
            label: "宜春市"
        }, {
            key: 132,
            prov: "江西省",
            label: "抚州市"
        }, {
            key: 133,
            prov: "江西省",
            label: "上饶市"
        }, {
            key: 134,
            prov: "山东省",
            label: "济南市"
        }, {
            key: 135,
            prov: "山东省",
            label: "青岛市"
        }, {
            key: 136,
            prov: "山东省",
            label: "淄博市"
        }, {
            key: 137,
            prov: "山东省",
            label: "枣庄市"
        }, {
            key: 138,
            prov: "山东省",
            label: "东营市"
        }, {
            key: 139,
            prov: "山东省",
            label: "烟台市"
        }, {
            key: 140,
            prov: "山东省",
            label: "潍坊市"
        }, {
            key: 141,
            prov: "山东省",
            label: "济宁市"
        }, {
            key: 142,
            prov: "山东省",
            label: "泰安市"
        }, {
            key: 143,
            prov: "山东省",
            label: "威海市"
        }, {
            key: 144,
            prov: "山东省",
            label: "日照市"
        }, {
            key: 145,
            prov: "山东省",
            label: "莱芜市"
        }, {
            key: 146,
            prov: "山东省",
            label: "临沂市"
        }, {
            key: 147,
            prov: "山东省",
            label: "德州市"
        }, {
            key: 148,
            prov: "山东省",
            label: "聊城市"
        }, {
            key: 149,
            prov: "山东省",
            label: "滨州市"
        }, {
            key: 150,
            prov: "山东省",
            label: "菏泽市"
        }, {
            key: 151,
            prov: "河南省",
            label: "郑州市"
        }, {
            key: 152,
            prov: "河南省",
            label: "开封市"
        }, {
            key: 153,
            prov: "河南省",
            label: "洛阳市"
        }, {
            key: 154,
            prov: "河南省",
            label: "平顶山市"
        }, {
            key: 155,
            prov: "河南省",
            label: "安阳市"
        }, {
            key: 156,
            prov: "河南省",
            label: "鹤壁市"
        }, {
            key: 157,
            prov: "河南省",
            label: "新乡市"
        }, {
            key: 158,
            prov: "河南省",
            label: "焦作市"
        }, {
            key: 159,
            prov: "河南省",
            label: "濮阳市"
        }, {
            key: 160,
            prov: "河南省",
            label: "许昌市"
        }, {
            key: 161,
            prov: "河南省",
            label: "漯河市"
        }, {
            key: 162,
            prov: "河南省",
            label: "三门峡市"
        }, {
            key: 163,
            prov: "河南省",
            label: "南阳市"
        }, {
            key: 164,
            prov: "河南省",
            label: "商丘市"
        }, {
            key: 165,
            prov: "河南省",
            label: "信阳市"
        }, {
            key: 166,
            prov: "河南省",
            label: "周口市"
        }, {
            key: 167,
            prov: "河南省",
            label: "驻马店市"
        }, {
            key: 168,
            prov: "河南省",
            label: "省直辖县级行政区划"
        }, {
            key: 169,
            prov: "湖北省",
            label: "武汉市"
        }, {
            key: 170,
            prov: "湖北省",
            label: "黄石市"
        }, {
            key: 171,
            prov: "湖北省",
            label: "十堰市"
        }, {
            key: 172,
            prov: "湖北省",
            label: "宜昌市"
        }, {
            key: 173,
            prov: "湖北省",
            label: "襄阳市"
        }, {
            key: 174,
            prov: "湖北省",
            label: "鄂州市"
        }, {
            key: 175,
            prov: "湖北省",
            label: "荆门市"
        }, {
            key: 176,
            prov: "湖北省",
            label: "孝感市"
        }, {
            key: 177,
            prov: "湖北省",
            label: "荆州市"
        }, {
            key: 178,
            prov: "湖北省",
            label: "黄冈市"
        }, {
            key: 179,
            prov: "湖北省",
            label: "咸宁市"
        }, {
            key: 180,
            prov: "湖北省",
            label: "随州市"
        }, {
            key: 181,
            prov: "湖北省",
            label: "恩施土家族苗族自治州"
        }, {
            key: 182,
            prov: "湖北省",
            label: "省直辖县级行政区划"
        }, {
            key: 183,
            prov: "湖北省",
            label: "仙桃市"
        }, {
            key: 184,
            prov: "湖北省",
            label: "潜江市"
        }, {
            key: 185,
            prov: "湖北省",
            label: "天门市"
        }, {
            key: 186,
            prov: "湖北省",
            label: "神农架林区"
        }, {
            key: 187,
            prov: "湖南省",
            label: "长沙市"
        }, {
            key: 188,
            prov: "湖南省",
            label: "株洲市"
        }, {
            key: 189,
            prov: "湖南省",
            label: "湘潭市"
        }, {
            key: 190,
            prov: "湖南省",
            label: "衡阳市"
        }, {
            key: 191,
            prov: "湖南省",
            label: "邵阳市"
        }, {
            key: 192,
            prov: "湖南省",
            label: "岳阳市"
        }, {
            key: 193,
            prov: "湖南省",
            label: "常德市"
        }, {
            key: 194,
            prov: "湖南省",
            label: "张家界市"
        }, {
            key: 195,
            prov: "湖南省",
            label: "益阳市"
        }, {
            key: 196,
            prov: "湖南省",
            label: "郴州市"
        }, {
            key: 197,
            prov: "湖南省",
            label: "永州市"
        }, {
            key: 198,
            prov: "湖南省",
            label: "怀化市"
        }, {
            key: 199,
            prov: "湖南省",
            label: "娄底市"
        }, {
            key: 200,
            prov: "湖南省",
            label: "湘西土家族苗族自治州"
        }, {
            key: 201,
            prov: "广东省",
            label: "广州市"
        }, {
            key: 202,
            prov: "广东省",
            label: "韶关市"
        }, {
            key: 203,
            prov: "广东省",
            label: "深圳市"
        }, {
            key: 204,
            prov: "广东省",
            label: "珠海市"
        }, {
            key: 205,
            prov: "广东省",
            label: "汕头市"
        }, {
            key: 206,
            prov: "广东省",
            label: "佛山市"
        }, {
            key: 207,
            prov: "广东省",
            label: "江门市"
        }, {
            key: 208,
            prov: "广东省",
            label: "湛江市"
        }, {
            key: 209,
            prov: "广东省",
            label: "茂名市"
        }, {
            key: 210,
            prov: "广东省",
            label: "肇庆市"
        }, {
            key: 211,
            prov: "广东省",
            label: "惠州市"
        }, {
            key: 212,
            prov: "广东省",
            label: "梅州市"
        }, {
            key: 213,
            prov: "广东省",
            label: "汕尾市"
        }, {
            key: 214,
            prov: "广东省",
            label: "河源市"
        }, {
            key: 215,
            prov: "广东省",
            label: "阳江市"
        }, {
            key: 216,
            prov: "广东省",
            label: "清远市"
        }, {
            key: 217,
            prov: "广东省",
            label: "东莞市"
        }, {
            key: 218,
            prov: "广东省",
            label: "中山市"
        }, {
            key: 219,
            prov: "广东省",
            label: "潮州市"
        }, {
            key: 220,
            prov: "广东省",
            label: "揭阳市"
        }, {
            key: 221,
            prov: "广东省",
            label: "云浮市"
        }, {
            key: 222,
            prov: "广西壮族自治区",
            label: "南宁市"
        }, {
            key: 223,
            prov: "广西壮族自治区",
            label: "柳州市"
        }, {
            key: 224,
            prov: "广西壮族自治区",
            label: "桂林市"
        }, {
            key: 225,
            prov: "广西壮族自治区",
            label: "梧州市"
        }, {
            key: 226,
            prov: "广西壮族自治区",
            label: "北海市"
        }, {
            key: 227,
            prov: "广西壮族自治区",
            label: "防城港市"
        }, {
            key: 228,
            prov: "广西壮族自治区",
            label: "钦州市"
        }, {
            key: 229,
            prov: "广西壮族自治区",
            label: "贵港市"
        }, {
            key: 230,
            prov: "广西壮族自治区",
            label: "玉林市"
        }, {
            key: 231,
            prov: "广西壮族自治区",
            label: "百色市"
        }, {
            key: 232,
            prov: "广西壮族自治区",
            label: "贺州市"
        }, {
            key: 233,
            prov: "广西壮族自治区",
            label: "河池市"
        }, {
            key: 234,
            prov: "广西壮族自治区",
            label: "来宾市"
        }, {
            key: 235,
            prov: "广西壮族自治区",
            label: "崇左市"
        }, {
            key: 236,
            prov: "海南省",
            label: "海口市"
        }, {
            key: 237,
            prov: "海南省",
            label: "三亚市"
        }, {
            key: 238,
            prov: "海南省",
            label: "三沙市"
        }, {
            key: 239,
            prov: "海南省",
            label: "省直辖县级行政区划"
        }, {
            key: 240,
            prov: "海南省",
            label: "五指山市"
        }, {
            key: 241,
            prov: "海南省",
            label: "琼海市"
        }, {
            key: 242,
            prov: "海南省",
            label: "儋州市"
        }, {
            key: 243,
            prov: "海南省",
            label: "文昌市"
        }, {
            key: 244,
            prov: "海南省",
            label: "万宁市"
        }, {
            key: 245,
            prov: "海南省",
            label: "东方市"
        }, {
            key: 246,
            prov: "海南省",
            label: "定安县"
        }, {
            key: 247,
            prov: "海南省",
            label: "屯昌县"
        }, {
            key: 248,
            prov: "海南省",
            label: "澄迈县"
        }, {
            key: 249,
            prov: "海南省",
            label: "临高县"
        }, {
            key: 250,
            prov: "海南省",
            label: "白沙黎族自治县"
        }, {
            key: 251,
            prov: "海南省",
            label: "昌江黎族自治县"
        }, {
            key: 252,
            prov: "海南省",
            label: "乐东黎族自治县"
        }, {
            key: 253,
            prov: "海南省",
            label: "陵水黎族自治县"
        }, {
            key: 254,
            prov: "海南省",
            label: "保亭黎族苗族自治县"
        }, {
            key: 255,
            prov: "海南省",
            label: "琼中黎族苗族自治县"
        }, {
            key: 256,
            prov: "重庆市",
            label: "重庆市"
        }, {
            key: 257,
            prov: "四川省",
            label: "成都市"
        }, {
            key: 258,
            prov: "四川省",
            label: "自贡市"
        }, {
            key: 259,
            prov: "四川省",
            label: "攀枝花市"
        }, {
            key: 260,
            prov: "四川省",
            label: "泸州市"
        }, {
            key: 261,
            prov: "四川省",
            label: "德阳市"
        }, {
            key: 262,
            prov: "四川省",
            label: "绵阳市"
        }, {
            key: 263,
            prov: "四川省",
            label: "广元市"
        }, {
            key: 264,
            prov: "四川省",
            label: "遂宁市"
        }, {
            key: 265,
            prov: "四川省",
            label: "内江市"
        }, {
            key: 266,
            prov: "四川省",
            label: "乐山市"
        }, {
            key: 267,
            prov: "四川省",
            label: "南充市"
        }, {
            key: 268,
            prov: "四川省",
            label: "眉山市"
        }, {
            key: 269,
            prov: "四川省",
            label: "宜宾市"
        }, {
            key: 270,
            prov: "四川省",
            label: "广安市"
        }, {
            key: 271,
            prov: "四川省",
            label: "达州市"
        }, {
            key: 272,
            prov: "四川省",
            label: "雅安市"
        }, {
            key: 273,
            prov: "四川省",
            label: "巴中市"
        }, {
            key: 274,
            prov: "四川省",
            label: "资阳市"
        }, {
            key: 275,
            prov: "四川省",
            label: "阿坝藏族羌族自治州"
        }, {
            key: 276,
            prov: "四川省",
            label: "甘孜藏族自治州"
        }, {
            key: 277,
            prov: "四川省",
            label: "凉山彝族自治州"
        }, {
            key: 278,
            prov: "贵州省",
            label: "贵阳市"
        }, {
            key: 279,
            prov: "贵州省",
            label: "六盘水市"
        }, {
            key: 280,
            prov: "贵州省",
            label: "遵义市"
        }, {
            key: 281,
            prov: "贵州省",
            label: "安顺市"
        }, {
            key: 282,
            prov: "贵州省",
            label: "毕节市"
        }, {
            key: 283,
            prov: "贵州省",
            label: "铜仁市"
        }, {
            key: 284,
            prov: "贵州省",
            label: "黔西南布依族苗族自治州"
        }, {
            key: 285,
            prov: "贵州省",
            label: "黔东南苗族侗族自治州"
        }, {
            key: 286,
            prov: "贵州省",
            label: "黔南布依族苗族自治州"
        }, {
            key: 287,
            prov: "云南省",
            label: "昆明市"
        }, {
            key: 288,
            prov: "云南省",
            label: "曲靖市"
        }, {
            key: 289,
            prov: "云南省",
            label: "玉溪市"
        }, {
            key: 290,
            prov: "云南省",
            label: "保山市"
        }, {
            key: 291,
            prov: "云南省",
            label: "昭通市"
        }, {
            key: 292,
            prov: "云南省",
            label: "丽江市"
        }, {
            key: 293,
            prov: "云南省",
            label: "普洱市"
        }, {
            key: 294,
            prov: "云南省",
            label: "临沧市"
        }, {
            key: 295,
            prov: "云南省",
            label: "楚雄彝族自治州"
        }, {
            key: 296,
            prov: "云南省",
            label: "红河哈尼族彝族自治州"
        }, {
            key: 297,
            prov: "云南省",
            label: "文山壮族苗族自治州"
        }, {
            key: 298,
            prov: "云南省",
            label: "西双版纳傣族自治州"
        }, {
            key: 299,
            prov: "云南省",
            label: "大理白族自治州"
        }, {
            key: 300,
            prov: "云南省",
            label: "德宏傣族景颇族自治州"
        }, {
            key: 301,
            prov: "云南省",
            label: "怒江傈僳族自治州"
        }, {
            key: 302,
            prov: "云南省",
            label: "迪庆藏族自治州"
        }, {
            key: 303,
            prov: "西藏自治区",
            label: "拉萨市"
        }, {
            key: 304,
            prov: "西藏自治区",
            label: "昌都地区"
        }, {
            key: 305,
            prov: "西藏自治区",
            label: "山南地区"
        }, {
            key: 306,
            prov: "西藏自治区",
            label: "日喀则地区"
        }, {
            key: 307,
            prov: "西藏自治区",
            label: "那曲地区"
        }, {
            key: 308,
            prov: "西藏自治区",
            label: "阿里地区"
        }, {
            key: 309,
            prov: "西藏自治区",
            label: "林芝地区"
        }, {
            key: 310,
            prov: "陕西省",
            label: "西安市"
        }, {
            key: 311,
            prov: "陕西省",
            label: "铜川市"
        }, {
            key: 312,
            prov: "陕西省",
            label: "宝鸡市"
        }, {
            key: 313,
            prov: "陕西省",
            label: "咸阳市"
        }, {
            key: 314,
            prov: "陕西省",
            label: "渭南市"
        }, {
            key: 315,
            prov: "陕西省",
            label: "延安市"
        }, {
            key: 316,
            prov: "陕西省",
            label: "汉中市"
        }, {
            key: 317,
            prov: "陕西省",
            label: "榆林市"
        }, {
            key: 318,
            prov: "陕西省",
            label: "安康市"
        }, {
            key: 319,
            prov: "陕西省",
            label: "商洛市"
        }, {
            key: 320,
            prov: "甘肃省",
            label: "兰州市"
        }, {
            key: 321,
            prov: "甘肃省",
            label: "嘉峪关市"
        }, {
            key: 322,
            prov: "甘肃省",
            label: "金昌市"
        }, {
            key: 323,
            prov: "甘肃省",
            label: "白银市"
        }, {
            key: 324,
            prov: "甘肃省",
            label: "天水市"
        }, {
            key: 325,
            prov: "甘肃省",
            label: "武威市"
        }, {
            key: 326,
            prov: "甘肃省",
            label: "张掖市"
        }, {
            key: 327,
            prov: "甘肃省",
            label: "平凉市"
        }, {
            key: 328,
            prov: "甘肃省",
            label: "酒泉市"
        }, {
            key: 329,
            prov: "甘肃省",
            label: "庆阳市"
        }, {
            key: 330,
            prov: "甘肃省",
            label: "定西市"
        }, {
            key: 331,
            prov: "甘肃省",
            label: "陇南市"
        }, {
            key: 332,
            prov: "甘肃省",
            label: "临夏回族自治州"
        }, {
            key: 333,
            prov: "甘肃省",
            label: "甘南藏族自治州"
        }, {
            key: 334,
            prov: "青海省",
            label: "西宁市"
        }, {
            key: 335,
            prov: "青海省",
            label: "海东市"
        }, {
            key: 336,
            prov: "青海省",
            label: "海北藏族自治州"
        }, {
            key: 337,
            prov: "青海省",
            label: "黄南藏族自治州"
        }, {
            key: 338,
            prov: "青海省",
            label: "海南藏族自治州"
        }, {
            key: 339,
            prov: "青海省",
            label: "果洛藏族自治州"
        }, {
            key: 340,
            prov: "青海省",
            label: "玉树藏族自治州"
        }, {
            key: 341,
            prov: "青海省",
            label: "海西蒙古族藏族自治州"
        }, {
            key: 342,
            prov: "宁夏回族自治区",
            label: "银川市"
        }, {
            key: 343,
            prov: "宁夏回族自治区",
            label: "石嘴山市"
        }, {
            key: 344,
            prov: "宁夏回族自治区",
            label: "吴忠市"
        }, {
            key: 345,
            prov: "宁夏回族自治区",
            label: "固原市"
        }, {
            key: 346,
            prov: "宁夏回族自治区",
            label: "中卫市"
        }, {
            key: 347,
            prov: "新疆维吾尔自治区",
            label: "乌鲁木齐市"
        }, {
            key: 348,
            prov: "新疆维吾尔自治区",
            label: "克拉玛依市"
        }, {
            key: 349,
            prov: "新疆维吾尔自治区",
            label: "吐鲁番地区"
        }, {
            key: 350,
            prov: "新疆维吾尔自治区",
            label: "哈密地区"
        }, {
            key: 351,
            prov: "新疆维吾尔自治区",
            label: "昌吉回族自治州"
        }, {
            key: 352,
            prov: "新疆维吾尔自治区",
            label: "博尔塔拉蒙古自治州"
        }, {
            key: 353,
            prov: "新疆维吾尔自治区",
            label: "巴音郭楞蒙古自治州"
        }, {
            key: 354,
            prov: "新疆维吾尔自治区",
            label: "阿克苏地区"
        }, {
            key: 355,
            prov: "新疆维吾尔自治区",
            label: "克孜勒苏柯尔克孜自治州"
        }, {
            key: 356,
            prov: "新疆维吾尔自治区",
            label: "喀什地区"
        }, {
            key: 357,
            prov: "新疆维吾尔自治区",
            label: "和田地区"
        }, {
            key: 358,
            prov: "新疆维吾尔自治区",
            label: "伊犁哈萨克自治州"
        }, {
            key: 359,
            prov: "新疆维吾尔自治区",
            label: "塔城地区"
        }, {
            key: 360,
            prov: "新疆维吾尔自治区",
            label: "阿勒泰地区"
        }, {
            key: 361,
            prov: "新疆维吾尔自治区",
            label: "自治区直辖县级行政区划"
        }, {
            key: 362,
            prov: "新疆维吾尔自治区",
            label: "石河子市"
        }, {
            key: 363,
            prov: "新疆维吾尔自治区",
            label: "阿拉尔市"
        }, {
            key: 364,
            prov: "新疆维吾尔自治区",
            label: "图木舒克市"
        }, {
            key: 365,
            prov: "新疆维吾尔自治区",
            label: "五家渠市"
        }, {
            key: 366,
            prov: "台湾省",
            label: "台北市"
        }, {
            key: 367,
            prov: "台湾省",
            label: "高雄市"
        }, {
            key: 368,
            prov: "台湾省",
            label: "基隆市"
        }, {
            key: 369,
            prov: "台湾省",
            label: "台中市"
        }, {
            key: 370,
            prov: "台湾省",
            label: "台南市"
        }, {
            key: 371,
            prov: "台湾省",
            label: "新竹市"
        }, {
            key: 372,
            prov: "台湾省",
            label: "嘉义市"
        }, {
            key: 373,
            prov: "台湾省",
            label: "省直辖"
        }, {
            key: 374,
            prov: "香港特别行政区",
            label: "香港岛"
        }, {
            key: 375,
            prov: "香港特别行政区",
            label: "九龙"
        }, {
            key: 376,
            prov: "香港特别行政区",
            label: "新界"
        }, {
            key: 377,
            prov: "澳门特别行政区",
            label: "澳门半岛"
        }, {
            key: 378,
            prov: "澳门特别行政区",
            label: "澳门离岛"
        }, {
            key: 379,
            prov: "澳门特别行政区",
            label: "无堂区划分区域"
        }
    ]
    obj.schools = [
        {value: '阿拉善广播电视大学',label: '阿拉善广播电视大学'},
        {value: '鞍钢职工大学',label: '鞍钢职工大学'},
        {value: '安徽财经大学',label: '安徽财经大学'},
        {value: '安徽大学',label: '安徽大学'},
        {value: '安徽纺织工业大学',label: '安徽纺织工业大学'},
        {value: '安徽工业大学',label: '安徽工业大学'},
        {value: '安徽广播电视大学',label: '安徽广播电视大学'},
        {value: '安徽劳动大学',label: '安徽劳动大学'},
        {value: '安徽理工大学',label: '安徽理工大学'},
        {value: '安徽农业大学',label: '安徽农业大学'},
        {value: '安徽师范大学',label: '安徽师范大学'},
        {value: '安徽医科大学',label: '安徽医科大学'},
        {value: '安培华女子大学',label: '安培华女子大学'},
        {value: '安庆广播电视大学',label: '安庆广播电视大学'},
        {value: '鞍山广播电视大学',label: '鞍山广播电视大学'},
        {value: '鞍山科技大学',label: '鞍山科技大学'},
        {value: '安阳广播电视大学',label: '安阳广播电视大学'},
        {value: '澳门大学',label: '澳门大学'},
        {value: '澳门科技大学',label: '澳门科技大学'},
        {value: '巴彦淖尔市电视大学',label: '巴彦淖尔市电视大学'},
        {value: '巴州广播电视大学',label: '巴州广播电视大学'},
        {value: '白城广播电视大学',label: '白城广播电视大学'},
        {value: '白求恩医科大学',label: '白求恩医科大学'},
        {value: '白云区老干部大学',label: '白云区老干部大学'},
        {value: '保定广播电视大学',label: '保定广播电视大学'},
        {value: '宝山区业余大学',label: '宝山区业余大学'},
        {value: '包头市职工大学',label: '包头市职工大学'},
        {value: '北方工业大学',label: '北方工业大学'},
        {value: '北方交通大学',label: '北方交通大学'},
        {value: '北方民族大学',label: '北方民族大学'},
        {value: '北海广播电视大学',label: '北海广播电视大学'},
        {value: '北华大学',label: '北华大学'},
        {value: '北京城市建设职工大学',label: '北京城市建设职工大学'},
        {value: '北京大学',label: '北京大学'},
        {value: '北京东方大学',label: '北京东方大学'},
        {value: '北京工商大学',label: '北京工商大学'},
        {value: '北京工业大学',label: '北京工业大学'},
        {value: '北京广播电视大学',label: '北京广播电视大学'},
        {value: '北京航空航天大学',label: '北京航空航天大学'},
        {value: '北京化工大学',label: '北京化工大学'},
        {value: '北京化工局职工大学',label: '北京化工局职工大学'},
        {value: '北京黄埔大学',label: '北京黄埔大学'},
        {value: '北京吉利大学',label: '北京吉利大学'},
        {value: '北京建设大学',label: '北京建设大学'},
        {value: '北京建筑大学',label: '北京建筑大学'},
        {value: '北京交通大学',label: '北京交通大学'},
        {value: '北京经贸大学',label: '北京经贸大学'},
        {value: '北京京桥大学',label: '北京京桥大学'},
        {value: '北京科技大学',label: '北京科技大学'},
        {value: '北京理工大学',label: '北京理工大学'},
        {value: '北京联合大学',label: '北京联合大学'},
        {value: '北京林业大学',label: '北京林业大学'},
        {value: '北京美国加州大学',label: '北京美国加州大学'},
        {value: '北京民族大学',label: '北京民族大学'},
        {value: '北京明园大学',label: '北京明园大学'},
        {value: '北京培黎大学',label: '北京培黎大学'},
        {value: '北京人文大学',label: '北京人文大学'},
        {value: '北京市东城区职工大学',label: '北京市东城区职工大学'},
        {value: '北京师范大学',label: '北京师范大学'},
        {value: '北京市房地产职工大学',label: '北京市房地产职工大学'},
        {value: '北京市房山区老干部大学',label: '北京市房山区老干部大学'},
        {value: '北京市纺织局职工大学',label: '北京市纺织局职工大学'},
        {value: '北京市丰台区职工大学',label: '北京市丰台区职工大学'},
        {value: '北京市广播电视大学',label: '北京市广播电视大学'},
        {value: '北京市怀柔区老干部大学',label: '北京市怀柔区老干部大学'},
        {value: '北京市机械工业局职工大学',label: '北京市机械工业局职工大学'},
        {value: '北京市农业机械局职工大学',label: '北京市农业机械局职工大学'},
        {value: '北京市石景山业余大学',label: '北京市石景山业余大学'},
        {value: '北京市西城区经济科学大学',label: '北京市西城区经济科学大学'},
        {value: '北京实验大学',label: '北京实验大学'},
        {value: '北京市总工会职工大学',label: '北京市总工会职工大学'},
        {value: '北京体育大学',label: '北京体育大学'},
        {value: '北京外国语大学',label: '北京外国语大学'},
        {value: '北京信息科技大学',label: '北京信息科技大学'},
        {value: '北京兴华大学',label: '北京兴华大学'},
        {value: '北京宣武红旗业余大学',label: '北京宣武红旗业余大学'},
        {value: '北京医科大学',label: '北京医科大学'},
        {value: '北京医药集团职工大学',label: '北京医药集团职工大学'},
        {value: '北京应用技术大学',label: '北京应用技术大学'},
        {value: '北京应用科技大学',label: '北京应用科技大学'},
        {value: '北京邮电大学',label: '北京邮电大学'},
        {value: '北京中医药大学',label: '北京中医药大学'},
        {value: '北京自修大学',label: '北京自修大学'},
        {value: '本溪广播电视大学',label: '本溪广播电视大学'},
        {value: '蚌埠市职工大学',label: '蚌埠市职工大学'},
        {value: '毕节地区广播电视大学',label: '毕节地区广播电视大学'},
        {value: '滨州广播电视大学',label: '滨州广播电视大学'},
        {value: '渤海大学',label: '渤海大学'},
        {value: '博罗县广播电视大学',label: '博罗县广播电视大学'},
        {value: '沧州广播电视大学',label: '沧州广播电视大学'},
        {value: '察右中旗广播电视大学',label: '察右中旗广播电视大学'},
        {value: '长安大学',label: '长安大学'},
        {value: '长春大学',label: '长春大学'},
        {value: '长春电力职工大学',label: '长春电力职工大学'},
        {value: '长春东方大学',label: '长春东方大学'},
        {value: '长春工业大学',label: '长春工业大学'},
        {value: '长春广播电视大学',label: '长春广播电视大学'},
        {value: '长春理工大学',label: '长春理工大学'},
        {value: '长春师范大学',label: '长春师范大学'},
        {value: '长春市广播电视大学',label: '长春市广播电视大学'},
        {value: '长春市建筑职工大学',label: '长春市建筑职工大学'},
        {value: '长春市直属机关业余大学',label: '长春市直属机关业余大学'},
        {value: '长春职工大学',label: '长春职工大学'},
        {value: '长春职工医科大学',label: '长春职工医科大学'},
        {value: '长春中医药大学',label: '长春中医药大学'},
        {value: '常德广播电视大学',label: '常德广播电视大学'},
        {value: '长钢集团科技大学',label: '长钢集团科技大学'},
        {value: '长江大学',label: '长江大学'},
        {value: '昌江县五七大学',label: '昌江县五七大学'},
        {value: '长沙大学',label: '长沙大学'},
        {value: '长沙广播电视大学',label: '长沙广播电视大学'},
        {value: '长沙理工大学',label: '长沙理工大学'},
        {value: '长沙市老干部大学',label: '长沙市老干部大学'},
        {value: '长沙市望月湖社区大学',label: '长沙市望月湖社区大学'},
        {value: '长沙职工大学',label: '长沙职工大学'},
        {value: '常熟广播电视大学',label: '常熟广播电视大学'},
        {value: '长治电视大学',label: '长治电视大学'},
        {value: '常州市广播电视大学',label: '常州市广播电视大学'},
        {value: '常州市职工大学',label: '常州市职工大学'},
        {value: '潮阳区广播电视大学',label: '潮阳区广播电视大学'},
        {value: '潮州市广播电视大学',label: '潮州市广播电视大学'},
        {value: '潮州市老干部大学',label: '潮州市老干部大学'},
        {value: '承德广播电视大学',label: '承德广播电视大学'},
        {value: '成都大学',label: '成都大学'},
        {value: '成都电力职工大学',label: '成都电力职工大学'},
        {value: '成都电子科技大学',label: '成都电子科技大学'},
        {value: '成都发动机公司职工大学',label: '成都发动机公司职工大学'},
        {value: '成都工业职工大学',label: '成都工业职工大学'},
        {value: '成都广播电视大学',label: '成都广播电视大学'},
        {value: '成都广播电视中等专业大学',label: '成都广播电视中等专业大学'},
        {value: '成都理工大学',label: '成都理工大学'},
        {value: '成都社会大学',label: '成都社会大学'},
        {value: '成都市成华区老年大学',label: '成都市成华区老年大学'},
        {value: '成都市锦江区老年大学',label: '成都市锦江区老年大学'},
        {value: '成都市金牛区老年大学',label: '成都市金牛区老年大学'},
        {value: '成都市老年大学',label: '成都市老年大学'},
        {value: '成都市龙泉驿区老年大学',label: '成都市龙泉驿区老年大学'},
        {value: '成都市青羊老年大学',label: '成都市青羊老年大学'},
        {value: '成都市职工大学',label: '成都市职工大学'},
        {value: '成都水利水电职工大学',label: '成都水利水电职工大学'},
        {value: '成都中医药大学',label: '成都中医药大学'},
        {value: '赤峰电视大学',label: '赤峰电视大学'},
        {value: '赤峰市广播电视大学',label: '赤峰市广播电视大学'},
        {value: '重庆大学',label: '重庆大学'},
        {value: '重庆工商大学',label: '重庆工商大学'},
        {value: '重庆化工职工大学',label: '重庆化工职工大学'},
        {value: '重庆交通大学',label: '重庆交通大学'},
        {value: '重庆商业职工大学',label: '重庆商业职工大学'},
        {value: '重庆师范大学',label: '重庆师范大学'},
        {value: '重庆市永川广播电视大学',label: '重庆市永川广播电视大学'},
        {value: '重庆医科大学',label: '重庆医科大学'},
        {value: '重庆邮电大学',label: '重庆邮电大学'},
        {value: '崇文区职工大学',label: '崇文区职工大学'},
        {value: '崇文职工大学',label: '崇文职工大学'},
        {value: '楚材自修大学',label: '楚材自修大学'},
        {value: '从化市广播电视大学',label: '从化市广播电视大学'},
        {value: '大港区老年大学',label: '大港区老年大学'},
        {value: '大连大学',label: '大连大学'},
        {value: '大连电视大学',label: '大连电视大学'},
        {value: '大连纺织职工大学',label: '大连纺织职工大学'},
        {value: '大连工人大学',label: '大连工人大学'},
        {value: '大连广播电视大学',label: '大连广播电视大学'},
        {value: '大连海事大学',label: '大连海事大学'},
        {value: '大连交通大学',label: '大连交通大学'},
        {value: '大连开发区电视大学',label: '大连开发区电视大学'},
        {value: '大连劳动就业大学',label: '大连劳动就业大学'},
        {value: '大连理工大学',label: '大连理工大学'},
        {value: '大连市老干部大学',label: '大连市老干部大学'},
        {value: '大连市老年大学',label: '大连市老年大学'},
        {value: '大连市沙河口区老干部大学',label: '大连市沙河口区老干部大学'},
        {value: '大连市委老干部大学',label: '大连市委老干部大学'},
        {value: '大连市西岗区老干部大学',label: '大连市西岗区老干部大学'},
        {value: '大连医科大学',label: '大连医科大学'},
        {value: '大连职工大学',label: '大连职工大学'},
        {value: '大庆广播电视大学',label: '大庆广播电视大学'},
        {value: '大庆石油化工总厂职工大学',label: '大庆石油化工总厂职工大学'},
        {value: '大同大学',label: '大同大学'},
        {value: '大兴老年大学',label: '大兴老年大学'},
        {value: '达州市广播电视大学',label: '达州市广播电视大学'},
        {value: '代尔国际企业家大学',label: '代尔国际企业家大学'},
        {value: '丹东广播电视大学',label: '丹东广播电视大学'},
        {value: '淡江大学',label: '淡江大学'},
        {value: '儋州市五七大学',label: '儋州市五七大学'},
        {value: '德阳广播电视大学',label: '德阳广播电视大学'},
        {value: '德阳旌阳区广播电视大学',label: '德阳旌阳区广播电视大学'},
        {value: '定安县五七大学',label: '定安县五七大学'},
        {value: '东北财经大学',label: '东北财经大学'},
        {value: '东北大学',label: '东北大学'},
        {value: '东北电力大学',label: '东北电力大学'},
        {value: '东北林业大学',label: '东北林业大学'},
        {value: '东北农业大学',label: '东北农业大学'},
        {value: '东北师范大学',label: '东北师范大学'},
        {value: '东方财经日语大学',label: '东方财经日语大学'},
        {value: '东方大学',label: '东方大学'},
        {value: '东方美术大学',label: '东方美术大学'},
        {value: '东方银龄大学',label: '东方银龄大学'},
        {value: '东莞市广播电视大学',label: '东莞市广播电视大学'},
        {value: '东海广播电视大学',label: '东海广播电视大学'},
        {value: '东华大学',label: '东华大学'},
        {value: '东华理工大学',label: '东华理工大学'},
        {value: '东南大学',label: '东南大学'},
        {value: '斗门区广播电视大学',label: '斗门区广播电视大学'},
        {value: '都江堰市老年大学',label: '都江堰市老年大学'},
        {value: '对外经济贸易大学',label: '对外经济贸易大学'},
        {value: '鄂尔多斯大学',label: '鄂尔多斯大学'},
        {value: '鄂州大学',label: '鄂州大学'},
        {value: '恩平市广播电视大学',label: '恩平市广播电视大学'},
        {value: '恩施州广播电视大学',label: '恩施州广播电视大学'},
        {value: '肥东五七大学',label: '肥东五七大学'},
        {value: '封开县广播电视大学',label: '封开县广播电视大学'},
        {value: '丰镇市广播电视大学',label: '丰镇市广播电视大学'},
        {value: '佛山广播电视大学',label: '佛山广播电视大学'},
        {value: '佛山社区大学',label: '佛山社区大学'},
        {value: '福报农场业余大学',label: '福报农场业余大学'},
        {value: '复旦大学',label: '复旦大学'},
        {value: '福建广播电视大学',label: '福建广播电视大学'},
        {value: '福建农林大学',label: '福建农林大学'},
        {value: '福建省漳州业余大学',label: '福建省漳州业余大学'},
        {value: '福建省直属机关业余大学',label: '福建省直属机关业余大学'},
        {value: '福建师范大学',label: '福建师范大学'},
        {value: '福建医科大学',label: '福建医科大学'},
        {value: '福建漳浦广播电视大学',label: '福建漳浦广播电视大学'},
        {value: '福建职工大学',label: '福建职工大学'},
        {value: '福建中华职业大学',label: '福建中华职业大学'},
        {value: '涪陵区老年大学',label: '涪陵区老年大学'},
        {value: '辅仁大学',label: '辅仁大学'},
        {value: '抚顺职工大学',label: '抚顺职工大学'},
        {value: '阜新矿务局职工大学',label: '阜新矿务局职工大学'},
        {value: '阜阳广播电视大学',label: '阜阳广播电视大学'},
        {value: '福州大学',label: '福州大学'},
        {value: '抚州广播电视大学',label: '抚州广播电视大学'},
        {value: '福州广播电视大学',label: '福州广播电视大学'},
        {value: '福州市工人业余大学',label: '福州市工人业余大学'},
        {value: '福州市广播电视大学',label: '福州市广播电视大学'},
        {value: '福州业余大学',label: '福州业余大学'},
        {value: '甘肃工业职工大学',label: '甘肃工业职工大学'},
        {value: '甘肃广播电视大学',label: '甘肃广播电视大学'},
        {value: '甘肃机械电子职工大学',label: '甘肃机械电子职工大学'},
        {value: '甘肃联合大学',label: '甘肃联合大学'},
        {value: '甘肃农垦广播电视大学',label: '甘肃农垦广播电视大学'},
        {value: '甘肃农业大学',label: '甘肃农业大学'},
        {value: '港闸区老年大学',label: '港闸区老年大学'},
        {value: '高密市燎原广播电视大学',label: '高密市燎原广播电视大学'},
        {value: '高明广播电视大学',label: '高明广播电视大学'},
        {value: '高要市广播电视大学',label: '高要市广播电视大学'},
        {value: '高州电视大学',label: '高州电视大学'},
        {value: '固镇五七大学',label: '固镇五七大学'},
        {value: '广安广播电视大学',label: '广安广播电视大学'},
        {value: '广播电视大学',label: '广播电视大学'},
        {value: '广昌劳动大学',label: '广昌劳动大学'},
        {value: '广东博大学院',label: '广东博大学院'},
        {value: '广东二轻职工大学',label: '广东二轻职工大学'},
        {value: '广东法商大学',label: '广东法商大学'},
        {value: '广东工业大学',label: '广东工业大学'},
        {value: '广东广播电视大学',label: '广东广播电视大学'},
        {value: '广东海洋大学',label: '广东海洋大学'},
        {value: '广东龙川广播电视大学',label: '广东龙川广播电视大学'},
        {value: '广东社会科学大学',label: '广东社会科学大学'},
        {value: '广东省成科技大学',label: '广东省成科技大学'},
        {value: '广东外语外贸大学',label: '广东外语外贸大学'},
        {value: '广东业余大学',label: '广东业余大学'},
        {value: '广东云浮广播电视大学',label: '广东云浮广播电视大学'},
        {value: '广东智通自学辅导大学',label: '广东智通自学辅导大学'},
        {value: '广西大学',label: '广西大学'},
        {value: '广西广播电视大学',label: '广西广播电视大学'},
        {value: '广西民族大学',label: '广西民族大学'},
        {value: '广西师范大学',label: '广西师范大学'},
        {value: '广西医科大学',label: '广西医科大学'},
        {value: '广州大学',label: '广州大学'},
        {value: '广州市白云区老干部大学',label: '广州市白云区老干部大学'},
        {value: '广州市东山区老人大学',label: '广州市东山区老人大学'},
        {value: '广州市广播电视大学',label: '广州市广播电视大学'},
        {value: '广州市黄埔区老年大学大学',label: '广州市黄埔区老年大学大学'},
        {value: '广州市荔湾区老年大学',label: '广州市荔湾区老年大学'},
        {value: '广州市联合职工大学',label: '广州市联合职工大学'},
        {value: '广州石油大学',label: '广州石油大学'},
        {value: '广州铁路集团公司老年大学',label: '广州铁路集团公司老年大学'},
        {value: '广州外语外贸大学',label: '广州外语外贸大学'},
        {value: '广州业余大学',label: '广州业余大学'},
        {value: '广州医药大学',label: '广州医药大学'},
        {value: '广州中医药大学',label: '广州中医药大学'},
        {value: '贵港市广播电视大学',label: '贵港市广播电视大学'},
        {value: '硅湖大学',label: '硅湖大学'},
        {value: '桂林电子科技大学',label: '桂林电子科技大学'},
        {value: '桂林广播电视大学',label: '桂林广播电视大学'},
        {value: '桂林市职工大学',label: '桂林市职工大学'},
        {value: '贵阳联合职业大学',label: '贵阳联合职业大学'},
        {value: '贵阳师范大学',label: '贵阳师范大学'},
        {value: '贵阳职工大学',label: '贵阳职工大学'},
        {value: '贵州大学',label: '贵州大学'},
        {value: '贵州工业大学',label: '贵州工业大学'},
        {value: '贵州广播电视大学',label: '贵州广播电视大学'},
        {value: '贵州航空工业职工大学',label: '贵州航空工业职工大学'},
        {value: '贵州老年大学',label: '贵州老年大学'},
        {value: '贵州省邮电大学',label: '贵州省邮电大学'},
        {value: '贵州师范大学',label: '贵州师范大学'},
        {value: '国防大学',label: '国防大学'},
        {value: '国航大学',label: '国航大学'},
        {value: '国际青年研修大学',label: '国际青年研修大学'},
        {value: '国考大学',label: '国考大学'},
        {value: '国立华侨大学',label: '国立华侨大学'},
        {value: '国立空中大学',label: '国立空中大学'},
        {value: '国立武汉大学',label: '国立武汉大学'},
        {value: '国立艺术大学',label: '国立艺术大学'},
        {value: '涡阳五七大学',label: '涡阳五七大学'},
        {value: '国营南京有线电厂职工大学',label: '国营南京有线电厂职工大学'},
        {value: '哈尔滨大学',label: '哈尔滨大学'},
        {value: '哈尔滨大学夜大学',label: '哈尔滨大学夜大学'},
        {value: '哈尔滨工程大学',label: '哈尔滨工程大学'},
        {value: '哈尔滨工业大学',label: '哈尔滨工业大学'},
        {value: '哈尔滨工业大学电大',label: '哈尔滨工业大学电大'},
        {value: '哈尔滨广播电视大学',label: '哈尔滨广播电视大学'},
        {value: '哈尔滨航空职工大学',label: '哈尔滨航空职工大学'},
        {value: '哈尔滨理工大学',label: '哈尔滨理工大学'},
        {value: '哈尔滨商业大学',label: '哈尔滨商业大学'},
        {value: '哈尔滨市财贸职工大学',label: '哈尔滨市财贸职工大学'},
        {value: '哈尔滨师范大学',label: '哈尔滨师范大学'},
        {value: '哈尔滨市机电职工大学',label: '哈尔滨市机电职工大学'},
        {value: '哈尔滨市科技职工大学',label: '哈尔滨市科技职工大学'},
        {value: '哈尔滨市职工大学',label: '哈尔滨市职工大学'},
        {value: '哈尔滨医科大学',label: '哈尔滨医科大学'},
        {value: '哈密广播电视大学',label: '哈密广播电视大学'},
        {value: '海城市广播电视大学',label: '海城市广播电视大学'},
        {value: '海淀区职工大学',label: '海淀区职工大学'},
        {value: '海淀走读大学',label: '海淀走读大学'},
        {value: '海南大学',label: '海南大学'},
        {value: '海南广播电视大学',label: '海南广播电视大学'},
        {value: '海南师范大学',label: '海南师范大学'},
        {value: '海洋大学',label: '海洋大学'},
        {value: '邯郸大学',label: '邯郸大学'},
        {value: '邯郸广播电视大学',label: '邯郸广播电视大学'},
        {value: '航空大学',label: '航空大学'},
        {value: '杭州大学',label: '杭州大学'},
        {value: '杭州电子科技大学',label: '杭州电子科技大学'},
        {value: '杭州广播电视大学',label: '杭州广播电视大学'},
        {value: '杭州轻工职工大学',label: '杭州轻工职工大学'},
        {value: '杭州师范大学',label: '杭州师范大学'},
        {value: '杭州市工人业余大学',label: '杭州市工人业余大学'},
        {value: '杭州市职工大学',label: '杭州市职工大学'},
        {value: '河北大学',label: '河北大学'},
        {value: '河北地质职工大学',label: '河北地质职工大学'},
        {value: '河北电力职工大学',label: '河北电力职工大学'},
        {value: '河北工程大学',label: '河北工程大学'},
        {value: '河北工业大学',label: '河北工业大学'},
        {value: '河北广播电视大学',label: '河北广播电视大学'},
        {value: '河北经贸大学',label: '河北经贸大学'},
        {value: '河北敬业职工大学',label: '河北敬业职工大学'},
        {value: '河北科技大学',label: '河北科技大学'},
        {value: '河北农业大学',label: '河北农业大学'},
        {value: '河北师范大学',label: '河北师范大学'},
        {value: '河北医科大学',label: '河北医科大学'},
        {value: '合川区广播电视大学',label: '合川区广播电视大学'},
        {value: '合肥工业大学',label: '合肥工业大学'},
        {value: '合肥广播电视大学',label: '合肥广播电视大学'},
        {value: '合肥职工科技大学',label: '合肥职工科技大学'},
        {value: '鹤岗电视大学',label: '鹤岗电视大学'},
        {value: '河海大学',label: '河海大学'},
        {value: '河南大学',label: '河南大学'},
        {value: '河南电力职工大学',label: '河南电力职工大学'},
        {value: '河南工业大学',label: '河南工业大学'},
        {value: '河南广播电视大学',label: '河南广播电视大学'},
        {value: '河南科技大学',label: '河南科技大学'},
        {value: '河南理工大学',label: '河南理工大学'},
        {value: '河南农业大学',label: '河南农业大学'},
        {value: '河南省对外贸易职工大学',label: '河南省对外贸易职工大学'},
        {value: '河南省建筑职工大学',label: '河南省建筑职工大学'},
        {value: '河南省轻工业职工大学',label: '河南省轻工业职工大学'},
        {value: '河南省邮电大学',label: '河南省邮电大学'},
        {value: '河南省直广播电视大学',label: '河南省直广播电视大学'},
        {value: '河南师范大学',label: '河南师范大学'},
        {value: '和平区老干部大学',label: '和平区老干部大学'},
        {value: '河套大学',label: '河套大学'},
        {value: '和田广播电视大学',label: '和田广播电视大学'},
        {value: '河西区委老干部大学',label: '河西区委老干部大学'},
        {value: '河源广播电视大学',label: '河源广播电视大学'},
        {value: '黑河广播电视大学',label: '黑河广播电视大学'},
        {value: '黑龙江八一农垦大学',label: '黑龙江八一农垦大学'},
        {value: '黑龙江北开大学',label: '黑龙江北开大学'},
        {value: '黑龙江兵器工业职工大学',label: '黑龙江兵器工业职工大学'},
        {value: '黑龙江大学',label: '黑龙江大学'},
        {value: '黑龙江电力职工大学',label: '黑龙江电力职工大学'},
        {value: '黑龙江广播电视大学',label: '黑龙江广播电视大学'},
        {value: '黑龙江科技大学',label: '黑龙江科技大学'},
        {value: '黑龙江联合大学',label: '黑龙江联合大学'},
        {value: '黑龙江民盟大学',label: '黑龙江民盟大学'},
        {value: '黑龙江省北开大学',label: '黑龙江省北开大学'},
        {value: '黑龙江省二轻职工大学',label: '黑龙江省二轻职工大学'},
        {value: '黑龙江省广播电视大学',label: '黑龙江省广播电视大学'},
        {value: '黑龙江省科技职工大学',label: '黑龙江省科技职工大学'},
        {value: '黑龙江省老年美术大学',label: '黑龙江省老年美术大学'},
        {value: '黑龙江省农垦广播电视大学',label: '黑龙江省农垦广播电视大学'},
        {value: '黑龙江省商业职工大学',label: '黑龙江省商业职工大学'},
        {value: '黑龙江省邮电职工大学',label: '黑龙江省邮电职工大学'},
        {value: '黑龙江省直属机关职工大学',label: '黑龙江省直属机关职工大学'},
        {value: '黑龙江省职属机关职业大学',label: '黑龙江省职属机关职业大学'},
        {value: '黑龙江中医药大学',label: '黑龙江中医药大学'},
        {value: '衡水广播电视大学',label: '衡水广播电视大学'},
        {value: '衡阳市广播电视大学',label: '衡阳市广播电视大学'},
        {value: '衡阳市职工大学',label: '衡阳市职工大学'},
        {value: '衡阳职工大学',label: '衡阳职工大学'},
        {value: '红桥区电视大学',label: '红桥区电视大学'},
        {value: '红桥区职工大学',label: '红桥区职工大学'},
        {value: '湖北大学',label: '湖北大学'},
        {value: '湖北公安自修大学',label: '湖北公安自修大学'},
        {value: '湖北工业大学',label: '湖北工业大学'},
        {value: '湖北广播电视大学',label: '湖北广播电视大学'},
        {value: '湖北函授大学',label: '湖北函授大学'},
        {value: '湖北经济管理大学',label: '湖北经济管理大学'},
        {value: '湖北潜江广播电视大学',label: '湖北潜江广播电视大学'},
        {value: '湖北商贸自修大学',label: '湖北商贸自修大学'},
        {value: '湖北省直属机关广播电视大学',label: '湖北省直属机关广播电视大学'},
        {value: '湖北省直属机关业余大学',label: '湖北省直属机关业余大学'},
        {value: '湖北医科大学',label: '湖北医科大学'},
        {value: '呼和浩特广播电视大学',label: '呼和浩特广播电视大学'},
        {value: '呼伦贝尔市广播电视大学',label: '呼伦贝尔市广播电视大学'},
        {value: '湖南大学',label: '湖南大学'},
        {value: '湖南鼎城电视大学',label: '湖南鼎城电视大学'},
        {value: '湖南纺织职工大学',label: '湖南纺织职工大学'},
        {value: '湖南工业大学',label: '湖南工业大学'},
        {value: '湖南广播电视大学',label: '湖南广播电视大学'},
        {value: '湖南金融技术职工大学',label: '湖南金融技术职工大学'},
        {value: '湖南老干部大学',label: '湖南老干部大学'},
        {value: '湖南农业大学',label: '湖南农业大学'},
        {value: '湖南女子大学',label: '湖南女子大学'},
        {value: '湖南省老干部大学',label: '湖南省老干部大学'},
        {value: '湖南省石油化工职工大学',label: '湖南省石油化工职工大学'},
        {value: '湖南省医科大学',label: '湖南省医科大学'},
        {value: '湖南省直机关干部自修大学',label: '湖南省直机关干部自修大学'},
        {value: '湖南师范大学',label: '湖南师范大学'},
        {value: '湖南橡胶厂职工大学',label: '湖南橡胶厂职工大学'},
        {value: '湖南有色金属职工大学',label: '湖南有色金属职工大学'},
        {value: '湖南中医药大学',label: '湖南中医药大学'},
        {value: '湖州广播电视大学',label: '湖州广播电视大学'},
        {value: '华北电力大学',label: '华北电力大学'},
        {value: '华北电业联合职工大学',label: '华北电业联合职工大学'},
        {value: '华东交通大学',label: '华东交通大学'},
        {value: '华东理工大学',label: '华东理工大学'},
        {value: '华东师范大学',label: '华东师范大学'},
        {value: '华东政法大学',label: '华东政法大学'},
        {value: '华南理工大学',label: '华南理工大学'},
        {value: '华南农业大学',label: '华南农业大学'},
        {value: '华南热带农业大学',label: '华南热带农业大学'},
        {value: '华南师范大学',label: '华南师范大学'},
        {value: '华侨大学',label: '华侨大学'},
        {value: '华西医科大学',label: '华西医科大学'},
        {value: '华中科技大学',label: '华中科技大学'},
        {value: '华中农业大学',label: '华中农业大学'},
        {value: '华中女子大学',label: '华中女子大学'},
        {value: '华中师范大学',label: '华中师范大学'},
        {value: '化州市广播电视大学',label: '化州市广播电视大学'},
        {value: '淮安老年大学',label: '淮安老年大学'},
        {value: '淮安市广播电视大学',label: '淮安市广播电视大学'},
        {value: '淮北广播电视大学',label: '淮北广播电视大学'},
        {value: '怀化广播电视大学',label: '怀化广播电视大学'},
        {value: '淮南联合大学',label: '淮南联合大学'},
        {value: '黄冈广播电视大学',label: '黄冈广播电视大学'},
        {value: '黄冈黄州区广播电视大学',label: '黄冈黄州区广播电视大学'},
        {value: '黄河科技大学',label: '黄河科技大学'},
        {value: '黄南州广播电视大学',label: '黄南州广播电视大学'},
        {value: '黄浦区老干部大学',label: '黄浦区老干部大学'},
        {value: '黄石广播电视大学',label: '黄石广播电视大学'},
        {value: '湟中县广播电视大学',label: '湟中县广播电视大学'},
        {value: '惠东县广播电视大学',label: '惠东县广播电视大学'},
        {value: '惠来县广播电视大学',label: '惠来县广播电视大学'},
        {value: '惠州市广播电视大学',label: '惠州市广播电视大学'},
        {value: '惠州市惠阳区广播电视大学',label: '惠州市惠阳区广播电视大学'},
        {value: '霍城县五七大学',label: '霍城县五七大学'},
        {value: '吉林大学',label: '吉林大学'},
        {value: '吉林工业大学',label: '吉林工业大学'},
        {value: '吉林广播电视大学',label: '吉林广播电视大学'},
        {value: '吉林农业大学',label: '吉林农业大学'},
        {value: '吉林省广播电视大学',label: '吉林省广播电视大学'},
        {value: '吉林省老干部大学',label: '吉林省老干部大学'},
        {value: '吉林省直属机关业余大学',label: '吉林省直属机关业余大学'},
        {value: '吉林师范大学',label: '吉林师范大学'},
        {value: '吉林市广播电视大学',label: '吉林市广播电视大学'},
        {value: '吉林市职工大学',label: '吉林市职工大学'},
        {value: '吉林铁路运输职工大学',label: '吉林铁路运输职工大学'},
        {value: '吉林职工医科大学',label: '吉林职工医科大学'},
        {value: '集美大学',label: '集美大学'},
        {value: '暨南大学',label: '暨南大学'},
        {value: '济南大学',label: '济南大学'},
        {value: '济南广播电视大学',label: '济南广播电视大学'},
        {value: '济南机械职工大学',label: '济南机械职工大学'},
        {value: '济南老年大学',label: '济南老年大学'},
        {value: '济南老年人大学',label: '济南老年人大学'},
        {value: '济南联合大学',label: '济南联合大学'},
        {value: '济南铁洛局广播电视大学',label: '济南铁洛局广播电视大学'},
        {value: '济南职工科技大学',label: '济南职工科技大学'},
        {value: '济宁广播电视大学',label: '济宁广播电视大学'},
        {value: '吉首大学',label: '吉首大学'},
        {value: '鸡西大学',label: '鸡西大学'},
        {value: '鸡西广播电视大学',label: '鸡西广播电视大学'},
        {value: '机械电子工程师进修大学',label: '机械电子工程师进修大学'},
        {value: '机械工业职工大学',label: '机械工业职工大学'},
        {value: '机械职业大学',label: '机械职业大学'},
        {value: '嘉定区老干部大学',label: '嘉定区老干部大学'},
        {value: '佳木斯大学',label: '佳木斯大学'},
        {value: '佳木斯广播电视大学',label: '佳木斯广播电视大学'},
        {value: '佳木斯市联合职工大学',label: '佳木斯市联合职工大学'},
        {value: '加拿大学院麦迪逊学院',label: '加拿大学院麦迪逊学院'},
        {value: '嘉兴广播电视大学',label: '嘉兴广播电视大学'},
        {value: '嘉应大学',label: '嘉应大学'},
        {value: '建平广播电视大学',label: '建平广播电视大学'},
        {value: '建设职工大学',label: '建设职工大学'},
        {value: '江店五七大学',label: '江店五七大学'},
        {value: '江汉大学',label: '江汉大学'},
        {value: '江津广播电视大学',label: '江津广播电视大学'},
        {value: '江门大学',label: '江门大学'},
        {value: '江门电视大学',label: '江门电视大学'},
        {value: '江南大学',label: '江南大学'},
        {value: '江宁街道老年大学',label: '江宁街道老年大学'},
        {value: '江苏大学',label: '江苏大学'},
        {value: '江苏电力职工大学',label: '江苏电力职工大学'},
        {value: '江苏电视大学',label: '江苏电视大学'},
        {value: '江苏广播电视大学',label: '江苏广播电视大学'},
        {value: '江苏机械电子工程师进修大学',label: '江苏机械电子工程师进修大学'},
        {value: '江苏科技大学',label: '江苏科技大学'},
        {value: '江苏社科进修大学',label: '江苏社科进修大学'},
        {value: '江苏省广播电视大学',label: '江苏省广播电视大学'},
        {value: '江苏省建筑职工大学',label: '江苏省建筑职工大学'},
        {value: '江苏省空中老年大学',label: '江苏省空中老年大学'},
        {value: '江苏省老年大学',label: '江苏省老年大学'},
        {value: '江苏省理工大学',label: '江苏省理工大学'},
        {value: '江苏职工医科大学',label: '江苏职工医科大学'},
        {value: '江西财经大学',label: '江西财经大学'},
        {value: '江西诚信服饰大学',label: '江西诚信服饰大学'},
        {value: '江西广播电视大学',label: '江西广播电视大学'},
        {value: '江西机械工业大学',label: '江西机械工业大学'},
        {value: '江西理工大学',label: '江西理工大学'},
        {value: '江西农业大学',label: '江西农业大学'},
        {value: '江西省老同志大学',label: '江西省老同志大学'},
        {value: '江西省农村致福技术函授大学',label: '江西省农村致福技术函授大学'},
        {value: '江西师范大学',label: '江西师范大学'},
        {value: '蛟河广播电视大学',label: '蛟河广播电视大学'},
        {value: '蕉岭县广播电视大学',label: '蕉岭县广播电视大学'},
        {value: '教师进修大学',label: '教师进修大学'},
        {value: '交通大学',label: '交通大学'},
        {value: '焦作大学',label: '焦作大学'},
        {value: '揭阳市广播电视大学',label: '揭阳市广播电视大学'},
        {value: '晋城市广播电视职工大学',label: '晋城市广播电视职工大学'},
        {value: '金华广播电视大学',label: '金华广播电视大学'},
        {value: '浸会大学',label: '浸会大学'},
        {value: '金盆山劳动大学',label: '金盆山劳动大学'},
        {value: '锦山电视大学',label: '锦山电视大学'},
        {value: '金坛市广播电视大学',label: '金坛市广播电视大学'},
        {value: '金堂县老年大学',label: '金堂县老年大学'},
        {value: '锦州电视大学',label: '锦州电视大学'},
        {value: '井冈山大学',label: '井冈山大学'},
        {value: '京华医科大学',label: '京华医科大学'},
        {value: '京桥大学',label: '京桥大学'},
        {value: '京西大学',label: '京西大学'},
        {value: '九江广播电视大学',label: '九江广播电视大学'},
        {value: '九江职业大学',label: '九江职业大学'},
        {value: '九州大学',label: '九州大学'},
        {value: '开发区老年大学',label: '开发区老年大学'},
        {value: '开封大学',label: '开封大学'},
        {value: '开封市广播电视大学',label: '开封市广播电视大学'},
        {value: '开平市伟伦广播电视大学',label: '开平市伟伦广播电视大学'},
        {value: '科技大学',label: '科技大学'},
        {value: '科右中旗五七大学',label: '科右中旗五七大学'},
        {value: '库伦旗五七大学',label: '库伦旗五七大学'},
        {value: '矿山大学',label: '矿山大学'},
        {value: '矿务局工人大学',label: '矿务局工人大学'},
        {value: '昆明大学',label: '昆明大学'},
        {value: '昆明广播电视大学',label: '昆明广播电视大学'},
        {value: '昆明理工大学',label: '昆明理工大学'},
        {value: '莱阳市广播电视大学',label: '莱阳市广播电视大学'},
        {value: '兰州大学',label: '兰州大学'},
        {value: '兰州服装职工大学',label: '兰州服装职工大学'},
        {value: '兰州航空工业职工大学',label: '兰州航空工业职工大学'},
        {value: '兰州交通大学',label: '兰州交通大学'},
        {value: '兰州理工大学',label: '兰州理工大学'},
        {value: '兰州铁路工程职工大学',label: '兰州铁路工程职工大学'},
        {value: '廊坊电视广播大学',label: '廊坊电视广播大学'},
        {value: '劳动大学',label: '劳动大学'},
        {value: '劳动大学干部学校',label: '劳动大学干部学校'},
        {value: '老干部大学',label: '老干部大学'},
        {value: '老年大学',label: '老年大学'},
        {value: '老年人大学',label: '老年人大学'},
        {value: '乐亭县广播电视大学',label: '乐亭县广播电视大学'},
        {value: '乐安劳动大学',label: '乐安劳动大学'},
        {value: '乐昌市广播电视大学',label: '乐昌市广播电视大学'},
        {value: '乐东黎族自治县五七大学',label: '乐东黎族自治县五七大学'},
        {value: '乐山广播电视大学',label: '乐山广播电视大学'},
        {value: '鲤城电视大学',label: '鲤城电视大学'},
        {value: '黎明大学',label: '黎明大学'},
        {value: '力诺大学',label: '力诺大学'},
        {value: '丽水广播电视大学',label: '丽水广播电视大学'},
        {value: '蠡县广播电视大学',label: '蠡县广播电视大学'},
        {value: '连南劳动大学',label: '连南劳动大学'},
        {value: '连南县广播电视大学',label: '连南县广播电视大学'},
        {value: '连平县广播电视大学',label: '连平县广播电视大学'},
        {value: '连山县广播电视大学',label: '连山县广播电视大学'},
        {value: '连云港广播电视大学',label: '连云港广播电视大学'},
        {value: '连州市广播电视大学',label: '连州市广播电视大学'},
        {value: '凉山广播电视大学',label: '凉山广播电视大学'},
        {value: '聊城大学',label: '聊城大学'},
        {value: '辽宁大学',label: '辽宁大学'},
        {value: '辽宁工程技术大学',label: '辽宁工程技术大学'},
        {value: '辽宁工业大学',label: '辽宁工业大学'},
        {value: '辽宁广播电视大学',label: '辽宁广播电视大学'},
        {value: '辽宁建设职工大学',label: '辽宁建设职工大学'},
        {value: '辽宁省直属机关职工大学',label: '辽宁省直属机关职工大学'},
        {value: '辽宁师范大学',label: '辽宁师范大学'},
        {value: '辽宁石油化工大学',label: '辽宁石油化工大学'},
        {value: '辽宁中医药大学',label: '辽宁中医药大学'},
        {value: '辽源市老干部大学',label: '辽源市老干部大学'},
        {value: '林口五七大学',label: '林口五七大学'},
        {value: '临夏州广播电视大学',label: '临夏州广播电视大学'},
        {value: '林业大学',label: '林业大学'},
        {value: '临沂广播电视大学',label: '临沂广播电视大学'},
        {value: '六盘水市电视大学',label: '六盘水市电视大学'},
        {value: '柳州市广播电视大学',label: '柳州市广播电视大学'},
        {value: '龙柏老年大学',label: '龙柏老年大学'},
        {value: '龙门县广播电视大学',label: '龙门县广播电视大学'},
        {value: '陇南电视大学',label: '陇南电视大学'},
        {value: '娄底广播电视大学',label: '娄底广播电视大学'},
        {value: '鲁东大学',label: '鲁东大学'},
        {value: '陆丰市广播电视大学',label: '陆丰市广播电视大学'},
        {value: '陆河县广播电视大学',label: '陆河县广播电视大学'},
        {value: '卢湾区老干部大学',label: '卢湾区老干部大学'},
        {value: '泸州广播电视大学',label: '泸州广播电视大学'},
        {value: '罗坝子五七大学',label: '罗坝子五七大学'},
        {value: '罗定市广播电视大学',label: '罗定市广播电视大学'},
        {value: '洛阳有色金属职工大学',label: '洛阳有色金属职工大学'},
        {value: '罗子沟五七大学',label: '罗子沟五七大学'},
        {value: '吕梁电视大学',label: '吕梁电视大学'},
        {value: '马鞍山电视网络大学',label: '马鞍山电视网络大学'},
        {value: '马鞍山市电视大学',label: '马鞍山市电视大学'},
        {value: '麻城广播电视大学',label: '麻城广播电视大学'},
        {value: '茂名广播电视大学',label: '茂名广播电视大学'},
        {value: '眉山广播电视大学',label: '眉山广播电视大学'},
        {value: '梅山老干部大学',label: '梅山老干部大学'},
        {value: '梅州市广播电视大学',label: '梅州市广播电视大学'},
        {value: '蒙代尔国际企业家大学',label: '蒙代尔国际企业家大学'},
        {value: '盟农垦大学',label: '盟农垦大学'},
        {value: '棉花巷北塘区老年大学',label: '棉花巷北塘区老年大学'},
        {value: '绵阳广播电视大学',label: '绵阳广播电视大学'},
        {value: '民革西安市西华自修大学',label: '民革西安市西华自修大学'},
        {value: '闽江大学',label: '闽江大学'},
        {value: '民进西安大学',label: '民进西安大学'},
        {value: '民盟华西大学',label: '民盟华西大学'},
        {value: '铭传大学',label: '铭传大学'},
        {value: '明园大学',label: '明园大学'},
        {value: '牡丹江大学',label: '牡丹江大学'},
        {value: '牡丹江林区电视大学',label: '牡丹江林区电视大学'},
        {value: '南昌大学',label: '南昌大学'},
        {value: '南昌钢铁公司职工大学',label: '南昌钢铁公司职工大学'},
        {value: '南昌广播电视大学',label: '南昌广播电视大学'},
        {value: '南昌航空大学',label: '南昌航空大学'},
        {value: '南昌科技大学',label: '南昌科技大学'},
        {value: '南昌市工人业余大学',label: '南昌市工人业余大学'},
        {value: '南昌市老年大学',label: '南昌市老年大学'},
        {value: '南昌市职工科技大学',label: '南昌市职工科技大学'},
        {value: '南城劳动大学',label: '南城劳动大学'},
        {value: '南方大学',label: '南方大学'},
        {value: '南方医科大学',label: '南方医科大学'},
        {value: '南海广播电视大学',label: '南海广播电视大学'},
        {value: '南华大学',label: '南华大学'},
        {value: '南汇区老年大学',label: '南汇区老年大学'},
        {value: '南京财经大学',label: '南京财经大学'},
        {value: '南京大学',label: '南京大学'},
        {value: '南京电子工业职工大学',label: '南京电子工业职工大学'},
        {value: '南京工业大学',label: '南京工业大学'},
        {value: '南京广播电视大学',label: '南京广播电视大学'},
        {value: '南京航空航天大学',label: '南京航空航天大学'},
        {value: '南京化工大学',label: '南京化工大学'},
        {value: '南京华夏老年大学',label: '南京华夏老年大学'},
        {value: '南京江宁广播电视大学',label: '南京江宁广播电视大学'},
        {value: '南京理工大学',label: '南京理工大学'},
        {value: '南京联合职工大学',label: '南京联合职工大学'},
        {value: '南京联会职工大学',label: '南京联会职工大学'},
        {value: '南京林业大学',label: '南京林业大学'},
        {value: '南京农业大学',label: '南京农业大学'},
        {value: '南京秦淮社区大学',label: '南京秦淮社区大学'},
        {value: '南京师范大学',label: '南京师范大学'},
        {value: '南京市鼓楼区老年大学',label: '南京市鼓楼区老年大学'},
        {value: '南京市航空航天大学',label: '南京市航空航天大学'},
        {value: '南京市建筑职工大学',label: '南京市建筑职工大学'},
        {value: '南京市木材公司职工大学',label: '南京市木材公司职工大学'},
        {value: '南京市职业大学',label: '南京市职业大学'},
        {value: '南京信息工程大学',label: '南京信息工程大学'},
        {value: '南京医科大学',label: '南京医科大学'},
        {value: '南京邮电大学',label: '南京邮电大学'},
        {value: '南京中医药大学',label: '南京中医药大学'},
        {value: '南开大学',label: '南开大学'},
        {value: '南宁市广播电视大学',label: '南宁市广播电视大学'},
        {value: '南平广播电视大学',label: '南平广播电视大学'},
        {value: '南通大学',label: '南通大学'},
        {value: '南通电视大学',label: '南通电视大学'},
        {value: '南通职业大学',label: '南通职业大学'},
        {value: '南雄市广播电视大学',label: '南雄市广播电视大学'},
        {value: '内江广播电视大学',label: '内江广播电视大学'},
        {value: '内蒙古大学',label: '内蒙古大学'},
        {value: '内蒙古工业大学',label: '内蒙古工业大学'},
        {value: '内蒙古广播电视大学',label: '内蒙古广播电视大学'},
        {value: '内蒙古科技大学',label: '内蒙古科技大学'},
        {value: '内蒙古农业大学',label: '内蒙古农业大学'},
        {value: '内蒙古师范大学',label: '内蒙古师范大学'},
        {value: '宁波大学',label: '宁波大学'},
        {value: '宁波广播电视大学',label: '宁波广播电视大学'},
        {value: '宁波诺丁汉大学',label: '宁波诺丁汉大学'},
        {value: '宁德业余大学',label: '宁德业余大学'},
        {value: '宁国广播电视大学',label: '宁国广播电视大学'},
        {value: '宁海社区大学',label: '宁海社区大学'},
        {value: '宁海县老年大学',label: '宁海县老年大学'},
        {value: '宁夏大学',label: '宁夏大学'},
        {value: '宁夏广播电视大学',label: '宁夏广播电视大学'},
        {value: '宁夏老年大学',label: '宁夏老年大学'},
        {value: '农业大学',label: '农业大学'},
        {value: '盘锦广播电视大学',label: '盘锦广播电视大学'},
        {value: '盘龙职工大学',label: '盘龙职工大学'},
        {value: '盘石电视大学',label: '盘石电视大学'},
        {value: '磐石广播电视大学',label: '磐石广播电视大学'},
        {value: '番禺广播电视大学',label: '番禺广播电视大学'},
        {value: '番禺区老年干部大学',label: '番禺区老年干部大学'},
        {value: '攀枝花广播电视大学',label: '攀枝花广播电视大学'},
        {value: '彭城大学',label: '彭城大学'},
        {value: '邳州市广播电视大学',label: '邳州市广播电视大学'},
        {value: '萍乡广播电视大学',label: '萍乡广播电视大学'},
        {value: '平远县广播电视大学',label: '平远县广播电视大学'},
        {value: '普宁广播电视大学',label: '普宁广播电视大学'},
        {value: '普陀区老干部大学',label: '普陀区老干部大学'},
        {value: '普陀业余大学',label: '普陀业余大学'},
        {value: '濮阳广播电视大学',label: '濮阳广播电视大学'},
        {value: '齐齐哈尔市广播电视大学',label: '齐齐哈尔市广播电视大学'},
        {value: '齐齐哈尔市建设职工大学',label: '齐齐哈尔市建设职工大学'},
        {value: '七团场五七大学',label: '七团场五七大学'},
        {value: '前进大学',label: '前进大学'},
        {value: '迁西电视大学',label: '迁西电视大学'},
        {value: '侨鑫大学',label: '侨鑫大学'},
        {value: '秦淮区职工大学',label: '秦淮区职工大学'},
        {value: '青岛大学',label: '青岛大学'},
        {value: '青岛广播电视大学',label: '青岛广播电视大学'},
        {value: '青岛军政人文大学',label: '青岛军政人文大学'},
        {value: '青岛科技大学',label: '青岛科技大学'},
        {value: '青岛理工大学',label: '青岛理工大学'},
        {value: '青岛农业大学',label: '青岛农业大学'},
        {value: '青海大学',label: '青海大学'},
        {value: '青海省广播电视大学',label: '青海省广播电视大学'},
        {value: '青海省海南广播电视大学',label: '青海省海南广播电视大学'},
        {value: '青海师范大学',label: '青海师范大学'},
        {value: '清华大学',label: '清华大学'},
        {value: '清涧五七大学',label: '清涧五七大学'},
        {value: '青阳广播电视大学',label: '青阳广播电视大学'},
        {value: '庆阳市广播电视大学',label: '庆阳市广播电视大学'},
        {value: '琼州大学',label: '琼州大学'},
        {value: '曲阜师范大学',label: '曲阜师范大学'},
        {value: '曲江广播电视大学',label: '曲江广播电视大学'},
        {value: '曲靖广播电视大学',label: '曲靖广播电视大学'},
        {value: '衢州老年大学',label: '衢州老年大学'},
        {value: '衢州市广播电视大学',label: '衢州市广播电视大学'},
        {value: '泉州电视大学',label: '泉州电视大学'},
        {value: '饶平县广播电视大学',label: '饶平县广播电视大学'},
        {value: '任大学校',label: '任大学校'},
        {value: '日照广播电视大学',label: '日照广播电视大学'},
        {value: '荣成市广播电视大学',label: '荣成市广播电视大学'},
        {value: '容城县五七大学',label: '容城县五七大学'},
        {value: '如东广播电视大学',label: '如东广播电视大学'},
        {value: '三江大学',label: '三江大学'},
        {value: '三明大学',label: '三明大学'},
        {value: '三平五七大学',label: '三平五七大学'},
        {value: '三水广播电视大学',label: '三水广播电视大学'},
        {value: '三峡大学',label: '三峡大学'},
        {value: '三峡联合职业大学',label: '三峡联合职业大学'},
        {value: '三亚市五七大学',label: '三亚市五七大学'},
        {value: '沙市大学',label: '沙市大学'},
        {value: '杉达大学',label: '杉达大学'},
        {value: '山东财政职工大学',label: '山东财政职工大学'},
        {value: '山东大学',label: '山东大学'},
        {value: '山东工业大学',label: '山东工业大学'},
        {value: '山东广播电视大学',label: '山东广播电视大学'},
        {value: '山东建筑大学',label: '山东建筑大学'},
        {value: '山东科技大学',label: '山东科技大学'},
        {value: '山东老年大学',label: '山东老年大学'},
        {value: '山东理工大学',label: '山东理工大学'},
        {value: '山东联合大学',label: '山东联合大学'},
        {value: '山东农业大学',label: '山东农业大学'},
        {value: '山东省财政技工大学',label: '山东省财政技工大学'},
        {value: '山东省广播电视大学',label: '山东省广播电视大学'},
        {value: '山东省贸易职工大学',label: '山东省贸易职工大学'},
        {value: '山东省农村应用技术函授大学',label: '山东省农村应用技术函授大学'},
        {value: '山东师范大学',label: '山东师范大学'},
        {value: '山东外国语大学',label: '山东外国语大学'},
        {value: '山东冶金职工大学',label: '山东冶金职工大学'},
        {value: '山东医科大学',label: '山东医科大学'},
        {value: '山东中西医联合大学',label: '山东中西医联合大学'},
        {value: '山东中医药大学',label: '山东中医药大学'},
        {value: '山口乡五七大学',label: '山口乡五七大学'},
        {value: '山荣农场业余大学',label: '山荣农场业余大学'},
        {value: '汕头大学',label: '汕头大学'},
        {value: '汕头广播电视大学',label: '汕头广播电视大学'},
        {value: '汕头市澄海广播电视大学',label: '汕头市澄海广播电视大学'},
        {value: '汕头市业余大学',label: '汕头市业余大学'},
        {value: '汕尾市广播电视大学',label: '汕尾市广播电视大学'},
        {value: '陕西兵器工业职工大学',label: '陕西兵器工业职工大学'},
        {value: '山西财经大学',label: '山西财经大学'},
        {value: '山西大同大学',label: '山西大同大学'},
        {value: '山西大学',label: '山西大学'},
        {value: '陕西电子工业职工大学',label: '陕西电子工业职工大学'},
        {value: '山西广播电视大学',label: '山西广播电视大学'},
        {value: '陕西航天职工大学',label: '陕西航天职工大学'},
        {value: '陕西核工业电视大学',label: '陕西核工业电视大学'},
        {value: '陕西核工业局电视大学',label: '陕西核工业局电视大学'},
        {value: '陕西科技大学',label: '陕西科技大学'},
        {value: '山西农业大学',label: '山西农业大学'},
        {value: '陕西省电力大学',label: '陕西省电力大学'},
        {value: '山西省公路广播电视大学',label: '山西省公路广播电视大学'},
        {value: '陕西省广播电视大学',label: '陕西省广播电视大学'},
        {value: '陕西省建筑职工大学',label: '陕西省建筑职工大学'},
        {value: '陕西省经济贸易大学',label: '陕西省经济贸易大学'},
        {value: '陕西师范大学',label: '陕西师范大学'},
        {value: '山西师范大学',label: '山西师范大学'},
        {value: '山西医科大学',label: '山西医科大学'},
        {value: '山西泽州广播电视大学',label: '山西泽州广播电视大学'},
        {value: '上海贝尔阿尔卡特大学',label: '上海贝尔阿尔卡特大学'},
        {value: '上海财经大学',label: '上海财经大学'},
        {value: '上海财政税务职工大学',label: '上海财政税务职工大学'},
        {value: '上海大学',label: '上海大学'},
        {value: '上海第二工业大学',label: '上海第二工业大学'},
        {value: '上海第二医科大学',label: '上海第二医科大学'},
        {value: '上海电气集团总公司老干部大学',label: '上海电气集团总公司老干部大学'},
        {value: '上海电视大学',label: '上海电视大学'},
        {value: '上海电信大学',label: '上海电信大学'},
        {value: '上海东华大学',label: '上海东华大学'},
        {value: '上海纺织工业职工大学',label: '上海纺织工业职工大学'},
        {value: '上海纺织老干部大学',label: '上海纺织老干部大学'},
        {value: '上海港职工大学',label: '上海港职工大学'},
        {value: '上海工程技术大学',label: '上海工程技术大学'},
        {value: '上海海事大学',label: '上海海事大学'},
        {value: '上海航天职工大学',label: '上海航天职工大学'},
        {value: '上海虹口区业余大学',label: '上海虹口区业余大学'},
        {value: '上海虹口业余大学',label: '上海虹口业余大学'},
        {value: '上海黄浦业余大学',label: '上海黄浦业余大学'},
        {value: '上海交通大学',label: '上海交通大学'},
        {value: '上海金融职工大学',label: '上海金融职工大学'},
        {value: '上海金山区老年大学',label: '上海金山区老年大学'},
        {value: '上海老干部大学',label: '上海老干部大学'},
        {value: '上海老年大学',label: '上海老年大学'},
        {value: '上海理工大学',label: '上海理工大学'},
        {value: '上海杉达大学',label: '上海杉达大学'},
        {value: '上海市宝山区业余大学',label: '上海市宝山区业余大学'},
        {value: '上海市对外贸易职工大学',label: '上海市对外贸易职工大学'},
        {value: '上海师范大学',label: '上海师范大学'},
        {value: '上海市黄浦区业余大学',label: '上海市黄浦区业余大学'},
        {value: '上海市静安区老干部大学',label: '上海市静安区老干部大学'},
        {value: '上海市军休老干部大学',label: '上海市军休老干部大学'},
        {value: '上海市普陀区业余大学',label: '上海市普陀区业余大学'},
        {value: '上海市轻工老干部大学',label: '上海市轻工老干部大学'},
        {value: '上海市轻工业职工大学',label: '上海市轻工业职工大学'},
        {value: '上海市徐汇区业余大学',label: '上海市徐汇区业余大学'},
        {value: '上海市邮电职工大学',label: '上海市邮电职工大学'},
        {value: '上海市钟表工业公司职工大学',label: '上海市钟表工业公司职工大学'},
        {value: '上海水产大学',label: '上海水产大学'},
        {value: '上海铁路局老干部大学',label: '上海铁路局老干部大学'},
        {value: '上海外国语大学',label: '上海外国语大学'},
        {value: '上海医药职工大学',label: '上海医药职工大学'},
        {value: '上海中医药大学',label: '上海中医药大学'},
        {value: '上饶广播电视大学',label: '上饶广播电视大学'},
        {value: '上学师范大学',label: '上学师范大学'},
        {value: '商业大学',label: '商业大学'},
        {value: '邵阳广播电视大学',label: '邵阳广播电视大学'},
        {value: '社会大学',label: '社会大学'},
        {value: '社会科学大学',label: '社会科学大学'},
        {value: '沈阳大学',label: '沈阳大学'},
        {value: '沈阳电视大学',label: '沈阳电视大学'},
        {value: '沈阳工业大学',label: '沈阳工业大学'},
        {value: '沈阳广播电视大学',label: '沈阳广播电视大学'},
        {value: '沈阳建筑大学',label: '沈阳建筑大学'},
        {value: '沈阳理工大学',label: '沈阳理工大学'},
        {value: '沈阳联合职工大学',label: '沈阳联合职工大学'},
        {value: '沈阳农机工业职工大学',label: '沈阳农机工业职工大学'},
        {value: '沈阳农业大学',label: '沈阳农业大学'},
        {value: '沈阳师范大学',label: '沈阳师范大学'},
        {value: '沈阳市和平区北站地区老年大学',label: '沈阳市和平区北站地区老年大学'},
        {value: '沈阳市老干部大学',label: '沈阳市老干部大学'},
        {value: '沈阳市联合职工大学',label: '沈阳市联合职工大学'},
        {value: '沈阳市铁西区老年人大学',label: '沈阳市铁西区老年人大学'},
        {value: '沈阳市通用机械工业职工大学',label: '沈阳市通用机械工业职工大学'},
        {value: '沈阳药科大学',label: '沈阳药科大学'},
        {value: '沈阳职工大学',label: '沈阳职工大学'},
        {value: '深圳大学',label: '深圳大学'},
        {value: '深圳广播电视大学',label: '深圳广播电视大学'},
        {value: '深圳市宝安区老干部大学',label: '深圳市宝安区老干部大学'},
        {value: '深圳市大学',label: '深圳市大学'},
        {value: '深圳市广播电视大学',label: '深圳市广播电视大学'},
        {value: '升达大学',label: '升达大学'},
        {value: '省第一师范大学',label: '省第一师范大学'},
        {value: '省科技职工大学',label: '省科技职工大学'},
        {value: '胜利油田电视大学',label: '胜利油田电视大学'},
        {value: '省联合大学',label: '省联合大学'},
        {value: '省师范大学',label: '省师范大学'},
        {value: '省政府机关干部业务大学',label: '省政府机关干部业务大学'},
        {value: '时代大学',label: '时代大学'},
        {value: '市共产主义劳动大学',label: '市共产主义劳动大学'},
        {value: '市广播电视职工大学',label: '市广播电视职工大学'},
        {value: '石河子大学',label: '石河子大学'},
        {value: '石河子广播电视大学',label: '石河子广播电视大学'},
        {value: '石化电视大学',label: '石化电视大学'},
        {value: '石家庄车辆厂电视大学',label: '石家庄车辆厂电视大学'},
        {value: '石家庄广播电视大学',label: '石家庄广播电视大学'},
        {value: '石家庄职工大学',label: '石家庄职工大学'},
        {value: '石家庄职工业余大学',label: '石家庄职工业余大学'},
        {value: '实践大学',label: '实践大学'},
        {value: '市老年大学',label: '市老年大学'},
        {value: '始兴县广播电视大学',label: '始兴县广播电视大学'},
        {value: '首都经济贸易大学',label: '首都经济贸易大学'},
        {value: '首都联合职工大学',label: '首都联合职工大学'},
        {value: '首都师范大学',label: '首都师范大学'},
        {value: '首都医科大学',label: '首都医科大学'},
        {value: '舒兰市电视大学',label: '舒兰市电视大学'},
        {value: '双城市广播电视大学',label: '双城市广播电视大学'},
        {value: '双鸭山广播电视大学',label: '双鸭山广播电视大学'},
        {value: '朔县农业大学',label: '朔县农业大学'},
        {value: '四川春晖老年大学',label: '四川春晖老年大学'},
        {value: '四川大学',label: '四川大学'},
        {value: '四川广播电视大学',label: '四川广播电视大学'},
        {value: '四川函授大学',label: '四川函授大学'},
        {value: '四川科技职工大学',label: '四川科技职工大学'},
        {value: '四川老年大学',label: '四川老年大学'},
        {value: '四川理工大学',label: '四川理工大学'},
        {value: '四川农业大学',label: '四川农业大学'},
        {value: '四川省东方动力职工大学',label: '四川省东方动力职工大学'},
        {value: '四川省化工职业大学',label: '四川省化工职业大学'},
        {value: '四川师范大学',label: '四川师范大学'},
        {value: '四川自修大学',label: '四川自修大学'},
        {value: '四会市广播电视大学',label: '四会市广播电视大学'},
        {value: '私立华联大学',label: '私立华联大学'},
        {value: '四平广播电视大学',label: '四平广播电视大学'},
        {value: '四平老年大学',label: '四平老年大学'},
        {value: '泗县五七大学',label: '泗县五七大学'},
        {value: '泗阳广播电视大学',label: '泗阳广播电视大学'},
        {value: '松花江大学',label: '松花江大学'},
        {value: '松花江林区广播电视大学',label: '松花江林区广播电视大学'},
        {value: '松江区老年大学',label: '松江区老年大学'},
        {value: '松原广播电视大学',label: '松原广播电视大学'},
        {value: '宿迁市广播电视大学',label: '宿迁市广播电视大学'},
        {value: '苏州大学',label: '苏州大学'},
        {value: '苏州广播电视大学',label: '苏州广播电视大学'},
        {value: '苏州建筑职工大学',label: '苏州建筑职工大学'},
        {value: '苏州科技大学',label: '苏州科技大学'},
        {value: '苏州科技工业大学',label: '苏州科技工业大学'},
        {value: '宿州市广播电视大学',label: '宿州市广播电视大学'},
        {value: '苏州市老年体育大学',label: '苏州市老年体育大学'},
        {value: '苏州市职工科技大学',label: '苏州市职工科技大学'},
        {value: '苏州市职业大学',label: '苏州市职业大学'},
        {value: '遂宁广播电视大学',label: '遂宁广播电视大学'},
        {value: '随州广播电视大学',label: '随州广播电视大学'},
        {value: '塔城广播电视大学',label: '塔城广播电视大学'},
        {value: '塔里木大学',label: '塔里木大学'},
        {value: '台北大学',label: '台北大学'},
        {value: '台北科技大学',label: '台北科技大学'},
        {value: '台北师范大学',label: '台北师范大学'},
        {value: '台北医学大学',label: '台北医学大学'},
        {value: '台山盘石电视大学',label: '台山盘石电视大学'},
        {value: '台湾大学',label: '台湾大学'},
        {value: '台湾科技大学',label: '台湾科技大学'},
        {value: '台湾师范大学',label: '台湾师范大学'},
        {value: '太原大学',label: '太原大学'},
        {value: '太原广播电视大学',label: '太原广播电视大学'},
        {value: '太原科技大学',label: '太原科技大学'},
        {value: '太原理工大学',label: '太原理工大学'},
        {value: '台州广播电视大学',label: '台州广播电视大学'},
        {value: '唐山广播电视大学',label: '唐山广播电视大学'},
        {value: '桃源广播电视大学',label: '桃源广播电视大学'},
        {value: '天津财经大学',label: '天津财经大学'},
        {value: '天津大学',label: '天津大学'},
        {value: '天津房地产管理局职工大学',label: '天津房地产管理局职工大学'},
        {value: '天津工业大学',label: '天津工业大学'},
        {value: '天津广播电视大学',label: '天津广播电视大学'},
        {value: '天津科技大学',label: '天津科技大学'},
        {value: '天津理工大学',label: '天津理工大学'},
        {value: '天津联合业余大学',label: '天津联合业余大学'},
        {value: '天津商业大学',label: '天津商业大学'},
        {value: '天津市财贸系统老干部大学',label: '天津市财贸系统老干部大学'},
        {value: '天津市第二轻工业局职工大学',label: '天津市第二轻工业局职工大学'},
        {value: '天津师范大学',label: '天津师范大学'},
        {value: '天津市河北区职工大学',label: '天津市河北区职工大学'},
        {value: '天津市河东区职工大学',label: '天津市河东区职工大学'},
        {value: '天津市河西区职工大学',label: '天津市河西区职工大学'},
        {value: '天津石化公司职工大学',label: '天津石化公司职工大学'},
        {value: '天津市建筑工程业余大学',label: '天津市建筑工程业余大学'},
        {value: '天津市建筑工程职工大学',label: '天津市建筑工程职工大学'},
        {value: '天津市交通局职工大学',label: '天津市交通局职工大学'},
        {value: '天津市老年健康大学',label: '天津市老年健康大学'},
        {value: '天津市老年人大学',label: '天津市老年人大学'},
        {value: '天津市美术老年大学',label: '天津市美术老年大学'},
        {value: '天津市南开区职工大学',label: '天津市南开区职工大学'},
        {value: '天津市退休职工第一老年大学',label: '天津市退休职工第一老年大学'},
        {value: '天津市卫生局老年大学',label: '天津市卫生局老年大学'},
        {value: '天津市医药职工大学',label: '天津市医药职工大学'},
        {value: '天津市职工经济技术大学',label: '天津市职工经济技术大学'},
        {value: '天津市职工科学技术大学',label: '天津市职工科学技术大学'},
        {value: '天津新华职工大学',label: '天津新华职工大学'},
        {value: '天津医科大学',label: '天津医科大学'},
        {value: '天津一轻职工大学',label: '天津一轻职工大学'},
        {value: '天津职业大学',label: '天津职业大学'},
        {value: '天津职业大学夜大学',label: '天津职业大学夜大学'},
        {value: '天津中医药大学',label: '天津中医药大学'},
        {value: '天门市广播电视大学',label: '天门市广播电视大学'},
        {value: '天台广播电视大学',label: '天台广播电视大学'},
        {value: '铁路运输职工大学',label: '铁路运输职工大学'},
        {value: '通河五七大学',label: '通河五七大学'},
        {value: '通化市老干部大学',label: '通化市老干部大学'},
        {value: '同济大学',label: '同济大学'},
        {value: '同济医科大学',label: '同济医科大学'},
        {value: '通辽广播电视大学',label: '通辽广播电视大学'},
        {value: '铜陵电视大学',label: '铜陵电视大学'},
        {value: '同煤大学',label: '同煤大学'},
        {value: '铜仁广播电视大学',label: '铜仁广播电视大学'},
        {value: '屯昌县五七大学',label: '屯昌县五七大学'},
        {value: '潍坊电力职工大学',label: '潍坊电力职工大学'},
        {value: '温宿广播电视大学',label: '温宿广播电视大学'},
        {value: '温州大学',label: '温州大学'},
        {value: '温州广播电视大学',label: '温州广播电视大学'},
        {value: '吴川市广播电视大学',label: '吴川市广播电视大学'},
        {value: '武钢职工大学',label: '武钢职工大学'},
        {value: '武汉测绘科技大学',label: '武汉测绘科技大学'},
        {value: '武汉成才进修大学',label: '武汉成才进修大学'},
        {value: '武汉成人自修大学',label: '武汉成人自修大学'},
        {value: '武汉大皇家墨尔本理工大学',label: '武汉大皇家墨尔本理工大学'},
        {value: '武汉大学',label: '武汉大学'},
        {value: '武汉钢铁公司老年人大学',label: '武汉钢铁公司老年人大学'},
        {value: '武汉工程大学',label: '武汉工程大学'},
        {value: '武汉工业职业大学',label: '武汉工业职业大学'},
        {value: '武汉广播电视大学',label: '武汉广播电视大学'},
        {value: '武汉建工集团有限公司职工大学',label: '武汉建工集团有限公司职工大学'},
        {value: '武汉江汉大学',label: '武汉江汉大学'},
        {value: '武汉经济管理自修大学',label: '武汉经济管理自修大学'},
        {value: '武汉经贸大学',label: '武汉经贸大学'},
        {value: '武汉科技大学',label: '武汉科技大学'},
        {value: '武汉老年大学',label: '武汉老年大学'},
        {value: '武汉理工大学',label: '武汉理工大学'},
        {value: '武汉理黄鹤楼大学',label: '武汉理黄鹤楼大学'},
        {value: '武汉汽车工业职工大学',label: '武汉汽车工业职工大学'},
        {value: '武汉市广播电视大学',label: '武汉市广播电视大学'},
        {value: '武汉市职工大学',label: '武汉市职工大学'},
        {value: '武汉重型机床厂职工大学',label: '武汉重型机床厂职工大学'},
        {value: '武侯区小天竺地区年大学',label: '武侯区小天竺地区年大学'},
        {value: '五华广播电视大学',label: '五华广播电视大学'},
        {value: '武进电视大学',label: '武进电视大学'},
        {value: '乌兰察布市广播电视大学',label: '乌兰察布市广播电视大学'},
        {value: '乌鲁木齐广播电视大学',label: '乌鲁木齐广播电视大学'},
        {value: '乌鲁木齐职业大学',label: '乌鲁木齐职业大学'},
        {value: '乌鲁木齐职业医科大学',label: '乌鲁木齐职业医科大学'},
        {value: '武平广播电视大学',label: '武平广播电视大学'},
        {value: '五七大学',label: '五七大学'},
        {value: '无锡市老年大学',label: '无锡市老年大学'},
        {value: '五冶职工大学',label: '五冶职工大学'},
        {value: '五邑大学',label: '五邑大学'},
        {value: '西安电子科技大学',label: '西安电子科技大学'},
        {value: '西安工程大学',label: '西安工程大学'},
        {value: '西安工业大学',label: '西安工业大学'},
        {value: '西安广播电视大学',label: '西安广播电视大学'},
        {value: '西安航空职工大学',label: '西安航空职工大学'},
        {value: '西安建筑科技大学',label: '西安建筑科技大学'},
        {value: '西安交通大学',label: '西安交通大学'},
        {value: '西安交通医科大学',label: '西安交通医科大学'},
        {value: '西安理工大学',label: '西安理工大学'},
        {value: '西安联合大学',label: '西安联合大学'},
        {value: '西安培华女子大学',label: '西安培华女子大学'},
        {value: '西安市老年大学',label: '西安市老年大学'},
        {value: '西安市石油职工大学',label: '西安市石油职工大学'},
        {value: '西安石油大学',label: '西安石油大学'},
        {value: '西安市职工大学',label: '西安市职工大学'},
        {value: '西安铁路分局老年大学',label: '西安铁路分局老年大学'},
        {value: '西安铁路工程职工大学',label: '西安铁路工程职工大学'},
        {value: '西安铁路局运输职工大学',label: '西安铁路局运输职工大学'},
        {value: '西安外国语大学',label: '西安外国语大学'},
        {value: '西安外贸职工大学',label: '西安外贸职工大学'},
        {value: '西安西京大学',label: '西安西京大学'},
        {value: '西安乡镇企业大学',label: '西安乡镇企业大学'},
        {value: '西安亚大学校',label: '西安亚大学校'},
        {value: '西安医科大学',label: '西安医科大学'},
        {value: '西安幼儿师范大学',label: '西安幼儿师范大学'},
        {value: '西北大学',label: '西北大学'},
        {value: '西北电业职工大学',label: '西北电业职工大学'},
        {value: '西北工业大学',label: '西北工业大学'},
        {value: '西北民族大学',label: '西北民族大学'},
        {value: '西北农林科技大学',label: '西北农林科技大学'},
        {value: '西北师范大学',label: '西北师范大学'},
        {value: '西北政法大学',label: '西北政法大学'},
        {value: '西城经济科学大学',label: '西城经济科学大学'},
        {value: '西湖电子集团公司职工大学',label: '西湖电子集团公司职工大学'},
        {value: '西华大学',label: '西华大学'},
        {value: '西交利物浦大学',label: '西交利物浦大学'},
        {value: '西南财经大学',label: '西南财经大学'},
        {value: '西南大学',label: '西南大学'},
        {value: '西南交通大学',label: '西南交通大学'},
        {value: '西南科技大学',label: '西南科技大学'},
        {value: '西南民族大学',label: '西南民族大学'},
        {value: '西南石油大学',label: '西南石油大学'},
        {value: '西南政法大学',label: '西南政法大学'},
        {value: '西藏大学',label: '西藏大学'},
        {value: '厦门城市大学',label: '厦门城市大学'},
        {value: '厦门大学',label: '厦门大学'},
        {value: '厦门市海沧区老年大学',label: '厦门市海沧区老年大学'},
        {value: '现代管理大学',label: '现代管理大学'},
        {value: '县共大学校',label: '县共大学校'},
        {value: '县老年大学',label: '县老年大学'},
        {value: '县黎明五七农业大学',label: '县黎明五七农业大学'},
        {value: '咸宁市广播电视大学',label: '咸宁市广播电视大学'},
        {value: '仙桃广播电视大学',label: '仙桃广播电视大学'},
        {value: '县五七大学',label: '县五七大学'},
        {value: '襄樊广播电视大学',label: '襄樊广播电视大学'},
        {value: '香港城市大学',label: '香港城市大学'},
        {value: '香港大学',label: '香港大学'},
        {value: '香港公开大学',label: '香港公开大学'},
        {value: '香港理工大学',label: '香港理工大学'},
        {value: '香港中文大学',label: '香港中文大学'},
        {value: '湘南致公专修大学',label: '湘南致公专修大学'},
        {value: '湘潭大学',label: '湘潭大学'},
        {value: '湘潭广播电视大学',label: '湘潭广播电视大学'},
        {value: '湘西民族广播电视大学',label: '湘西民族广播电视大学'},
        {value: '孝感广播电视大学',label: '孝感广播电视大学'},
        {value: '协和医科大学',label: '协和医科大学'},
        {value: '新钢职工大学',label: '新钢职工大学'},
        {value: '新华职工大学',label: '新华职工大学'},
        {value: '新会劳动大学',label: '新会劳动大学'},
        {value: '新疆财经大学',label: '新疆财经大学'},
        {value: '新疆大学',label: '新疆大学'},
        {value: '新疆广播电视大学',label: '新疆广播电视大学'},
        {value: '新江汉大学',label: '新江汉大学'},
        {value: '新疆喀什电视大学',label: '新疆喀什电视大学'},
        {value: '新疆农业大学',label: '新疆农业大学'},
        {value: '新疆师范大学',label: '新疆师范大学'},
        {value: '新疆司法警官广播电视大学',label: '新疆司法警官广播电视大学'},
        {value: '新疆卫生职工医科大学',label: '新疆卫生职工医科大学'},
        {value: '新疆医科大学',label: '新疆医科大学'},
        {value: '新汶矿业职工大学',label: '新汶矿业职工大学'},
        {value: '新吴镇五七大学',label: '新吴镇五七大学'},
        {value: '信息工程大学',label: '信息工程大学'},
        {value: '新乡广播电视大学',label: '新乡广播电视大学'},
        {value: '新兴镇五七大学',label: '新兴镇五七大学'},
        {value: '新沂市广播电视大学',label: '新沂市广播电视大学'},
        {value: '兴安盟广播电视大学',label: '兴安盟广播电视大学'},
        {value: '兴宁市广播电视大学',label: '兴宁市广播电视大学'},
        {value: '邢台广播电视大学',label: '邢台广播电视大学'},
        {value: '许昌广播电视大学',label: '许昌广播电视大学'},
        {value: '徐汇区老干部大学',label: '徐汇区老干部大学'},
        {value: '徐州师范大学',label: '徐州师范大学'},
        {value: '徐州市广播电视大学',label: '徐州市广播电视大学'},
        {value: '宣城五七大学',label: '宣城五七大学'},
        {value: '宣钢职工大学',label: '宣钢职工大学'},
        {value: '宣武区红旗业余大学',label: '宣武区红旗业余大学'},
        {value: '延安大学',label: '延安大学'},
        {value: '延边大学',label: '延边大学'},
        {value: '延边职工大学',label: '延边职工大学'},
        {value: '盐场职工大学',label: '盐场职工大学'},
        {value: '盐城市广播电视大学',label: '盐城市广播电视大学'},
        {value: '盐都电视大学',label: '盐都电视大学'},
        {value: '延庆电视大学',label: '延庆电视大学'},
        {value: '燕山大学',label: '燕山大学'},
        {value: '燕山石化老年大学',label: '燕山石化老年大学'},
        {value: '烟台大学',label: '烟台大学'},
        {value: '烟台电视大学',label: '烟台电视大学'},
        {value: '兖州矿区职工大学',label: '兖州矿区职工大学'},
        {value: '阳春电视大学',label: '阳春电视大学'},
        {value: '阳江市广播电视大学',label: '阳江市广播电视大学'},
        {value: '阳明大学',label: '阳明大学'},
        {value: '杨浦区老干部大学',label: '杨浦区老干部大学'},
        {value: '杨浦区老年大学',label: '杨浦区老年大学'},
        {value: '杨浦区业余大学',label: '杨浦区业余大学'},
        {value: '阳泉市广播电视大学',label: '阳泉市广播电视大学'},
        {value: '阳山广播电视大学',label: '阳山广播电视大学'},
        {value: '扬州大学',label: '扬州大学'},
        {value: '扬州市老年大学',label: '扬州市老年大学'},
        {value: '扬州市职工大学',label: '扬州市职工大学'},
        {value: '扬州职业大学',label: '扬州职业大学'},
        {value: '药科大学',label: '药科大学'},
        {value: '冶金老干部大学',label: '冶金老干部大学'},
        {value: '宜宾广播电视大学',label: '宜宾广播电视大学'},
        {value: '宜昌市广播电视大学',label: '宜昌市广播电视大学'},
        {value: '宜春广播电视大学',label: '宜春广播电视大学'},
        {value: '伊春市广播电视大学',label: '伊春市广播电视大学'},
        {value: '医科大学',label: '医科大学'},
        {value: '易县广播电视大学',label: '易县广播电视大学'},
        {value: '逸仙自修大学',label: '逸仙自修大学'},
        {value: '益阳广播电视大学',label: '益阳广播电视大学'},
        {value: '仪征市电视大学',label: '仪征市电视大学'},
        {value: '银川大学',label: '银川大学'},
        {value: '英德劳动大学',label: '英德劳动大学'},
        {value: '英德市广播电视大学',label: '英德市广播电视大学'},
        {value: '鹰潭市广播电视大学',label: '鹰潭市广播电视大学'},
        {value: '永安电视大学',label: '永安电视大学'},
        {value: '邕江大学',label: '邕江大学'},
        {value: '邕宁广播电视大学',label: '邕宁广播电视大学'},
        {value: '永清县广播电视大学',label: '永清县广播电视大学'},
        {value: '于都劳动大学',label: '于都劳动大学'},
        {value: '于洪区老干部大学',label: '于洪区老干部大学'},
        {value: '玉山劳动大学',label: '玉山劳动大学'},
        {value: '玉树广播电视大学',label: '玉树广播电视大学'},
        {value: '豫章大学',label: '豫章大学'},
        {value: '越秀区老干部大学',label: '越秀区老干部大学'},
        {value: '越秀区老年大学',label: '越秀区老年大学'},
        {value: '岳阳广播电视大学',label: '岳阳广播电视大学'},
        {value: '运城广播电视大学',label: '运城广播电视大学'},
        {value: '云南财经大学',label: '云南财经大学'},
        {value: '云南大学',label: '云南大学'},
        {value: '云南电力职工大学',label: '云南电力职工大学'},
        {value: '云南广播电视大学',label: '云南广播电视大学'},
        {value: '云南民族大学',label: '云南民族大学'},
        {value: '云南农村经济刊授联合大学',label: '云南农村经济刊授联合大学'},
        {value: '云南农业大学',label: '云南农业大学'},
        {value: '云南省广播电视大学',label: '云南省广播电视大学'},
        {value: '云南省农村致福技术函授大学',label: '云南省农村致福技术函授大学'},
        {value: '云南省文化厅职工大学',label: '云南省文化厅职工大学'},
        {value: '云南师范大学',label: '云南师范大学'},
        {value: '云岩区老年大学',label: '云岩区老年大学'},
        {value: '增城市广播电视大学',label: '增城市广播电视大学'},
        {value: '湛江电视大学',label: '湛江电视大学'},
        {value: '张家界市广播电视大学',label: '张家界市广播电视大学'},
        {value: '张家口广播电视大学',label: '张家口广播电视大学'},
        {value: '肇庆广播电视大学',label: '肇庆广播电视大学'},
        {value: '朝阳广播电视大学',label: '朝阳广播电视大学'},
        {value: '浙江大学',label: '浙江大学'},
        {value: '浙江工商大学',label: '浙江工商大学'},
        {value: '浙江工业大学',label: '浙江工业大学'},
        {value: '浙江广播电视大学',label: '浙江广播电视大学'},
        {value: '浙江机电职业大学',label: '浙江机电职业大学'},
        {value: '浙江经济管理职工大学',label: '浙江经济管理职工大学'},
        {value: '浙江老年大学',label: '浙江老年大学'},
        {value: '浙江老年电视大学',label: '浙江老年电视大学'},
        {value: '浙江理工大学',label: '浙江理工大学'},
        {value: '浙江农业大学',label: '浙江农业大学'},
        {value: '浙江省广播电视大学',label: '浙江省广播电视大学'},
        {value: '浙江省机电工程师进修大学',label: '浙江省机电工程师进修大学'},
        {value: '浙江省邮电职工大学',label: '浙江省邮电职工大学'},
        {value: '浙江师范大学',label: '浙江师范大学'},
        {value: '浙江树人大学',label: '浙江树人大学'},
        {value: '浙江医科大学',label: '浙江医科大学'},
        {value: '浙江育才职工大学',label: '浙江育才职工大学'},
        {value: '浙江远大学院',label: '浙江远大学院'},
        {value: '浙江中医药大学',label: '浙江中医药大学'},
        {value: '郑州大学',label: '郑州大学'},
        {value: '郑州电缆厂职工大学',label: '郑州电缆厂职工大学'},
        {value: '郑州高等专科学校夜大学',label: '郑州高等专科学校夜大学'},
        {value: '郑州工业大学',label: '郑州工业大学'},
        {value: '郑州广播电视大学',label: '郑州广播电视大学'},
        {value: '郑州升达大学',label: '郑州升达大学'},
        {value: '郑州市新郑广电大学',label: '郑州市新郑广电大学'},
        {value: '郑州市职工大学',label: '郑州市职工大学'},
        {value: '郑州市中华职业大学',label: '郑州市中华职业大学'},
        {value: '郑州铁路局分局广播电视大学',label: '郑州铁路局分局广播电视大学'},
        {value: '郑州铁路局广播电视大学',label: '郑州铁路局广播电视大学'},
        {value: '郑州铁路局西安老年大学',label: '郑州铁路局西安老年大学'},
        {value: '郑州铁路局西安职工大学',label: '郑州铁路局西安职工大学'},
        {value: '职工大学',label: '职工大学'},
        {value: '知识青年五七大学',label: '知识青年五七大学'},
        {value: '中北大学',label: '中北大学'},
        {value: '中共福建省委党校老年大学',label: '中共福建省委党校老年大学'},
        {value: '中国长航集团职工大学',label: '中国长航集团职工大学'},
        {value: '中国传媒大学',label: '中国传媒大学'},
        {value: '中国第一冶金建设公司职工大学',label: '中国第一冶金建设公司职工大学'},
        {value: '中国地质大学',label: '中国地质大学'},
        {value: '中国海洋大学',label: '中国海洋大学'},
        {value: '中国军政人文大学',label: '中国军政人文大学'},
        {value: '中国科技大学',label: '中国科技大学'},
        {value: '中国科学技术大学',label: '中国科学技术大学'},
        {value: '中国科学院长春光机所老年大学',label: '中国科学院长春光机所老年大学'},
        {value: '中国矿业大学',label: '中国矿业大学'},
        {value: '中国逻辑与语言函授大学',label: '中国逻辑与语言函授大学'},
        {value: '中国民航大学',label: '中国民航大学'},
        {value: '中国农村致富技术函授大学',label: '中国农村致富技术函授大学'},
        {value: '中国农民大学',label: '中国农民大学'},
        {value: '中国农业大学',label: '中国农业大学'},
        {value: '中国人民大学',label: '中国人民大学'},
        {value: '中国人民公安大学',label: '中国人民公安大学'},
        {value: '中国人民警官大学',label: '中国人民警官大学'},
        {value: '中国社会学函授大学',label: '中国社会学函授大学'},
        {value: '中国石油大学',label: '中国石油大学'},
        {value: '中国书画函授大学',label: '中国书画函授大学'},
        {value: '中国信息大学',label: '中国信息大学'},
        {value: '中国药科大学',label: '中国药科大学'},
        {value: '中国医科大学',label: '中国医科大学'},
        {value: '中国银行职工大学',label: '中国银行职工大学'},
        {value: '中国政法大学',label: '中国政法大学'},
        {value: '中华研修大学',label: '中华研修大学'},
        {value: '中美山东建文大学',label: '中美山东建文大学'},
        {value: '中牟广电大学',label: '中牟广电大学'},
        {value: '中南财经政法大学',label: '中南财经政法大学'},
        {value: '中南大学',label: '中南大学'},
        {value: '中南林业科技大学',label: '中南林业科技大学'},
        {value: '中南民族大学',label: '中南民族大学'},
        {value: '中山大学',label: '中山大学'},
        {value: '中山市广播电视大学',label: '中山市广播电视大学'},
        {value: '中山医科大学',label: '中山医科大学'},
        {value: '中西医结合大学',label: '中西医结合大学'},
        {value: '中央财经大学',label: '中央财经大学'},
        {value: '中央广播电视大学',label: '中央广播电视大学'},
        {value: '中央民族大学',label: '中央民族大学'},
        {value: '中医药大学',label: '中医药大学'},
        {value: '中原大学',label: '中原大学'},
        {value: '中原油田广播电视大学',label: '中原油田广播电视大学'},
        {value: '舟山广播电视大学',label: '舟山广播电视大学'},
        {value: '珠海广播电视大学',label: '珠海广播电视大学'},
        {value: '株洲广播电视大学',label: '株洲广播电视大学'},
        {value: '株洲市职工大学',label: '株洲市职工大学'},
        {value: '淄博电视大学',label: '淄博电视大学'},
        {value: '资溪劳动大学',label: '资溪劳动大学'},
        {value: '其他',label: '其他'},
    ]
    return obj;
}

export default Data;