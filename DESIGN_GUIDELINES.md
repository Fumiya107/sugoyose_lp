# スゴヨセ デザインガイドライン

このドキュメントは、https://sugoyose.jp/ のサイトから抽出したデザインガイドラインです。

## 1. カラーパレット

### プライマリカラー
- **プライマリカラー**: `#ff8053` (オレンジ)
  - 用途: メインCTA、リンクホバー、アクセント
- **パレオレンジ**: `#fff4f0`
  - 用途: 背景色として使用

### セカンダリカラー
- **セカンダリカラー**: `#333` (ダークグレー)
  - 用途: メインテキスト、セカンダリボタン背景

### 背景色
- **背景色**: `#f8f8f8` (ライトグレー)
- **白**: `#fff` (モノトーン4)

### モノトーン
- **モノトーン1**: `#666` (ミディアムグレー)
  - 用途: サブテキスト
- **モノトーン2**: `#999` (ライトグレー)
  - 用途: より薄いテキスト
- **モノトーン3**: `#f7f7f7` (非常に薄いグレー)
  - 用途: テーブルヘッダー背景など

### CSS変数
```css
:root {
  --primary-color: #ff8053;
  --secondary-color: #333;
  --background-color: #f8f8f8;
  --pale-orange: #fff4f0;
  --monotone-1: #666;
  --monotone-2: #999;
  --monotone-3: #f7f7f7;
  --monotone-4: #fff;
}
```

## 2. タイポグラフィ

### フォントファミリー
```css
font-family: "Noto Sans JP", 游ゴシック体, YuGothic, "Yu Gothic", 
             "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", 
             Meiryo, メイリオ, arial, sans-serif;
```

### ベース設定
- **ベースフォントサイズ**: `10px`
- **ベース行間**: `1` (10px)
- **文字間隔**: `normal`

### 見出しサイズ

#### PC
- **H2 (ロゴアイコン付き)**: `3.6rem` (36px), `letter-spacing: 0.08em`
- **H2 (通常)**: `2.8rem` (28px), `letter-spacing: 0.04em`
- **H3**: `2.2rem` (22px), `letter-spacing: 0.02em`
- **H4**: `1.8rem` (18px), `letter-spacing: 0.02em`

#### SP
- **H2 (ロゴアイコン付き)**: `2.2rem` (22px), `letter-spacing: 0.03em`
- **H2 (通常)**: `2.2rem` (22px), `letter-spacing: 0.03em`
- **H3**: `1.8rem` (18px), `letter-spacing: 0.04em`

### 本文テキスト
- **リードテキスト**: `1.2rem` (12px), `letter-spacing: 0.08em`
- **通常テキスト**: `1.4rem` (14px)
- **小さいテキスト**: `1rem` (10px), `1.2rem` (12px)

## 3. レイアウト

### デザイン幅
- **PCデザイン幅**: `1440px`
- **PCコンテンツ幅**: `1000px`
- **SPデザイン幅**: `390px`
- **SPコンテンツ幅**: `360px`

### ブレークポイント
- **モバイル**: `max-width: 768px`
- **タブレット/PC**: `min-width: 769px`

### コンテナ
- **最大幅**: `1360px` (PC)
- **パディング**: `40px` (PC), `15px` (SP)
- **マージン**: `auto` (中央揃え)

## 4. ボタンスタイル

### プライマリボタン
```css
.btns.btns--primary {
  background: var(--primary-color);
  color: var(--monotone-4);
  border-radius: 80px;
  padding: 20px;
  min-width: 200px;
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  font-weight: 700;
}
```

### セカンダリボタン
```css
.btns.btns--secondary {
  background: var(--secondary-color);
  color: var(--monotone-4);
  border-radius: 80px;
  padding: 20px;
  min-width: 200px;
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  font-weight: 700;
}
```

### ボーダーボタン
```css
.btns.btns--border {
  background: var(--monotone-4);
  border: 1px solid #ddd;
  color: var(--secondary-color);
  border-radius: 80px;
  padding: 20px;
  min-width: 200px;
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  font-weight: 700;
}
```

### ボタンサイズ
- **通常**: `min-width: 200px` (PC), `min-width: 240px` (SP)
- **大型**: `min-width: 320px` (PC), `min-width: 240px` (SP)

### ホバーエフェクト
```css
@media screen and (min-width: 769px) {
  .btns:hover {
    opacity: 0.7;
    text-decoration: none;
  }
}
```

## 5. 角丸 (Border Radius)

### 大きな角丸
- **80px**: メインセクション、ボタン、カード
- **100px**: ヒーローセクション背景

### 中程度の角丸
- **50px**: SP版の大きな要素
- **60px**: SP版のセクション背景

### 小さな角丸
- **4px**: 小さな要素、フォーム要素
- **6px**: 入力フィールド
- **10px**: カード、モーダル
- **15px**: 画像、ニュース記事のサムネイル
- **20px**: タグ、バッジ

