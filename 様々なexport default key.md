Vue.js のコンポーネントで export default 内に用意されるキーには、methods や mounted の他にも以下のようなものがあります:

data: コンポーネントの状態を定義するオブジェクトを返す関数です 1.

computed: 算出プロパティを定義するオブジェクトです。

props: 親コンポーネントから受け取るプロパティを定義します。

components: 子コンポーネントを登録するオブジェクトです。

watch: データの変更を監視するメソッドを定義します。

created: コンポーネントが作成された後に呼ばれるライフサイクルフックです 4.

updated: コンポーネントが更新された後に呼ばれるライフサイクルフックです 4.

beforeUnmount: コンポーネントがアンマウントされる直前に呼ばれるライフサイクルフックです 4.

name: コンポーネントの名前を定義します 3.

mixins: ミックスインを定義するための配列です。

directives: カスタムディレクティブを定義するオブジェクトです。

filters: フィルターを定義するオブジェクトです（Vue 3 では非推奨）。
