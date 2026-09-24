const OFFICIAL_JOB_LIST_URL =
  "https://hr.g-bits.com/web/index.html#/post-web/post-list?postTypes=%E6%B8%B8%E6%88%8F%E7%AD%96%E5%88%92%E7%B1%BB";
const GBITS_SITE_URL = "https://www.g-bits.com/zh/";

const projects = [
  {
    id: "wand-sword-legend",
    name: "《杖剑传说》",
    stage: "已上线运营 · 厦门",
    roles: [
      ["数值策划", "厦门", "玩法、系统与战斗的数值体验设计和迭代"],
      ["战斗策划", "厦门", "战斗逻辑、技能机制与表现、技能强度的设计和迭代"],
    ],
    tags: ["异世界幻想", "放置 MMORPG", "数值", "战斗"],
    oneLiner: "轻松放置 × 自动战棋 × 地图探索 × 轻社交的异世界冒险 MMORPG。",
    description:
      "它把日常时间成本交给自动战斗和离线挂机，把策略空间留给技能标签、攻击范围和构筑选择。项目早期用小步快跑的 Demo 先验证战斗，再验证探索与社交，策划会持续把真实反馈变成下一轮设计。",
    plannerTitle: "策划在这里解决什么问题？",
    plannerPoints: [
      "数值策划：让成长、装备和战斗投入转化为可感知的正向反馈，并保持流派平衡。",
      "战斗策划：把规则、空间表现、技能标签和强度组织成玩家愿意研究的战斗体系。",
      "用 Demo、测试、复盘快速验证想法，再和程序、美术、测试、运营一起推到上线。",
    ],
    fitHint: "适合喜欢拆解 RPG、策略、卡牌或 SLG 机制，并愿意持续验证设计的人。",
    frame: "assets/frame-wand.webp",
    art: "assets/wand.webp",
    siteUrl: "https://zjcs.leiting.com/?id=M503835",
    screen: { left: 22, top: 18, width: 56, height: 42, radius: 8 },
  },
  {
    id: "daoyou-dig-treasure",
    name: "《道友来挖宝》",
    stage: "已上线运营 · 厦门",
    roles: [["游戏策划", "厦门", "线上版本的玩法、活动、养成及资料片设计"]],
    tags: ["问道 IP", "回合制 MMO", "小游戏", "玩法活动"],
    oneLiner: "《问道》IP 衍生的回合制 MMO 小游戏，挖宝爽感 × 轻量化放置。",
    description:
      "核心循环围绕“挖宝获得奖励 → 提升战力 → 继续挖宝”，用自动挂机适配小游戏用户碎片化的游玩习惯，同时保留回合制策略和 IP 世界观。",
    plannerTitle: "策划在这里解决什么问题？",
    plannerPoints: [
      "把藏宝图、守护、唤灵、古宝和坐骑组织成高频但不疲劳的挖宝反馈。",
      "围绕轻量化用户设计玩法、活动、养成和赛季内容，让玩家随玩随停也能持续成长。",
      "在精干团队里，从文档、配置、协作、验收一路推进到上线验证。",
    ],
    fitHint: "适合在意玩家为什么投入或流失，也愿意处理文档、协作和验收细节的人。",
    frame: "assets/frame-daoyou.webp",
    art: "assets/daoyou.webp",
    siteUrl: "https://acts.leiting.com/game/common/invite/imini_dylwb_1",
    screen: { left: 21, top: 27, width: 58, height: 43, radius: 10 },
  },
  {
    id: "ask-sword-longevity",
    name: "《问剑长生》",
    stage: "已上线运营 · 深圳",
    roles: [["游戏策划", "深圳", "玩法机制、战斗逻辑、技能机制与表现、技能强度的设计和迭代"]],
    tags: ["修仙", "轻社交", "3D 御剑", "战斗机制"],
    oneLiner: "真 3D 御剑放置修仙手游，轻松成长 × 轻社交。",
    description:
      "玩家可以在真 3D 场景里自由御剑、空中斗法，也可以选择独证大道或加入道侣、宗门。离线挂机不亏进度、流派一键重置，让修仙是自由选路而不是单行道。",
    plannerTitle: "策划在这里解决什么问题？",
    plannerPoints: [
      "把御剑飞行、神通法宝和空中战斗做成区别于传统 2D 修仙的空间体验。",
      "设计可重置、可试错的流派和成长关系，降低玩家探索新玩法的成本。",
      "在“玩家需求 → 玩法尝试 → 测试反馈 → 迭代”循环里持续校准战斗与社交。",
    ],
    fitHint: "适合对 MMO、修仙或社交体验有长期兴趣，愿意用玩家需求校准表达的人。",
    interview: {
      title: "问剑长生 · 游戏策划校招生",
      answers: [
        ["为什么选择吉比特 / 这个项目？", "我是奥比岛和问道的老玩家，本来就喜欢吉比特。最开始投递的是 MMO 策划，因为玩过不少 MMO，实习时也在大型传统 MMO 项目中积累过经验；面试时才知道项目是问剑，而修仙题材也正是我感兴趣的方向。"],
        ["入职后的最大收获？", "项目人手不算充足，入职后很快就能直接接触项目、推进工作，算是经历更多、经验更多。团队氛围很好，导师和前辈有问必答，也会主动关心工作和生活，让我在这里幸福地学到真东西。"],
      ],
    },
    frame: "assets/frame-wenjian.webp",
    art: "assets/wenjian.webp",
    siteUrl: "https://jian.leiting.com",
    screen: { left: 26, top: 24.5, width: 48, height: 41, radius: 6 },
  },
  {
    id: "a-thought-free",
    name: "《一念逍遥》",
    stage: "稳定运营 5 年 · 深圳",
    roles: [["游戏策划", "深圳", "系统、数值、玩法的设计与上线迭代"]],
    tags: ["水墨国风", "放置修仙", "长线成长", "系统体验"],
    oneLiner: "水墨国风放置修仙手游，轻松成长 × 题材代入感。",
    description:
      "项目用放置降低日常负担，同时保留修炼、突破、秘境、宗门和多人副本的体验。策划要让玩家感到“真的在修仙”，也要让长期版本持续有新鲜感。",
    plannerTitle: "策划在这里解决什么问题？",
    plannerPoints: [
      "把修炼、境界、神通、功法等题材概念转成玩家能感知的成长反馈。",
      "让放置、社交、探索和限时活动彼此支撑，而不是互相消耗玩家时间。",
      "结合玩家行为、数据和反馈，持续打磨系统、数值、玩法与长线节奏。",
    ],
    fitHint: "适合对体验本质有好奇心，既能理解不同玩家，也愿意用客观结果验证直觉的人。",
    frame: "assets/frame-yinian.webp",
    art: "assets/yinian.webp",
    siteUrl: "https://xian.leiting.com",
    screen: { left: 26.5, top: 25, width: 47, height: 43.5, radius: 7 },
  },
  {
    id: "wen-dao-mobile",
    name: "《问道》手游",
    stage: "稳定运营 10 年 · 厦门",
    roles: [["游戏策划", "厦门", "版本内容的玩法设定与体验落地、玩家反馈跟进与优化"]],
    tags: ["传统国风", "回合制 MMO", "长线运营", "版本内容"],
    oneLiner: "经典国风回合制 MMORPG，深度社交 × 长线养成。",
    description:
      "依托《问道》端游十余年积累，项目保留五行、刷道、杀星、宠物、装备和帮战等核心循环，再根据手游节奏持续适配。新服、周年和全民争霸赛让版本内容成为玩家定期回流的理由。",
    plannerTitle: "策划在这里解决什么问题？",
    plannerPoints: [
      "在经典玩法和玩家归属感的基础上，设计能被新老玩家理解的版本内容。",
      "维护深度社交与玩家社群，把活动、规则和长期目标连成可持续的体验。",
      "跟进玩家反馈，在成熟框架里寻找创新点，理解一款产品如何长期运营。",
    ],
    fitHint: "适合热爱传统回合制、对国风文化有兴趣，并想理解长线产品如何持续迭代的人。",
    frame: "assets/frame-wendao-single.webp",
    art: "assets/wendao.webp",
    siteUrl: "https://wd.leiting.com/home",
    screen: { left: 23.4, top: 29.2, width: 53.7, height: 38.3, radius: 4 },
  },
  {
    id: "m98",
    name: "《代号 M98》",
    stage: "新项目 · 深圳",
    roles: [
      ["战斗策划", "深圳", "角色、武器、敌人与 Boss 战斗体验，以及可体验原型的设计"],
      ["养成策划", "深圳", "角色、装备、武器、技能与成长策略 Build 的设计和验证"],
    ],
    tags: ["UE5", "角色养成", "战斗体验", "Build"],
    oneLiner: "基于 UE5 开发的移动端角色养成与战斗新项目，正在搭建体验骨架。",
    description:
      "项目已经正式立项，方向已经锚定，方案仍有探索空间。战斗策划把想法做成可体验原型；养成策划让外形成长、战斗能力和玩家选择形成清晰的策略关系。",
    plannerTitle: "策划在这里解决什么问题？",
    plannerPoints: [
      "战斗策划：设计角色、武器、敌人与 Boss 的规则、节奏和反馈。",
      "养成策划：搭建角色、装备、武器、技能与成长策略 Build 的关系。",
      "从问题分析、方案制作到原型迭代，参与新项目早期的核心体验定义。",
    ],
    fitHint: "适合希望从核心问题开始验证，愿意用原型、表格或 Demo 推动新项目向前的人。",
    interview: {
      title: "M98 项目 · 游戏策划校招生",
      answers: [
        ["为什么选择吉比特 / 这个项目？", "项目一开始就瞄准高品质动作游戏，这是我感兴趣的类型。还在学生时期，我接触过公司的沈老师、张老师和其他制作人，感受到吉比特对创作者很友好，也愿意培养应届生。"],
        ["入职后的最大收获？", "从项目早期开始参与，能直接接触真实问题、推进相关工作，经历更多、经验也更多。"],
      ],
    },
    frame: "assets/frame-m98.webp",
    art: "assets/m98.webp",
    siteUrl: null,
    screen: { left: 25.5, top: 29, width: 49, height: 36.5, radius: 2 },
  },
];

