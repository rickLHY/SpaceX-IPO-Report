# SpaceX IPO｜講者筆記與來源

[[00_SpaceX-IPO-Report|報告首頁]] · [[01_Report|主報告]] · [[09_Presentation|簡報入口]] · [[02_Sources-and-Data|來源與數據]] · [公開簡報](https://spacex-ipo-report.vercel.app/space-x-ipo)

## 簡報主線與時間配置（59 頁，正式內容 55 頁，約 20.5 分鐘）

設計：SpaceX 風格黑色主題；每頁只留一句重點與一行補充，細節用口頭說明；不使用條列，數據以統計圖呈現。整份簡報用四個研究問題分章；章內每一篇研究後面都緊接著它的驗證頁（研究 → 驗證 → 下一篇研究 → 驗證），驗證頁右側的彩色標籤就是判定結果。文獻頁每頁約 15–25 秒，唸出核心發現與「對 SpaceX 的預測」，翻到下一頁立刻用數據回答。

核心問題：**SpaceX 為何在 2026 年以 IPO 募資？上市後的發展符合公司理財理論嗎？**

| 頁 | 章節 | 講者建議 | 分鐘 | 講稿要點（研究 → 驗證） |
| --- | --- | --- | ---: | --- |
| 1–7 | 開場 | A | 3.0 | 歷程；淨募資 857 億美元；歷史最大 IPO：總募資 862.5 億，約 Aramco 的 2.9 倍、超過第 2–4 名加總；上市後市值 1.89 兆美元、全球第 7；研究問題；四個問題與十六篇研究 |
| 8–18 | 01 為什麼上市 | A | 4.5 | Myers & Majluf → 資金缺口（部分符合）；Frank & Goyal → 資本支出轉向 AI（符合）；Baker & Wurgler／Alti → 首週 +37% 但無同業估值（尚不能判斷）；Brau & Fawcett → 為什麼買 Cursor（算力 → 模型 → 應用）→ 上市前已規劃、上市後以股票支付（符合）；小結 |
| 19–26 | 02 怎麼定價 | B | 2.5 | Rock → 首日 +19.22%（方向一致，機制無法證明）；Hanley → 沒有價格區間（無法直接檢驗）；Loughran & Ritter → 潛在差額約 16.6bn、成本 29 倍（反事實估算，符合）；小結 |
| 27–35 | 03 上市後表現 | B | 3.0 | Ritter → 股價腰斬、落後大盤（方向一致）；Brav & Gompers → 落後 15.3 pp 但 SpaceX 是超大型公司（待觀察）；營運轉盈；Starship 首次從軌道回收、Space 分部研發 +44%；小結 |
| 36–50 | 04 控制權與 Tesla | C | 5.5 | Gompers → 投票權 84% vs 持股 49%；Cremers → 上市半年但成立 24 年；Johnson → 董事會、Tesla 連結、時間線、曝險、股價連動、事件研究；Field & Hanka → 閉鎖期約 2027/06 到期；四項都待觀察；小結 |
| 51–55 | 05 結論 | C | 2.0 | 總表 → 理論對照的結論 → 誰贏誰輸 → 結論 → 後續檢驗時間表 |
| 56–59 | 附錄：參考文獻、資料來源表（S01–S25） | — | — | 備用；被問到數字出處時翻到來源表 |

三人組：A 講 1–18 頁，B 講 19–35 頁，C 講 36–59 頁。

### 開場講稿（第 1–2 頁，約 60 秒）

大家好，在正式進入 SpaceX 的 IPO 財務與結構分析之前，我想先帶大家把時間倒轉回 2002 年。在那之前，太空探索幾乎是 NASA 這類國家級政府機構的專利。自從 1969 年阿波羅計畫把人類送上月球後，經過三十多年，太空產業的發展模式幾乎沒有改變。直到 2002 年，Musk 成立 SpaceX，民間公司開始挑戰國家主導的格局，SpaceX 也成為歷史上最具指標性的民間太空公司之一。（接著按節點講 2008 入軌、2012 Dragon、回收再飛、載人、Starlink，最後停在 2026：擴張需要的資金從哪裡來？）

### 容易被問的問題（備答）

- **xAI 合併和 Tesla 有什麼關係？** 兩者都是 Musk 站在交易兩邊的換股合併；xAI 合併的換股安排可作為檢視 Tesla 結合案的參照（Johnson et al.），報告未取得換股比例，不評論公平性。
- **為什麼不借錢就好？** 上市前九月營運現金流 4.1bn、PPE 支出 13.8bn，已有債務 22.9bn；上市後仍增借到 38.8bn，是借款與權益並用。
- **上市是為了併購嗎？** Cursor 是上市前就規劃好的：4 月取得收購選擇權，說明書載明上市後以 A 股支付；6/16 行使、8/14 交割，符合 Brau & Fawcett。
- **火箭公司為什麼要買寫程式的軟體？** SpaceX 已併入 xAI（Grok 模型），IPO 資金主要投入 AI 算力；Cursor 是應用層，使用資料可以回頭訓練 Grok，完成「算力 → 模型 → 應用」的垂直整合。
- **為什麼有 600 億和 425 億兩個數字？** 600 億是約定的隱含權益價值（按 7 日均價 128.65 美元換股）；425 億是財報認列的購買對價（按交割日 141.29 美元計價），另有 234 億轉為留才獎酬列薪酬費用。
- **首日漲 19% 不是好事嗎？** 對認購者是；按首日收盤機械估算，原股東的潛在差額約 16.6bn，但這是反事實估算，提高發行價可能改變需求。
- **為什麼 Hanley 是「無法直接檢驗」？** Hanley 比較的是最終價格相對初步價格區間的調整；SpaceX 直接預告 135 美元、沒有區間，缺少比較基準。
- **長期落後能下結論嗎？** 不能：只有 108 日，且 Brav & Gompers 發現大型公司幾乎沒有長期落後。
- **Musk 實際持股多少？** 受益所有權表計算約 49%（未含超額配售），投票權約 84%；封面揭露含超額配售後投票權約 82.3%。
- **Starship 回收成功，為什麼沒放進事件研究？** 消息在 11/13 收盤後才發生（上節 11/14 被接住），本研究價格資料截止 11/13；市場反應要從 11/16 開盤起看。而且推進器同一次飛行沒回收成功，好壞消息混在一起。
- **這筆錢到底多大？** 總募資 862.5 億美元是歷史最大 IPO，約是 2019 年 Saudi Aramco（294 億）的 2.9 倍，比 Aramco、Alibaba、SoftBank 三家加總（779 億）還多；上市後市值約 1.89 兆美元、全球第 7，募資只占市值約 4.5%。
- **異常報酬怎麼算？** 市場模型，估計期 6/22–10/13 共 80 日。見 `Scripts/tesla_linkage.py`。

> 以下為主報告與來源全文快照（2026-11-16），修改數據時需與 `01_Report.md`、`content.json` 一起更新。

# SpaceX IPO｜公司理財報告

[[115-1/Corporate-Finance/Coursework/SpaceX-IPO-Report/00_SpaceX-IPO-Report|回報告首頁]] · [[115-1/Corporate-Finance/Coursework/SpaceX-IPO-Report/07_Stock-Analysis|完整股價分析與圖表]]

> 已填入查核過的發行文件、財報與股價分析。整理日：2026-11-14；價格截止：2026-11-13。事實附來源，推論另標示；仍需組員複核並改寫成上台內容。

**目錄**：[[#摘要與核心結論|摘要]] · [[#1. 公司背景與發行條件|1 背景與發行條件]] · [[#2. 問題一：SpaceX 為什麼上市？|2 為什麼上市]] · [[#3. 問題二：IPO 價格怎麼決定？|3 怎麼定價]] · [[#4. 問題三：上市後表現如何？|4 上市後表現]] · [[#5. 問題四：誰控制公司？與 Tesla 的關係|5 控制權與 Tesla]] · [[#6. 結論：回答研究問題|6 結論]] · [[#參考文獻（2026-11-14 上網核對）|參考文獻]]

**相關筆記**：[[09_Presentation|簡報入口]] · [[SPEAKER_NOTES|講者筆記與分工]] · [[02_Sources-and-Data|來源與數據（S01–S25）]] · [[08_Governance-and-Tesla|治理與 Tesla 入口]]

## 摘要與核心結論

本案同時呈現「大型資本募集」「首日正報酬」與「上市後較首日收盤回落」。從發行價認購與上市後買入得到不同結果，因此不能只用首日漲幅評價 IPO 成敗。

1. **發行價 USD 135，首日收盤 USD 160.95，首日報酬 +19.22%**。[發行價 S04](https://www.sec.gov/Archives/edgar/data/1181412/000162828026042639/spaceexplorationtechnologi.htm)；收盤與計算見 [[02_Sources-and-Data#已下載的市場資料（S08）|S08]]／股價分析。
2. 截至 11/13，從首日收盤起算為 **-13.57%**，S&P 500 同期 **+1.75%**，相差 **-15.32 個百分點**。這是描述性比較，不是因果效果。
3. 財務資料顯示 IPO 提供的資金規模很大，但資本支出也很大；短期財務改善不能直接證明投資已創造長期價值。
4. **與理論比對**：SpaceX 的上市模式與美國成長型公司一致（Frank & Goyal；Kim & Weisbach 方向一致但因果未確認），並把新上市股票當作併購工具（Brau & Fawcett）：上市前（2026/4）已取得 Cursor 收購選擇權並約定上市後以 A 股支付，6/16 行使、8/14 交割（財報認列購買對價 424.7 億美元）。首日 +19.22% 與 Rock 方向一致（單一案例無法證明贏家詛咒機制）；以首日收盤機械估算的潛在差額約 16.6bn，符合 Loughran & Ritter。本案沒有初步價格區間，Hanley 的部分調整無法直接檢驗。長期績效與治理理論仍待檢驗（第 4、5 節）。
5. **Tesla**：共同 CEO、USD 2bn 持股（不到 1%）、前九月 626m Megapack 訂單、10/20 宣布評估結合。股價相關控制大盤後只剩 0.09，宣布前後無顯著異常報酬；關鍵在潛在結合的估值與少數股東保護（第 5 節）。

## 1. 公司背景與發行條件

### 1.1 公司背景：從民營火箭公司到大型基礎設施企業

**SpaceX 是 Elon Musk 於2002年成立的美國民營航太公司。2008年，其 Falcon 1 成為首枚由民間開發、成功進入地球軌道的液體燃料火箭。** 這比「第一間把火箭送到外太空的民間企業」精確：短暫進入太空與持續繞行地球的入軌任務不同，也不能省略「液體燃料」的技術範圍。[S15，NASA／SpaceX CRS-7 Press Kit：Key SpaceX Milestones](https://www.nasa.gov/wp-content/uploads/2018/07/spacex_nasa_crs-7_presskit.pdf)

SpaceX 成立初期的問題，是如何以民營企業的方式降低進入太空的成本，並建立可持續的發射服務。Falcon 1 入軌證明了技術可行性，但「發射成功」還不是完整的商業模式；公司也必須取得客戶、累積任務經驗，並把研發成果變成可以持續交付的服務。

**接下來的發展是取得任務與建立可信度。** 2012年，SpaceX 成為首家造訪國際太空站的商業公司，從技術驗證走向替 NASA 執行太空運輸任務。2020年5月30日，Falcon 9 搭載 Crew Dragon 執行 Demo-2，將 NASA 太空人送往國際太空站；NASA 將其描述為太空人首次自美國本土搭乘商業建造及營運的美國載人太空船出發。貨運與載人任務讓聽眾理解：SpaceX 提供的不只是火箭產品，也包括客戶購買的運輸服務。[S16，NASA Commercial Crew Rockets](https://www.nasa.gov/humans-in-space/spaceships-and-rockets/commercial-crew-rockets/)；[S17，NASA Demo-2 公告](https://www.nasa.gov/news-release/nasa-astronauts-launch-from-america-in-historic-test-flight-of-spacex-crew-dragon/)

**同時，公司嘗試改變火箭的使用方式。** 2015年 Falcon 9 第一級完成著陸，2017年完成軌道級火箭的再飛行。回收是把火箭帶回來，重複使用則是讓它再次執行任務；這兩個階段應分開說明。其商業意義是嘗試降低每次任務的硬體消耗、提高資產利用率，但單靠成功回收仍不能推算整體發射成本或獲利率。[S18，SpaceX 歷史里程碑](https://www.spacex.com/mission/)

**再往後，業務從替客戶發射，擴展到經營自己的衛星網路。** Starlink 不只是一次性的衛星發射任務，而是需要持續部署、營運與更新衛星的通訊服務。公司因此同時扮演發射服務供應者與衛星網路營運者。相較單次發射合約，通訊業務帶來不同的收入型態，也伴隨衛星、地面設備與服務網路的長期投入。這是商業模式的分析，不代表所有收入都是訂閱或已經獲利。

**這條發展路徑，才接到本報告的 IPO 問題：** SpaceX 從證明「能否進入軌道」，走向提供運輸、重複使用火箭與經營衛星網路；到了上市文件所涵蓋的時點，還包括 AI 業務。研究對象已是一家需要持續投入設備與基礎設施的企業，因此要進一步問：內部資金、私募與借款是否足以支應擴張？公開募集股權能提供什麼，又會帶來哪些代價？這是歷史背景與融資分析之間的連結，不能把早期技術突破直接當成2026年上市的決策證據。

本次發行主體為 **Space Exploration Technologies Corp.（SPCX）**，不是 Starlink 單獨分拆上市；最終文件涵蓋 Space、Connectivity、AI，後續季報使用 SI 名稱。以下以合併口徑分析，並留意 xAI、Cursor 等組織交易對跨期比較的影響。[S04，最終公開說明書](https://www.sec.gov/Archives/edgar/data/1181412/000162828026042639/spaceexplorationtechnologi.htm)；[S02，Q3季報](https://www.sec.gov/Archives/edgar/data/1181412/000162828026066880/spcx-20260930.htm)

### 1.2 發行條件：版本與口徑已區分

| 項目 | 核對後資料 | 依據 |
| --- | --- | --- |
| 初始申報 | 2026-05-20，初始 S-1，價格等尚空白 | [[02_Sources-and-Data#來源清單\|S07]] 封面 |
| 最終公開說明書日期 | 2026-06-11 | [[02_Sources-and-Data#來源清單\|S04]] 封面 |
| 首日交易／交割 | 2026-06-12／2026-06-15 | [[02_Sources-and-Data#來源清單\|S01]] |
| 發行價 | USD 135／股 | [[02_Sources-and-Data#來源清單\|S04]] 封面 |
| 基礎新股 | 555,555,555 股 | [[02_Sources-and-Data#來源清單\|S04]] 封面 |
| 超額配售新股 | 83,333,333 股，已全數行使 | [[02_Sources-and-Data#來源清單\|S04]]／[[02_Sources-and-Data#來源清單\|S01]] |
| 總新股數 | 638,888,888 股；本次發行股份由公司出售 | [[02_Sources-and-Data#來源清單\|S01]]／[[02_Sources-and-Data#來源清單\|S04]] |
| 含超額配售總募資 | 約 **USD 86.250 billion**，總股數 × 135 | 依 [[02_Sources-and-Data#來源清單\|S04]] 條件自行計算 |
| 承銷佣金及發行成本合計 | USD 575 million | [[02_Sources-and-Data#來源清單\|S02]] 註1 |
| 公司淨募資 | USD 85,675 million，即 **USD 85.675 billion** | [[02_Sources-and-Data#來源清單\|S02]] 註1 |
| 投票權 | A 股每股1票、B 股每股10票；全額超額配售後 Musk 約82.3%投票權；持股約49%（受益所有權表計算） | [[02_Sources-and-Data#來源清單\|S04]] 封面、Principal Shareholders |
| 解禁安排 | 分批解禁，不是所有股東同一天；創辦人閉鎖至公開說明書後第366日的交易日結束，無提前釋出條款 | [[02_Sources-and-Data#來源清單\|S04]] 承銷章節 |

**募資口徑核對**：`638,888,888 × USD 135 ≈ USD 86.250bn`，扣除 `USD 0.575bn` 後約為 `USD 85.675bn`，可與季報淨額勾稽。[[02_Sources-and-Data#來源清單|S01]] 新聞稿把約85.7bn寫為總募資，與此口徑有出入；本報告以最終條件計算及季報實收淨額為主，保留差異，不把兩者混用。

**規模對照**：以 2026-11-13 收盤價計，SpaceX 市值約 USD 1.89 兆，排名全球第 7（Apple 5.18 兆、NVIDIA 3.93 兆、Microsoft 3.89 兆、Alphabet 3.60 兆、Amazon 2.88 兆、TSMC 2.07 兆之後），超過 Saudi Aramco（1.72 兆）、Meta（1.64 兆）與 Tesla（1.54 兆）（[S24](https://companiesmarketcap.com/)）。淨募資 85.7bn 只占市值約 4.5%；但總募資 86.25bn 是歷史最大的 IPO，約是 2019 年 Saudi Aramco（29.4bn，含超額配售）的 2.9 倍，也超過 Aramco、Alibaba（2014，25.0bn）與 SoftBank Corp.（2018，約 23.5bn）三家加總的 77.9bn（[S25](https://www.aa.com.tr/en/economy/factbox-from-aramco-to-alibaba-biggest-ipos-in-history-before-spacex-s-planned-market-debut/3964235)）。[[02_Sources-and-Data#^s24|S24]] 的 SpaceX 市值依其流通股數口徑，與以受益所有權表股數自行估算的約 1.82 兆略有差異。

### 1.3 研究問題與章節安排

本報告用四個研究問題組織：為什麼上市（第 2 節）、IPO 價格怎麼決定（第 3 節）、上市後表現如何（第 4 節）、誰控制公司以及與 Tesla 的關係（第 5 節）。每一節先寫下文獻的預測，再列出 SpaceX 的數據與申報文件，最後給出判定，避免先看結果再找理論。每個問題都納入後續研究與適用條件。「對本案的預測」為小組依各文獻推得，並非原作者對 SpaceX 的主張。文獻摘要與數字已於 2026-11-14 上網核對（見文末參考文獻）。

判斷標準：**符合**＝方向與量級一致；**無法直接檢驗**＝缺少理論需要的比較基準；**部分符合**＝方向一致但有其他解釋或期間不足；**不符合**＝方向相反；**待觀察**＝資料不足或事件尚未發生。

## 2. 問題一：SpaceX 為什麼上市？

### 2.1 理論預測

| 文獻 | 樣本／方法 | 核心發現 | 對本案的預測 |
| --- | --- | --- | --- |
| Myers & Majluf（1984） | 理論模型 | 資訊不對稱讓發股被解讀為高估訊號；融資順位為內部資金 > 負債 > 權益 | 只有內部資金與負債都不夠時才發股 |
| Frank & Goyal（2003） | 美國上市公司，1971–1998 | 淨發股比淨借款更貼近資金缺口，與融資順位相反；只有大型公司在部分期間符合，且 1990 年代消失 | 成長快速、投資需求大的公司可能直接選擇權益 |
| Kim & Weisbach（2008） | 38 國、1990–2003，約 1.7 萬件 IPO 與 1.3 萬件現金增資 | 新資金同時用於研發與資本支出；高市價淨值比公司較多存成現金，擇時亦是動機 | 上市後投資應明顯增加 |
| Baker & Wurgler（2002） | 美國上市公司 | 公司在估值高時發股，影響資本結構十年以上 | 在估值高點上市 |
| Alti（2006） | 熱門／冷門市場的 IPO | 擇時對負債比的影響一年後剩不到一半，兩年後完全消失 | 即使擇時，對資本結構的影響也短暫 |
| Brau & Fawcett（2006） | 336 位美國 CFO 問卷 | 上市最主要動機是創造可作為併購支付工具的公開股票；時點取決於整體市場 | 上市後會用股票併購 |

### 2.2 SpaceX 的事實：投資需求與資金缺口

**最有文件支持的答案是：替資本密集的擴張取得大規模權益資金。** 募資用途與上市前投資規模可以互相對照；不是先看到上市後股價，再倒推上市動機。

**上市前併入 xAI：研究主體已經改變。** 2026-02-02，SpaceX 以換股方式完成收購 X.AI Holdings Corp.（xAI），xAI 成為全資子公司。xAI 先前已於 2025-03-28 併入 X Holdings（原 Twitter）與開發 Grok 模型的 SpaceXAI Corp.，所以這次合併把 Grok 與 X 的業務一起帶進 SpaceX。10-Q 將這兩次合併歸類為「同一控制者下的合併」（Common Control Mergers），因為雙方都由 Musk 控制（[[02_Sources-and-Data#來源清單|S02]] Note 1）。

這解釋了為什麼一家火箭公司的 IPO 要談資料中心與 GPU：上市時的 SpaceX 已同時涵蓋太空、衛星通訊與 AI。2026 前九月 PPE 支出 48,069 百萬美元中，AI（SI）分部占 39,995 百萬美元，約 83%（[[02_Sources-and-Data#來源清單|S02]] 分部資訊，自行計算）。也因此，2026 年與 2025 年的財務數字並非同一業務範圍，跨期比較需要保留這個限制。

| 上市前資本支出（USD million） | 2025全年 | 2026 Q1 |
| --- | ---: | ---: |
| Space | 3,832 | 1,052 |
| Connectivity | 4,178 | 1,332 |
| AI | 12,727 | 7,723 |
| 合計 | 20,737 | 10,107 |

2026 Q1 約 **76.41%** 資本支出集中於 AI（7,723／10,107，自行計算）。這顯示本案的資金故事也涵蓋算力，而非只有火箭。季度與全年表為規模背景，不能直接相減當成年增額。[S04，MD&A：Capital Expenditures](https://www.sec.gov/Archives/edgar/data/1181412/000162828026042639/spaceexplorationtechnologi.htm)

**分析推論**：權益融資較適合承擔回收期長、成果不確定的投資，但有稀釋成本。文件不足以證明「公司即將破產」「無法借款」「Musk 個人套現」或「為合併 Tesla 才上市」。市場流動性與後續發股能力可列為上市的制度效果；若沒有決策文件，不能寫成已證實的內部動機。

**公司揭露**：初始 S-1 的募資用途包括 AI 算力基礎設施、發射設施與載具、衛星星系的規模／容量，以及一般企業用途；管理層仍保留資金配置彈性。[S07，第66頁附近募資用途](https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm)

**小組推論**：需要長期、高不確定性資本投入，支持大規模權益融資的合理性；但不能據此斷言公司無法借款、已缺乏現金或 IPO 是唯一選擇。應比較四種來源：

| 資金來源 | 本案適用性與代價（分析推論） |
| --- | --- |
| 內部資金 | 不稀釋；但資金供給可能追不上投資需求 |
| 私募股權 | 可維持非公開狀態；資金規模與交易條件仍受投資人限制 |
| 借款／公司債 | 不新增普通股；增加利息、償債與契約負擔 |
| IPO | 大量權益資本及公開市場流動性；伴隨稀釋、揭露與市場壓力 |

### 2.3 上市後的資金用途：投資、負債與 Cursor 併購

**以下財務數字單位一律為百萬美元（USD million），依 [[02_Sources-and-Data#來源清單|S02]] 原表列示。** 單季只對單季、九個月只對九個月；2026前九月橫跨上市前後，不能視為純粹「上市後」期間。

| 指標 | 2025 Q3 | 2026 Q3 | 2025前九月 | 2026前九月 |
| --- | ---: | ---: | ---: | ---: |
| 收入 | 5,576 | 14,575 | 13,714 | 27,083 |
| 營業損益 | -273 | 2,791 | -1,216 | 705 |
| 合併淨損益 | -1,054 | 4,404 | -2,590 | -413 |
| 營運現金流 | 不列：所取原表為九月累計 | 不列 | 4,120 | 13,097 |
| PPE購置現金支出 | 不列 | 不列 | 13,846 | 48,069 |
| 簡化現金缺口：營運現金流－PPE支出 | 不列 | 不列 | -9,726 | -34,972 |

來源：[S02，財務報表第5、9頁](https://www.sec.gov/Archives/edgar/data/1181412/000162828026066880/spcx-20260930.htm)。最後一列為自行計算，未調整資本化利息、設備回饋款或其他項目，不冒稱公司揭露的自由現金流。

Q3 收入年增 **+161.39%**；營業利益率由 **-4.90%** 變成 **19.15%**（自行計算）。這是短期營運改善證據，但不代表 IPO 單獨造成改善；淨利與營業利益也不能混用。

| 資產負債表指標 | 2025-12-31 | 2026-09-30 |
| --- | ---: | ---: |
| 現金及約當現金 | 24,747 | 51,294 |
| 債務及融資租賃（流動＋非流動） | 22,896 | 38,844 |
| 股東權益 | 2,573 | 176,768 |

來源：[[02_Sources-and-Data#來源清單|S02]]，第4頁；債務列為原表兩列相加。股東權益變動也涉及特別股轉換及組織交易，不能把增加額全部稱為 IPO 募資。

**Cursor 是誰、為什麼買**：Cursor（Anysphere, Inc.）是總部在舊金山的 AI 程式碼編輯器公司。SpaceX 把這筆交易定位為「垂直整合算力基礎設施、模型與應用」：IPO 資金與資本支出蓋算力（2026 Q1 有 76% 資本支出投入 AI），Grok 是模型層（xAI 已併入 SpaceX），Cursor 則補上應用層；工程師使用 Cursor 產生的程式碼互動資料，可以回頭訓練 Grok 並帶動推論需求（[[02_Sources-and-Data#來源清單|S04]]，Business—Collaboration with Cursor）。因此 Cursor 併購同時連到 Kim & Weisbach（資金用於 AI 投資）與 Brau & Fawcett（股票作為併購工具）。

**Cursor 併購：上市前已規劃，上市後以股票支付。** 2026 年 4 月，SpaceX 與 Cursor（Anysphere, Inc.）簽訂運算與選擇權協議，取得以預定價格收購 Cursor 的權利（非義務）。最終公開說明書載明：若在本次發行完成後收購，對價將以 A 股支付，以 Cursor 隱含權益價值 600 億美元及交割前 7 個交易日 A 股成交量加權平均收盤價換算；若 SpaceX 終止選擇權，須付 15 億美元終止費及 85 億美元遞延服務費（[[02_Sources-and-Data#來源清單|S04]]，Business—Collaboration with Cursor）。SpaceX 於 6 月行使選擇權、6/16 簽訂合併協議、8/14 交割。

**兩種金額口徑不同**：600 億美元是交易約定的「隱含權益價值」，按 7 日均價 128.65 美元換算股數（交換比例 9.7142）；財報認列的「購買對價」約 424.7 億美元，是以交割日收盤價 141.29 美元計價，且部分 Cursor 股份轉為附服務條件的留才股權獎酬（233.76 億美元），依 ASC 805 列為日後薪酬費用而非購買對價（[[02_Sources-and-Data#來源清單|S02]] Note 20）。因此 424.7 億 + 233.8 億 ≈ 658.5 億，與 600 億的差異來自計價股價不同。

這反而是 Brau & Fawcett 的有力證據：公開交易的股票，支撐了一項上市前就已規劃的併購。

| 項目 | 查證結果 | 來源 |
| --- | --- | --- |
| Cursor 合併對價 | 全數以 SpaceX A 股支付：發行 2.71 億股 × 收盤價 141.29 美元＝382.93 億美元，加替換員工股權 41.81 億，總對價 424.74 億美元；6/16 簽約、8/14 交割；交換比例 9.7142（Cursor 隱含權益價值 600 億美元） | [[02_Sources-and-Data#來源清單\|S02]] Note 20 Acquisitions |

### 2.4 判定

| 理論 | 預測 | SpaceX 實際 | 判斷 |
| --- | --- | --- | --- |
| Kim & Weisbach | 上市資金用於投資 | PPE 支出前九月 13.8bn → 48.1bn（+247%）；但 2026 前九月含上市前 1–5 月，且 xAI、Cursor 改變業務範圍 | 方向一致（因果未確認） |
| Frank & Goyal | 成長型公司不遵守融資順位 | 投資需求大，直接大規模發股 | 符合 |
| Brau & Fawcett | 上市為了取得併購用股票 | 上市前已取得 Cursor 選擇權並約定上市後以 A 股支付；財報認列對價 424.7 億美元全數以股票支付 | 符合 |
| Myers & Majluf | 內部資金與負債都不夠時才發股 | 上市前缺口 −9.7bn，但上市後仍增借到 38.8bn，借款與權益並用 | 部分符合 |
| Baker & Wurgler／Alti | 估值高點發行；效果持久或短暫 | 首週 +37% 顯示熱度，缺少同業估值 | 尚不能判斷 |

## 3. 問題二：IPO 價格怎麼決定？

### 3.1 理論預測

| 文獻 | 樣本／方法 | 核心發現 | 對本案的預測 |
| --- | --- | --- | --- |
| Rock（1986） | 理論模型（假設固定價格發行） | 資訊較少的投資人易買到不熱門的發行，需折價吸引認購 | 首日收盤高於發行價 |
| Benveniste & Spindt（1989）；Hanley（1993） | 理論模型；美國 IPO | 詢價圈購中承銷商以折價換取需求資訊；最終價高於初步價格區間的 IPO 首日漲最多（部分調整） | 需求強會上修價格；未上修者首日漲幅應較小 |
| Loughran & Ritter（2004） | 美國 IPO，1980–2003 | 平均首日報酬：1980 年代 7%、1990–98 年約 15%、1999–2000 年 65%、2001–03 年約 12%；發行公司較重視分析師關注等目標 | 大型發行也可能留下大量的錢在桌上 |

### 3.2 SpaceX 的事實：固定價格與首日報酬

| 項目 | 查證結果 | 來源 |
| --- | --- | --- |
| 預定價格 | 6/3 初步公開說明書未列價格區間，直接預告「預期發行價為每股 135.00 美元」；最終定價相同 | [S-1/A（2026/6/3）](https://www.sec.gov/Archives/edgar/data/1181412/000162828026040364/spaceexplorationtechnologib.htm)；[定價 FWP（2026/6/11）](https://www.sec.gov/Archives/edgar/data/1181412/000162828026042466/spaceexplorationtechnologi.htm) |

發行價 USD 135，首日收盤 USD 160.95，首日報酬 **+19.22%**，高於 Loughran & Ritter（2004）整理的 1980 年代（7%）與 1990–98 年（約 15%）平均，遠低於 1999–2000 年（65%）；首週收盤 USD 185.00（自發行價 +37.04%）。**反事實估算**：若 638,888,888 股新股都能以首日收盤價賣出，按首日收盤價機械計算的潛在差額約 **USD 16.6bn**（(160.95 − 135) × 638,888,888，自行計算），約為承銷與發行成本 USD 0.575bn 的 29 倍。實際提高發行價可能改變需求與首日價格，因此這是潛在差額，不是已實現的原股東損失。

### 3.3 判定

| 理論 | 預測 | SpaceX 實際 | 判斷 |
| --- | --- | --- | --- |
| Rock | 固定價格發行需折價 | 預告並維持 135 美元，首日 +19.22%；單一案例無法證明折價來自贏家詛咒 | 方向一致 |
| Hanley（部分調整） | 最終價高於初步價格區間者首日漲最多 | 本案沒有初步價格區間，缺少理論需要的比較基準 | 無法直接檢驗 |
| Loughran & Ritter（2004） | 留在桌上的錢可能遠大於直接成本 | 機械估算潛在差額約 16.6bn，約為直接成本 0.575bn 的 29 倍 | 符合（反事實估算） |

## 4. 問題三：上市後表現如何？

### 4.1 理論預測

| 文獻 | 樣本／方法 | 核心發現 | 對本案的預測 |
| --- | --- | --- | --- |
| Ritter（1991） | 美國 IPO，1975–1984，1,526 家 | 三年報酬落後規模與產業對照公司（二手文獻引述 34.47% vs 61.86%）；集中在年輕公司與高發行量年份 | 長期落後市場 |
| Brav & Gompers（1997） | 934 件創投支持、3,407 件非創投支持 IPO | 創投支持 IPO 未顯著落後；落後集中在最小型非創投公司，且同特徵未發股公司一樣差；市值加權後落後大幅縮小 | **超大型公司**適用性有限 |

### 4.2 股價表現

| 觀察點 | 實際交易日 | 收盤價 USD | 發行價135起算 | 首日收盤起算 | S&P 500同期 | 與基準差（百分點） |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| 上市首日 | 2026-06-12 | 160.95 | +19.22% | +0.00% | +0.00% | +0.00 |
| 首週（首日後7曆日內） | 2026-06-18 | 185.00 | +37.04% | +14.94% | +0.93% | +14.01 |
| 首月（首日後1曆月） | 2026-07-10 | 145.30 | +7.63% | -9.72% | +1.94% | -11.66 |
| 三個月 | 2026-09-11 | 151.21 | +12.01% | -6.05% | +3.03% | -9.09 |
| 樣本截止 | 2026-11-13 | 139.11 | +3.04% | -13.57% | +1.75% | -15.32 |


來源：[[02_Sources-and-Data#已下載的市場資料（S08）|S08]] 原始 JSON／CSV；發行價用 [[02_Sources-and-Data#來源清單|S04]]。百分比以未四捨五入原值計算。市場比較都從6/12收盤起算；發行價報酬另列，不拿兩個不同起點直接當超額報酬。

![[115-1/Corporate-Finance/Coursework/SpaceX-IPO-Report/Figures/price_performance.png]]

最高收盤 USD 211.39（2026-06-16），最低收盤 USD 108.27（2026-08-05）；收盤最大回撤 **-48.78%**。盤中高低點並非本指標。[完整公式與來源差異見股價分析筆記]

### 4.3 營運與技術進展：Starship 首次從軌道回收（2026-11-13／14）

**營運面**：2026 Q3 收入年增 **+161.39%**，營業利益率由 **-4.90%** 變成 **19.15%**（完整財務表見 2.3）。同期有 xAI、Cursor 等組織交易，業務範圍改變，不能把改善全部歸因於 IPO。

Starship 第 15 次試飛於 2026-11-13（週五）自 Starbase 發射。上節（Ship 42）繞地球 14 圈、部署 26 顆 Starlink V3 衛星，約 22.5 小時後於 11-14 被發射塔機械臂接住，是第一次從軌道回收 Starship 上節（[S21](https://phys.org/news/2026-11-spacex-starship-soars-orbit-booster.html)、[S22](https://www.cnbc.com/2026/11/14/spacex-plans-to-try-first-ever-catch-of-starship-rocket-from-orbit.html)）。推進器（Super Heavy）則在發射後放棄塔架回收，改飛向墨西哥灣並在落海前爆炸；原因報導說法不一（SpaceX 表示仍在調查，Musk 提到引擎推力不足、燃料偏低），原訂兩節都接住的目標沒有達成。此前 SpaceX 已三次用塔架接住推進器（2024/10、2025/1、2025/3）。

| Space 分部 | 2025 Q3 | 2026 Q3 | 變動 |
| --- | ---: | ---: | ---: |
| 收入 | 1,666 | 1,767 | +6.1% |
| 研發費用 | 849 | 1,225 | +44.3% |
| 營業損益 | 259 | -7 | 由盈轉虧 |
| 資本支出 | 1,113 | 1,606 | +44.3% |

來源：[[02_Sources-and-Data#來源清單|S02]] 分部資訊（第32–33頁），單位 USD million；變動率自行計算。10-Q 說明 Space 分部研發主要用於 Starship，並把「回收與重複使用里程碑」列為前瞻陳述。

解讀：上節回收是 Starship 完全重複使用的前提；若能穩定重複，自家 Starlink 衛星的部署成本才可能下降（推論）。但這是單次試飛結果，Space 分部目前仍處於投入期。消息發生在本研究價格資料截止（11/13 收盤 139.11 美元）之後，市場反應要從 11/16 開盤起觀察，因此未納入 5.6 的事件研究；報導指出下一次試飛預定測試兩節重複使用（[S23](https://finance.yahoo.com/markets/stocks/articles/spacex-catches-starship-orbit-first-132124995.html)）。

### 4.4 判定

| 理論 | 預測 | SpaceX 實際 | 判斷 |
| --- | --- | --- | --- |
| Ritter（1991） | 長期報酬落後 | 108 日落後大盤 15.32 pp；以 β 2.43 粗估預期約 +4%，調整後仍落後；但原研究衡量三到五年 | 方向一致（期間過短） |
| Brav & Gompers（1997） | 大型公司不太有長期落後 | SpaceX 為超大型公司 | 待觀察 |

本資料僅108個交易日，不能宣稱已驗證一年、三年或五年的上市績效。後續追蹤：募集資金使用、資本支出回收、營運現金流、控制權安排，以及解禁、併購等同期事件。

## 5. 問題四：誰控制公司？與 Tesla 的關係

### 5.1 理論預測

| 文獻 | 核心發現 | 對本案的預測 |
| --- | --- | --- |
| Jensen & Meckling（1976） | 經營者持股低於控制權時產生代理成本 | 外部股東需要監督機制 |
| Gompers, Ishii & Metrick（2010） | 雙層股權公司價值隨內部人現金流權上升、隨投票權上升而下降 | 投票權高於持股，可能有估值折價 |
| Cremers, Lauterbach & Pajuste（2024） | 雙層股權上市時常有溢價，約 6–9 年後與單一股權公司相近，平均之後轉為折價 | 公司成立年數不等於上市年數；SpaceX 成立約 24 年但上市約 5 個月，溢價或折價仍須同業估值比較驗證 |
| Johnson, La Porta, Lopez-de-Silanes & Shleifer（2000） | 控制股東可透過關係人交易移轉資源，且未必違法；保護程度取決於所在地法律 | Tesla 交易需獨立審議；須看 Texas 法律與章程 |
| Field & Hanka（2001） | 1,948 份閉鎖協議：到期前後三日平均異常報酬約 −1.5%，成交量永久增加約四成 | 創辦人約 2027 年 6 月解禁時股價可能承壓 |

### 5.2 CEO、董事會與控制權

下表是最終公開說明書以 **2026-05-01 為資訊基準、預計 IPO 完成後**的名單，不冒稱 11 月最新任免名冊。

| 人員                 | 職務／身分                     | 文件認定獨立董事 |
| ------------------ | ------------------------- | -------- |
| Elon Musk          | CEO、CTO、董事長；同時為 Tesla CEO | 否        |
| Gwynne Shotwell    | President、COO、董事          | 否        |
| Ira Ehrenpreis     | 董事；亦為 Tesla 董事            | 是        |
| Randy Glein        | 董事                        | 是        |
| Antonio J. Gracias | 董事                        | 否        |
| Donald Harrison    | 董事                        | 是        |
| Steve Jurvetson    | 董事                        | 是        |
| Luke Nosek         | 董事                        | 是        |

**Bret Johnsen 是 CFO，未列為這份名單的董事**。來源：[S04，Management／Director Independence](https://www.sec.gov/Archives/edgar/data/1181412/000162828026042639/spaceexplorationtechnologi.htm)。

**公司理財分析**：重點不只是誰當 CEO，而是誰能決定資金配置。雙層股權讓創辦人在對外募集資金後仍維持控制；好處可能是維持長期策略，風險則是外部股東監督能力與關係人交易利益衝突。以上是治理權衡，不代表已發生不當交易。共用 CEO／董事也使 Tesla 相關交易的獨立審議、估值與資訊揭露成為值得追蹤的議題。

**已發生過的先例：xAI 合併。** 2026-02 的 xAI 合併，是 Musk 控制的兩家公司之間以換股完成的交易（同一控制者下的合併，[[02_Sources-and-Data#來源清單|S02]] Note 1）。這正是 Johnson et al.（2000）關注的情境：換股比例決定雙方股東各分到多少，而控制者同時站在交易兩邊。潛在的 Tesla 結合屬於同一類型，因此 xAI 合併的換股安排與審議程序，可作為之後檢視 Tesla 結合案的參照。本報告未取得 xAI 合併的換股比例與審議細節，不對其公平性下結論。

**申報文件查證（2026-11-14）**

| 項目 | 查證結果 | 來源 |
| --- | --- | --- |
| 註冊州 | 2002 年於 Delaware 設立，2024-02-14 轉換為 Texas 公司 | [[02_Sources-and-Data#來源清單\|S02]] 註1 |
| 治理豁免 | Musk 持有過半投票權，SpaceX 為 Nasdaq「受控公司」並擬使用治理豁免；B 股可選出董事會過半數 | [[02_Sources-and-Data#來源清單\|S04]] 封面、Management |
| B 股轉換 | B 股可隨時轉為 A 股，轉讓（非許可轉讓）時自動轉換；文件中未見以時間為條件的落日條款 | [[02_Sources-and-Data#來源清單\|S02]] Note 12 |
| Musk 投票權與持股 | 受益所有權表（未含超額配售）：A 股 8.49 億、B 股 55.69 億股，投票權 84.4%；持股約 49.0%（自行計算：6,418.5／13,090.9 百萬股）。封面揭露含超額配售後投票權約 82.3%，兩者計算基礎不同 | [[02_Sources-and-Data#來源清單\|S04]] Principal Shareholders |

### 5.3 與 Tesla 的連結與時間線

**先分清事件時間**：Tesla 的持股投資發生在 IPO 前；Cursor 交易與評估 Tesla 合作則是 IPO 後發展，不能統稱為 IPO 的效果。

| 時點 | 已揭露事實 | 分析用途 |
| --- | --- | --- |
| 2026年3月 | Tesla 投資 USD 2bn 取得 SpaceX 普通股，持股不到1%；文件亦說明先前 xAI 投資的轉換背景 | 兩家公司在上市前已存在資本連結 |
| 2026-06-16／08-14 | Cursor 合併協議／交割 | 同期業務範圍改變，干擾營運前後比較 |
| 2026-10-20 | SpaceX 財報電話會議公告成立特別委員會，評估與 Tesla 結合的可能性 | 上市後公司事件；不是已完成合併 |
| 截至兩家公司 Q3 申報 | Tesla 也成立由無利害關係董事組成的特別委員會；交易仍可能不進行 | 關注審議程序與中小股東權益 |

來源：[S02，MD&A／Acquisitions／Evaluation of Potential Combination](https://www.sec.gov/Archives/edgar/data/1181412/000162828026066880/spcx-20260930.htm)；[S12，Tesla Q3 註13及 Part II Item 5](https://www.sec.gov/Archives/edgar/data/1318605/000162828026066775/tsla-20260930.htm)。表中為文件披露的狀態，不將後續傳聞當成協議或交割。

### 5.4 SpaceX 如何進入 Tesla 的財報

| 管道 | 文件證據／分析 | 結論界線 |
| --- | --- | --- |
| 實際業務 | Tesla 2026 Q3／前九月對 SpaceX 的 Megapack 收入分別為 USD 221m／626m | 已有商業往來；不代表 IPO 募資直接支付全部訂單 |
| 持股評價 | Tesla 對 SpaceX 投資選擇公允價值衡量，損益列入 Other (expense) income, net | SpaceX 估值變化可影響 Tesla 帳面損益；不等於 Tesla 營業獲利改善 |
| 共同管理者 | 共同 CEO 帶來策略連結，也可能有時間分配與利益衝突問題 | 這是風險機制，不能直接量化成股價跌幅 |
| 潛在交易 | 可能的合作或合併涉及換股、估值、資金需求、稀釋與協同效益 | 未定案，無法填入確定換股比例或交易收益 |

前兩列依據：[S12，註1及註13](https://www.sec.gov/Archives/edgar/data/1318605/000162828026066775/tsla-20260930.htm)。不能把「有重大影響」的會計判斷誤寫成 Tesla 控制 SpaceX，也不能把投資評價損益當作 Megapack 銷售收入。

### 5.5 股價：事件附近的實際觀察

下列為**當日收盤相對前一交易日收盤**，三個市場採相同日期。2026-10-20 是披露事件日；日資料不能判斷盤中資訊抵達時刻。10/21 列為事件後下一交易日觀察，SpaceX 的披露本身就在財報電話會議，不能分離業績與交易消息。Tesla 則於 **10/21 收盤後**發布 Q3 財報，因此 10/22 的回落也不能只歸因交易消息。[Tesla 官方財報時程](https://ir.tesla.com/press-release/tesla-third-quarter-2026-production-deliveries-and-deployments)

| 交易日 | SPCX 日報酬 | TSLA 日報酬 | S&P 500 日報酬 |
| --- | ---: | ---: | ---: |
| 2026-10-19 | +1.32% | +3.76% | +0.41% |
| 2026-10-20 | -0.11% | +1.54% | +0.28% |
| 2026-10-21 | +7.79% | +3.41% | +0.58% |
| 2026-10-22 | -9.14% | -3.08% | -1.21% |
| 2026-10-23 | +1.89% | -0.63% | -0.52% |

10/21 兩股同漲，隔日又回落，適合討論市場如何重估事件，不能只挑一天說「合併讓股價上漲」。研究期間 6/12 收盤至 11/13 收盤，SPCX **-13.57%**、TSLA **-3.99%**、S&P 500 **+1.75%**；這也不是 IPO 對 Tesla 的因果效果。

來源：Yahoo Finance chart 端點；SPCX／市場原始資料 [[02_Sources-and-Data#已下載的市場資料（S08）|S08]]，TSLA 另存原始回應及 SHA-256。`Scripts/analyze_tesla.py` 可重抓並計算；日報酬＝當日收盤／前日收盤－1。未填補缺失日期，108個共同交易日。TSLA 價格尚未以第二資料商逐日覆核。[TSLA 歷史行情](https://finance.yahoo.com/quote/TSLA/history/)

![[115-1/Corporate-Finance/Coursework/SpaceX-IPO-Report/Figures/spcx_tsla_comparison.png]]

### 5.6 股價連動與事件研究（市場模型）

| 指標（排除上市首週，103 個交易日） | 數值 | 解讀 |
| --- | ---: | --- |
| SPCX–TSLA 日報酬相關係數 | 0.36 | 中度正相關 |
| 控制大盤後的殘差相關 | 0.09 | 扣除共同的市場波動後幾乎不相關 |
| 市場 β（SPCX／TSLA） | 2.43／2.53 | 兩檔對大盤都很敏感 |
| 年化波動（SPCX／TSLA／S&P 500） | 73.9%／52.7%／13.6% | SPCX 最不穩定 |

看不到明顯的「Musk 因子」共同波動：兩檔的相關主要來自大盤。

| 期間 | SPCX 異常報酬 | TSLA 異常報酬 |
| --- | ---: | ---: |
| 10/19 | +0.39% | +2.69% |
| 10/20（宣布日） | −0.69% | +0.85% |
| 10/21 | +6.37% | +1.82% |
| 10/22 | −5.39% | +0.84% |
| 10/23 | +3.64% | +1.16% |
| CAR [10/20, 10/21] | +5.68%（t = 0.93） | +2.66%（t = 0.75） |
| CAR [10/19, 10/23] | +4.32%（t = 0.45） | +7.36%（t = 1.32） |

估計期 2026-06-22～10-13（80 個交易日），市場模型 R = α + β·R_m；異常報酬＝實際 −預期，t ≈ CAR／(殘差標準差 × √天數)。所有 |t| < 2，統計上不顯著；加上兩家財報消息重疊，無法識別「評估結合」這則消息本身的效果。計算：`Scripts/tesla_linkage.py` → `Data/Analysis/tesla_linkage.json`。

### 5.7 判定

| 理論 | 預測 | SpaceX 實際 | 判斷 |
| --- | --- | --- | --- |
| Gompers et al.；Cremers et al. | 背離帶來折價；溢價隨公司年齡消失 | 投票權約 84% vs 持股約 49%，背離約 35 pp；缺少同業估值 | 待觀察 |
| Johnson et al. | 控制股東可能透過關係人交易移轉資源 | Megapack 交易；雙方設特別委員會；Texas 公司、受控公司豁免 | 待觀察 |
| Field & Hanka | 解禁前後約 −1.5% 異常報酬 | 創辦人約 2027 年 6 月解禁 | 待觀察 |

目前可量化的連結都不大（持股不到 1%、前九月訂單 626m），股價相關也主要來自大盤；真正的公司理財問題，是潛在結合時的估值與少數股東保護。共同 CEO、共同董事正是 Johnson et al.（2000）所說關係人交易的典型條件；兩家公司都已設立由無利害關係董事組成的特別委員會，後續要看換股比例、公平意見與少數股東表決。

## 6. 結論：回答研究問題

**四個問題的比對發現**

1. **SpaceX 符合美國成長型公司的上市模式：用權益資金擴大投資，並把新上市的股票當作併購工具。** 上市後投資增加 2.5 倍，並以上市後的 A 股完成上市前就已規劃的 Cursor 併購（財報認列對價 424.7 億美元，約為 IPO 淨募資的一半）。
2. **定價方式接近固定價格，而非典型的詢價部分調整。** 沒有價格區間、未上修價格，首日卻大漲；以首日收盤機械估算的潛在差額約 166 億美元。
3. **長期績效與治理類理論還不能檢驗，但已定好檢驗點。** 且 Brav & Gompers 顯示大型公司的長期落後預測力有限，不應以 108 日的落後下結論。

**核心問題：SpaceX 為何在 2026 年以 IPO 募資？上市後的發展符合公司理財理論嗎？**

| 問題 | 回答 | 主要證據 |
| --- | --- | --- |
| Q1 為什麼 IPO？ | 為了支應遠超現金流的資本密集投資，並建立可用於併購的股票；雙層股權讓募資不必讓出控制權 | 2025 年資本支出 20.7bn；2026 Q1 有 76% 投入 AI；2025 前九月現金缺口 −9.7bn；上市前已規劃、上市後以股票完成 Cursor 併購 |
| Q2 成功嗎？ | 要看站在誰的角度 | 公司取得淨額 85.7bn；以發行價認購者 +3.04%；首日買入者 −13.57%，落後大盤 15.3 pp；按首日收盤機械估算，潛在差額約 16.6bn（反事實，非已實現損失） |
| Q3 符合理論嗎？ | 融資動機與定價大多一致；Hanley 因缺少價格區間無法直接檢驗；長期績效與治理待檢驗 | Frank & Goyal、Brau & Fawcett 符合；Kim & Weisbach、Rock 方向一致（因果或機制未確認）；Loughran & Ritter 以反事實估算符合 |
| Q4 Tesla 的角色？ | 小連結、大治理問題 | 持股不到 1%、前九月訂單 626m；股價連動多來自大盤；關鍵在潛在結合的估值、程序與少數股東保護 |

**研究限制**：只有 108 個交易日、單一公司個案、事件期間有財報等同期消息，因此本研究為描述與理論對照，不作因果推論。

**後續追蹤指標**

| 追蹤指標 | 對應理論 | 何時可以檢驗 |
| --- | --- | --- |
| 上市一年、三年報酬與大盤／同業比較 | Ritter（1991）；Brav & Gompers（1997） | 2027/06、2029/06 |
| 創辦人閉鎖期到期前後的異常報酬與成交量 | Field & Hanka（2001） | 約 2027/06 |
| 營運現金流能否追上 PPE 支出 | 成長融資、Myers & Majluf | 每季財報 |
| 現金運用與併購後的績效 | Jensen & Meckling（1976）；Gompers et al.（2010） | 每季財報、併購公告 |
| Tesla 結合的換股比例、公平意見、少數股東表決 | Johnson et al.（2000）；Gompers et al.（2010） | 交易公告時 |

## 參考文獻（2026-11-14 上網核對）

- Alti, A. (2006). How persistent is the impact of market timing on capital structure? *Journal of Finance*, 61(4), 1681–1710.
- Baker, M., & Wurgler, J. (2002). Market timing and capital structure. *Journal of Finance*, 57(1).
- Benveniste, L. M., & Spindt, P. A. (1989). How investment bankers determine the offer price and allocation of new issues. *Journal of Financial Economics*, 24(2).
- Brau, J. C., & Fawcett, S. E. (2006). Initial public offerings: An analysis of theory and practice. *Journal of Finance*, 61(1), 399–436.
- Brav, A., & Gompers, P. A. (1997). Myth or reality? The long-run underperformance of initial public offerings. *Journal of Finance*, 52(5), 1791–1821.
- Cremers, M., Lauterbach, B., & Pajuste, A. (2024). The life-cycle of dual-class firm valuation. *Review of Corporate Finance Studies*, 13(2), 459–493.
- Field, L. C., & Hanka, G. (2001). The expiration of IPO share lockups. *Journal of Finance*, 56(2), 471–500.
- Frank, M. Z., & Goyal, V. K. (2003). Testing the pecking order theory of capital structure. *Journal of Financial Economics*, 67(2), 217–248.
- Gompers, P. A., Ishii, J., & Metrick, A. (2010). Extreme governance: An analysis of dual-class firms in the United States. *Review of Financial Studies*, 23(3).
- Hanley, K. W. (1993). The underpricing of initial public offerings and the partial adjustment phenomenon. *Journal of Financial Economics*, 34(2), 231–250.
- Jensen, M. C., & Meckling, W. H. (1976). Theory of the firm. *Journal of Financial Economics*, 3(4).
- Johnson, S., La Porta, R., Lopez-de-Silanes, F., & Shleifer, A. (2000). Tunneling. *American Economic Review*, 90(2).
- Kim, W., & Weisbach, M. S. (2008). Motivations for public equity offers: An international perspective. *Journal of Financial Economics*, 87(2), 281–307.
- Loughran, T., & Ritter, J. R. (2004). Why has IPO underpricing changed over time? *Financial Management*, 33(3).（[S10](https://site.warrington.ufl.edu/ritter/files/2015/06/Why-Has-IPO-Underpricing-Changed-Over-Time-2004.pdf)）
- Myers, S. C., & Majluf, N. S. (1984). Corporate financing and investment decisions when firms have information that investors do not have. *Journal of Financial Economics*, 13(2).（[S09](https://www.nber.org/papers/w1396)）
- Ritter, J. R. (1991). The long-run performance of initial public offerings. *Journal of Finance*, 46(1), 3–27.
- Rock, K. (1986). Why new issues are underpriced. *Journal of Financial Economics*, 15(1–2).

> 核對方式：以 RePEc／IDEAS、NBER、作者網站與期刊摘要比對卷期與主要數字。仍待以原文核對：Ritter（1991）34.47% 與 61.86% 來自二手文獻引述；Kim & Weisbach（2008）出版版樣本數取自二手紀錄；Benveniste & Spindt（1989）卷期未逐筆線上核對。

## 資料與重現

- 財務逐項數據：`Data/Analysis/financial_facts.json` 與 `financial_facts.csv`。
- 股價指標：`Data/Analysis/stock_metrics.json`、`return_windows.csv`、`price_analysis_daily.csv`。
- 計算程式：`Scripts/analyze_stock_data.py`；Tesla 連動與事件研究：`Scripts/tesla_linkage.py` → `Data/Analysis/tesla_linkage.json`。
- [[115-1/Corporate-Finance/Coursework/SpaceX-IPO-Report/02_Sources-and-Data|完整來源與口徑紀錄]]；[[115-1/Corporate-Finance/Coursework/SpaceX-IPO-Report/07_Stock-Analysis|股價計算及圖表]]。

# SpaceX IPO｜來源與數據

[[115-1/Corporate-Finance/Coursework/SpaceX-IPO-Report/00_SpaceX-IPO-Report|回報告首頁]]

## 來源清單

| 編號 | 來源 | 可以支持什麼 | 查核日 | 狀態 |
| --- | --- | --- | --- | --- |
| S01 | [SpaceX IPO 交割公告](https://ir.spacex.com/updates/releases-details/2026/Space-Exploration-Technologies-Corp--Announces-Closing-of-Initial-Public-Offering-Including-Full-Exercise-of-Underwriters-Option-to-Purchase-Additional-Shares-2026-RgoR-Y1Vwh/) | 首日交易日、交割日、股票代號；其他條件需核對最終文件 | 2026-11-14 | 已查閱 |
| S02 | [SEC：SpaceX 2026 Q3 10-Q](https://www.sec.gov/Archives/edgar/data/1181412/000162828026066880/spcx-20260930.htm) | IPO 完成紀錄、上市後財務資料 | 2026-11-14 | 財務數據已填入報告 |
| S03 | [SpaceX Investor Relations](https://ir.spacex.com/investors/) | 查找公司公告、財報與 IPO 文件 | 2026-11-14 | 待逐份查核 |
| S04 | [2026-06-11 最終公開說明書（424B4）](https://www.sec.gov/Archives/edgar/data/1181412/000162828026042639/spaceexplorationtechnologi.htm) | 發行價、基礎股數、超額配售、治理及解禁條款 | 2026-11-14 | 已核對相關段落 |
| S05 | 股價計算結果，見 07_Stock-Analysis 與 Data/Analysis | 報酬、回撤與市場比較；原始來源 S08 | 2026-11-14 | 已計算 |
| S06 | 學術依據索引：S09／S10 | 資訊不對稱與 IPO 初始報酬 | 2026-11-14 | 已列入，組員仍需閱讀 |
| S07 | [SEC：2026-05-20 初始 S-1](https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm) | 上市前揭露；發行價格與股數仍有空白，不能代替最終條件 | 2026-11-14 | 已核對封面與目錄，全文待讀 |

[[115-1/Corporate-Finance/Coursework/SpaceX-IPO-Report/05_S1-Reading-Guide|開啟 S-1 閱讀與摘錄工作區]]

## 已下載的市場資料（S08）

[Yahoo Finance SPCX 歷史行情](https://finance.yahoo.com/quote/SPCX/history/) 與 [S&P 500 歷史行情](https://finance.yahoo.com/quote/%5EGSPC/history/)，使用非官方 chart 端點下載。

2026-06-12～2026-11-13，各 108 筆日資料；原始回應與擷取時間已保留。

[[115-1/Corporate-Finance/Coursework/SpaceX-IPO-Report/06_Stock-Data|下載程式與資料使用說明]]

### 數據核對規則

- 公司公告與 SEC 的總額／淨額、單位、超額配售範圍可能不同，先核對口徑，不直接混用。
- 保存原始資料；整理表、計算式與圖表另外存放，勿手動改寫原始值。
- 使用能辨識發行主體的官方文件，避免和名稱相近的投資工具或 Starlink 傳聞混淆。
- 每一個金額都標示幣別，每一個財務指標標示期間。

## 事件時間線

| 日期 | 事件 | 來源 | 備註 |
| --- | --- | --- | --- |
| 2026-06-12 | 股票開始交易 | S01 | 股價事件窗基準候選 |
| 2026-06-15 | IPO 交割完成 | S01 | 和首日交易日不同 |
| 2026-09-30 | S02 財報的期末日 | S02 | 不是公告日 |
| 2026-11-14 | 目前研究整理日 | 本工作區 | 完成前更新資料截止日 |

## 股價資料表規劃

欄位：`date, close, adjusted_close, volume, benchmark_close, source, retrieved_at`。

### 待計算

- 首日報酬：`首日收盤價 / IPO 發行價 - 1`。
- 持有期間報酬：一致口徑的 `期末價格 / 起始價格 - 1`；有股利時納入總報酬口徑。
- 基準調整報酬：股票與基準採相同日期、相同報酬定義後比較。若採報酬相減，須標示為簡化的市場調整比較，不能直接宣稱是因果效果或風險調整 alpha。

## 新增來源用這個格式

- 來源編號：
- 標題／作者或機構：
- 發布日期／查閱日期：
- 網址與頁碼：
- 摘要：
- 支持的報告段落：
- 數據單位／期間：
- 限制與待核對事項：

## 新增研究與交叉檢查

- S09：[Myers & Majluf（1984），NBER](https://www.nber.org/papers/w1396)：融資資訊不對稱。 ^s09
- S10：[Loughran & Ritter（2004），作者所在大學版本](https://site.warrington.ufl.edu/ritter/files/2015/06/Why-Has-IPO-Underpricing-Changed-Over-Time-2004.pdf)：IPO初始報酬。 ^s10
- S11：[StockAnalysis 歷史價格](https://stockanalysis.com/stocks/spcx/history/)：11/13收盤139.11與Yahoo一致，但成交量口徑有差異。 ^s11

## 已完成的資料填入

[[115-1/Corporate-Finance/Coursework/SpaceX-IPO-Report/07_Stock-Analysis|股價分析與公式]] · [[01_Report|填入數據的報告]]

募資對帳：638,888,888股 × USD135 ≈ USD86.250bn；減發行總成本USD0.575bn ≈ 淨額USD85.675bn。交割新聞稿的gross字樣與此不一致，保留原始來源差異。

財務資料為人工依SEC表格核對後結構化紀錄，不宣稱由爬蟲自動擷取；單位USD million，原表頁碼與定義見Data/Analysis/financial_facts.json。

## 治理與 Tesla 補充（2026-11-14）

- S04 Management：管理團隊、董事名單資訊基準為2026-05-01；Capital Expenditures：上市前分部支出。
- S02 MD&A：Cursor合併時點及2026-10-20披露的Tesla評估程序。
- S12：[Tesla 2026 Q3 10-Q](https://www.sec.gov/Archives/edgar/data/1318605/000162828026066775/tsla-20260930.htm)，註1（SpaceX投資衡量）、註13（關係人業務／持股）、Part II Item 5（特別委員會）。財報期間截止9/30，不等於所有後續事項都發生9/30。 ^s12
- S13：[Yahoo TSLA歷史行情](https://finance.yahoo.com/quote/TSLA/history/)，實際擷取URL、時間、原始SHA-256見 `Data/Tesla` 最新run manifest。與既有SPCX及S&P資料按共同日期配對。 ^s13
- 新分析不是因果事件研究；未估計正常報酬模型，亦未排除財報等同期消息。

- S14：[Tesla 官方 Q3 公告時程](https://ir.tesla.com/press-release/tesla-third-quarter-2026-production-deliveries-and-deployments)：10/21收盤後發布，供區分日報酬資訊集。 ^s14

## 公司歷史背景來源（2026-11-14新增）

- S15：[NASA／SpaceX CRS-7 Press Kit](https://www.nasa.gov/wp-content/uploads/2018/07/spacex_nasa_crs-7_presskit.pdf)，Key SpaceX Milestones：2002成立、2008 Falcon 1入軌。「第一」限定私營開發液體燃料火箭，不泛稱第一家進入太空的民間公司。 ^s15
- S16：[NASA Commercial Crew Rockets](https://www.nasa.gov/humans-in-space/spaceships-and-rockets/commercial-crew-rockets/)，2012年首家商業公司造訪ISS。 ^s16
- S17：[NASA 2020-05-30 Demo-2公告](https://www.nasa.gov/news-release/nasa-astronauts-launch-from-america-in-historic-test-flight-of-spacex-crew-dragon/)，美國本土、商業建造及營運的美國載人太空船；保留完整範圍，避免籠統的世界第一說法。 ^s17
- S18：[SpaceX Mission](https://www.spacex.com/mission/)，2015年軌道級火箭第一級著陸、2017年再飛。回收與再飛不混為同一事件；未直接據此估算成本降幅。 ^s18

## 文獻核對與申報文件補充（2026-11-14）

- S19：[SpaceX S-1/A（2026/6/3）](https://www.sec.gov/Archives/edgar/data/1181412/000162828026040364/spaceexplorationtechnologib.htm)：初步公開說明書，封面直接預告發行價 135.00 美元，無價格區間。 ^s19
- S20：[定價 FWP（2026/6/11）](https://www.sec.gov/Archives/edgar/data/1181412/000162828026042466/spaceexplorationtechnologi.htm)：發行規模、價格 135.00 美元、交易與交割日。 ^s20
- S21：[AP（phys.org 轉載）2026-11-14](https://phys.org/news/2026-11-spacex-starship-soars-orbit-booster.html)：Flight 15 發射、推進器回收中止並爆炸、此前三次塔架接住推進器。 ^s21
- S22：[CNBC 2026-11-14](https://www.cnbc.com/2026/11/14/spacex-plans-to-try-first-ever-catch-of-starship-rocket-from-orbit.html)：Starship 上節首次從軌道被塔架接住。 ^s22
- S23：[Yahoo Finance 2026-11-15](https://finance.yahoo.com/markets/stocks/articles/spacex-catches-starship-orbit-first-132124995.html)：Ship 42 繞 14 圈、26 顆 Starlink V3、下一次試飛計畫。報導中的分部數字已改以 S02 原表核對；其股價漲跌幅說法前後不一，未採用。 ^s23
- S02 分部資訊（第32–33頁）：Space 分部 2026 Q3 收入 1,767、研發 1,225、營業損益 −7、資本支出 1,606（USD million）。
- S02 Note 20：Cursor 合併對價全數以 A 股支付（2.71 億股、382.93 億美元，加替換股權 41.81 億，總計 424.74 億美元）。
- S02 註1：2024-02-14 由 Delaware 轉換為 Texas 公司。S04：Nasdaq 受控公司豁免；受益所有權表（Musk 投票權 84.4%、持股約 49.0%，未含超額配售）。
- 文獻：新增 Frank & Goyal（2003）、Kim & Weisbach（2008）、Alti（2006）、Brau & Fawcett（2006）、Benveniste & Spindt（1989）、Hanley（1993）、Brav & Gompers（1997）、Cremers et al.（2024），並以 RePEc／IDEAS、NBER、作者網站核對卷期與摘要數字。更正：Field & Hanka（2001）三日異常報酬為 −1.5%（原寫 −1% 到 −3%）。
- 作者照片：Wikimedia Commons 自由授權，作者與授權見 `Presentation/public/images/authors/credits.json`。
- 2026-11-16 精簡：報告與簡報刪除 Pagano, Panetta & Zingales（1998）、Celikyurt, Sevilir & Shivdasani（2010）、Loughran & Ritter（1995）、Masulis, Wang & Xie（2009），保留 17 篇。
- S24：[companiesmarketcap.com 全球市值排名](https://companiesmarketcap.com/)，2026-11-16 擷取，價格為 2026-11-13 收盤（與 Yahoo 收盤一致）；用於上市後市值對照。 ^s24
- S25：[Anadolu Agency：歷來最大 IPO 整理](https://www.aa.com.tr/en/economy/factbox-from-aramco-to-alibaba-biggest-ipos-in-history-before-spacex-s-planned-market-debut/3964235)：Saudi Aramco 29.4bn（含 2020/1 行使的超額配售）、Alibaba 25bn、SoftBank Corp. 約 23.5bn、中國農業銀行 22.1bn、中國工商銀行 21.9bn（含超額配售）、AIA 20.5bn、Visa 19.7bn（含超額配售）；Facebook 2012 約 16bn 依其他報導。各案口徑不完全一致。 ^s25
- S04 Business—Collaboration with Cursor（2026-11-16 核對）：2026/4 運算與選擇權協議；上市後收購以 A 股支付，隱含權益價值 600 億美元、交割前 7 日 VWAP；終止費 15 億＋遞延服務費 85 億。S02 Note 20：6 月行使、7 日 VWAP 128.65 美元、交換比例 9.7142、購買對價 424.74 億、留才獎酬 233.76 億（ASC 805 列為薪酬）。

### 第 39 頁合併說明與查證限制

公司年齡與上市年齡須分開；截至 2026 年 11 月，2002 年成立約 24 年、2026 年 6 月 IPO 約 5 個月（S04、S02 註1；IPO 另見 S01）。這些事實不能證明 SpaceX 有估值溢價或折價，仍須同業估值比較。原第 43 頁已整合；配合最新 main 刪除前方 xAI 頁，Johnson 的 Tunneling 理論現為第 40 頁，過渡問題並不指稱 SpaceX 已發生掏空。

期刊 DOI／OUP 全文於本次查證無法存取，未宣稱已完成正式刊出版全文核對。以 [作者公開修訂稿（ECGI，2022）](https://www.ecgi.global/sites/default/files/2026-10/fin-550-2018_the_life-cycle_of_dual_class_firm_valuation.pdf) 的 Table 3 討論（正文 pp.17–19）及結論（pp.31–32）交叉核對：前六年平均溢價、約七年開始折價，部分穩健性規格至九年才觀察到折價。圖表以「約 6–9 年」概括此趨勢，不是精確到期日或法律期限；曲線保留原示意數值，不代表論文估計值或 SpaceX 走勢。原長條圖的 7.5 年中點刪除，避免假精確。正式引用保留 Cremers, Lauterbach & Pajuste (2024), RCFS 13(2), 459–493, DOI: 10.1093/rcfs/cfac026。
