import{_ as n,c as a,o as s,a as t}from"./app.e4ff3064.js";const m='{"title":"\u521B\u5EFA\u53D1\u5E03\u8BC4\u8BBA\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[],"relativePath":"middle/article-detail-pubcomment-create.md"}',p={},o=t(`<h1 id="\u521B\u5EFA\u53D1\u5E03\u8BC4\u8BBA\u7EC4\u4EF6" tabindex="-1">\u521B\u5EFA\u53D1\u5E03\u8BC4\u8BBA\u7EC4\u4EF6 <a class="header-anchor" href="#\u521B\u5EFA\u53D1\u5E03\u8BC4\u8BBA\u7EC4\u4EF6" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6E32\u67D3\u53D1\u5E03\u8BC4\u8BBA\u7684\u57FA\u7840\u7ED3\u6784</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>ArtCmt</code> \u7EC4\u4EF6\u4E2D\uFF0C\u548C\u201C\u8BC4\u8BBA\u5217\u8868\u201D\u5E73\u7EA7\uFF0C\u58F0\u660E\u201C\u8BC4\u8BBA\u533A\u57DF\u201D\u7684\u7ED3\u6784</li><li>\u7F8E\u5316\u8BC4\u8BBA\u533A\u57DF\u7684\u6837\u5F0F</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>ArtCmt</code> \u7EC4\u4EF6\u4E2D\uFF0C\u548C\u201C\u8BC4\u8BBA\u5217\u8868\u201D\u5E73\u7EA7\uFF0C\u58F0\u660E\u201C\u8BC4\u8BBA\u533A\u57DF\u201D\u7684\u7ED3\u6784</strong></li></ul><div class="language-html"><pre><code><span class="token comment">&lt;!-- \u5E95\u90E8\u6DFB\u52A0\u8BC4\u8BBA\u533A\u57DF - 1 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add-cmt-box van-hairline--top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>arrow-left<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$router.back()<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ipt-cmt-div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u53D1\u8868\u8BC4\u8BBA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-badge</span> <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>99<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>comment-o<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-badge</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>star-o<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>share-o<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u5E95\u90E8\u6DFB\u52A0\u8BC4\u8BBA\u533A\u57DF - 2 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cmt-box van-hairline--top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u53CB\u5584\u8BC4\u8BBA\u3001\u7406\u6027\u53D1\u8A00\u3001\u9633\u5149\u5FC3\u7075<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>\u53D1\u5E03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u7F8E\u5316\u8BC4\u8BBA\u533A\u57DF\u7684\u6837\u5F0F</strong></li></ul><div class="language-less"><pre><code><span class="token comment">// \u5916\u5C42\u5BB9\u5668</span>
<span class="token selector">.art-cmt-container-1</span> <span class="token punctuation">{</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 46px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.art-cmt-container-2</span> <span class="token punctuation">{</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53D1\u5E03\u8BC4\u8BBA\u7684\u76D2\u5B50 - 1</span>
<span class="token selector">.add-cmt-box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 46px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 46px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token selector">.ipt-cmt-div</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #efefef<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.icon-box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space<span class="token operator">-</span>evenly<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f2f3f5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53D1\u5E03\u8BC4\u8BBA\u7684\u76D2\u5B50 - 2</span>
<span class="token selector">.cmt-box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token selector">textarea</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 66%<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #efefef<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
    <span class="token property">resize</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.van-button</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></div>`,4),c=[o];function e(u,l,k,i,r,d){return s(),a("div",null,c)}var y=n(p,[["render",e]]);export{m as __pageData,y as default};
