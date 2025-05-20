<template>
  <div class="home">
    <h2>Vue 2.5 学習ポータル へようこそ</h2>
    <div class="section">
      <p>{{ message }}</p>
      <button @click="toggleMessage">メッセージを切り替える</button>
    </div>
    <div class="intro">
      <h3>使い方</h3>
      <p>このポータルでは、Vue 2.5の主要機能を段階的に学ぶことができます。</p>
      <p>上部のナビゲーションから各ページにアクセスしてください。</p>
      <ul>
        <li>ディレクティブ - 基本的なv-if、v-else、v-forなどを学びます</li>
        <li>バインディング - v-modelによる双方向バインディングを学びます</li>
        <li>コンポーネント - 親子間のpropsとイベント通信を学びます</li>
        <li>ルーティング - ネストされたルートの使い方を学びます</li>
        <li>Vuex - グローバル状態管理を学びます</li>
        <li>トランジション - アニメーションの適用方法を学びます</li>
        <li>カスタムディレクティブ - 独自ディレクティブとミックスインを学びます</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isAlternate: false
    }
  },
  computed: {
    message() {
      return this.isAlternate
        ? '🎉 Vue 2.5で実践的なSPA開発を学びましょう！'
        : '👋 Vue 2.5学習ポータルへようこそ。'
    }
  },
  methods: {
    toggleMessage() {
      this.isAlternate = !this.isAlternate
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

.section {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  text-align: center;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3aa776;
}

.intro {
  margin-top: 30px;
}

ul {
  text-align: left;
  line-height: 1.6;
}
</style>
