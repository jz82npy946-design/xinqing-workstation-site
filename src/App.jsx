import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Leaf,
  HeartHandshake,
  BookOpen,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Users,
  CalendarDays,
  BadgeHelp,
  MessageCircleHeart,
  ShieldAlert,
  School,
  ArrowRight,
  Brain,
  HandHeart,
  NotebookPen,
  ChevronUp,
  CheckCircle2,
  Copy,
  ExternalLink,
} from "lucide-react";

const AI_URL = "https://www.coze.cn/s/4EKi3DnYjNM/";

const navItems = [
  { label: "首页", id: "home" },
  { label: "关于我们", id: "about" },
  { label: "活动风采", id: "activities" },
  { label: "心理科普", id: "articles" },
  { label: "资源中心", id: "resources" },
  { label: "联系我们", id: "contact" },
];

const services = [
  {
    icon: BookOpen,
    title: "心理科普",
    desc: "用通俗、实用的方式传播心理健康知识，帮助同学更好地理解情绪、压力与自我照顾。",
  },
  {
    icon: Sparkles,
    title: "主题活动",
    desc: "开展丰富多样的校园心理活动，在参与中释放压力、收获连接与成长体验。",
  },
  {
    icon: HeartHandshake,
    title: "朋辈陪伴",
    desc: "以倾听、理解与支持为基础，让同学之间的关心更有温度，让陪伴真正发生。",
  },
  {
    icon: BadgeHelp,
    title: "资源指引",
    desc: "整合校内外心理服务与求助信息，帮助有需要的同学更快找到支持与方向。",
  },
];

const activities = [
  {
    title: "心动力，新旅程",
    tag: "主题活动",
    desc: "聚焦新学期适应与心理赋能，通过互动体验和引导交流，帮助同学以更积极的状态开启新的校园旅程。",
  },
  {
    title: "桃李芬芳，师恩难忘",
    tag: "主题活动",
    desc: "围绕感恩表达、师生互动与情感联结展开，用温暖的方式传递尊重、理解与感谢。",
  },
  {
    title: "书签藏绿意，心灵绽繁花",
    tag: "手作疗愈",
    desc: "通过书签创作与自然意象表达，让同学在轻松的手作过程中放松情绪、沉淀内心。",
  },
  {
    title: "心光奇旅",
    tag: "特色活动",
    desc: "以心理探索、团队协作和沉浸式体验为核心，让同学在参与中增强自我觉察与同伴连接。",
  },
  {
    title: "心理委员培训与成长支持",
    tag: "培训讲座",
    desc: "面向班级心理委员开展职责认知、沟通技巧与常见心理问题识别培训，提升朋辈支持能力。",
  },
];

const articles = [
  "焦虑来临时，先别急着责怪自己",
  "拖延不一定是懒，也可能是压力太大",
  "学会表达边界，是成熟的一种表现",
  "心情不好时，怎么做能让自己缓一缓",
  "求助不是脆弱，而是认真对待自己",
  "开学后总是没状态，怎么办？",
];

const resourceCards = [
  {
    icon: School,
    title: "校内资源",
    desc: "心理咨询中心、辅导员支持、心理老师预约、班级心理委员联动。",
  },
  {
    icon: Phone,
    title: "校外资源",
    desc: "心理援助热线、危机干预渠道、公益支持平台与紧急求助信息。",
  },
  {
    icon: ShieldAlert,
    title: "求助指南",
    desc: "持续情绪低落、焦虑失控、睡眠明显受影响或已出现自伤想法时，应及时求助。",
  },
  {
    icon: MessageCircleHeart,
    title: "常见问题",
    desc: "心情不好一定是心理问题吗？去心理咨询是不是很严重？这里给你温和解答。",
  },
];

const stats = [
  { value: "12+", label: "开展活动" },
  { value: "1000+", label: "服务同学" },
  { value: "20+", label: "培训班级" },
  { value: "长期", label: "陪伴与成长" },
];

const heroHighlights = ["校园心理育人", "朋辈支持联动", "线上线下协同"];
const activityCategories = ["品牌活动", "主题活动", "手作疗愈", "特色活动", "培训讲座"];
const aiFeatures = ["轻量倾听", "情绪整理", "自助建议"];

const moods = [
  { name: "开心", tip: "愿这份轻松继续陪你走一段路。", emoji: "☀️" },
  { name: "平静", tip: "平静不是平淡，而是一种珍贵的安定。", emoji: "🌿" },
  { name: "紧张", tip: "你不用一下子变得镇定，先慢慢呼吸就很好。", emoji: "💙" },
  { name: "疲惫", tip: "休息不是退步，而是在恢复力量。", emoji: "🌙" },
  { name: "烦躁", tip: "也许你不是脾气差，只是已经太累了。", emoji: "🍃" },
];

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-sky-700 shadow-sm ring-1 ring-sky-100">
        <Leaf className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-800 md:text-[2.35rem]">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{desc}</p>
    </div>
  );
}

function SoftCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/75 bg-white/82 p-6 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

function copyTextWithFallback(text){
  if (typeof document === "undefined") return false;

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }

  document.body.removeChild(textarea);
  return copied;
}

export default function XinqingWorkstationOfficialSite() {
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [showTop, setShowTop] = useState(false);
const [copyState, setCopyState] = useState({
    status: "idle",
    message: "",
  });

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tips = useMemo(
    () => [
      "不是每一天都要表现得很好。",
      "允许自己慢一点，也是一种前进。",
      "被理解很重要，自我理解更重要。",
      "先照顾好自己，再去对抗世界。",
    ],
    []
  );

const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCopyAiUrl = async () => {
    let copied = false;

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(AI_URL);
        copied = true;
      } catch {
        copied = false;
      }
    }

    if (!copied) copied = copyTextWithFallback(AI_URL);

    if (copied) {
      setCopyState({ status: "success", message: "链接已复制，你可以直接粘贴到浏览器打开。" });
    } else {
      setCopyState({
        status: "error",
        message: "当前预览环境限制了复制权限，请直接手动复制下方链接。",
      });
    }

    window.setTimeout(() => {
      setCopyState({ status: "idle", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5fbff_0%,#f7fcfb_45%,#fffdf8_100%)] text-slate-800">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-6rem] top-[-5rem] h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute right-[-4rem] top-40 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/75 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <button onClick={() => scrollToId("home")} className="flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-300 text-white shadow-lg shadow-sky-200/70">
              <Sun className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-wide">心晴心理工作站</div>
              <div className="text-xs text-slate-500">温暖陪伴 · 心理支持 · 校园成长</div>
            </div>
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="text-sm font-medium text-slate-600 transition hover:text-sky-700"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToId("resources")}
              className="hidden rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:-translate-y-0.5 md:inline-flex"
            >
              获取帮助
            </button>
            <button
              onClick={() => scrollToId("ai-buddy")}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              和心晴同伴聊聊
            </button>
          </div>
        </div>
      </header>

      <main className="relative">
        <section id="home" className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-sm text-sky-700 shadow-sm">
                <Sparkles className="h-4 w-4" />
                温暖治愈 · 青春校园 · 专业可信
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
                心晴心理工作站
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-semibold text-sky-800 md:text-2xl">让陪伴有温度，让成长有方向</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                面向校园师生的心理健康支持平台，聚焦心理科普、主题活动、朋辈陪伴与成长资源建设，努力让每一份情绪都能被看见，让每一次成长都有回应。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToId("about")}
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  了解我们
                </button>
                <button
                  onClick={() => scrollToId("activities")}
                  className="rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  查看活动
                </button>
                <button
                  onClick={() => scrollToId("resources")}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  获取帮助
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <SoftCard key={item.label} className="bg-white/85 p-5">
                    <div className="text-3xl font-black text-slate-900">{item.value}</div>
                    <div className="mt-1 text-sm font-medium text-slate-500">{item.label}</div>
                  </SoftCard>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -left-5 top-12 hidden rounded-3xl bg-white/80 p-4 shadow-xl md:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-amber-100 p-3 text-amber-600">
                    <Sun className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">今日小贴士</div>
                    <div className="mt-1 text-xs text-slate-500">允许自己慢一点，也是一种前进。</div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                <div className="rounded-[1.6rem] bg-gradient-to-br from-sky-100 via-white to-emerald-50 p-6 ring-1 ring-white/70 md:p-8">
                  <div className="grid gap-4">
                    <SoftCard className="bg-white/90">
                      <div className="mb-4 flex items-start gap-3">
                        <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                          <Brain className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-semibold leading-7 text-slate-800">温暖陪伴</div>
                          <div className="mt-1 text-sm leading-6 text-slate-500">倾听 · 理解 · 支持</div>
                        </div>
                      </div>
                      <p className="text-sm leading-7 text-slate-600">在这里，心理健康教育不是冰冷说教，而是贴近校园生活的真实陪伴。</p>
                    </SoftCard>

                    <SoftCard className="bg-white/90">
                      <div className="mb-4 flex items-start gap-3">
                        <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                          <Users className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-semibold leading-7 text-slate-800">朋辈连接</div>
                          <div className="mt-1 text-sm leading-6 text-slate-500">理解彼此，更懂成长</div>
                        </div>
                      </div>
                      <p className="text-sm leading-7 text-slate-600">通过活动、培训与科普内容，让更多同学在校园里感受到被看见、被接住。</p>
                    </SoftCard>

                    <SoftCard className="bg-gradient-to-r from-sky-50 to-emerald-50">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="text-lg font-bold">心晴同伴 · AI 轻陪伴入口</div>
                          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                            当你想倾诉、整理思绪、缓解情绪，或者只是想找一个愿意倾听的对象时，可以从一次轻量对话开始。
                          </p>
                        </div>
                        <a
                          href={AI_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200"
                        >
                          立即进入 <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </SoftCard>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {tips.map((tip, idx) => (
              <div
                key={tip}
                className="rounded-2xl border border-white/70 bg-white/75 px-5 py-4 text-sm text-slate-600 shadow-sm backdrop-blur"
              >
                <span className="mr-2 font-semibold text-sky-700">0{idx + 1}</span>
                {tip}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionTitle
                eyebrow="关于心晴"
                title="一个有温度的校园心理成长平台"
                desc="心晴心理工作站隶属于烟台文化旅游职业学院现代商务系，致力于服务校园心理健康教育，围绕“倾听、陪伴、成长、支持”的理念，开展心理科普宣传、主题活动、朋辈互助、心理委员培训等工作，努力打造一个温暖、可信、可参与的校园心理服务平台。结合校园实际需求，工作站希望把心理健康教育从“被动接受”转化为“主动参与”，让更多同学在校园生活中感受到理解、支持与连接。"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                  <div className="text-sm font-medium text-sky-700">定位</div>
                  <div className="mt-2 text-base font-semibold text-slate-800">校园心理服务平台</div>
                </div>
                <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5 shadow-sm">
                  <div className="text-sm font-medium text-emerald-700">特色</div>
                  <div className="mt-2 text-base font-semibold text-slate-800">活动 + 科普 + 朋辈支持</div>
                </div>
                <div className="rounded-3xl border border-amber-100 bg-white/80 p-5 shadow-sm">
                  <div className="text-sm font-medium text-amber-700">方向</div>
                  <div className="mt-2 text-base font-semibold text-slate-800">参与式心理育人</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <SoftCard className="bg-white/88">
                <div className="mb-3 flex items-center gap-2 text-sky-700">
                  <HandHeart className="h-5 w-5" />
                  <span className="font-semibold">宗旨使命</span>
                </div>
                <p className="text-sm leading-7 text-slate-600">
                  传播心理健康知识，营造温暖校园氛围，助力学生健康成长，让心理健康教育更贴近校园、贴近同学、贴近真实生活。
                </p>
              </SoftCard>

              <SoftCard className="bg-white/88">
                <div className="mb-3 flex items-center gap-2 text-emerald-700">
                  <NotebookPen className="h-5 w-5" />
                  <span className="font-semibold">工作理念</span>
                </div>
                <ul className="space-y-2 text-sm leading-7 text-slate-600">
                  <li>尊重每一份情绪</li>
                  <li>倾听每一个声音</li>
                  <li>守护每一次成长</li>
                  <li>传递理解与支持</li>
                </ul>
              </SoftCard>

              <SoftCard className="bg-white/90">
                <div className="mb-3 flex items-center gap-2 text-amber-700">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">组织架构与成员</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600 ring-1 ring-slate-100">
                    <div className="font-semibold text-slate-800">指导老师</div>
                    <div className="mt-1">曹丹丹老师</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600 ring-1 ring-slate-100">
                    <div className="font-semibold text-slate-800">负责人</div>
                    <div className="mt-1">商庆林、王梓豪</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600 ring-1 ring-slate-100">
                    <div className="font-semibold text-slate-800">部门成员</div>
                    <div className="mt-1">待根据实际名单继续补充</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600 ring-1 ring-slate-100">
                    <div className="font-semibold text-slate-800">心理委员</div>
                    <div className="mt-1">由各班级心理委员共同参与支持工作</div>
                  </div>
                </div>
              </SoftCard>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionTitle
            eyebrow="核心服务"
            title="把支持做成看得见、用得上的样子"
            desc="从心理科普到主题活动，从朋辈陪伴到资源指引，心晴希望把心理健康教育做得更温暖、更具体，也更贴近校园真实需求。"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
                  <SoftCard className="h-full bg-white/88">
                    <div className="mb-5 inline-flex rounded-2xl bg-sky-50 p-3 text-sky-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </SoftCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="activities" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="活动风采"
              title="在活动中连接彼此，在体验中认识自己"
              desc="从培训、讲座到互动活动与心理健康月系列内容，心晴持续用更轻松、更有参与感的方式，把理解和支持带到同学身边。"
            />
            <button className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:-translate-y-0.5">
              查看更多活动 <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {activityCategories.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {activities.map((item, index) => (
              <SoftCard key={item.title} className="overflow-hidden bg-white/90 p-0">
                <div className="h-2.5 w-full bg-gradient-to-r from-sky-300 via-emerald-300 to-amber-200" />
                <div className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    {item.tag}
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                    <div className="rounded-2xl bg-slate-50 p-3 text-slate-500">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-slate-400">活动 0{index + 1}</span>
                    <button className="inline-flex items-center gap-1 font-semibold text-sky-700">
                      查看详情 <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </SoftCard>
            ))}
          </div>
        </section>

        <section id="articles" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionTitle
            eyebrow="心理科普"
            title="贴近校园生活的心理小指南"
            desc="心理健康不是“有问题才需要关注”，而是每个人都值得学习的一种生活能力。这里的内容更轻、更实用，也更接近真实校园场景。"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((item, i) => (
              <motion.div key={item} whileHover={{ y: -6 }}>
                <SoftCard className="h-full bg-white/88">
                  <div className="mb-4 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {i % 4 === 0
                      ? "情绪调节"
                      : i % 4 === 1
                      ? "学习压力"
                      : i % 4 === 2
                      ? "人际关系"
                      : "自我成长"}
                  </div>
                  <h3 className="text-lg font-bold leading-8 text-slate-800">{item}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    用更温和也更实用的方式，看懂自己当下的感受，找到适合自己的调整路径。
                  </p>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                    阅读文章 <ArrowRight className="h-4 w-4" />
                  </button>
                </SoftCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="resources" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionTitle
                eyebrow="资源中心"
                title="当你需要更多支持时，可以先从这里开始"
                desc="求助并不可怕。找到合适的资源，本身就是照顾自己的开始。这里整合了校内外支持信息、求助指南与常见问题，帮助你更快找到方向。"
              />
              <div className="mt-8 rounded-3xl border border-amber-100 bg-amber-50/80 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white p-3 text-amber-600 shadow-sm">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">温馨提示</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      本网站提供的是心理科普、成长支持与资源引导，不替代专业医疗诊断与治疗。如遇紧急危机情况，请第一时间联系学校老师、家人或专业机构寻求帮助。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {resourceCards.map((item) => {
                const Icon = item.icon;
                return (
                  <SoftCard key={item.title}>
                    <div className="mb-4 inline-flex rounded-2xl bg-sky-50 p-3 text-sky-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </SoftCard>
                );
              })}
            </div>
          </div>
        </section>

        <section id="mood" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionTitle
              eyebrow="今日心情"
              title="给情绪一个被看见的机会"
              desc="不是所有情绪都需要立刻解决，有时候先承认、先看见，就已经是在照顾自己。点一点你现在的状态，看看心晴想对你说什么。"
            />
            <div className="grid gap-5">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                {moods.map((m) => (
                  <button
                    key={m.name}
                    onClick={() => setSelectedMood(m)}
                    className={`rounded-3xl border px-4 py-5 text-center shadow-sm transition ${
                      selectedMood.name === m.name
                        ? "border-sky-300 bg-sky-50"
                        : "border-white/80 bg-white/80 hover:-translate-y-1"
                    }`}
                  >
                    <div className="text-2xl">{m.emoji}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-700">{m.name}</div>
                  </button>
                ))}
              </div>
              <SoftCard className="bg-gradient-to-r from-sky-50 via-white to-emerald-50">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white p-3 text-sky-700 shadow-sm">
                    <MessageCircleHeart className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{selectedMood.name} · 心晴回应</div>
                    <p className="mt-3 text-base leading-8 text-slate-600">{selectedMood.tip}</p>
                  </div>
                </div>
              </SoftCard>
            </div>
          </div>
        </section>

        <section id="ai-buddy" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-r from-slate-900 via-sky-900 to-emerald-900 p-8 text-white shadow-[0_25px_80px_rgba(15,23,42,0.18)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/10">
                  <Brain className="h-4 w-4" />
                  AI 心晴同伴
                </div>
                <h2 className="mt-5 text-3xl font-black md:text-4xl">想聊聊的时候，就从一句话开始</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                  当你需要倾诉、整理思绪、获得轻量自助建议，或者只是想找一个愿意倾听的对象时，可以先进入心晴同伴。它更像一个温和的起点，而不是替代专业帮助的终点。
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={AI_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
                  >
                    立即进入 <ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    onClick={handleCopyAiUrl}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white"
                  >
                    <Copy className="h-4 w-4" />
                    复制链接
                  </button>
                  <button
                    onClick={() => scrollToId("resources")}
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white"
                  >
                    查看求助资源
                  </button>
                </div>
                {copyState.status !== "idle" && (
                  <div
                    className={`mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm ${
                      copyState.status === "success"
                        ? "bg-emerald-50 text-emerald-900"
                        : "bg-amber-50 text-amber-900"
                    }`}
                  >
                    {copyState.status === "success" ? <CheckCircle2 className="h-4 w-4" /> : <BadgeHelp className="h-4 w-4" />}
                    {copyState.message}
                  </div>
                )}
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {aiFeatures.map((item, index) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur">
                      <div className="text-xs font-medium text-white/70">0{index + 1}</div>
                      <div className="mt-2 text-sm font-semibold text-white">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                <div className="rounded-3xl bg-white/95 p-5 text-slate-800 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                      <MessageCircleHeart className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold">心晴同伴</div>
                      <div className="text-xs text-slate-500">轻陪伴 · 自助建议 · 情绪整理</div>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                    <div className="rounded-2xl bg-slate-50 px-4 py-3">你好呀，今天的你想聊点什么？</div>
                    <div className="rounded-2xl bg-sky-50 px-4 py-3">我最近有点累，也说不上来为什么。</div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3">
                      那我们先不急着定义它。你愿意从“最近最消耗你的事情”开始说说吗？
                    </div>
                  </div>
                  <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-800">
                    说明：仅提供心理陪伴与自助建议，不替代专业诊疗服务。如存在紧急危机，请立即寻求专业帮助。
                    <div className="mt-2 break-all text-[11px] text-amber-900/90">入口链接：{AI_URL}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="联系我们"
              title="让温暖在校园里继续发生"
              desc="无论你是想了解活动、加入团队、反馈建议，还是希望获取支持与资源，都欢迎通过这里联系心晴工作站。"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <SoftCard>
                <div className="mb-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-sky-700" />
                  <div className="font-semibold">工作站基本信息</div>
                </div>
                <div className="space-y-2 text-sm leading-7 text-slate-600">
                  <div>所属院校：烟台文化旅游职业学院</div>
                  <div>所属系部：现代商务系</div>
                  <div>平台名称：心晴心理工作站</div>
                </div>
              </SoftCard>

              <SoftCard>
                <div className="mb-4 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-700" />
                  <div className="font-semibold">对外联系与报名</div>
                </div>
                <div className="space-y-2 text-sm leading-7 text-slate-600">
                  <div>联系邮箱：2186368747@qq.com</div>
                  <div>公众号：商学引航</div>
                  <div>活动报名：暂未开放线上报名链接</div>
                </div>
              </SoftCard>

              <SoftCard className="bg-white/92 sm:col-span-2">
                <div className="flex flex-col gap-5">
                  <div className="grid gap-4 md:grid-cols-3">
                    <a
                      href={AI_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl bg-slate-900 px-5 py-4 text-center text-sm font-semibold text-white"
                    >
                      进入心晴同伴
                    </a>
                    <button className="rounded-2xl border border-sky-200 bg-white px-5 py-4 text-sm font-semibold text-sky-700">
                      加入我们
                    </button>
                    <button className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700">
                      留言反馈
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600 ring-1 ring-slate-100">
                      <div className="font-semibold text-slate-800">适用对象</div>
                      <div className="mt-2">在校学生、心理委员、对心理主题活动感兴趣的同学。</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600 ring-1 ring-slate-100">
                      <div className="font-semibold text-slate-800">联系说明</div>
                      <div className="mt-2">如需咨询活动、合作交流或加入工作站，可优先通过邮箱或公众号联系。</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600 ring-1 ring-slate-100">
                      <div className="font-semibold text-slate-800">温馨提示</div>
                      <div className="mt-2">线上信息仅作展示与引导使用，紧急情况请及时向老师、家人或专业机构求助。</div>
                    </div>
                  </div>
                </div>
              </SoftCard>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <div className="font-semibold text-slate-700">心晴心理工作站｜烟台文化旅游职业学院现代商务系</div>
            <div className="mt-1">温暖陪伴 · 心理支持 · 校园成长。</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <span>心理科普</span>
            <span>主题活动</span>
            <span>朋辈陪伴</span>
            <span>资源指引</span>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-slate-900 p-3 text-white shadow-xl"
          aria-label="返回顶部"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
