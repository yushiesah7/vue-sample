<template>
  <div class="vuex-demo">
    <h2>Vuexデモ</h2>
    <div class="section">
      <h3>グローバル状態管理</h3>
      <div class="counter-container">
        <div class="counter">
          <div class="count">{{ count }}</div>
          <div class="controls">
            <button @click="decrement" class="btn btn-sub">-</button>
            <button @click="increment" class="btn btn-add">+</button>
          </div>
        </div>

        <div class="counter-info">
          <p>カウント値: <strong>{{ count }}</strong></p>
          <p>カウント値の2乗: <strong>{{ countSquared }}</strong></p>
        </div>
      </div>

      <div class="async-section">
        <h4>非同期アクション</h4>
        <div class="async-controls">
          <button @click="incrementAsync" :disabled="loading" class="btn">
            {{ loading ? '処理中...' : '1秒後に増加' }}
          </button>
          <button @click="decrementAsync" :disabled="loading" class="btn">
            {{ loading ? '処理中...' : '1秒後に減少' }}
          </button>
          <button @click="reset" class="btn btn-reset">リセット</button>
        </div>
      </div>

      <div class="history-section">
        <h4>操作履歴</h4>
        <transition-group name="list" tag="ul" class="history-list">
          <li v-for="(record, index) in recentHistory" :key="index" class="history-item">
            <span class="operation" :class="record.type.toLowerCase()">{{ record.type }}</span>
            <span class="history-count">{{ record.count }}</span>
            <span class="timestamp">{{ record.timestamp }}</span>
          </li>
        </transition-group>
      </div>
    </div>

    <div class="explanation">
      <h3>コードの説明:</h3>
      <ul>
        <li><code>this.$store.state.count</code> - Vuexのステートから直接値を取得</li>
        <li><code>this.$store.getters.countSquared</code> - Vuexのゲッターから計算された値を取得</li>
        <li><code>this.$store.commit('increment')</code> - ミューテーションを呼び出してステートを変更</li>
        <li><code>this.$store.dispatch('incrementAsync')</code> - 非同期アクションをディスパッチ</li>
      </ul>

      <div class="code-example">
        <pre><code>// store/index.js
export default new Vuex.Store({
  state: {
    count: 0,
    history: []
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  },
  getters: {
    countSquared: state => state.count * state.count
  }
})</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'VuexDemo',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters([
      'countSquared',
      'recentHistory'
    ])
  },
  methods: {
    ...mapMutations({
      increment: 'increment',
      decrement: 'decrement',
      reset: 'reset'
    }),
    incrementAsync () {
      this.loading = true
      this.$store.dispatch('incrementAsync').then(() => {
        this.loading = false
      })
    },
    decrementAsync () {
      this.loading = true
      this.$store.dispatch('decrementAsync').then(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
.vuex-demo {
  max-width: 800px;
  margin: 0 auto;
}

.section {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.counter-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 200px;
}

.count {
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.controls {
  display: flex;
  gap: 10px;
}

.btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover:not(:disabled) {
  background-color: #3aa776;
}

.btn:disabled {
  background-color: #a8d5c3;
  cursor: not-allowed;
}

.btn-add {
  font-size: 1.2rem;
  padding: 5px 15px;
}

.btn-sub {
  font-size: 1.2rem;
  padding: 5px 15px;
  background-color: #e74c3c;
}

.btn-sub:hover {
  background-color: #c0392b;
}

.btn-reset {
  background-color: #7f8c8d;
}

.btn-reset:hover {
  background-color: #636e72;
}

.counter-info {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  min-width: 200px;
}

.async-section {
  margin-top: 30px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

.async-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
}

.history-section {
  margin-top: 30px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

.history-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.history-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.operation {
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 4px;
  margin-right: 10px;
  color: white;
}

.operation.increment {
  background-color: #42b983;
}

.operation.decrement {
  background-color: #e74c3c;
}

.operation.reset {
  background-color: #7f8c8d;
}

.history-count {
  font-weight: bold;
  margin-right: 15px;
}

.timestamp {
  color: #95a5a6;
  margin-left: auto;
  font-size: 0.9rem;
}

/* リストのトランジション */
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
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
