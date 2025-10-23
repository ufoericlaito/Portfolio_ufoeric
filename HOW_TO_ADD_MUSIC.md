# 如何添加更多音乐到播放器

## 步骤说明

### 1. 添加音乐文件
将你的 `.mp3` 音乐文件放到以下文件夹：
```
UFOERIC/src/assets/music/
```

### 2. 更新 MusicPlayer.tsx

打开文件：`UFOERIC/src/Components/MusicPlayer.tsx`

#### 步骤 A：导入新的音乐文件
在文件顶部的导入区域添加新歌曲：

```typescript
// 导入音乐文件
import song1 from '../assets/music/2 Friendly Pressure Into The Sunshine Mix - Jhelisa.mp3';
import song2 from '../assets/music/3 Heaven Smoove Step Mix - Sunship Feat Anita Kelsey Anita Kelsey.mp3';
import song3 from '../assets/music/你的新歌曲文件名.mp3';  // 添加这一行
```

#### 步骤 B：添加到播放列表
在 `playlist` 数组中添加新歌曲信息：

```typescript
const playlist: Song[] = [
  {
    title: 'Friendly Pressure',
    artist: 'Jhelisa',
    src: song1
  },
  {
    title: 'Heaven',
    artist: 'Sunship Feat Anita Kelsey',
    src: song2
  },
  {
    title: '你的歌曲名称',      // 显示的歌曲标题
    artist: '艺术家名称',       // 显示的艺术家名称
    src: song3                  // 对应上面导入的变量
  }
];
```

### 3. 完整示例

假设你要添加一首名为 `Beautiful Day.mp3` 的歌曲：

**文件位置：**
```
UFOERIC/src/assets/music/Beautiful Day.mp3
```

**在 MusicPlayer.tsx 中修改：**

```typescript
// 1. 导入部分
import song1 from '../assets/music/2 Friendly Pressure Into The Sunshine Mix - Jhelisa.mp3';
import song2 from '../assets/music/3 Heaven Smoove Step Mix - Sunship Feat Anita Kelsey Anita Kelsey.mp3';
import song3 from '../assets/music/Beautiful Day.mp3';  // 新增

// 2. 播放列表部分
const playlist: Song[] = [
  {
    title: 'Friendly Pressure',
    artist: 'Jhelisa',
    src: song1
  },
  {
    title: 'Heaven',
    artist: 'Sunship Feat Anita Kelsey',
    src: song2
  },
  {
    title: 'Beautiful Day',
    artist: 'Unknown Artist',
    src: song3
  }
];
```

## 注意事项

1. **文件格式**：目前只支持 `.mp3` 格式
2. **文件名**：如果文件名包含空格或特殊字符，导入时需要用引号包裹
3. **变量命名**：建议使用 `song1`, `song2`, `song3` 等简单命名
4. **播放列表顺序**：歌曲会按照在 `playlist` 数组中的顺序显示

## 播放器功能

- ✅ 自动播放下一曲
- ✅ 手动切换上一曲/下一曲
- ✅ 点击播放列表直接播放
- ✅ 音量调节
- ✅ 进度条拖动
- ✅ 最小化/展开播放器

## 播放器位置

播放器固定在屏幕左侧，可以通过点击右上角的按钮最小化或展开。

