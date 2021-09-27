今天主要是做一個 BMI 的小練習。

![](https://lh3.googleusercontent.com/-UAipSpBmPaQ/YUdXcR_2ZOI/AAAAAAAACt0/YymkQ9WSFjYk0Qxv05eLtZ_9kxbDsFXVwCLcBGAsYHQ/s16000/2021-09-19_23-28-27.gif)

這次的重點主要在於 v-model、v-if 判斷式，還有 data 跟 computed。

data 物件是我們在 Vue 樣板中顯示的資料，我們這邊設置了 height 跟 weight，然後藉由指令(directives) v-model 綁定在身高跟體重的 input 上面，達成雙向綁定。

computed 屬性，只要在 computed 中的 data 一變更，computed 就會變更。

指令，v-if 、v-if-else、 v-else 去判斷 BMI 結果並且顯示。

```
<html lang="en">
  <head>
    <title>Hello World</title>
    <script src="https://unpkg.com/vue@next"></script>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div id="app">
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <form>
              <div class="mb-3">
                <label for="height" class="form-label">身高 (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  class="form-control"
                  id="height"
                  v-model="height"
                />
              </div>
              <div class="mb-3">
                <label for="weight" class="form-label">體重 (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  class="form-control"
                  id="weight"
                  v-model="weight"
                />
              </div>
              <div class="mb-3">BMI: {{ BMI }}</div>

              <div v-if="BMI < 18.5">
                <span style="color: blue">體重過輕</span>
              </div>
              <div v-else-if="BMI >= 18.5 && BMI < 24">
                <span style="color: green">正常範圍</span>
              </div>
              <div v-else-if="BMI >= 24 && BMI < 27">
                <span style="color: #ff9e81">過重</span>
              </div>
              <div v-else-if="BMI >= 27 && BMI < 30">
                <span style="color: #ff7b5a">輕度肥胖</span>
              </div>
              <div v-else-if="BMI >= 30 && BMI < 35">
                <span style="color: #ff5232">中度肥胖</span>
              </div>
              <div v-else-if="BMI >= 35">
                <span style="color: #ff0000">重度肥胖</span>
              </div>
              <div v-else></div>
            </form>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>

    <script>
      Vue.createApp({
        data() {
          return {
            height: 170,
            weight: 40,
          };
        },
        computed: {
          BMI() {
            return (
              this.weight /
              ((this.height * this.height) / 10000)
            ).toFixed(2);
          },
        },
      }).mount("#app");
    </script>
  </body>
</html>
```
