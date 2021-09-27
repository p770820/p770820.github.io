我自己是使用免費輕量的編輯器的 [Visual Studio Code](https://code.visualstudio.com/) 去開發。

# 專案架構

```
│  .gitignore
│  babel.config.js
│  package.json
│  README.md
│
├─node_module
├─public
│      favicon.ico
│      index.html
│
└─src
    │  App.vue
    │  main.js
    │
    ├─assets
    │      logo.png
    │
    └─components
            HelloWorld.vue
```

1. .gitignore : git 版控忽略的檔案
1. babel.config.js : 這個是 babel 的設置檔，[babel](<https://zh.wikipedia.org/wiki/Babel_(%E7%B7%A8%E8%AD%AF%E5%99%A8)>) 基本上是個 JavaScript 編譯器、轉譯器。
1. package.json: 專案
1. README.md : 說明檔
1. /node_module : 相依套件位置。
1. /public : 公開檔案的目錄
1. /src : 程式碼的目錄，主要開發的地方
1. /src/assets : 靜態檔案的目錄
1. /src/components : component 的目錄
1. /src/main.js : 整個專案的進入點

# 指令

在 package.json 中 scripts 有三個預設的指令，如果需要的話可以自行補充。

開發時候，可以啟動專案。

```
npm run serve
```

建置出發布檔案，預設會產生在目錄下的 dist 位置。

```
npm run build
```

使用 ESLint 去檢查程式碼的品質。

```
npm run lint
```

# 題外

我今天發現 Vue CLI 有一個指令 `vue ui` ，他會起一個網站，讓你有 UI 介面去新增你的專案。
