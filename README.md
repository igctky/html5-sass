# html5雛形

## 使用方法
「Download ZIP」ボタンからダウンロードしてください。  

***

「Google HTML/CSS Style Guide」に準じます。

## 基本のスタイルルール

### 埋め込みリソースからプロコトルを省く
どうしても２つのプロコトル(http:/ https:)をまたがって使わざるを得ない限り、画像や他のメディアファイル、スタイルシート、スクリプトのURLからプロコトル部分を省いてください。関連URLを作り得るプロコトルを省くことは、コンテンツが混ざってしまう問題を防ぐ上に、ファイルサイズをより小さく保つことにも繋がります。

```
<!-- NG -->
<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>
<!-- OK -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
/* NG */
div {background: url(http://www.google.com/images/example);}
/* OK */
div {background: url(//www.google.com/images/example);}
```

***

## 基本の書式ルール

### インデント
**インデントはスペース２つ**
タブや、タブとスペースを混ぜて使ってはいけません。

```
<ul>
  <li>Fantastic
  <li>Great
</ul>

div {
  color: blue;
}
```

### 大文字と小文字
**小文字のみ使う**
すべてのコードは小文字で書きます。HTML要素、属性、（text/CDATAでなければ）属性値、CSSセレクタ、プロパティ、（文字列による例外はありますが）プロパティ値、に適用されます。

```
<!-- NG -->
<A HREF="/">Home</A>
<!-- OK -->
<img src="google.png" alt="Google">
/* NG */
color: #E5E5E5;
/* OK */
color: #e5e5e5;
```

### 末尾のスペース
**末尾のスペースは消す**
末尾のスペースは不必要ですし、差異をわかりづらくします。

```
<!-- NG -->
<p>What?_</p>
<!-- OK -->
<p>Yes please.</p>
```

***

## 基本のメタルール

