我依照這個練習，發現 Vue 提供了 data、computed 、methods、watch。
就這練習而言，除了 data 是不提供邏輯計算的純粹資料之外，computed 、methods、watch 都可以完成 BMI 這個功能。

# computed

computed 版本的 BMI，參考這篇 https://ithelp.ithome.com.tw/articles/10267877 。
![](https://lh3.googleusercontent.com/-j6refJxX4dQ/YUid8DnTuuI/AAAAAAAACt8/iQlGEi2GqzgivNS3JOA3DWliOpf2pl6ngCLcBGAsYHQ/s16000/2021-09-20_22-41-20.gif)

# methods

methods 版本的 BMI，其中 methods 跟 computed 最大的差異，在於 methods 有出現幾次就會執行幾次，但是 computed 只有 height 跟 weight 異動的時候才會執行。
![](https://lh3.googleusercontent.com/-vSLFl5BzUwY/YUif4jZxp8I/AAAAAAAACuE/pngJ8i3iHS82j1jYuDsf-NHYv3w8kUUlACLcBGAsYHQ/s16000/2021-09-20_22-49-58.gif)

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

              <div class="mb-3">BMI (computed): {{ BMI }}</div>
              <div class="mb-3">BMI (methods): {{ ComputeBMI() }}</div>

              <div v-if="ComputeBMI() < 18.5">
                <span style="color: blue">體重過輕</span>
              </div>
              <div v-else-if="ComputeBMI() >= 18.5 && ComputeBMI() < 24">
                <span style="color: green">正常範圍</span>
              </div>
              <div v-else-if="ComputeBMI() >= 24 && ComputeBMI() < 27">
                <span style="color: #ff9e81">過重</span>
              </div>
              <div v-else-if="ComputeBMI() >= 27 && ComputeBMI() < 30">
                <span style="color: #ff7b5a">輕度肥胖</span>
              </div>
              <div v-else-if="ComputeBMI() >= 30 && ComputeBMI() < 35">
                <span style="color: #ff5232">中度肥胖</span>
              </div>
              <div v-else-if="ComputeBMI() >= 35">
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
            console.log("computed...");
            return (
              this.weight /
              ((this.height * this.height) / 10000)
            ).toFixed(2);
          },
        },
        methods: {
          ComputeBMI() {
            console.log("methods...");
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

# watch

watch 版本的 BMI，如果要完成 BMI 的功能，勢必要監聽 height 跟 weight 兩個。
watch 還可以看到修改前後的資料。
![](https://lh3.googleusercontent.com/-QK9uXIwTQhw/YUihSROCvvI/AAAAAAAACuM/HZXeEZGsAcInWnE5SPVIBItcXW8AiC5_ACLcBGAsYHQ/s16000/2021-09-20_22-56-10.gif)

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
            BMI: "13.84",
          };
        },
        watch: {
          height(val, oldVal) {
            console.log(`身高: ${oldVal} => ${val}`);
            this.BMI = (
              this.weight /
              ((this.height * this.height) / 10000)
            ).toFixed(2);
          },
          weight(val, oldVal) {
            console.log(`體重: ${oldVal} => ${val}`);
            this.BMI = (
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