### 特殊な角丸
- **50px 0px**: カードの斜め角丸（PC）
- **45px 0px**: シーンカテゴリー画像

## 6. スペーシング

### セクション間マージン
- **小**: `60px`
- **中**: `80px`, `100px`
- **大**: `120px`, `140px`

### 要素間マージン
- **小**: `20px`, `24px`, `30px`
- **中**: `40px`, `50px`
- **大**: `64px`, `90px`

### パディング
- **コンテナ**: `40px` (PC), `15px` (SP)
- **セクション**: `80px 0px` (PC), `60px 0px` (SP)
- **カード**: `30px`, `50px`

## 7. シャドウ

### ボックスシャドウ
```css
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
```

### カロセルシャドウ
- 画像の下にSVGベースのシャドウを使用

## 8. アイコン

### ロゴアイコン
- **サイズ**: `24px × 28px` (PC), `20px × 23px` (SP)
- **位置**: 見出しの上に配置

### ナビゲーションアイコン
- **矢印**: SVG形式
- **メニュー**: SVG形式

## 9. アニメーション

### トランジション
```css
transition: opacity 0.2s;
transition: transform 0.2s;
transition: background 0.3s ease-in-out;
```

### キーフレームアニメーション
- **ズーム**: 画像の拡大アニメーション（4秒）
- **スライド**: Swiper.jsを使用したカルーセル

## 10. フォーム要素

### 入力フィールド
```css
input[type="text"] {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
```

### ラジオボタン・チェックボックス
- カスタムSVGアイコンを使用
- サイズ: `16px × 16px`

## 11. カード・コンテナ

### カードスタイル
```css
.card {
  background: var(--monotone-4);
  border-radius: 50px 0px; /* または 10px */
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
}
```

### 背景セクション
- **グレー背景**: `var(--background-color)` (`#f8f8f8`)
- **白背景**: `var(--monotone-4)` (`#fff`)
- **オレンジ背景**: `#fdf2ee` (キャンペーンバナー)

## 12. リンクスタイル

### 通常リンク
```css
a:link, a:visited, a:active {
  color: var(--secondary-color);
  text-decoration: none;
}
```

### ホバー
```css
@media screen and (min-width: 769px) {
  a:hover {
    color: var(--primary-color);
    text-decoration: underline;
  }
}
```

## 13. 画像

### レスポンシブ画像
```css
img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
}

img.fluid {
  width: 100%;
  max-width: initial;
}
```

### オブジェクトフィット
```css
img {
  object-fit: cover;
}
```

## 14. カルーセル (Swiper)

### ナビゲーションボタン
- **サイズ**: `40px × 40px`
- **位置**: 左右に配置
- **スタイル**: SVGアイコン

### ページネーション
- **ドットサイズ**: `8px × 8px` (通常), `12px × 12px` (SP)
- **アクティブ**: プライマリカラー

## 15. モーダル

### モーダルスタイル
```css
.modal {
  background: var(--monotone-4);
  border-radius: 10px;
  padding: 40px;
  max-width: 720px;
  box-shadow: rgba(0, 0, 0, 0.6);
}
```

## 16. レスポンシブデザインの原則

### PC優先設計
- モバイルファーストではなく、PC優先で設計
- `@media screen and (max-width: 768px)` でSPスタイルを上書き

### ユーティリティクラス
- `.pc`: PCのみ表示
- `.sp`: SPのみ表示

## 17. アクセシビリティ

### フォーカススタイル
```css
a:focus, button:focus, input:focus {
  outline-width: 0px;
}
```

### セマンティックHTML
- 適切な見出し階層（h1, h2, h3, h4）
- ナビゲーションは`<nav>`要素
- 記事は`<article>`要素

## 18. パフォーマンス

### 画像最適化
- WebP形式を使用
- `picture`要素でレスポンシブ画像
- 遅延読み込み対応

### フォント
- Google Fonts (Noto Sans JP) を使用
- `preconnect`で事前接続

## 19. 使用ライブラリ

- **Swiper.js**: カルーセル機能
- **jQuery**: DOM操作
- **Ress.css**: リセットCSS

## 20. 命名規則

### BEM風の命名
- `.cmn-headline`: 共通見出し
- `.cmn-btn`: 共通ボタン
- `.cmn-carousel`: 共通カルーセル
- `.sec-key`: セクション（キービジュアル）
- `.sec-recommend`: セクション（おすすめ）

### プレフィックス
- `#gl-`: グローバルレイアウト（`#gl-header`, `#gl-main`, `#gl-footer`）
- `#page-`: ページ固有ID
- `.cmn-`: 共通コンポーネント
- `.sec-`: セクション

---

**最終更新**: 2025年1月1日  
**参照サイト**: https://sugoyose.jp/

