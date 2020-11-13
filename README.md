# BoWuShouCe

一、项目名称  
博物手记--博物致知  
二、项目介绍  
1.小程序定位  
本软件适用于云南高校全体师生。  

2.小程序的基本功能  
（1）附近博物馆的推送功能  
（2）明星展品的推送功能  
（3）地图路径规划功能  
（4）上传图片的功能  
（5）藏品图片及用户上传图片的评论功能  
（6）近期推送功能  
（7）藏品搜索功能  

3.代码目录结构说明  
|──cloudfunctions		//云函数  
|──images		//图片  
|     |     |──2.jpg		//首页滚图1  
|     |     |──3.jpg		//首页滚图2  
|     |     |──4.jpg  	//首页滚图3  
|     |     |──add.png		//“添加”图标  
|     |     |──arrows.png	//“箭头”图标  
|     |     |──back.png		//背景图片  
|     |     |──caitao.jpg	//彩陶图片  
|     |     |──dongche.jpg	//动车组图片  
|     |     |──edit.png		//”编辑“图标  
|     |     |──hua.jpg		//壁画图片  
|     |     |──jian.jpg		//金剑图片  
|     |     |──jinzhuang.jpg	//金幢图片  
|     |     |──kqdmw.jpg	//孔雀大明王图片  
|     |     |──locate.png	//“定位”图标  
|     |     |──mianju.jpg	//面具图片  
|     |     |──migui.jpg	//米轨列车图片  
|     |     |──ruzi.jpg		//褥子图片  
|     |     |──sha.jpg		//杀牛图片  
|     |     |──T1.jpg		//云南省博物馆图片  
|     |     |──T3.jpg		//昆明市博物馆图片  
|     |     |──T4.jpg		//云南民族博物馆图片  
|     |     |──tielu.jpg		//云南铁路博物馆图片  
|     |     |──user1.png	//“个人信息”图标  
|     |     |──user2.png	//“记事小本”图标  
|     |     |──user3.png	//“图片小库”图标  
|     |     |──xiong.png	//熊庆来先生图片  
|     |     |──zhengqi.jpg	//蒸汽车图片  
|     |     |──背景.png		//背景图片  
|     |     |──定位.png		//“定位”图标  
|     |     |──个人.png		//“个人”图标灰  
|     |     |──个人面.png	//“个人"  图标黑  
|     |     |──搜索.png		//“搜索”图标灰  
|     |     |──搜索面.png	//”搜索“图标黑  
|     |     |──主页.png		//”主页“图标灰  
|     |     |──主页面.png	//”主页“图标黑  
|──pages			//页面  
|     |──addNote		//增加评论页面  
|     |     |──addNote.js  
|     |     |──addNote.json  
|     |     |──addNote.wxml  
|     |     |──addNote.wxss  
|     |──detail		//笔记页  
|     |     |──detail.js  
|     |     |──detail.json  
|     |     |──detail.wxml  
|     |     |──detail.wxss  
|     |──first		//首页  
|     |     |──first.js  
|     |     |──first.json  
|     |     |──first.wxml  
|     |     |──first.wxss  
|     |──index		//初始页  
|     |     |──index.js  
|     |     |──index.json  
|     |     |──index.wxml  
|     |     |──index.wxss  
|     |──introduce		//个人信息页  
|     |     |──index.js  
|     |     |──index.json  
|     |     |──index.wxml  
|     |     |──index.wxss  
|     |──logs		//日志页  
|     |     |──logs.js  
|     |     |──logs.json  
|     |     |──logs.wxml  
|     |     |──logs.wxss  
|     |──map		//地图页  
|     |     |──map.js  
|     |     |──map.json  
|     |     |──map.wxml  
|     |     |──map.wxss  
|     |──note		//记事本  
|     |     |──note.js  
|     |     |──note.json  
|     |     |──note.wxml  
|     |     |──note.wxss  
|     |──photo1		//图片一详情页  
|     |     |──photo1.js  
|     |     |──photo1.json  
|     |     |──photo1.wxml  
|     |     |──photo1.wxss  
|     |──photo2		//图片二详情页  
|     |     |──photo2.js  
|     |     |──photo2.json  
|     |     |──photo2.wxml  
|     |     |──photo2.wxss  
|     |──photo3		//图片三详情页  
|     |     |──photo3.js  
|     |     |──photo3.json  
|     |     |──photo3.wxml  
|     |     |──photo3.wxss  
|     |──photo4		//图片四详情页  
|     |     |──photo4.js  
|     |     |──photo4.json  
|     |     |──photo4.wxml  
|     |     |──photo4.wxss  
|     |──photos		//图片详情页  
|     |     |──photos.js  
|     |     |──photos.json  
|     |     |──photos.wxml  
|     |     |──photos.wxss  
|     |──school		//学校介绍页  
|     |     |──school.js  
|     |     |──school.json  
|     |     |──school.wxml  
|     |     |──school.wxss  
|     |──search		//搜索页  
|     |     |──search.js  
|     |     |──search.json  
|     |     |──search.wxml  
|     |     |──search.wxss  
|──utils  
|──app.js  
|──app.json  
|──project.config.json  
|──sitemap.json  

4.版本内容更新 V.1.0.6  
（1）新功能  附近博物馆的推送功能  
（2）新功能 明星展品的推送功能  
（3）新功能 地图路径规划功能  
（4）新功能 上传图片的功能  
（5）新功能 藏品图片及用户上传图片的评论功能  
（6）新功能 近期推送功能  
（7）新功能 藏品搜索功能  

5.常见问题说明  
（1）地图无法打开  
可能原因：  
【1】为授权地理定位权限  
解决方案：同意地理定位权限  



三、项目效果截图（4-6张）  
![首页](https://www.et.ynu.edu.cn/appdd/uploads/20181060025/4/444.jpg )![首页](https://www.et.ynu.edu.cn/appdd/uploads/20181060025/4/222.jpg )  
![首页](https://www.et.ynu.edu.cn/appdd/uploads/20181060025/4/333.jpg )![首页](https://www.et.ynu.edu.cn/appdd/uploads/20181060025/4/111.jpg )  
![首页](https://www.et.ynu.edu.cn/appdd/uploads/20181060025/4/555.jpg )![首页](https://www.et.ynu.edu.cn/appdd/uploads/20181060025/4/666.jpg )  
四、项目体验小程序二维码或链接  

五、部署教程  
（1）下载代码到桌面，解压到当前文件夹。  
（2）打开微信小程序开发工具，导入项目，选择桌面刚解压的文件，填写自己的APPID，点击导入，则成功导入项目  
（3）申请地图KEY: 腾讯位置服务的路线规划插件，详情见链接：https://lbs.qq.com/miniProgram/plugin/pluginGuide/routePlan  
（4）添加数据库集合relic、user；  
（5）导入后端数据库：  
（6）将map.js文件中let key =‘’的 'UIXBZ-HEUL6-3DASQ-MKX35-SOOYT-R7FKF'改为上一步申请到的KEY，将,map.js中的”latitude:24.824825,“和”longtitude:102.850969“的位置
坐标值改为自己当前所在的位置坐标值，将云环境改为自己建立的云环境  


六、开源许可证标注  
MIT License

Copyright (c) 2020 MaHongwei-hub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
