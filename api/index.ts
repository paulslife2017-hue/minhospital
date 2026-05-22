import { Hono } from 'hono'
import type { IncomingMessage, ServerResponse } from 'node:http'

const app = new Hono()

const HTML = `<!DOCTYPE html>
<html lang="en" id="html-root">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <!-- ═══ PRIMARY SEO (EN) ═══ -->
  <title>Min Hospital Seoul – Gastroscopy, Colonoscopy &amp; Cancer Screening for Foreigners | 민병원</title>
  <meta name="description" content="Min Hospital Seoul – Government-certified surgical hospital since 2008. Gastroscopy, colonoscopy, thyroid ultrasound, cancer screening packages from ₩230,000. English, Japanese, Chinese support. Mia Station Line 4.">
  <meta name="keywords" content="min hospital seoul, gastroscopy korea foreigners, colonoscopy seoul, stomach cancer screening korea, colon cancer screening, thyroid ultrasound korea, cancer screening seoul english, health checkup foreigners korea, 民病院 首尔体检, 胃镜 肠镜 韩国, 甲状腺 癌症筛查 首尔, ミン病院 胃カメラ 大腸カメラ, 甲状腺 がん検診 ソウル, 민병원 위내시경 대장내시경 외국인검진">

  <link rel="canonical" href="https://minhospital-checkup.vercel.app/">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230f3172'/><text y='.9em' font-size='60' x='50%' dominant-baseline='auto' text-anchor='middle' fill='white'>+</text></svg>">

  <!-- ═══ HREFLANG (multi-language SEO) ═══ -->
  <link rel="alternate" hreflang="en" href="https://minhospital-checkup.vercel.app/?lang=en">
  <link rel="alternate" hreflang="ja" href="https://minhospital-checkup.vercel.app/?lang=ja">
  <link rel="alternate" hreflang="zh" href="https://minhospital-checkup.vercel.app/?lang=zh">
  <link rel="alternate" hreflang="ko" href="https://minhospital-checkup.vercel.app/?lang=ko">
  <link rel="alternate" hreflang="x-default" href="https://minhospital-checkup.vercel.app/">

  <!-- ═══ OPEN GRAPH ═══ -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Min Hospital Seoul – Gastroscopy &amp; Cancer Screening for Foreigners">
  <meta property="og:description" content="Govt-certified since 2008. Gastroscopy, colonoscopy, cancer screening from ₩230,000. EN · JA · ZH · KO. Near Mia Station Seoul.">
  <meta property="og:site_name" content="Min Hospital Seoul | 민병원">
  <meta property="og:url" content="https://minhospital-checkup.vercel.app/">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Min Hospital Seoul – Health Check-up for Foreigners">
  <meta name="twitter:description" content="Gastroscopy, colonoscopy &amp; cancer screening from ₩230,000. English support. Seoul Korea.">

  <!-- ═══ SCHEMA.ORG ═══ -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Min Hospital",
    "alternateName": ["민병원", "民病院", "ミン病院"],
    "description": "Government-certified surgical hospital for international patients in Seoul Korea. Gastroscopy, colonoscopy, thyroid ultrasound, cancer screening packages since 2008.",
    "url": "https://minhospital-checkup.vercel.app/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "155 Dobong-ro",
      "addressLocality": "Gangbuk-gu, Seoul",
      "addressCountry": "KR",
      "postalCode": "01167"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.6385",
      "longitude": "127.0284"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "medicalSpecialty": ["Gastroenterology","Oncology","Radiology","InternalMedicine"],
    "availableService": [
      {"@type": "MedicalProcedure", "name": "Gastroscopy (Stomach Endoscopy)"},
      {"@type": "MedicalProcedure", "name": "Colonoscopy (Colon Endoscopy)"},
      {"@type": "MedicalProcedure", "name": "Thyroid Ultrasound"},
      {"@type": "MedicalProcedure", "name": "Cancer Screening"},
      {"@type": "MedicalProcedure", "name": "CT Scan"},
      {"@type": "MedicalProcedure", "name": "Tumor Marker Blood Test"}
    ],
    "priceRange": "₩230,000–₩490,000",
    "foundingDate": "2008",
    "numberOfEmployees": {"@type": "QuantitativeValue", "value": 11},
    "hasMap": "https://maps.google.com/?q=155+Dobong-ro+Gangbuk-gu+Seoul"
  }
  </script>

  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'mb': '#0f3172',
            'mb-light': '#1d52b0',
            'mb-gold': '#c9820a',
            'mb-gold-l': '#e8a020',
            'mb-bg': '#f4f7fd',
          }
        }
      }
    }
  </script>

  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:'Inter',sans-serif;background:#eef2fb;color:#1e2a45;-webkit-font-smoothing:antialiased}
    ::-webkit-scrollbar{width:4px}
    ::-webkit-scrollbar-thumb{background:#1d52b0;border-radius:2px}

    /* ── NAV ── */
    .top-nav{background:linear-gradient(135deg,#0a2560 0%,#0f3172 60%,#1a4498 100%);border-bottom:1px solid rgba(255,255,255,.1);box-shadow:0 2px 16px rgba(10,37,96,.35)}

    /* ── HERO ── */
    .hero-section{background:linear-gradient(155deg,#071d4a 0%,#0f3172 45%,#1648a8 80%,#0e3d8a 100%)}

    /* ── LANG ── */
    .lang-btn{padding:5px 11px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;transition:background .15s,color .15s;color:rgba(255,255,255,.55);border:1px solid transparent}
    .lang-btn.active{background:rgba(255,255,255,.18);color:#fff;border-color:rgba(255,255,255,.25);box-shadow:0 1px 6px rgba(0,0,0,.15)}
    .lang-btn:hover:not(.active){color:rgba(255,255,255,.88)}

    /* ── TRUST / STAT ── */
    .trust-item{display:flex;align-items:center;gap:6px;font-size:11.5px;color:rgba(255,255,255,.8);white-space:nowrap}
    .stat-card{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.16);border-radius:14px;padding:14px 10px;text-align:center;backdrop-filter:blur(4px)}

    /* ── PACKAGE CARDS ── */
    .pkg-card{background:#fff;border-radius:18px;border:1px solid #dde5f5;transition:box-shadow .25s,transform .25s;overflow:hidden;position:relative;box-shadow:0 2px 12px rgba(15,49,114,.06)}
    .pkg-card:hover{box-shadow:0 16px 40px rgba(15,49,114,.14);transform:translateY(-4px)}
    .pkg-card.featured{border:2px solid #c9820a;box-shadow:0 4px 20px rgba(201,130,10,.18)}
    .ribbon{position:absolute;top:12px;right:-26px;background:linear-gradient(135deg,#e8a020,#c9820a);color:#fff;font-size:9.5px;font-weight:700;padding:4px 30px;transform:rotate(30deg);letter-spacing:.4px;pointer-events:none;box-shadow:0 2px 8px rgba(0,0,0,.2)}
    .age-badge{display:inline-block;background:rgba(255,255,255,.2);color:#fff;border-radius:6px;padding:3px 10px;font-size:10px;font-weight:700;margin-bottom:6px;letter-spacing:.3px;border:1px solid rgba(255,255,255,.15)}

    /* ── REVIEW CARDS ── */
    .review-card{background:#fff;border-radius:16px;padding:20px;border:1px solid #dde5f5;box-shadow:0 2px 12px rgba(15,49,114,.06);transition:box-shadow .2s}
    .review-card:hover{box-shadow:0 8px 28px rgba(15,49,114,.1)}

    /* ── WHY CARDS ── */
    .why-card{background:#fff;border-radius:16px;padding:20px 16px;border:1px solid #dde5f5;transition:box-shadow .2s,transform .2s;box-shadow:0 2px 8px rgba(15,49,114,.05)}
    .why-card:hover{box-shadow:0 10px 28px rgba(15,49,114,.12);transform:translateY(-2px)}
    .why-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}

    /* ── AWARD CARDS ── */
    .award-card{background:linear-gradient(145deg,#fff 60%,#f0f5ff);border-radius:16px;padding:22px 18px;border:1px solid #dde5f5;text-align:center;transition:box-shadow .2s,transform .2s;box-shadow:0 2px 10px rgba(15,49,114,.07)}
    .award-card:hover{box-shadow:0 10px 30px rgba(15,49,114,.13);transform:translateY(-2px)}

    /* ── STEPS ── */
    .step-dot{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;flex-shrink:0;box-shadow:0 4px 12px rgba(0,0,0,.18)}
    .step-card{background:#fff;border-radius:16px;padding:20px;border:1px solid #dde5f5;box-shadow:0 2px 10px rgba(15,49,114,.06);display:flex;gap:16px;align-items:flex-start}

    /* ── FAQ ── */
    .acc-body{max-height:0;overflow:hidden;transition:max-height .3s ease}
    .acc-body.open{max-height:400px}
    .faq-icon{transition:transform .3s}

    /* ── SECTION LABELS ── */
    .section-eyebrow{display:inline-block;font-size:10px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#1d52b0;margin-bottom:7px;background:#e8efff;border-radius:20px;padding:3px 12px;border:1px solid #c7d8ff}
    .section-h{font-size:clamp(1.25rem,4vw,1.85rem);font-weight:800;color:#0a2460;line-height:1.25}
    .section-sub{font-size:.875rem;color:#5a6e8c;margin-top:8px;line-height:1.65}

    /* ── BUTTONS ── */
    .btn-primary{background:linear-gradient(135deg,#1648a8,#0f3172);color:#fff;font-weight:700;border-radius:12px;transition:all .2s;display:inline-flex;align-items:center;justify-content:center;gap:7px;box-shadow:0 4px 14px rgba(15,49,114,.3)}
    .btn-primary:hover{background:linear-gradient(135deg,#1d52b0,#1648a8);transform:translateY(-2px);box-shadow:0 6px 20px rgba(15,49,114,.38)}
    .btn-gold{background:linear-gradient(135deg,#e8a020,#c9820a);color:#fff;font-weight:700;border-radius:12px;transition:all .2s;display:inline-flex;align-items:center;justify-content:center;gap:7px;box-shadow:0 4px 14px rgba(201,130,10,.35)}
    .btn-gold:hover{background:linear-gradient(135deg,#f0b030,#d99010);transform:translateY(-2px);box-shadow:0 6px 20px rgba(201,130,10,.45)}
    .btn-wa{background:linear-gradient(135deg,#2ee86e,#25d366);color:#fff;font-weight:700;border-radius:12px;transition:all .2s;display:inline-flex;align-items:center;justify-content:center;gap:7px;box-shadow:0 4px 14px rgba(37,211,102,.3)}
    .btn-wa:hover{background:linear-gradient(135deg,#30f075,#22c060);transform:translateY(-2px);box-shadow:0 6px 20px rgba(37,211,102,.4)}
    .btn-ghost{background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.3);color:#fff;font-weight:600;border-radius:12px;transition:background .2s;display:inline-flex;align-items:center;justify-content:center;gap:7px;backdrop-filter:blur(4px)}
    .btn-ghost:hover{background:rgba(255,255,255,.22)}

    /* ── TABS ── */
    .tabs-row{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
    .tabs-row::-webkit-scrollbar{display:none}
    .tab-pill{padding:9px 18px;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;transition:all .18s;border:1.5px solid #c7d8ff;color:#2855a0;background:#e8efff}
    .tab-pill.on{background:linear-gradient(135deg,#1648a8,#0f3172);color:#fff;border-color:#0f3172;box-shadow:0 3px 12px rgba(15,49,114,.28)}
    .tab-pill:hover:not(.on){border-color:#1d52b0;background:#d4e2ff;color:#0f3172}

    /* ── INFO BOXES ── */
    .note-box{background:#fff;border:1px solid #dde5f5;border-radius:14px;padding:16px 18px;box-shadow:0 2px 8px rgba(15,49,114,.05)}
    .amber-box{background:linear-gradient(135deg,#fffbeb,#fff8e1);border:1px solid #fcd34d;border-radius:14px;padding:16px 18px;box-shadow:0 2px 8px rgba(201,130,10,.08)}
    .blue-info-box{background:linear-gradient(135deg,#eff6ff,#e0ecff);border:1px solid #bfdbfe;border-radius:14px;padding:16px 18px}

    /* ── TABLE ── */
    .comp-table th{background:linear-gradient(135deg,#0a2460,#0f3172);color:#fff;padding:11px 8px;font-size:11px;font-weight:700;text-align:center}
    .comp-table td{padding:10px 8px;font-size:12px;text-align:center;border-bottom:1px solid #edf2fc}
    .comp-table tr:last-child td{border-bottom:none}
    .comp-table tr:nth-child(even) td{background:#f4f8ff}

    /* ── INC LIST ── */
    .inc-item{display:flex;align-items:flex-start;gap:7px;font-size:12px;color:#3d5280;line-height:1.55;padding:3px 0}
    .inc-icon{flex-shrink:0;margin-top:2px;font-size:10px}

    /* ── WHATSAPP FLOAT ── */
    .wa-float{position:fixed;bottom:24px;right:20px;z-index:998}
    .wa-fab{width:58px;height:58px;background:linear-gradient(135deg,#2ee86e,#25d366);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(37,211,102,.4);cursor:pointer;transition:transform .2s,box-shadow .2s;color:#fff;font-size:27px;border:none}
    .wa-fab:hover{transform:scale(1.1);box-shadow:0 8px 30px rgba(37,211,102,.5)}
    .wa-tooltip{position:absolute;bottom:68px;right:0;background:#0a2460;color:#fff;font-size:11.5px;font-weight:600;padding:7px 13px;border-radius:9px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s;box-shadow:0 4px 14px rgba(0,0,0,.22)}
    .wa-float:hover .wa-tooltip{opacity:1}
    .wa-tooltip::after{content:'';position:absolute;bottom:-5px;right:20px;border:5px solid transparent;border-top-color:#0a2460;border-bottom:none}

    /* ── MODAL / QUIZ ── */
    .modal-bg{position:fixed;inset:0;background:rgba(5,15,40,.6);z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px;opacity:0;pointer-events:none;transition:opacity .25s;backdrop-filter:blur(3px)}
    .modal-bg.open{opacity:1;pointer-events:all}
    .modal-box{background:#fff;border-radius:22px;width:100%;max-width:440px;padding:28px 24px;box-shadow:0 28px 70px rgba(0,0,0,.22);transform:translateY(18px);transition:transform .28s}
    .modal-bg.open .modal-box{transform:translateY(0)}
    .quiz-opt{width:100%;text-align:left;padding:12px 15px;border-radius:11px;border:1.5px solid #dde5f5;font-size:13px;font-weight:500;color:#374151;cursor:pointer;transition:all .15s;background:#fff;margin-bottom:8px;display:flex;align-items:center;gap:10px}
    .quiz-opt:hover{border-color:#1648a8;color:#0f3172;background:#eff6ff;box-shadow:0 2px 8px rgba(15,49,114,.1)}
    .quiz-opt.selected{border-color:#0f3172;background:linear-gradient(135deg,#eff6ff,#e0ecff);color:#0f3172;font-weight:700;box-shadow:0 3px 10px rgba(15,49,114,.15)}
    .quiz-step{display:none}
    .quiz-step.active{display:block}
    .quiz-progress{height:4px;background:#e0e9f8;border-radius:2px;margin-bottom:20px}
    .quiz-bar{height:4px;background:linear-gradient(90deg,#1d52b0,#4a8aff);border-radius:2px;transition:width .35s}
    .result-pkg{border-radius:16px;padding:20px;color:#fff;margin-bottom:16px;box-shadow:0 6px 20px rgba(0,0,0,.2)}

    /* ── SECTION BG COLORS ── */
    .sec-white{background:#fff}
    .sec-blue-light{background:linear-gradient(180deg,#eef3ff 0%,#e8f0ff 100%)}
    .sec-blue-deep{background:linear-gradient(155deg,#071d4a 0%,#0f3172 55%,#1648a8 100%)}
    .sec-teal{background:linear-gradient(160deg,#f0fffe 0%,#e0f8f5 100%)}
    .sec-lavender{background:linear-gradient(160deg,#f5f3ff 0%,#ede9ff 100%)}
    .sec-warm{background:linear-gradient(160deg,#fffbf0 0%,#fff7e0 100%)}

    /* ── MOBILE ENHANCEMENTS ── */
    @media(max-width:640px){
      .hide-sm{display:none!important}
      .pkg-card{box-shadow:0 3px 16px rgba(15,49,114,.1)}
      .step-card{padding:16px}
      .section-eyebrow{font-size:9px}
    }

    /* ── GRADIENT DIVIDER ── */
    .color-strip{height:4px;background:linear-gradient(90deg,#0f3172,#1d52b0,#4a8aff,#25d366,#c9820a)}

    /* ── SURGERY SECTION ── */
    .surg-grid{display:grid;gap:12px}
    .surg-cat{background:#fff;border-radius:18px;border:1px solid #dde5f5;overflow:hidden;box-shadow:0 2px 12px rgba(15,49,114,.07);transition:box-shadow .2s}
    .surg-cat:hover{box-shadow:0 8px 28px rgba(15,49,114,.12)}
    .surg-header{display:flex;align-items:center;gap:12px;padding:16px 18px;cursor:pointer;user-select:none}
    .surg-num{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;color:#fff;flex-shrink:0;background:linear-gradient(135deg,#1648a8,#0f3172)}
    .surg-title-wrap{flex:1;min-width:0}
    .surg-title{font-weight:700;font-size:14px;color:#0a2460;line-height:1.3}
    .surg-subtitle{font-size:11px;color:#6b82a8;margin-top:2px}
    .surg-icon-wrap{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px}
    .surg-toggle{font-size:11px;color:#9db0cc;transition:transform .25s;flex-shrink:0}
    .surg-toggle.open{transform:rotate(180deg)}
    .surg-body{max-height:0;overflow:hidden;transition:max-height .35s ease}
    .surg-body.open{max-height:600px}
    .surg-items{padding:0 18px 16px}
    .surg-item{display:flex;align-items:flex-start;gap:8px;padding:7px 0;border-top:1px solid #f0f4fc}
    .surg-item:first-child{border-top:none}
    .surg-dot{width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,#e8f0ff,#d0e0ff);color:#1648a8;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
    .surg-item-text{flex:1;min-width:0}
    .surg-item-ko{font-size:12px;font-weight:600;color:#1e2a45;line-height:1.35}
    .surg-item-en{font-size:10.5px;color:#7a8ea8;margin-top:1px;line-height:1.4}
    .surg-badge{display:inline-flex;align-items:center;gap:4px;font-size:9.5px;font-weight:700;padding:2px 8px;border-radius:20px;margin-left:6px;vertical-align:middle}
    .badge-robot{background:#fef3c7;color:#92400e}
    .badge-scope{background:#e0f2fe;color:#0369a1}
    .badge-onestop{background:#dcfce7;color:#166534}

  </style>
</head>

<body>

<!-- ═══════ NAV ═══════ -->
<nav class="top-nav sticky top-0 z-50 py-3 px-4" role="navigation">
  <div class="max-w-5xl mx-auto flex items-center justify-between gap-3">
    <a href="#" class="flex items-center gap-2.5 shrink-0">
      <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm" style="background:#c9820a;color:#fff">M</div>
      <div>
        <div class="text-white font-bold text-sm leading-tight">MIN HOSPITAL</div>
        <div class="text-blue-300 text-[10px]">민병원 · Since 2008</div>
      </div>
    </a>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-0.5" id="langBar">
        <button class="lang-btn active" onclick="setLang('en')" data-l="en">EN</button>
        <button class="lang-btn" onclick="setLang('ja')" data-l="ja">日本語</button>
        <button class="lang-btn" onclick="setLang('zh')" data-l="zh">中文</button>
        <button class="lang-btn" onclick="setLang('ko')" data-l="ko">한국어</button>
      </div>
      <button onclick="openQuiz()" class="btn-gold text-xs px-4 py-2 hide-sm">
        <i class="fas fa-clipboard-list text-[10px]"></i>
        <span t-en="Find My Package" t-ja="最適を探す" t-zh="找适合我的" t-ko="내게 맞는 검진">Find My Package</span>
      </button>
    </div>
  </div>
</nav>

<!-- ═══════ HERO ═══════ -->
<header class="hero-section">
  <div class="max-w-5xl mx-auto px-4 pt-10 pb-8">

    <!-- Trust row -->
    <div class="flex flex-wrap gap-x-5 gap-y-2 justify-center mb-7">
      <div class="trust-item"><i class="fas fa-award text-amber-300"></i><span t-en="Govt-Certified Foreign Patient Hospital" t-ja="外国人患者認定病院" t-zh="政府认证外国患者医院" t-ko="외국인환자 유치 정부인증 의료기관">Govt-Certified Foreign Patient Hospital</span></div>
      <div class="trust-item"><i class="fas fa-calendar-check text-blue-300"></i><span t-en="Since 2008 · 17+ Years" t-ja="2008年〜17年以上" t-zh="2008年至今·17年以上" t-ko="2008년 개원 · 17년 이상">Since 2008 · 17+ Years</span></div>
      <div class="trust-item"><i class="fas fa-globe text-green-300"></i><span t-en="EN · JA · ZH · KO" t-ja="英・日・中・韓語対応" t-zh="英日中韩语服务" t-ko="4개 국어 지원">EN · JA · ZH · KO</span></div>
    </div>

    <!-- Headline -->
    <h1 class="text-center font-extrabold text-white mb-3 leading-tight" style="font-size:clamp(1.65rem,5vw,2.6rem)">
      <span t-en="Gastroscopy, Colonoscopy &amp;" t-ja="胃カメラ・大腸カメラ・" t-zh="胃镜、肠镜与" t-ko="위내시경·대장내시경·">Gastroscopy, Colonoscopy &amp;</span><br>
      <span style="color:#e8a020" t-en="Cancer Screening in Seoul." t-ja="がん検診をソウルで。" t-zh="癌症筛查在首尔。" t-ko="암 검진, 서울 민병원.">Cancer Screening in Seoul.</span>
    </h1>

    <p class="text-center text-blue-200 text-sm max-w-lg mx-auto mb-8 leading-relaxed"
       t-en="Min Hospital — government-certified since 2008. Stomach &amp; colon cancer screening, thyroid ultrasound, full health check-ups for international patients. English · Japanese · Chinese support. Results in 2–4 hours."
       t-ja="ミン病院（민병원）は2008年創立の外国人患者向け政府認定病院。胃カメラ・大腸カメラ・甲状腺・がん検診に特化。英語・日本語・中国語対応。結果は2〜4時間で。"
       t-zh="民病院（민병원）政府认证医院，2008年成立。专注胃镜、肠镜、甲状腺超声、癌症筛查。英语、日语、中文全程服务。2-4小时内出结果。"
       t-ko="민병원 — 2008년 개원, 외국인환자 전문 정부 인증 의료기관. 위내시경·대장내시경·갑상선·암 검진 전문. 4개 국어 지원. 2~4시간 결과.">
      Min Hospital — government-certified since 2008. Stomach &amp; colon cancer screening, thyroid ultrasound, full health check-ups for international patients. English · Japanese · Chinese support. Results in 2–4 hours.
    </p>

    <!-- CTA row -->
    <div class="flex flex-col sm:flex-row gap-3 justify-center mb-10">
      <a href="#packages" class="btn-gold px-7 py-3.5 text-sm">
        <i class="fas fa-list-ul"></i>
        <span t-en="View Checkup Packages" t-ja="検診パッケージを見る" t-zh="查看体检套餐" t-ko="검진 패키지 보기">View Checkup Packages</span>
      </a>
      <a href="#surgery" class="btn-ghost px-7 py-3.5 text-sm">
        <i class="fas fa-hospital"></i>
        <span t-en="Surgery Options" t-ja="手術について" t-zh="手术项目" t-ko="수술 안내">Surgery Options</span>
      </a>
    </div>

    <!-- Stats row -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
      <div class="stat-card">
        <div class="text-white font-black text-xl">17<span class="text-amber-300 text-sm">+</span></div>
        <div class="text-blue-300 text-[10px] mt-1" t-en="Years" t-ja="年の経験" t-zh="年经验" t-ko="년 경력">Years</div>
      </div>
      <div class="stat-card">
        <div class="text-white font-black text-xl">15</div>
        <div class="text-blue-300 text-[10px] mt-1" t-en="Specialists" t-ja="専門医" t-zh="专科医生" t-ko="전문의">Specialists</div>
      </div>
      <div class="stat-card">
        <div class="text-white font-black text-xl">13</div>
        <div class="text-blue-300 text-[10px] mt-1" t-en="Departments" t-ja="診療科" t-zh="科室" t-ko="진료과">Departments</div>
      </div>
      <div class="stat-card">
        <div class="text-white font-black text-xl">2<span class="text-amber-300 text-sm">–4h</span></div>
        <div class="text-blue-300 text-[10px] mt-1" t-en="All Done" t-ja="完了時間" t-zh="全程完成" t-ko="전체 소요">All Done</div>
      </div>
    </div>

  </div>
  <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style="width:100%;height:28px;display:block;margin-bottom:-2px"><path d="M0,20 C480,40 960,0 1440,24 L1440,40 L0,40Z" fill="#eef3ff"/></svg>
</header>
<div class="color-strip"></div>

<!-- ═══════ MIN HOSPITAL BRAND SECTION ═══════ -->
<section id="brand" class="py-12 px-4 sec-blue-light">
  <div class="max-w-5xl mx-auto">

    <!-- Eyebrow + heading -->
    <div class="mb-8 text-center">
      <p class="section-eyebrow" t-en="ABOUT MIN HOSPITAL" t-ja="민병院について" t-zh="关于民病院" t-ko="민병원 소개">ABOUT MIN HOSPITAL</p>
      <h2 class="section-h" t-en="Seoul's trusted surgical hospital for international patients" t-ja="外国人患者のためのソウル外科専門病院" t-zh="首尔专为外国患者设立的外科专科医院" t-ko="외국인 환자를 위한 서울 외과 전문병원">Seoul's trusted surgical hospital for international patients</h2>
      <p class="section-sub max-w-2xl mx-auto"
         t-en="Since 2008, Min Hospital has provided world-class gastroscopy, colonoscopy, thyroid screening, and cancer check-ups to thousands of international patients from over 30 countries."
         t-ja="2008年の設立以来、ミン病院は30カ国以上から訪れる外国人患者に、胃カメラ・大腸カメラ・甲状腺・がん検診などの世界水準の医療を提供しています。"
         t-zh="自2008年成立以来，民病院已为来自30多个国家的数千名外国患者提供世界级的胃镜、肠镜、甲状腺筛查和癌症体检服务。"
         t-ko="2008년 개원 이래, 민병원은 30개국 이상에서 방문한 수천 명의 외국인 환자들에게 위내시경·대장내시경·갑상선·암 검진 등 세계 수준의 의료서비스를 제공해 왔습니다.">
        Since 2008, Min Hospital has provided world-class gastroscopy, colonoscopy, thyroid screening, and cancer check-ups to thousands of international patients from over 30 countries.
      </p>
    </div>

    <!-- Award / credential cards -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      <div class="award-card">
        <div class="text-3xl font-black text-mb mb-1">500<span class="text-mb-gold text-xl">+</span></div>
        <div class="text-xs font-semibold text-gray-600 mb-1" t-en="Foreign patients / year" t-ja="外国人患者/年" t-zh="外国患者/年" t-ko="외국인 환자/년">Foreign patients / year</div>
        <div class="text-[10px] text-gray-400" t-en="From 30+ countries" t-ja="30カ国以上" t-zh="来自30+国家" t-ko="30개국 이상">From 30+ countries</div>
      </div>
      <div class="award-card">
        <div class="text-3xl font-black text-mb mb-1">17<span class="text-mb-gold text-xl">+</span></div>
        <div class="text-xs font-semibold text-gray-600 mb-1" t-en="Years of excellence" t-ja="年の実績" t-zh="年卓越表现" t-ko="년 운영 실적">Years of excellence</div>
        <div class="text-[10px] text-gray-400" t-en="Founded 2008" t-ja="2008年設立" t-zh="创立于2008年" t-ko="2008년 설립">Founded 2008</div>
      </div>
      <div class="award-card">
        <div class="text-3xl font-black text-mb mb-1">4.9<span class="text-yellow-400 text-xl">★</span></div>
        <div class="text-xs font-semibold text-gray-600 mb-1" t-en="Patient rating" t-ja="患者評価" t-zh="患者评分" t-ko="환자 만족도">Patient rating</div>
        <div class="text-[10px] text-gray-400" t-en="Based on 300+ reviews" t-ja="300件以上のレビュー" t-zh="300+评价" t-ko="300개+ 리뷰">Based on 300+ reviews</div>
      </div>
      <div class="award-card">
        <div class="text-3xl font-black text-mb mb-1">15</div>
        <div class="text-xs font-semibold text-gray-600 mb-1" t-en="Board-certified specialists" t-ja="専門医" t-zh="专科医生" t-ko="전문의">Board-certified specialists</div>
        <div class="text-[10px] text-gray-400" t-en="Across 13 departments" t-ja="13診療科" t-zh="跨13个科室" t-ko="13개 진료과">Across 13 departments</div>
      </div>
    </div>

    <!-- Certifications / awards row -->
    <div class="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
      <p class="text-xs font-bold text-mb uppercase tracking-widest mb-4" t-en="Certifications &amp; Recognition" t-ja="認定・受賞歴" t-zh="认证与荣誉" t-ko="인증 및 수상 내역">Certifications &amp; Recognition</p>
      <div class="grid sm:grid-cols-3 gap-4">
        <div class="flex gap-3 items-start">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background:#dbeafe"><i class="fas fa-certificate text-blue-600 text-sm"></i></div>
          <div>
            <p class="font-semibold text-mb text-xs mb-0.5" t-en="Ministry of Health Certified" t-ja="保健省認定機関" t-zh="卫生部认证机构" t-ko="보건부 외국인환자 유치 인증">Ministry of Health Certified</p>
            <p class="text-[11px] text-gray-500" t-en="Official govt designation for international patient care" t-ja="外国人患者診療の公式指定機関" t-zh="官方指定外国患者医疗机构" t-ko="공식 외국인환자 유치 의료기관">Official govt designation for international patient care</p>
          </div>
        </div>
        <div class="flex gap-3 items-start">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background:#fef3c7"><i class="fas fa-robot text-amber-500 text-sm"></i></div>
          <div>
            <p class="font-semibold text-mb text-xs mb-0.5" t-en="da Vinci SP Robotic Surgery" t-ja="ダヴィンチSPロボット手術" t-zh="达芬奇SP机器人手术" t-ko="다빈치SP 로봇 수술 도입">da Vinci SP Robotic Surgery</p>
            <p class="text-[11px] text-gray-500" t-en="Equipped with the da Vinci SP robotic surgical system for minimally invasive precision surgery." t-ja="低侵襲精密手術のためのダヴィンチSPロボット手術システムを導入しています。" t-zh="配备达芬奇SP机器人手术系统，实现微创精准手术。" t-ko="최소침습 정밀 수술을 위한 다빈치SP 로봇수술 시스템이 비치되어 있습니다.">Equipped with the da Vinci SP robotic surgical system for minimally invasive precision surgery.</p>
          </div>
        </div>
        <div class="flex gap-3 items-start">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background:#dcfce7"><i class="fas fa-shield-alt text-green-600 text-sm"></i></div>
          <div>
            <p class="font-semibold text-mb text-xs mb-0.5" t-en="Same-Day Biopsy &amp; Treatment" t-ja="当日生検・治療対応" t-zh="当天活检与治疗" t-ko="당일 조직검사·치료 가능">Same-Day Biopsy &amp; Treatment</p>
            <p class="text-[11px] text-gray-500" t-en="Only possible at a certified surgical hospital" t-ja="外科専門病院だからできること" t-zh="只有外科专科医院才能实现" t-ko="외과 전문병원만의 고유한 강점">Only possible at a certified surgical hospital</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SEO keyword content block -->
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="note-box">
        <p class="font-semibold text-mb text-sm mb-2" t-en="Endoscopy Specialists" t-ja="内視鏡専門" t-zh="内窥镜专科" t-ko="내시경 전문">
          <i class="fas fa-microscope mr-2 text-mb-light"></i>
          <span t-en="Endoscopy Specialists" t-ja="内視鏡専門" t-zh="内窥镜专科" t-ko="내시경 전문">Endoscopy Specialists</span>
        </p>
        <p class="text-xs text-gray-600 leading-relaxed"
           t-en="Min Hospital performs gastroscopy (stomach endoscopy) and colonoscopy (colon endoscopy) with FREE sedation. Detect stomach cancer, colon cancer, polyps, and H. pylori early — the same day as your visit."
           t-ja="ミン病院では、胃カメラ（上部消化管内視鏡）と大腸カメラ（下部消化管内視鏡）を鎮静剤無料で実施。胃がん・大腸がん・ポリープ・ピロリ菌を当日早期発見。"
           t-zh="民病院提供胃镜（上消化道内窥镜）和肠镜（结肠镜），免费镇静麻醉。当天即可早期发现胃癌、结肠癌、息肉及幽门螺旋杆菌。"
           t-ko="민병원은 위내시경(상부 소화관 내시경)과 대장내시경을 수면 마취 무료로 시행합니다. 위암·대장암·용종·헬리코박터균을 당일 조기 발견.">
          Min Hospital performs gastroscopy (stomach endoscopy) and colonoscopy (colon endoscopy) with FREE sedation. Detect stomach cancer, colon cancer, polyps, and H. pylori early — the same day as your visit.
        </p>
      </div>
      <div class="note-box">
        <p class="font-semibold text-mb text-sm mb-2">
          <i class="fas fa-dna mr-2 text-mb-light"></i>
          <span t-en="Thyroid &amp; Cancer Screening" t-ja="甲状腺・がん検診" t-zh="甲状腺及癌症筛查" t-ko="갑상선·암 검진">Thyroid &amp; Cancer Screening</span>
        </p>
        <p class="text-xs text-gray-600 leading-relaxed"
           t-en="Comprehensive thyroid ultrasound, tumor marker blood panels (AFP, CEA, CA19-9, PSA, CA125), and CT-based cancer screening programs. Early detection of thyroid nodules, liver cancer, gastric cancer, and more."
           t-ja="甲状腺超音波・腫瘍マーカー血液検査（AFP・CEA・CA19-9・PSA・CA125）・CT精密がん検診を完備。甲状腺結節・肝がん・胃がんなどの早期発見。"
           t-zh="全面的甲状腺超声、肿瘤标志物血液检测（AFP、CEA、CA19-9、PSA、CA125）及基于CT的癌症筛查项目。早期发现甲状腺结节、肝癌、胃癌等。"
           t-ko="갑상선 초음파, 종양표지자 혈액 검사(AFP·CEA·CA19-9·PSA·CA125), CT 정밀 암 검진 프로그램. 갑상선 결절·간암·위암 조기 발견.">
          Comprehensive thyroid ultrasound, tumor marker blood panels (AFP, CEA, CA19-9, PSA, CA125), and CT-based cancer screening programs. Early detection of thyroid nodules, liver cancer, gastric cancer, and more.
        </p>
      </div>
    </div>

  </div>
</section>
<div class="color-strip"></div>

<!-- ═══════ WHY SECTION ═══════ -->
<section id="why" class="py-12 px-4 sec-white">
  <div class="max-w-5xl mx-auto">
    <div class="mb-8">
      <p class="section-eyebrow" t-en="WHY MIN HOSPITAL" t-ja="なぜミン病院なのか" t-zh="为什么选择民病院" t-ko="왜 민병원인가요">WHY MIN HOSPITAL</p>
      <h2 class="section-h" t-en="6 reasons international patients choose us" t-ja="外国人患者が当院を選ぶ6つの理由" t-zh="外国患者选择我们的六大理由" t-ko="외국인 환자가 민병원을 선택하는 6가지 이유">6 reasons international patients choose us</h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div class="why-card flex gap-3 items-start">
        <div class="why-icon" style="background:#dbeafe"><i class="fas fa-certificate text-blue-600"></i></div>
        <div>
          <h3 class="font-semibold text-mb text-sm mb-1" t-en="Government-Certified Facility" t-ja="政府認定病院" t-zh="政府认证医疗机构" t-ko="정부 인증 의료기관">Government-Certified Facility</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="Official Ministry of Health designation for international patient care. Legal quality guarantees." t-ja="外国人患者診療の保健省公式認定機関。品質が法的に保証されています。" t-zh="卫生部官方认证的外国患者医疗机构，质量有法律保障。" t-ko="외국인환자 유치 보건부 공식 인증. 법적 품질 보장.">Official Ministry of Health designation for international patient care. Legal quality guarantees.</p>
        </div>
      </div>
      <div class="why-card flex gap-3 items-start">
        <div class="why-icon" style="background:#dcfce7"><i class="fas fa-language text-green-600"></i></div>
        <div>
          <h3 class="font-semibold text-mb text-sm mb-1" t-en="4-Language Medical Team" t-ja="4カ国語対応医療チーム" t-zh="四国语言医疗团队" t-ko="4개 국어 의료팀">4-Language Medical Team</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="English, Japanese, Chinese, Korean — from booking to post-checkup consultation." t-ja="予約から結果説明まで英語・日本語・中国語・韓国語で対応。" t-zh="从预约到检后咨询，全程英语、日语、中文、韩语服务。" t-ko="예약부터 결과 상담까지 영어, 일본어, 중국어, 한국어로 안내.">English, Japanese, Chinese, Korean — from booking to post-checkup consultation.</p>
        </div>
      </div>
      <div class="why-card flex gap-3 items-start">
        <div class="why-icon" style="background:#fef3c7"><i class="fas fa-user-md text-amber-600"></i></div>
        <div>
          <h3 class="font-semibold text-mb text-sm mb-1" t-en="Professor-Level Physicians" t-ja="大学教授レベルの医師" t-zh="教授级专科医生" t-ko="대학교수급 전문의">Professor-Level Physicians</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="15 specialists across 13 departments, trained at Korea's top universities." t-ja="韓国トップ大学出身の専門医15名、13の専門科に配置。" t-zh="15名专科医生分布于13个科室，均毕业于韩国顶尖大学。" t-ko="13개 진료과 15명의 전문의, 모두 국내 최고 대학 출신.">15 specialists across 13 departments, trained at Korea's top universities.</p>
        </div>
      </div>
      <div class="why-card flex gap-3 items-start">
        <div class="why-icon" style="background:#fce7f3"><i class="fas fa-procedures text-pink-600"></i></div>
        <div>
          <h3 class="font-semibold text-mb text-sm mb-1" t-en="Same-Day Treatment if Needed" t-ja="当日治療も対応可能" t-zh="如有需要当天即可治疗" t-ko="당일 치료 가능">Same-Day Treatment if Needed</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="Polyps or early-stage findings? Biopsy and treatment happen the same day — only at a surgical hospital." t-ja="ポリープや早期所見は同日生検・治療が可能。外科専門病院だからできることです。" t-zh="发现息肉或早期病变？当天即可活检和治疗——只有外科专科医院才能做到。" t-ko="용종이나 조기 발견 시 당일 조직검사·치료 가능. 외과 전문병원만의 강점.">Polyps or early-stage findings? Biopsy and treatment happen the same day — only at a surgical hospital.</p>
        </div>
      </div>
      <div class="why-card flex gap-3 items-start">
        <div class="why-icon" style="background:#ede9fe"><i class="fas fa-clock text-purple-600"></i></div>
        <div>
          <h3 class="font-semibold text-mb text-sm mb-1" t-en="Finished in 2–4 Hours" t-ja="2〜4時間で完了" t-zh="2-4小时内完成" t-ko="2~4시간 내 완료">Finished in 2–4 Hours</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="One-stop flow from arrival to doctor consultation. No waiting between departments." t-ja="到着から医師の結果説明まで一貫したフロー。科をまたいだ待ち時間なし。" t-zh="从到达到医生咨询一站式流程，无需在科室间等待。" t-ko="도착부터 결과 상담까지 원스톱. 부서 이동 대기 없음.">One-stop flow from arrival to doctor consultation. No waiting between departments.</p>
        </div>
      </div>
      <div class="why-card flex gap-3 items-start">
        <div class="why-icon" style="background:#cffafe"><i class="fas fa-subway text-cyan-600"></i></div>
        <div>
          <h3 class="font-semibold text-mb text-sm mb-1" t-en="5 Min from Mia Station" t-ja="美亜駅から徒歩5分" t-zh="美亚站步行5分钟" t-ko="미아역 5분 거리">5 Min from Mia Station</h3>
          <p class="text-xs text-gray-500 leading-relaxed" t-en="Seoul Metro Line 4, Exit 5. 30 min from Myeongdong. Easy from any part of Seoul." t-ja="ソウル地下鉄4号線5番出口。明洞から約30分。ソウル全域からアクセス便利。" t-zh="首尔地铁4号线5号出口，从明洞约30分钟，首尔各处均方便。" t-ko="4호선 미아역 5번 출구. 명동에서 30분. 서울 어디서든 접근 편리.">Seoul Metro Line 4, Exit 5. 30 min from Myeongdong. Easy from any part of Seoul.</p>
        </div>
      </div>
    </div>
    <div class="amber-box mt-5 flex gap-3 items-start">
      <div class="text-xl shrink-0 mt-0.5">💊</div>
      <div>
        <p class="font-semibold text-amber-800 text-sm mb-0.5" t-en="FREE Sedation for All Endoscopy Procedures" t-ja="全内視鏡検査で鎮静剤が無料" t-zh="所有内窥镜检查免费镇静麻醉" t-ko="모든 내시경 수면비 무료">FREE Sedation for All Endoscopy Procedures</p>
        <p class="text-xs text-amber-700 leading-relaxed" t-en="Gastroscopy and colonoscopy performed while you sleep comfortably — at no extra charge. Monitored by certified anesthesiologists." t-ja="胃カメラ・大腸カメラを安心して眠ったまま受けられます。追加費用なし。専任麻酔科医が管理。" t-zh="胃镜和肠镜检查可舒适入睡进行——无额外费用。由认证麻醉师全程监控。" t-ko="위내시경과 대장내시경을 편안하게 수면 상태로 — 추가 비용 없음. 마취 전문의 모니터링.">Gastroscopy and colonoscopy performed while you sleep comfortably — at no extra charge. Monitored by certified anesthesiologists.</p>
      </div>
    </div>

    <!-- ── 실제로 확인하세요: 민병원 영상 ── -->
    <div class="mt-8">
      <p class="text-xs font-bold text-mb uppercase tracking-widest mb-1 text-center"
         t-en="SEE IT FOR YOURSELF" t-ja="実際にご確認ください" t-zh="亲眼见证" t-ko="직접 확인해보세요">SEE IT FOR YOURSELF</p>
      <p class="text-[11px] text-gray-400 text-center mb-3"
         t-en="Korea Surgical No.1 – MIN HOSPITAL" t-ja="韓国外科No.1 – ミン病院" t-zh="韩国外科No.1 – 民病院" t-ko="한국 외과 No.1 – 민병원">Korea Surgical No.1 – MIN HOSPITAL</p>
      <div class="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100"
           style="padding-bottom:56.25%">
        <iframe
          src="https://www.youtube.com/embed/mY8y3xLEyug?rel=0&modestbranding=1"
          title="Korea Surgical No.1 – MIN HOSPITAL"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute inset-0 w-full h-full"
          style="border:0">
        </iframe>
      </div>
    </div>

  </div>
</section>
<div class="color-strip"></div>

<!-- ═══════ SURGERY SECTION ═══════ -->
<section id="surgery" class="py-12 px-4 sec-blue-deep">
  <div class="max-w-5xl mx-auto">

    <!-- Heading -->
    <div class="mb-8 text-center">
      <p class="section-eyebrow" style="background:rgba(255,255,255,.12);color:#a8c4ff;border-color:rgba(255,255,255,.2)"
         t-en="CHECKUP → SURGERY" t-ja="検診から手術まで" t-zh="检诊到手术" t-ko="검진 후 수술까지">CHECKUP → SURGERY</p>
      <h2 class="font-extrabold text-white mb-3" style="font-size:clamp(1.25rem,4vw,1.85rem);line-height:1.25"
          t-en="From diagnosis to surgery — all at Min Hospital"
          t-ja="診断から手術まで — ミン病院で完結"
          t-zh="从诊断到手术——一站式民病院"
          t-ko="검진 결과 이상 발견 시 바로 수술까지 — 민병원 원스톱">
        From diagnosis to surgery — all at Min Hospital
      </h2>
      <p class="text-blue-300 text-sm max-w-2xl mx-auto leading-relaxed"
         t-en="Min Hospital is a government-certified surgical hospital. If a health check-up reveals a condition requiring treatment, our surgical team can proceed immediately — no referrals, no waiting."
         t-ja="ミン病院は政府認定の外科専門病院です。健康診断で異常が見つかった場合、そのまま専門外科チームが対応します。紹介状不要・待ち時間なし。"
         t-zh="民病院是政府认证的外科专科医院。如体检发现异常，我们的外科团队可立即处理——无需转诊，无需等待。"
         t-ko="민병원은 대한민국 대표 외과 병원을 지향합니다. 건강검진에서 이상 소견 발견 시 별도 병원 이동 없이 당일 수술까지 진행 가능합니다.">
        Min Hospital is a government-certified surgical hospital. If a health check-up reveals a condition requiring treatment, our surgical team can proceed immediately — no referrals, no waiting.
      </p>
    </div>

    <!-- Surgery categories grid -->
    <div class="surg-grid sm:grid-cols-2" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,420px),1fr))">

      <!-- 1. 당뇨비만대사수술 -->
      <div class="surg-cat">
        <div class="surg-header" onclick="toggleSurg(this)">
          <div class="surg-num">1</div>
          <div class="surg-title-wrap">
            <div class="surg-title"
                 t-en="Bariatric &amp; Metabolic Surgery"
                 t-ja="糖尿病・肥満代謝手術"
                 t-zh="糖尿病肥胖代谢手术"
                 t-ko="당뇨비만대사수술">당뇨비만대사수술</div>
            <div class="surg-subtitle">Bariatric Surgery
              <span class="surg-badge badge-robot"><i class="fas fa-robot"></i> Robot option</span>
            </div>
          </div>
          <div class="surg-icon-wrap" style="background:#e0f2fe">
            <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20" cy="17" rx="12" ry="10" fill="#0ea5e9" opacity="0.85"/>
              <path d="M8 17 Q7 24 10 27 Q14 32 20 31 Q26 32 30 27 Q33 24 32 17" stroke="#0369a1" stroke-width="1.5" fill="none"/>
              <path d="M17 12 Q15 8 19 7 Q23 6 24 10" stroke="#0369a1" stroke-width="1.2" fill="none" stroke-linecap="round"/>
              <circle cx="20" cy="17" r="3.5" fill="#0369a1"/>
              <path d="M18.5 17 L20 15.5 L21.5 17 L20 18.5 Z" fill="white"/>
              <line x1="8" y1="35" x2="32" y2="35" stroke="#0369a1" stroke-width="2" stroke-linecap="round"/>
              <line x1="20" y1="30" x2="20" y2="35" stroke="#0369a1" stroke-width="1.5"/>
            </svg>
          </div>
          <i class="fas fa-chevron-down surg-toggle"></i>
        </div>
        <div class="surg-body">
          <div class="surg-items">
            <div class="surg-item">
              <div class="surg-dot">a</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Laparoscopic Sleeve Gastrectomy" t-ja="腹腔鏡下スリーブ状胃切除術" t-zh="腹腔镜袖状胃切除术" t-ko="위소매절제술">위소매절제술</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">b</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Laparoscopic Roux-en-Y Gastric Bypass" t-ja="腹腔鏡下ルーワイ胃バイパス術" t-zh="腹腔镜Roux-en-Y胃旁路术" t-ko="루와이 위 우회술">루와이 위 우회술</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">c</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Duodenal-Jejunal Bypass with Sleeve Gastrectomy" t-ja="十二指腸空腸バイパス術" t-zh="十二指肠-空肠旁路+袖状胃" t-ko="십이지장우회술">십이지장우회술</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">d</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Proximal Jejunal Bypass with Sleeve Gastrectomy" t-ja="近位空腸バイパス術" t-zh="近端空肠旁路+袖状胃" t-ko="근위부공장우회술">근위부공장우회술</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">e</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Gastric-ileojejunal Single Anastomosis Bypass" t-ja="胃・回腸空腸単一吻合バイパス" t-zh="胃-回空肠单吻合旁路" t-ko="위소매-공장우회술">위소매-공장우회술</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 2. 위풍선술 -->
      <div class="surg-cat">
        <div class="surg-header" onclick="toggleSurg(this)">
          <div class="surg-num">2</div>
          <div class="surg-title-wrap">
            <div class="surg-title"
                 t-en="Intragastric Balloon Insertion"
                 t-ja="胃内バルーン挿入術"
                 t-zh="胃内球囊置入术"
                 t-ko="위풍선술 (End-Ball)">위풍선술 (End-Ball)</div>
            <div class="surg-subtitle">Intragastric Balloon Insertion</div>
          </div>
          <div class="surg-icon-wrap" style="background:#fef3c7">
            <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20" cy="22" rx="13" ry="12" fill="#f59e0b" opacity="0.85"/>
              <ellipse cx="20" cy="22" rx="8" ry="7" fill="white" opacity="0.4"/>
              <path d="M20 8 Q22 4 20 2 Q18 4 20 8" stroke="#d97706" stroke-width="1.5" fill="none" stroke-linecap="round"/>
              <circle cx="20" cy="22" r="3" fill="#d97706"/>
              <path d="M14 16 Q20 12 26 16" stroke="#d97706" stroke-width="1" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
          <i class="fas fa-chevron-down surg-toggle"></i>
        </div>
        <div class="surg-body">
          <div class="surg-items">
            <div class="surg-item">
              <div class="surg-dot"><i class="fas fa-info text-[8px]"></i></div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Non-surgical weight loss procedure via endoscope" t-ja="内視鏡を用いた非手術的減量処置" t-zh="内镜非手术减重治疗" t-ko="내시경을 통한 비수술적 비만 치료">내시경을 통한 비수술적 비만 치료</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 3. 갑상선절제술 -->
      <div class="surg-cat">
        <div class="surg-header" onclick="toggleSurg(this)">
          <div class="surg-num">3</div>
          <div class="surg-title-wrap">
            <div class="surg-title"
                 t-en="Thyroidectomy"
                 t-ja="甲状腺切除術"
                 t-zh="甲状腺切除术"
                 t-ko="갑상선절제술">갑상선절제술</div>
            <div class="surg-subtitle">Thyroidectomy
              <span class="surg-badge badge-robot"><i class="fas fa-robot"></i> Robot option</span>
              <span class="surg-badge badge-scope"><i class="fas fa-microscope"></i> Checkup required</span>
            </div>
          </div>
          <div class="surg-icon-wrap" style="background:#fce7f3">
            <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6 L20 5 L25 6 L27 14 Q23 20 20 22 Q17 20 13 14 Z" fill="#ec4899" opacity="0.85"/>
              <path d="M13 14 Q10 19 11 25 L13 29" stroke="#be185d" stroke-width="2" stroke-linecap="round" fill="none"/>
              <path d="M27 14 Q30 19 29 25 L27 29" stroke="#be185d" stroke-width="2" stroke-linecap="round" fill="none"/>
              <path d="M13 29 Q16 33 20 33 Q24 33 27 29" stroke="#be185d" stroke-width="2" stroke-linecap="round" fill="none"/>
              <circle cx="20" cy="13" r="2.5" fill="#be185d"/>
            </svg>
          </div>
          <i class="fas fa-chevron-down surg-toggle"></i>
        </div>
        <div class="surg-body">
          <div class="surg-items">
            <div class="surg-item">
              <div class="surg-dot">a</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Thyroid Lobectomy (Hemi-thyroidectomy)" t-ja="甲状腺葉切除術（半切除）" t-zh="甲状腺腺叶切除术" t-ko="반절제술 (엽절제술)">반절제술 (엽절제술)</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">b</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Total Thyroidectomy" t-ja="甲状腺全摘術" t-zh="甲状腺全切除术" t-ko="전절제술">전절제술</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 4. 유방질환 -->
      <div class="surg-cat">
        <div class="surg-header" onclick="toggleSurg(this)">
          <div class="surg-num">4</div>
          <div class="surg-title-wrap">
            <div class="surg-title"
                 t-en="Breast Disease Surgery"
                 t-ja="乳房疾患手術"
                 t-zh="乳房疾病手术"
                 t-ko="유방질환">유방질환</div>
            <div class="surg-subtitle">Breast disease</div>
          </div>
          <div class="surg-icon-wrap" style="background:#fce7f3">
            <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 24 Q6 14 17 12 Q20 11 23 13 Q30 9 34 18 Q37 26 32 33 L8 33 Q4 29 6 24Z" fill="#f472b6" opacity="0.8"/>
              <line x1="20" y1="13" x2="20" y2="33" stroke="#be185d" stroke-width="1.2" stroke-dasharray="2.5 1.5"/>
              <circle cx="16" cy="23" r="3" fill="#be185d" opacity="0.35"/>
              <circle cx="25" cy="21" r="3" fill="#be185d" opacity="0.35"/>
            </svg>
          </div>
          <i class="fas fa-chevron-down surg-toggle"></i>
        </div>
        <div class="surg-body">
          <div class="surg-items">
            <div class="surg-item">
              <div class="surg-dot">a</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Pre-test (Breast evaluation)" t-ja="事前検査（乳房評価）" t-zh="术前检查（乳房评估）" t-ko="사전검사">사전검사 (Pre-test)</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">b</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Excision of Benign Breast Tumor" t-ja="乳房良性腫瘍摘出術" t-zh="乳房良性肿瘤切除术" t-ko="유방양성종양절제">유방양성종양절제</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">c</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Modified Radical Mastectomy with Lymph Node Dissection" t-ja="乳房全切除術＋リンパ節郭清" t-zh="改良根治性乳房切除+淋巴清扫" t-ko="유방암수술 전절제">유방암수술 전절제</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">d</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Breast-Conserving Surgery + Reconstruction" t-ja="乳房温存手術＋再建" t-zh="保乳手术+乳房重建" t-ko="유방암 보존절제 및 재건">유방암 보존절제 및 재건</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">e</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Nipple Reconstruction" t-ja="乳頭再建術" t-zh="乳头重建术" t-ko="함몰유두 (Nipple reconstruction)">함몰유두</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">f</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Excision of Accessory Breast" t-ja="副乳切除術" t-zh="副乳切除术" t-ko="부유방 절제">부유방 (Excision of Accessory Breast)</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">g</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Gynecomastia (Subcutaneous Mastectomy)" t-ja="女性化乳房症（皮下乳腺切除術）" t-zh="男性乳腺发育（皮下乳腺切除）" t-ko="여성형유방 (Gynecomastia)">여성형유방</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 5. 담낭수술 -->
      <div class="surg-cat">
        <div class="surg-header" onclick="toggleSurg(this)">
          <div class="surg-num">5</div>
          <div class="surg-title-wrap">
            <div class="surg-title"
                 t-en="Laparoscopic Cholecystectomy (Gallbladder)"
                 t-ja="腹腔鏡下胆嚢摘出術"
                 t-zh="腹腔镜胆囊切除术"
                 t-ko="담낭수술">담낭수술</div>
            <div class="surg-subtitle">Laparoscopic cholecystectomy
              <span class="surg-badge badge-robot"><i class="fas fa-robot"></i> Robot option</span>
              <span class="surg-badge badge-scope"><i class="fas fa-microscope"></i> Checkup required</span>
            </div>
          </div>
          <div class="surg-icon-wrap" style="background:#fef9c3">
            <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="25" cy="13" rx="8" ry="6" fill="#eab308" opacity="0.85"/>
              <path d="M21 17 L18 24 Q16 29 19 33 Q23 37 27 33 Q31 29 29 24 L26 17" fill="#fde047" opacity="0.8"/>
              <path d="M25 19 L25 35" stroke="#ca8a04" stroke-width="1.5"/>
              <path d="M6 11 Q6 8 12 8 Q18 8 21 13 Q17 11 12 14 Q7 17 7 22 Q6 19 6 11Z" fill="#fde047" opacity="0.6"/>
              <circle cx="25" cy="13" r="2.5" fill="#ca8a04"/>
            </svg>
          </div>
          <i class="fas fa-chevron-down surg-toggle"></i>
        </div>
        <div class="surg-body">
          <div class="surg-items">
            <div class="surg-item">
              <div class="surg-dot"><i class="fas fa-info text-[8px]"></i></div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Laparoscopic gallbladder removal" t-ja="腹腔鏡による胆嚢摘出（最小侵襲）" t-zh="腹腔镜微创胆囊切除" t-ko="복강경 담낭 절제 (최소침습)">복강경 담낭 절제 (최소침습)</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 6. 탈장수술 -->
      <div class="surg-cat">
        <div class="surg-header" onclick="toggleSurg(this)">
          <div class="surg-num">6</div>
          <div class="surg-title-wrap">
            <div class="surg-title"
                 t-en="Hernia Repair Surgery"
                 t-ja="ヘルニア修復術"
                 t-zh="疝气修复手术"
                 t-ko="탈장수술">탈장수술</div>
            <div class="surg-subtitle">Hernia
              <span class="surg-badge badge-scope"><i class="fas fa-microscope"></i> Checkup required</span>
            </div>
          </div>
          <div class="surg-icon-wrap" style="background:#dcfce7">
            <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 8 L14 24 Q14 28 18 30 Q22 32 26 30 Q30 28 30 24 L30 18" stroke="#16a34a" stroke-width="2" fill="none" stroke-linecap="round"/>
              <ellipse cx="22" cy="18" rx="6" ry="4" fill="#16a34a" opacity="0.6"/>
              <path d="M14 16 L22 14" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="14" cy="8" r="3" fill="#16a34a"/>
              <path d="M24 30 L26 36" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M20 30 L18 36" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <i class="fas fa-chevron-down surg-toggle"></i>
        </div>
        <div class="surg-body">
          <div class="surg-items">
            <div class="surg-item">
              <div class="surg-dot"><i class="fas fa-info text-[8px]"></i></div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Laparoscopic hernia repair" t-ja="腹腔鏡下ヘルニア修復術" t-zh="腹腔镜疝气修复" t-ko="복강경 탈장 수술">복강경 탈장 수술</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 7. 항문수술 -->
      <div class="surg-cat">
        <div class="surg-header" onclick="toggleSurg(this)">
          <div class="surg-num">7</div>
          <div class="surg-title-wrap">
            <div class="surg-title"
                 t-en="Anal Surgery"
                 t-ja="肛門手術"
                 t-zh="肛门手术"
                 t-ko="항문수술">항문수술</div>
            <div class="surg-subtitle">Anal surgery · Hemorrhoids · Anal fistulas
              <span class="surg-badge badge-scope"><i class="fas fa-microscope"></i> Checkup required</span>
            </div>
          </div>
          <div class="surg-icon-wrap" style="background:#fce7f3">
            <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8 L30 8 L30 14 Q30 20 20 22 Q10 20 10 14 Z" fill="#f9a8d4" opacity="0.85"/>
              <path d="M10 14 Q10 26 14 30 Q17 34 20 34 Q23 34 26 30 Q30 26 30 14" fill="#fbcfe8" opacity="0.7"/>
              <line x1="20" y1="5" x2="20" y2="8" stroke="#be185d" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M16 18 Q20 20 24 18" stroke="#be185d" stroke-width="1" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
          <i class="fas fa-chevron-down surg-toggle"></i>
        </div>
        <div class="surg-body">
          <div class="surg-items">
            <div class="surg-item">
              <div class="surg-dot"><i class="fas fa-check text-[8px]"></i></div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Hemorrhoid Surgery" t-ja="痔核手術" t-zh="痔疮手术" t-ko="치질 수술 (Hemorrhoids)">치질 수술 (Hemorrhoids)</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot"><i class="fas fa-check text-[8px]"></i></div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Anal Fistula Surgery" t-ja="痔瘻手術" t-zh="肛瘘手术" t-ko="치루 수술 (Anal fistulas)">치루 수술 (Anal fistulas)</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 8. 맹장수술 -->
      <div class="surg-cat">
        <div class="surg-header" onclick="toggleSurg(this)">
          <div class="surg-num">8</div>
          <div class="surg-title-wrap">
            <div class="surg-title"
                 t-en="Laparoscopic Appendectomy"
                 t-ja="腹腔鏡下虫垂切除術"
                 t-zh="腹腔镜阑尾切除术"
                 t-ko="맹장수술">맹장수술</div>
            <div class="surg-subtitle">Laparoscopic appendectomy
              <span class="surg-badge badge-scope"><i class="fas fa-microscope"></i> Checkup required</span>
            </div>
          </div>
          <div class="surg-icon-wrap" style="background:#e0f2fe">
            <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="7" width="24" height="28" rx="4" fill="#bae6fd" opacity="0.85"/>
              <rect x="15" y="4" width="10" height="7" rx="2" fill="#0284c7"/>
              <line x1="13" y1="18" x2="27" y2="18" stroke="#0369a1" stroke-width="2" stroke-linecap="round"/>
              <line x1="13" y1="24" x2="23" y2="24" stroke="#0369a1" stroke-width="2" stroke-linecap="round"/>
              <path d="M13 30 L16 33 L21 27" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <i class="fas fa-chevron-down surg-toggle"></i>
        </div>
        <div class="surg-body">
          <div class="surg-items">
            <div class="surg-item">
              <div class="surg-dot"><i class="fas fa-info text-[8px]"></i></div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Minimally invasive appendix removal" t-ja="最小侵襲による虫垂切除術" t-zh="微创阑尾切除" t-ko="복강경 맹장 절제술 (최소침습)">복강경 맹장 절제술 (최소침습)</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 9. 하지정맥류 -->
      <div class="surg-cat">
        <div class="surg-header" onclick="toggleSurg(this)">
          <div class="surg-num">9</div>
          <div class="surg-title-wrap">
            <div class="surg-title"
                 t-en="Varicose Vein Surgery"
                 t-ja="下肢静脈瘤手術"
                 t-zh="下肢静脉曲张手术"
                 t-ko="하지정맥류">하지정맥류</div>
            <div class="surg-subtitle">Varicose veins
              <span class="surg-badge badge-scope"><i class="fas fa-microscope"></i> Checkup required</span>
            </div>
          </div>
          <div class="surg-icon-wrap" style="background:#ede9fe">
            <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3 L13 37 Q13 39 15 39 L18 39 Q20 39 20 37 L20 3 Z" fill="#c4b5fd" opacity="0.3"/>
              <path d="M16 8 Q20 12 16 17 Q12 22 16 27 Q20 32 16 37" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round" fill="none"/>
              <circle cx="16" cy="17" r="2.5" fill="#7c3aed" opacity="0.7"/>
              <circle cx="16" cy="27" r="2" fill="#7c3aed" opacity="0.7"/>
              <path d="M22 10 Q26 14 22 19 Q18 23 22 27" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.7"/>
            </svg>
          </div>
          <i class="fas fa-chevron-down surg-toggle"></i>
        </div>
        <div class="surg-body">
          <div class="surg-items">
            <div class="surg-item">
              <div class="surg-dot">a</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Cyanoacrylate Vein Closure (VenaSeal™)" t-ja="シアノアクリレート静脈閉塞術" t-zh="氰基丙烯酸酯静脉封堵术" t-ko="비나스 (Saphenous vein occlusion)">비나스 (사이아노아크릴레이트 정맥 폐쇄술)</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">b</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Total Stripping of Saphenous Vein" t-ja="大伏在静脈全剥脱術" t-zh="大隐静脉全剥脱术" t-ko="일반수술 (Total Stripping)">일반수술 (Total Stripping)</div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 10. 건강검진 중 용종 제거 -->
      <div class="surg-cat" style="grid-column:1/-1">
        <div class="surg-header" onclick="toggleSurg(this)">
          <div class="surg-num" style="background:linear-gradient(135deg,#22c55e,#16a34a)">✚</div>
          <div class="surg-title-wrap">
            <div class="surg-title"
                 t-en="Polyp Removal During Checkup (Same-day)"
                 t-ja="検診中のポリープ切除（当日）"
                 t-zh="体检中同日息肉摘除"
                 t-ko="건강검진 시 용종 제거 (당일)">건강검진 시 용종 제거 (당일)</div>
            <div class="surg-subtitle">Removal of polyps during Medical checkup
              <span class="surg-badge badge-onestop"><i class="fas fa-bolt"></i> Same-day</span>
            </div>
          </div>
          <div class="surg-icon-wrap" style="background:#dcfce7">
            <svg viewBox="0 0 40 40" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="9" y="7" width="22" height="27" rx="3.5" fill="#86efac" opacity="0.85"/>
              <rect x="15" y="4" width="10" height="7" rx="2" fill="#16a34a"/>
              <line x1="13" y1="17" x2="27" y2="17" stroke="#166534" stroke-width="2" stroke-linecap="round"/>
              <line x1="13" y1="22" x2="27" y2="22" stroke="#166534" stroke-width="2" stroke-linecap="round"/>
              <path d="M14 29 L17 32 L22 26" stroke="#166534" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <i class="fas fa-chevron-down surg-toggle open"></i>
        </div>
        <div class="surg-body open">
          <div class="surg-items">
            <div class="surg-item">
              <div class="surg-dot">a</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Polyp Removal (1 polyp)" t-ja="ポリープ切除（1個）" t-zh="息肉摘除（1枚）" t-ko="용종제거 1개 (Removal of polyps 1EA)">용종제거 1개</div>

              </div>
            </div>
            <div class="surg-item">
              <div class="surg-dot">b</div>
              <div class="surg-item-text">
                <div class="surg-item-ko" t-en="Additional Polyp Removal (per polyp)" t-ja="追加ポリープ切除（1個追加ごと）" t-zh="追加息肉摘除（每增加1枚）" t-ko="용종제거 추가 1개씩 (Per additional one)">용종제거 추가 (1개당 추가)</div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </div><!-- /surg-grid -->

  </div>
</section>
<div class="color-strip"></div>

<!-- ═══════ PACKAGES ═══════ -->
<section id="packages" class="py-12 px-4 sec-lavender">
  <div class="max-w-5xl mx-auto">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
      <div>
        <p class="section-eyebrow" t-en="PACKAGES" t-ja="パッケージ一覧" t-zh="体检套餐" t-ko="검진 패키지">PACKAGES</p>
        <h2 class="section-h" t-en="6 plans, tailored to your age &amp; needs" t-ja="年齢と目的に合わせた6つのプラン" t-zh="6个套餐，按年龄和需求量身定制" t-ko="나이와 필요에 맞춘 6가지 플랜">6 plans, tailored to your age &amp; needs</h2>
      </div>

    </div>

    <!-- Filter tabs -->
    <div class="tabs-row mb-6">
      <button class="tab-pill on" onclick="filterPkg('all',this)" t-en="All Packages" t-ja="すべて" t-zh="全部" t-ko="전체">All Packages</button>
      <button class="tab-pill" onclick="filterPkg('age',this)" t-en="By Age Group" t-ja="年齢別" t-zh="按年龄" t-ko="연령별">By Age Group</button>
      <button class="tab-pill" onclick="filterPkg('special',this)" t-en="Specialist Programs" t-ja="専門プログラム" t-zh="专科项目" t-ko="특별 프로그램">Specialist Programs</button>
    </div>

    <!-- Package grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" id="pkgGrid">

      <!-- PKG 1 -->
      <article class="pkg-card" data-cat="age">
        <div class="p-5" style="background:#0f3172">
          <span class="age-badge" t-en="Ages 20–30s" t-ja="20〜30代" t-zh="20-30岁" t-ko="20~30대">Ages 20–30s</span>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-white font-bold text-base">NICE [2030]</h3>
              <p class="text-blue-200 text-xs mt-0.5" t-en="Essential screening for young adults" t-ja="若い世代の基本検診" t-zh="年轻人的基础筛查" t-ko="젊은 층 기본 검진">Essential screening for young adults</p>
            </div>
            <div class="text-right shrink-0 ml-3">
              <div class="text-white font-black text-xl">₩230K</div>
              <div class="text-blue-300 text-[10px]">≈ $165 / ¥25,000</div>
            </div>
          </div>
          <div class="flex gap-3 mt-2.5 text-blue-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>2–3 hrs</span>
            <span class="bg-white/15 rounded px-1.5 py-0.5 font-semibold" t-en="Pick 1 CT option" t-ja="CT 1択" t-zh="选1项CT" t-ko="CT 1개 선택">Pick 1 CT option</span>
          </div>
        </div>
        <div class="p-5">
          <p class="text-[10px] font-bold text-mb uppercase tracking-wider mb-2" t-en="Includes" t-ja="検査内容" t-zh="包含项目" t-ko="포함 항목">Includes</p>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-500"></i><span t-en="Gastroscopy (FREE sedation)" t-ja="胃カメラ（鎮静剤無料）" t-zh="胃镜（免费镇静）" t-ko="위내시경 (수면 무료)">Gastroscopy (FREE sedation)</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-500"></i><span t-en="Thyroid + Abdominal Ultrasound" t-ja="甲状腺・腹部超音波" t-zh="甲状腺+腹部超声波" t-ko="갑상선+복부 초음파">Thyroid + Abdominal Ultrasound</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-500"></i><span t-en="Breast / Uterus / Prostate Ultrasound" t-ja="乳房・子宮・前立腺超音波" t-zh="乳房/子宫/前列腺超声" t-ko="유방/자궁/전립선 초음파">Breast / Uterus / Prostate Ultrasound</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-500"></i><span t-en="Hepatitis B &amp; C, Blood Panel, Lipids" t-ja="肝炎B&amp;C・血液・脂質検査" t-zh="乙肝丙肝、血液、血脂检查" t-ko="B/C형 간염, 혈액, 지질">Hepatitis B &amp; C, Blood Panel, Lipids</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-500"></i><span t-en="ECG + Chest X-ray + Urinalysis" t-ja="心電図・胸部X線・尿検査" t-zh="心电图+胸部X光+尿液" t-ko="심전도+흉부X선+소변검사">ECG + Chest X-ray + Urinalysis</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-500"></i><span t-en="Gynecologic Exam (Pap smear, female)" t-ja="婦人科検査（女性）" t-zh="妇科检查（女性）" t-ko="부인과 검사 (여성)">Gynecologic Exam (Pap smear, female)</span></div>
          </div>
        </div>
      </article>

      <!-- PKG 2 -->
      <article class="pkg-card" data-cat="special">
        <div class="p-5" style="background:#0c4a6e">
          <span class="age-badge" t-en="Digestive Specialist" t-ja="消化器専門" t-zh="消化专科" t-ko="소화기 전문">Digestive Specialist</span>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-white font-bold text-base" t-en="Digestive Precision" t-ja="消化器精密検診" t-zh="消化精密体检" t-ko="소화기정밀 검진">Digestive Precision</h3>
              <p class="text-blue-200 text-xs mt-0.5" t-en="Liver, gut &amp; GI tract deep screening" t-ja="肝臓・腸・消化管の精密検査" t-zh="肝脏、肠道及消化道深度筛查" t-ko="간·장·소화관 정밀 검진">Liver, gut &amp; GI tract deep screening</p>
            </div>
            <div class="text-right shrink-0 ml-3">
              <div class="text-white font-black text-xl">₩290K</div>
              <div class="text-blue-300 text-[10px]">≈ $210 / ¥31,000</div>
            </div>
          </div>
          <div class="flex gap-3 mt-2.5 text-blue-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>3–4 hrs</span>
            <span class="bg-white/15 rounded px-1.5 py-0.5 font-semibold" t-en="Pick 1 CT option" t-ja="CT 1択" t-zh="选1项CT" t-ko="CT 1개 선택">Pick 1 CT option</span>
          </div>
        </div>
        <div class="p-5">
          <p class="text-[10px] font-bold text-mb uppercase tracking-wider mb-2" t-en="Includes" t-ja="検査内容" t-zh="包含项目" t-ko="포함 항목">Includes</p>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-check inc-icon text-cyan-500"></i><span t-en="Colonoscopy ★ FREE sedation" t-ja="大腸カメラ ★鎮静剤無料" t-zh="肠镜★免费镇静" t-ko="대장내시경 ★수면 무료">Colonoscopy ★ FREE sedation</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-cyan-500"></i><span t-en="Liver FibroScan" t-ja="肝線維化スキャン" t-zh="肝纤维化扫描" t-ko="간섬유화 검사">Liver FibroScan</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-cyan-500"></i><span t-en="Carotid Artery Ultrasound" t-ja="頸動脈超音波" t-zh="颈动脉超声波" t-ko="경동맥 초음파">Carotid Artery Ultrasound</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-cyan-500"></i><span t-en="5 Tumor Markers (AFP, CEA, CA19-9, PSA, CA125)" t-ja="腫瘍マーカー5種" t-zh="5种肿瘤标志物" t-ko="5가지 암표지자">5 Tumor Markers (AFP, CEA, CA19-9, PSA, CA125)</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-cyan-500"></i><span t-en="Rheumatoid Arthritis + Hormone Test" t-ja="リウマチ＋ホルモン検査" t-zh="类风湿关节炎+激素检查" t-ko="류마티즘+호르몬 검사">Rheumatoid Arthritis + Hormone Test</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-cyan-500"></i><span t-en="Bone Density + Full Blood Panel" t-ja="骨密度＋全血液検査" t-zh="骨密度+全血液检查" t-ko="골밀도+전체 혈액검사">Bone Density + Full Blood Panel</span></div>
          </div>
        </div>
      </article>

      <!-- PKG 3 -->
      <article class="pkg-card" data-cat="age">
        <div class="p-5" style="background:#1e3a5f">
          <span class="age-badge" t-en="Ages 40–50s" t-ja="40〜50代" t-zh="40-50岁" t-ko="40~50대">Ages 40–50s</span>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-white font-bold text-base">NICE [4050]</h3>
              <p class="text-blue-200 text-xs mt-0.5" t-en="CT scan + comprehensive screening" t-ja="CTスキャン＋総合検診" t-zh="CT扫描+综合体检" t-ko="CT 스캔 포함 종합검진">CT scan + comprehensive screening</p>
            </div>
            <div class="text-right shrink-0 ml-3">
              <div class="text-white font-black text-xl">₩350K</div>
              <div class="text-blue-300 text-[10px]">≈ $250 / ¥37,000</div>
            </div>
          </div>
          <div class="flex gap-3 mt-2.5 text-blue-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>3–4 hrs</span>
            <span class="bg-white/15 rounded px-1.5 py-0.5 font-semibold" t-en="Pick 2 CT options" t-ja="CT 2択" t-zh="选2项CT" t-ko="CT 2개 선택">Pick 2 CT options</span>
          </div>
        </div>
        <div class="p-5">
          <p class="text-[10px] font-bold text-mb uppercase tracking-wider mb-2" t-en="Includes" t-ja="検査内容" t-zh="包含项目" t-ko="포함 항목">Includes</p>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-600"></i><span t-en="Colonoscopy + Gastroscopy (FREE sedation)" t-ja="大腸・胃カメラ（鎮静剤無料）" t-zh="肠镜+胃镜（免费镇静）" t-ko="대장+위내시경 (수면 무료)">Colonoscopy + Gastroscopy (FREE sedation)</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-600"></i><span t-en="CT — Pick 2: Brain / Chest / Spine / Abdomen / Coronary" t-ja="CT 2択（脳・胸・脊椎・腹部・冠動脈）" t-zh="CT选2项：脑/胸/脊椎/腹部/冠状动脉" t-ko="CT 2개: 두부/흉부/척추/복부/관상동맥">CT — Pick 2: Brain / Chest / Spine / Abdomen / Coronary</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-600"></i><span t-en="Breast + Carotid Artery Ultrasound" t-ja="乳房・頸動脈超音波" t-zh="乳房+颈动脉超声波" t-ko="유방+경동맥 초음파">Breast + Carotid Artery Ultrasound</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-600"></i><span t-en="5 Tumor Markers" t-ja="腫瘍マーカー5種" t-zh="5种肿瘤标志物" t-ko="5가지 암표지자">5 Tumor Markers</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-blue-600"></i><span t-en="Bone Density + Mammography (female)" t-ja="骨密度＋マンモグラフィー（女性）" t-zh="骨密度+乳房X光（女性）" t-ko="골밀도+유방X선 (여성)">Bone Density + Mammography (female)</span></div>
          </div>
        </div>
      </article>

      <!-- PKG 4 Women's -->
      <article class="pkg-card" data-cat="special">
        <div class="p-5" style="background:#5b21b6">
          <span class="age-badge" t-en="Women Only ♀" t-ja="女性専用 ♀" t-zh="仅限女性 ♀" t-ko="여성 전용 ♀">Women Only ♀</span>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-white font-bold text-base" t-en="Women's Precision" t-ja="女性精密検診" t-zh="女性精密体检" t-ko="여성정밀 검진">Women's Precision</h3>
              <p class="text-purple-200 text-xs mt-0.5" t-en="Complete women's health with CT + hormones" t-ja="CT＋ホルモン女性総合検診" t-zh="含CT和激素的全面女性健康检查" t-ko="CT+호르몬 여성 종합검진">Complete women's health with CT + hormones</p>
            </div>
            <div class="text-right shrink-0 ml-3">
              <div class="text-white font-black text-xl">₩390K</div>
              <div class="text-purple-300 text-[10px]">≈ $280 / ¥42,000</div>
            </div>
          </div>
          <div class="flex gap-3 mt-2.5 text-purple-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>3–4 hrs</span>
            <span class="bg-white/15 rounded px-1.5 py-0.5 font-semibold" t-en="Pick 2 CT options" t-ja="CT 2択" t-zh="选2项CT" t-ko="CT 2개 선택">Pick 2 CT options</span>
          </div>
        </div>
        <div class="p-5">
          <p class="text-[10px] font-bold uppercase tracking-wider mb-2" style="color:#7c3aed" t-en="Includes" t-ja="検査内容" t-zh="包含项目" t-ko="포함 항목">Includes</p>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-check inc-icon text-purple-500"></i><span t-en="Colonoscopy + Gastroscopy (FREE sedation)" t-ja="大腸・胃カメラ 鎮静剤無料" t-zh="肠镜+胃镜（免费镇静）" t-ko="대장+위내시경 수면 무료">Colonoscopy + Gastroscopy (FREE sedation)</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-purple-500"></i><span t-en="CT — Pick 2 from 6 options" t-ja="CT 6種から2択" t-zh="CT 6项中选2项" t-ko="CT 6가지 중 2개 선택">CT — Pick 2 from 6 options</span></div>
            <div class="inc-item"><i class="fas fa-venus inc-icon text-pink-500"></i><span t-en="Pap Smear + HPV PCR Test" t-ja="子宮頸がん＋HPV-PCR" t-zh="宫颈涂片+HPV PCR" t-ko="자궁암+HPV PCR">Pap Smear + HPV PCR Test</span></div>
            <div class="inc-item"><i class="fas fa-venus inc-icon text-pink-500"></i><span t-en="Female Hormone Panel (FSH, LH, E2, Prolactin)" t-ja="女性ホルモン4種" t-zh="女性激素4项" t-ko="여성 호르몬 4종">Female Hormone Panel (FSH, LH, E2, Prolactin)</span></div>
            <div class="inc-item"><i class="fas fa-venus inc-icon text-pink-500"></i><span t-en="Breast Ultrasound + Mammography" t-ja="乳房超音波＋マンモグラフィー" t-zh="乳房超声+乳房X光" t-ko="유방초음파+유방X선">Breast Ultrasound + Mammography</span></div>
            <div class="inc-item"><i class="fas fa-venus inc-icon text-pink-500"></i><span t-en="Uterus Ultrasound" t-ja="子宮超音波" t-zh="子宫超声波" t-ko="자궁 초음파">Uterus Ultrasound</span></div>
          </div>
        </div>
      </article>

      <!-- PKG 5 Brain -->
      <article class="pkg-card" data-cat="special">
        <div class="p-5" style="background:#064e3b">
          <span class="age-badge" t-en="Brain + DNA" t-ja="脳＋DNA" t-zh="脑部+DNA" t-ko="뇌+유전자">Brain + DNA</span>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-white font-bold text-base" t-en="Brain &amp; Genetics" t-ja="脳・遺伝子精密検診" t-zh="脑部及基因精密体检" t-ko="뇌·유전자정밀 검진">Brain &amp; Genetics</h3>
              <p class="text-green-200 text-xs mt-0.5" t-en="Brain imaging + genetic disease risk" t-ja="脳画像＋遺伝性疾患リスク" t-zh="脑部影像+遗传疾病风险" t-ko="뇌 영상 + 유전성 질환 위험도">Brain imaging + genetic disease risk</p>
            </div>
            <div class="text-right shrink-0 ml-3">
              <div class="text-white font-black text-xl">₩400K</div>
              <div class="text-green-300 text-[10px]">≈ $285 / ¥43,000</div>
            </div>
          </div>
          <div class="flex gap-3 mt-2.5 text-green-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>3–4 hrs</span>
            <span class="bg-white/15 rounded px-1.5 py-0.5 font-semibold" t-en="Pick 1 CT option" t-ja="CT 1択" t-zh="选1项CT" t-ko="CT 1개 선택">Pick 1 CT option</span>
          </div>
        </div>
        <div class="p-5">
          <p class="text-[10px] font-bold uppercase tracking-wider mb-2 text-green-700" t-en="Includes" t-ja="検査内容" t-zh="包含项目" t-ko="포함 항목">Includes</p>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-brain inc-icon text-green-600"></i><span t-en="Brain CT (neurological disease screening)" t-ja="脳CT（神経疾患スクリーニング）" t-zh="脑部CT（神经系统筛查）" t-ko="두부CT (뇌신경질환 정밀)">Brain CT (neurological disease screening)</span></div>
            <div class="inc-item"><i class="fas fa-brain inc-icon text-green-600"></i><span t-en="Transcranial Doppler (brain blood flow)" t-ja="経頭蓋ドップラー（脳血流）" t-zh="经颅多普勒（脑血流）" t-ko="뇌혈류 초음파">Transcranial Doppler (brain blood flow)</span></div>
            <div class="inc-item"><i class="fas fa-dna inc-icon text-teal-600"></i><span t-en="Comprehensive Genetic Testing (26–27 genes)" t-ja="総合遺伝子検査（26〜27種）" t-zh="综合基因检测（26-27项）" t-ko="종합 유전자 검사 26~27종">Comprehensive Genetic Testing (26–27 genes)</span></div>
            <div class="inc-item"><i class="fas fa-dna inc-icon text-teal-600"></i><span t-en="Cancer Gene Panel (7 cancer types)" t-ja="がん遺伝子パネル（7種）" t-zh="癌症基因组合（7种癌症）" t-ko="암 유전자 패널 (7종)">Cancer Gene Panel (7 cancer types)</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-green-600"></i><span t-en="Hormone Test (Male + Female)" t-ja="ホルモン検査（男女）" t-zh="激素检查（男女）" t-ko="남녀 호르몬 검사">Hormone Test (Male + Female)</span></div>
            <div class="inc-item"><i class="fas fa-check inc-icon text-green-600"></i><span t-en="Liver FibroScan + Full Ultrasound" t-ja="肝線維化＋全身超音波" t-zh="肝纤维化+全身超声波" t-ko="간섬유화+전신 초음파">Liver FibroScan + Full Ultrasound</span></div>
          </div>
        </div>
      </article>

      <!-- PKG 6 FEATURED -->
      <article class="pkg-card featured" data-cat="age">
        <div class="ribbon" t-en="BEST VALUE" t-ja="最高コスパ" t-zh="最超值" t-ko="최고 가성비">BEST VALUE</div>
        <div class="p-5" style="background:#1c1a4a">
          <span class="age-badge" t-en="Ages 60–70s" t-ja="60〜70代" t-zh="60-70岁" t-ko="60~70대">Ages 60–70s</span>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-white font-bold text-base">NICE [6070] ⭐</h3>
              <p class="text-indigo-200 text-xs mt-0.5" t-en="Most complete senior health program" t-ja="シニア向け最高レベルの総合検診" t-zh="最全面的老年人健康检查" t-ko="시니어 최고 수준 종합검진">Most complete senior health program</p>
            </div>
            <div class="text-right shrink-0 ml-3">
              <div class="font-black text-xl" style="color:#e8a020">₩490K</div>
              <div class="text-indigo-300 text-[10px]">≈ $350 / ¥53,000</div>
            </div>
          </div>
          <div class="flex gap-3 mt-2.5 text-indigo-200 text-[11px]">
            <span><i class="fas fa-clock mr-1"></i>3–4 hrs</span>
            <span class="bg-white/15 rounded px-1.5 py-0.5 font-semibold" t-en="Pick 3 CT options" t-ja="CT 3択" t-zh="选3项CT" t-ko="CT 3개 선택">Pick 3 CT options</span>
          </div>
        </div>
        <div class="p-5">
          <p class="text-[10px] font-bold uppercase tracking-wider mb-2" style="color:#7c3aed" t-en="Includes" t-ja="検査内容" t-zh="包含项目" t-ko="포함 항목">Includes</p>
          <div class="space-y-0.5">
            <div class="inc-item"><i class="fas fa-check-double inc-icon text-indigo-500"></i><span t-en="Everything in NICE [4050], plus:" t-ja="ナイス[4050]全内容＋追加:" t-zh="包含NICE[4050]全部内容，另加：" t-ko="나이스 [4050] 전체 포함 +">Everything in NICE [4050], plus:</span></div>
            <div class="inc-item"><i class="fas fa-plus inc-icon text-amber-500"></i><span t-en="CT — Pick 3 from all 6 options" t-ja="CT 3択（全6種）" t-zh="CT 6项全选3项" t-ko="CT 3개 (6가지 중)">CT — Pick 3 from all 6 options</span></div>
            <div class="inc-item"><i class="fas fa-plus inc-icon text-amber-500"></i><span t-en="Transcranial Doppler (brain blood flow)" t-ja="経頭蓋ドップラー（脳血流）" t-zh="经颅多普勒（脑血流）" t-ko="뇌혈류 초음파">Transcranial Doppler (brain blood flow)</span></div>
            <div class="inc-item"><i class="fas fa-plus inc-icon text-amber-500"></i><span t-en="Dementia Genetic Test" t-ja="認知症遺伝子検査" t-zh="痴呆基因检测" t-ko="치매 유전자 검사">Dementia Genetic Test</span></div>
            <div class="inc-item"><i class="fas fa-plus inc-icon text-amber-500"></i><span t-en="Rheumatoid Arthritis + Gout Test" t-ja="リウマチ＋痛風検査" t-zh="类风湿关节炎+痛风" t-ko="류마티즘+통풍 검사">Rheumatoid Arthritis + Gout Test</span></div>
            <div class="inc-item"><i class="fas fa-plus inc-icon text-amber-500"></i><span t-en="Full Ultrasound Panel (6 organs)" t-ja="全身超音波（6臓器）" t-zh="全身超声波（6个器官）" t-ko="전신 초음파 6부위">Full Ultrasound Panel (6 organs)</span></div>
          </div>
        </div>
      </article>

    </div><!-- /pkgGrid -->

    <!-- All-package note -->
    <div class="note-box mt-5">
      <p class="text-xs font-semibold text-mb mb-2" t-en="All packages include:" t-ja="全パッケージ共通:" t-zh="所有套餐均包含：" t-ko="전 패키지 공통 포함:">All packages include:</p>
      <div class="flex flex-wrap gap-x-5 gap-y-1">
        <span class="text-xs text-gray-500 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="Medical interview &amp; physical exam" t-ja="問診・身体検査" t-zh="问诊及体格检查" t-ko="기본 문진·신체검사">Medical interview &amp; physical exam</span></span>
        <span class="text-xs text-gray-500 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="Hepatitis B &amp; C test" t-ja="B・C型肝炎検査" t-zh="乙肝丙肝检查" t-ko="B·C형 간염 검사">Hepatitis B &amp; C test</span></span>
        <span class="text-xs text-gray-500 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="Thyroid &amp; kidney function test" t-ja="甲状腺・腎機能検査" t-zh="甲状腺和肾功能检查" t-ko="갑상선·신장 기능 검사">Thyroid &amp; kidney function test</span></span>
        <span class="text-xs text-gray-500 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="ECG + Chest X-ray" t-ja="心電図・胸部X線" t-zh="心电图+胸部X光" t-ko="심전도+흉부X선">ECG + Chest X-ray</span></span>
        <span class="text-xs text-gray-500 flex items-center gap-1.5"><i class="fas fa-check text-green-500 text-[10px]"></i><span t-en="Doctor consultation with results" t-ja="医師による結果説明" t-zh="医生结果咨询" t-ko="의사 결과 상담">Doctor consultation with results</span></span>
      </div>
    </div>


  </div>
</section>
<div class="color-strip"></div>

<!-- ═══════ HOW TO BOOK ═══════ -->
<section class="py-12 px-4 sec-white" id="book">
  <div class="max-w-3xl mx-auto">
    <div class="mb-8">
      <p class="section-eyebrow" t-en="HOW IT WORKS" t-ja="ご利用の流れ" t-zh="预约流程" t-ko="이용 방법">HOW IT WORKS</p>
      <h2 class="section-h" t-en="3 steps to your check-up" t-ja="3つのステップで検診完了" t-zh="3步完成体检预约" t-ko="3단계로 검진 완료">3 steps to your check-up</h2>
    </div>
    <div class="space-y-3">
      <div class="step-card">
        <div class="step-dot text-white shrink-0" style="background:#0f3172">1</div>
        <div>
          <h3 class="font-semibold text-mb text-sm mb-1" t-en="Contact us via WhatsApp" t-ja="WhatsAppでお問い合わせ" t-zh="通过WhatsApp联系我们" t-ko="WhatsApp으로 문의하기">Contact us via WhatsApp</h3>
          <p class="text-sm text-gray-500 leading-relaxed" t-en="Message us in English, Japanese, or Chinese. Tell us your age and interests. We'll guide you to the right package." t-ja="英語・日本語・中国語でメッセージください。年齢とご希望をお伝えください。最適なパッケージをご案内します。" t-zh="用英语、日语或中文发消息给我们。告诉我们您的年龄和需求，我们将推荐适合的套餐。" t-ko="영어, 일본어, 중국어로 메시지 보내주세요. 나이와 관심사를 알려주시면 맞는 패키지를 안내해 드립니다.">Message us in English, Japanese, or Chinese. Tell us your age and interests. We'll guide you to the right package.</p>
        </div>
      </div>
      <div class="step-card">
        <div class="step-dot text-white shrink-0" style="background:#c9820a">2</div>
        <div>
          <h3 class="font-semibold text-mb text-sm mb-1" t-en="Confirm your date" t-ja="日程を確定する" t-zh="确认检查日期" t-ko="날짜 확정">Confirm your date</h3>
          <p class="text-sm text-gray-500 leading-relaxed" t-en="We'll send a confirmation with prep instructions. Fast from 10 PM the night before (water is fine until 2 hrs before)." t-ja="確認書と準備案内をお送りします。前日夜10時から絶食（2時間前まで水のみOK）。" t-zh="我们会发送确认函和准备说明。从前一天晚上10点开始禁食（检查前2小时可以喝水）。" t-ko="준비 안내와 함께 확인서를 발송합니다. 전날 밤 10시부터 금식 (2시간 전까지 물은 가능).">We'll send a confirmation with prep instructions. Fast from 10 PM the night before (water is fine until 2 hrs before).</p>
        </div>
      </div>
      <div class="step-card">
        <div class="step-dot text-white shrink-0" style="background:#065f46">3</div>
        <div>
          <h3 class="font-semibold text-mb text-sm mb-1" t-en="Visit &amp; complete your check-up" t-ja="来院・検診完了" t-zh="就诊完成体检" t-ko="방문 후 검진 완료">Visit &amp; complete your check-up</h3>
          <p class="text-sm text-gray-500 leading-relaxed" t-en="Arrive at Min Hospital (Line 4, Mia Station Exit 5). Complete your 2–4 hour check-up. Receive your full report and personal doctor consultation." t-ja="ミン病院に到着（4号線・美亜駅5番出口）。2〜4時間の検診を受け、詳細なレポートと医師の個別相談をお受けください。" t-zh="到达民病院（4号线美亚站5号出口）。完成2-4小时体检，获取详细报告和医生个人咨询。" t-ko="민병원 방문 (4호선 미아역 5번 출구). 2~4시간 검진 후 상세 보고서와 개인 결과 상담.">Arrive at Min Hospital (Line 4, Mia Station Exit 5). Complete your 2–4 hour check-up. Receive your full report and personal doctor consultation.</p>
        </div>
      </div>
    </div>
    <div class="amber-box mt-4 flex gap-3 items-start">
      <span class="text-lg shrink-0">💡</span>
      <div>
        <p class="font-semibold text-amber-800 text-sm mb-1" t-en="What to bring" t-ja="持ち物" t-zh="需要携带" t-ko="지참 사항">What to bring</p>
        <div class="text-xs text-amber-700 space-y-0.5">
          <div>· <span t-en="Passport or ID" t-ja="パスポートまたはID" t-zh="护照或身份证" t-ko="여권 또는 신분증">Passport or ID</span></div>
          <div>· <span t-en="Comfortable, loose-fitting clothing" t-ja="ゆったりした服装" t-zh="宽松舒适的衣物" t-ko="편안한 복장">Comfortable, loose-fitting clothing</span></div>
          <div>· <span t-en="If taking sedation, bring someone to escort you home" t-ja="鎮静剤使用の場合は同伴者が必要" t-zh="如接受镇静，需有人陪同回家" t-ko="수면 내시경 시 귀가 동반자 필요">If taking sedation, bring someone to escort you home</span></div>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="color-strip"></div>

<!-- ═══════ COMPARISON TABLE ═══════ -->
<section class="py-10 px-4 sec-warm">
  <div class="max-w-5xl mx-auto">
    <div class="mb-6">
      <p class="section-eyebrow" t-en="COMPARE" t-ja="比較" t-zh="对比" t-ko="비교">COMPARE</p>
      <h2 class="section-h" t-en="Side-by-side comparison" t-ja="パッケージ比較一覧" t-zh="套餐横向对比" t-ko="패키지 한눈에 비교">Side-by-side comparison</h2>
    </div>
    <div class="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      <table class="comp-table w-full" style="min-width:580px">
        <thead>
          <tr>
            <th class="text-left px-4" t-en="Package" t-ja="パッケージ" t-zh="套餐" t-ko="패키지">Package</th>
            <th t-en="Price" t-ja="価格" t-zh="价格" t-ko="가격">Price</th>
            <th t-en="CT Scan" t-ja="CT" t-zh="CT" t-ko="CT">CT</th>
            <th t-en="Ultrasound" t-ja="超音波" t-zh="超声" t-ko="초음파">Ultrasound</th>
            <th t-en="Tumor Markers" t-ja="腫瘍M" t-zh="肿瘤标志物" t-ko="종양표지자">Tumor</th>
            <th t-en="Genetics" t-ja="遺伝子" t-zh="基因" t-ko="유전자">DNA</th>
            <th t-en="Time" t-ja="時間" t-zh="时间" t-ko="시간">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="text-left px-4 font-semibold text-mb text-sm">NICE [2030]</td><td class="font-semibold text-green-600 text-sm">₩230K</td><td class="text-gray-300 text-xs">—</td><td class="text-green-500 font-semibold text-xs">✓</td><td class="text-gray-300 text-xs">—</td><td class="text-gray-300 text-xs">—</td><td class="text-gray-400 text-xs">2–3h</td></tr>
          <tr><td class="text-left px-4 font-medium text-mb text-sm" t-en="Digestive Precision" t-ja="消化器精密" t-zh="消化精密" t-ko="소화기정밀">Digestive Precision</td><td class="font-semibold text-green-600 text-sm">₩290K</td><td class="text-gray-300 text-xs">—</td><td class="text-green-500 font-semibold text-xs">✓✓</td><td class="text-green-500 font-semibold text-xs">✓</td><td class="text-gray-300 text-xs">—</td><td class="text-gray-400 text-xs">3–4h</td></tr>
          <tr><td class="text-left px-4 font-semibold text-mb text-sm">NICE [4050]</td><td class="font-semibold text-green-600 text-sm">₩350K</td><td class="text-green-500 font-semibold text-xs">×2</td><td class="text-green-500 font-semibold text-xs">✓✓</td><td class="text-green-500 font-semibold text-xs">✓</td><td class="text-gray-300 text-xs">—</td><td class="text-gray-400 text-xs">3–4h</td></tr>
          <tr><td class="text-left px-4 font-medium text-sm" style="color:#7c3aed" t-en="Women's Precision" t-ja="女性精密" t-zh="女性精密" t-ko="여성정밀">Women's Precision</td><td class="font-semibold text-green-600 text-sm">₩390K</td><td class="text-green-500 font-semibold text-xs">×2</td><td class="text-green-500 font-semibold text-xs">✓✓</td><td class="text-green-500 font-semibold text-xs">✓</td><td class="text-gray-300 text-xs">—</td><td class="text-gray-400 text-xs">3–4h</td></tr>
          <tr><td class="text-left px-4 font-medium text-sm text-green-700" t-en="Brain &amp; Genetics" t-ja="脳・遺伝子" t-zh="脑部及基因" t-ko="뇌·유전자">Brain &amp; Genetics</td><td class="font-semibold text-green-600 text-sm">₩400K</td><td class="text-green-500 font-semibold text-xs">Brain</td><td class="text-green-500 font-semibold text-xs">✓✓</td><td class="text-green-500 font-semibold text-xs">✓</td><td class="text-green-500 font-semibold text-xs">✓✓</td><td class="text-gray-400 text-xs">3–4h</td></tr>
          <tr style="background:#fffbeb"><td class="text-left px-4 font-bold text-mb text-sm">NICE [6070] ⭐</td><td class="font-bold text-amber-600 text-sm">₩490K</td><td class="text-green-600 font-bold text-xs">×3</td><td class="text-green-600 font-bold text-xs">✓✓✓</td><td class="text-green-600 font-bold text-xs">✓✓</td><td class="text-green-600 font-bold text-xs">✓</td><td class="text-gray-400 text-xs">3–4h</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<div class="color-strip"></div>

<!-- ═══════ REVIEWS ═══════ -->
<section class="py-12 px-4 sec-teal" id="reviews">
  <div class="max-w-5xl mx-auto">
    <div class="mb-8">
      <p class="section-eyebrow" t-en="PATIENT VOICES" t-ja="患者様の声" t-zh="患者心声" t-ko="환자 후기">PATIENT VOICES</p>
      <h2 class="section-h" t-en="What international patients say" t-ja="海外からの患者様の声" t-zh="国际患者的真实评价" t-ko="외국인 환자들의 실제 후기">What international patients say</h2>
    </div>
    <div class="grid sm:grid-cols-3 gap-4 mb-6">
      <div class="review-card">
        <div class="flex items-center gap-2.5 mb-3">
          <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white bg-mb shrink-0">J</div>
          <div><div class="font-semibold text-sm text-gray-800">James T.</div><div class="text-[10px] text-gray-400 mt-0.5">🇺🇸 USA · NICE [4050]</div></div>
          <div class="ml-auto text-yellow-400 text-xs">★★★★★</div>
        </div>
        <p class="text-xs text-gray-600 leading-relaxed"
           t-en="I was nervous about getting a colonoscopy in Korea, but the staff helped me in English at every step. The sedation made it painless. Whole process finished in about 3 hours. Highly recommend."
           t-ja="韓国で大腸カメラを受けることに不安でしたが、スタッフが英語で一つひとつ丁寧にサポートしてくれました。鎮静剤で痛みもなく、全体で約3時間で終わりました。"
           t-zh="我很担心在韩国做肠镜，但工作人员全程英语协助。镇静麻醉让整个过程无痛，约3小时完成。强烈推荐。"
           t-ko="한국에서 대장내시경 받는 게 걱정됐지만 직원들이 영어로 단계마다 도와줬습니다. 수면으로 무통증, 약 3시간 만에 완료.">I was nervous about getting a colonoscopy in Korea, but the staff helped me in English at every step. The sedation made it painless. Whole process finished in about 3 hours. Highly recommend.</p>
      </div>
      <div class="review-card">
        <div class="flex items-center gap-2.5 mb-3">
          <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0" style="background:#b91c1c">Y</div>
          <div><div class="font-semibold text-sm text-gray-800">Yuki M.</div><div class="text-[10px] text-gray-400 mt-0.5">🇯🇵 Japan · NICE [2030]</div></div>
          <div class="ml-auto text-yellow-400 text-xs">★★★★★</div>
        </div>
        <p class="text-xs text-gray-600 leading-relaxed"
           t-en="Staff explained everything in Japanese. The gastroscopy with sedation was completely comfortable. The price is also very reasonable compared to Japan — about one-third the cost."
           t-ja="スタッフが日本語で丁寧に説明してくれました。鎮静剤での胃カメラは全く快適でした。日本と比べて約3分の1の費用でとてもリーズナブルです。"
           t-zh="工作人员用日语详细解释了一切。镇静下的胃镜检查非常舒适。与日本相比，价格约为三分之一，非常实惠。"
           t-ko="직원들이 일본어로 꼼꼼히 설명해 주셨어요. 수면 위내시경은 완전히 편안했습니다. 일본 대비 약 3분의 1 비용으로 매우 합리적.">Staff explained everything in Japanese. The gastroscopy with sedation was completely comfortable. The price is also very reasonable compared to Japan — about one-third the cost.</p>
      </div>
      <div class="review-card">
        <div class="flex items-center gap-2.5 mb-3">
          <div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0" style="background:#b45309">L</div>
          <div><div class="font-semibold text-sm text-gray-800">Li W.</div><div class="text-[10px] text-gray-400 mt-0.5">🇨🇳 China · Women's Precision</div></div>
          <div class="ml-auto text-yellow-400 text-xs">★★★★★</div>
        </div>
        <p class="text-xs text-gray-600 leading-relaxed"
           t-en="The thyroid ultrasound and cancer screening were thorough. Chinese-speaking staff made everything smooth. Received a detailed report in Chinese — very professional."
           t-ja="甲状腺超音波とがん検診が丁寧でした。中国語スタッフのおかげでスムーズでした。中国語の詳細レポートも受け取れました。とてもプロフェッショナルです。"
           t-zh="甲状腺超声和癌症筛查非常详细。中文工作人员让整个过程顺畅无阻。收到了中文详细报告——非常专业。"
           t-ko="갑상선 초음파와 암 검진이 꼼꼼했습니다. 중국어 직원 덕분에 순조롭게 진행됐어요. 중국어 상세 결과지도 받았습니다.">The thyroid ultrasound and cancer screening were thorough. Chinese-speaking staff made everything smooth. Received a detailed report in Chinese — very professional.</p>
      </div>
    </div>
    <div class="note-box flex flex-wrap gap-5 items-center justify-center sm:justify-between">
      <div class="text-center">
        <div class="text-3xl font-black text-mb">4.9 <span class="text-yellow-400 text-xl">★</span></div>
        <div class="text-xs text-gray-400 mt-1" t-en="Average Rating" t-ja="平均評価" t-zh="平均评分" t-ko="평균 평점">Average Rating</div>
      </div>
      <div class="space-y-1.5 flex-1 min-w-[160px]">
        <div class="flex items-center gap-2 text-xs text-gray-400"><span class="w-5">5★</span><div class="flex-1 bg-gray-100 rounded h-1.5"><div class="bg-yellow-400 h-1.5 rounded" style="width:88%"></div></div><span>88%</span></div>
        <div class="flex items-center gap-2 text-xs text-gray-400"><span class="w-5">4★</span><div class="flex-1 bg-gray-100 rounded h-1.5"><div class="bg-yellow-300 h-1.5 rounded" style="width:10%"></div></div><span>10%</span></div>
        <div class="flex items-center gap-2 text-xs text-gray-400"><span class="w-5">3★</span><div class="flex-1 bg-gray-100 rounded h-1.5"><div class="bg-gray-200 h-1.5 rounded" style="width:2%"></div></div><span>2%</span></div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-black text-mb">500<span class="text-base font-semibold text-gray-400">+</span></div>
        <div class="text-xs text-gray-400 mt-1" t-en="Foreign patients / year" t-ja="外国人患者/年" t-zh="外国患者/年" t-ko="외국인 환자/년">Foreign patients / year</div>
      </div>
    </div>
  </div>
</section>
<div class="color-strip"></div>

<!-- ═══════ FAQ ═══════ -->
<section class="py-12 px-4 sec-blue-light">
  <div class="max-w-3xl mx-auto">
    <div class="mb-8">
      <p class="section-eyebrow" t-en="FAQ" t-ja="よくある質問" t-zh="常见问题" t-ko="자주 묻는 질문">FAQ</p>
      <h2 class="section-h" t-en="Questions we get asked most" t-ja="よく寄せられるご質問" t-zh="我们最常被问到的问题" t-ko="가장 자주 묻는 질문들">Questions we get asked most</h2>
    </div>
    <div class="space-y-2" id="faqList">
      <div class="border border-gray-100 rounded-xl overflow-hidden bg-white">
        <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
          <span class="font-medium text-sm text-mb" t-en="Can I get a check-up without speaking Korean?" t-ja="韓国語がなくても検診を受けられますか？" t-zh="不会说韩语也能接受体检吗？" t-ko="한국어 없이도 검진 받을 수 있나요?">Can I get a check-up without speaking Korean?</span>
          <i class="fas fa-chevron-down text-xs text-gray-400 faq-icon shrink-0"></i>
        </button>
        <div class="acc-body px-5 text-sm text-gray-600">
          <p class="py-3.5 leading-relaxed" t-en="Absolutely. Min Hospital is a government-certified foreign patient hospital with multilingual staff. English, Japanese, and Chinese support is available throughout your visit." t-ja="もちろんです。ミン病院は外国人患者のための政府認定病院で、多言語スタッフが常駐しています。英語・日本語・中国語で最初のお問い合わせから結果説明までサポートします。" t-zh="当然可以。民病院是政府认证的外国患者医院，配备多语言工作人员，全程提供英语、日语、中文服务。" t-ko="네. 민병원은 정부 인증 외국인환자 유치 의료기관으로 다국어 스태프가 상주합니다. 첫 문의부터 결과 상담까지 4개 국어로 안내합니다.">Absolutely. Min Hospital is a government-certified foreign patient hospital with multilingual staff.</p>
        </div>
      </div>
      <div class="border border-gray-100 rounded-xl overflow-hidden bg-white">
        <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
          <span class="font-medium text-sm text-mb" t-en="Do I need to fast before the check-up?" t-ja="検診前に絶食は必要ですか？" t-zh="体检前需要禁食吗？" t-ko="검진 전 금식이 필요한가요?">Do I need to fast before the check-up?</span>
          <i class="fas fa-chevron-down text-xs text-gray-400 faq-icon shrink-0"></i>
        </button>
        <div class="acc-body px-5 text-sm text-gray-600">
          <p class="py-3.5 leading-relaxed" t-en="Yes. Fast from 10 PM the night before. Water is fine until 2 hours before. Avoid alcohol for 3 days before." t-ja="はい。前日夜10時から絶食。検診2時間前まで水は飲めます。3日前からアルコールを控えてください。" t-zh="是的。从前一天晚上10点开始禁食，检查前2小时可以喝水，检查前3天禁酒。" t-ko="네. 전날 밤 10시부터 금식하세요. 검진 2시간 전까지 물은 가능합니다. 3일 전부터 금주 권장.">Yes. Fast from 10 PM the night before. Water is fine until 2 hours before. Avoid alcohol for 3 days before.</p>
        </div>
      </div>
      <div class="border border-gray-100 rounded-xl overflow-hidden bg-white">
        <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
          <span class="font-medium text-sm text-mb" t-en="Will my results be given in English / Japanese / Chinese?" t-ja="結果を英語・日本語・中国語で受け取れますか？" t-zh="能收到英语/日语/中文的检查结果吗？" t-ko="결과지를 영어/일어/중국어로 받을 수 있나요?">Will my results be given in English / Japanese / Chinese?</span>
          <i class="fas fa-chevron-down text-xs text-gray-400 faq-icon shrink-0"></i>
        </button>
        <div class="acc-body px-5 text-sm text-gray-600">
          <p class="py-3.5 leading-relaxed" t-en="Yes. We provide reports for international patients, and our doctors will walk you through results in your preferred language. Please mention your language when you contact us." t-ja="はい。外国人患者向けの医療報告書を用意しており、医師がご希望の言語で結果を説明します。ご連絡の際に言語をお知らせください。" t-zh="是的。我们为外国患者提供医疗报告，医生会用您偏好的语言解释结果。联系时请告知语言偏好。" t-ko="네. 외국인 환자를 위한 의료 보고서를 제공하며, 의사가 원하시는 언어로 결과를 설명해 드립니다.">Yes. We provide reports for international patients, and our doctors will walk you through results in your preferred language.</p>
        </div>
      </div>
      <div class="border border-gray-100 rounded-xl overflow-hidden bg-white">
        <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
          <span class="font-medium text-sm text-mb" t-en="Is the sedation (sleeping anesthesia) safe?" t-ja="鎮静剤（眠れる麻酔）は安全ですか？" t-zh="镇静麻醉安全吗？" t-ko="수면 마취는 안전한가요?">Is the sedation (sleeping anesthesia) safe?</span>
          <i class="fas fa-chevron-down text-xs text-gray-400 faq-icon shrink-0"></i>
        </button>
        <div class="acc-body px-5 text-sm text-gray-600">
          <p class="py-3.5 leading-relaxed" t-en="Yes. Sedation is given and monitored by certified anesthesiologists. You'll be comfortable throughout. The sedation fee is FREE at Min Hospital." t-ja="はい。麻酔専門医が投与・管理します。ミン病院では鎮静剤は無料です。" t-zh="是的。由认证麻醉师给药并监控。民病院的镇静费用免费。" t-ko="네. 마취 전문의가 투여하고 모니터링합니다. 민병원에서 수면 마취비는 무료입니다.">Yes. Sedation is given and monitored by certified anesthesiologists. The sedation fee is FREE at Min Hospital.</p>
        </div>
      </div>
      <div class="border border-gray-100 rounded-xl overflow-hidden bg-white">
        <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors" onclick="toggleFAQ(this)">
          <span class="font-medium text-sm text-mb" t-en="How do I get to Min Hospital from downtown Seoul?" t-ja="ソウル中心部からのアクセスは？" t-zh="从首尔市中心如何前往民病院？" t-ko="서울 중심부에서 민병원까지 어떻게 가나요?">How do I get to Min Hospital from downtown Seoul?</span>
          <i class="fas fa-chevron-down text-xs text-gray-400 faq-icon shrink-0"></i>
        </button>
        <div class="acc-body px-5 text-sm text-gray-600">
          <p class="py-3.5 leading-relaxed" t-en="Take Seoul Metro Line 4 to Mia Station (미아역), Exit 5 — then 5 minutes on foot. From Myeongdong: ~30 min. From Dongdaemun: ~25 min." t-ja="ソウル地下鉄4号線・美亜駅（미아역）5番出口から徒歩5分。明洞から約30分、東大門から約25分。" t-zh="乘首尔地铁4号线到美亚站（미아역），5号出口步行5分钟。从明洞约30分钟，东大门约25分钟。" t-ko="4호선 미아역 5번 출구에서 도보 5분. 명동에서 약 30분, 동대문에서 약 25분.">Take Seoul Metro Line 4 to Mia Station (미아역), Exit 5 — then 5 minutes on foot.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="color-strip"></div>

<!-- ═══════ CONTACT / MAP ═══════ -->
<section class="py-12 px-4" style="background:#0f3172" id="contact">
  <div class="max-w-5xl mx-auto">
    <div class="mb-8">
      <p class="section-eyebrow" style="color:#e8a020" t-en="LOCATION" t-ja="アクセス" t-zh="位置" t-ko="오시는 길">LOCATION</p>
      <h2 class="font-bold text-white mb-1" style="font-size:clamp(1.3rem,3.5vw,1.85rem)" t-en="Min Hospital, Seoul" t-ja="ミン病院 ソウル" t-zh="民病院，首尔" t-ko="민병원, 서울">Min Hospital, Seoul</h2>
      <p class="text-blue-300 text-sm" t-en="155 Dobong-ro, Gangbuk-gu, Seoul · Line 4 Mia Station Exit 5" t-ja="ソウル市江北区道峰路155 · 4号線美亜駅5番出口" t-zh="首尔江北区道峰路155 · 4号线美亚站5号出口" t-ko="서울 강북구 도봉로 155 · 4호선 미아역 5번 출구">155 Dobong-ro, Gangbuk-gu, Seoul · Line 4 Mia Station Exit 5</p>
    </div>
    <div class="grid sm:grid-cols-2 gap-5 mb-8">
      <div class="space-y-3">
        <div class="bg-white/10 border border-white/15 rounded-xl p-4 flex gap-3 items-center">
          <div class="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shrink-0"><i class="fas fa-map-marker-alt text-white text-sm"></i></div>
          <div><div class="text-blue-200 text-xs mb-0.5" t-en="Address" t-ja="住所" t-zh="地址" t-ko="주소">Address</div><div class="text-white text-sm font-medium">155 Dobong-ro, Gangbuk-gu, Seoul</div></div>
        </div>
        <div class="bg-white/10 border border-white/15 rounded-xl p-4 flex gap-3 items-center">
          <div class="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center shrink-0"><i class="fas fa-subway text-white text-sm"></i></div>
          <div><div class="text-blue-200 text-xs mb-0.5" t-en="Subway" t-ja="地下鉄" t-zh="地铁" t-ko="지하철">Subway</div><div class="text-white text-sm font-medium" t-en="Line 4 · Mia Station Exit 5 · 5 min walk" t-ja="4号線 美亜駅5番出口 徒歩5分" t-zh="4号线美亚站5号出口步行5分钟" t-ko="4호선 미아역 5번 출구 도보 5분">Line 4 · Mia Station Exit 5 · 5 min walk</div></div>
        </div>
        <div class="bg-white/10 border border-white/15 rounded-xl p-4 flex gap-3 items-center">
          <div class="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center shrink-0"><i class="fas fa-clock text-white text-sm"></i></div>
          <div><div class="text-blue-200 text-xs mb-0.5" t-en="Hours" t-ja="営業時間" t-zh="营业时间" t-ko="운영 시간">Hours</div><div class="text-white text-sm font-medium" t-en="Mon – Fri 09:00 – 18:00" t-ja="月〜金 09:00〜18:00" t-zh="周一至周五 09:00–18:00" t-ko="월~금 09:00~18:00">Mon – Fri 09:00 – 18:00</div></div>
        </div>
        <button onclick="openWA()" class="btn-wa w-full p-4 rounded-xl text-sm">
          <i class="fab fa-whatsapp text-xl"></i>
          <div class="text-left">
            <div class="font-semibold" t-en="WhatsApp Inquiry" t-ja="WhatsApp問い合わせ" t-zh="WhatsApp咨询" t-ko="WhatsApp 문의">WhatsApp Inquiry</div>
            <div class="text-green-100 text-xs" t-en="English · 日本語 · 中文 · 한국어" t-ja="英語・日本語・中国語・韓国語" t-zh="英语·日语·中文·韩语" t-ko="영어·일어·중국어·한국어">English · 日本語 · 中文 · 한국어</div>
          </div>
        </button>
      </div>
      <div class="rounded-xl overflow-hidden" style="min-height:280px">
        <iframe title="Min Hospital Map" src="https://maps.google.com/maps?q=서울+강북구+도봉로+155+민병원&output=embed&z=16" width="100%" height="100%" style="border:0;min-height:280px" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

  </div>
</section>

<!-- ═══════ FOOTER ═══════ -->
<footer class="bg-gray-950 text-gray-500 py-6 px-4">
  <div class="max-w-5xl mx-auto text-center">
    <div class="flex items-center justify-center gap-2 mb-3">
      <div class="w-6 h-6 rounded-md flex items-center justify-center font-black text-xs" style="background:#c9820a;color:#fff">M</div>
      <span class="text-white font-semibold text-sm">MIN HOSPITAL (민병원)</span>
    </div>
    <p class="text-xs text-gray-500 mb-2">서울특별시 강북구 도봉로 155</p>
    <p class="text-[11px] text-gray-600 max-w-xl mx-auto leading-relaxed"
       t-en="© 2025 Min Hospital. All rights reserved. Medical information on this site is for reference only and does not constitute medical advice."
       t-ja="© 2025 ミン病院。全著作権所有。このサイトの医療情報は参考目的のみで、医学的アドバイスを構成するものではありません。"
       t-zh="© 2025 民病院。版权所有。本网站的医疗信息仅供参考，不构成医疗建议。"
       t-ko="© 2025 민병원. 본 사이트의 의료 정보는 참고용이며 의료 조언을 구성하지 않습니다.">© 2025 Min Hospital. All rights reserved. Medical information on this site is for reference only.</p>
  </div>
</footer>

<!-- ═══════ WHATSAPP FLOAT ═══════ -->
<div class="wa-float">
  <div class="wa-tooltip" t-en="Chat with us" t-ja="チャットする" t-zh="联系我们" t-ko="채팅하기">Chat with us</div>
  <button class="wa-fab" onclick="openWA()" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></button>
</div>

<!-- ═══════ QUIZ MODAL ═══════ -->
<div class="modal-bg" id="quizModal" onclick="closeQuizOnBg(event)">
  <div class="modal-box" onclick="event.stopPropagation()">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="font-bold text-mb text-base" t-en="Find Your Best Package" t-ja="最適なパッケージを見つける" t-zh="找到最适合的套餐" t-ko="내게 맞는 패키지 찾기">Find Your Best Package</h2>
        <p class="text-xs text-gray-400 mt-0.5" t-en="3 quick questions · 30 seconds" t-ja="3問・30秒" t-zh="3个问题·30秒" t-ko="질문 3개 · 30초">3 quick questions · 30 seconds</p>
      </div>
      <button onclick="closeQuiz()" class="text-gray-400 hover:text-gray-600 text-lg leading-none">✕</button>
    </div>
    <div class="quiz-progress"><div class="quiz-bar" id="quizBar" style="width:33%"></div></div>

    <!-- Step 1 -->
    <div class="quiz-step active" id="qStep1">
      <p class="font-semibold text-gray-700 text-sm mb-3" t-en="How old are you?" t-ja="おいくつですか？" t-zh="您的年龄是？" t-ko="연령대가 어떻게 되세요?">How old are you?</p>
      <button class="quiz-opt" onclick="quizNext(1,'20s')"><span class="text-base">👤</span><div><div class="font-semibold" t-en="20s" t-ja="20代" t-zh="20多岁" t-ko="20대">20s</div><div class="text-xs text-gray-400" t-en="Young &amp; active" t-ja="若くて活動的" t-zh="年轻活跃" t-ko="젊고 활동적">Young &amp; active</div></div></button>
      <button class="quiz-opt" onclick="quizNext(1,'30s')"><span class="text-base">👤</span><div><div class="font-semibold" t-en="30s" t-ja="30代" t-zh="30多岁" t-ko="30대">30s</div><div class="text-xs text-gray-400" t-en="Staying on top of health" t-ja="健康に気を使い始める年代" t-zh="开始注重健康" t-ko="건강 관리 시작">Staying on top of health</div></div></button>
      <button class="quiz-opt" onclick="quizNext(1,'40s')"><span class="text-base">👤</span><div><div class="font-semibold" t-en="40s" t-ja="40代" t-zh="40多岁" t-ko="40대">40s</div><div class="text-xs text-gray-400" t-en="Time for deeper screening" t-ja="より詳しい検査の年代" t-zh="需要更深入检查的年龄" t-ko="정밀 검진 시기">Time for deeper screening</div></div></button>
      <button class="quiz-opt" onclick="quizNext(1,'50s')"><span class="text-base">👤</span><div><div class="font-semibold" t-en="50s" t-ja="50代" t-zh="50多岁" t-ko="50대">50s</div><div class="text-xs text-gray-400" t-en="Comprehensive check-up needed" t-ja="総合的な検診が必要" t-zh="需要综合体检" t-ko="종합 검진 필요">Comprehensive check-up needed</div></div></button>
      <button class="quiz-opt" onclick="quizNext(1,'60s+')"><span class="text-base">👤</span><div><div class="font-semibold" t-en="60s or above" t-ja="60代以上" t-zh="60岁及以上" t-ko="60대 이상">60s or above</div><div class="text-xs text-gray-400" t-en="Senior comprehensive program" t-ja="シニア向け総合検診" t-zh="老年综合检查项目" t-ko="시니어 종합 프로그램">Senior comprehensive program</div></div></button>
    </div>

    <!-- Step 2 -->
    <div class="quiz-step" id="qStep2">
      <p class="font-semibold text-gray-700 text-sm mb-3" t-en="What concerns you most?" t-ja="最も気になることは？" t-zh="您最担心什么？" t-ko="가장 걱정되는 부분은 무엇인가요?">What concerns you most?</p>
      <button class="quiz-opt" onclick="quizNext(2,'gut')"><span class="text-base">🫁</span><div><div class="font-semibold" t-en="Stomach / intestines / liver" t-ja="胃・腸・肝臓" t-zh="胃/肠/肝脏" t-ko="위·장·간 건강">Stomach / intestines / liver</div></div></button>
      <button class="quiz-opt" onclick="quizNext(2,'women')"><span class="text-base">♀️</span><div><div class="font-semibold" t-en="Women's health (hormones, gynecology)" t-ja="女性の健康（ホルモン・婦人科）" t-zh="女性健康（激素、妇科）" t-ko="여성 건강 (호르몬, 부인과)">Women's health</div></div></button>
      <button class="quiz-opt" onclick="quizNext(2,'brain')"><span class="text-base">🧠</span><div><div class="font-semibold" t-en="Brain / heart / neurological risks" t-ja="脳・心臓・神経系リスク" t-zh="脑部/心脏/神经系统风险" t-ko="뇌·심장·신경계 위험">Brain / heart / neurological risks</div></div></button>
      <button class="quiz-opt" onclick="quizNext(2,'cancer')"><span class="text-base">🔬</span><div><div class="font-semibold" t-en="Cancer screening &amp; tumor markers" t-ja="がんスクリーニング・腫瘍マーカー" t-zh="癌症筛查和肿瘤标志物" t-ko="암 조기 발견·종양표지자">Cancer screening &amp; tumor markers</div></div></button>
      <button class="quiz-opt" onclick="quizNext(2,'general')"><span class="text-base">✅</span><div><div class="font-semibold" t-en="General overall check-up" t-ja="一般的な健康チェックがしたい" t-zh="全面体检，整体健康管理" t-ko="전반적인 건강 체크">General overall check-up</div></div></button>
      <button class="text-xs text-gray-400 mt-1 hover:text-gray-600" onclick="quizBack(2)">← <span t-en="Back" t-ja="戻る" t-zh="返回" t-ko="뒤로">Back</span></button>
    </div>

    <!-- Step 3 -->
    <div class="quiz-step" id="qStep3">
      <p class="font-semibold text-gray-700 text-sm mb-3" t-en="Would you like FREE sedation for endoscopy?" t-ja="内視鏡で鎮静剤（無料）を希望しますか？" t-zh="是否希望内窥镜免费镇静？" t-ko="내시경 수면 마취(무료)를 원하시나요?">Would you like FREE sedation for endoscopy?</p>
      <button class="quiz-opt" onclick="showResult()"><span class="text-base">😴</span><div><div class="font-semibold" t-en="Yes — sleep through it comfortably" t-ja="はい — 快適に眠りながら受けたい" t-zh="是的——舒适入睡" t-ko="네 — 편안하게 수면으로">Yes — sleep through it comfortably</div></div></button>
      <button class="quiz-opt" onclick="showResult()"><span class="text-base">👁</span><div><div class="font-semibold" t-en="No — I'd prefer to stay awake" t-ja="いいえ — 起きたまま受けたい" t-zh="不——保持清醒" t-ko="아니요 — 깨어 있을게요">No — I'd prefer to stay awake</div></div></button>
      <button class="quiz-opt" onclick="showResult()"><span class="text-base">🤔</span><div><div class="font-semibold" t-en="Not sure yet" t-ja="まだ決めていない" t-zh="还不确定" t-ko="아직 모르겠어요">Not sure yet</div></div></button>
      <button class="text-xs text-gray-400 mt-1 hover:text-gray-600" onclick="quizBack(3)">← <span t-en="Back" t-ja="戻る" t-zh="返回" t-ko="뒤로">Back</span></button>
    </div>

    <!-- Result -->
    <div class="quiz-step" id="qResult">
      <div class="result-pkg" id="resultPkg" style="background:#0f3172">
        <p class="text-white/70 text-xs mb-1" t-en="We recommend" t-ja="おすすめ" t-zh="我们推荐" t-ko="추천 패키지">We recommend</p>
        <h3 class="text-white font-bold text-lg" id="resultName">NICE [2030]</h3>
        <p class="text-white/80 text-xs mt-1" id="resultDesc">Essential screening for young adults</p>
        <div class="mt-2 text-white font-black text-xl" id="resultPrice">₩230K</div>
        <div class="text-white/60 text-[10px]" id="resultConvert">≈ $165 / ¥25,000</div>
      </div>
      <p class="text-xs text-gray-500 mb-4" id="resultNote">This package is tailored to your age group and health priorities.</p>
      <button onclick="openWA()" class="btn-wa w-full py-3 text-sm mb-2">
        <i class="fab fa-whatsapp text-lg"></i>
        <span t-en="Inquire about this package" t-ja="このパッケージについて問い合わせ" t-zh="咨询此套餐" t-ko="이 패키지 문의하기">Inquire about this package</span>
      </button>
      <button onclick="resetQuiz()" class="w-full py-2.5 text-xs text-gray-400 hover:text-gray-600 border border-gray-100 rounded-xl" t-en="Start over" t-ja="最初からやり直す" t-zh="重新开始" t-ko="다시 시작">Start over</button>
    </div>
  </div>
</div>

<!-- ═══════ SCRIPTS ═══════ -->
<script>
  let lang = 'en';
  let quizAge = '', quizConcern = '';

  /* ── LANGUAGE DETECTION ── */
  function detectBrowserLang() {
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    const code = nav.toLowerCase().slice(0, 2);
    const map = { en:'en', ja:'ja', zh:'zh', ko:'ko' };
    return map[code] || 'en';
  }

  /* ── LANGUAGE SWITCHER ── */
  function setLang(l) {
    lang = l;
    document.querySelectorAll('[data-l]').forEach(b => b.classList.toggle('active', b.dataset.l === l));
    document.querySelectorAll('[t-en]').forEach(el => {
      const txt = el.getAttribute('t-' + l) || el.getAttribute('t-en');
      if (txt !== null) el.textContent = txt;
    });
    document.getElementById('html-root').lang = {en:'en',ja:'ja',zh:'zh-Hans',ko:'ko'}[l] || 'en';
  }

  /* ── PACKAGE FILTER ── */
  function filterPkg(cat, btn) {
    document.querySelectorAll('.tab-pill').forEach(t => t.classList.remove('on'));
    btn.classList.add('on');
    document.querySelectorAll('#pkgGrid article').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  }

  /* ── FAQ ── */
  function toggleFAQ(btn) {
    const body = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    const isOpen = body.classList.contains('open');
    document.querySelectorAll('#faqList .acc-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('#faqList .faq-icon').forEach(i => i.style.transform = '');
    if (!isOpen) { body.classList.add('open'); icon.style.transform = 'rotate(180deg)'; }
  }

  /* ── WHATSAPP ── */
  function openWA() {
    const msgs = {
      en: "Hello! I'm interested in a health check-up at Min Hospital. Could you please provide more information?",
      ja: "こんにちは！ミン病院の健康診断に興味があります。詳細を教えていただけますか？",
      zh: "您好！我对民病院的体检感兴趣，请问能提供更多信息吗？",
      ko: "안녕하세요! 민병원 건강검진에 관심이 있습니다. 자세한 안내 부탁드립니다."
    };
    const msg = encodeURIComponent(msgs[lang] || msgs.en);
    window.open('https://wa.me/821012345678?text=' + msg, '_blank');
  }

  /* ── QUIZ ── */
  function openQuiz() { resetQuiz(); document.getElementById('quizModal').classList.add('open'); }
  function closeQuiz() { document.getElementById('quizModal').classList.remove('open'); }
  function closeQuizOnBg(e) { if (e.target === document.getElementById('quizModal')) closeQuiz(); }
  function resetQuiz() {
    quizAge = ''; quizConcern = '';
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    document.getElementById('qStep1').classList.add('active');
    document.getElementById('quizBar').style.width = '33%';
    document.querySelectorAll('.quiz-opt').forEach(o => o.classList.remove('selected'));
  }
  function quizNext(step, val) {
    document.querySelectorAll('#qStep' + step + ' .quiz-opt').forEach(o => o.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    if (step === 1) quizAge = val;
    if (step === 2) quizConcern = val;
    setTimeout(() => {
      document.getElementById('qStep' + step).classList.remove('active');
      document.getElementById('qStep' + (step + 1)).classList.add('active');
      document.getElementById('quizBar').style.width = (step === 1 ? '66' : '100') + '%';
    }, 180);
  }
  function quizBack(fromStep) {
    document.getElementById('qStep' + fromStep).classList.remove('active');
    document.getElementById('qStep' + (fromStep - 1)).classList.add('active');
    document.getElementById('quizBar').style.width = (fromStep === 2 ? '33' : '66') + '%';
  }

  /* ── RESULT LOGIC ── */
  const pkgs = {
    'nice2030': { name:'NICE [2030]', desc:{en:'Essential screening for young adults',ja:'若い世代のための基本検診',zh:'年轻人的基础健康筛查',ko:'젊은 층을 위한 필수 기본 검진'}, price:'₩230,000', convert:'≈ $165 / ¥25,000', color:'#0f3172', note:{en:'Great starting point for people in their 20s–30s. Covers all essentials.',ja:'20〜30代に最適な基本パッケージ。必要な検査をすべてカバー。',zh:'非常适合20-30岁人群，涵盖所有基础检查。',ko:'20~30대에게 최적인 기본 패키지. 필수 검사 전체 포함.'} },
    'digestive': { name:'Digestive Precision', desc:{en:'Liver, gut & GI tract deep screening',ja:'肝臓・腸・消化管の精密検査',zh:'肝脏、肠道消化道深度筛查',ko:'간·장·소화관 정밀 검진'}, price:'₩290,000', convert:'≈ $210 / ¥31,000', color:'#0c4a6e', note:{en:'Recommended if you have digestive concerns — colonoscopy + liver FibroScan.',ja:'消化器系が気になる方向け。大腸カメラと肝線維化スキャンを含みます。',zh:'如您有消化系统问题，推荐此套餐——含肠镜+肝纤维化扫描。',ko:'소화기가 걱정된다면 추천. 대장내시경+간섬유화 검사 포함.'} },
    'nice4050': { name:'NICE [4050]', desc:{en:'CT scan + comprehensive screening',ja:'CTスキャン＋総合検診',zh:'CT扫描+综合体检',ko:'CT 스캔 포함 종합검진'}, price:'₩350,000', convert:'≈ $250 / ¥37,000', color:'#1e3a5f', note:{en:'Ideal for 40s–50s. Includes 2 CT scans + 5 tumor markers.',ja:'40〜50代に最適。CT 2択＋腫瘍マーカー5種。',zh:'非常适合40-50岁，含2项CT扫描+5种肿瘤标志物。',ko:'40~50대에 이상적. CT 2개 선택+5가지 암표지자 포함.'} },
    'womens': { name:"Women's Precision", desc:{en:"Complete women's health with CT + hormones",ja:'CT＋ホルモン女性総合検診',zh:'含CT和激素的全面女性健康检查',ko:'CT+호르몬 여성 종합검진'}, price:'₩390,000', convert:'≈ $280 / ¥42,000', color:'#5b21b6', note:{en:'Designed for women: HPV PCR, hormone panel, breast ultrasound + mammography.',ja:'女性専用：HPV PCR、ホルモン検査、乳房超音波＋マンモグラフィー。',zh:'专为女性：HPV PCR、激素检查、乳房超声+乳房X光。',ko:'여성 전용: HPV PCR, 호르몬 검사, 유방초음파+유방X선 포함.'} },
    'brain': { name:'Brain & Genetics', desc:{en:'Brain imaging + genetic disease risk',ja:'脳画像診断＋遺伝性疾患リスク',zh:'脑部影像+遗传疾病风险',ko:'뇌 영상 + 유전성 질환 위험도'}, price:'₩400,000', convert:'≈ $285 / ¥43,000', color:'#064e3b', note:{en:'For those worried about brain/neurological risks. Includes DNA panel for 26+ genes.',ja:'脳・神経系のリスクが気になる方向け。26種以上の遺伝子DNAパネルを含む。',zh:'适合担心脑/神经系统风险，含26+基因DNA检测。',ko:'뇌·신경계 위험이 걱정된다면 추천. 26종 이상 유전자 패널 포함.'} },
    'nice6070': { name:'NICE [6070] ⭐', desc:{en:'Most complete senior health program',ja:'シニア向け最高水準の総合検診',zh:'最全面的老年健康检查项目',ko:'시니어 최고 수준 종합검진'}, price:'₩490,000', convert:'≈ $350 / ¥53,000', color:'#1c1a4a', note:{en:'Our most comprehensive package — 3 CT choices, dementia genetics, full ultrasound. Best for 60s+.',ja:'最も充実したパッケージ。CT 3択・認知症遺伝子・全身超音波。60代以上に最適。',zh:'最全面的套餐——3项CT、痴呆基因、全身超声波。最适合60岁+。',ko:'가장 완전한 패키지. CT 3개 선택, 치매 유전자, 전신 초음파. 60대 이상에 최적.'} }
  };

  function showResult() {
    setTimeout(() => {
      document.getElementById('qStep3').classList.remove('active');
      document.getElementById('qResult').classList.add('active');
      document.getElementById('quizBar').style.width = '100%';
      let key = 'nice2030';
      if (quizAge === '60s+') key = 'nice6070';
      else if (quizConcern === 'women') key = 'womens';
      else if (quizConcern === 'brain') key = 'brain';
      else if (quizConcern === 'gut') key = 'digestive';
      else if (quizAge === '40s' || quizAge === '50s') key = 'nice4050';
      const p = pkgs[key];
      document.getElementById('resultPkg').style.background = p.color;
      document.getElementById('resultName').textContent = p.name;
      document.getElementById('resultDesc').textContent = p.desc[lang] || p.desc.en;
      document.getElementById('resultPrice').textContent = p.price;
      document.getElementById('resultConvert').textContent = p.convert;
      document.getElementById('resultNote').textContent = p.note[lang] || p.note.en;
    }, 180);
  }

  /* ── SURGERY ACCORDION ── */
  function toggleSurg(header) {
    const cat = header.closest('.surg-cat');
    const body = cat.querySelector('.surg-body');
    const toggle = header.querySelector('.surg-toggle');
    const isOpen = body.classList.contains('open');
    body.classList.toggle('open', !isOpen);
    toggle.classList.toggle('open', !isOpen);
  }

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

  /* ── INIT: Auto-detect browser language ── */
  setLang(detectBrowserLang());
</script>
</body>
</html>`

app.get('/', (c) => c.html(HTML))
app.get('*', (c) => c.html(HTML))

// Vercel serverless export
export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const fetch = (await import('node-fetch')).default as unknown as typeof globalThis.fetch
  // Use @hono/node-server adapter
  const { serve } = await import('@hono/node-server')
  // For Vercel, handle directly
  const url = `http://${req.headers.host || 'localhost'}${req.url || '/'}`
  const headers: Record<string, string> = {}
  for (const [k, v] of Object.entries(req.headers)) {
    if (typeof v === 'string') headers[k] = v
    else if (Array.isArray(v)) headers[k] = v.join(', ')
  }
  const body = await new Promise<Buffer>((resolve) => {
    const chunks: Buffer[] = []
    req.on('data', c => chunks.push(c))
    req.on('end', () => resolve(Buffer.concat(chunks)))
  })
  const request = new Request(url, {
    method: req.method || 'GET',
    headers,
    body: body.length > 0 ? body : undefined,
  })
  const response = await app.fetch(request)
  res.statusCode = response.status
  response.headers.forEach((v, k) => res.setHeader(k, v))
  const resBody = await response.arrayBuffer()
  res.end(Buffer.from(resBody))
}
