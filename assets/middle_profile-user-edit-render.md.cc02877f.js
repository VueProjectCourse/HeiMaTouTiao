import{_ as n,c as s,o as a,a as t}from"./app.e4ff3064.js";const m='{"title":"\u6E32\u67D3\u7528\u6237\u7F16\u8F91\u9875\u9762","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BFC\u822A\u5230\u7F16\u8F91\u7528\u6237\u8D44\u6599\u9875\u9762","slug":"\u5BFC\u822A\u5230\u7F16\u8F91\u7528\u6237\u8D44\u6599\u9875\u9762"},{"level":2,"title":"\u8BF7\u6C42\u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F","slug":"\u8BF7\u6C42\u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F"},{"level":2,"title":"\u628A\u8BF7\u6C42\u5230\u7684\u6570\u636E\u8F6C\u5B58\u5230 state","slug":"\u628A\u8BF7\u6C42\u5230\u7684\u6570\u636E\u8F6C\u5B58\u5230-state"},{"level":2,"title":"\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 Actions \u65B9\u6CD5","slug":"\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528-actions-\u65B9\u6CD5"},{"level":2,"title":"\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 state\u4E2D\u7684\u6570\u636E","slug":"\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528-state\u4E2D\u7684\u6570\u636E"}],"relativePath":"middle/profile-user-edit-render.md"}',p={},o=t(`<h1 id="\u6E32\u67D3\u7528\u6237\u7F16\u8F91\u9875\u9762" tabindex="-1">\u6E32\u67D3\u7528\u6237\u7F16\u8F91\u9875\u9762 <a class="header-anchor" href="#\u6E32\u67D3\u7528\u6237\u7F16\u8F91\u9875\u9762" aria-hidden="true">#</a></h1><h2 id="\u5BFC\u822A\u5230\u7F16\u8F91\u7528\u6237\u8D44\u6599\u9875\u9762" tabindex="-1">\u5BFC\u822A\u5230\u7F16\u8F91\u7528\u6237\u8D44\u6599\u9875\u9762 <a class="header-anchor" href="#\u5BFC\u822A\u5230\u7F16\u8F91\u7528\u6237\u8D44\u6599\u9875\u9762" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F \u5BFC\u822A\u5230\u7F16\u8F91\u7528\u6237\u8D44\u6599\u9875\u9762</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>/src/views/</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>UserEdit</code> \u7EC4\u4EF6</li><li>\u5728\u8DEF\u7531\u6A21\u5757\u4E2D\u5BFC\u5165 <code>UserEdit</code> \u7EC4\u4EF6</li><li>\u5728\u8DEF\u7531\u6A21\u5757\u7684 <code>routes</code> \u6570\u7EC4\u4E2D\u58F0\u660E <code>UserEdit</code> \u7EC4\u4EF6\u7684\u8DEF\u7531\u89C4\u5219</li><li>\u5728 <code>User</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4E3A\u7F16\u8F91\u8D44\u6599\u7684 <code>&lt;van-cell&gt;</code> \u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\u5904\u7406\u51FD\u6570</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>/src/views/</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>UserEdit</code> \u7EC4\u4EF6</strong></li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user-edit-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Header \u533A\u57DF --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-nav-bar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7F16\u8F91\u8D44\u6599<span class="token punctuation">&quot;</span></span> <span class="token attr-name">left-arrow</span> <span class="token attr-name">@click-left</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$router.back()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fixed</span> <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- \u7528\u6237\u8D44\u6599 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell-group</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>action-card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5934\u50CF<span class="token punctuation">&quot;</span></span> <span class="token attr-name">is-link</span> <span class="token attr-name">center</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-image</span> <span class="token attr-name">round</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img01.yzcdn.cn/vant/cat.jpeg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-cell</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u540D\u79F0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">is-link</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5F20\u4E09<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u751F\u65E5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">is-link</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2012-12-12<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-cell-group</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;UserEdit&#39;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.user-edit-container</span> <span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 46px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.user-edit-container</span> <span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 46px<span class="token punctuation">;</span>
  <span class="token selector">.avatar</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728\u8DEF\u7531\u6A21\u5757\u4E2D\u5BFC\u5165 <code>UserEdit</code> \u7EC4\u4EF6</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> UserEdit <span class="token keyword">from</span> <span class="token string">&#39;@/views/UserEdit/UserEdit.vue&#39;</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u5728\u8DEF\u7531\u6A21\u5757\u7684 <code>routes</code> \u6570\u7EC4\u4E2D\u58F0\u660E <code>UserEdit</code> \u7EC4\u4EF6\u7684\u8DEF\u7531\u89C4\u5219</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// \u7F16\u8F91\u7528\u6237\u8D44\u6599\u7684\u8DEF\u7531\u89C4\u5219</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/edit&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserEdit<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user-edit&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><ul><li><strong>Step.4\uFF1A\u5728 <code>User</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4E3A\u7F16\u8F91\u8D44\u6599\u7684 <code>&lt;van-cell&gt;</code> \u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\u5904\u7406\u51FD\u6570</strong></li></ul><div class="language-html"><pre><code><span class="token comment">&lt;!-- \u901A\u8FC7\u547D\u540D\u8DEF\u7531\u5B9E\u73B0\u5BFC\u822A\u8DF3\u8F6C --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>edit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7F16\u8F91\u8D44\u6599<span class="token punctuation">&quot;</span></span> <span class="token attr-name">is-link</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$router.push({name: <span class="token punctuation">&#39;</span>user-edit<span class="token punctuation">&#39;</span>})<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div><h2 id="\u8BF7\u6C42\u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F" tabindex="-1">\u8BF7\u6C42\u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F <a class="header-anchor" href="#\u8BF7\u6C42\u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u8BF7\u6C42\u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>userAPI.js</code> \u6A21\u5757\u4E2D\uFF0C\u5B9A\u4E49\u8BF7\u6C42\u7528\u6237\u7B80\u4ECB\u4FE1\u606F\u7684\u63A5\u53E3</li><li>\u5728 <code>Vuex</code> \u6A21\u5757\u4E2D\uFF0C\u6309\u9700\u5BFC\u5165\u8BF7\u6C42\u7528\u6237\u7B80\u4ECB\u4FE1\u606F\u7684\u63A5\u53E3</li><li>\u5728 <code>vuex</code> \u6A21\u5757\u4E2D\u5B9A\u4E49\u540D\u4E3A <code>initUserProfile</code> \u7684\u5F02\u6B65\u65B9\u6CD5</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>userAPI.js</code> \u6A21\u5757\u4E2D\uFF0C\u5B9A\u4E49\u8BF7\u6C42\u7528\u6237\u7B80\u4ECB\u4FE1\u606F\u7684\u63A5\u53E3</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u8BF7\u6C42\u7528\u6237\u7B80\u4ECB\u4FE1\u606F\u7684 API</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getUserProfileAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/v1_0/user/profile&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728 <code>Vuex</code> \u6A21\u5757\u4E2D\uFF0C\u6309\u9700\u5BFC\u5165\u8BF7\u6C42\u7528\u6237\u7B80\u4ECB\u4FE1\u606F\u7684\u63A5\u53E3</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u6309\u9700\u5BFC\u5165 API \u65B9\u6CD5</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUserInfoAPI<span class="token punctuation">,</span> getUserProfileAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/userAPI.js&#39;</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u5728 <code>vuex</code> \u6A21\u5757\u4E2D\u5B9A\u4E49\u540D\u4E3A <code>initUserProfile</code> \u7684\u5F02\u6B65\u65B9\u6CD5</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u521D\u59CB\u5316\u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F</span>
<span class="token keyword">async</span> <span class="token function">initUserProfile</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8C03\u7528 API \u63A5\u53E3</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserProfileAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>message <span class="token operator">===</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO\uFF1A\u628A\u8BF7\u6C42\u5230\u7684\u6570\u636E\u8F6C\u4EA4\u7ED9 Mutation \u65B9\u6CD5   ctx.commit(&#39;Mutation\u65B9\u6CD5\u540D&#39;)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div><h2 id="\u628A\u8BF7\u6C42\u5230\u7684\u6570\u636E\u8F6C\u5B58\u5230-state" tabindex="-1">\u628A\u8BF7\u6C42\u5230\u7684\u6570\u636E\u8F6C\u5B58\u5230 state <a class="header-anchor" href="#\u628A\u8BF7\u6C42\u5230\u7684\u6570\u636E\u8F6C\u5B58\u5230-state" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u628A\u8BF7\u6C42\u5230\u7684\u6570\u636E\u8F6C\u5B58\u5230 state\u4E2D</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>vuex</code> \u6A21\u5757\u4E2D\uFF0C\u5728 <code>initState</code> \u5BF9\u8C61\u4E2D\u65B0\u589E <code>userProfile</code> \u6570\u636E\u8282\u70B9\uFF0C\u7528\u6765\u5168\u5C40\u5B58\u50A8\u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F</li><li>\u5728 <code>vuex</code> \u6A21\u5757\u4E2D\u7684 <code>mutations</code> \u8282\u70B9\u4E0B\uFF0C\u5B9A\u4E49\u540D\u4E3A <code>updateUserProfile</code> \u7684 <code>Mutation</code> \u65B9\u6CD5\uFF0C\u8D1F\u8D23\u628A <code>Action</code> \u8BF7\u6C42\u5230\u7684\u6570\u636E\u8F6C\u5B58\u5230 <code>state</code> \u4E2D</li><li>\u5728\u540D\u4E3A <code>initUserProfile</code> \u7684 <code>Action</code> \u65B9\u6CD5\u4E2D\uFF0C\u901A\u8FC7 <code>ctx.commit()</code> \u89E6\u53D1\u6307\u5B9A\u540D\u79F0\u7684 <code>Mutation</code> \u65B9\u6CD5</li><li>\u6539\u9020 <code>vuex</code> \u6A21\u5757\u4E2D\u7684 <code>cleanState</code> \u51FD\u6570\uFF0C\u5F53\u7528\u6237\u9000\u51FA\u767B\u5F55\u65F6\u6E05\u7A7A <code>state.userProfile</code></li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>vuex</code> \u6A21\u5757\u4E2D\uFF0C\u5728 <code>initState</code> \u5BF9\u8C61\u4E2D\u65B0\u589E <code>userProfile</code> \u6570\u636E\u8282\u70B9\uFF0C\u7528\u6765\u5168\u5C40\u5B58\u50A8\u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u521D\u59CB\u7684 state \u5BF9\u8C61</span>
<span class="token keyword">let</span> initState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// token \u7684\u4FE1\u606F\u5BF9\u8C61</span>
  <span class="token literal-property property">tokenInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7528\u6237\u7684\u57FA\u672C\u4FE1\u606F</span>
  <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F</span>
  <span class="token literal-property property">userProfile</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728 <code>vuex</code> \u6A21\u5757\u4E2D\u7684 <code>mutations</code> \u8282\u70B9\u4E0B\uFF0C\u5B9A\u4E49\u540D\u4E3A <code>updateUserProfile</code> \u7684 <code>Mutation</code> \u65B9\u6CD5\uFF0C\u8D1F\u8D23\u628A <code>Action</code> \u8BF7\u6C42\u5230\u7684\u6570\u636E\u8F6C\u5B58\u5230 <code>state</code> \u4E2D</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u66F4\u65B0 userProfile \u7684\u65B9\u6CD5</span>
<span class="token function">updateUserProfile</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  state<span class="token punctuation">.</span>userProfile <span class="token operator">=</span> payload
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;saveStateToStorage&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><ul><li><strong>Step.3: \u5728\u540D\u4E3A <code>initUserProfile</code> \u7684 <code>Action</code> \u65B9\u6CD5\u4E2D\uFF0C\u901A\u8FC7 <code>ctx.commit()</code> \u89E6\u53D1\u6307\u5B9A\u540D\u79F0\u7684 <code>Mutation</code> \u65B9\u6CD5</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u521D\u59CB\u5316\u7528\u6237\u7684\u7B80\u4ECB\u4FE1\u606F</span>
<span class="token keyword">async</span> <span class="token function">initUserProfile</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8C03\u7528 API \u63A5\u53E3</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> res <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserProfileAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>message <span class="token operator">===</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO\uFF1A\u628A\u8BF7\u6C42\u5230\u7684\u6570\u636E\u8F6C\u4EA4\u7ED9 Mutation \u65B9\u6CD5   ctx.commit(&#39;Mutation\u65B9\u6CD5\u540D&#39;)</span>
    ctx<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;updateUserProfile&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.4\uFF1A\u6539\u9020 <code>vuex</code> \u6A21\u5757\u4E2D\u7684 <code>cleanState</code> \u51FD\u6570\uFF0C\u5F53\u7528\u6237\u9000\u51FA\u767B\u5F55\u65F6\u6E05\u7A7A <code>state.userProfile</code></strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u6E05\u7A7A vuex \u548C\u672C\u5730\u7684\u6570\u636E</span>
<span class="token function">cleanState</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. \u6E05\u7A7A vuex \u4E2D\u7684\u6570\u636E</span>
  state<span class="token punctuation">.</span>tokenInfo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  state<span class="token punctuation">.</span>userInfo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  state<span class="token punctuation">.</span>userProfile <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 2. \u5C06\u6E05\u7A7A\u540E\u7684 state \u5B58\u50A8\u5230\u672C\u5730</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;saveStateToStorage&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div><h2 id="\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528-actions-\u65B9\u6CD5" tabindex="-1">\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 Actions \u65B9\u6CD5 <a class="header-anchor" href="#\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528-actions-\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 Actions\u65B9\u6CD5</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>UserEdit.vue</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4ECE <code>vuex</code> \u4E2D\u6309\u9700\u5BFC\u5165 <code>mapActions</code> \u8F85\u52A9\u51FD\u6570</li><li>\u5728 <code>UserEdit.vue</code> \u7EC4\u4EF6\u7684 <code>methods</code> \u8282\u70B9\u4E0B\u8C03\u7528 <code>mapActions</code> \u8F85\u52A9\u51FD\u6570\uFF0C\u5C06\u9700\u8981\u7684 <code>Action</code> \u65B9\u6CD5\u6620\u5C04\u5230\u5F53\u524D\u7EC4\u4EF6\u4E2D\u4F7F\u7528</li><li>\u5728 <code>UserEdit.vue</code> \u7EC4\u4EF6\u7684 <code>created</code> \u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\u8C03\u7528\u6620\u5C04\u8FC7\u6765\u7684 <code>initUserProfile</code> \u65B9\u6CD5</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>UserEdit.vue</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4ECE <code>vuex</code> \u4E2D\u6309\u9700\u5BFC\u5165 <code>mapActions</code> \u8F85\u52A9\u51FD\u6570</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u6309\u9700\u5BFC\u5165\u8F85\u52A9\u51FD\u6570</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapActions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728 <code>UserEdit.vue</code> \u7EC4\u4EF6\u7684 <code>methods</code> \u8282\u70B9\u4E0B\u8C03\u7528 <code>mapActions</code> \u8F85\u52A9\u51FD\u6570\uFF0C\u5C06\u9700\u8981\u7684 <code>Action</code> \u65B9\u6CD5\u6620\u5C04\u5230\u5F53\u524D\u7EC4\u4EF6\u4E2D\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;UserEdit&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4ECE vuex \u4E2D\u628A\u6307\u5B9A\u540D\u79F0\u7684 Action \u65B9\u6CD5\u6620\u5C04\u5230\u7EC4\u4EF6\u4E2D\u4F7F\u7528</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;initUserProfile&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u5728 <code>UserEdit.vue</code> \u7EC4\u4EF6\u7684 <code>created</code> \u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\u8C03\u7528\u6620\u5C04\u8FC7\u6765\u7684 <code>initUserProfile</code> \u65B9\u6CD5</strong></li></ul><div class="language-js"><pre><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initUserProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div><h2 id="\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528-state\u4E2D\u7684\u6570\u636E" tabindex="-1">\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 state\u4E2D\u7684\u6570\u636E <a class="header-anchor" href="#\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528-state\u4E2D\u7684\u6570\u636E" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u76EE\u6807</p><p>\u8FD9\u4E00\u5C0F\u8282\uFF0C\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528state\u4E2D\u7684\u6570\u636E</p></div><div class="warning custom-block"><p class="custom-block-title">\u6B65\u9AA4</p><ol><li>\u5728 <code>UserEdit.vue</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4ECE <code>vuex</code> \u4E2D\u6309\u9700\u5BFC\u5165 <code>mapState</code> \u8F85\u52A9\u51FD\u6570</li><li>\u5728 <code>UserEdit.vue</code> \u7EC4\u4EF6\u7684 <code>computed</code> \u8282\u70B9\u4E0B\u8C03\u7528 <code>mapState</code> \u8F85\u52A9\u51FD\u6570\uFF0C\u5C06\u9700\u8981\u7684 <code>State</code> \u6570\u636E\u6620\u5C04\u5230\u5F53\u524D\u7EC4\u4EF6\u4E2D\u4F7F\u7528</li><li>\u628A\u6620\u5C04\u8FC7\u6765\u7684\u6570\u636E\uFF0C\u6E32\u67D3\u5230 <code>UserEdit.vue</code> \u7EC4\u4EF6\u7684\u6A21\u677F\u7ED3\u6784\u4E2D</li></ol></div><div class="info custom-block"><p class="custom-block-title">\u4F53\u9A8C</p><ul><li><strong>Step.1\uFF1A\u5728 <code>UserEdit.vue</code> \u7EC4\u4EF6\u4E2D\uFF0C\u4ECE <code>vuex</code> \u4E2D\u6309\u9700\u5BFC\u5165 <code>mapState</code> \u8F85\u52A9\u51FD\u6570</strong></li></ul><div class="language-js"><pre><code><span class="token comment">// \u6309\u9700\u5BFC\u5165\u8F85\u52A9\u51FD\u6570</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapActions<span class="token punctuation">,</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
</code></pre></div><ul><li><strong>Step.2\uFF1A\u5728 <code>UserEdit.vue</code> \u7EC4\u4EF6\u7684 <code>computed</code> \u8282\u70B9\u4E0B\u8C03\u7528 <code>mapState</code> \u8F85\u52A9\u51FD\u6570\uFF0C\u5C06\u9700\u8981\u7684 <code>State</code> \u6570\u636E\u6620\u5C04\u5230\u5F53\u524D\u7EC4\u4EF6\u4E2D\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4ECE vuex \u4E2D\u628A\u6307\u5B9A\u540D\u79F0\u7684 State \u6570\u636E\u6620\u5C04\u5230\u7EC4\u4EF6\u4E2D\u4F7F\u7528</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;userProfile&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Step.3\uFF1A\u628A\u6620\u5C04\u8FC7\u6765\u7684\u6570\u636E\uFF0C\u6E32\u67D3\u5230 <code>UserEdit.vue</code> \u7EC4\u4EF6\u7684\u6A21\u677F\u7ED3\u6784\u4E2D</strong></li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user-edit-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Header \u533A\u57DF --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-nav-bar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7F16\u8F91\u8D44\u6599<span class="token punctuation">&quot;</span></span> <span class="token attr-name">left-arrow</span> <span class="token attr-name">@click-left</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$router.back()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fixed</span> <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- \u7528\u6237\u8D44\u6599 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell-group</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>action-card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5934\u50CF<span class="token punctuation">&quot;</span></span> <span class="token attr-name">is-link</span> <span class="token attr-name">center</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-image</span> <span class="token attr-name">round</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userProfile.photo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-cell</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u540D\u79F0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">is-link</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userProfile.name<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u751F\u65E5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">is-link</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userProfile.birthday<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-cell-group</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">\u603B\u7ED3</p><ul><li>\u3010\u91CD\u70B9\u3011</li><li>\u3010\u96BE\u70B9\u3011</li><li>\u3010\u6CE8\u610F\u70B9\u3011</li></ul></div>`,26),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{m as __pageData,v as default};
