# SpaceX IPO Presentation

已套用 Backend Workshop 格式並改為 SpaceX 黑色主題（decks/space-x-ipo/spacex.css），57頁（含附錄參考文獻與資料來源表）、5章（為什麼上市、怎麼定價、上市後表現、控制權與 Tesla、結論；每篇研究後緊接驗證頁），投影片不使用條列、以統計圖呈現；放映網址 http://localhost:5178/space-x-ipo 。

```sh
npm ci
npm run dev
```

若已安裝依賴，只需 `npm run dev`。請編輯 `decks/space-x-ipo/content.json`；版型在 `src/workshop`。曲面封面、字型、標題頁尾與共用播放器來自原repo；財務卡片／表格／SVG折線圖，以及 statement（大字結論頁）、chart（長條、堆疊、折線、甜甜圈、席次、時間軸、關係圖、流程、判斷矩陣，見 src/workshop/charts.tsx）為本地新增。圖表以數值繪製，不是貼圖。

完整來源與講者筆記：SPEAKER_NOTES.md。正式報告仍在上層01_Report.md；本筆記為本次快照，後續改數據時兩者需一起更新。組員姓名、講稿分工與試講尚待小組完成；建議分工與每章時間見 SPEAKER_NOTES.md 開頭，共約20分鐘。

共用空白範本：Documents/04_Resources/Presentation-Templates/01_Backend-Workshop。新報告複製該範本，不要複製這份帶SpaceX內容的簡報。

操作：→／Space下一步、←上一步、Page Down／Up換頁、O選頁、F全螢幕、?說明。此為本地網頁簡報，未公開部署，也不是PPTX。

也可雙擊 `Start-Presentation.command` 啟動；若macOS阻止開啟，仍可依上方Terminal指令操作。服務停止後網址將無法開啟，請重新啟動。