const quizQuestions = [
  {
    id: "stage",
    title: "你更想在哪种现场里，把第一个方案交给玩家？",
    options: [
      ["live", "已经上线的项目", "做内容迭代、体验优化和玩家反馈验证。"],
      ["new", "方向已锚定的新项目", "从角色成长与战斗体验的骨架开始搭起。"],
    ],
  },
  {
    id: "interest",
    title: "如果先从一块开始，你想把哪儿做得更好玩？",
    options: [
      ["numeric", "成长与系统", "成长节奏、资源投放、流派平衡。"],
      ["combat", "战斗与技能", "机制规则、技能组合、战斗节奏。"],
      ["general", "玩法与版本", "玩家体验、内容迭代、长期运营。"],
    ],
    newProjectOptions: [
      ["combat", "战斗策划", "技能机制、手感、节奏与反馈。"],
      ["growth", "养成策划", "角色、装备成长与 Build 策略。"],
    ],
  },
  {
    id: "tone",
    title: "下面哪个策划场景，更让你想动手试试？",
    options: [
      ["classic-turn-based", "经典回合制的新版本", "老玩法不乱，新目标要有。"],
      ["xianxia-growth", "更有修仙感的成长", "修炼、突破、功法都得有体感。"],
      ["xianxia-social", "御剑斗法和轻社交", "战斗能研究，社交不费劲。"],
      ["light-turn-based", "几分钟也能玩爽的挖宝", "轻量循环，还能持续回来。"],
    ],
  },
];

