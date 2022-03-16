import{_ as s,c as n,o as e,a}from"./app.e4ff3064.js";const _='{"title":"\u914D\u7F6E\u5C4F\u5E55\u9002\u914D","description":"","frontmatter":{},"headers":[],"relativePath":"early/deploy-screen-adaptation.md"}',o={},t=a(`<h1 id="\u914D\u7F6E\u5C4F\u5E55\u9002\u914D" tabindex="-1">\u914D\u7F6E\u5C4F\u5E55\u9002\u914D <a class="header-anchor" href="#\u914D\u7F6E\u5C4F\u5E55\u9002\u914D" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F \u4F7F\u7528\u63D2\u4EF6\u5E2E\u6211\u4EEC\u628A\u5E03\u5C40\u65F6\u5199\u7684\u50CF\u7D20(px)\u5355\u4F4D\u81EA\u52A8\u8F6C\u6362\u4E3A<code>rem</code>\u5355\u4F4D</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5B89\u88C5\u63D2\u4EF6 <code>postcss-pxtorem</code> \u548C <code>lib-flexible</code></li><li>\u914D\u7F6E <code>postcss-pxtorem</code></li><li>\u5728\u5165\u53E3\u6587\u4EF6\u4E2D\u5BFC\u5165 <code>amfe-flexible</code></li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><p><strong>Step. 1\uFF1A\u5B89\u88C5\u63D2\u4EF6 <code>postcss-pxtorem</code> \u548C <code>lib-flexible</code></strong></p><div class="language-bash"><pre><code><span class="token comment"># postcss-pxtorem \u662F\u4E00\u6B3E PostCSS \u63D2\u4EF6\uFF0C\u7528\u4E8E\u5C06 px \u5355\u4F4D\u8F6C\u5316\u4E3A rem \u5355\u4F4D</span>
<span class="token function">npm</span> i postcss-pxtorem@5.1.1 -D
<span class="token comment"># lib-flexible \u7528\u4E8E\u52A8\u6001\u8BBE\u7F6E rem \u57FA\u51C6\u503C</span>
<span class="token function">npm</span> i amfe-flexible@2.2.1 -S
</code></pre></div></li><li><p><strong>Step. 2\uFF1A\u5728<code>postcss.config.js</code>\u914D\u7F6E <code>postcss-pxtorem</code></strong></p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;postcss-pxtorem&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rootValue</span><span class="token operator">:</span> <span class="token number">37.5</span><span class="token punctuation">,</span> <span class="token comment">// \u6839\u8282\u70B9\u7684 font-size \u503C</span>
      <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u8981\u5904\u7406\u7684\u5C5E\u6027\u5217\u8868\uFF0C* \u4EE3\u8868\u6240\u6709\u5C5E\u6027</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p><strong>Step. 3\uFF1A\u5728\u5165\u53E3\u6587\u4EF6\u4E2D\u5BFC\u5165 <code>amfe-flexible</code></strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;amfe-flexible&#39;</span>
</code></pre></div></li></ul></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),p=[t];function c(l,i,r,d,u,m){return e(),n("div",null,p)}var f=s(o,[["render",c]]);export{_ as __pageData,f as default};
