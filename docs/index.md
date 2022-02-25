---
page: true
---

<section id="hero">
  <h1 class="tagline">
    <span class="accent">黑马头条</span><br> Vue 2.x 移动端项目
  </h1>
  <p class="description">
    一款用于构建 Web 界面，易学易用，性能出色且功能丰富的框架。
  </p>
  <p class="actions">
    <a class="get-started" href="/initialization/project-create">快速开始 <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg></a>
    <a class="setup" href="/syntax/quick-start.html">安装</a>
  </p>
</section>

<section id="highlights" class="vt-box-container">
  <div class="vt-box">
    <h2>保持分享</h2>
    <p>分享知识是一种美德，如果我们每个人都把知识分享给这个社会，那么这个社会将会变得越来越好。</p>
  </div>
  <div class="vt-box">
    <h2>保持谦虚</h2>
    <p>真正的成功者，尽管胸怀火一般的热情和斗志，但他们同时也是谦虚的人、谨慎的人。</p>
  </div>
  <div class="vt-box">
    <h2>保持好奇</h2>
    <p>如果没有好奇心和纯粹的求知欲为动力，你就不可能产生那些对人类和社会具有巨大价值的贡献。</p>
  </div>
</section>

<style scoped>
section {
  padding: 42px 32px;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent, .dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  font-weight: 600;
  background-color: var(--vt-c-green);
  color: #fff;
  margin-right: 18px
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.dark .actions .get-started {
  color: var(--vt-c-indigo);
}

.actions .get-started:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.dark .actions .get-started:hover {
  background-color: var(--vt-c-green-light);
}

.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

body #hero {
  padding: 96px 32px;
  text-align: center;
}

body #special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  text-align: center;
}

body #special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  margin: 0 24px;
}

body #special-sponsor img {
  display: inline-block;
  vertical-align: middle;
  height: 36px;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

body #highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

body #highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

body #highlights p {
  font-weight: 400;
  font-size: 15px;
}

body #highlights .vt-box {
  background-color: transparent;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor img {
    display: block;
    margin: 2px auto 1px;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