const app = document.querySelector("#app");

function screenStyle(screen) {
  return [
    `--screen-left:${screen.left}%`,
    `--screen-top:${screen.top}%`,
    `--screen-width:${screen.width}%`,
    `--screen-height:${screen.height}%`,
    `--screen-radius:${screen.radius}%`,
  ].join(";");
}

function renderConsole(project) {
  const primaryScreen = project.art
    ? `<span class="console-screen" style="${screenStyle(project.screen)}"><img src="${project.art}" alt="${project.name} 官方项目画面" loading="lazy" decoding="async" /></span>`
    : `<span class="console-screen console-screen--m98" style="${screenStyle(project.screen)}"><strong>代号 <span class="normal-numbers">M98</span></strong><span>战斗 × 养成</span></span>`;
  const secondaryScreen = project.secondaryArt
    ? `<span class="console-screen console-screen--secondary" style="${screenStyle(project.secondaryScreen)}"><img src="${project.secondaryArt}" alt="" /></span>`
    : "";
  return `<span class="console">${primaryScreen}${secondaryScreen}<img class="console-frame" src="${project.frame}" alt="" /></span>`;
}

function renderProjectArt(project, context = "project") {
  if (!project.art) {
    return `<div class="project-art project-art--placeholder" role="img" aria-label="${project.name} 项目画面筹备中"><strong>代号 <span class="normal-numbers">M98</span></strong><span>战斗 × 养成</span></div>`;
  }
  const image = `<img src="${project.art}" alt="${project.name} 官方项目画面" decoding="async" />`;
  const linkLabel = context === "result" ? "点击进入项目官网" : "点击查看项目官网";
  if (!project.siteUrl) return `<div class="project-art">${image}</div>`;
  return `<a class="project-art project-art-link" href="${project.siteUrl}" target="_blank" rel="noreferrer">${image}<span class="project-art-hint">${linkLabel} ↗</span></a>`;
}

