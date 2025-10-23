# 快速参考 - Portfolio 项目

**最后更新:** 2025-10-23  
**当前版本:** v1.1  
**开发服务器:** http://localhost:5174/

---

## 🚀 快速启动

```bash
cd UFOERIC
npm run dev
```

服务器将在 http://localhost:5174/ 启动

---

## 📁 项目结构

```
UFOERIC/src/
├── Container/              # 容器组件（统一管理）
│   ├── ImageContainer.css
│   ├── MusicPlayer.css
│   ├── MusicPlayer.tsx    # 音乐播放器
│   └── TextContainer.css
│
├── Pages/                  # 页面组件
│   ├── About.tsx          # 关于我（简化版）
│   ├── Contact.tsx        # 联系方式
│   ├── Gallery.tsx        # 作品集（已优化）
│   ├── Game_Demo.tsx      # 游戏演示（已优化）
│   ├── Projects.tsx       # 项目展示
│   ├── Rendering.tsx      # 渲染技术（新建）
│   └── Work_Experience.tsx # 工作经验（简化版）
│
├── assets/                 # 静态资源
│   ├── Gallery/
│   ├── Game DEMO/
│   ├── Projects/
│   │   └── DiabloImmortal/
│   ├── Rendering/
│   ├── music/
│   └── E0B.png
│
├── App.css                 # 主样式文件（~1200行）
├── App.tsx                 # 主应用组件
├── index.css               # 全局样式
├── main.tsx                # 入口文件
└── Store.tsx               # Redux store
```

---

## 🎨 配色方案

```css
/* 主色调 */
--purple: #667eea;
--violet: #764ba2;
--blue: #3498db;
--green: #2ecc71;

/* 文字颜色 */
--text-dark: #2c3e50;
--text-gray: #7f8c8d;
--text-light: #95a5a6;

/* 背景渐变 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
```

---

## 📝 页面说明

### 1. 首页 (/)
- 简洁的欢迎页面
- 无 emoji
- 项目简介

### 2. Gallery (/Gallery)
- 视频和图片展示
- 使用 `GalleryItem` 组件
- 支持视频播放控制

### 3. Projects (/Projects)
- 项目详细展示
- 使用 `MediaItem` 组件
- 包含：Diablo Immortal, Knives Out, FATE, SKY

### 4. Rendering (/Rendering)
- 渲染技术展示
- 使用 `RenderingTechnique` 组件
- 4种技术：PBR, Toon, VFX, Lighting

### 5. Game Demo (/Game_Demo)
- 游戏演示展示
- 使用 `DemoCard` 组件
- 3个演示：Unity Toon Shader, UE VFX, PBR Material

### 6. Work Experience (/Work_Experience)
- 工作经验（简化版）
- 3个经验区块
- 无 emoji，纯文字

### 7. About (/About)
- 个人简介（简化版）
- 4个段落
- 无 emoji，纯文字

### 8. Contact (/Contact)
- 联系方式
- 社交媒体链接

---

## 🧩 可复用组件

### GalleryItem (Gallery.tsx)
```typescript
interface GalleryItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'gif';
  colorScheme: 'purple' | 'blue' | 'violet';
  videoRef?: (el: HTMLVideoElement | null) => void;
}
```

### DemoCard (Game_Demo.tsx)
```typescript
interface DemoCardProps {
  icon: string;
  title: string;
  description: string;
  technologies: string;
  colorScheme: 'purple' | 'violet' | 'blue';
}
```

### RenderingTechnique (Rendering.tsx)
```typescript
interface RenderingTechniqueProps {
  title: string;
  description: string;
  features: string;
  colorScheme: 'purple' | 'violet' | 'blue' | 'green';
}
```

### MediaItem (Projects.tsx)
```typescript
interface MediaItemProps {
  src: string;
  type: 'image' | 'video' | 'gif';
  alt: string;
}
```

---

## 🎯 CSS 类名参考

### 全局类
```css
.card                    # 卡片容器
.page-title              # 页面标题
.hero                    # 首页英雄区
.navbar                  # 导航栏
.footer                  # 页脚
```

### About 页面
```css
.about-content           # 内容容器
.about-text              # 文字段落
```

