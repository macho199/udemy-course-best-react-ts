
## 1. 프로젝트 초기화

```bash
# 프로젝트 디렉토리 생성
mkdir my-webpack-react-ts-app
cd my-webpack-react-ts-app

# package.json 생성
npm init -y
```

## 2. 필수 패키지 설치

```bash
# React, ReactDOM 설치
npm install react react-dom

# TypeScript 관련 패키지 설치
npm install -D typescript @types/node @types/react @types/react-dom

# Webpack 관련 패키지 설치
npm install -D webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin
```

## 3. 설정 파일 생성

```js
// tsconfig.json

{
  "compilerOptions": {
    "target": "es6",
    "lib": ["dom", "es6"],
    "jsx": "react",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true
  },
  "include": [
    "src"
  ],
}
```

```js
// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    hot: true,
  },
};

```

## 4. React 및 TypeScript로 작성된 예제 파일 생성

```tsx
// src/index.tsx

import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
```

```tsx
// src/App.tsx

import React from "react";

const App = () => {
  return <div>hello</div>;
};

export default App;
```

```html
// public/index.html

<!DOCTYPE html>
<html>
<head>
  <title>Webpack + React + TypeScript</title>
</head>
<body>
  <div id="root"></div>
  <script src="bundle.js"></script>
</body>
</html>
```

## 5. scripts 추가 및 실행

```js
// package.json
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode=production --progress",
},
```

```bash
npm start
npm run build // 빌드
```

## 6. tailwindcss 추가

```bash
npm install -D tailwindcss
npx tailwindcss init
```

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css
// src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

tailwindcss import

```js
// src/index.js

import './index.css'
```

PostCSS 추가

```bash
npm install -D postcss autoprefixer postcss-loader css-loader style-loader
```

postcss 설정 추가

```js
// postcss.config.js

module.exports = {
  plugins: [
    require("tailwindcss"), 
    require("autoprefixer")
  ],
};
```

웹팩 설정 파일에서 플러그인 추가 및 CSS 로더 규칙 수정

```js
// webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
}
```

### 번들링 시 css 파일 분리

```bash
npm install -D mini-css-extract-plugin
```

웹팩 설정 파일에서 플러그인 추가 및 설정

```js
// webpack.config.js

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(), // MiniCssExtractPlugin 추가
  ],
}
```

### 번들링 시 css minify 

```bash
npm install -D css-minimizer-webpack-plugin
```

웹팩 설정 파일에서 플러그인 추가 및 설정

```js
// webpack.config.js

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // CSS 압축을 위한 플러그인 추가
    ],
  },
}
```

## webpack-bundle-analyzer 설치

```bash
npm install -D webpack-bundle-analyzer
```

```js
// webpack.config.js

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(), // BundleAnalyzerPlugin 추가
  ],
}
```

## webpack dev, prod 빌드 분기 처리

설정파일을 재사용하기 위한 webpack-merge 설치

```bash
npm install -D webpack-merge
```

webpack.config.js 파일을 webpack.common.js 파일명으로 변경
webpack.dev.js, webpack.prod.js로 각각의 설정 추가

package.jsons scripts 변경

```js
"scripts": {
  "start": "webpack serve --open --config webpack.dev.js",
  "build": "webpack --config webpack.prod.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
