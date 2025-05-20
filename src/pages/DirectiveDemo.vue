<template>
  <div class="directive-demo">
    <h2>カスタムディレクティブとミックスイン</h2>
    <div class="section">
      <h3>カスタムディレクティブ</h3>
      
      <div class="form-group">
        <label for="name">名前:</label>
        <input 
          id="name"
          v-model="userData.name" 
          placeholder="名前を入力"
          class="form-input"
        />
      </div>
      
      <div class="form-group">
        <label for="email">メールアドレス:</label>
        <input 
          id="email"
          v-model="userData.email" 
          placeholder="メールアドレスを入力"
          class="form-input"
        />
      </div>
      
      <div class="form-group">
        <label for="message">メッセージ (自動フォーカス):</label>
        <textarea 
          id="message"
          v-model="userData.message" 
          placeholder="メッセージを入力"
          class="form-textarea"
          v-focus
        ></textarea>
      </div>
      
      <div class="highlight-container">
        <h4>ハイライトディレクティブ</h4>
        <p v-highlight="'yellow'">この文章は黄色でハイライトされます。</p>
        <p v-highlight="'lightblue'">この文章は水色でハイライトされます。</p>
        <p v-highlight="'lightgreen'">この文章は薄緑でハイライトされます。</p>
      </div>
    </div>
    
    <div class="section">
      <h3>ミックスイン</h3>
      <div class="timestamp-section">
        <p>現在のページ滞在時間: {{ formattedElapsedTime }}</p>
        <p>ページ読み込み時刻: {{ loadTime }}</p>
        <button @click="resetTimer">タイマーリセット</button>
      </div>
    </div>
    
    <div class="explanation">
      <h3>コードの説明:</h3>
      <h4>カスタムディレクティブ</h4>
      <pre><code>// カスタムディレクティブの定義
Vue.directive('focus', {
  inserted: function(el) {
    el.focus()
  }
})

Vue.directive('highlight', {
  bind: function(el, binding) {
    el.style.backgroundColor = binding.value
  }
})</code></pre>
      
      <h4>ミックスイン</h4>
      <pre><code>// ミックスインの定義
const timerMixin = {
  data() {
    return {
      startTime: new Date(),
      elapsed: 0,
      timerInterval: null
    }
  },
  computed: {
    formattedElapsedTime() {
      return this.formatTime(this.elapsed)
    },
    loadTime() {
      return this.startTime.toLocaleTimeString()
    }
  },
  methods: {
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = seconds % 60
      return `${minutes}分${remainingSeconds}秒`
    },
    resetTimer() {
      this.startTime = new Date()
      this.elapsed = 0
    }
  },
  created() {
    this.timerInterval = setInterval(() => {
      this.elapsed = Math.floor((new Date() - this.startTime) / 1000)
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timerInterval)
  }
}</code></pre>
    </div>
  </div>
</template>

<script>
// タイマーミックスイン
const timerMixin = {
  data() {
    return {
      startTime: new Date(),
      elapsed: 0,
      timerInterval: null
    }
  },
  computed: {
    formattedElapsedTime() {
      return this.formatTime(this.elapsed)
    },
    loadTime() {
      return this.startTime.toLocaleTimeString()
    }
  },
  methods: {
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = seconds % 60
      return `${minutes}分${remainingSeconds}秒`
    },
    resetTimer() {
      this.startTime = new Date()
      this.elapsed = 0
    }
  },
  created() {
    this.timerInterval = setInterval(() => {
      this.elapsed = Math.floor((new Date() - this.startTime) / 1000)
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timerInterval)
  }
}

export default {
  name: 'DirectiveDemo',
  mixins: [timerMixin],
  data() {
    return {
      userData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    },
    highlight: {
      bind: function(el, binding) {
        el.style.backgroundColor = binding.value
      }
    }
  }
}
</script>

<style scoped>
.directive-demo {
  max-width: 800px;
  margin: 0 auto;
}

.section {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #2c3e50;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}

.form-textarea {
  min-height: 100px;
  resize: vertical;
}

.highlight-container {
  margin-top: 30px;
  background-color: white;
  padding: 15px;
  border-radius: 4px;
}

.timestamp-section {
  background-color: white;
  padding: 15px;
  border-radius: 4px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3aa776;
}

.explanation {
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.explanation pre {
  background-color: #2c3e50;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 10px 0;
}

.explanation code {
  font-family: monospace;
}
</style>
