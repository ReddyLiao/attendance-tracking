# attendance-tracking

## Warning

目前後端已暫停使用，僅能作前端的畫面瀏覽！

## About

這是一個員工可以自行記錄出缺勤及查閱的系統，因為若公司無出勤系統提供員工做出勤的紀錄與查詢，員工無法得知自己的出勤狀況、上班時數、加班時數、應有的請假天數等資訊；或對已有公司出勤系統，員工可透過此系統資料與公司資料作核對，能更便捷快速得知出缺勤資料。
![This is an image](/src/assets/imges/readme_pic.jpg)
![This is an image](/src/assets/imges/readme_pic1.jpg)
**專案架構**

這是一個前後端分離(restful api)的專案,使用 vue3 搭配 vite 做快速打包建製的專案.

**功能需求**

1. 註冊／登入
2. 上班打卡紀錄
3. 請假紀錄
4. 查詢當天／周／月上下班打卡紀錄
5. 統計出勤天數／時數
6. 統計加班時數
7. 計算剩餘假別／天數／時數
8. 設定：公司上下班時間；給假制度

---

**目標用戶：勞方(受雇者)**

**功能架構**

首頁

- 註冊/登入：有登入才能看到資訊
- 打卡 (https://ruiuiuiuiui.github.io/attendance-tracking/#/punch)
  - 顯示日期/時間
  - 打卡(btn)
    - 第一次打卡上班
      - 即時顯示上班時間
    - 第二次打卡下班
      - 計算總上班時數
      - 即時顯示下班時間
- 請假 (https://ruiuiuiuiui.github.io/attendance-tracking/#/requests)
  - 顯示可請假天數
  - 輸入請假起始日-日期
  - 輸入請假結束日-日期
  - 計算天數
- 紀錄 (https://ruiuiuiuiui.github.io/attendance-tracking/#/record/dailyRecord)
  - 月曆畫面-點擊查閱單日上下班時間及工作小時
  - 統計
    - 單周：累積工作時數/加班時數/請假時數
    - 單月：累積工作時數/加班時數/請假時數
    - 每日：總共累積工作時數
- 設定 (https://ruiuiuiuiui.github.io/attendance-tracking/#/setting/companySetup)
  - 公司制度
    - 上下班時間
    - 緩衝時間
    - 假別/天數
- 側邊欄(個人資訊)

  設定中的公司制度顯示於此欄位

(未來功能)

1. 提醒打卡鬧鐘
2. 薪資換算：時薪制的員工可換算自己的薪資；月薪制加班費．．．
3. 其他：勞基法法規查詢
4. 設定：(排班制班表)
5. 畫面設定：語言/顏色
6. 多工作紀錄：於打卡時可選是要記錄哪份工作的卡；報表可篩選
7. 小日記短語

## Quick start

下載專後，透過以下指令啟動專案：

```
 npm install
 npm run dev
```

## Live Demos

[DEMO](https://ruiuiuiuiui.github.io/attendance-tracking/#/signinRegister)
