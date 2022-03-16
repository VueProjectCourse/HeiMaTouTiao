import{_ as s,c as n,o as a,a as t}from"./app.e4ff3064.js";const _='{"title":"\u5B89\u88C5\u548C\u914D\u7F6EAxios","description":"","frontmatter":{},"headers":[],"relativePath":"early/deploy-axios.md"}',p={},o=t(`<h1 id="\u5B89\u88C5\u548C\u914D\u7F6Eaxios" tabindex="-1">\u5B89\u88C5\u548C\u914D\u7F6EAxios <a class="header-anchor" href="#\u5B89\u88C5\u548C\u914D\u7F6Eaxios" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5BF9Axios\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4F7F\u5F97\u9879\u76EE\u7EF4\u62A4\u63A5\u53E3\u975E\u5E38\u65B9\u4FBF...</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5B89\u88C5axios</li><li>axios\u57FA\u7840\u914D\u7F6E</li><li>\u58F0\u660EAPI\u63A5\u53E3</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><p><strong>Step. 1\uFF1A\u5B89\u88C5axios</strong></p><div class="language-bash"><pre><code><span class="token function">npm</span> i axios -S
</code></pre></div></li><li><p><strong>Step. 2\uFF1Aaxios\u57FA\u7840\u914D\u7F6E</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token comment">// \u8C03\u7528 axios.create() \u65B9\u6CD5\uFF0C\u521B\u5EFA axios \u7684\u5B9E\u4F8B\u5BF9\u8C61</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u8BF7\u6C42\u6839\u8DEF\u5F84</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;http://geek.itheima.net&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> instance
</code></pre></div></li><li><p><strong>Step. 3\uFF1A\u58F0\u660EAPI\u63A5\u53E3</strong></p><div class="language-js"><pre><code><span class="token comment">// 1.\u5BFC\u5165request.js\u6587\u4EF6</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;../utils/request&#39;</span>

<span class="token comment">/**
* \u83B7\u53D6\u6587\u7AE0\u5217\u8868
* @param {*} Id \u9891\u9053ID
* @param {*} time \u65F6\u95F4\u6233
*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getArticleListAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">Id<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/v1_0/articles&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">channel_id</span><span class="token operator">:</span> Id<span class="token punctuation">,</span> <span class="token comment">// \u9891\u9053\u7684 Id</span>
      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> time <span class="token comment">// \u65F6\u95F4\u6233</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
* \u5C06\u6587\u7AE0\u8BBE\u7F6E\u4E3A\u4E0D\u611F\u5174\u8DA3
* @param {*} id \u6587\u7AE0Id
* @returns
*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">dislikeArticleAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/v1_0/article/dislikes&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> id
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),e=[o];function c(l,i,r,k,u,d){return a(),n("div",null,e)}var g=s(p,[["render",c]]);export{_ as __pageData,g as default};
