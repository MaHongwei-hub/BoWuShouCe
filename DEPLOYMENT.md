部署说明：  
（1）下载代码到桌面，解压到当前文件夹。  
（2）打开微信小程序开发工具，导入项目，选择桌面刚解压的文件，填写自己的APPID，点击导入，则成功导入项目  
（3）申请地图KEY: 腾讯位置服务的路线规划插件，详情见链接：https://lbs.qq.com/miniProgram/plugin/pluginGuide/routePlan  
（4）添加数据库集合relic、user；  
（5）导入后端数据库：  
（6）将map.js文件中let key =‘’的 'UIXBZ-HEUL6-3DASQ-MKX35-SOOYT-R7FKF'改为上一步申请到的KEY，将,map.js中的”latitude:24.824825,“和”longtitude:102.850969“的位置 坐标值改为自己当前所在的位置坐标值，将云环境改为自己建立的云环境  
