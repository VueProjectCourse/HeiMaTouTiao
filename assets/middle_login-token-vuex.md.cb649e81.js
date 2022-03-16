import{_ as n,c as s,o as a,a as t}from"./app.e4ff3064.js";const f='{"title":"\u5B58\u50A8token\u5230vuex","description":"","frontmatter":{},"headers":[],"relativePath":"middle/login-token-vuex.md"}',o={},p=t(`<h1 id="\u5B58\u50A8token\u5230vuex" tabindex="-1">\u5B58\u50A8token\u5230vuex <a class="header-anchor" href="#\u5B58\u50A8token\u5230vuex" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u628Atoken\u5B58\u50A8\u5230vuex\u4E2D</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728vuex\u6A21\u5757\u4E2D\u58F0\u660E\u5982\u4E0B\u7684state\u6570\u636E\u8282\u70B9\uFF0C\u5B9A\u4E49\u4E13\u95E8\u7528\u6765\u5B58\u50A8token\u4FE1\u606F\u7684<code>tokenInfo</code>\u5BF9\u8C61</li><li>\u5728mutations\u8282\u70B9\u4E0B\uFF0C\u5B9A\u4E49\u540D\u4E3A<code>updateTokenInfo</code>\u7684Mutation\u65B9\u6CD5\uFF0C\u4E13\u95E8\u7528\u6765\u66F4\u65B0<code>tokenInfo</code>\u7684\u503C</li><li>\u5728<code>Login.vue</code>\u7EC4\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>mapMutations</code>\u8F85\u52A9\u65B9\u6CD5\uFF0C\u628A<code>updateTokenInfo</code>\u6620\u5C04\u4E3A\u7EC4\u4EF6\u7684methods\u65B9\u6CD5</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A \u5728vuex\u6A21\u5757\u4E2D\u58F0\u660E\u5982\u4E0B\u7684state\u6570\u636E\u8282\u70B9\uFF0C\u5B9A\u4E49\u4E13\u95E8\u7528\u6765\u5B58\u50A8token\u4FE1\u606F\u7684<code>tokenInfo</code>\u5BF9\u8C61</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7528\u6765\u5B58\u50A8token\u4FE1\u606F\u7684\u5BF9\u8C61\uFF0C\u5C06\u6765\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u4F1A\u5305\u542B\u4E24\u4E2A\u5C5E\u6027 {token, refresh_token}</span>
    <span class="token literal-property property">tokenInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li><strong>Step.2\uFF1A \u5728mutations\u8282\u70B9\u4E0B\uFF0C\u5B9A\u4E49\u540D\u4E3A<code>updateTokenInfo</code>\u7684Mutation\u65B9\u6CD5\uFF0C\u4E13\u95E8\u7528\u6765\u66F4\u65B0<code>tokenInfo</code>\u7684\u503C</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u66F4\u65B0 tokenInfo \u6570\u636E\u7684\u65B9\u6CD5</span>
    <span class="token function">updateTokenInfo</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u628A\u63D0\u4EA4\u8FC7\u6765\u7684 payload \u5BF9\u8C61\uFF0C \u4F5C\u4E3A tokenInfo \u7684\u503C</span>
      state<span class="token punctuation">.</span>tokenInfo <span class="token operator">=</span> payload
      <span class="token comment">// \u6D4B\u8BD5 state \u4E2D\u662F\u5426\u6709\u6570\u636E</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A \u5728<code>Login.vue</code>\u7EC4\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>mapMutations</code>\u8F85\u52A9\u65B9\u6CD5\uFF0C\u628A<code>updateTokenInfo</code>\u6620\u5C04\u4E3A\u7EC4\u4EF6\u7684methods\u65B9\u6CD5</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// 1. \u6309\u9700\u5BFC\u5165\u8F85\u52A9\u65B9\u6CD5</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapMutations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2. \u6620\u5C04 mutations \u4E2D\u7684\u65B9\u6CD5</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;updateTokenInfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loginAPI</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>message <span class="token operator">===</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 3. \u628A\u767B\u5F55\u6210\u529F\u7684\u7ED3\u679C\uFF0C\u5B58\u50A8\u5230 vuex \u4E2D</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateTokenInfo</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token comment">// 4. \u767B\u5F55\u6210\u529F\u540E\uFF0C\u8DF3\u8F6C\u5230\u4E3B\u9875</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),e=[p];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var y=n(o,[["render",c]]);export{f as __pageData,y as default};