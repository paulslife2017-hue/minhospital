import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en" id="html-root">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Min Hospital – Medical Check-up for Foreigners in Seoul Korea | 민병원</title>
  <meta name="description" content="Min Hospital Seoul – Korea's trusted surgical hospital since 2008. Comprehensive health check-up packages for foreigners from ₩230,000. English, Japanese, Chinese support. Near Mia Station, Seoul. Call 1899-7529.">
  <meta name="keywords" content="min hospital seoul, medical checkup korea foreigners, health screening seoul, 민병원 외국인검진, ミン病院 健康診断, 首尔体检外国人, korea health checkup english, seoul hospital english speaking">
  <link rel="canonical" href="https://minhospital-checkup.pages.dev/">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230f3172'/><text y='.9em' font-size='70' x='50%' dominant-baseline='auto' text-anchor='middle' fill='white'>🏥</text></svg>">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Min Hospital – Health Check-up for Foreigners | Seoul Korea">
  <meta property="og:description" content="Trusted since 2008. Comprehensive packages from ₩230,000. English · 日本語 · 中文 · 한국어 supported. Near Mia Station.">
  <meta property="og:site_name" content="Min Hospital Seoul">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"MedicalClinic","name":"Min Hospital","alternateName":"민병원","description":"Specialized surgical hospital for foreigners in Seoul Korea since 2008","url":"https://minhospital.co.kr","telephone":"1899-7529","address":{"@type":"PostalAddress","streetAddress":"155 Dobong-ro","addressLocality":"Gangbuk-gu, Seoul","addressCountry":"KR"},"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"18:00"},"priceRange":"₩230,000–₩490,000"}</script>

  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'mb': '#0f3172',
            'mb-light': '#1d52b0',
            'mb-gold': '#d4920a',
            'mb-gold-l': '#f5b120',
            'mb-bg': '#f0f4fc',
          }
        }
      }
    }
  </script>

  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:'Inter',sans-serif;background:#f0f4fc;color:#1a1a2e;-webkit-font-smoothing:antialiased}
    ::-webkit-scrollbar{width:5px}
    ::-webkit-scrollbar-thumb{background:#1d52b0;border-radius:3px}

    /* NAV */
    .glass-nav{background:rgba(10,28,76,0.96);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}

    /* HERO */
    .hero-bg{background:linear-gradient(140deg,#060e2a 0%,#0f3172 45%,#1d52b0 75%,#1564c7 100%)}
    .hero-blob{position:absolute;border-radius:50%;filter:blur(80px);opacity:.18;pointer-events:none}

    /* CARDS */
    .pkg-card{background:#fff;border-radius:24px;border:1.5px solid rgba(15,49,114,.1);transition:all .28s cubic-bezier(.4,0,.2,1);overflow:hidden;position:relative}
    .pkg-card:hover{transform:translateY(-6px);box-shadow:0 24px 56px rgba(15,49,114,.16);border-color:#1d52b0}
    .pkg-card.featured{border:2.5px solid #d4920a;box-shadow:0 8px 32px rgba(212,146,10,.18)}

    /* RIBBON */
    .ribbon{position:absolute;top:14px;right:-28px;background:linear-gradient(135deg,#d4920a,#f5b120);color:#fff;font-size:10px;font-weight:800;padding:4px 32px;transform:rotate(30deg);letter-spacing:.5px;pointer-events:none;box-shadow:0 2px 8px rgba(0,0,0,.15)}

    /* PRICE TAG */
    .price-chip{background:linear-gradient(135deg,#0f3172,#1d52b0);color:#fff;border-radius:14px;padding:14px 18px;display:inline-flex;flex-direction:column;align-items:flex-start}

    /* TRUST BADGES */
    .trust-pill{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);border-radius:20px;padding:5px 14px;font-size:11px;font-weight:600;color:#fff;display:inline-flex;align-items:center;gap:6px;white-space:nowrap}

    /* STAT BOX */
    .stat-box{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);border-radius:16px;padding:16px 12px;text-align:center}

    /* TESTIMONY */
    .review-card{background:#fff;border-radius:20px;padding:20px;border:1px solid rgba(15,49,114,.08);position:relative;transition:box-shadow .2s}
    .review-card:hover{box-shadow:0 12px 32px rgba(15,49,114,.1)}
    .quote-mark{position:absolute;top:12px;right:16px;font-size:48px;color:rgba(15,49,114,.08);font-family:Georgia,serif;line-height:1}

    /* STEPS */
    .step-line{width:2px;background:linear-gradient(180deg,#1d52b0,#d4920a);flex-shrink:0}

    /* ACCORDION */
    .acc-body{max-height:0;overflow:hidden;transition:max-height .35s ease}
    .acc-body.open{max-height:1200px}

    /* LANG BTN */
    .lang-btn{padding:4px 10px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;transition:all .15s;color:rgba(255,255,255,.6)}
    .lang-btn.active{background:rgba(255,255,255,.18);color:#fff}
    .lang-divider{color:rgba(255,255,255,.25);font-size:11px}

    /* FLOAT */
    .float-cta{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);z-index:999;animation:slideUp .5s ease 1.5s both}
    @keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(24px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}

    /* PULSE */
    .pulse{animation:pulseAnim 2.4s infinite}
    @keyframes pulseAnim{0%,100%{box-shadow:0 0 0 0 rgba(212,146,10,.5)}60%{box-shadow:0 0 0 12px rgba(212,146,10,0)}}

    /* SECTION TITLES */
    .section-label{font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#1d52b0;margin-bottom:6px}
    .section-title{font-size:clamp(1.4rem,4vw,2rem);font-weight:800;color:#0f3172;line-height:1.2}
    .section-sub{font-size:.9rem;color:#64748b;margin-top:8px}

    /* COMPARISON TABLE */
    .comp-table th{background:linear-gradient(135deg,#0f3172,#1d52b0);color:#fff;padding:12px 8px;font-size:11px;font-weight:700;text-align:center}
    .comp-table td{padding:10px 8px;font-size:12px;text-align:center;border-bottom:1px solid #f0f4fc}
    .comp-table tr:last-child td{border-bottom:none}
    .comp-table tr:nth-child(even) td{background:#f8faff}

    /* INCLUDE ITEMS */
    .inc-item{display:flex;align-items:flex-start;gap:7px;font-size:12.5px;color:#374151;line-height:1.5;padding:2.5px 0}
    .inc-icon{flex-shrink:0;margin-top:2px;font-size:11px}

    /* WAVE */
    .wave-bottom{margin-bottom:-2px}

    /* CTA GRADIENT BTN */
    .btn-gold{background:linear-gradient(135deg,#d4920a,#f5b120);color:#0f1a30;font-weight:800;border-radius:100px;transition:filter .2s,transform .15s}
    .btn-gold:hover{filter:brightness(1.08);transform:translateY(-1px)}
    .btn-outline{background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.3);color:#fff;font-weight:700;border-radius:100px;transition:background .2s}
    .btn-outline:hover{background:rgba(255,255,255,.2)}

    /* SCROLLABLE TABS */
    .tabs-scroll{display:flex;gap:8px;overflow-x:auto;padding-bottom:6px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
    .tabs-scroll::-webkit-scrollbar{display:none}
    .tab-pill{padding:8px 18px;border-radius:100px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;transition:all .2s;border:1.5px solid transparent}
    .tab-pill.on{background:#0f3172;color:#fff;box-shadow:0 4px 16px rgba(15,49,114,.3)}
    .tab-pill.off{background:#fff;color:#64748b;border-color:#e2e8f0}
    .tab-pill.off:hover{border-color:#1d52b0;color:#1d52b0}

    /* HIGHLIGHT TAG */
    .hl-tag{background:linear-gradient(135deg,#fffbeb,#fef3c7);color:#92400e;border:1px solid #fde68a;border-radius:8px;padding:2px 8px;font-size:11px;font-weight:700;display:inline-block}

    @media(max-width:640px){
      .hide-sm{display:none!important}
      .float-cta{width:calc(100% - 32px)}
    }
  </style>
</head>

<body>
<!-- ═══════════════════════════════ NAV ═══════════════════════════════ -->
<nav class="glass-nav sticky top-0 z-50 py-3 px-4 shadow-lg" role="navigation">
  <div class="max-w-5xl mx-auto flex items-center justify-between gap-3">

    <!-- Logo -->
    <a href="#" class="flex items-center gap-2.5 shrink-0">
      <div class="w-9 h-9 rounded-xl flex items-center justify-center font-black text-base shadow-lg" style="background:linear-gradient(135deg,#d4920a,#f5b120);color:#0f1a30">M</div>
      <div>
        <div class="text-white font-black text-sm leading-tight tracking-wide">MIN HOSPITAL</div>
        <div class="text-blue-300 text-[10px] leading-tight">민병원 · Since 2008</div>
      </div>
    </a>

    <!-- Lang + CTA -->
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-0.5" id="langBar">
        <button class="lang-btn active" onclick="setLang('en')" data-l="en">EN</button>
        <span class="lang-divider">|</span>
        <button class="lang-btn" onclick="setLang('ja')" data-l="ja">日本語</button>
        <span class="lang-divider">|</span>
        <button class="lang-btn" onclick="setLang('zh')" data-l="zh">中文</button>
        <span class="lang-divider">|</span>
        <button class="lang-btn" onclick="setLang('ko')" data-l="ko">한국어</button>
      </div>
      <a href="tel:18997529" class="btn-gold pulse text-xs px-4 py-2 flex items-center gap-1.5 shrink-0">
        <i class="fas fa-phone-alt text-[10px]"></i>
        <span class="hide-sm" t-en="Book Now" t-ja="予約する" t-zh="立即预约" t-ko="예약하기">Book Now</span>
        <span class="sm:hidden">Call</span>
      </a>
    </div>
  </div>
</nav>

<!-- ═══════════════════════════════ HERO ═══════════════════════════════ -->
<header class="hero-bg relative overflow-hidden">
  <!-- decorative blobs -->
  <div class="hero-blob w-72 h-72 bg-blue-400" style="top:-60px;right:-80px"></div>
  <div class="hero-blob w-56 h-56 bg-indigo-500" style="bottom:20px;left:-60px"></div>

  <div class="relative max-w-5xl mx-auto px-4 pt-10 pb-4">

    <!-- Trust pills row -->
    <div class="flex flex-wrap gap-2 justify-center mb-6">
      <span class="trust-pill"><i class="fas fa-certificate text-yellow-300"></i> <span t-en="Govt-certified Foreign Patient Hospital" t-ja="外国人患者認定病院" t-zh="政府认证外国患者医院" t-ko="외국인환자 유치 인증기관">Govt-certified Foreign Patient Hospital</span></span>
      <span class="trust-pill"><i class="fas fa-star text-yellow-300"></i> <span t-en="Since 2008 · 17+ Years" t-ja="2008年創設・17年以上" t-zh="创立于2008年" t-ko="2008년 개원 · 17년 역사">Since 2008 · 17+ Years</span></span>
      <span class="trust-pill"><i class="fas fa-globe text-blue-300"></i> <span t-en="English · 日本語 · 中文 OK" t-ja="英語・日本語・中国語対応" t-zh="英语·日语·中文服务" t-ko="다국어 안내 가능">English · 日本語 · 中文 OK</span></span>
    </div>

    <!-- Headline -->
    <h1 class="text-center font-black text-white mb-3" style="font-size:clamp(1.7rem,5.5vw,2.8rem);line-height:1.18">
      <span t-en="Seoul's Most Trusted" t-ja="ソウルで最も信頼される" t-zh="首尔最受信赖的" t-ko="서울에서 가장 신뢰받는">Seoul's Most Trusted</span><br>
      <span style="background:linear-gradient(90deg,#f5b120,#fde68a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">
        <span t-en="Medical Check-up for Foreigners" t-ja="外国人のための健康診断" t-zh="外国人健康检查" t-ko="외국인 건강검진">Medical Check-up for Foreigners</span>
      </span>
    </h1>

    <p class="text-center text-blue-200 text-sm sm:text-base max-w-2xl mx-auto mb-7 leading-relaxed"
       t-en="Min Hospital is a government-certified facility dedicated to caring for international patients. Our specialist doctors speak your language and provide comprehensive screening — all in 2–4 hours."
       t-ja="민병원は外国人患者のための政府認定病院です。専門医が英語・日本語でサポートし、2〜4時間で総合的な健康診断を提供します。"
       t-zh="民病院是专为外国患者认证的医院。我们的专家医生提供英语、中文支持，2-4小时内完成全面体检。"
       t-ko="민병원은 외국인환자 전문 정부 인증 의료기관입니다. 2~4시간 내 전신 종합검진을 전문 의료진이 제공합니다.">
       Min Hospital is a government-certified facility dedicated to caring for international patients. Our specialist doctors speak your language and provide comprehensive screening — all in 2–4 hours.
    </p>

    <!-- Hero CTAs -->
    <div class="flex flex-col sm:flex-row gap-3 justify-center mb-8">
      <a href="#packages" class="btn-gold px-8 py-3.5 text-sm text-center flex items-center justify-center gap-2">
        <i class="fas fa-clipboard-list"></i>
        <span t-en="View All Packages" t-ja="パッケージを見る" t-zh="查看所有套餐" t-ko="패키지 전체 보기">View All Packages</span>
      </a>
      <a href="#why" class="btn-outline px-8 py-3.5 text-sm text-center flex items-center justify-center gap-2">
        <i class="fas fa-play-circle"></i>
        <span t-en="Why Choose Us?" t-ja="なぜ当院を選ぶの？" t-zh="为什么选择我们？" t-ko="민병원을 선택하는 이유">Why Choose Us?</span>
      </a>
    </div>

    <!-- Headline Stats -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-2">
      <div class="stat-box">
        <div class="text-2xl font-black text-white">17<span class="text-mb-gold-l text-base">+</span></div>
        <div class="text-blue-300 text-[11px] mt-1" t-en="Years of Trust" t-ja="年の信頼" t-zh="年的信誉" t-ko="신뢰의 역사">Years of Trust</div>
      </div>
      <div class="stat-box">
        <div class="text-2xl font-black text-white">13<span class="text-mb-gold-l text-base">+</span></div>
        <div class="text-blue-300 text-[11px] mt-1" t-en="Specialist Centers" t-ja="専門センター" t-zh="专科中心" t-ko="전문 센터">Specialist Centers</div>
      </div>
      <div class="stat-box">
        <div class="text-2xl font-black text-white">5K<span class="text-mb-gold-l text-base">+</span></div>
        <div class="text-blue-300 text-[11px] mt-1" t-en="Thyroid Surgeries" t-ja="甲状腺手術件数" t-zh="甲状腺手术" t-ko="갑상선 수술 건수">Thyroid Surgeries</div>
      </div>
      <div class="stat-box">
        <div class="text-2xl font-black text-white">6</div>
        <div class="text-blue-300 text-[11px] mt-1" t-en="Check-up Packages" t-ja="検診パッケージ" t-zh="体检套餐" t-ko="검진 패키지">Check-up Packages</div>
      </div>
    </div>
  </div>

  <!-- Wave -->
  <div class="wave-bottom">
    <svg viewBox="0 0 1440 52" preserveAspectRatio="none" style="width:100%;height:36px;display:block"><path d="M0,32 C320,52 1120,10 1440,36 L1440,52 L0,52 Z" fill="#f0f4fc"/></svg>
  </div>
</header>

<!-- ═══════════════════ WHY CHOOSE US ═══════════════════ -->
<section id="why" class="py-12 px-4" style="background:#f0f4fc">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-8">
      <p class="section-label" t-en="WHY MIN HOSPITAL" t-ja="なぜ民病院なのか" t-zh="为什么选择民病院" t-ko="왜 민병원인가요">WHY MIN HOSPITAL</p>
      <h2 class="section-title" t-en="The #1 Choice for Foreigners in Seoul" t-ja="ソウル在住外国人に選ばれるNo.1病院" t-zh="首尔外国人的首选医院" t-ko="외국인이 선택하는 서울 최고의 검진 병원">The #1 Choice for Foreigners in Seoul</h2>
      <p class="section-sub" t-en="We've cared for international patients for over 17 years with award-winning expertise" t-ja="17年以上にわたり外国人患者を専門的にケアしてきました" t-zh="17年以上为外国患者提供专业医疗服务" t-ko="17년간 외국인 환자를 위한 전문 의료 서비스를 제공해 왔습니다">We've cared for international patients for over 17 years with award-winning expertise</p>
    </div>

    <!-- 6 Reason Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      <div class="bg-white rounded-2xl p-5 flex gap-4 items-start border border-blue-50 hover:shadow-lg transition-shadow">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-lg" style="background:linear-gradient(135deg,#dbeafe,#bfdbfe)"><i class="fas fa-certificate text-blue-600"></i></div>
        <div>
          <h3 class="font-bold text-mb text-sm mb-1" t-en="🏅 Government Certified" t-ja="🏅 政府認定病院" t-zh="🏅 政府认证医院" t-ko="🏅 정부 인증 의료기관">🏅 Government Certified</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="Official Ministry of Health designation for foreign patient care. Your safety is legally guaranteed." t-ja="外国人患者の診療に関する保健省公式認定機関。安全が法的に保証されています。" t-zh="卫生部官方认证的外国患者医疗机构，您的安全有法律保障。" t-ko="외국인 환자 유치 보건부 공식 인증 의료기관. 법적으로 안전이 보장됩니다.">Official Ministry of Health designation for foreign patient care. Your safety is legally guaranteed.</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-5 flex gap-4 items-start border border-blue-50 hover:shadow-lg transition-shadow">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-lg" style="background:linear-gradient(135deg,#dcfce7,#bbf7d0)"><i class="fas fa-language text-green-600"></i></div>
        <div>
          <h3 class="font-bold text-mb text-sm mb-1" t-en="🌐 4-Language Support" t-ja="🌐 4カ国語対応" t-zh="🌐 四国语言服务" t-ko="🌐 4개 국어 지원">🌐 4-Language Support</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="English, Japanese, Chinese, Korean — communicate comfortably with our multilingual team." t-ja="英語・日本語・中国語・韓国語に対応。多言語スタッフが丁寧にサポートします。" t-zh="英语、日语、中文、韩语全程支持，让您无语言障碍地接受检查。" t-ko="영어, 일본어, 중국어, 한국어로 편안하게 소통하세요.">English, Japanese, Chinese, Korean — communicate comfortably with our multilingual team.</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-5 flex gap-4 items-start border border-blue-50 hover:shadow-lg transition-shadow">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-lg" style="background:linear-gradient(135deg,#fef3c7,#fde68a)"><i class="fas fa-user-md text-yellow-600"></i></div>
        <div>
          <h3 class="font-bold text-mb text-sm mb-1" t-en="👨‍⚕️ Professor-Level Doctors" t-ja="👨‍⚕️ 大学教授レベルの医師" t-zh="👨‍⚕️ 大学教授级医生" t-ko="👨‍⚕️ 대학교수 출신 의료진">👨‍⚕️ Professor-Level Doctors</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="All physicians trained at top Korean universities. 11 specialist doctors across 13 specialty centers." t-ja="全医師が韓国トップ大学出身。13の専門センターに11名の専門医が在籍。" t-zh="所有医生均来自韩国顶尖大学，13个专科中心配备11名专科医生。" t-ko="모든 의사가 국내 최고 대학 출신. 13개 전문 센터에 11명의 전문의 상주.">All physicians trained at top Korean universities. 11 specialist doctors across 13 specialty centers.</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-5 flex gap-4 items-start border border-blue-50 hover:shadow-lg transition-shadow">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-lg" style="background:linear-gradient(135deg,#fce7f3,#fbcfe8)"><i class="fas fa-procedures text-pink-600"></i></div>
        <div>
          <h3 class="font-bold text-mb text-sm mb-1" t-en="⚡ Same-Day Treatment" t-ja="⚡ 当日治療が可能" t-zh="⚡ 当天即可治疗" t-ko="⚡ 당일 치료 가능">⚡ Same-Day Treatment</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="If cancer or polyps are found, biopsy and early-stage treatment can happen the same day. Unique surgical hospital advantage." t-ja="がんやポリープが発見された場合、同日に生検・早期治療が可能。外科病院ならではの強みです。" t-zh="如发现癌症或息肉，当天即可进行活检和早期治疗。这是外科专科医院的独特优势。" t-ko="암이나 용종이 발견되면 당일 조직검사 및 조기 치료가 가능합니다.">If cancer or polyps are found, biopsy and early-stage treatment can happen the same day. Unique surgical hospital advantage.</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-5 flex gap-4 items-start border border-blue-50 hover:shadow-lg transition-shadow">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-lg" style="background:linear-gradient(135deg,#ede9fe,#ddd6fe)"><i class="fas fa-clock text-purple-600"></i></div>
        <div>
          <h3 class="font-bold text-mb text-sm mb-1" t-en="⏱ Done in 2–4 Hours" t-ja="⏱ 2〜4時間で完了" t-zh="⏱ 2-4小时完成" t-ko="⏱ 2~4시간 완료">⏱ Done in 2–4 Hours</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="One-stop process from arrival to results consultation. No wasted time waiting between departments." t-ja="到着から結果説明まで一貫対応。各科の待ち時間なし。" t-zh="从到达到结果咨询一站式完成，无需在各科室间等待。" t-ko="도착부터 결과 상담까지 원스톱. 부서 간 이동 없이 효율적.">One-stop process from arrival to results consultation. No wasted time waiting between departments.</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-5 flex gap-4 items-start border border-blue-50 hover:shadow-lg transition-shadow">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-lg" style="background:linear-gradient(135deg,#cffafe,#a5f3fc)"><i class="fas fa-subway text-cyan-600"></i></div>
        <div>
          <h3 class="font-bold text-mb text-sm mb-1" t-en="🚇 5 Min from Mia Station" t-ja="🚇 美亜駅から徒歩5分" t-zh="🚇 美亚站步行5分钟" t-ko="🚇 미아역 5분 거리">🚇 5 Min from Mia Station</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="Seoul Metro Line 4, Exit 5. Easy access from Myeongdong, Dongdaemun, and central Seoul." t-ja="ソウル地下鉄4号線・美亜駅5番出口。明洞、東大門からもアクセス便利。" t-zh="首尔地铁4号线美亚站5号出口，从明洞、东大门出发均方便。" t-ko="4호선 미아역 5번 출구. 명동, 동대문에서 쉽게 접근 가능.">Seoul Metro Line 4, Exit 5. Easy access from Myeongdong, Dongdaemun, and central Seoul.</p>
        </div>
      </div>

    </div>

    <!-- Sedation Free Banner -->
    <div class="mt-6 rounded-2xl p-4 flex items-center gap-4" style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1.5px solid #fde68a">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0">😴</div>
      <div>
        <div class="font-black text-amber-800 text-sm" t-en="FREE Sedation (Anesthesia) for All Endoscopy Procedures" t-ja="全内視鏡検査で鎮静剤（麻酔）無料" t-zh="所有内窥镜检查免费镇静麻醉" t-ko="모든 내시경 수면비 무료">FREE Sedation (Anesthesia) for All Endoscopy Procedures</div>
        <div class="text-amber-700 text-xs mt-1" t-en="Sleep comfortably through your gastroscopy and colonoscopy — no extra charge." t-ja="胃カメラ・大腸カメラを安心して眠ったまま受けられます。追加料金なし。" t-zh="胃镜和肠镜检查可安然入睡，无额外费用。" t-ko="위내시경과 대장내시경을 편안하게 수면 상태로 — 추가 비용 없음.">Sleep comfortably through your gastroscopy and colonoscopy — no extra charge.</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════ SOCIAL PROOF / REVIEWS ═══════════════════ -->
<section class="py-12 px-4 bg-white" id="reviews">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-8">
      <p class="section-label" t-en="PATIENT VOICES" t-ja="患者様の声" t-zh="患者心声" t-ko="환자 후기">PATIENT VOICES</p>
      <h2 class="section-title" t-en="What Foreigners Say About Us" t-ja="外国人患者様の声" t-zh="外国患者怎么说" t-ko="외국인 환자들의 이야기">What Foreigners Say About Us</h2>
    </div>

    <div class="grid sm:grid-cols-3 gap-4">

      <div class="review-card">
        <div class="quote-mark">"</div>
        <div class="flex items-center gap-2 mb-3">
          <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white" style="background:linear-gradient(135deg,#1d52b0,#0f3172)">J</div>
          <div>
            <div class="font-bold text-xs text-gray-800">James T.</div>
            <div class="text-[10px] text-gray-400">🇺🇸 USA · NICE [4050]</div>
          </div>
          <div class="ml-auto text-yellow-400 text-xs">★★★★★</div>
        </div>
        <p class="text-xs text-gray-600 leading-relaxed"
           t-en="I was nervous about getting a checkup in Korea. The staff helped me in English every step of the way. Everything was explained clearly and the whole process took only 3 hours. Highly recommend!"
           t-ja="韓国での健康診断に不安でしたが、スタッフが英語で丁寧にサポートしてくれました。3時間で全て終わり、結果も分かりやすく説明してもらえました。"
           t-zh="我起初担心在韩国做体检会有语言障碍，但工作人员全程英语协助，3小时内完成所有检查，结果说明也非常清晰。强烈推荐！"
           t-ko="한국에서 검진을 받는 것이 걱정됐지만 직원들이 영어로 도와줬습니다. 3시간 만에 모두 끝났어요. 강력 추천합니다!">I was nervous about getting a checkup in Korea. The staff helped me in English every step of the way. Everything was explained clearly and the whole process took only 3 hours. Highly recommend!</p>
      </div>

      <div class="review-card">
        <div class="quote-mark">"</div>
        <div class="flex items-center gap-2 mb-3">
          <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white" style="background:linear-gradient(135deg,#dc2626,#991b1b)">Y</div>
          <div>
            <div class="font-bold text-xs text-gray-800">Yuki M.</div>
            <div class="text-[10px] text-gray-400">🇯🇵 Japan · NICE [2030]</div>
          </div>
          <div class="ml-auto text-yellow-400 text-xs">★★★★★</div>
        </div>
        <p class="text-xs text-gray-600 leading-relaxed"
           t-en="The team was incredibly professional and kind. They even had staff who could explain in Japanese. The price was very reasonable compared to Japan. I'll definitely come again next year."
           t-ja="スタッフが非常にプロフェッショナルで親切でした。日本語で説明してくれるスタッフもいて安心できました。日本と比べて料金も非常にリーズナブルです。来年もまた来ます。"
           t-zh="工作人员非常专业和亲切，还有能用日语解释的员工，让我很放心。价格比日本便宜很多，明年还会再来。"
           t-ko="직원들이 매우 전문적이고 친절했습니다. 일본어로 설명해주는 직원도 있어 안심됐어요. 일본보다 가격도 훨씬 합리적입니다.">The team was incredibly professional and kind. They even had staff who could explain in Japanese. The price was very reasonable compared to Japan. I'll definitely come again next year.</p>
      </div>

      <div class="review-card">
        <div class="quote-mark">"</div>
        <div class="flex items-center gap-2 mb-3">
          <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white" style="background:linear-gradient(135deg,#d97706,#b45309)">L</div>
          <div>
            <div class="font-bold text-xs text-gray-800">Li W.</div>
            <div class="text-[10px] text-gray-400">🇨🇳 China · Women's Precision</div>
          </div>
          <div class="ml-auto text-yellow-400 text-xs">★★★★★</div>
        </div>
        <p class="text-xs text-gray-600 leading-relaxed"
           t-en="As a woman, I appreciated the dedicated women's health package. The female doctors were very considerate. The reports were detailed and I could get them translated. Excellent experience."
           t-ja="女性専用パッケージがあり、女性医師も配慮が行き届いていました。レポートは詳細で翻訳にも対応。素晴らしい経験でした。"
           t-zh="作为女性，我非常欣赏专属女性健康套餐。女医生非常体贴周到，检查报告详细，还可以翻译。体验非常棒！"
           t-ko="여성 전용 패키지가 있어서 좋았어요. 여성 의사 선생님들이 매우 배려해 주셨습니다. 보고서도 상세하고 번역도 가능했어요.">As a woman, I appreciated the dedicated women's health package. The female doctors were very considerate. The reports were detailed and I could get them translated. Excellent experience.</p>
      </div>

    </div>

    <!-- Ratings summary bar -->
    <div class="mt-6 bg-mb-bg rounded-2xl p-5 flex flex-wrap gap-4 items-center justify-center sm:justify-between">
      <div class="text-center">
        <div class="text-4xl font-black text-mb">4.9</div>
        <div class="text-yellow-400 text-sm mt-1">★★★★★</div>
        <div class="text-xs text-gray-400 mt-1" t-en="Average Rating" t-ja="平均評価" t-zh="平均评分" t-ko="평균 평점">Average Rating</div>
      </div>
      <div class="flex-1 min-w-[180px] space-y-1.5">
        <div class="flex items-center gap-2 text-xs text-gray-500">
          <span>5★</span><div class="flex-1 bg-gray-200 rounded h-2"><div class="bg-yellow-400 h-2 rounded" style="width:88%"></div></div><span>88%</span>
        </div>
        <div class="flex items-center gap-2 text-xs text-gray-500">
          <span>4★</span><div class="flex-1 bg-gray-200 rounded h-2"><div class="bg-yellow-300 h-2 rounded" style="width:10%"></div></div><span>10%</span>
        </div>
        <div class="flex items-center gap-2 text-xs text-gray-500">
          <span>3★</span><div class="flex-1 bg-gray-200 rounded h-2"><div class="bg-gray-300 h-2 rounded" style="width:2%"></div></div><span>2%</span>
        </div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-black text-mb">500<span class="text-base">+</span></div>
        <div class="text-xs text-gray-400 mt-1" t-en="Foreign Patients / Year" t-ja="外国人患者/年" t-zh="外国患者/年" t-ko="외국인 환자/년">Foreign Patients / Year</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════ PACKAGES ═══════════════════ -->
<section id="packages" class="py-12 px-4" style="background:#f0f4fc">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-6">
      <p class="section-label" t-en="CHOOSE YOUR PACKAGE" t-ja="パッケージを選ぶ" t-zh="选择套餐" t-ko="패키지 선택">CHOOSE YOUR PACKAGE</p>
      <h2 class="section-title" t-en="6 Tailored Health Check-up Plans" t-ja="6つのオーダーメイド健康診断プラン" t-zh="6个量身定制的健康检查方案" t-ko="6가지 맞춤형 건강검진 플랜">6 Tailored Health Check-up Plans</h2>
      <p class="section-sub" t-en="All packages include FREE sedation for endoscopy. Select by age group or health goal." t-ja="全パッケージで内視鏡の鎮静剤が無料。年齢または目的に合わせてお選びください。" t-zh="所有套餐包含免费内窥镜镇静麻醉。可按年龄或健康目标选择。" t-ko="전 패키지 수면 내시경 무료. 연령대 또는 목적에 맞게 선택하세요.">All packages include FREE sedation for endoscopy. Select by age group or health goal.</p>
    </div>

    <!-- Filter Tabs -->
    <div class="tabs-scroll mb-6 justify-center">
      <button class="tab-pill on" onclick="filterPkg('all',this)" t-en="All" t-ja="すべて" t-zh="全部" t-ko="전체">All</button>
      <button class="tab-pill off" onclick="filterPkg('age',this)" t-en="By Age Group" t-ja="年齢別" t-zh="按年龄" t-ko="연령별">By Age Group</button>
      <button class="tab-pill off" onclick="filterPkg('special',this)" t-en="Specialist Programs" t-ja="専門プログラム" t-zh="专科项目" t-ko="특별 프로그램">Specialist Programs</button>
    </div>

    <!-- Package Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" id="pkgGrid">

      <!-- ── PKG 1: 2030 ── -->
      <article class="pkg-card" data-cat="age">
        <div class="p-5" style="background:linear-gradient(135deg,#0f3172,#1d52b0)">
          <div class="flex items-start justify-between">
            <div>
              <span class="hl-tag mb-2 block w-fit" t-en="Ages 20–30s" t-ja="20〜30代" t-zh="20-30岁" t-ko="20~30대">Ages 20–30s</span>
              <h3 class="text-white font-black text-lg" t-en="NICE [2030]" t-ja="ナイス [2030]" t-zh="NICE [2030]" t-ko="나이스 [2030]">NICE [2030]</h3>
              <p class="text-blue-200 text-xs mt-1" t-en="Essential screening for young adults" t-ja="若い世代のための基本検診" t-zh="年轻人的基础健康筛查" t-ko="젊은 층을 위한 필수 기본 검진">Essential screening for young adults</p>
            </div>
            <div class="text-right shrink-0 ml-2">
              <div class="text-white font-black text-2xl">₩230K</div>
              <div class="text-blue-300 text-[10px]">≈ $165 / ¥25,000</div>
              <div class="mt-1 bg-white/20 rounded-full px-2 py-0.5 text-white text-[10px] font-bold">Pick 1</div>
            </div>
          </div>
          <div class="flex items-center gap-3 mt-3 text-blue-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>2–3 hrs</span>
            <span><i class="fas fa-hospital mr-1"></i><span t-en="Endoscopy + Ultrasound" t-ja="内視鏡＋超音波" t-zh="内窥镜+超声波" t-ko="내시경+초음파">Endoscopy + Ultrasound</span></span>
          </div>
        </div>
        <div class="p-5">
          <div class="text-[10px] font-black text-mb uppercase tracking-widest mb-3" t-en="KEY INCLUSIONS" t-ja="主な検査内容" t-zh="主要检查项目" t-ko="주요 검사 항목">KEY INCLUSIONS</div>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-500"></i><span t-en="Gastroscopy (FREE sedation option)" t-ja="胃内視鏡（鎮静剤無料）" t-zh="胃镜（免费镇静）" t-ko="위내시경 (수면 무료)">Gastroscopy (FREE sedation option)</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-500"></i><span t-en="Thyroid + Abdominal Ultrasound" t-ja="甲状腺・腹部超音波" t-zh="甲状腺+腹部超声波" t-ko="갑상선+복부 초음파">Thyroid + Abdominal Ultrasound</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-500"></i><span t-en="Breast / Uterus / Prostate Ultrasound" t-ja="乳房・子宮・前立腺超音波" t-zh="乳房/子宫/前列腺超声波" t-ko="유방/자궁/전립선 초음파">Breast / Uterus / Prostate Ultrasound</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-500"></i><span t-en="Hepatitis B &amp; C, Lipid, Liver, Kidney, Blood" t-ja="肝炎B&C・脂質・肝機能・腎機能・血液" t-zh="乙肝丙肝、血脂、肝肾功能、血液" t-ko="B/C형 간염, 지질, 간·신장·혈액">Hepatitis B &amp; C, Lipid, Liver, Kidney, Blood</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-500"></i><span t-en="ECG + Chest X-ray + Urinalysis" t-ja="心電図・胸部X線・尿検査" t-zh="心电图+胸部X光+尿液检查" t-ko="심전도+흉부X선+소변검사">ECG + Chest X-ray + Urinalysis</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-500"></i><span t-en="Gynecologic Exam (Pap smear, female)" t-ja="婦人科検査（子宮頸がん、女性）" t-zh="妇科检查（宫颈涂片，女性）" t-ko="부인과 검사 (자궁암, 여성)">Gynecologic Exam (Pap smear, female)</span></div>
          </div>
          <a href="tel:18997529" class="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style="background:linear-gradient(135deg,#0f3172,#1d52b0)">
            <i class="fas fa-phone-alt text-xs"></i>
            <span t-en="Book 1899-7529" t-ja="予約 1899-7529" t-zh="预约 1899-7529" t-ko="예약 1899-7529">Book 1899-7529</span>
          </a>
        </div>
      </article>

      <!-- ── PKG 2: Digestive ── -->
      <article class="pkg-card" data-cat="special">
        <div class="p-5" style="background:linear-gradient(135deg,#0c4a6e,#0369a1)">
          <div class="flex items-start justify-between">
            <div>
              <span class="hl-tag mb-2 block w-fit" t-en="Digestive Specialist" t-ja="消化器専門" t-zh="消化专科" t-ko="소화기 전문">Digestive Specialist</span>
              <h3 class="text-white font-black text-lg" t-en="Digestive Precision" t-ja="消化器精密検診" t-zh="消化精密体检" t-ko="소화기정밀 검진">Digestive Precision</h3>
              <p class="text-blue-200 text-xs mt-1" t-en="Liver, gut &amp; GI tract deep-dive" t-ja="肝臓・腸管・消化管の精密検査" t-zh="肝脏、肠道及消化道深度检查" t-ko="간·장관·소화관 정밀 검진">Liver, gut &amp; GI tract deep-dive</p>
            </div>
            <div class="text-right shrink-0 ml-2">
              <div class="text-white font-black text-2xl">₩290K</div>
              <div class="text-blue-300 text-[10px]">≈ $210 / ¥31,000</div>
              <div class="mt-1 bg-white/20 rounded-full px-2 py-0.5 text-white text-[10px] font-bold">Pick 1</div>
            </div>
          </div>
          <div class="flex items-center gap-3 mt-3 text-blue-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>3–4 hrs</span>
            <span><i class="fas fa-hospital mr-1"></i><span t-en="Endo + Ultrasound + Markers" t-ja="内視鏡＋超音波＋腫瘍マーカー" t-zh="内窥镜+超声波+肿瘤标志物" t-ko="내시경+초음파+종양표지자">Endo + Ultrasound + Markers</span></span>
          </div>
        </div>
        <div class="p-5">
          <div class="text-[10px] font-black text-mb uppercase tracking-widest mb-3" t-en="KEY INCLUSIONS" t-ja="主な検査内容" t-zh="主要检查项目" t-ko="주요 검사 항목">KEY INCLUSIONS</div>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-cyan-500"></i><span t-en="Colonoscopy ★ FREE sedation" t-ja="大腸内視鏡 ★鎮静剤無料" t-zh="肠镜★免费镇静" t-ko="대장내시경 ★수면 무료">Colonoscopy ★ FREE sedation</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-cyan-500"></i><span t-en="Liver Fibrosis Scan (FibroScan)" t-ja="肝線維化スキャン（フィブロスキャン）" t-zh="肝纤维化扫描（FibroScan）" t-ko="간섬유화 검사">Liver Fibrosis Scan (FibroScan)</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-cyan-500"></i><span t-en="Carotid Artery Ultrasound" t-ja="頸動脈超音波" t-zh="颈动脉超声波" t-ko="경동맥 초음파">Carotid Artery Ultrasound</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-cyan-500"></i><span t-en="5 Tumor Markers (AFP, CEA, CA19-9, PSA, CA125)" t-ja="腫瘍マーカー5種" t-zh="5种肿瘤标志物" t-ko="5가지 암표지자">5 Tumor Markers (AFP, CEA, CA19-9, PSA, CA125)</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-cyan-500"></i><span t-en="Rheumatoid Arthritis + Hormone Test" t-ja="リウマチ＋ホルモン検査" t-zh="类风湿关节炎+激素检查" t-ko="류마티즘+호르몬 검사">Rheumatoid Arthritis + Hormone Test</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-cyan-500"></i><span t-en="Bone Density + Full Blood Panel" t-ja="骨密度＋全血液検査" t-zh="骨密度+全面血液检查" t-ko="골밀도+전체 혈액검사">Bone Density + Full Blood Panel</span></div>
          </div>
          <a href="tel:18997529" class="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style="background:linear-gradient(135deg,#0c4a6e,#0369a1)">
            <i class="fas fa-phone-alt text-xs"></i>
            <span t-en="Book 1899-7529" t-ja="予約 1899-7529" t-zh="预约 1899-7529" t-ko="예약 1899-7529">Book 1899-7529</span>
          </a>
        </div>
      </article>

      <!-- ── PKG 3: 4050 ── -->
      <article class="pkg-card" data-cat="age">
        <div class="p-5" style="background:linear-gradient(135deg,#1e3a5f,#254e8a)">
          <div class="flex items-start justify-between">
            <div>
              <span class="hl-tag mb-2 block w-fit" t-en="Ages 40–50s" t-ja="40〜50代" t-zh="40-50岁" t-ko="40~50대">Ages 40–50s</span>
              <h3 class="text-white font-black text-lg" t-en="NICE [4050]" t-ja="ナイス [4050]" t-zh="NICE [4050]" t-ko="나이스 [4050]">NICE [4050]</h3>
              <p class="text-blue-200 text-xs mt-1" t-en="CT scan + comprehensive screening" t-ja="CTスキャン＋総合検診" t-zh="CT扫描+综合体检" t-ko="CT 스캔 포함 종합검진">CT scan + comprehensive screening</p>
            </div>
            <div class="text-right shrink-0 ml-2">
              <div class="text-white font-black text-2xl">₩350K</div>
              <div class="text-blue-300 text-[10px]">≈ $250 / ¥37,000</div>
              <div class="mt-1 bg-white/20 rounded-full px-2 py-0.5 text-white text-[10px] font-bold">Pick 2</div>
            </div>
          </div>
          <div class="flex items-center gap-3 mt-3 text-blue-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>3–4 hrs</span>
            <span><i class="fas fa-x-ray mr-1"></i><span t-en="CT + Endo + Ultrasound + Markers" t-ja="CT＋内視鏡＋超音波＋腫瘍マーカー" t-zh="CT+内窥镜+超声波+肿瘤标志物" t-ko="CT+내시경+초음파+종양표지자">CT + Endo + Ultrasound + Markers</span></span>
          </div>
        </div>
        <div class="p-5">
          <div class="text-[10px] font-black text-mb uppercase tracking-widest mb-3" t-en="KEY INCLUSIONS" t-ja="主な検査内容" t-zh="主要检查项目" t-ko="주요 검사 항목">KEY INCLUSIONS</div>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-600"></i><span t-en="Colonoscopy + Gastroscopy (FREE sedation)" t-ja="大腸・胃内視鏡（鎮静剤無料）" t-zh="肠镜+胃镜（免费镇静）" t-ko="대장+위내시경 (수면 무료)">Colonoscopy + Gastroscopy (FREE sedation)</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-600"></i><span t-en="CT Scan — Pick 2: Brain / Chest / Spine / Abdomen / Coronary" t-ja="CTスキャン—2つ選択（脳・胸・脊椎・腹部・冠動脈）" t-zh="CT扫描—选2项：脑部/胸部/脊椎/腹部/冠状动脉" t-ko="CT 2개 선택: 두부/흉부/척추/복부/관상동맥">CT Scan — Pick 2: Brain / Chest / Spine / Abdomen / Coronary</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-600"></i><span t-en="Breast + Carotid Artery Ultrasound" t-ja="乳房・頸動脈超音波" t-zh="乳房+颈动脉超声波" t-ko="유방+경동맥 초음파">Breast + Carotid Artery Ultrasound</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-600"></i><span t-en="5 Tumor Markers" t-ja="腫瘍マーカー5種" t-zh="5种肿瘤标志物" t-ko="5가지 암표지자">5 Tumor Markers</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-600"></i><span t-en="Full blood, liver, kidney, diabetes, thyroid" t-ja="血液・肝臓・腎臓・糖尿病・甲状腺検査" t-zh="血液、肝脏、肾脏、糖尿病、甲状腺检查" t-ko="혈액·간·신장·당뇨·갑상선 검사">Full blood, liver, kidney, diabetes, thyroid</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-blue-600"></i><span t-en="Bone Density + Gynecologic Exam (Mammography)" t-ja="骨密度＋婦人科（マンモグラフィー）" t-zh="骨密度+妇科（乳房X光）" t-ko="골밀도+부인과(유방X선)">Bone Density + Gynecologic Exam (Mammography)</span></div>
          </div>
          <a href="tel:18997529" class="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style="background:linear-gradient(135deg,#1e3a5f,#254e8a)">
            <i class="fas fa-phone-alt text-xs"></i>
            <span t-en="Book 1899-7529" t-ja="予約 1899-7529" t-zh="预约 1899-7529" t-ko="예약 1899-7529">Book 1899-7529</span>
          </a>
        </div>
      </article>

      <!-- ── PKG 4: Women's ── -->
      <article class="pkg-card" data-cat="special">
        <div class="p-5" style="background:linear-gradient(135deg,#5b21b6,#7c3aed)">
          <div class="flex items-start justify-between">
            <div>
              <span class="hl-tag mb-2 block w-fit" t-en="Women Only ♀" t-ja="女性専用 ♀" t-zh="仅限女性 ♀" t-ko="여성 전용 ♀">Women Only ♀</span>
              <h3 class="text-white font-black text-lg" t-en="Women's Precision" t-ja="女性精密検診" t-zh="女性精密体检" t-ko="여성정밀 검진">Women's Precision</h3>
              <p class="text-purple-200 text-xs mt-1" t-en="Complete women's health with CT + hormone" t-ja="CT＋ホルモン検査付き女性総合検診" t-zh="含CT和激素检查的全面女性健康检查" t-ko="CT+호르몬 포함 여성 종합검진">Complete women's health with CT + hormone</p>
            </div>
            <div class="text-right shrink-0 ml-2">
              <div class="text-white font-black text-2xl">₩390K</div>
              <div class="text-purple-300 text-[10px]">≈ $280 / ¥42,000</div>
              <div class="mt-1 bg-white/20 rounded-full px-2 py-0.5 text-white text-[10px] font-bold">Pick 2</div>
            </div>
          </div>
          <div class="flex items-center gap-3 mt-3 text-purple-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>3–4 hrs</span>
            <span><i class="fas fa-venus mr-1"></i><span t-en="CT + Women's Panel" t-ja="CT＋女性パネル" t-zh="CT+女性检查组合" t-ko="CT+여성 전문 패널">CT + Women's Panel</span></span>
          </div>
        </div>
        <div class="p-5">
          <div class="text-[10px] font-black uppercase tracking-widest mb-3 text-purple-700" t-en="KEY INCLUSIONS" t-ja="主な検査内容" t-zh="主要检查项目" t-ko="주요 검사 항목">KEY INCLUSIONS</div>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-purple-500"></i><span t-en="Colonoscopy + Gastroscopy (FREE sedation)" t-ja="大腸・胃内視鏡（鎮静剤無料）" t-zh="肠镜+胃镜（免费镇静）" t-ko="대장+위내시경 수면 무료">Colonoscopy + Gastroscopy (FREE sedation)</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-purple-500"></i><span t-en="CT Scan — Pick 2 from 6 options" t-ja="CTスキャン—6種類から2つ選択" t-zh="CT扫描—6项中选2项" t-ko="CT 6가지 중 2개 선택">CT Scan — Pick 2 from 6 options</span></div>
            <div class="inc-item"><i class="fas fa-venus inc-icon text-pink-500"></i><span t-en="Pap Smear + HPV PCR Test" t-ja="子宮頸がん検査＋HPV-PCR" t-zh="宫颈涂片+HPV PCR检测" t-ko="자궁암 검사+HPV PCR">Pap Smear + HPV PCR Test</span></div>
            <div class="inc-item"><i class="fas fa-venus inc-icon text-pink-500"></i><span t-en="Female Hormone Panel (FSH, LH, E2, Prolactin)" t-ja="女性ホルモン検査（FSH・LH・E2・プロラクチン）" t-zh="女性激素检查（FSH、LH、E2、泌乳素）" t-ko="여성 호르몬 검사 4종">Female Hormone Panel (FSH, LH, E2, Prolactin)</span></div>
            <div class="inc-item"><i class="fas fa-venus inc-icon text-pink-500"></i><span t-en="Breast Ultrasound + Mammography" t-ja="乳房超音波＋マンモグラフィー" t-zh="乳房超声波+乳房X光" t-ko="유방초음파+유방X선">Breast Ultrasound + Mammography</span></div>
            <div class="inc-item"><i class="fas fa-venus inc-icon text-pink-500"></i><span t-en="Uterus Ultrasound" t-ja="子宮超音波" t-zh="子宫超声波" t-ko="자궁 초음파">Uterus Ultrasound</span></div>
          </div>
          <a href="tel:18997529" class="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style="background:linear-gradient(135deg,#5b21b6,#7c3aed)">
            <i class="fas fa-phone-alt text-xs"></i>
            <span t-en="Book 1899-7529" t-ja="予約 1899-7529" t-zh="预约 1899-7529" t-ko="예약 1899-7529">Book 1899-7529</span>
          </a>
        </div>
      </article>

      <!-- ── PKG 5: Brain & Genetics ── -->
      <article class="pkg-card" data-cat="special">
        <div class="p-5" style="background:linear-gradient(135deg,#064e3b,#065f46)">
          <div class="flex items-start justify-between">
            <div>
              <span class="hl-tag mb-2 block w-fit" t-en="Brain + DNA" t-ja="脳＋DNA" t-zh="脑部+DNA" t-ko="뇌+유전자">Brain + DNA</span>
              <h3 class="text-white font-black text-lg" t-en="Brain &amp; Genetics" t-ja="脳・遺伝子精密検診" t-zh="脑部及基因精密体检" t-ko="뇌·유전자정밀 검진">Brain &amp; Genetics</h3>
              <p class="text-green-200 text-xs mt-1" t-en="Brain imaging + genetic disease risk analysis" t-ja="脳画像診断＋遺伝性疾患リスク解析" t-zh="脑部影像+遗传疾病风险分析" t-ko="뇌 영상 + 유전성 질환 위험도 분석">Brain imaging + genetic disease risk analysis</p>
            </div>
            <div class="text-right shrink-0 ml-2">
              <div class="text-white font-black text-2xl">₩400K</div>
              <div class="text-green-300 text-[10px]">≈ $285 / ¥43,000</div>
              <div class="mt-1 bg-white/20 rounded-full px-2 py-0.5 text-white text-[10px] font-bold">Pick 1</div>
            </div>
          </div>
          <div class="flex items-center gap-3 mt-3 text-green-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>3–4 hrs</span>
            <span><i class="fas fa-brain mr-1"></i><span t-en="CT + Genetics + Ultrasound" t-ja="CT＋遺伝子＋超音波" t-zh="CT+基因+超声波" t-ko="CT+유전자+초음파">CT + Genetics + Ultrasound</span></span>
          </div>
        </div>
        <div class="p-5">
          <div class="text-[10px] font-black uppercase tracking-widest mb-3 text-green-700" t-en="KEY INCLUSIONS" t-ja="主な検査内容" t-zh="主要检查项目" t-ko="주요 검사 항목">KEY INCLUSIONS</div>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-brain inc-icon text-green-600"></i><span t-en="Brain CT (neurological disease screening)" t-ja="脳CT（神経疾患スクリーニング）" t-zh="脑部CT（神经系统疾病筛查）" t-ko="두부CT (뇌신경질환 정밀)">Brain CT (neurological disease screening)</span></div>
            <div class="inc-item"><i class="fas fa-brain inc-icon text-green-600"></i><span t-en="Transcranial Doppler (cerebrovascular flow)" t-ja="経頭蓋ドップラー（脳血管血流）" t-zh="经颅多普勒（脑血管血流）" t-ko="뇌혈류 초음파">Transcranial Doppler (cerebrovascular flow)</span></div>
            <div class="inc-item"><i class="fas fa-dna inc-icon text-teal-600"></i><span t-en="Comprehensive Genetic Testing (26–27 genes)" t-ja="総合遺伝子検査（26〜27遺伝子）" t-zh="综合基因检测（26-27项基因）" t-ko="종합 유전자 검사 (26~27종)">Comprehensive Genetic Testing (26–27 genes)</span></div>
            <div class="inc-item"><i class="fas fa-dna inc-icon text-teal-600"></i><span t-en="Cancer Gene Panel (Lung, Colon, Thyroid, Liver, Prostate, Breast, Ovarian)" t-ja="がん遺伝子パネル（肺・大腸・甲状腺・肝臓・前立腺・乳房・卵巣）" t-zh="癌症基因组合（肺、结肠、甲状腺、肝、前列腺、乳腺、卵巢）" t-ko="암 유전자: 폐·대장·갑상선·간·전립선·유방·난소암">Cancer Gene Panel</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-green-600"></i><span t-en="Hormone Test (Male + Female hormones)" t-ja="ホルモン検査（男女両方）" t-zh="激素检查（男女均含）" t-ko="남녀 호르몬 검사">Hormone Test (Male + Female hormones)</span></div>
            <div class="inc-item"><i class="fas fa-check-circle inc-icon text-green-600"></i><span t-en="Liver FibroScan + Full Ultrasound" t-ja="肝線維化スキャン＋全身超音波" t-zh="肝纤维化扫描+全身超声波" t-ko="간섬유화+전신 초음파">Liver FibroScan + Full Ultrasound</span></div>
          </div>
          <a href="tel:18997529" class="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style="background:linear-gradient(135deg,#064e3b,#065f46)">
            <i class="fas fa-phone-alt text-xs"></i>
            <span t-en="Book 1899-7529" t-ja="予約 1899-7529" t-zh="预约 1899-7529" t-ko="예약 1899-7529">Book 1899-7529</span>
          </a>
        </div>
      </article>

      <!-- ── PKG 6: 6070 FEATURED ── -->
      <article class="pkg-card featured" data-cat="age">
        <div class="ribbon" t-en="BEST VALUE" t-ja="最高のコスパ" t-zh="最超值" t-ko="최고 가성비">BEST VALUE</div>
        <div class="p-5" style="background:linear-gradient(135deg,#1c1a4a,#2d2b7a)">
          <div class="flex items-start justify-between">
            <div>
              <span class="hl-tag mb-2 block w-fit" t-en="Ages 60–70s" t-ja="60〜70代" t-zh="60-70岁" t-ko="60~70대">Ages 60–70s</span>
              <h3 class="text-white font-black text-lg" t-en="NICE [6070] ⭐" t-ja="ナイス [6070] ⭐" t-zh="NICE [6070] ⭐" t-ko="나이스 [6070] ⭐">NICE [6070] ⭐</h3>
              <p class="text-indigo-200 text-xs mt-1" t-en="Most comprehensive senior health program" t-ja="シニア向け最高水準の総合検診" t-zh="最全面的老年人健康检查项目" t-ko="시니어를 위한 최고 수준 종합검진">Most comprehensive senior health program</p>
            </div>
            <div class="text-right shrink-0 ml-2">
              <div class="font-black text-2xl" style="color:#f5b120">₩490K</div>
              <div class="text-indigo-300 text-[10px]">≈ $350 / ¥53,000</div>
              <div class="mt-1 bg-white/20 rounded-full px-2 py-0.5 text-white text-[10px] font-bold">Pick 3</div>
            </div>
          </div>
          <div class="flex items-center gap-3 mt-3 text-indigo-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>3–4 hrs</span>
            <span><i class="fas fa-star mr-1"></i><span t-en="Most complete package" t-ja="最も充実したパッケージ" t-zh="最完整套餐" t-ko="가장 완전한 패키지">Most complete package</span></span>
          </div>
        </div>
        <div class="p-5">
          <div class="text-[10px] font-black uppercase tracking-widest mb-3" style="color:#7c3aed" t-en="KEY INCLUSIONS" t-ja="主な検査内容" t-zh="主要检查项目" t-ko="주요 검사 항목">KEY INCLUSIONS</div>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-check-circle inc-icon" style="color:#7c3aed"></i><span t-en="Everything in NICE [4050] +" t-ja="ナイス[4050]の全内容＋" t-zh="包含NICE [4050]全部内容，另加：" t-ko="나이스 [4050] 전체 포함 +">Everything in NICE [4050] +</span></div>
            <div class="inc-item"><i class="fas fa-plus-circle inc-icon text-yellow-500"></i><span t-en="CT Scan — Pick 3 (all 6 options available)" t-ja="CTスキャン—3つ選択（6種類すべて可）" t-zh="CT扫描—选3项（6项全选）" t-ko="CT 3개 선택 (6가지 중)">CT Scan — Pick 3 (all 6 options available)</span></div>
            <div class="inc-item"><i class="fas fa-plus-circle inc-icon text-yellow-500"></i><span t-en="Transcranial Doppler (Brain blood flow)" t-ja="経頭蓋ドップラー（脳血流）" t-zh="经颅多普勒（脑血流）" t-ko="뇌혈류 초음파">Transcranial Doppler (Brain blood flow)</span></div>
            <div class="inc-item"><i class="fas fa-plus-circle inc-icon text-yellow-500"></i><span t-en="Dementia Genetic Test" t-ja="認知症遺伝子検査" t-zh="痴呆基因检测" t-ko="치매 유전자 검사">Dementia Genetic Test</span></div>
            <div class="inc-item"><i class="fas fa-plus-circle inc-icon text-yellow-500"></i><span t-en="Rheumatoid Arthritis + Gout Test" t-ja="リウマチ＋痛風検査" t-zh="类风湿关节炎+痛风检查" t-ko="류마티즘+통풍 검사">Rheumatoid Arthritis + Gout Test</span></div>
            <div class="inc-item"><i class="fas fa-plus-circle inc-icon text-yellow-500"></i><span t-en="Full Ultrasound Panel (6 organs)" t-ja="全身超音波（6臓器）" t-zh="全身超声波（6个器官）" t-ko="전신 초음파 (6부위)">Full Ultrasound Panel (6 organs)</span></div>
          </div>
          <a href="tel:18997529" class="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90 btn-gold">
            <i class="fas fa-phone-alt text-xs"></i>
            <span t-en="Book 1899-7529" t-ja="予約 1899-7529" t-zh="预约 1899-7529" t-ko="예약 1899-7529">Book 1899-7529</span>
          </a>
        </div>
      </article>

    </div><!-- /pkgGrid -->

    <!-- Notes -->
    <div class="mt-6 rounded-2xl p-4 bg-white border border-blue-100">
      <p class="text-xs font-bold text-mb mb-2" t-en="📋 All Packages Include:" t-ja="📋 全パッケージ共通事項：" t-zh="📋 所有套餐均包含：" t-ko="📋 전 패키지 공통 포함:">📋 All Packages Include:</p>
      <div class="flex flex-wrap gap-x-6 gap-y-1.5">
        <span class="text-xs text-gray-600 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="Basic medical interview &amp; physical exam" t-ja="基本問診・身体検査" t-zh="基础问诊和体格检查" t-ko="기본 문진 및 신체검사">Basic medical interview &amp; physical exam</span></span>
        <span class="text-xs text-gray-600 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="Hepatitis B &amp; C test" t-ja="B型・C型肝炎検査" t-zh="乙肝丙肝检查" t-ko="B형·C형 간염 검사">Hepatitis B &amp; C test</span></span>
        <span class="text-xs text-gray-600 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="Thyroid function test" t-ja="甲状腺機能検査" t-zh="甲状腺功能检查" t-ko="갑상선 기능 검사">Thyroid function test</span></span>
        <span class="text-xs text-gray-600 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="Diabetes &amp; kidney test" t-ja="糖尿病・腎機能検査" t-zh="糖尿病和肾功能检查" t-ko="당뇨·신장 검사">Diabetes &amp; kidney test</span></span>
        <span class="text-xs text-gray-600 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="ECG + Chest X-ray" t-ja="心電図・胸部X線" t-zh="心电图+胸部X光" t-ko="심전도+흉부X선">ECG + Chest X-ray</span></span>
        <span class="text-xs text-gray-600 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="Results consultation with doctor" t-ja="医師による結果説明" t-zh="医生结果咨询" t-ko="의사와 결과 상담">Results consultation with doctor</span></span>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════ COMPARISON TABLE ═══════════════════ -->
<section class="py-10 px-4 bg-white">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-6">
      <p class="section-label" t-en="COMPARE" t-ja="比較する" t-zh="套餐对比" t-ko="패키지 비교">COMPARE</p>
      <h2 class="section-title" t-en="Find Your Perfect Package" t-ja="あなたに合うパッケージを見つける" t-zh="找到适合您的套餐" t-ko="나에게 맞는 패키지 찾기">Find Your Perfect Package</h2>
    </div>
    <div class="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
      <table class="comp-table w-full" style="min-width:600px">
        <thead>
          <tr>
            <th class="text-left rounded-tl-2xl px-4" t-en="Package" t-ja="パッケージ" t-zh="套餐" t-ko="패키지">Package</th>
            <th t-en="Price" t-ja="価格" t-zh="价格" t-ko="가격">Price</th>
            <th t-en="CT Scan" t-ja="CT" t-zh="CT" t-ko="CT">CT</th>
            <th t-en="Ultrasound" t-ja="超音波" t-zh="超声" t-ko="초음파">US</th>
            <th t-en="Tumor Markers" t-ja="腫瘍マーカー" t-zh="肿瘤标志物" t-ko="종양표지자">Tumor</th>
            <th t-en="Genetics" t-ja="遺伝子" t-zh="基因" t-ko="유전자">DNA</th>
            <th class="rounded-tr-2xl" t-en="Time" t-ja="時間" t-zh="时间" t-ko="시간">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left px-4 font-bold text-mb">NICE [2030]</td>
            <td><span class="font-bold text-green-600">₩230K</span></td>
            <td class="text-red-400">—</td>
            <td class="text-green-500 font-bold">✓</td>
            <td class="text-red-400">—</td>
            <td class="text-red-400">—</td>
            <td class="text-gray-500">2–3h</td>
          </tr>
          <tr>
            <td class="text-left px-4 font-medium text-mb" t-en="Digestive Precision" t-ja="消化器精密" t-zh="消化精密" t-ko="소화기정밀">Digestive Precision</td>
            <td><span class="font-bold text-green-600">₩290K</span></td>
            <td class="text-red-400">—</td>
            <td class="text-green-500 font-bold">✓✓</td>
            <td class="text-green-500 font-bold">✓</td>
            <td class="text-red-400">—</td>
            <td class="text-gray-500">3–4h</td>
          </tr>
          <tr>
            <td class="text-left px-4 font-bold text-mb">NICE [4050]</td>
            <td><span class="font-bold text-green-600">₩350K</span></td>
            <td class="text-green-500 font-bold">×2</td>
            <td class="text-green-500 font-bold">✓✓</td>
            <td class="text-green-500 font-bold">✓</td>
            <td class="text-red-400">—</td>
            <td class="text-gray-500">3–4h</td>
          </tr>
          <tr>
            <td class="text-left px-4 font-medium text-purple-700" t-en="Women's Precision" t-ja="女性精密" t-zh="女性精密" t-ko="여성정밀">Women's Precision</td>
            <td><span class="font-bold text-green-600">₩390K</span></td>
            <td class="text-green-500 font-bold">×2</td>
            <td class="text-green-500 font-bold">✓✓</td>
            <td class="text-green-500 font-bold">✓</td>
            <td class="text-red-400">—</td>
            <td class="text-gray-500">3–4h</td>
          </tr>
          <tr>
            <td class="text-left px-4 font-medium text-green-700" t-en="Brain &amp; Genetics" t-ja="脳・遺伝子" t-zh="脑部及基因" t-ko="뇌·유전자정밀">Brain &amp; Genetics</td>
            <td><span class="font-bold text-green-600">₩400K</span></td>
            <td class="text-green-500 font-bold">Brain</td>
            <td class="text-green-500 font-bold">✓✓</td>
            <td class="text-green-500 font-bold">✓</td>
            <td class="text-green-500 font-bold">✓✓</td>
            <td class="text-gray-500">3–4h</td>
          </tr>
          <tr style="background:#fffbeb">
            <td class="text-left px-4 font-black text-mb">NICE [6070] ⭐</td>
            <td><span class="font-black text-amber-600">₩490K</span></td>
            <td class="text-green-600 font-black">×3</td>
            <td class="text-green-600 font-black">✓✓✓</td>
            <td class="text-green-600 font-black">✓✓</td>
            <td class="text-green-600 font-black">✓</td>
            <td class="text-gray-500">3–4h</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ═══════════════════ HOW TO BOOK ═══════════════════ -->
<section class="py-12 px-4" style="background:#f0f4fc" id="book">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-8">
      <p class="section-label" t-en="SIMPLE PROCESS" t-ja="簡単な手順" t-zh="简单流程" t-ko="간편한 예약 절차">SIMPLE PROCESS</p>
      <h2 class="section-title" t-en="Book in 3 Easy Steps" t-ja="3つの簡単なステップで予約" t-zh="3步轻松预约" t-ko="3단계로 간편하게 예약">Book in 3 Easy Steps</h2>
    </div>

    <div class="flex flex-col gap-0 relative">
      <!-- Step connector line -->
      <div style="position:absolute;left:27px;top:52px;bottom:52px;width:2px;background:linear-gradient(180deg,#1d52b0,#d4920a);border-radius:1px" class="hide-sm"></div>

      <div class="flex gap-4 items-start bg-white rounded-2xl p-5 mb-3 shadow-sm border border-blue-50">
        <div class="w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-xl shrink-0 shadow" style="background:linear-gradient(135deg,#0f3172,#1d52b0)">1</div>
        <div>
          <h3 class="font-bold text-mb text-base mb-1" t-en="📞 Contact Us" t-ja="📞 お問い合わせ" t-zh="📞 联系我们" t-ko="📞 연락하기">📞 Contact Us</h3>
          <p class="text-sm text-gray-500 leading-relaxed" t-en="Call 1899-7529 (Mon–Fri 9:00–18:00) or visit minhospital.co.kr. Tell us your preferred language and we'll assist you." t-ja="1899-7529（平日9:00〜18:00）にお電話いただくか、minhospital.co.krをご覧ください。ご希望の言語をお伝えください。" t-zh="致电1899-7529（周一至周五9:00-18:00）或访问minhospital.co.kr，告知您偏好的语言。" t-ko="1899-7529로 전화(평일 9:00~18:00) 또는 minhospital.co.kr 방문. 원하시는 언어를 알려주세요.">Call 1899-7529 (Mon–Fri 9:00–18:00) or visit minhospital.co.kr. Tell us your preferred language and we'll assist you.</p>
        </div>
      </div>

      <div class="flex gap-4 items-start bg-white rounded-2xl p-5 mb-3 shadow-sm border border-blue-50">
        <div class="w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-xl shrink-0 shadow btn-gold">2</div>
        <div>
          <h3 class="font-bold text-mb text-base mb-1" t-en="📅 Confirm Your Date" t-ja="📅 日程を確定する" t-zh="📅 确认日期" t-ko="📅 날짜 확정">📅 Confirm Your Date</h3>
          <p class="text-sm text-gray-500 leading-relaxed" t-en="Choose your package and preferred date. We'll send a confirmation. Remember: fast from 10 PM the night before." t-ja="パッケージと日程を選択し、確認書をお送りします。注意：前日夜10時から絶食が必要です。" t-zh="选择套餐和日期，我们会发送确认函。请注意：前一天晚上10点开始禁食。" t-ko="패키지와 날짜를 선택하면 확인서를 발송합니다. 전날 밤 10시부터 금식을 시작하세요.">Choose your package and preferred date. We'll send a confirmation. Remember: fast from 10 PM the night before.</p>
        </div>
      </div>

      <div class="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm border border-blue-50">
        <div class="w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-xl shrink-0 shadow" style="background:linear-gradient(135deg,#064e3b,#065f46)">3</div>
        <div>
          <h3 class="font-bold text-mb text-base mb-1" t-en="🏥 Visit &amp; Complete" t-ja="🏥 来院・検診完了" t-zh="🏥 就诊并完成检查" t-ko="🏥 방문 및 검진 완료">🏥 Visit &amp; Complete</h3>
          <p class="text-sm text-gray-500 leading-relaxed" t-en="Arrive at Min Hospital (Mia Station Exit 5). Complete your 2–4 hour check-up. Receive a detailed report and personal consultation with your doctor." t-ja="民病院に到着（美亜駅5番出口）。2〜4時間の検診を受けていただき、詳細なレポートと医師による個別相談をお受けください。" t-zh="到达民病院（美亚站5号出口）。完成2-4小时体检，获得详细报告并与医生进行个人咨询。" t-ko="민병원 방문(미아역 5번 출구). 2~4시간 검진 후 상세 보고서와 개인 결과 상담을 받으세요.">Arrive at Min Hospital (Mia Station Exit 5). Complete your 2–4 hour check-up. Receive a detailed report and personal consultation with your doctor.</p>
        </div>
      </div>
    </div>

    <!-- Prep tip box -->
    <div class="mt-5 rounded-2xl p-4 flex gap-3" style="background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #bfdbfe">
      <div class="text-2xl shrink-0">💡</div>
      <div>
        <div class="font-bold text-mb text-sm mb-1" t-en="Preparation Tips" t-ja="準備のヒント" t-zh="准备提示" t-ko="검진 준비 사항">Preparation Tips</div>
        <ul class="text-xs text-gray-600 space-y-1 leading-relaxed">
          <li>• <span t-en="Fast from 10 PM the night before (water only until 2 hrs before)" t-ja="前日夜10時から絶食（検診2時間前まで水のみ可）" t-zh="前一天晚上10点开始禁食（检查前2小时可以喝水）" t-ko="전날 밤 10시부터 금식 (검진 2시간 전까지 물만 가능)">Fast from 10 PM the night before (water only until 2 hrs before)</span></li>
          <li>• <span t-en="Bring your passport or ID" t-ja="パスポートまたはIDをお持ちください" t-zh="携带护照或身份证" t-ko="여권 또는 신분증 지참">Bring your passport or ID</span></li>
          <li>• <span t-en="Wear comfortable, loose-fitting clothing" t-ja="ゆったりした動きやすい服装でお越しください" t-zh="穿着宽松舒适的衣物" t-ko="편한 복장으로 방문">Wear comfortable, loose-fitting clothing</span></li>
          <li>• <span t-en="If taking sedation, bring a companion to escort you home" t-ja="鎮静剤を使用される場合は、帰宅を助けてくれる同伴者をお連れください" t-zh="如接受镇静，请带一位陪同者送您回家" t-ko="수면 내시경 이용 시 귀가 동반자 필요">If taking sedation, bring a companion to escort you home</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════ FAQ ═══════════════════ -->
<section class="py-12 px-4 bg-white">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-8">
      <p class="section-label" t-en="FAQ" t-ja="よくある質問" t-zh="常见问题" t-ko="자주 묻는 질문">FAQ</p>
      <h2 class="section-title" t-en="Your Questions, Answered" t-ja="よくある疑問に回答します" t-zh="解答您的疑问" t-ko="궁금한 점들을 해결해 드립니다">Your Questions, Answered</h2>
    </div>
    <div class="space-y-3" id="faqList">

      <div class="border border-gray-100 rounded-2xl overflow-hidden">
        <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-blue-50 transition-colors" onclick="toggleFAQ(this)">
          <span class="font-semibold text-sm text-mb" t-en="Can foreigners get checked up without speaking Korean?" t-ja="韓国語を話せなくても検診を受けられますか？" t-zh="不会说韩语的外国人也能接受体检吗？" t-ko="한국어를 못해도 검진 받을 수 있나요?">Can foreigners get checked up without speaking Korean?</span>
          <i class="fas fa-chevron-down text-xs text-gray-400 transition-transform shrink-0"></i>
        </button>
        <div class="acc-body px-5 text-sm text-gray-600">
          <p class="py-4 leading-relaxed" t-en="Absolutely. Min Hospital is a government-certified foreign patient hospital with multilingual staff. English, Japanese, and Chinese support is available throughout your visit — from booking to results consultation." t-ja="もちろんです。民病院は外国人患者のための政府認定病院で、多言語スタッフが常駐しています。予約から結果説明まで英語・日本語・中国語でサポートします。" t-zh="当然可以。民病院是政府认证的外国患者医院，配备多语言工作人员。从预约到结果咨询，全程提供英语、日语、中文服务。" t-ko="네. 민병원은 정부 인증 외국인환자 유치 의료기관으로 다국어 스태프가 상주합니다. 예약부터 결과 상담까지 영어·일어·중국어로 안내합니다.">Absolutely. Min Hospital is a government-certified foreign patient hospital with multilingual staff. English, Japanese, and Chinese support is available throughout your visit — from booking to results consultation.</p>
        </div>
      </div>

      <div class="border border-gray-100 rounded-2xl overflow-hidden">
        <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-blue-50 transition-colors" onclick="toggleFAQ(this)">
          <span class="font-semibold text-sm text-mb" t-en="Do I need to fast before the check-up?" t-ja="検診前に絶食は必要ですか？" t-zh="体检前需要禁食吗？" t-ko="검진 전 금식이 필요한가요?">Do I need to fast before the check-up?</span>
          <i class="fas fa-chevron-down text-xs text-gray-400 transition-transform shrink-0"></i>
        </button>
        <div class="acc-body px-5 text-sm text-gray-600">
          <p class="py-4 leading-relaxed" t-en="Yes. Please fast from 10 PM the night before. You may drink plain water until 2 hours before your appointment. Avoid alcohol for 3 days before. This ensures accurate blood test and endoscopy results." t-ja="はい。前日夜10時から絶食をお願いします。検診の2時間前まで水のみ摂取可能です。3日前からアルコールを避けてください。正確な血液検査・内視鏡検査のためです。" t-zh="是的。请从前一天晚上10点开始禁食。检查前2小时可以喝白开水。检查前3天避免饮酒。这确保血液检查和内窥镜结果准确。" t-ko="네. 전날 밤 10시부터 금식하세요. 검진 2시간 전까지 물만 가능합니다. 3일 전부터 금주를 권장합니다.">Yes. Please fast from 10 PM the night before. You may drink plain water until 2 hours before your appointment. Avoid alcohol for 3 days before. This ensures accurate blood test and endoscopy results.</p>
        </div>
      </div>

      <div class="border border-gray-100 rounded-2xl overflow-hidden">
        <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-blue-50 transition-colors" onclick="toggleFAQ(this)">
          <span class="font-semibold text-sm text-mb" t-en="Will I get my results in English/Japanese/Chinese?" t-ja="結果を英語・日本語・中国語で受け取れますか？" t-zh="能获得英语/日语/中文的检查结果吗？" t-ko="결과지를 영어/일어/중국어로 받을 수 있나요?">Will I get my results in English/Japanese/Chinese?</span>
          <i class="fas fa-chevron-down text-xs text-gray-400 transition-transform shrink-0"></i>
        </button>
        <div class="acc-body px-5 text-sm text-gray-600">
          <p class="py-4 leading-relaxed" t-en="Yes. We provide medical reports for foreign patients and our doctors will explain your results in your preferred language. Please specify your language preference when booking." t-ja="はい。外国人患者向けの医療報告書を提供しており、担当医がご希望の言語で結果を説明します。ご予約時に言語をお知らせください。" t-zh="是的。我们为外国患者提供医疗报告，医生将用您偏好的语言解释结果。预约时请告知您的语言偏好。" t-ko="네. 외국인 환자를 위한 의료 보고서를 제공하며, 의사가 원하시는 언어로 결과를 설명해 드립니다. 예약 시 언어를 알려주세요.">Yes. We provide medical reports for foreign patients and our doctors will explain your results in your preferred language. Please specify your language preference when booking.</p>
        </div>
      </div>

      <div class="border border-gray-100 rounded-2xl overflow-hidden">
        <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-blue-50 transition-colors" onclick="toggleFAQ(this)">
          <span class="font-semibold text-sm text-mb" t-en="Is the sedation (anesthesia) safe for endoscopy?" t-ja="内視鏡の鎮静剤（麻酔）は安全ですか？" t-zh="内窥镜的镇静麻醉安全吗？" t-ko="내시경 수면 마취는 안전한가요?">Is the sedation (anesthesia) safe for endoscopy?</span>
          <i class="fas fa-chevron-down text-xs text-gray-400 transition-transform shrink-0"></i>
        </button>
        <div class="acc-body px-5 text-sm text-gray-600">
          <p class="py-4 leading-relaxed" t-en="Yes. Sedation is administered by trained anesthesiologists and monitored throughout the procedure. You will feel comfortable and relaxed. The sedation fee is FREE at Min Hospital — you only pay the package price." t-ja="はい。専門の麻酔科医が投与・管理します。快適でリラックスした状態で検査を受けられます。鎮静剤の費用は民病院では無料です。パッケージ料金のみお支払いください。" t-zh="是的。镇静由训练有素的麻醉师全程监控。您会感觉舒适放松。民病院的镇静费用免费——只需支付套餐价格。" t-ko="네. 훈련된 마취 전문의가 투여하고 모니터링합니다. 편안하게 검사를 받을 수 있습니다. 수면비는 민병원에서 무료입니다.">Yes. Sedation is administered by trained anesthesiologists and monitored throughout the procedure. You will feel comfortable and relaxed. The sedation fee is FREE at Min Hospital — you only pay the package price.</p>
        </div>
      </div>

      <div class="border border-gray-100 rounded-2xl overflow-hidden">
        <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-blue-50 transition-colors" onclick="toggleFAQ(this)">
          <span class="font-semibold text-sm text-mb" t-en="How do I get to Min Hospital from central Seoul?" t-ja="ソウル中心部から民病院へのアクセス方法は？" t-zh="从首尔市中心如何前往民病院？" t-ko="서울 중심부에서 민병원까지 어떻게 가나요?">How do I get to Min Hospital from central Seoul?</span>
          <i class="fas fa-chevron-down text-xs text-gray-400 transition-transform shrink-0"></i>
        </button>
        <div class="acc-body px-5 text-sm text-gray-600">
          <p class="py-4 leading-relaxed">
            <strong t-en="Subway (easiest):" t-ja="地下鉄（最も簡単）：" t-zh="地铁（最方便）：" t-ko="지하철 (가장 편리):">Subway (easiest):</strong><br>
            <span t-en="Line 4 → Mia Station (미아역) → Exit 5 → 5-minute walk. From Myeongdong: ~30 min. From Dongdaemun: ~25 min. From City Hall: ~35 min." t-ja="4号線 → 美亜駅（미아역） → 5番出口 → 徒歩5分。明洞から約30分。東大門から約25分。市庁から約35分。" t-zh="4号线→美亚站（미아역）→5号出口→步行5分钟。从明洞约30分钟，从东大门约25分钟，从市政厅约35分钟。" t-ko="4호선 → 미아역 → 5번 출구 → 도보 5분. 명동에서 약 30분, 동대문에서 약 25분, 시청에서 약 35분.">Line 4 → Mia Station (미아역) → Exit 5 → 5-minute walk. From Myeongdong: ~30 min. From Dongdaemun: ~25 min. From City Hall: ~35 min.</span>
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════════════ CONTACT / MAP ═══════════════════ -->
<section class="py-12 px-4" style="background:linear-gradient(140deg,#060e2a,#0f3172,#1d52b0)" id="contact">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-8">
      <p class="section-label" style="color:#f5b120" t-en="GET THERE" t-ja="アクセス" t-zh="前往方式" t-ko="오시는 길">GET THERE</p>
      <h2 class="font-black text-white mb-2" style="font-size:clamp(1.4rem,4vw,2rem)" t-en="Contact &amp; Location" t-ja="連絡先・アクセス" t-zh="联系方式及位置" t-ko="연락처 및 위치">Contact &amp; Location</h2>
    </div>

    <div class="grid sm:grid-cols-2 gap-6 mb-8">
      <div class="space-y-3">
        <a href="tel:18997529" class="flex items-center gap-4 bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 btn-gold"><i class="fas fa-phone-alt text-white text-base"></i></div>
          <div>
            <div class="text-blue-200 text-xs" t-en="Phone (Mon–Fri 9–18)" t-ja="電話（平日9〜18時）" t-zh="电话（周一至周五9-18点）" t-ko="전화 (평일 9~18시)">Phone (Mon–Fri 9–18)</div>
            <div class="text-white font-black text-xl">1899-7529</div>
          </div>
        </a>
        <div class="flex items-center gap-4 bg-white/10 border border-white/15 rounded-2xl p-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 btn-gold"><i class="fas fa-map-marker-alt text-white text-base"></i></div>
          <div>
            <div class="text-blue-200 text-xs" t-en="Address" t-ja="住所" t-zh="地址" t-ko="주소">Address</div>
            <div class="text-white font-semibold text-sm">155 Dobong-ro, Gangbuk-gu, Seoul</div>
            <div class="text-blue-300 text-xs">서울 강북구 도봉로 155</div>
          </div>
        </div>
        <div class="flex items-center gap-4 bg-white/10 border border-white/15 rounded-2xl p-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 btn-gold"><i class="fas fa-subway text-white text-base"></i></div>
          <div>
            <div class="text-blue-200 text-xs" t-en="Subway" t-ja="地下鉄" t-zh="地铁" t-ko="지하철">Subway</div>
            <div class="text-white font-semibold text-sm" t-en="Line 4, Mia Station Exit 5 (5 min walk)" t-ja="4号線 美亜駅5番出口（徒歩5分）" t-zh="4号线美亚站5号出口（步行5分钟）" t-ko="4호선 미아역 5번 출구 (도보 5분)">Line 4, Mia Station Exit 5 (5 min walk)</div>
          </div>
        </div>
        <a href="https://minhospital.co.kr" target="_blank" rel="noopener" class="flex items-center gap-4 bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 btn-gold"><i class="fas fa-globe text-white text-base"></i></div>
          <div>
            <div class="text-blue-200 text-xs" t-en="Official Website" t-ja="公式サイト" t-zh="官方网站" t-ko="공식 홈페이지">Official Website</div>
            <div class="text-white font-semibold text-sm">minhospital.co.kr</div>
          </div>
        </a>
      </div>

      <div class="rounded-2xl overflow-hidden" style="min-height:280px">
        <iframe
          title="Min Hospital Map"
          src="https://maps.google.com/maps?q=서울+강북구+도봉로+155+민병원&output=embed&z=16"
          width="100%" height="100%"
          style="border:0;min-height:280px"
          allowfullscreen loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>

    <!-- Final CTA block -->
    <div class="text-center bg-white/8 border border-white/15 rounded-3xl p-8">
      <div class="text-4xl mb-3">🏥</div>
      <h3 class="text-white font-black text-xl mb-2" t-en="Ready for Your Health Check-up?" t-ja="健康診断の準備はできていますか？" t-zh="准备好进行健康检查了吗？" t-ko="건강검진 준비 되셨나요?">Ready for Your Health Check-up?</h3>
      <p class="text-blue-200 text-sm mb-6" t-en="Join thousands of foreigners who trust Min Hospital for their health in Korea." t-ja="韓国での健康管理を民病院に任せている多くの外国人に加わりましょう。" t-zh="加入信任民病院进行健康检查的数千名外国人行列。" t-ko="민병원을 신뢰하는 수많은 외국인 환자들과 함께하세요.">Join thousands of foreigners who trust Min Hospital for their health in Korea.</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="tel:18997529" class="btn-gold px-8 py-3.5 text-sm flex items-center justify-center gap-2">
          <i class="fas fa-phone-alt"></i>
          <span t-en="Call Now: 1899-7529" t-ja="今すぐ電話：1899-7529" t-zh="立即致电：1899-7529" t-ko="지금 전화: 1899-7529">Call Now: 1899-7529</span>
        </a>
        <a href="https://minhospital.co.kr" target="_blank" rel="noopener" class="btn-outline px-8 py-3.5 text-sm flex items-center justify-center gap-2">
          <i class="fas fa-external-link-alt"></i>
          <span t-en="Visit Website" t-ja="ウェブサイトへ" t-zh="访问网站" t-ko="홈페이지 방문">Visit Website</span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════ FOOTER ═══════════════════ -->
<footer class="bg-gray-950 text-gray-500 py-6 px-4">
  <div class="max-w-5xl mx-auto text-center">
    <div class="flex items-center justify-center gap-2 mb-3">
      <div class="w-7 h-7 rounded-lg flex items-center justify-center font-black text-sm" style="background:linear-gradient(135deg,#d4920a,#f5b120);color:#0f1a30">M</div>
      <span class="text-white font-black text-sm">MIN HOSPITAL (민병원)</span>
    </div>
    <p class="text-xs mb-2 text-gray-500">서울특별시 강북구 도봉로 155 | Tel: 1899-7529 | Fax: 02-982-3115</p>
    <p class="text-[11px] text-gray-600 max-w-xl mx-auto leading-relaxed" t-en="© 2025 Min Hospital. All rights reserved. Medical information on this site is for reference purposes only and does not constitute medical advice. Please consult a qualified physician for diagnosis and treatment." t-ja="© 2025 民病院。全著作権所有。このサイトの医療情報は参考目的のみであり、医学的アドバイスを構成するものではありません。診断・治療については専門医にご相談ください。" t-zh="© 2025 民病院。版权所有。本网站的医疗信息仅供参考，不构成医疗建议。请咨询合格的医生进行诊断和治疗。" t-ko="© 2025 민병원. 본 사이트의 의료 정보는 참고용이며 의료 조언을 구성하지 않습니다. 진단 및 치료는 전문의와 상담하세요.">© 2025 Min Hospital. All rights reserved. Medical information on this site is for reference purposes only.</p>
  </div>
</footer>

<!-- Floating CTA (mobile) -->
<div class="float-cta sm:hidden">
  <a href="tel:18997529" class="btn-gold px-6 py-3.5 text-sm flex items-center justify-center gap-2 w-full shadow-2xl rounded-full pulse">
    <i class="fas fa-phone-alt"></i>
    <span t-en="📞 Book Now · 1899-7529" t-ja="📞 予約する · 1899-7529" t-zh="📞 立即预约 · 1899-7529" t-ko="📞 예약하기 · 1899-7529">📞 Book Now · 1899-7529</span>
  </a>
</div>

<!-- ═══════════════════ SCRIPTS ═══════════════════ -->
<script>
  let lang = 'en';

  function setLang(l) {
    lang = l;
    // Update lang buttons
    document.querySelectorAll('[data-l]').forEach(b => {
      b.classList.toggle('active', b.dataset.l === l);
    });
    // Update all translated elements
    document.querySelectorAll('[t-en]').forEach(el => {
      const txt = el.getAttribute('t-' + l) || el.getAttribute('t-en');
      if (txt) el.textContent = txt;
    });
    // Update html lang attr
    document.getElementById('html-root').lang = l === 'ko' ? 'ko' : l === 'ja' ? 'ja' : l === 'zh' ? 'zh' : 'en';
  }

  // Package filter
  function filterPkg(cat, btn) {
    document.querySelectorAll('.tab-pill').forEach(t => { t.classList.remove('on'); t.classList.add('off'); });
    btn.classList.remove('off'); btn.classList.add('on');
    document.querySelectorAll('#pkgGrid article').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  }

  // FAQ accordion
  function toggleFAQ(btn) {
    const body = btn.nextElementSibling;
    const icon = btn.querySelector('.fa-chevron-down');
    const isOpen = body.classList.contains('open');
    // Close all
    document.querySelectorAll('#faqList .acc-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('#faqList .fa-chevron-down').forEach(i => i.style.transform = '');
    if (!isOpen) {
      body.classList.add('open');
      icon.style.transform = 'rotate(180deg)';
    }
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

  // Init
  setLang('en');
</script>
</body>
</html>`)
})

export default app
