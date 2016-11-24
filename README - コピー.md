#scssファイル構成
- setting 変数, mixin, extend, keyframeなどの設定
- base 基本設定 編集付加
 - normalize ブラウザ間の差異を吸収
 - reset リセット用設定
- common サイト全体の共通設定、ヘッダ・フッタなどの全ページ共通部品。
- layout_xxx サイト全体で使いまわせるレイアウトモジュール。数が多い時はモジュールごとにファイルを分ける。
- module_xxx サイト全体で使いまわせるモジュール。数が多い時はモジュールごとにファイルを分ける。
- page_xxx ページ固有の設定。数が多い時はページごとにファイルを分ける。
- plugin プラグイン固有のスタイル
 - xxx プラグインごとにファイルを分ける
- print 印刷用スタイル


#命名規則
##レイアウトモジュール 命名規則

l-moduleName

##モジュール 命名規則

moduleName__elementName--modifireName

##画像ファイル名 命名規則

役割＿モジュール名＿固有名称（+連番）

例：　img_header_facebook.png

###役割（画像プレフィクス）
- btn … ボタン
- bnr … バナー
- img … 写真、イラスト etc
- fig … 図 etc
- bg … 背景画像
- title … 見出し
- txt … テキスト画像
- hero … メインビジュアル