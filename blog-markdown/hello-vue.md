我自己目前對於 Vue 的了解。
他是一個輕量化的 JS 漸進式框架，可以像 JQuery 那樣直接在 HTML 引用使用，或是可以像 Angular 那樣 SPA 網站形式。
Vue 目前第二版跟第三版好像都蠻多人用的，像我自己的客戶那邊目前用第二版，下個專案要用第三版。目前 Vue 最新的版本為 [3.2.1](https://github.com/vuejs/vue-next/releases) (2021/8/9)

Hello World 程式碼，純粹是一個如何引用 CDN 的範例。
範例重點:

1. 建立 Vue createApp 建立，然後用 mount 方法去設置文件中的元素，也就是 Vue 作用範圍。
2. data() 中的 value ，藉由 v-model 綁定在 input 上，有雙向繫結的效果。 而 span 中的 {{ value }} 可以顯示出 value 的文字。

```
<html lang="en">
  <head>
    <title>Hello World</title>
    <script src="https://unpkg.com/vue@next"></script>
  </head>
  <body>
    <div id="app">
      <input type="text" v-model="value" />
      <span>{{ value }}</span>
    </div>

    <script>
      Vue.createApp({
        data() {
          return {
            value: "test...",
          };
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

畫面結果如圖
![](https://lh3.googleusercontent.com/-EkRl6NpgWSg/YUNaSjM1fzI/AAAAAAAACso/XJ5RfY2Q6B8EOO38lK1-v29rfS4RmYkzACLcBGAsYHQ/s16000/2021-09-16_22-51-16.gif)
