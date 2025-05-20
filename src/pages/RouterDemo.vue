<template>
  <div class="router-demo">
    <h2>ルーティングデモ</h2>
    <div class="section">
      <h3>ネストされたルート</h3>
      <p>これは親ルート <code>/router</code> のコンテンツです。</p>

      <div class="navigation">
        <router-link to="/router/a" class="nav-link">サブルート A へ</router-link>
        <router-link to="/router/b" class="nav-link">サブルート B へ</router-link>
      </div>

      <!-- ネストされたルートのビューがここに表示される -->
      <router-view></router-view>

      <div class="info">
        <p>上記のリンクをクリックして、ネストされたルートの動作を確認してください。</p>
        <p>ルートURLが変わっても、親コンポーネント（このページ）は再レンダリングされず、子ビューだけが入れ替わります。</p>
      </div>
    </div>

    <div class="explanation">
      <h3>コードの説明:</h3>
      <ul>
        <li><code>&lt;router-view&gt;</code> - ネストされたルートのコンポーネントを表示するための特殊なコンポーネント</li>
        <li><code>&lt;router-link to="/router/a"&gt;</code> - Vue Routerのリンクコンポーネント</li>
        <li>ルーティング設定では、<code>children</code>配列で子ルートを定義している</li>
      </ul>

      <div class="code-example">
        <pre><code>// router/index.js
export default new Router({
  routes: [
    {
      path: '/router',
      component: RouterDemo,
      children: [
        { path: 'a', component: RouterSubA },
        { path: 'b', component: RouterSubB }
      ]
    }
  ]
})</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterDemo'
}
</script>

<style scoped>
.router-demo {
  max-width: 800px;
  margin: 0 auto;
}

.section {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.navigation {
  display: flex;
  margin: 20px 0;
  gap: 15px;
}

.nav-link {
  display: inline-block;
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #3aa776;
}

.nav-link.router-link-active {
  background-color: #2c3e50;
}

.info {
  margin-top: 20px;
  padding: 15px;
  background-color: #e7f5ff;
  border-radius: 6px;
}

.explanation {
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.explanation code {
  background-color: #f0f0f0;
  padding: 2px 5px;
  border-radius: 3px;
  font-family: monospace;
}

.code-example {
  margin-top: 15px;
}

.code-example pre {
  background-color: #2c3e50;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 0;
}
</style>
