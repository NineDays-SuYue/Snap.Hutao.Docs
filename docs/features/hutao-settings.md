---
headerDepth: 0
---

# 软件设置

::: tip
- 以下内容将以`"胡桃工具箱"内的设置功能`的`条目排列顺序`为介绍顺序
:::

## 关于 胡桃
- 胡桃工具箱的图标：您可以在胡桃的[首页](https://hut.ao/)查看它的原图
    - 该图像作品的作者为[LOFTER@夙夜](https://dieqi32894.lofter.com/post/4b58ce16_2b6b2d365)并由[DGP-Studio](https://github.com/DGP-Studio)后期处理后，授权使用
- 胡桃的版本号
- 设备ID
- 反馈
    - 点击`前往反馈`的按钮，即可跳转至相关页面

## 外观
- 背景材质
    - 在此选项中，您可以更改背景的材质为：
        - 亚克力
        - 云母
        - 变种云母
    - 每个背景材质被选中后，您可以即时查看更改后的效果

## 祈愿记录
- 在此条目中，您可以选择是否隐藏无记录的历史祈愿活动，即"没有祈愿记录的卡池"

## 游戏
- 游戏路径
    - 在此条目中，可以修改或设置您的游戏路径
    - 选择游戏路径时，请注意此处选择的应是游戏本身
    - 形如："$\Genshin Impact\Genshin Impact Game\YuanShen.exe"
       
- 删除游戏内网页缓存
    - 若您在使用**祈愿记录功能**时，选择**使用"从缓存刷新"**，但**频繁提示**验证密钥过期，可以尝试此操作
    - 点击此选项内的`删除`按钮即可

## 测试功能

### 打开`数据`文件夹
    - 在此选项中点击"打开"按钮，即可打开包含"用户数据/日志/元数据"的文件夹
    - 尤其在您需要[反馈](https://hut.ao/statements/bug-report.html)或需要[以通用方式排查问题](https://hut.ao/FAQ/most-frequent-questions.html#%E5%85%B6%E4%BB%96%E9%97%AE%E9%A2%98%E7%9A%84%E9%80%9A%E7%94%A8%E6%8E%92%E6%9F%A5%E6%96%B9%E5%BC%8F)时，可以在此处快捷打开此文件夹，并进行进一步操作
   
### 打开`缓存`文件夹
    - 在此选项中点击"打开"按钮，即可打开包含"图片缓存"的文件夹
    - 在此文件夹内，存储了`胡桃工具箱`在运行期间产生的`图片缓存`
   
### 米游社每日签到

    - 如何使用
        - 首先需要您在`米游社多账号切换`功能中，**选中**当前需要进行签到的**米游社账号**
        - 点击`打开签到对话框`按钮
        - 在每次需要对**其他账号**(若存在)进行米游社签到前，可能需要**重新打开**`胡桃工具箱`
        - 出现**签到对话框**长时间无反应，可尝试将`当前米游社账号的登陆状态`删除后重新在`胡桃工具箱`内登录，并将`胡桃工具箱`重启
        - 出现**签到对话框**内显示的内容出现异常，请将`胡桃工具箱`重启(此过程可多次进行)
        - 若多次尝试依然失败，请**按下述步骤**进行反馈，以便于开发者对此功能尽快完善！
          
    - 由于此功能为测试功能，对于可能发生的签到失败情形，您可以按如下步骤进行反馈，以便于我们尽快进行改进
        - 在**文件资源管理器**中，打开"%userprofile%/documents/hutao"目录
        - 保持该**文件资源管理器**处于打开状态
        - 重新启动`胡桃工具箱`
        - 进入`设置`
        - 点击`打开签到对话框`按钮
        - 弹出对话框后**等待约5秒**
        - 回到**文件资源管理器**
        - 将此时的`log.db`文件复制到其他位置，并[随issue一同提交](https://github.com/DGP-Studio/Snap.Hutao/issues/new/choose)
           
    - 该功能的正常使用界面： 
       ![米游社每日签到 ](https://user-images.githubusercontent.com/96916320/204124604-10a10890-706f-4287-9557-abb54995e712.png)
   
## 上传深渊数据
- 首先需要您在`米游社多账号切换`功能中，**选中**当前需要进行上传深渊数据的**米游社账号** 
- 点击`上传`按钮
- 若提交成功，将弹出"数据提交成功"的提示，此时您的**深镜螺旋等有关数据**将被统计到[胡桃数据库](https://hut.ao/features/hutao-API.html)

## 危险功能
- 删除所有用户
    - 此功能的作用是删除用户表的所有记录，用户修复特定的账号冲突问题
    - 点击`执行`按钮即可完成删除
    - 通常情况下，用户不需要使用此功能来删除用户表的信息