### Work Experience 页面
```css
.work-experience-content # 内容容器
.experience-section      # 经验区块
.experience-title        # 标题
.experience-description  # 描述
.experience-skills       # 技能列表
```

### Gallery 页面
```css
.gallery-container       # 容器
.gallery-section         # 区块
.gallery-item            # 单项
.gallery-video-grid      # 视频网格
.gallery-image-grid      # 图片网格
```

### Game Demo 页面
```css
.game-demo-container     # 容器
.demo-list               # 列表
.demo-card               # 卡片
.demo-card-purple        # 紫色卡片
.demo-card-violet        # 紫罗兰卡片
.demo-card-blue          # 蓝色卡片
```

### Rendering 页面
```css
.rendering-container     # 容器
.rendering-tech          # 技术卡片
.rendering-tech-purple   # 紫色技术
.rendering-tech-violet   # 紫罗兰技术
.rendering-tech-blue     # 蓝色技术
.rendering-tech-green    # 绿色技术
.rendering-notice        # 通知区域
```

---

## 🎬 动画效果

```css
fadeIn          # 淡入（0.5s）
slideInLeft     # 左侧滑入（0.6s）
slideInRight    # 右侧滑入（0.6s）
scaleIn         # 缩放进入（0.8s）
pulse           # 脉冲（2s，循环）
gradientShift   # 渐变移动（15s，循环）
```

---

## 📱 响应式断点

```css
@media (max-width: 768px)  # 平板及以下
@media (max-width: 480px)  # 手机
```

---

## 🔧 常用命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 预览构建
npm run preview

# 类型检查
npm run type-check

# Lint
npm run lint
```

---

## 📦 依赖项

### 主要依赖
- React 18
- React Router DOM
- React Bootstrap
- TypeScript
- Vite

### 开发依赖
- @vitejs/plugin-react
- TypeScript
- ESLint

---

## 🎵 音乐播放器

### 位置
`src/Container/MusicPlayer.tsx`

### 功能
- 播放列表管理
- 音量控制
- 进度条
- 视频播放时自动降低音量
- 可展开/收起

### 播放列表
1. City Life - Sunship Feat Anita Kelsey
2. Friendly Pressure - Jhelisa
3. Heaven - Sunship Feat Anita Kelsey

---

## 🐛 已知问题

### 已修复
- ✅ image29.png 不存在 → 已删除引用
- ✅ Components 文件夹冗余 → 已删除
- ✅ 内联样式过多 → 已提取为CSS类
- ✅ Emoji 字符 → 已全部删除

### 待优化
- [ ] Projects.tsx 可以进一步组件化
- [ ] 添加 CSS 变量统一管理
- [ ] 图片懒加载
- [ ] 代码分割
- [ ] 深色模式

---

## 📚 文档

- [进度报告](./PROGRESS_ITERATION_1.md) - 第一次迭代详细报告
- [变更日志](./CHANGELOG_ITERATION_1.md) - 所有文件变更记录
- [快速参考](./QUICK_REFERENCE.md) - 本文件

---

## 💡 开发提示

### 添加新页面
1. 在 `src/Pages/` 创建新组件
2. 在 `App.tsx` 添加路由
3. 在导航栏添加链接
4. 在 `App.css` 添加样式

### 添加新组件
1. 定义 TypeScript 接口
2. 创建函数组件
3. 添加 JSDoc 注释
4. 在 `App.css` 添加样式

### 修改样式
1. 优先使用现有 CSS 类
2. 遵循 BEM 命名规范
3. 使用统一的配色方案
4. 添加响应式支持

### 添加资源
1. 图片放在 `src/assets/` 对应文件夹
2. 使用 import 导入
3. 优化图片大小
4. 使用合适的格式（png/jpg/gif）

---

## 🎯 第二次迭代建议

### 高优先级
1. 实现 CSS 变量统一管理
2. 优化 Projects.tsx 组件化
3. 添加页面过渡动画
4. 实现图片懒加载

### 中优先级
5. 添加深色模式
6. 优化移动端体验
7. 添加加载状态
8. 实现代码分割

### 低优先级
9. 添加单元测试
10. 性能优化
11. SEO 优化
12. 添加 PWA 支持

---

**准备就绪，开始第二次迭代！** 🚀

