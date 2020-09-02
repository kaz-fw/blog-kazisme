import * as React from "react";
import * as ReactDOM from "react-dom";
import { Layout } from "../components/Layout";

const About = () => (
  <Layout>
    <div className="about">
      <h2 id="スキル得意分野">基本情報</h2>
      <ul>
        <li>name：kaz</li>
        <li>work : Engineer</li>
      </ul>
      <h2 id="スキル得意分野">スキル・得意分野</h2>
      <h3 id="engineering">Engineering</h3>
      <ul>
        <li>
          <p>AI画像解析サービスフロントエンド開発</p>
          <ul>
            <li>（Vue.js、TypeScript）</li>
          </ul>
        </li>
        <li>
          <p>AI画像解析サービスアプリケーション基盤開発</p>
          <ul>
            <li>（テスト，Golang）</li>
          </ul>
        </li>
      </ul>
      <h3 id="design">Design</h3>
      <p>
        学生時代に「人に情報を伝えるには」「動物はなにを感じているのか」といった認知に関わる問題について興味を持ち，そこから現代のものづくりには欠かせない存在となったデザインについても知識やスキルを身につけたいと思うようになりました。
      </p>
      <p>
        ミームデザイン学校というデザインスクールに通っており，ベーシックデザインコースで勉強中です(2020年)。現在は「デザインとは
        /
        デザイン的な考え方とは」について勉強をしている段階ですが、いずれはグラフィックデザイン、エディトリアルデザイン、UI/UXデザインなどのスキルを身につけていきたいです。
      </p>
    </div>
  </Layout>
);

export default About;
