/**
 * Created by songzhiyang on 2017/4/18.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    WebView,
} from 'react-native';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>HTML字符串</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1>加载静态的HTML文本信息</h1>
  </body>
</html>
`;

export default class WebViewPage extends Component {

    // html={HTML}
    render() {
        return (
            <WebView domStorageEnabled={true} javaScriptEnabled={true} url={"http://www.baidu.com"}
                     onLoad={() => console.log('加载完毕')} onError={() => console.log('加载失败')}/>
        );
    }
}