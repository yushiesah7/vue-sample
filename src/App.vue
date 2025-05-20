<template>
  <div id="app">
    <div class="default-layout">
      <header class="header">
        <h1>Vue 2.5 学習ポータル</h1>
        <nav>
          <ul>
            <li><router-link to="/">ホーム</router-link></li>
            <li><router-link to="/directives">ディレクティブ</router-link></li>
            <li><router-link to="/binding">バインディング</router-link></li>
            <li><router-link to="/components">コンポーネント</router-link></li>
            <li><router-link to="/router">ルーティング</router-link></li>
            <li><router-link to="/vuex">Vuex</router-link></li>
            <li><router-link to="/transition">トランジション</router-link></li>
            <li><router-link to="/directive">カスタムディレクティブ</router-link></li>
          </ul>
        </nav>
      </header>
      <main class="content">
        <router-view></router-view>
      </main>
      <footer class="footer">
        <p>Vue 2.5.x 学習ポータル - CLI 2系 webpack テンプレート</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f9f9f9;
  line-height: 1.6;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

button {
  cursor: pointer;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* レイアウトスタイル */
.default-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.header h1 {
  color: #42b983;
  margin-bottom: 20px;
}

nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  gap: 10px;
}

nav li {
  margin-right: 20px;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a.router-link-active {
  color: #42b983;
  font-weight: bold;
}

.content {
  padding: 20px 0;
  min-height: 70vh;
  background-color: #fff;
  margin-top: 20px;
  display: block;
  width: 100%;
}

.footer {
  padding: 20px 0;
  border-top: 1px solid #eee;
  text-align: center;
  color: #999;
  font-size: 14px;
}
</style>
