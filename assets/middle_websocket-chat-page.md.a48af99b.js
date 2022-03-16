import{_ as n,c as s,o as a,a as t}from"./app.e4ff3064.js";const m='{"title":"\u521B\u5EFA\u804A\u5929\u7EC4\u4EF6\u9875\u9762","description":"","frontmatter":{},"headers":[],"relativePath":"middle/websocket-chat-page.md"}',p={},o=t(`<h1 id="\u521B\u5EFA\u804A\u5929\u7EC4\u4EF6\u9875\u9762" tabindex="-1">\u521B\u5EFA\u804A\u5929\u7EC4\u4EF6\u9875\u9762 <a class="header-anchor" href="#\u521B\u5EFA\u804A\u5929\u7EC4\u4EF6\u9875\u9762" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6E32\u67D3\u5C0F\u601D\u540C\u5B66\u7684\u9875\u9762</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>/src/views</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>Chat</code> \u7EC4\u4EF6</li><li>\u5728 \u8DEF\u7531\u6A21\u5757\u4E2D\uFF0C\u5BFC\u5165 <code>Chat</code> \u7EC4\u4EF6\u5E76\u58F0\u660E\u8DEF\u7531\u89C4\u5219</li><li>\u5728 <code>User</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4E3A\u5C0F\u601D\u540C\u5B66\u5BF9\u5E94\u7684 <code>van-cell</code>\u6DFB\u52A0 <code>to</code> \u5C5E</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>/src/views</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>Chat</code> \u7EC4\u4EF6</strong></li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u56FA\u5B9A\u5BFC\u822A --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-nav-bar</span> <span class="token attr-name">fixed</span> <span class="token attr-name">left-arrow</span> <span class="token attr-name">@click-left</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$router.back()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5C0F\u601D\u540C\u5B66<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-nav-bar</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- \u804A\u5929\u4E3B\u4F53\u533A\u57DF --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u5DE6\u4FA7\u662F\u673A\u5668\u4EBA\u5C0F\u601D --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-item left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-image</span> <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cover<span class="token punctuation">&quot;</span></span> <span class="token attr-name">round</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img.yzcdn.cn/vant/cat.jpeg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-pao<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hi\uFF0C\u4F60\u597D\uFF01\u6211\u662F\u5C0F\u601D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- \u53F3\u4FA7\u662F\u5F53\u524D\u7528\u6237 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-item right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-pao<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u7F16\u7A0B\u5C0F\u738B\u5B50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-image</span> <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cover<span class="token punctuation">&quot;</span></span> <span class="token attr-name">round</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img.yzcdn.cn/vant/cat.jpeg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- \u5BF9\u8BDD\u533A\u57DF --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reply-container van-hairline--top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-field</span> <span class="token attr-name">v-model.trim</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>word<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF4\u70B9\u4EC0\u4E48...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#button</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>send()<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>#999</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-field</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Chat&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7528\u6237\u8F93\u5165\u7684\u804A\u5929\u5185\u5BB9</span>
      <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u63D0\u4EA4\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5904\u7406\u51FD\u6570</span>
    <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u8F93\u5165\u7684\u804A\u5929\u5185\u5BB9\u4E3A\u7A7A\uFF0C\u5219 return \u51FA\u53BB</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>word<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token comment">// \u6253\u5370\u8F93\u51FA\u7528\u6237\u586B\u5199\u7684\u804A\u5929\u5185\u5BB9</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>word<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 46px 0 50px 0<span class="token punctuation">;</span>
  <span class="token selector">.chat-list</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
    <span class="token selector">.chat-item</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token selector">.van-image</span> <span class="token punctuation">{</span>
        <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.chat-pao</span> <span class="token punctuation">{</span>
        <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">min-width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
        <span class="token property">max-width</span><span class="token punctuation">:</span> 70%<span class="token punctuation">;</span>
        <span class="token property">min-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 38px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 0.5px solid #c2d9ea<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #e0effb<span class="token punctuation">;</span>
        <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
        <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
          <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
          <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
          <span class="token property">top</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
          <span class="token property">border-top</span><span class="token punctuation">:</span> 0.5px solid #c2d9ea<span class="token punctuation">;</span>
          <span class="token property">border-right</span><span class="token punctuation">:</span> 0.5px solid #c2d9ea<span class="token punctuation">;</span>
          <span class="token property">background</span><span class="token punctuation">:</span> #e0effb<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.chat-item.right</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token selector">.chat-pao</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
      <span class="token property">right</span><span class="token punctuation">:</span> -6px<span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.chat-item.left</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token selector">.chat-pao</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
      <span class="token property">left</span><span class="token punctuation">:</span> -5px<span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-135deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.reply-container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 9999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728 \u8DEF\u7531\u6A21\u5757\u4E2D\uFF0C\u5BFC\u5165 <code>Chat</code> \u7EC4\u4EF6\u5E76\u58F0\u660E\u8DEF\u7531\u89C4\u5219</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u5BFC\u5165\u5C0F\u601D\u540C\u5B66\u7684\u7EC4\u4EF6\u9875\u9762</span>
<span class="token keyword">import</span> Chat <span class="token keyword">from</span> <span class="token string">&#39;@/views/Chat/Chat.vue&#39;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// \u5C0F\u601D\u804A\u5929\u7684\u8DEF\u7531\u89C4\u5219</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/chat&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Chat<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;chat&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u5728 <code>User</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4E3A\u5C0F\u601D\u540C\u5B66\u5BF9\u5E94\u7684 <code>van-cell</code>\u6DFB\u52A0 <code>to</code> \u5C5E</strong></li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-o<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5C0F\u601D\u540C\u5B66<span class="token punctuation">&quot;</span></span> <span class="token attr-name">is-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/chat<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,5),c=[o];function e(l,u,k,i,r,g){return a(),s("div",null,c)}var y=n(p,[["render",e]]);export{m as __pageData,y as default};
