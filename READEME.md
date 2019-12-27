## Micro Demo

### 使用框架
- single-spa
- single-spa-react / single-spa-vue 生态圈框架
- 两个项目: React(Redux) + Vue(Vuex)

### 实现功能
- 嵌入子模块技术栈无关
- 子模块按需加载
- 模块间消息总线通信

### Demo 演示
- 分别进入 portal / app1-react / app2-vue 启动服务
- 浏览器打开 http://localhost:9000/, 切换 React 和 Vue 项目
- 子模块中状态分为 全局数据 和 自身模块数据，修改 global count 同时会在两个子模块中同步