# Markup Starter Kit

- 使用 node v5.4.1
- 使用 Jade
- 使用 Scss
- 使用 Gulp

# 安裝

安裝全域工具gulp(裝過一次即可)
```
$ npm install gulp -g
```

安裝切版環境(每個新專案都要執行)
```
$ npm install 
```

## 檔案結構
- /src: 主要開發目錄
- /dist: gulp生成的最終結果，為自動產生的檔案，切版人員可以無視。

## Gulp Task

啟用gulp(gulp default)

```
$gulp
```

清掉dist檔
```
$gulp reset
```
## 注意事項 

### 使用sprites產生圖片及scss

- 至少先執行`$ gulp defulat`一次
- 再將main.scss裡的註解打開

before
``` scss
//1.utils
@import "utils/_bemify.scss"; //A set of Sass mixins to write well-structured, maintainable, idiomatic BEM-style .scss source:
@import "utils/_variables.scss";
@import "utils/_mixins.scss";
@import "utils/_grid.scss";
//sprite scss import 至少要啟用gulp一次
//@import "_sprite.scss";
```

after

``` scss
//1.utils
@import "utils/_bemify.scss"; //A set of Sass mixins to write well-structured, maintainable, idiomatic BEM-style .scss source:
@import "utils/_variables.scss";
@import "utils/_mixins.scss";
@import "utils/_grid.scss";
//sprite scss import 至少要啟用gulp一次
@import "_sprite.scss";
```

### 清掉多餘的垃圾檔案

- 正式交接靜態網站時，請使用`$ gulp reset`刪掉棄用的檔案
- 然後再執行一次`$ gulp`

#更新日誌

## 2017/1/25

- gulp新增htmlbeautify 將產出的html重新編譯成縮排4格
- 新增src/css資料夾，放入css直接拷貝至dist/css
- 新增lib資料夾，放入js直接拷貝至dist/js
- 新增sample.jade 加入部分常用開發行為參考範例