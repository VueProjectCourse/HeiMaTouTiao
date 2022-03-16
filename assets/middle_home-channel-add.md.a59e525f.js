import{_ as n,c as s,o as a,a as t}from"./app.e4ff3064.js";const h='{"title":"\u5B9E\u73B0\u9891\u9053\u6DFB\u52A0","description":"","frontmatter":{},"headers":[],"relativePath":"middle/home-channel-add.md"}',p={},o=t(`<h1 id="\u5B9E\u73B0\u9891\u9053\u6DFB\u52A0" tabindex="-1">\u5B9E\u73B0\u9891\u9053\u6DFB\u52A0 <a class="header-anchor" href="#\u5B9E\u73B0\u9891\u9053\u6DFB\u52A0" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u65B0\u589E\u9891\u9053\u7684\u529F\u80FD</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u4E3A\u201C\u66F4\u591A\u9891\u9053\u201D\u4E0B\u7684 <code>item</code> \u9879\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u5C06\u5F53\u524D\u7684\u9891\u9053\u4FE1\u606F\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F20\u9012\u7ED9 <code>addChannel</code> \u65B9\u6CD5</li><li>\u5728<code>Home</code>\u7EC4\u4EF6\u7684 <code>methods</code> \u8282\u70B9\u4E0B\uFF0C\u58F0\u660E <code>addChannel</code> \u5904\u7406\u51FD\u6570</li><li>\u5728<code>homeAPI.js</code>\u6A21\u5757\u4E2D\uFF0C\u58F0\u660E<code>API</code> \u63A5\u53E3\uFF0C\u7528\u6765\u5C06\u7528\u6237\u7684\u9891\u9053\u5217\u8868\u6570\u636E\u63D0\u4EA4\u5230\u670D\u52A1\u5668\u4FDD\u5B58</li><li>\u5728<code>Home</code>\u7EC4\u4EF6\u4E2D\uFF0C\u6309\u9700\u5BFC\u5165 <code>API</code> \u63A5\u53E3</li><li>\u5728<code>Home</code>\u7EC4\u4EF6\u4E2D\uFF0C\u58F0\u660E updateChannel \u65B9\u6CD5\uFF0C\u7528\u6765\u628A\u6700\u65B0\u7684\u7528\u6237\u9891\u9053\u5217\u8868\u6570\u636E\uFF0C\u63D0\u4EA4\u5230\u540E\u7AEF\u4FDD\u5B58</li><li>\u5728 <code>Home</code> \u7EC4\u4EF6\u7684 <code>addChannel</code> \u65B9\u6CD5\u4E2D\uFF0C\u8C03\u7528\u4E0A\u4E00\u6B65\u5C01\u88C5\u7684 <code>updateChannel</code> \u65B9\u6CD5</li><li>\u63D0\u793A\u7528\u6237\u66F4\u65B0\u6210\u529F</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u4E3A\u201C\u66F4\u591A\u9891\u9053\u201D\u4E0B\u7684 <code>item</code> \u9879\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u5C06\u5F53\u524D\u7684\u9891\u9053\u4FE1\u606F\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F20\u9012\u7ED9 <code>addChannel</code> \u65B9\u6CD5</strong></li></ul><div class="language-html"><pre><code><span class="token comment">&lt;!-- \u66F4\u591A\u9891\u9053\u5217\u8868 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-row</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-col</span> <span class="token attr-name">span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in moreChannels<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>channel-item van-hairline--surround<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addChannel(item)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-col</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-row</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728<code>Home</code>\u7EC4\u4EF6\u7684 <code>methods</code> \u8282\u70B9\u4E0B\uFF0C\u58F0\u660E <code>addChannel</code> \u5904\u7406\u51FD\u6570</strong></li></ul><div class="language-js"><pre><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u65B0\u589E\u9891\u9053\uFF08\u5F62\u53C2 item \u5C31\u662F\u5F53\u524D\u7528\u6237\u70B9\u51FB\u7684\u9891\u9053\u4FE1\u606F\u5BF9\u8C61\uFF09</span>
  <span class="token comment">// \u683C\u5F0F\uFF1A{ id, name }</span>
  <span class="token function">addChannel</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u7528\u6237\u70B9\u51FB\u7684\u9891\u9053\uFF0C\u6DFB\u52A0\u5230\u201C\u7528\u6237\u9891\u9053\u201D\u5217\u8868\u4E2D</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userChannel<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token comment">// TODO\uFF1A\u8C03\u7528 API \u63A5\u53E3\uFF0C\u5C06\u6700\u65B0\u7684\u7528\u6237\u9891\u9053\uFF0C\u5B58\u50A8\u5230\u540E\u53F0\u6570\u636E\u5E93\u4E2D</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u5728<code>homeAPI.js</code>\u6A21\u5757\u4E2D\uFF0C\u58F0\u660E<code>API</code> \u63A5\u53E3\uFF0C\u7528\u6765\u5C06\u7528\u6237\u7684\u9891\u9053\u5217\u8868\u6570\u636E\u63D0\u4EA4\u5230\u670D\u52A1\u5668\u4FDD\u5B58</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u66F4\u65B0\u7528\u6237\u9891\u9053\u5217\u8868\u6570\u636E\u7684 API</span>
<span class="token comment">// \u6CE8\u610F\uFF1A\u5F62\u53C2 channels \u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u683C\u5F0F\uFF1A [ {id, seq} ]</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">updateUserChannelAPI</span> <span class="token operator">=</span> <span class="token parameter">channels</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/v1_0/user/channels&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    channels
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.4\uFF1A\u5728<code>Home</code>\u7EC4\u4EF6\u4E2D\uFF0C\u6309\u9700\u5BFC\u5165 <code>API</code> \u63A5\u53E3</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u6309\u9700\u5BFC\u5165 API \u63A5\u53E3</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUserChannelAPI<span class="token punctuation">,</span> getAllChannelAPI<span class="token punctuation">,</span> updateUserChannelAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/homeAPI&#39;</span>
</code></pre></div><ul><li><strong>Step.5\uFF1A\u5728<code>Home</code>\u7EC4\u4EF6\u4E2D\uFF0C\u58F0\u660E updateChannel \u65B9\u6CD5\uFF0C\u7528\u6765\u628A\u6700\u65B0\u7684\u7528\u6237\u9891\u9053\u5217\u8868\u6570\u636E\uFF0C\u63D0\u4EA4\u5230\u540E\u7AEF\u4FDD\u5B58</strong></li></ul><div class="language-js"><pre><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u628A\u7528\u6237\u7684\u9891\u9053\u5217\u8868\u6570\u636E\u63D0\u4EA4\u5230\u540E\u7AEF\u4FDD\u5B58</span>
  <span class="token keyword">async</span> <span class="token function">updateChannel</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \u51C6\u5907\u8981\u63D0\u4EA4\u5230\u670D\u52A1\u5668\u7684\u6570\u636E</span>
    <span class="token keyword">const</span> channels <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userChannel
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">&#39;\u63A8\u8350&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u5C06\u201C\u63A8\u8350\u201D\u4ECE\u9891\u9053\u5217\u8868\u4E2D\u8FC7\u6EE4\u51FA\u53BB</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>               <span class="token comment">// \u8C03\u7528\u6570\u7EC4\u7684 map \u5FAA\u73AF\uFF0C\u6700\u7EC8\u8FD4\u56DE\u4E00\u4E2A\u5904\u7406\u597D\u7684\u65B0\u6570\u7EC4</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> item<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
          <span class="token literal-property property">seq</span><span class="token operator">:</span> index <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 2. \u8C03\u7528 API \u63A5\u53E3</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">updateUserChannelAPI</span><span class="token punctuation">(</span>channels<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>message <span class="token operator">===</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO\uFF1A\u63D0\u793A\u7528\u6237\u66F4\u65B0\u6210\u529F</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.6\uFF1A\u5728 <code>Home</code> \u7EC4\u4EF6\u7684 <code>addChannel</code> \u65B9\u6CD5\u4E2D\uFF0C\u8C03\u7528\u4E0A\u4E00\u6B65\u5C01\u88C5\u7684 <code>updateChannel</code> \u65B9\u6CD5</strong></li></ul><div class="language-js"><pre><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u65B0\u589E\u9891\u9053\uFF08\u5F62\u53C2 item \u5C31\u662F\u5F53\u524D\u7528\u6237\u70B9\u51FB\u7684\u9891\u9053\u4FE1\u606F\u5BF9\u8C61\uFF09</span>
  <span class="token comment">// \u683C\u5F0F\uFF1A{ id, name }</span>
  <span class="token function">addChannel</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u7528\u6237\u70B9\u51FB\u7684\u9891\u9053\uFF0C\u6DFB\u52A0\u5230\u201C\u7528\u6237\u9891\u9053\u201D\u5217\u8868\u4E2D</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userChannel<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token comment">// \u8C03\u7528 updateChannel \u65B9\u6CD5\uFF0C\u628A\u6700\u65B0\u7684\u9891\u9053\u5217\u8868\u6570\u636E\u63D0\u4EA4\u5230\u540E\u7AEF\u4FDD\u5B58</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.7\uFF1A\u63D0\u793A\u7528\u6237\u66F4\u65B0\u6210\u529F</strong></li></ul><div class="language-js"><pre><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u628A\u7528\u6237\u7684\u9891\u9053\u5217\u8868\u6570\u636E\u63D0\u4EA4\u5230\u540E\u7AEF\u4FDD\u5B58</span>
  <span class="token keyword">async</span> <span class="token function">updateChannel</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \u51C6\u5907\u8981\u63D0\u4EA4\u5230\u670D\u52A1\u5668\u7684\u6570\u636E</span>
    <span class="token keyword">const</span> channels <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userChannel
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">&#39;\u63A8\u8350&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u5C06\u201C\u63A8\u8350\u201D\u4ECE\u9891\u9053\u5217\u8868\u4E2D\u8FC7\u6EE4\u51FA\u53BB</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>               <span class="token comment">// \u8C03\u7528\u6570\u7EC4\u7684 map \u5FAA\u73AF\uFF0C\u6700\u7EC8\u8FD4\u56DE\u4E00\u4E2A\u5904\u7406\u597D\u7684\u65B0\u6570\u7EC4</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> item<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
          <span class="token literal-property property">seq</span><span class="token operator">:</span> index <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 2. \u8C03\u7528 API \u63A5\u53E3</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">updateUserChannelAPI</span><span class="token punctuation">(</span>channels<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>message <span class="token operator">===</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 3. \u901A\u8FC7 notify \u5F39\u6846\u63D0\u793A\u7528\u6237\u66F4\u65B0\u6210\u529F</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u66F4\u65B0\u6210\u529F&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
