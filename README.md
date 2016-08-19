#scssファイル構成
- base 基本設定 編集付加
 - normalize ブラウザ間の差異を吸収
 - reset リセット用設定
- setting 変数, mixin, extend, keyframeなどの設定
- common サイト全体の共通設定、ヘッダ・フッタなどの全ページ共通部品。
- layout_xxx サイト全体で使いまわせるレイアウトモジュール。数が多い時はモジュールごとにファイルを分ける。
- module_xxx サイト全体で使いまわせるモジュール。数が多い時はモジュールごとにファイルを分ける。
- page_xxx ページ固有の設定。数が多い時はページごとにファイルを分ける。
- plugin プラグイン固有のスタイル
 - xxx プラグインごとにファイルを分ける
- utility 調整用スタイル
- print 印刷用スタイル


#命名規則
##レイアウトモジュール 命名規則
- 単語の区切りはキャメルケース
 - .l-moduleName

##モジュール 命名規則
- 単語の区切りはキャメルケース
 - module（=block）とelementの区切りは__
 - module・elementとmodifierの区切りは--

例： .moduleName__elementName--modifierName

- jsによる状態の変化を表すときはプレフィクス-isをつける
 - .is-inview 画面内に存在する状態／画面内に要素が入ったら不透明度を上げる [category.html、モーダルウィンドウ]
 - .is-fixed 画面に固定された状態／ソートボタンを画面上部に固定する [category.html]
 - .is-wide 画面幅が1440pxより大きい時／ソートボタンを中央寄せにする [category.html]
 - .is-vertical 画像が縦長の時／ブレイクポイント以下でのデバイス表示時に画像の縦横比を判定 [category.html]
 - .is-checked ソートボタンがアクティブな状態 [category.html]

- jsで制御する要素にはプレフィクス-jsをつけ、スタイルは適用しない。操作する要素がページ内に一つしかないときはIDセレクタを使用する
 - .js-menu

#画像ファイル名 命名規則
- 役割＿モジュール名＿固有名称（+連番）＿状態
 - img_header_facebook_hover.png

###役割（画像プレフィクス）
- btn … ボタン
- bnr … バナー
- img … 写真、イラスト etc
- fig … 図 etc
- bg … 背景画像
- title … 見出し
- txt … テキスト画像
- hero … メインビジュアル
- ico … アイコン

#jsファイル構成
- 共通
 - common.js

- ページ固有
 - index.js
 - category.js
 - case.js

- プラグイン
 - jquery.inview.min.js 画面内に要素が入っているかどうかの判定 [category.html,xxx.html]
 - isotope.pkgd.min.js 要素のソート [category.html]