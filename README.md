# blog-kazisme

# 開発環境の構築

## VSCode Remote Containerを利用したコンテナの構築と接続

本プロジェクトはVSCode Remote Containerに対応しています。

これはDockerコンテナ上に構築された開発環境に接続し，コンテナ上でVSCodeを動かしているかのように扱うことができる拡張機能です。
VSCode，Dockerのインストールをしているのであれば，すぐに環境を構築することができます。

### Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/download)

### Dockerのインストール

Docker公式サイト(https://www.docker.com/)に従ってインストールを行ってください。

### VSCodeのインストール

VSCodeはMicrosoftが提供するエディターです。

VSCode公式サイト(https://code.visualstudio.com/)に従ってインストールを行ってください。

### VS Code extensions

VS Codeで本プロジェクトを開くと、[../.vscode/extensions.json](../.vscode/extensions.json)で指定している拡張機能をインストールするか聞かれるので、インストールしてください。

### VSCode Remote Containerを利用したコンテナの構築と接続

1. VS Codeのウィンドウの左下に緑のアイコンが出ます。そこから「Reopen in Container」を選択し，Dockerコンテナを起動してください。
1. 初回起動時には5分~10分程度の時間がかかります。(2回目以降は高速で起動します。)
1. VS Code上でターミナルを表示すると，kuramoto-front内のDockerコンテナ内で標準入出力がターミナル上に表示されます。


## 開発環境構築でDockerを使用しない場合

npmパッケージのインストールをDocker内で行うとI/Oが非常に遅いです。
そのため，可能であればホストOSに環境を整えた方がDX(Developer Experience)は遥かに向上します。

以下をインストールすることにより環境の構築が可能です。yarnでパッケージ管理されているため，`node.js`，`Yarn`のインストールを行えばあとは`yarn install`で環境が整います。

- [Node.js](https://nodejs.org/ja/download/)
  - [Dockerfile](../Dockerfile)に書いてあるバージョンをインストール
  - [nvm](https://github.com/nvm-sh/nvm)のようなバージョン管理システムを使用すると便利
- [Yarn](https://classic.yarnpkg.com/ja/docs/install)

## Scripts

### 開発環境の実行

```bash
$ yarn dev
```