function renderSiteHeader(active = "home") {
  const projectHref = active === "home" ? "#projects" : "index.html#projects";
  const homeCurrent = active === "home" ? ' aria-current="page"' : "";
  const projectsCurrent = active === "projects" ? ' aria-current="page"' : "";
  const quizCurrent = active === "quiz" ? ' aria-current="page"' : "";
  return `
    <a class="skip-link" href="#main-content">跳到主要内容</a>
    <header class="site-header">
      <div class="site-header__inner">
        <a class="site-brand" href="index.html"${homeCurrent}>
          <span class="site-brand__name">吉比特策划</span>
          <span class="site-brand__meta">2027 届秋招</span>
        </a>
        <nav class="site-nav" aria-label="主导航">
          <a href="${projectHref}"${projectsCurrent}>项目岗位</a>
          <a href="?view=quiz"${quizCurrent}>趣味匹配</a>
        </nav>
        <a class="header-apply" href="${OFFICIAL_JOB_LIST_URL}" target="_blank" rel="noreferrer">官方投递 <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  `;
}

function projectRoleSummary(project) {
  return project.roles.map(([role]) => role).join(" / ");
}

function renderHome() {
  app.innerHTML = `
    ${renderSiteHeader("home")}
    <main class="site-shell" id="main-content">
      <section class="playtest-room" aria-labelledby="site-title">
        <div class="wall-detail wall-detail--left" aria-hidden="true"></div>
        <div class="wall-detail wall-detail--right" aria-hidden="true"></div>
        <div class="tablet-stage">
          <div class="tablet" aria-label="校招专题开局屏幕">
            <div class="tablet-camera" aria-hidden="true"></div>
            <div class="tablet-screen">
              <p class="eyebrow">2027 届秋招</p>
              <h1 id="site-title"><a class="site-title-link" href="${GBITS_SITE_URL}" target="_blank" rel="noreferrer" aria-label="访问吉比特官网">吉比特游戏策划 <span aria-hidden="true">↗</span></a></h1>
              <p class="hero-meta">6 个项目 · 8 个职位 · 厦门 / 深圳</p>
              <div class="hero-actions" aria-label="主要入口">
                <a class="action action--apply" href="${OFFICIAL_JOB_LIST_URL}" target="_blank" rel="noreferrer">查看官方岗位并投递 <span aria-hidden="true">↗</span></a>
                <a class="action action--match" href="?view=quiz">开始趣味匹配</a>
              </div>
            </div>
          </div>
        </div>
        <section class="desk" id="projects" aria-labelledby="projects-title">
          <div class="projects-heading">
            <div>
              <p class="section-eyebrow">PROJECT EXPLORER</p>
              <h2 id="projects-title">选择一台游戏机，看看策划会做什么</h2>
            </div>
            <span class="project-count">6 个项目</span>
          </div>
          <div class="project-grid">
            ${projects
              .map(
                (project) => `
                  <a class="project-station" href="?project=${project.id}" aria-label="查看${project.name}项目介绍">
                    ${renderConsole(project)}
                    <span class="project-card-meta">
                      <span class="project-label">${project.name}</span>
                      <span class="project-role-list">${projectRoleSummary(project)}</span>
                      <span class="project-subtitle">${project.stage}</span>
                    </span>
                  </a>
                `,
              )
              .join("")}
          </div>
          ${renderHomeInterviews()}
        </section>
      </section>
      <footer class="site-footer">
        <p>本站为个人制作，内容仅供参考，最终以官方招聘信息为准。</p>
        <a href="${OFFICIAL_JOB_LIST_URL}" target="_blank" rel="noreferrer">查看官方岗位</a>
      </footer>
    </main>
  `;
}

