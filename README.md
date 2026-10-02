# NFLSHC Chat 发布页 · nflshcchat-home

NFLSHC Chat（南外淮安分校学生聊天平台）的**官方网站 / 下载门户**：展示平台功能、提供 Windows 与 Android 客户端下载、记录更新日志，并给出注册与帮助文档入口。

- 线上地址：**https://home.nflshcchat.cc.cd**
- 主应用：https://nflshcchat.cc.cd/chat
- 帮助文档：https://help.nflshcchat.cc.cd

本仓库是**纯静态站点**：只有 HTML / CSS / 一个很小的交互脚本，**没有构建步骤、没有 npm 依赖**，改动保存后直接生效，由 GitHub Pages 托管。

---

## 页面一览

| 文件 | 作用 | 主要入口 |
|---|---|---|
| `index.html` | 首页：Hero、8 项核心功能、客户端下载卡片、社区二维码、技术栈横幅 | Windows 下载、Android 下载、更新日志、注册账号、立即使用 |
| `windows.html` | Windows 桌面端下载（v2.5.0）：安装包 / 便携版 / 系统要求 | 飞书快速通道、GitHub Releases |
| `android.html` | Android 客户端下载（v2.3.0）：APK 与 Pro 包、系统要求 | 飞书快速通道、GitHub Pages 镜像 |
| `log.html` | 更新日志：网页端 v1.0.0 → v2.2.0 的逐版本条目（新增 / 优化 / 修复） | — |
| `register.html` | 注册引导页：3 秒倒计时后跳转到官方注册页 `https://nflshcchat.cc.cd/register.html` | 立即跳转、返回首页 |
| `script.js` | 首页交互：鼠标跟随光晕、锚点平滑滚动 | — |
| `styles.css` | 全站样式：黑金配色 + 极光背景（5 个 blob）、卡片式布局、`@media (max-width: 768px)` 响应式 | — |
| `CNAME` | GitHub Pages 自定义域名：`home.nflshcchat.cc.cd` | — |
| `.gitignore` | 排除 `design-notes/`（内部设计调研资料，不入库、不发布） | — |

---

## 下载通道

页面上的按钮同时提供两条通道，改版本时**两边都要更新**：

**Windows 桌面端（v2.5.0）**

| 通道 | 内容 |
|---|---|
| 🚀 飞书快速通道 | 安装包 (NSIS) / 便携版，国内直连较快 |
| GitHub Releases | `user-henry/nflshcchat-windows` → `NFLSHC-Chat-2.5.0-Setup.exe`、`NFLSHC-Chat-2.5.0-Portable.exe` |
| 系统要求 | Windows 10+ / x64、4 GB 内存、200 MB 磁盘、NFLSHC Chat 账号 |

**Android 客户端（v2.3.0）**

| 通道 | 内容 |
|---|---|
| 🚀 飞书快速通道 | `NFLSHC Chat.apk`、`NFLSHC Chat pro.apk` |
| GitHub Pages 镜像 | 主仓库 Pages 上的 APK 直链 |
| 系统要求 | Android 5.0+、armeabi-v7a / arm64-v8a、100 MB 存储、NFLSHC Chat 账号 |

> 版本号出现的位置：`index.html` 的 Hero（`NFLSHC Chat v2.5.0 · 2026`）与两张下载卡片、`windows.html` 的版本行、`android.html` 的下载通道、以及 `log.html` 顶部的「当前版本」。`log.html` 记录的是**网页端**版本（当前标到 v2.2.0），客户端版本在各自子页维护。

---

## 本地预览

任选一种方式（不需要安装依赖）：

```bash
# 方式一：Python（推荐，路径与相对链接行为与线上一致）
python -m http.server 8080
# 然后打开 http://127.0.0.1:8080/

# 方式二：Node
npx --yes serve -l 8080 .

# 方式三：直接双击 index.html
# 也可以打开，但 register.html 的倒计时跳转与部分外链会指向线上域名
```

页面引用的品牌 Logo 与社区二维码图片托管在外部 CDN（`cdn.luogu.com.cn`），离线环境下这些图片不会显示，属正常现象。

---

## 部署

1. 提交并推送到 `main` 分支；
2. GitHub Pages 自动发布（仓库根目录作为站点根，`CNAME` 已固定为 `home.nflshcchat.cc.cd`）；
3. 若自定义域名失效，检查域名解析里 `home` 的 CNAME 是否指向 `user-henry.github.io`，以及仓库 Settings → Pages 的 Custom domain 是否为 `home.nflshcchat.cc.cd`。

改动建议：只改 HTML / CSS 即可，无需任何构建产物；发布后如遇浏览器缓存，可用 `?v=时间戳` 或强制刷新验证。

---

## 设计资料（不入库）

`design-notes/` 存放官网视觉的调研与还原资料（`design-tokens.json`、`component-specs.json`、`project-log.md`、问题记录等），属于内部参考，已被 `.gitignore` 排除：**既不提交到 GitHub，也不随 Pages 发布**。

---

## 相关仓库

| 仓库 | 说明 |
|---|---|
| [nflshcchat](https://github.com/user-henry/nflshcchat) | 主站与前端页面（聊天室、会议、日历、笔记等），Cloudflare Worker 为唯一后端 |
| [nflshcchat-windows](https://github.com/user-henry/nflshcchat-windows) | Windows 桌面客户端（Electron 打包，NSIS 安装版 / 便携版） |
| [chatai](https://github.com/user-henry/chatai) | HZYAI 智能对话助手（https://chatai.bot.cd） |
| [help-nflshc202401](https://github.com/user-henry/help-nflshc202401) | 帮助文档站（https://help.nflshcchat.cc.cd） |
| [nflshcchat-platform](https://github.com/user-henry/nflshcchat-platform) | 开发者平台（应用创建、权限配置、接入代码） |
| [nflshcchat-accounts](https://github.com/user-henry/nflshcchat-accounts) | 账号授权中心（OAuth 授权、注册、授权管理） |

---

## 许可

MIT License（与站点页脚声明一致）。页面中提到的 NFLSHC Chat 名称、Logo 与校内使用场景归项目所有。
