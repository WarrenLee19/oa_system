本系统的数据库的表设计主要有：用户，待办事项，会议管理，知识 图书，日程待办，签到，督办，车辆，群管理，公文，好友。
如下所示： 
4.2.1 用户（user）表 
用户表：主要存储系统用户的基本信息。 
表 4-1 用户表 属性名 类型 描述 是否可为空 username String 用户名 N password String 密码 N name String 昵称 N phone String 手机 Y photo String 头像 Y sex String 性别 Y signature String 个性签名 Y wallphoto String 认证 Y conversationsList Arrary 聊天消息 Y signUpTime Date 注册时间 Y lastLoginTime Date 最后登录 Y 

4.2.2 待办事项(todo)表 待办事项表：主要存储系统用户申请的待办事项。 
表 4-2 待办事项表 属性名 类型 描述 是否可为空 ID String 号 N name String 名称 N title String 标题 Y startP String 发起人 Y startT Date 起始时间 Y target String 任务 Y endT Date 结束时间 Y isOk String 是否通过 Y

4.2.3 会议管理(meet)表 会议管理表：主要存储用户上级发布的会议。 
表 4-3 会议管理表 属性名 类型 描述 是否可为空 title String 号 N place String 名称 Y startD Date 开始时间 Y startT Date 起始时间 Y target String 任务 Y endT Date 结束时间 Y 

4.2.4 知识图书(book)表 知识图书表：主要存储知识图书的信息。 表 4-4 知识图书表 属性名 类型 描述 是否可为空 ID String 号 N name String 名称 Y author String 作者 Y description String 描述 Y publishAt String 出版 Y 

4.2.5 日程待办(date)表 日程待办表：主要存储系统用户的日程待办。 表 4-5 日程待办表 属性名 类型 描述 是否可为空 title String 号 Y type String 类型 Y startT Date 开始时间 Y endT Date 结束时间 Y

4.2.6 签到(qiandao)表 签到表：主要存储系统用户的签到信息。 表 4-6 签到表 属性名 类型 描述 是否可为空 signedDates String 签到日期 N signed String 是否签到 N name String 名字 N 

4.2.7 督办(supevise)表 督办表：主要存储系统用户和用户上级发布的督办。 表 4-7 督办表 属性名 类型 描述 是否可为空 ID String 督办编号 N name String 督办事项 Y subName String 领导名称 Y person String 督办人 Y publishAt String 主办部门 Y qixian String 办结期限 Y loadDate String 状态 Y 

4.2.8 车辆(car)表 车辆表：主要存储用户申请的车辆信息。 表 4-8 车辆表 属性名 类型 描述 是否可为空 ID String 流水号 N name String 车辆类型 Y subName String 车牌号 Y sT Date 开始时间 Y eT Date 结束时间 Y

4.2.9 群管理(group)表 群管理表：主要存储系统用户建立的群聊信息。 表 4-9 群管理表 属性名 类型 描述 是否可为空 createDate Date 日期 N title String 标题 N desc String 群描述 Y img String 图片 Y code String 代号 Y usernum String 群人数 Y 

4.2.10 公文(file)表 公文表：主要存储系统用户上级发布的公文信息。 表 4-10 公文表 属性名 类型 描述 是否可为空 ID String 流水号 N name String 公文类型 Y subName String 拟稿人 Y sendTime Date 签发时间 Y Dept String 签发部门 Y 

4.2.11 好友(friend)表 好友表：主要存储系统用户建立的好友列表信息。 表 4-11 好友表 属性名 类型 描述 是否可为空 userM String 查找 userY 信息 Y userY String 查找 userM 信息 Y createDate String 加好友时间 Y
