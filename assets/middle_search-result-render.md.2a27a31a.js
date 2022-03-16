import{_ as s,c as n,o as a,a as t}from"./app.e4ff3064.js";const g='{"title":"\u6E32\u67D3\u641C\u7D22\u7ED3\u679C\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C01\u88C5\u641C\u7D22\u6587\u7AE0\u5217\u8868\u6570\u636E\u7684 API","slug":"\u5C01\u88C5\u641C\u7D22\u6587\u7AE0\u5217\u8868\u6570\u636E\u7684-api"},{"level":2,"title":"\u641C\u7D22\u6587\u7AE0\u5217\u8868\u7684\u6570\u636E","slug":"\u641C\u7D22\u6587\u7AE0\u5217\u8868\u7684\u6570\u636E"},{"level":2,"title":"\u6E32\u67D3\u641C\u7D22\u7ED3\u679C\u7684\u5217\u8868\u6570\u636E","slug":"\u6E32\u67D3\u641C\u7D22\u7ED3\u679C\u7684\u5217\u8868\u6570\u636E"}],"relativePath":"middle/search-result-render.md"}',e={},o=t(`<h1 id="\u6E32\u67D3\u641C\u7D22\u7ED3\u679C\u9875" tabindex="-1">\u6E32\u67D3\u641C\u7D22\u7ED3\u679C\u9875 <a class="header-anchor" href="#\u6E32\u67D3\u641C\u7D22\u7ED3\u679C\u9875" aria-hidden="true">#</a></h1><h2 id="\u5C01\u88C5\u641C\u7D22\u6587\u7AE0\u5217\u8868\u6570\u636E\u7684-api" tabindex="-1">\u5C01\u88C5\u641C\u7D22\u6587\u7AE0\u5217\u8868\u6570\u636E\u7684 API <a class="header-anchor" href="#\u5C01\u88C5\u641C\u7D22\u6587\u7AE0\u5217\u8868\u6570\u636E\u7684-api" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F \u5C01\u88C5\u641C\u7D22\u6587\u7AE0\u5217\u8868\u6570\u636E\u7684 API</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>/src/api/searchAPI.js</code> \u6A21\u5757\u4E2D\uFF0C\u5C01\u88C5 <code>getSearchResultAPI</code> \u65B9\u6CD5\uFF0C\u7528\u6765\u6839\u636E\u5173\u952E\u8BCD\u641C\u7D22\u6587\u7AE0\u7684\u5217\u8868\u6570\u636E</li><li>\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u7684 <code>data</code> \u4E2D\u5B9A\u4E49 <code>page</code> \u9875\u7801\u503C</li><li>\u5728 <code>/src/router/index.js</code> \u8DEF\u7531\u6A21\u5757\u4E2D\uFF0C\u4E3A\u641C\u7D22\u7ED3\u679C\u9875\u7684\u8DEF\u7531\u89C4\u5219\u6DFB\u52A0 <code>props: true</code> \u9009\u9879</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>/src/api/searchAPI.js</code> \u6A21\u5757\u4E2D\uFF0C\u5C01\u88C5 <code>getSearchResultAPI</code> \u65B9\u6CD5\uFF0C\u7528\u6765\u6839\u636E\u5173\u952E\u8BCD\u641C\u7D22\u6587\u7AE0\u7684\u5217\u8868\u6570\u636E</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u5C01\u88C5\u641C\u7D22\u6587\u7AE0\u6570\u636E\u7684 API</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getSearchResultAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">kw<span class="token punctuation">,</span> page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/v1_0/search&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">q</span><span class="token operator">:</span> kw<span class="token punctuation">,</span> <span class="token comment">// \u641C\u7D22\u5173\u952E\u8BCD</span>
      page <span class="token comment">// \u9875\u7801\u503C</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u7684 <code>data</code> \u4E2D\u5B9A\u4E49 <code>page</code> \u9875\u7801\u503C</strong></li></ul><div class="language-js"><pre><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u7801\u503C</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u5728 <code>/src/router/index.js</code> \u8DEF\u7531\u6A21\u5757\u4E2D\uFF0C\u4E3A\u641C\u7D22\u7ED3\u679C\u9875\u7684\u8DEF\u7531\u89C4\u5219\u6DFB\u52A0 <code>props: true</code> \u9009\u9879</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// \u7701\u7565\u5176\u5B83\u7684\u8DEF\u7531\u89C4\u5219...</span>

  <span class="token comment">// \u641C\u7D22\u7ED3\u679C\u9875</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/search/:kw&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> SearchResult<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;search-result&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div></div><h2 id="\u641C\u7D22\u6587\u7AE0\u5217\u8868\u7684\u6570\u636E" tabindex="-1">\u641C\u7D22\u6587\u7AE0\u5217\u8868\u7684\u6570\u636E <a class="header-anchor" href="#\u641C\u7D22\u6587\u7AE0\u5217\u8868\u7684\u6570\u636E" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u83B7\u53D6\u641C\u7D22\u6587\u7AE0\u5217\u8868\u7684\u6570\u636E</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u4E2D\uFF0C\u6309\u9700\u5BFC\u5165 <code>API</code> \u65B9\u6CD5</li><li>\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u7684 <code>data</code> \u4E2D\uFF0C\u5B9A\u4E49\u540D\u4E3A <code>searchList</code> \u7684\u6570\u7EC4</li><li>\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u7684 <code>methods</code> \u4E2D\u5B9A\u4E49\u540D\u4E3A <code>initSearchList</code> \u7684\u65B9\u6CD5</li><li>\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u7684 <code>created</code> \u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\uFF0C\u8C03\u7528 <code>initSearchList</code> \u65B9\u6CD5\u641C\u7D22\u6587\u7AE0\u7684\u5217\u8868\u6570\u636E</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u4E2D\uFF0C\u6309\u9700\u5BFC\u5165 <code>API</code> \u65B9\u6CD5</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u6309\u9700\u5BFC\u5165 API \u65B9\u6CD5</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getSearchResultAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/searchAPI.js&#39;</span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u7684 <code>data</code> \u4E2D\uFF0C\u5B9A\u4E49\u540D\u4E3A <code>searchList</code> \u7684\u6570\u7EC4</strong></li></ul><div class="language-js"><pre><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u641C\u7D22\u7684\u7ED3\u679C</span>
    <span class="token literal-property property">searchList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u7684 <code>methods</code> \u4E2D\u5B9A\u4E49\u540D\u4E3A <code>initSearchList</code> \u7684\u65B9\u6CD5</strong></li></ul><div class="language-js"><pre><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u641C\u7D22\u7684\u7ED3\u679C</span>
  <span class="token keyword">async</span> <span class="token function">initSearchList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8C03\u7528 API \u63A5\u53E3</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSearchResultAPI</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>kw<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>message <span class="token operator">===</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E3A searchList \u8D4B\u503C</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>searchList <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>results
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.4\uFF1A\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u7684 <code>created</code> \u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\uFF0C\u8C03\u7528 <code>initSearchList</code> \u65B9\u6CD5\u641C\u7D22\u6587\u7AE0\u7684\u5217\u8868\u6570\u636E</strong></li></ul><div class="language-js"><pre><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initSearchList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li><li>\u3010\u9762\u8BD5\u9898\u3011</li></ul></div><h2 id="\u6E32\u67D3\u641C\u7D22\u7ED3\u679C\u7684\u5217\u8868\u6570\u636E" tabindex="-1">\u6E32\u67D3\u641C\u7D22\u7ED3\u679C\u7684\u5217\u8868\u6570\u636E <a class="header-anchor" href="#\u6E32\u67D3\u641C\u7D22\u7ED3\u679C\u7684\u5217\u8868\u6570\u636E" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6E32\u67D3\u641C\u7D22\u7ED3\u679C\u7684\u5217\u8868\u6570\u636E</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u4E2D\uFF0C\u5BFC\u5165<code>ArtItem.vue</code> \u7EC4\u4EF6</li><li>\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u4E2D\uFF0C\u901A\u8FC7 <code>components</code> \u8282\u70B9\u5BF9\u5BFC\u5165\u7684 <code>ArtItem.vue</code> \u7EC4\u4EF6\u8FDB\u884C\u6CE8\u518C</li><li>\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u7684\u6A21\u677F\u7ED3\u6784\u4E2D\uFF0C\u57FA\u4E8E <code>v-for</code> \u6307\u4EE4\u5FAA\u73AF\u6E32\u67D3 <code>ArtItem.vue</code> \u7EC4\u4EF6</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u4E2D\uFF0C\u5BFC\u5165<code>ArtItem.vue</code> \u7EC4\u4EF6</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u5BFC\u5165\u6587\u7AE0\u7684 Item \u9879\u7EC4\u4EF6</span>
<span class="token keyword">import</span> ArtItem <span class="token keyword">from</span> <span class="token string">&#39;@/components/ArtItem/ArtItem.vue&#39;</span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u4E2D\uFF0C\u901A\u8FC7 <code>components</code> \u8282\u70B9\u5BF9\u5BFC\u5165\u7684 <code>ArtItem.vue</code> \u7EC4\u4EF6\u8FDB\u884C\u6CE8\u518C</strong></li></ul><div class="language-js"><pre><code><span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6CE8\u518C\u7EC4\u4EF6</span>
  ArtItem
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u5728 <code>SearchResult</code> \u7EC4\u4EF6\u7684\u6A21\u677F\u7ED3\u6784\u4E2D\uFF0C\u57FA\u4E8E <code>v-for</code> \u6307\u4EE4\u5FAA\u73AF\u6E32\u67D3 <code>ArtItem.vue</code> \u7EC4\u4EF6</strong></li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search-result-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u70B9\u51FB\u5B9E\u73B0\u540E\u9000\u6548\u679C --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-nav-bar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u641C\u7D22\u7ED3\u679C<span class="token punctuation">&quot;</span></span> <span class="token attr-name">left-arrow</span> <span class="token attr-name">@click-left</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$router.back()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fixed</span> <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- \u6587\u7AE0\u7684 Item \u9879 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>art-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in searchList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.art_id.toString()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:article</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>art-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
&lt;/template
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li><li>\u3010\u9762\u8BD5\u9898\u3011</li></ul></div>`,15),p=[o];function c(l,u,i,r,k,d){return a(),n("div",null,p)}var h=s(e,[["render",c]]);export{g as __pageData,h as default};