<template>
  <div class="router-sub">
    <h3>サブルート A</h3>
    <div class="content">
      <p>これはネストされたルート <code>/router/a</code> のコンテンツです。</p>
      <p>ネストされたルートを使うと、SPA内で複雑なUIレイアウトを構築できます。</p>
      <div class="example">
        <div class="code-block">
          <pre><code>// router/index.js
{
  path: '/router',
  component: RouterDemo,
  children: [
    { path: 'a', component: RouterSubA },
    { path: 'b', component: RouterSubB }
  ]
}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterSubA'
}
</script>

<style scoped>
.router-sub {
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.content {
  margin-top: 15px;
}

.example {
  margin-top: 20px;
}

.code-block {
  background-color: #2c3e50;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
}

pre {
  margin: 0;
  font-family: monospace;
}
</style>
