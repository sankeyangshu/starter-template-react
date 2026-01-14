<h1 align="center">✨starter-template-react✨</h1>

<p align="center">
  <img src="https://img.shields.io/github/license/sankeyangshu/starter-template-react?colorA=363a4f&colorB=8CB90E&style=for-the-badge" alt="license" />
  <img src="https://img.shields.io/github/package-json/v/sankeyangshu/starter-template-react?colorA=363a4f&colorB=f5a97f&style=for-the-badge" alt="version" />
  <img src="https://img.shields.io/github/languages/top/sankeyangshu/starter-template-react?colorA=363a4f&colorB=1278B9&style=for-the-badge" alt="languages" />
  <img src="https://img.shields.io/github/repo-size/sankeyangshu/starter-template-react?colorA=363a4f&colorB=1278B9&style=for-the-badge" alt="repo-size" />
</p>

<h2 align="center">
<sub>Starter template for React</sub>
</h2>

> [!NOTE]
> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！

## 其他模版

- [lemon-mobile-react](https://github.com/sankeyangshu/lemon-mobile-react) - 基于 React 生态系统的移动 web 应用模板
- [lemon-mobile-vue](https://github.com/sankeyangshu/lemon-mobile-vue) - 基于 Vue 3 生态系统的移动 web 应用模板
- [lemon-mobile-uniapp](https://github.com/sankeyangshu/lemon-mobile-uniapp) - 基于 UniApp 生态系统的移动小程序应用模板

## 环境准备

本地环境需要安装 [Pnpm](https://www.pnpm.cn/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

- 推荐使用 [pnpm>=8.15.4](https://www.pnpm.cn/)，否则依赖可能安装不上，出现打包报错等问题。
- [Node.js](http://nodejs.org/) 版本要求`18.x`以上，这里推荐 `^18.18.0 || >=20.0.0`。

## 安装和使用

### 使用脚手架

```bash
# 复制命令 - project 为你的项目名称
pnpm create lemon project -t react
```

### GitHub 模板

[使用这个模板创建仓库](https://github.com/sankeyangshu/starter-template-react/generate)

### 克隆使用

```bash
# 克隆项目
git clone https://github.com/sankeyangshu/starter-template-react.git

# 进入项目目录
cd starter-template-react

# 安装依赖 - 推荐使用pnpm
pnpm install

# 启动服务
pnpm dev

# 打包发布
pnpm build
```

## Git 提交规范

### 提交规范

项目使用 `simple-git-hooks` 和 `commitlint` 规范 Git 提交信息，遵循社区主流的 [Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) 规范。

- `feat`: 新增功能
- `fix`: 修复 bug
- `docs`: 文档变更
- `style`: 代码格式（不影响功能，例如空格、分号等格式修正）
- `refactor`: 代码重构（不包括 bug 修复、功能新增）
- `perf`: 性能优化
- `test`: 添加、修改测试用例
- `build`: 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
- `ci`: 修改 CI 配置、脚本
- `chore`: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
- `revert`: 回滚 commit

## 社区

您可以使用 [issue](https://github.com/sankeyangshu/starter-template-react/issues) 来反馈问题，或者提交一个 Pull Request。

## 浏览器支持

- 本地开发推荐使用 Chrome 最新版浏览器 [Download](https://www.google.com/intl/zh-CN/chrome/)。
- 生产环境支持现代浏览器，不在支持 IE 浏览器，更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)。

| [<img src="https://i.imgtg.com/2023/04/11/8z7ot.png" alt=" IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                      not support                                                                       |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## License

[MIT](./LICENSE) License © 2024-PRESENT [sankeyangshu](https://github.com/sankeyangshu)
