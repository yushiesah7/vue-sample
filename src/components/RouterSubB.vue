<template>
  <div class="router-sub">
    <h3>サブルート B</h3>
    <div class="content">
      <p>これはネストされたルート <code>/router/b</code> のコンテンツです。</p>
      <p>親ルートと子ルートは同時に表示され、レイアウトの構成が容易になります。</p>
      <div class="info-box">
        <h4>ネストされたルートのメリット</h4>
        <ul>
          <li>UIの論理的な階層構造を表現できる</li>
          <li>コンポーネント間のコードの分離が容易になる</li>
          <li>各レベルのビューを個別に管理できる</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterSubB'
}
</script>

<style scoped>
.router-sub {
  background-color: #fff0f5;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.content {
  margin-top: 15px;
}

.info-box {
  background-color: #2c3e50;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  margin-top: 20px;
}

h4 {
  margin-top: 0;
  color: #42b983;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}
</style>
