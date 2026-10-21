# 63ANGEL IG 快速查詢頁

這個資料夾放置活動用的 Instagram 快速查詢頁。若要建立新的活動頁，建議直接複製 `thailand2026.html` 再修改。

## 目前頁面

- `index.html`：第三次公演名單。
- `remi3year.html`：Remi 3 周年名單，具有完整的查詢與自訂帳號功能。
- `thailand2026.html`：Thailand 2026 名單，具有完整的查詢與自訂帳號功能。

## 主要功能

### 搜尋

可用顯示名稱或 Instagram 帳號搜尋。按「清除搜尋」可恢復完整名單。

### 已看過標記

點擊 IG 按鈕後，按鈕會變色，頁首的「已看過」數量也會更新。

此狀態使用 `sessionStorage`：

- 同一個瀏覽器分頁工作階段內，重新整理後仍會保留。
- 關閉分頁或瀏覽器工作階段後可能重置。
- 「已看過」狀態不包含在 JSON 匯出檔內。

### 自訂帳號

展開「新增或管理自訂帳號」後，可以：

- 輸入顯示名稱與 IG 網址。
- 只輸入 `@帳號`，系統會自動整理成 Instagram 網址。
- 編輯或刪除自行新增的帳號。
- 避免加入與內建名單或自訂名單重複的 IG 帳號。

自訂帳號使用 `localStorage`，只保存在目前瀏覽器與網站來源中。清除網站資料、使用無痕模式、換瀏覽器、換裝置或更換網站網域，都可能看不到原本資料，因此建議定期匯出備份。

### 匯出與匯入

- 「匯出全部帳號」：匯出內建名單與自行新增的帳號。
- 「僅匯出自訂帳號」：只匯出瀏覽器中自行新增的帳號。
- 「匯入 JSON 備份」：把備份合併進自訂名單；已存在或格式錯誤的帳號會略過，不會覆蓋目前資料。

匯出的 JSON 可當作備份，也方便整理下一場活動的名單。

## 快速建立新的查詢頁

1. 複製 `thailand2026.html`，例如另存為 `event2027.html`。
2. 修改 `<title>`、頁面標題、活動名稱與頁尾文字。
3. 修改 JavaScript 最上方的 `groups` 名單。
4. 把兩個儲存 key 改成新活動專用名稱，避免不同頁面共用資料：

   ```js
   const visitedStorageKey = "event2027.visited.v1";
   const customStorageKey = "event2027.custom-accounts.v1";
   ```

5. 修改匯出檔名中的活動名稱：

   ```js
   anchor.download = `event2027-${scope}-accounts-${new Date().toISOString().slice(0, 10)}.json`;
   ```

6. 用瀏覽器開啟頁面，測試搜尋、點擊變色、新增、兩種匯出與匯入。

## 內建名單格式

`thailand2026.html` 的每一筆資料由「顯示名稱」和「IG 網址陣列」組成。同一人可以放一個或多個帳號：

```js
{
  title: "舞者",
  people: [
    ["ANNA", ["https://www.instagram.com/anna_spark_/"]],
    ["RANKA", [
      "https://www.instagram.com/ran_pukupoko/",
      "https://www.instagram.com/ranka_burlesque/"
    ]]
  ]
}
```

要增加分類，就在 `groups` 中再加入一個具有 `title` 和 `people` 的物件。

## 資料安全提醒

- HTML 內建名單會跟著網站檔案保存，不會因瀏覽器清除資料而消失。
- 自訂帳號只存在瀏覽器，應以 JSON 定期備份。
- 更新 HTML 通常不會清除自訂資料，但不要隨意更改 `customStorageKey`。
- 若瀏覽器無法寫入資料，頁面會顯示警告；此時請立即使用匯出功能保存目前名單。
