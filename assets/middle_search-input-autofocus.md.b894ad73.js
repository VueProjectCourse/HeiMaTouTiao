import{_ as s,c as n,o as a,a as t}from"./app.e4ff3064.js";const m='{"title":"\u641C\u7D22\u6846\u81EA\u52A8\u805A\u7126","description":"","frontmatter":{},"headers":[],"relativePath":"middle/search-input-autofocus.md"}',o={},c=t(`<h1 id="\u641C\u7D22\u6846\u81EA\u52A8\u805A\u7126" tabindex="-1">\u641C\u7D22\u6846\u81EA\u52A8\u805A\u7126 <a class="header-anchor" href="#\u641C\u7D22\u6846\u81EA\u52A8\u805A\u7126" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u8BA9\u641C\u7D22\u6846\u5728\u9875\u9762\u6253\u5F00\u7684\u65F6\u5019\u81EA\u52A8\u83B7\u5F97\u7126\u70B9</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>Search.vue</code> \u7EC4\u4EF6\u7684 <code>mounted</code> \u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\uFF0C\u5E76\u901A\u8FC7 <code>DOM</code> \u64CD\u4F5C\u67E5\u627E\u5230 <code>input</code> \u8F93\u5165\u6846\uFF0C\u4F7F\u5176\u83B7\u5F97\u7126</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>Search.vue</code> \u7EC4\u4EF6\u7684 <code>mounted</code> \u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\uFF0C\u5E76\u901A\u8FC7 <code>DOM</code> \u64CD\u4F5C\u67E5\u627E\u5230 <code>input</code> \u8F93\u5165\u6846\uFF0C\u4F7F\u5176\u83B7\u5F97\u7126</strong></li></ul><div class="language-js"><pre><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ipt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input[type=search]&#39;</span><span class="token punctuation">)</span>
  ipt <span class="token operator">&amp;&amp;</span> ipt<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li><li>\u3010\u9762\u8BD5\u9898\u3011</li></ul></div>`,5),e=[c];function p(l,i,u,d,r,k){return a(),n("div",null,e)}var h=s(o,[["render",p]]);export{m as __pageData,h as default};