# Vercel Deployment

公開簡報：https://spacex-ipo-report.vercel.app/space-x-ipo

Vercel專案：hungyu-liaos-projects/spacex-ipo-report

部署日期：2026-11-14（Asia/Taipei）。這是正式production網址，不依賴本機Terminal或電腦持續開機。

更新內容後，在Presentation資料夾執行：

```sh
npx vercel deploy --prod --yes
```

本資料夾已連結該Vercel專案。若換電腦需先登入並使用vercel link選擇正確專案；請勿將.vercel、node_modules、登入憑證加入原始碼壓縮檔。此次採CLI部署，沒有設定GitHub自動更新，因此本機修改不會自動公開。

路由：vercel.json保留/space-x-ipo的SPA fallback，直接開啟及重新整理都可顯示。靜態輸出位於dist，由Vercel建置。保留字型與來源說明。
