# 风之岚科技 AI 服务统一入口

风之岚科技 AI 服务统一入口首页，根据用户场景分流到不同的 AI 服务路径。

## 当前服务路径

- **个人创业者与小团队**：已开放
- **中小企业与部门团队**：即将开放
- **政企、园区、协会与高校组织方**：即将开放

## 技术实现

- HTML
- CSS
- JavaScript
- Spline 3D 场景
- GitHub Pages 静态部署

## 项目结构

```text
.
├── index.html          # 首页结构与页面文案
├── assets/
│   ├── styles.css      # 页面样式
│   ├── main.js         # 页面交互与场景异常处理
│   └── logo.png        # 品牌 Logo，同时作为页面 favicon
└── README.md
```

## 本地预览

由于页面使用了外部 Spline 场景，建议通过本地静态服务器预览：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 部署

项目已部署到 GitHub Pages。

首页地址：

```text
https://fengzhilanai.github.io/
```