function renderHomeInterviews() {
  const interviewProjects = projects.filter((project) => project.interview);
  if (!interviewProjects.length) return "";
  return `
    <section class="home-interviews" aria-labelledby="home-interviews-title">
      <div class="home-interviews-heading">
        <div>
          <p class="section-eyebrow">STUDENT VOICES</p>
          <h2 id="home-interviews-title">校招生正在项目里做什么</h2>
        </div>
        <p>来自项目一线的真实分享</p>
      </div>
      <div class="home-interview-grid">
        ${interviewProjects
          .map(
            (project) => `
              <article class="home-interview-card">
                <p class="home-interview-project">${displayProjectName(project)} 项目 · 游戏策划校招生</p>
                ${project.interview.answers
                  .map(
                    ([question, answer]) => `
                      <div class="home-interview-answer">
                        <h3>${question}</h3>
                        <p>${answer}</p>
                      </div>
                    `,
                  )
                  .join("")}
                <a class="home-interview-link" href="?project=${project.id}">查看 ${displayProjectName(project)} 岗位介绍 <span aria-hidden="true">→</span></a>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPageHeader(kicker, title, description) {
  return `
    <header class="route-header">
      <a class="back-link" href="index.html">← 返回项目工作台</a>
      <p class="route-kicker">${kicker}</p>
      <h1>${title}</h1>
      ${description ? `<p class="route-lede">${description}</p>` : ""}
    </header>
  `;
}

function displayProjectName(project) {
  return project.name.replace("M98", '<span class="normal-numbers">M98</span>');
}

function renderRoleCard(project, [role, city, focus], index) {
  const rolePoints = project.roles.length === 1
    ? project.plannerPoints
    : [project.plannerPoints[index]].filter(Boolean);
  return `<article class="role-card"><strong>${role}</strong><span>${city}</span><small>${focus}</small><div class="role-work"><p>你会参与</p><ul>${rolePoints.map((point) => `<li>${point}</li>`).join("")}</ul></div></article>`;
}

function renderProjectPage(project) {
  const sharedWork = project.roles.length > 1 ? project.plannerPoints.slice(project.roles.length) : [];
  app.innerHTML = `
    ${renderSiteHeader("projects")}
    <main class="route-shell project-page" id="main-content">
      ${renderPageHeader("项目介绍 / 策划岗位", displayProjectName(project), project.oneLiner)}
      <section class="project-hero-layout">
        <div class="project-hero-art">${renderProjectArt(project)}</div>
        <div class="project-hero-copy">
          <p class="project-stage">${project.stage}</p>
          <p>${project.description}</p>
          <div class="detail-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
      </section>
      <section class="route-section route-roles-section">
        <div class="section-heading"><p class="route-kicker">2027 届校招 · 开放岗位</p><h2>你可以投递的策划方向</h2></div>
        <div class="role-list route-role-list">${project.roles.map((role, index) => renderRoleCard(project, role, index)).join("")}</div>
        <p class="fit-line"><strong>适合这样的你：</strong>${project.fitHint}${sharedWork.length ? `<span class="fit-workflow"><strong>工作方式：</strong>${sharedWork.join(" ")}</span>` : ""}</p>
        <div class="route-apply-panel"><div><p class="route-kicker">官方投递</p><strong>准备好把你的游戏体感写成设计了吗？</strong></div><a class="dialog-cta apply-pulse" href="${OFFICIAL_JOB_LIST_URL}" target="_blank" rel="noreferrer">查看官方岗位并投递 <span aria-hidden="true">↗</span></a></div>
      </section>
      <footer class="site-footer route-footer"><p>本站为个人制作，内容仅供参考，最终以官方招聘信息为准。</p><a href="${OFFICIAL_JOB_LIST_URL}" target="_blank" rel="noreferrer">查看官方岗位</a></footer>
    </main>
  `;
}

function recommendation(answers) {
  if (answers.stage === "new") return "m98";
  if (answers.interest === "numeric" || answers.interest === "combat") return "wand-sword-legend";
  if (answers.tone === "classic-turn-based") return "wen-dao-mobile";
  if (answers.tone === "xianxia-growth") return "a-thought-free";
  if (answers.tone === "xianxia-social") return "ask-sword-longevity";
  if (answers.tone === "light-turn-based") return "daoyou-dig-treasure";
  return "wen-dao-mobile";
}

function recommendationReason(project, answers) {
  if (project.id === "m98") return "你选择了新项目现场，说明你更愿意从核心体验骨架开始参与定义。";
  if (answers.interest === "combat") return "你关注战斗的瞬间，适合先观察机制、技能和反馈如何被做成可体验的规则。";
  if (answers.interest === "numeric") return "你关心成长、强度和选择关系，适合从系统如何服务玩家长期体验开始了解。";
  if (project.id === "wen-dao-mobile") return "你想在成熟的玩法里，为玩家留下一次值得回来的新目标。";
  if (project.id === "a-thought-free") return "你更关注题材感如何变成长期、有体感的成长过程。";
  if (project.id === "ask-sword-longevity") return "你希望让战斗策略与轻社交维持恰到好处的平衡。";
  if (project.id === "daoyou-dig-treasure") return "你想用短而明确的循环，抓住玩家每一次碎片时间。";
  return "你更关注完整的玩家旅程，适合先看策划如何把玩法、活动、版本和反馈串成一次体验。";
}

function quizUrl(step, answers) {
  const params = new URLSearchParams({ view: "quiz", q: String(step) });
  Object.entries(answers).forEach(([key, value]) => params.set(key, value));
  return `?${params.toString()}`;
}

function quizTotalSteps(answers) {
  if (answers.stage === "new") return 2;
  if (answers.stage === "live" && ["numeric", "combat"].includes(answers.interest)) return 2;
  return 3;
}

function quizOptions(question, answers) {
  if (question.id === "interest" && answers.stage === "new") {
    return question.newProjectOptions;
  }
  return question.options;
}

function renderQuizPage(params) {
  const answers = { stage: params.get("stage"), interest: params.get("interest"), tone: params.get("tone") };
  const totalSteps = quizTotalSteps(answers);
  const step = Math.min(Math.max(Number(params.get("q") || "1"), 1), totalSteps);
  const resultId = params.get("result");
  if (resultId) {
    const project = projects.find((item) => item.id === resultId) || projects[0];
    app.innerHTML = `
      ${renderSiteHeader("quiz")}
      <main class="route-shell quiz-page" id="main-content">
        ${renderPageHeader("趣味匹配 / 结果", `推荐先了解 ${displayProjectName(project)}`, "这不是岗位测评，只是从你此刻更想解决的体验问题出发，给你一个项目入口。")}
        <section class="quiz-result-layout"><div class="result-art-wrap">${renderProjectArt(project, "result")}</div><div class="quiz-result-copy"><p class="route-kicker">你的本轮开局</p><h2>${displayProjectName(project)}</h2><p>${project.oneLiner}</p><p class="reason-line">${recommendationReason(project, answers)}</p><p><strong>开放方向：</strong>${project.roles.map(([role, city]) => `${role} · ${city}`).join(" / ")}</p><div class="quiz-result-actions"><a class="dialog-cta" href="?project=${project.id}">查看项目介绍</a><a class="secondary-button" href="${OFFICIAL_JOB_LIST_URL}" target="_blank" rel="noreferrer">查看官方岗位并投递</a><a class="secondary-button" href="?view=quiz">重新匹配</a></div></div></section>
      </main>
    `;
    return;
  }

  const question = quizQuestions[step - 1];
  const options = quizOptions(question, answers);
  app.innerHTML = `
    ${renderSiteHeader("quiz")}
    <main class="route-shell quiz-page" id="main-content">
      ${renderPageHeader(`趣味匹配 / 第 ${step} 题`, "你的策划开局", "选出你此刻更想解决的体验问题，看看适合先从哪个项目了解。")}
      <section class="quiz-layout"><div class="quiz-board"><div class="quiz-progress"><span style="width:${(step / totalSteps) * 100}%"></span></div><p class="quiz-step">第 ${step} 题</p><h2>${question.title}</h2><div class="quiz-options">${options
        .map(([value, label, detail]) => {
          const nextAnswers = { ...answers, [question.id]: value };
          const nextTotalSteps = quizTotalSteps(nextAnswers);
          const href = step >= nextTotalSteps ? `?view=quiz&result=${recommendation(nextAnswers)}&${new URLSearchParams(nextAnswers).toString()}` : quizUrl(step + 1, nextAnswers);
          return `<a class="quiz-option" href="${href}"><strong>${label}</strong><span>${detail}</span><b>→</b></a>`;
        })
        .join("")}</div></div><aside class="quiz-aside"><p class="route-kicker">策划小提示</p><h3>没有标准答案</h3><p>你可以把它当成一次轻量的项目导航。真正的策划工作，会在玩家反馈、数据和团队讨论里继续展开。</p></aside></section>
    </main>
  `;
}

function renderRoute() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("project")) {
    const project = projects.find((item) => item.id === params.get("project"));
    project ? renderProjectPage(project) : renderHome();
    return;
  }
  if (params.get("view") === "quiz") {
    renderQuizPage(params);
    return;
  }
  renderHome();
}

window.addEventListener("popstate", renderRoute);
renderRoute();
