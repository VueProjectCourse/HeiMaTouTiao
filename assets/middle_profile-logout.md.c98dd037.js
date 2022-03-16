import{_ as n,c as s,o as a,a as t}from"./app.e4ff3064.js";const g='{"title":"\u9000\u51FA\u767B\u5F55","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6E32\u67D3\u9000\u51FA\u767B\u5F55\u7684\u786E\u8BA4\u63D0\u793A\u6846","slug":"\u6E32\u67D3\u9000\u51FA\u767B\u5F55\u7684\u786E\u8BA4\u63D0\u793A\u6846"},{"level":2,"title":"\u5B9E\u73B0\u9000\u51FA\u767B\u5F55\u7684\u529F\u80FD","slug":"\u5B9E\u73B0\u9000\u51FA\u767B\u5F55\u7684\u529F\u80FD"}],"relativePath":"middle/profile-logout.md"}',o={},p=t(`<h1 id="\u9000\u51FA\u767B\u5F55" tabindex="-1">\u9000\u51FA\u767B\u5F55 <a class="header-anchor" href="#\u9000\u51FA\u767B\u5F55" aria-hidden="true">#</a></h1><h2 id="\u6E32\u67D3\u9000\u51FA\u767B\u5F55\u7684\u786E\u8BA4\u63D0\u793A\u6846" tabindex="-1">\u6E32\u67D3\u9000\u51FA\u767B\u5F55\u7684\u786E\u8BA4\u63D0\u793A\u6846 <a class="header-anchor" href="#\u6E32\u67D3\u9000\u51FA\u767B\u5F55\u7684\u786E\u8BA4\u63D0\u793A\u6846" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F \u6E32\u67D3\u9000\u51FA\u767B\u5F55\u7684\u786E\u8BA4\u63D0\u793A\u6846</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>User</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4E3A\u9000\u51FA\u767B\u5F55\u7684 <code>&lt;van-cell&gt;</code> \u7EC4\u4EF6\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6</li><li>\u5728 <code>User</code> \u7EC4\u4EF6\u7684 <code>methods</code> \u8282\u70B9\u4E0B\uFF0C\u5B9A\u4E49 <code>logout</code> \u65B9\u6CD5</li><li>\u57FA\u4E8E <code>async/await</code> \u7B80\u5316 <code>Promise</code> \u7684\u8C03\u7528</li><li>\u57FA\u4E8E <code>.catch()</code> \u65B9\u6CD5\u6355\u83B7 <code>Promise</code> \u4E2D\u4EA7\u751F\u7684\u9519\u8BEF</li><li>\u5224\u65AD\u7528\u6237\u70B9\u51FB\u4E86\u786E\u8BA4\u8FD8\u662F\u53D6\u6D88\u6309\u94AE</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>User</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4E3A\u9000\u51FA\u767B\u5F55\u7684 <code>&lt;van-cell&gt;</code> \u7EC4\u4EF6\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6</strong></li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning-o<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9000\u51FA\u767B\u5F55<span class="token punctuation">&quot;</span></span> <span class="token attr-name">is-link</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logout<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728 <code>User</code> \u7EC4\u4EF6\u7684 <code>methods</code> \u8282\u70B9\u4E0B\uFF0C\u5B9A\u4E49 <code>logout</code> \u65B9\u6CD5</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u70B9\u51FB\u4E86\u9000\u51FA\u767B\u5F55</span>
<span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C55\u793A\u786E\u8BA4\u7684\u63D0\u793A\u6846</span>
  <span class="token keyword">const</span> confirmResult <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$dialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u63D0\u793A&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u5417\uFF1F&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7ECF\u8FC7\u6253\u5370\u8F93\u51FA\uFF0C\u53D1\u73B0 confirmResult \u662F\u4E00\u4E2A Promise \u5BF9\u8C61</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>confirmResult<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u57FA\u4E8E <code>async/await</code> \u7B80\u5316 <code>Promise</code> \u7684\u8C03\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u70B9\u51FB\u4E86\u9000\u51FA\u767B\u5F55</span>
<span class="token keyword">async</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C55\u793A\u786E\u8BA4\u7684\u63D0\u793A\u6846</span>
  <span class="token keyword">const</span> confirmResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$dialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u63D0\u793A&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u5417\uFF1F&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7ECF\u8FC7\u6253\u5370\u8F93\u51FA\uFF0C\u53D1\u73B0 confirmResult \u662F\u4E00\u4E2A string \u5B57\u7B26\u4E32</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>confirmResult<span class="token punctuation">,</span> <span class="token keyword">typeof</span> confirmResult<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.4\uFF1A\u57FA\u4E8E <code>.catch()</code> \u65B9\u6CD5\u6355\u83B7 <code>Promise</code> \u4E2D\u4EA7\u751F\u7684\u9519\u8BEF</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u70B9\u51FB\u4E86\u9000\u51FA\u767B\u5F55</span>
<span class="token keyword">async</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C55\u793A\u786E\u8BA4\u7684\u63D0\u793A\u6846</span>
  <span class="token keyword">const</span> confirmResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$dialog
    <span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u63D0\u793A&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u5417\uFF1F&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// err \u662F\u9519\u8BEF\u7684\u7ED3\u679C</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token comment">// \u8FD9\u91CC\u628A err return \u7ED9\u4E86 confirmResult</span>
      <span class="token keyword">return</span> err
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7ECF\u8FC7\u6253\u5370\u8F93\u51FA\u53D1\u73B0\uFF1A</span>
  <span class="token comment">// \u70B9\u51FB\u201C\u786E\u8BA4\u201D\u6309\u94AE\u65F6\uFF0CconfirmResult \u7684\u503C\u4E3A\u5B57\u7B26\u4E32 confirm</span>
  <span class="token comment">// \u70B9\u51FB\u201C\u53D6\u6D88\u201D\u6309\u94AE\u65F6\uFF0CconfirmResult \u7684\u503C\u4E3A\u5B57\u7B26\u4E32 cancel</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>confirmResult<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.5\uFF1A\u5224\u65AD\u7528\u6237\u70B9\u51FB\u4E86\u786E\u8BA4\u8FD8\u662F\u53D6\u6D88\u6309\u94AE</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u70B9\u51FB\u4E86\u9000\u51FA\u767B\u5F55</span>
<span class="token keyword">async</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C55\u793A\u786E\u8BA4\u7684\u63D0\u793A\u6846</span>
  <span class="token keyword">const</span> confirmResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$dialog
    <span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u63D0\u793A&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u5417\uFF1F&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// err \u662F\u9519\u8BEF\u7684\u7ED3\u679C</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token comment">// \u8FD9\u91CC\u628A err return \u7ED9\u4E86 confirmResult</span>
      <span class="token keyword">return</span> err
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token number">2</span>
  <span class="token comment">// \u5982\u679C\u70B9\u51FB\u4E86\u53D6\u6D88\uFF0C\u5219\u4E0D\u6267\u884C\u540E\u7EED\u7684\u64CD\u4F5C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>confirmResult <span class="token operator">===</span> <span class="token string">&#39;cancel&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

  <span class="token comment">// TODO\uFF1A\u5B9E\u73B0\u9000\u51FA\u7684\u767B\u5F55\u64CD\u4F5C\uFF1A</span>
  <span class="token comment">// 1. \u6E05\u7A7A vuex \u4E2D\u7684\u6570\u636E</span>
  <span class="token comment">// 2. \u6E05\u7A7A\u672C\u5730\u7684\u6570\u636E</span>
  <span class="token comment">// 3. \u8DF3\u8F6C\u5230\u767B\u5F55\u9875</span>
<span class="token punctuation">}</span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div><h2 id="\u5B9E\u73B0\u9000\u51FA\u767B\u5F55\u7684\u529F\u80FD" tabindex="-1">\u5B9E\u73B0\u9000\u51FA\u767B\u5F55\u7684\u529F\u80FD <a class="header-anchor" href="#\u5B9E\u73B0\u9000\u51FA\u767B\u5F55\u7684\u529F\u80FD" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F \u5B9E\u73B0\u9000\u51FA\u767B\u5F55\u7684\u529F\u80FD</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>vuex</code> \u4E2D\u5B9A\u4E49\u540D\u4E3A <code>cleanState</code> \u7684\u540C\u6B65\u65B9\u6CD5</li><li>\u5728 <code>User</code> \u7EC4\u4EF6\u4E2D\u6309\u9700\u5BFC\u5165 <code>mapMutations</code> \u8F85\u52A9\u51FD\u6570</li><li>\u8C03\u7528 <code>mapMutations</code> \u8F85\u52A9\u51FD\u6570\uFF0C\u628A <code>cleanState</code>\u6620\u5C04\u5230<code>User</code>\u7EC4\u4EF6\u4E2D</li><li>\u5728 <code>User</code> \u7EC4\u4EF6\u7684 <code>logout</code> \u65B9\u6CD5\u4E2D\uFF0C\u8C03\u7528\u6620\u5C04\u8FC7\u6765\u7684\u65B9\u6CD5\uFF0C\u5E76\u8DF3\u8F6C\u5230\u767B\u5F55\u9875</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>vuex</code> \u4E2D\u5B9A\u4E49\u540D\u4E3A <code>cleanState</code> \u7684\u540C\u6B65\u65B9\u6CD5</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u6E05\u7A7A vuex \u548C\u672C\u5730\u7684\u6570\u636E</span>
<span class="token function">cleanState</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. \u6E05\u7A7A vuex \u4E2D\u7684\u6570\u636E</span>
  state<span class="token punctuation">.</span>tokenInfo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  state<span class="token punctuation">.</span>userInfo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 2. \u5C06\u6E05\u7A7A\u540E\u7684 state \u5B58\u50A8\u5230\u672C\u5730</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;saveStateToStorage&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728 <code>User</code> \u7EC4\u4EF6\u4E2D\u6309\u9700\u5BFC\u5165 <code>mapMutations</code> \u8F85\u52A9\u51FD\u6570</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u6309\u9700\u5BFC\u5165\u8F85\u52A9\u51FD\u6570</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapActions<span class="token punctuation">,</span> mapState<span class="token punctuation">,</span> mapMutations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u8C03\u7528 <code>mapMutations</code> \u8F85\u52A9\u51FD\u6570\uFF0C\u628A <code>cleanState</code>\u6620\u5C04\u5230<code>User</code>\u7EC4\u4EF6\u4E2D</strong></li></ul><div class="language-js"><pre><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;cleanState&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.4\uFF1A\u5728 <code>User</code> \u7EC4\u4EF6\u7684 <code>logout</code> \u65B9\u6CD5\u4E2D\uFF0C\u8C03\u7528\u6620\u5C04\u8FC7\u6765\u7684\u65B9\u6CD5\uFF0C\u5E76\u8DF3\u8F6C\u5230\u767B\u5F55\u9875</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u70B9\u51FB\u4E86\u9000\u51FA\u767B\u5F55</span>
<span class="token keyword">async</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C55\u793A\u786E\u8BA4\u7684\u63D0\u793A\u6846</span>
  <span class="token keyword">const</span> confirmResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$dialog
    <span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u63D0\u793A&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u786E\u8BA4\u9000\u51FA\u767B\u5F55\u5417\uFF1F&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// err \u662F\u9519\u8BEF\u7684\u7ED3\u679C</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token comment">// \u8FD9\u91CC\u628A err return \u7ED9\u4E86 confirmResult</span>
      <span class="token keyword">return</span> err
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u5982\u679C\u70B9\u51FB\u4E86\u53D6\u6D88\uFF0C\u5219\u4E0D\u6267\u884C\u540E\u7EED\u7684\u64CD\u4F5C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>confirmResult <span class="token operator">===</span> <span class="token string">&#39;cancel&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

  <span class="token comment">// TODO\uFF1A\u5B9E\u73B0\u9000\u51FA\u7684\u767B\u5F55\u64CD\u4F5C\uFF1A</span>
  <span class="token comment">// 1. \u6E05\u7A7A vuex \u4E2D\u7684\u6570\u636E</span>
  <span class="token comment">// 2. \u6E05\u7A7A\u672C\u5730\u7684\u6570\u636E</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cleanState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 3. \u8DF3\u8F6C\u5230\u767B\u5F55\u9875</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,11),e=[p];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var f=n(o,[["render",c]]);export{g as __pageData,f as default};
