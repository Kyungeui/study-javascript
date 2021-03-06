# ๐ ToastUI - Chart

[(toastUI-Chart)](http://nhn.github.io/tui.chart/latest/)

[(toastUI-Chart-github)](https://github.com/nhn/tui.chart)

#### ์ค์ต์ฉ ํ์ผ

-   barchart.png
    -> ๋ฐ ์ฐจํธ ๊ทธ๋ฆฌ๊ธฐ

    [ํ์ผ๋ณด๊ธฐ](์ค์ต์ฉ/barchart.png)

-   boxplotchart.png
    -> ๋ฐ์คํ๋กฏ ์ฐจํธ ๊ทธ๋ฆฌ๊ธฐ (์ฃผ์์ฐจํธ ๊ทธ๋ฆด๋ ์ฐจํธ)

    [ํ์ผ๋ณด๊ธฐ](์ค์ต์ฉ/boxplotchart.png)

-   chart_list.png
    data.js.md, options.js.md ํ์ผ์ ํฌํจํด์ผํฉ๋๋ค.

    [ํ์ผ๋ณด๊ธฐ](์ค์ต์ฉ/chart_list.png)

    <br>
    <hr>
    <br>

### ์ฐจํธ ์ข๋ฅ

-   ๋ชจ๋  ์ฐจํธ ์ข๋ฅ๋ฅผ ์คํํด ๋ณผ ์ ์์ต๋๋ค.

[**Live**](https://byeongminlee.github.io/study_toastUI/page/chart/chart_list.html)

## ๐พ ์ค์น ํ๊ธฐ

### npm

```sh
$ npm install --save @toast-ui/chart # ์ต์  ๋ฒ์ 
$ npm install --save @toast-ui/chart@<version> # ํน์  ๋ฒ์ 
```

### CDN

```html
<link rel="stylesheet" href="https://uicdn.toast.com/chart/latest/toastui-chart.min.css" />
<script src="https://uicdn.toast.com/chart/latest/toastui-chart.min.js"></script>
```

### ์์ค ํ์ผ ๋ค์ด๋ก๋

-   [(https://github.com/nhn/tui.chart/releases)](https://github.com/nhn/tui.chart/releases)

<br>

## ๐ ์ฐจํธ ์์ฑ

-   el: ์ฐจํธ๋ฅผ ์์์์๋ก ๊ฐ๋ HTML ์์
-   data: ์ฐจํธ์ ๊ธฐ๋ฐ์ด ๋๋ ์ซ์ ๋ฐ์ดํฐ
-   options: ๋ฒ๋ก, ์ ๋ ฌ, ํดํ ํฌ๋งท ๋ฑ ์ฌ๋ฌ ๊ธฐ๋ฅ์ ๋ํ๋ด๋ ์ต์

```javascript
const el = document.getElementById("chart-area");
const data = {
    // ์นดํ๊ณ ๋ฆฌ -> Y์ถ
    categories: ["์์ธ", "๊ฒฝ๊ธฐ", "์ธ์ฒ", "์ธ์ข", "๋ถ์ฐ", "๋๊ตฌ", "๊ด์ฃผ"],
    // ์๋ฆฌ์ฆ -> name,data ํ์ ๊ฐ
    series: [
        {
            name: "1์",
            data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
        },
        {
            name: "2์",
            data: [3000, 2000, 4000, 5000, 5000, 6000, 2000],
        },
        {
            name: "3์",
            data: [3000, 4000, 3000, 1000, 2000, 4000, 3000],
        },
    ],
    // ์์ธ์ด 1์์ 5000, 2์์ 3000, 3์์ 3000
};

const options = {
    chart: { title: "์ฝ๋ก๋ ํ์ง์", width: 900, height: 400 },
};

const chart = toastui.Chart.barChart({ el, data, options });
```

<br>

![barChart1 ๊ฒฐ๊ณผ](readme_img/barChart1.png)

[**barChart1 Live**](https://byeongminlee.github.io/study_toastUI/page/chart/barChart1.html)

<br>

## ๐ ๏ธ ์ต์ ์ค์ 

## stack ์ต์

```javascript
const options = {
    chart: { title: "์ฝ๋ก๋ ํ์ง์", width: 900, height: 400 },
    series: {
        stack: true,
    },
};
```

![barChart2 ๊ฒฐ๊ณผ](readme_img/barChart2.png)

[**barChart2 Live**](https://byeongminlee.github.io/study_toastUI/page/chart/barChart2.html)

<br>

<br>

### stack ์ต์์์ ์ธ๋ถ ์ต์ ์ค์ 

series.stack์ true == stack.type = 'normal'

```javascript
const options = {
    chart: { title: "์ฝ๋ก๋ ํ์ง์", width: 900, height: 400 },
    series: {
        stack: {
            type: "normal",
        },
    },
};
```

<br>

### stack - ์ฐ๊ฒฐ์ 

```javascript
const options = {
    chart: { title: "์ฝ๋ก๋ ํ์ง์", width: 900, height: 400 },
    series: {
        stack: {
            type: "normal",
            connector: true,
        },
    },
};
```

![barChart3 ๊ฒฐ๊ณผ](readme_img/barChart3.png)

[**barChart3 Live**](https://byeongminlee.github.io/study_toastUI/page/chart/barChart3.html)

## selectable ์ต์

ํด๋น series (๋ฐ์ดํฐ) ์ ํ๊ฐ๋ฅ

```javascript
const options = {
    series: {
        selectable: true,
    },
};
```

### selectable - eventDetectType

| ํ์      | ์ค๋ช                                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| `point`   | ๊ฐ๋ณ ์๋ฆฌ์ฆ ์์ญ์ ๋ง์ฐ์ค๊ฐ ๋ค๊ฐ๊ฐ์ผ ํ์ง. ํ์ฌ ๋ง์ฐ์ค๊ฐ ๊ฐ๋ฆฌํค๊ณ  ์๋ ํฌ์ธํธ๋ฅผ ๊ธฐ์ค์ผ๋ก ๋จ ํ ๊ฐ๋ง ํ์ง๋จ |
| `grouped` | Y์ถ์ ๊ธฐ์ค์ผ๋ก ๊ฐ์ด ๊ฐ์ ๋ชจ๋  ๋ฐ์ดํฐ๊ฐ ํ์ง๋จ                                                              |

```javascript
const options = {
    chart: { title: "์ฝ๋ก๋ ํ์ง์", width: 900, height: 400 },
    series: {
        selectable: {
            eventDetectType: "grouped", // point
        },
    },
};
```

![barChart4 ๊ฒฐ๊ณผ](readme_img/barChart4.png)

[**barChart4 Live**](https://byeongminlee.github.io/study_toastUI/page/chart/barChart4.html)
