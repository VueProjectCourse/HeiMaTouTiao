import{_ as n,c as s,o as a,a as e}from"./app.e4ff3064.js";const v='{"title":"\u9879\u76EE\u521B\u5EFA","description":"","frontmatter":{},"headers":[],"relativePath":"early/initialization.md"}',t={},o=e(`<h1 id="\u9879\u76EE\u521B\u5EFA" tabindex="-1">\u9879\u76EE\u521B\u5EFA <a class="header-anchor" href="#\u9879\u76EE\u521B\u5EFA" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u4F7F\u7528\u811A\u624B\u67B6 Vue CLI\u6765\u521B\u5EFA\u9879\u76EE</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u4F7F\u7528\u811A\u624B\u67B6\u547D\u4EE4\u521B\u5EFA\u9879\u76EE</li><li>\u9009\u53D6\u4E00\u4E2A preset</li><li>\u9009\u53D6\u9879\u76EE\u6240\u9700\u7684\u7279\u6027</li><li>\u9009\u53D6Vue\u7684\u7248\u672C</li><li>\u9009\u53D6\u662F\u5426\u4F7F\u7528 History\u6A21\u5F0F\u7684\u8DEF\u7531</li><li>\u9009\u53D6\u4EE3\u7801\u89C4\u8303\u6216\u683C\u5F0F\u5316\u9009\u9879</li><li>\u9009\u53D6\u989D\u5916\u7684\u89C4\u8303\u63D0\u793A\u9009\u9879</li><li>\u9009\u53D6\u914D\u7F6E\u6587\u4EF6\u7684\u4F4D\u7F6E</li><li>\u662F\u5426\u4FDD\u5B58\u8FD9\u6B21\u9009\u62E9\u4F5C\u4E3A\u4E0B\u6B21\u521B\u5EFA\u9879\u76EE\u7684preset</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u4F7F\u7528\u811A\u624B\u67B6\u547D\u4EE4\u521B\u5EFA\u9879\u76EE</strong></li></ul><div class="language-bash"><pre><code>vue create hei-ma-tou-tiao
</code></pre></div><ul><li><strong>Step.2\uFF1A\u9009\u53D6\u4E00\u4E2A preset</strong></li></ul><div class="language-bash"><pre><code>Please pick a preset: 
  Default <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">2</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span> 
  Default <span class="token punctuation">(</span>Vue <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">3</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span> 
\u276F Manually <span class="token keyword">select</span> features 
</code></pre></div><ul><li><strong>Step.3\uFF1A\u9009\u53D6\u9879\u76EE\u6240\u9700\u7684\u7279\u6027</strong></li></ul><div class="language-bash"><pre><code>Check the features needed <span class="token keyword">for</span> your project: 
 \u25C9 Choose Vue version
 \u25C9 Babel
 \u25EF TypeScript
 \u25EF Progressive Web App <span class="token punctuation">(</span>PWA<span class="token punctuation">)</span> Support
 \u25C9 Router
\u276F\u25C9 Vuex
 \u25EF CSS Pre-processors
 \u25C9 Linter / Formatter
 \u25EF Unit Testing
 \u25EF E2E Testing
</code></pre></div><ul><li><strong>Step.4\uFF1A\u9009\u53D6Vue\u7684\u7248\u672C</strong></li></ul><div class="language-bash"><pre><code>Choose a version of Vue.js that you want to start the project with <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F <span class="token number">2</span>.x 
  <span class="token number">3</span>.x 
</code></pre></div><ul><li><strong>Step.5\uFF1A\u9009\u53D6\u662F\u5426\u4F7F\u7528 History\u6A21\u5F0F\u7684\u8DEF\u7531</strong></li></ul><div class="language-bash"><pre><code>Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> <span class="token punctuation">(</span>Y/n<span class="token punctuation">)</span> n
</code></pre></div><ul><li><strong>Step.6\uFF1A\u9009\u53D6\u4EE3\u7801\u89C4\u8303\u6216\u683C\u5F0F\u5316\u9009\u9879</strong></li></ul><div class="language-bash"><pre><code>Pick a linter / formatter config: 
\u276F ESLint with error prevention only 
  ESLint + Airbnb config 
  ESLint + Standard config 
  ESLint + Prettier 
</code></pre></div><ul><li><strong>Step.7\uFF1A\u9009\u53D6\u989D\u5916\u7684\u89C4\u8303\u63D0\u793A\u9009\u9879</strong></li></ul><div class="language-bash"><pre><code>Pick additional lint features: <span class="token punctuation">(</span>Press <span class="token operator">&lt;</span>space<span class="token operator">&gt;</span> to select, <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> to toggle all, <span class="token operator">&lt;</span>i<span class="token operator">&gt;</span> to invert selection<span class="token punctuation">)</span>
\u276F\u25C9 Lint on save
 \u25EF Lint and fix on commit
</code></pre></div><ul><li><strong>Step.8\uFF1A\u9009\u53D6\u914D\u7F6E\u6587\u4EF6\u7684\u4F4D\u7F6E</strong></li></ul><div class="language-bash"><pre><code>Where <span class="token keyword">do</span> you prefer placing config <span class="token keyword">for</span> Babel, ESLint, etc.? <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
\u276F In dedicated config files 
  In package.json 
</code></pre></div><ul><li><strong>Step.9\uFF1A\u662F\u5426\u4FDD\u5B58\u8FD9\u6B21\u9009\u62E9\u4F5C\u4E3A\u4E0B\u6B21\u521B\u5EFA\u9879\u76EE\u7684preset</strong></li></ul><div class="language-bash"><pre><code>Save this as a preset <span class="token keyword">for</span> future projects? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> N
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),p=[o];function l(i,c,r,u,d,k){return a(),s("div",null,p)}var b=n(t,[["render",l]]);export{v as __pageData,b as default};