### エンコーディング
**UTF-8（BOM無し）を使う**
お使いのエディタが、BOM無しのUTF-8になっているか確認してください。HTMLのテンプレートやドキュメントに<meta charset=”utf-8″>とエンコーディングを明記してください。スタイルシートにエンコーディングの明記は必要ありません。 (エンコーディングについてもっと正確に知りたい方は、[Handling character encodings in HTML and CSS](https://www.w3.org/International/tutorials/tutorial-char-enc/)をご参照ください。)

### コメント
**可能な限り必要に応じてコードを説明する**
コードを説明するコメントを書きましょう：どこを司るのか、書かれた目的は何か、それぞれのソリューションがなぜ使われたのか？ 常にすべて文章化されたコードが現場で必要とされない場合、この項目は任意です。プロジェクトの複雑さによって、コメントの有用性は大いに変化するでしょう。
特にdivの閉じタグには必ずコメントを入れてください。

```
<div class="heder-nav">
  <h1>header</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil!</p>
</div>
<!-- /.heder-nav -->
```

***

## HTMLスタイルルール

### ドキュメントタイプ
**HTML5を使う**
HTMLドキュメントでは、HTML5（HTML syntax）が推奨されています：

（text/htmlとしてのHTMLを使うことが推奨されています。XHTMLを使わないように。application/xhtml+xmlであるXHTMLは、ブラウザとインフラストラクチャどちらのサポートも十分ではありません。HTMLと比べ、容量の最適化という点でも劣ります。）HTMLとしては正しいとしても、void要素は閉じないように。すなわち、```<br />```ではなく```<br>```を使います。

### 正しいHTML
**可能な限り正しいHTMLを使う**
ファイルサイズのパフォーマンスゴールなど、それを不可能とする目的が他にない限り、正しいHTMLを使ってください。[W3C HTML validator](http://validator.w3.org/)のようなバリデーションツールを使いましょう。正しいHTMLを使うことで、コードの基本的な質を保てますし、技術的な要求と制約を学ぶことにもつながります。また、あるべきHTMLの使い方を確かにします。

```
<!-- NG -->
<title>Test</title>
<article>This is only a test.</article>
<!-- OK -->
<!DOCTYPE html>
<meta charset="utf-8">
<title>Test</title>
<article>This is only a test.</article>
</ul>
```

### セマンティック
**要素の目的に沿ったHTMLを使う**
要素は（しばしば「タグ」と呼ばれますが、間違いです）それらが作られた目的通りに使います。例えばheader要素はheaderに、p要素は段落に、a要素はアンカーリンクに、など。本来の目的に沿ってHTMLを使うことは、アクセシビリティ・再利用性・効率化といった点で重要です。

```
<!-- NG -->
<div onclick="goToRecommendations();">All recommendations</div>
<!-- OK -->
<a href="recommendations/">All recommendations</a>
```

### マルチメディアの代替
**マルチメディアには代替内容を用意すること**
画像、動画、canvasを使ったアニメーションをいったマルチメディアには、別のアクセス方法を確保すること。可能であれば、画像には意味のある代替テキスト（alt）、動画と音声にはtranscriptとcaption、といったふうに。

```
<!-- NG -->
<img src="spreadsheet.png">
<!-- OK -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">
```

### 構造の分離
**ストラクチャから、プレゼンテーションと振る舞いを分ける**
プレゼンテーション（スタイル）と振る舞い（スクリプト）は、ストラクチャ（マークアップ）から厳密に分けます。３者間の相互作用は、絶対的に少なく保つよう努めてください。HTMLのみをドキュメントやテンプレートに含めます。このHTMLは、単純にストラクチャを構成するためのものです。プレゼンテーションはスタイルシートに、振る舞いはスクリプトに、すべて分けましょう。ドキュメントやテンプレートにおいて、リンクによるスタイルシートやスクリプトとの関わりはできるだけ少なくします。
構造の分離は、メンテナンス性において重要です。HTMLドキュメントやテンプレートを書き換えることは、いつだってスタイルシートやスクリプトを更新するより大変なんですから。

```
<!-- NG -->
<!DOCTYPE html>
<title>HTML sucks</title>
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>I’ve read about this on a few sites but now I’m sure:
  <u>HTML is stupid!!1</u>
<center>I can’t believe there’s no way to control the styling of
  my website without doing everything all over again!</center>
<!-- OK -->
<!DOCTYPE html>
<title>My first CSS-only redesign</title>
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
<p>I’ve read about this on a few sites but today I’m actually
doing it: separating concerns and avoiding anything in the HTML of
my website that is presentational.</p>
<p>It’s awesome!</p>
```

### 文字参照
**文字参照は使わない**
ファイルやエディタではもちろんチーム間でも同じエンコーディング（UTF-8）を使っていれば、—、 ”、☺のような文字参照は必要ありません。
「<」や「&」のようにHTMLで特別な意味を持つものや、特殊スペースのような「見えないもの」に限っては特別にOKです。

```
<!-- NG -->
The currency symbol for the Euro is “&eur;”.
<!-- OK -->
The currency symbol for the Euro is “€”.
```

### タイプ属性
**スタイルシートとスクリプトのタイプ属性を省く**
CSS以外のスタイルシート、またはjavascript以外のスクリプトを使わない限り、type属性を省いてください。HTML5では、text/cssとtext/javascriptがデフォルトになっているので、type属性は必要ありません。これは、古いブラウザでも問題ありません。

```
<!-- NG -->
<link rel="stylesheet" href="//www.google.com/css/maia.css"
  type="text/css">
<!-- OK -->
<link rel="stylesheet" href="//www.google.com/css/maia.css">
<!-- NG -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"
  type="text/javascript"></script>
<!-- OK -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
```

***

## HTMLの書式ルール

### 一般的な書式

**それぞれのブロック/リスト/テーブル要素ごとに新しい行にし、子要素にはインデントをつける**
（CSSでは、要素にdisplayプロパティごとの違う役割を想定しているので）要素はスタイリングから独立させ、すべてのブロック/リスト/テーブル要素は新しい行で書き出します。また、ブロック/リスト/テーブル要素の子要素にはインデントをつけます。 （もし、リスト要素間のスペース問題に対処する必要があれば、<li>を一行にまとめても構いません。リンターでは、エラーの代わりに警告を出すことが推奨されています。）

```
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
<ul>
  <li>Moe
  <li>Larry</li>
  <li>Curly</li>
</ul>
<table>
    <tr>
      <th scope="col">Income</th>
      <th scope="col">Taxes</th>
    </tr>
    <tr>
      <td>$ 5.00</td>
      <td>$ 4.50</td>
    </tr>
</table>
```

### HTMLクオテーションマーク

**属性値にはダブルクオテーションを使う**
属性値に使うクオテーションは、シングル（”）よりもダブル（””）が好ましいです。

```
<!-- NG -->
<a class='maia-button maia-button-secondary'>Sign in</a>
<!-- OK -->
<a class="maia-button maia-button-secondary">Sign in</a>
```

***

## WAI-ARIA

### role属性の記述
**htmlマークアップ以外でその要素に役割をもたせる**
role属性は、さらにそのオブジェクトに「そのリストにナビゲーションの役割を持たせる」などの働きをします。つまり、UAに「役割」と「状態」の情報を渡す事ができるようにするのがARIAの実装です。

```
<header role="banner">
ヘッダー
</header>
<nav class="globalnavi" role="navigation">
  <ul>
    <li><a href="#">メニュー</a></li>
    <li><a href="#">メニュー</a></li>
    <li><a href="#">メニュー</a></li>
    <li><a href="#">メニュー</a></li>
    <li><a href="#">メニュー</a></li>
  </ul>
</nav>
<div id="main" role="main">
メイン
</div>
<aside role="complementary">
サブメニュー
</aside>
<footer role="contentinfo">
フッター
</footer>
```

***

## 命名規則
### SMACSSの命名規則

* Base ... サイトの基本となるスタイル
* Layout ... 大枠を囲うエリア
* Module ... 再利用可能なパーツ
* Project ... 再利用しないページ固有のパーツ
* State ... 状態
* Theme ... サイトのテーマ(配色)

### 基本ルール
CSSのクラスはモジュール化を意識した命名規則に従ってクラス名をつける。
単語間はハイフン区切りでつなぐ。

```
<div class="m-profile">
  <img src="user.png" alt="User Name" class="m-profile-icon">
  <strong class="m-profile-name">User Name</strong>
  <div class="m-profile-content">
    <p>再利用性を意識した命名規則。</p>
  </div>
</div>
```
※例としてprofileの下層の子要素はprofile-が引き継がれる。
