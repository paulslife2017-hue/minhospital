import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- SEO Meta Tags -->
  <title>Min Hospital Medical Check-up | Seoul Korea Health Screening for Foreigners</title>
  <meta name="description" content="Min Hospital Seoul offers comprehensive health check-up packages for foreigners in Korea. Expert medical screening from ₩230,000. Multilingual support, located at Mia Station, Gangbuk-gu, Seoul. Book online or call 1899-7529.">
  <meta name="keywords" content="min hospital seoul, medical checkup korea, health screening foreigners, 민병원, 외국인검진, korea health checkup, gangbuk hospital, minhospital, seoul medical exam, korea hospital foreigner">
  <meta name="author" content="Min Hospital">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://minhospital-checkup.pages.dev/">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://minhospital-checkup.pages.dev/">
  <meta property="og:title" content="Min Hospital | Medical Check-up for Foreigners in Seoul">
  <meta property="og:description" content="Comprehensive health screening packages starting from ₩230,000. Expert medical care for foreigners in Seoul, Korea. Since 2008.">
  <meta property="og:image" content="https://minhospital-checkup.pages.dev/static/og-image.jpg">
  <meta property="og:locale" content="en_US">
  <meta property="og:site_name" content="Min Hospital Seoul">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Min Hospital | Medical Check-up for Foreigners">
  <meta name="twitter:description" content="Comprehensive health screening packages for foreigners in Seoul Korea. Starting from ₩230,000.">

  <!-- Schema.org structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Min Hospital (민병원)",
    "alternateName": "THE Min Hospital",
    "description": "Specialized surgical hospital offering comprehensive health check-up packages for foreigners in Seoul, Korea. Since 2008.",
    "url": "https://minhospital.co.kr",
    "telephone": "1899-7529",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "155 Dobong-ro",
      "addressLocality": "Gangbuk-gu",
      "addressRegion": "Seoul",
      "postalCode": "01098",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.6286,
      "longitude": 127.0284
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "medicalSpecialty": "GeneralPractice",
    "priceRange": "₩230,000 - ₩490,000",
    "hasMap": "https://maps.google.com/?q=민병원+서울+강북구+도봉로+155",
    "sameAs": ["https://minhospital.co.kr"]
  }
  </script>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'min-blue': '#1a4a8a',
            'min-blue-light': '#2563b0',
            'min-gold': '#e8a020',
            'min-gold-light': '#f5bc40',
            'min-gray': '#f4f6f9',
          },
          fontFamily: {
            'sans': ['Inter', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <style>
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', sans-serif; background: #f8f9fc; color: #1a1a2e; }

    /* Custom scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #f1f1f1; }
    ::-webkit-scrollbar-thumb { background: #1a4a8a; border-radius: 3px; }

    /* Gradient backgrounds */
    .hero-gradient {
      background: linear-gradient(135deg, #0d2b5e 0%, #1a4a8a 40%, #2563b0 70%, #1e6bb8 100%);
    }
    .card-hover {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card-hover:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(26, 74, 138, 0.15);
    }
    .badge-pick {
      background: linear-gradient(135deg, #e8a020, #f5bc40);
      color: #1a1a2e;
    }
    .nav-fixed {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      background: rgba(13, 43, 94, 0.95);
    }
    .price-tag {
      background: linear-gradient(135deg, #1a4a8a, #2563b0);
    }
    .feature-icon {
      background: linear-gradient(135deg, #e8f0ff, #c8d8f8);
    }
    .section-divider {
      background: linear-gradient(90deg, transparent, #1a4a8a, transparent);
      height: 1px;
    }
    .package-card {
      border: 1px solid rgba(26, 74, 138, 0.1);
      background: white;
      border-radius: 20px;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .package-card:hover {
      border-color: #1a4a8a;
      box-shadow: 0 20px 50px rgba(26, 74, 138, 0.15);
      transform: translateY(-6px);
    }
    .package-header {
      background: linear-gradient(135deg, #0d2b5e, #1a4a8a);
      color: white;
      padding: 24px 20px;
    }
    .age-badge {
      display: inline-block;
      background: rgba(255,255,255,0.2);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 4px 0;
      font-size: 13px;
      color: #444;
      line-height: 1.4;
    }
    .check-item .icon { color: #1a4a8a; flex-shrink: 0; margin-top: 2px; }
    .sticky-header { position: sticky; top: 0; z-index: 100; }
    .pulse-ring {
      animation: pulse-ring 2s infinite;
    }
    @keyframes pulse-ring {
      0% { box-shadow: 0 0 0 0 rgba(232, 160, 32, 0.4); }
      70% { box-shadow: 0 0 0 12px rgba(232, 160, 32, 0); }
      100% { box-shadow: 0 0 0 0 rgba(232, 160, 32, 0); }
    }
    .float-cta {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999;
      animation: float-up 0.5s ease 1.5s both;
    }
    @keyframes float-up {
      from { opacity: 0; transform: translateX(-50%) translateY(20px); }
      to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    .tab-active {
      background: #1a4a8a;
      color: white;
      box-shadow: 0 4px 12px rgba(26, 74, 138, 0.3);
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    .accordion-content.open {
      max-height: 1000px;
    }
    .lang-btn { cursor: pointer; transition: all 0.2s; }
    .lang-btn.active { background: rgba(255,255,255,0.2); border-radius: 4px; }
    .stat-number {
      font-size: 2rem;
      font-weight: 800;
      color: #1a4a8a;
      line-height: 1;
    }
    @media (max-width: 640px) {
      .hero-title { font-size: 1.8rem; }
      .package-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>

<body>
  <!-- Navigation -->
  <nav class="sticky-header nav-fixed py-3 px-4 shadow-lg" role="navigation" aria-label="Main navigation">
    <div class="max-w-5xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:linear-gradient(135deg,#e8a020,#f5bc40)">
          <span class="text-white font-bold text-sm">M</span>
        </div>
        <div>
          <div class="text-white font-bold text-sm leading-tight">MIN HOSPITAL</div>
          <div class="text-blue-200 text-xs leading-tight">Since 2008</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <!-- Language Toggle -->
        <div class="flex gap-1 text-xs" id="langToggle">
          <span class="lang-btn active text-white px-2 py-1" onclick="setLang('en')" data-lang="en">EN</span>
          <span class="text-blue-300">|</span>
          <span class="lang-btn text-blue-200 px-2 py-1" onclick="setLang('ko')" data-lang="ko">KO</span>
          <span class="text-blue-300">|</span>
          <span class="lang-btn text-blue-200 px-2 py-1" onclick="setLang('zh')" data-lang="zh">中文</span>
        </div>
        <a href="tel:18997529" class="bg-min-gold text-white rounded-full px-3 py-1.5 text-xs font-semibold flex items-center gap-1 pulse-ring">
          <i class="fas fa-phone-alt text-xs"></i>
          <span class="hidden sm:inline">Book Now</span>
          <span class="sm:hidden">Call</span>
        </a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="hero-gradient text-white" role="banner">
    <div class="max-w-5xl mx-auto px-4 pt-10 pb-12">
      <!-- Trust badges -->
      <div class="flex flex-wrap gap-2 mb-5 justify-center">
        <span class="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
          <i class="fas fa-award mr-1 text-yellow-300"></i> Since 2008
        </span>
        <span class="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
          <i class="fas fa-globe mr-1 text-blue-300"></i> Foreign Patient Certified
        </span>
        <span class="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
          <i class="fas fa-map-marker-alt mr-1 text-red-300"></i> Near Mia Station
        </span>
      </div>

      <!-- Main Headline -->
      <h1 class="hero-title text-3xl sm:text-4xl font-extrabold text-center mb-3 leading-tight">
        <span data-en="Medical Check-up" data-ko="건강검진 프로그램" data-zh="外籍人士体检">Medical Check-up</span><br>
        <span class="text-min-gold-light" data-en="for Foreigners in Seoul" data-ko="외국인 전문 검진" data-zh="首尔外国人专用">for Foreigners in Seoul</span>
      </h1>
      <p class="text-center text-blue-100 text-sm sm:text-base mb-6 max-w-2xl mx-auto" 
         data-en="Comprehensive health screening tailored for foreigners at Seoul's specialized surgical hospital. Min Hospital has been trusted since 2008."
         data-ko="서울 강북구에 위치한 외과 전문병원 민병원에서 외국인을 위한 맞춤형 종합검진을 받아보세요."
         data-zh="位于首尔的专业外科医院民病院，为外国人提供全面的健康检查服务。">
        Comprehensive health screening tailored for foreigners at Seoul's specialized surgical hospital. Min Hospital has been trusted since 2008.
      </p>

      <!-- Price CTA -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
        <a href="#packages" class="w-full sm:w-auto bg-min-gold text-gray-900 font-bold rounded-full px-8 py-3.5 text-center text-base shadow-lg hover:bg-yellow-400 transition-colors">
          <i class="fas fa-search-plus mr-2"></i>
          <span data-en="View Packages" data-ko="패키지 보기" data-zh="查看套餐">View Packages</span>
        </a>
        <a href="tel:18997529" class="w-full sm:w-auto bg-white/10 border border-white/30 text-white font-semibold rounded-full px-8 py-3.5 text-center text-base hover:bg-white/20 transition-colors">
          <i class="fas fa-phone mr-2"></i>1899-7529
        </a>
      </div>

      <!-- Stats Row -->
      <div class="grid grid-cols-3 gap-3 max-w-lg mx-auto">
        <div class="text-center">
          <div class="text-2xl font-extrabold text-yellow-300">17+</div>
          <div class="text-xs text-blue-200 mt-0.5" data-en="Years of Trust" data-ko="신뢰의 역사" data-zh="年信任">Years of Trust</div>
        </div>
        <div class="text-center border-x border-white/20">
          <div class="text-2xl font-extrabold text-yellow-300">6</div>
          <div class="text-xs text-blue-200 mt-0.5" data-en="Packages" data-ko="검진 패키지" data-zh="检查套餐">Packages</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-extrabold text-yellow-300">13</div>
          <div class="text-xs text-blue-200 mt-0.5" data-en="Specialist Centers" data-ko="전문 센터" data-zh="专科中心">Specialist Centers</div>
        </div>
      </div>
    </div>

    <!-- Wave divider -->
    <div style="margin-bottom:-2px">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width:100%;height:40px;display:block">
        <path d="M0,40 C360,0 1080,80 1440,20 L1440,60 L0,60 Z" fill="#f8f9fc"/>
      </svg>
    </div>
  </header>

  <!-- Why Min Hospital -->
  <section class="py-10 px-4 bg-white" aria-labelledby="why-min">
    <div class="max-w-5xl mx-auto">
      <h2 id="why-min" class="text-2xl font-bold text-center text-min-blue mb-2" 
          data-en="Why Choose Min Hospital?" data-ko="왜 민병원인가요?" data-zh="为什么选择民病院？">
        Why Choose Min Hospital?
      </h2>
      <p class="text-center text-gray-500 text-sm mb-8"
         data-en="Seoul's premier specialized surgical hospital with over 17 years of medical excellence"
         data-ko="17년 역사의 서울 최고 외과 전문병원"
         data-zh="首尔17年历史的专业外科医院">
        Seoul's premier specialized surgical hospital with over 17 years of medical excellence
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div class="text-center p-4 rounded-2xl bg-blue-50 card-hover">
          <div class="w-12 h-12 feature-icon rounded-xl flex items-center justify-center mx-auto mb-3">
            <i class="fas fa-user-md text-min-blue text-lg"></i>
          </div>
          <h3 class="font-semibold text-sm text-min-blue mb-1" data-en="Expert Doctors" data-ko="전문 의료진" data-zh="专家医生">Expert Doctors</h3>
          <p class="text-xs text-gray-500" data-en="University professor-level physicians" data-ko="대학교수 출신 의료진" data-zh="大学教授级医生">University professor-level physicians</p>
        </div>
        <div class="text-center p-4 rounded-2xl bg-blue-50 card-hover">
          <div class="w-12 h-12 feature-icon rounded-xl flex items-center justify-center mx-auto mb-3">
            <i class="fas fa-globe-asia text-min-blue text-lg"></i>
          </div>
          <h3 class="font-semibold text-sm text-min-blue mb-1" data-en="Foreign Patient Certified" data-ko="외국인 유치기관" data-zh="认证外国患者机构">Foreign Patient Certified</h3>
          <p class="text-xs text-gray-500" data-en="Government certified for international patients" data-ko="정부 인증 외국인환자 유치기관" data-zh="政府认证的国际患者医疗机构">Government certified for international patients</p>
        </div>
        <div class="text-center p-4 rounded-2xl bg-blue-50 card-hover">
          <div class="w-12 h-12 feature-icon rounded-xl flex items-center justify-center mx-auto mb-3">
            <i class="fas fa-subway text-min-blue text-lg"></i>
          </div>
          <h3 class="font-semibold text-sm text-min-blue mb-1" data-en="Easy Access" data-ko="편리한 위치" data-zh="便利的位置">Easy Access</h3>
          <p class="text-xs text-gray-500" data-en="5 min walk from Mia Station Exit 5" data-ko="미아역 5번 출구 도보 5분" data-zh="美亚站5号出口步行5分钟">5 min walk from Mia Station Exit 5</p>
        </div>
        <div class="text-center p-4 rounded-2xl bg-blue-50 card-hover">
          <div class="w-12 h-12 feature-icon rounded-xl flex items-center justify-center mx-auto mb-3">
            <i class="fas fa-microscope text-min-blue text-lg"></i>
          </div>
          <h3 class="font-semibold text-sm text-min-blue mb-1" data-en="Advanced Equipment" data-ko="첨단 의료장비" data-zh="先进医疗设备">Advanced Equipment</h3>
          <p class="text-xs text-gray-500" data-en="University hospital-level medical facilities" data-ko="대학병원 수준의 진료환경" data-zh="大学医院水平的医疗设施">University hospital-level medical facilities</p>
        </div>
        <div class="text-center p-4 rounded-2xl bg-blue-50 card-hover">
          <div class="w-12 h-12 feature-icon rounded-xl flex items-center justify-center mx-auto mb-3">
            <i class="fas fa-procedures text-min-blue text-lg"></i>
          </div>
          <h3 class="font-semibold text-sm text-min-blue mb-1" data-en="On-site Treatment" data-ko="즉시 치료 가능" data-zh="即时治疗">On-site Treatment</h3>
          <p class="text-xs text-gray-500" data-en="Biopsy & early cancer treatment available" data-ko="조직검사 및 조기암 치료 가능" data-zh="可进行活检和早期癌症治疗">Biopsy &amp; early cancer treatment available</p>
        </div>
        <div class="text-center p-4 rounded-2xl bg-blue-50 card-hover">
          <div class="w-12 h-12 feature-icon rounded-xl flex items-center justify-center mx-auto mb-3">
            <i class="fas fa-clock text-min-blue text-lg"></i>
          </div>
          <h3 class="font-semibold text-sm text-min-blue mb-1" data-en="2-4 Hour Exam" data-ko="2~4시간 검진" data-zh="2-4小时检查">2-4 Hour Exam</h3>
          <p class="text-xs text-gray-500" data-en="Efficient one-stop health screening" data-ko="원스톱 효율적인 건강검진" data-zh="高效的一站式健康检查">Efficient one-stop health screening</p>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider mx-8 my-2"></div>

  <!-- Packages Section -->
  <section class="py-10 px-4" id="packages" aria-labelledby="packages-title">
    <div class="max-w-5xl mx-auto">
      <h2 id="packages-title" class="text-2xl font-bold text-center text-min-blue mb-2"
          data-en="Check-up Packages" data-ko="검진 패키지" data-zh="体检套餐">
        Check-up Packages
      </h2>
      <p class="text-center text-gray-500 text-sm mb-3"
         data-en="All packages include sedation endoscopy fee at no extra charge"
         data-ko="모든 패키지 수면 내시경 수면비 무료"
         data-zh="所有套餐包含无痛胃镜，不额外收费">
        All packages include sedation endoscopy fee at no extra charge
      </p>

      <!-- Package Filter Tabs -->
      <div class="flex gap-2 overflow-x-auto pb-2 mb-6 justify-center flex-wrap">
        <button onclick="filterPackages('all')" class="tab-btn tab-active rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all"
                data-en="All Packages" data-ko="전체" data-zh="全部">All Packages</button>
        <button onclick="filterPackages('age')" class="tab-btn bg-gray-100 text-gray-600 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all"
                data-en="By Age" data-ko="연령별" data-zh="按年龄">By Age</button>
        <button onclick="filterPackages('special')" class="tab-btn bg-gray-100 text-gray-600 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all"
                data-en="Special Programs" data-ko="특별 프로그램" data-zh="特别项目">Special Programs</button>
      </div>

      <!-- Package Cards Grid -->
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" id="packagesGrid">

        <!-- Package 1: 2030 -->
        <article class="package-card" data-category="age" itemscope itemtype="https://schema.org/MedicalTest">
          <div class="package-header">
            <div class="flex items-start justify-between mb-2">
              <div>
                <span class="age-badge mb-2 inline-block">20s - 30s</span>
                <h3 class="text-lg font-bold" itemprop="name" 
                    data-en="NICE [2030] Check-up" data-ko="나이스 [2030] 검진" data-zh="NICE [2030] 体检">NICE [2030] Check-up</h3>
                <p class="text-blue-200 text-xs mt-1" 
                   data-en="Essential health screening for young adults"
                   data-ko="젊은 층을 위한 필수 건강검진"
                   data-zh="适合年轻人的基础健康检查">Essential health screening for young adults</p>
              </div>
              <span class="badge-pick rounded-full px-3 py-1 text-xs font-bold flex-shrink-0 ml-2">Pick 1</span>
            </div>
            <div class="flex items-end justify-between mt-3">
              <div>
                <div class="text-3xl font-extrabold text-white">₩230,000</div>
                <div class="text-blue-200 text-xs">≈ USD $165</div>
              </div>
              <div class="text-right">
                <div class="text-blue-200 text-xs"><i class="fas fa-clock mr-1"></i>2-3 hrs</div>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="text-xs font-bold text-min-blue uppercase tracking-wide mb-3"
                 data-en="What's Included" data-ko="포함 항목" data-zh="包含项目">What's Included</div>

            <div class="mb-3">
              <div class="text-xs font-semibold text-gray-500 mb-1.5 uppercase"
                   data-en="Endoscopy + Ultrasound (Pick 1)" data-ko="내시경 + 초음파 (택1)" data-zh="内窥镜+超声波（选1）">
                Endoscopy + Ultrasound (Pick 1)
              </div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Gastroscopy (Standard/Sedation) ★ Free sedation" data-ko="위내시경 (일반/수면) ★ 수면비 무료" data-zh="胃镜（普通/无痛）★ 免费镇静">Gastroscopy (Standard/Sedation) ★ Free sedation</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Breast Ultrasound (female)" data-ko="유방 초음파 (여)" data-zh="乳房超声波（女）">Breast Ultrasound (female)</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Uterus Ultrasound (female)" data-ko="자궁 초음파 (여)" data-zh="子宫超声波（女）">Uterus Ultrasound (female)</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Prostate Ultrasound (male)" data-ko="전립선 초음파 (남)" data-zh="前列腺超声波（男）">Prostate Ultrasound (male)</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Thyroid Ultrasound" data-ko="갑상선 초음파" data-zh="甲状腺超声波">Thyroid Ultrasound</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Abdominal Ultrasound" data-ko="복부 초음파" data-zh="腹部超声波">Abdominal Ultrasound</span></div>
            </div>

            <div class="accordion-toggle cursor-pointer flex items-center justify-between py-2 border-t border-gray-100" onclick="toggleAccordion(this)">
              <span class="text-xs font-semibold text-min-blue" 
                    data-en="+ View all included tests" data-ko="+ 전체 검사 항목 보기" data-zh="+ 查看所有检查项目">+ View all included tests</span>
              <i class="fas fa-chevron-down text-xs text-gray-400 transition-transform"></i>
            </div>
            <div class="accordion-content">
              <div class="pt-2 space-y-0.5">
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Basic Medical Examination" data-ko="기본 진료 및 기초검사" data-zh="基础体检">Basic Medical Examination</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Body Composition + Bone Density" data-ko="체성분 + 골밀도 검사" data-zh="体成分+骨密度">Body Composition + Bone Density</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="ECG + Chest X-ray" data-ko="심전도 + 흉부 X-선" data-zh="心电图+胸部X光">ECG + Chest X-ray</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Liver Function Test" data-ko="간기능 검사" data-zh="肝功能检查">Liver Function Test</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Hepatitis B &amp; C Test" data-ko="B형, C형 간염 검사" data-zh="乙肝丙肝检查">Hepatitis B &amp; C Test</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Cardiac Risk &amp; Lipid Profile" data-ko="심장질환 및 고지혈증 검사" data-zh="心脏风险及血脂检查">Cardiac Risk &amp; Lipid Profile</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Kidney &amp; Diabetes Test" data-ko="신장 및 당뇨 검사" data-zh="肾脏及糖尿病检查">Kidney &amp; Diabetes Test</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Anemia &amp; Blood Test" data-ko="빈혈 및 혈액 검사" data-zh="贫血及血液检查">Anemia &amp; Blood Test</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Thyroid Function Test" data-ko="갑상선 기능 검사" data-zh="甲状腺功能检查">Thyroid Function Test</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Gynecologic Exam (Pap smear)" data-ko="부인과 검사 (자궁암 검사)" data-zh="妇科检查（子宫颈涂片）">Gynecologic Exam (Pap smear)</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Urinalysis" data-ko="소변 검사" data-zh="尿液检查">Urinalysis</span></div>
              </div>
            </div>

            <a href="tel:18997529" class="mt-4 block w-full text-center bg-min-blue text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-blue-800 transition-colors"
               data-en="Book This Package" data-ko="이 패키지 예약하기" data-zh="预约此套餐">
              Book This Package
            </a>
          </div>
        </article>

        <!-- Package 2: 4050 -->
        <article class="package-card" data-category="age">
          <div class="package-header" style="background: linear-gradient(135deg, #1a3a6e, #2455a0);">
            <div class="flex items-start justify-between mb-2">
              <div>
                <span class="age-badge mb-2 inline-block">40s - 50s</span>
                <h3 class="text-lg font-bold" 
                    data-en="NICE [4050] Check-up" data-ko="나이스 [4050] 검진" data-zh="NICE [4050] 体检">NICE [4050] Check-up</h3>
                <p class="text-blue-200 text-xs mt-1"
                   data-en="Comprehensive CT scan + endoscopy package"
                   data-ko="CT 스캔 + 내시경 종합 패키지"
                   data-zh="综合CT扫描+内窥镜套餐">Comprehensive CT scan + endoscopy package</p>
              </div>
              <span class="badge-pick rounded-full px-3 py-1 text-xs font-bold flex-shrink-0 ml-2">Pick 2</span>
            </div>
            <div class="flex items-end justify-between mt-3">
              <div>
                <div class="text-3xl font-extrabold text-white">₩350,000</div>
                <div class="text-blue-200 text-xs">≈ USD $250</div>
              </div>
              <div class="text-right">
                <div class="text-blue-200 text-xs"><i class="fas fa-clock mr-1"></i>3-4 hrs</div>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="text-xs font-bold text-min-blue uppercase tracking-wide mb-3"
                 data-en="What's Included" data-ko="포함 항목" data-zh="包含项目">What's Included</div>

            <div class="mb-3">
              <div class="text-xs font-semibold text-gray-500 mb-1.5 uppercase"
                   data-en="Endoscopy + CT Scan + Ultrasound (Pick 2)" data-ko="내시경 + CT + 초음파 (택2)" data-zh="内窥镜+CT+超声波（选2）">
                Endoscopy + CT Scan + Ultrasound (Pick 2)
              </div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Colonoscopy (Standard/Sedation) ★ Free sedation" data-ko="대장 내시경 ★ 수면비 무료" data-zh="肠镜★免费镇静">Colonoscopy (Standard/Sedation) ★ Free sedation</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="CT Scan options: Brain, Chest, Cervical/Lumbar Spine, Abdomen, Coronary CT" data-ko="CT 선택: 두부, 흉부, 경추/요추, 복부(골반), 관상동맥" data-zh="CT选择：脑部、胸部、颈椎/腰椎、腹盆腔、冠状动脉">CT Scan options: Brain, Chest, Cervical/Lumbar Spine, Abdomen, Coronary CT</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Breast Ultrasound (female)" data-ko="유방 초음파 (여)" data-zh="乳房超声波（女）">Breast Ultrasound (female)</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Carotid Artery Ultrasound" data-ko="경동맥 초음파" data-zh="颈动脉超声波">Carotid Artery Ultrasound</span></div>
            </div>

            <div class="accordion-toggle cursor-pointer flex items-center justify-between py-2 border-t border-gray-100" onclick="toggleAccordion(this)">
              <span class="text-xs font-semibold text-min-blue"
                    data-en="+ View all included tests" data-ko="+ 전체 검사 항목 보기" data-zh="+ 查看所有检查项目">+ View all included tests</span>
              <i class="fas fa-chevron-down text-xs text-gray-400 transition-transform"></i>
            </div>
            <div class="accordion-content">
              <div class="pt-2 space-y-0.5">
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Gastroscopy (Standard/Sedation)" data-ko="위내시경 (일반/수면)" data-zh="胃镜（普通/无痛）">Gastroscopy (Standard/Sedation)</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Tumor Markers: AFP, CEA, CA19-9, PSA (male), CA125 (female)" data-ko="암표지자: AFP, CEA, CA19-9, PSA, CA125" data-zh="肿瘤标志物：AFP、CEA、CA19-9、PSA、CA125">Tumor Markers: AFP, CEA, CA19-9, PSA (male), CA125 (female)</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Thyroid + Abdominal + Prostate/Uterus Ultrasound" data-ko="갑상선+복부+전립선/자궁 초음파" data-zh="甲状腺+腹部+前列腺/子宫超声波">Thyroid + Abdominal + Prostate/Uterus Ultrasound</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Bone Density Test" data-ko="골밀도 검사" data-zh="骨密度检查">Bone Density Test</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Full Blood Panel + All Organ Function Tests" data-ko="전체 혈액 검사 + 전신 기능 검사" data-zh="全面血液检查+全身功能检查">Full Blood Panel + All Organ Function Tests</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Gynecologic Exam (Pap smear + Mammography)" data-ko="부인과 검사 (자궁암+유방X선)" data-zh="妇科检查（子宫颈涂片+乳房X光）">Gynecologic Exam (Pap smear + Mammography)</span></div>
              </div>
            </div>

            <a href="tel:18997529" class="mt-4 block w-full text-center bg-min-blue text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-blue-800 transition-colors"
               data-en="Book This Package" data-ko="이 패키지 예약하기" data-zh="预约此套餐">
              Book This Package
            </a>
          </div>
        </article>

        <!-- Package 3: 6070 - POPULAR -->
        <article class="package-card border-2 border-yellow-400 relative" data-category="age">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-min-gold text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap z-10"
               data-en="⭐ Most Comprehensive" data-ko="⭐ 가장 종합적" data-zh="⭐ 最全面">
            ⭐ Most Comprehensive
          </div>
          <div class="package-header" style="background: linear-gradient(135deg, #142d5a, #1d4285);">
            <div class="flex items-start justify-between mb-2">
              <div>
                <span class="age-badge mb-2 inline-block">60s - 70s</span>
                <h3 class="text-lg font-bold"
                    data-en="NICE [6070] Check-up" data-ko="나이스 [6070] 검진" data-zh="NICE [6070] 体检">NICE [6070] Check-up</h3>
                <p class="text-blue-200 text-xs mt-1"
                   data-en="Most comprehensive senior health screening"
                   data-ko="시니어를 위한 최고 수준의 종합검진"
                   data-zh="最全面的老年人健康检查">Most comprehensive senior health screening</p>
              </div>
              <span class="badge-pick rounded-full px-3 py-1 text-xs font-bold flex-shrink-0 ml-2">Pick 3</span>
            </div>
            <div class="flex items-end justify-between mt-3">
              <div>
                <div class="text-3xl font-extrabold text-white">₩490,000</div>
                <div class="text-blue-200 text-xs">≈ USD $350</div>
              </div>
              <div class="text-right">
                <div class="text-blue-200 text-xs"><i class="fas fa-clock mr-1"></i>3-4 hrs</div>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="text-xs font-bold text-min-blue uppercase tracking-wide mb-3"
                 data-en="What's Included" data-ko="포함 항목" data-zh="包含项目">What's Included</div>

            <div class="mb-3">
              <div class="text-xs font-semibold text-gray-500 mb-1.5"
                   data-en="Everything in 4050 Package PLUS:" data-ko="4050 패키지 + 추가:" data-zh="包含4050套餐所有内容，另加：">
                Everything in 4050 Package PLUS:
              </div>
              <div class="check-item"><i class="fas fa-plus-circle icon text-yellow-500"></i><span data-en="Transcranial Doppler (Brain blood flow)" data-ko="뇌혈류 초음파" data-zh="经颅多普勒（脑血流）">Transcranial Doppler (Brain blood flow)</span></div>
              <div class="check-item"><i class="fas fa-plus-circle icon text-yellow-500"></i><span data-en="Genetic Testing for Dementia" data-ko="치매 유전자 검사" data-zh="痴呆基因检测">Genetic Testing for Dementia</span></div>
              <div class="check-item"><i class="fas fa-plus-circle icon text-yellow-500"></i><span data-en="Rheumatoid Arthritis &amp; Gout Test" data-ko="류마티즘 및 통풍 검사" data-zh="类风湿关节炎和痛风检查">Rheumatoid Arthritis &amp; Gout Test</span></div>
            </div>

            <div class="accordion-toggle cursor-pointer flex items-center justify-between py-2 border-t border-gray-100" onclick="toggleAccordion(this)">
              <span class="text-xs font-semibold text-min-blue"
                    data-en="+ View all included tests" data-ko="+ 전체 검사 항목 보기" data-zh="+ 查看所有检查项目">+ View all included tests</span>
              <i class="fas fa-chevron-down text-xs text-gray-400 transition-transform"></i>
            </div>
            <div class="accordion-content">
              <div class="pt-2 space-y-0.5">
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Colonoscopy + Gastroscopy (Sedation - Free)" data-ko="대장+위내시경 (수면-무료)" data-zh="肠镜+胃镜（无痛-免费）">Colonoscopy + Gastroscopy (Sedation - Free)</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="CT Scan (Pick 3 from 6 options)" data-ko="CT 스캔 (6가지 중 3개 선택)" data-zh="CT扫描（6项中选3项）">CT Scan (Pick 3 from 6 options)</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="Full Ultrasound Panel" data-ko="전신 초음파 검사" data-zh="全身超声波检查">Full Ultrasound Panel</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="5 Tumor Markers" data-ko="5가지 암표지자 검사" data-zh="5项肿瘤标志物">5 Tumor Markers</span></div>
                <div class="check-item"><i class="fas fa-check icon text-green-500"></i><span data-en="All comprehensive blood tests" data-ko="전체 혈액 검사" data-zh="全面血液检查">All comprehensive blood tests</span></div>
              </div>
            </div>

            <a href="tel:18997529" class="mt-4 block w-full text-center text-white rounded-xl py-2.5 text-sm font-bold transition-colors" 
               style="background:linear-gradient(135deg,#e8a020,#f5bc40);color:#1a1a2e;"
               data-en="Book This Package" data-ko="이 패키지 예약하기" data-zh="预约此套餐">
              Book This Package
            </a>
          </div>
        </article>

        <!-- Package 4: 소화기정밀 -->
        <article class="package-card" data-category="special">
          <div class="package-header" style="background: linear-gradient(135deg, #0f3a6e, #1560a8);">
            <div class="flex items-start justify-between mb-2">
              <div>
                <span class="age-badge mb-2 inline-block" data-en="Digestive Specialist" data-ko="소화기 전문" data-zh="消化专科">Digestive Specialist</span>
                <h3 class="text-lg font-bold"
                    data-en="Digestive Precision Check-up" data-ko="나이스 [소화기정밀] 검진" data-zh="消化精密体检">Digestive Precision Check-up</h3>
                <p class="text-blue-200 text-xs mt-1"
                   data-en="Focused GI tract &amp; liver detailed screening"
                   data-ko="위장관 및 간 정밀 검진 특화"
                   data-zh="消化道及肝脏精密检查">Focused GI tract &amp; liver detailed screening</p>
              </div>
              <span class="badge-pick rounded-full px-3 py-1 text-xs font-bold flex-shrink-0 ml-2">Pick 1</span>
            </div>
            <div class="flex items-end justify-between mt-3">
              <div>
                <div class="text-3xl font-extrabold text-white">₩290,000</div>
                <div class="text-blue-200 text-xs">≈ USD $210</div>
              </div>
              <div class="text-right">
                <div class="text-blue-200 text-xs"><i class="fas fa-clock mr-1"></i>3-4 hrs</div>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="text-xs font-bold text-min-blue uppercase tracking-wide mb-3"
                 data-en="What's Included" data-ko="포함 항목" data-zh="包含项目">What's Included</div>

            <div class="mb-3">
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Colonoscopy ★ Free sedation" data-ko="대장내시경 ★ 수면비 무료" data-zh="肠镜★免费镇静">Colonoscopy ★ Free sedation</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Carotid Artery Ultrasound" data-ko="경동맥 초음파" data-zh="颈动脉超声波">Carotid Artery Ultrasound</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Liver Fibrosis Scan (FibroScan)" data-ko="간섬유화 검사" data-zh="肝纤维化检查">Liver Fibrosis Scan (FibroScan)</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Breast/Uterus/Prostate Ultrasound" data-ko="유방/자궁/전립선 초음파" data-zh="乳房/子宫/前列腺超声波">Breast/Uterus/Prostate Ultrasound</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="5 Tumor Markers (AFP, CEA, PSA, CA125)" data-ko="5가지 암표지자 검사" data-zh="5项肿瘤标志物">5 Tumor Markers (AFP, CEA, PSA, CA125)</span></div>
              <div class="check-item"><i class="fas fa-check icon"></i><span data-en="Rheumatoid Arthritis + Hormone Test" data-ko="류마티즘 + 호르몬 검사" data-zh="类风湿关节炎+激素检查">Rheumatoid Arthritis + Hormone Test</span></div>
            </div>

            <a href="tel:18997529" class="mt-2 block w-full text-center bg-min-blue text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-blue-800 transition-colors"
               data-en="Book This Package" data-ko="이 패키지 예약하기" data-zh="预约此套餐">
              Book This Package
            </a>
          </div>
        </article>

        <!-- Package 5: 여성정밀 -->
        <article class="package-card" data-category="special">
          <div class="package-header" style="background: linear-gradient(135deg, #5a1a6e, #9b2fd4);">
            <div class="flex items-start justify-between mb-2">
              <div>
                <span class="age-badge mb-2 inline-block" data-en="Women's Specialist" data-ko="여성 전문" data-zh="女性专科">Women's Specialist</span>
                <h3 class="text-lg font-bold"
                    data-en="Women's Precision Check-up" data-ko="나이스 [여성정밀] 검진" data-zh="女性精密体检">Women's Precision Check-up</h3>
                <p class="text-blue-100 text-xs mt-1"
                   data-en="Complete women's health screening with CT"
                   data-ko="CT 포함 여성 전문 종합검진"
                   data-zh="含CT的完整女性健康检查">Complete women's health screening with CT</p>
              </div>
              <span class="badge-pick rounded-full px-3 py-1 text-xs font-bold flex-shrink-0 ml-2">Pick 2</span>
            </div>
            <div class="flex items-end justify-between mt-3">
              <div>
                <div class="text-3xl font-extrabold text-white">₩390,000</div>
                <div class="text-blue-200 text-xs">≈ USD $280</div>
              </div>
              <div class="text-right">
                <div class="text-blue-200 text-xs"><i class="fas fa-clock mr-1"></i>3-4 hrs</div>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="text-xs font-bold text-purple-700 uppercase tracking-wide mb-3"
                 data-en="What's Included" data-ko="포함 항목" data-zh="包含项目">What's Included</div>

            <div class="mb-3">
              <div class="check-item"><i class="fas fa-check icon" style="color:#7c3aed"></i><span data-en="Colonoscopy + Gastroscopy ★ Free sedation" data-ko="대장+위내시경 ★ 수면비 무료" data-zh="肠镜+胃镜★免费镇静">Colonoscopy + Gastroscopy ★ Free sedation</span></div>
              <div class="check-item"><i class="fas fa-check icon" style="color:#7c3aed"></i><span data-en="CT Scans (Pick 2 from 6 options)" data-ko="CT 스캔 (6가지 중 2개 선택)" data-zh="CT扫描（6项中选2项）">CT Scans (Pick 2 from 6 options)</span></div>
              <div class="check-item"><i class="fas fa-venus icon" style="color:#ec4899"></i><span data-en="Gynecologic Exam (Pap smear + HPV PCR)" data-ko="자궁암 검사 + HPV PCR" data-zh="妇科检查（子宫颈涂片+HPV PCR）">Gynecologic Exam (Pap smear + HPV PCR)</span></div>
              <div class="check-item"><i class="fas fa-venus icon" style="color:#ec4899"></i><span data-en="Female Hormone Test (FSH, LH, E2, Prolactin)" data-ko="여성 호르몬 검사" data-zh="女性激素检查（FSH、LH、E2、泌乳素）">Female Hormone Test (FSH, LH, E2, Prolactin)</span></div>
              <div class="check-item"><i class="fas fa-venus icon" style="color:#ec4899"></i><span data-en="Breast Ultrasound + Mammography" data-ko="유방 초음파 + 유방 X선" data-zh="乳房超声波+乳房X光">Breast Ultrasound + Mammography</span></div>
              <div class="check-item"><i class="fas fa-venus icon" style="color:#ec4899"></i><span data-en="Uterus Ultrasound" data-ko="자궁 초음파" data-zh="子宫超声波">Uterus Ultrasound</span></div>
            </div>

            <a href="tel:18997529" class="mt-2 block w-full text-center text-white rounded-xl py-2.5 text-sm font-semibold transition-colors"
               style="background:linear-gradient(135deg,#7c3aed,#9b2fd4)"
               data-en="Book This Package" data-ko="이 패키지 예약하기" data-zh="预约此套餐">
              Book This Package
            </a>
          </div>
        </article>

        <!-- Package 6: 뇌·유전자정밀 -->
        <article class="package-card" data-category="special">
          <div class="package-header" style="background: linear-gradient(135deg, #0a3d1e, #1a7a3e);">
            <div class="flex items-start justify-between mb-2">
              <div>
                <span class="age-badge mb-2 inline-block" data-en="Brain & Genetics" data-ko="뇌·유전자 전문" data-zh="脑部及基因专科">Brain & Genetics</span>
                <h3 class="text-lg font-bold"
                    data-en="Brain & Genetics Precision" data-ko="나이스 [뇌·유전자정밀] 검진" data-zh="脑部及基因精密体检">Brain & Genetics Precision</h3>
                <p class="text-green-200 text-xs mt-1"
                   data-en="Advanced brain imaging + genetic testing"
                   data-ko="뇌 정밀 영상 + 유전자 정밀 검사"
                   data-zh="高级脑部成像+基因检测">Advanced brain imaging + genetic testing</p>
              </div>
              <span class="badge-pick rounded-full px-3 py-1 text-xs font-bold flex-shrink-0 ml-2">Pick 1</span>
            </div>
            <div class="flex items-end justify-between mt-3">
              <div>
                <div class="text-3xl font-extrabold text-white">₩400,000</div>
                <div class="text-blue-200 text-xs">≈ USD $285</div>
              </div>
              <div class="text-right">
                <div class="text-blue-200 text-xs"><i class="fas fa-clock mr-1"></i>3-4 hrs</div>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="text-xs font-bold text-green-700 uppercase tracking-wide mb-3"
                 data-en="What's Included" data-ko="포함 항목" data-zh="包含项目">What's Included</div>

            <div class="mb-3">
              <div class="check-item"><i class="fas fa-brain icon" style="color:#059669"></i><span data-en="Brain CT (Neural disease screening)" data-ko="두부 CT (뇌신경질환 정밀)" data-zh="脑部CT（神经疾病筛查）">Brain CT (Neural disease screening)</span></div>
              <div class="check-item"><i class="fas fa-brain icon" style="color:#059669"></i><span data-en="Transcranial Doppler (Brain blood flow)" data-ko="뇌혈류 초음파" data-zh="经颅多普勒（脑血流）">Transcranial Doppler (Brain blood flow)</span></div>
              <div class="check-item"><i class="fas fa-dna icon" style="color:#059669"></i><span data-en="Comprehensive Genetic Testing" data-ko="종합 유전자 정밀 검사" data-zh="综合基因精密检测">Comprehensive Genetic Testing</span></div>
              <div class="check-item"><i class="fas fa-dna icon" style="color:#059669"></i><span data-en="Cancer Gene Panel (10+ cancers)" data-ko="암 유전자 검사 (10종 이상)" data-zh="癌症基因检查（10种以上）">Cancer Gene Panel (10+ cancers)</span></div>
              <div class="check-item"><i class="fas fa-check icon" style="color:#059669"></i><span data-en="Hormone Test (Male & Female)" data-ko="남녀 호르몬 검사" data-zh="男女激素检查">Hormone Test (Male & Female)</span></div>
              <div class="check-item"><i class="fas fa-check icon" style="color:#059669"></i><span data-en="Liver Fibrosis Scan + Full Ultrasound" data-ko="간섬유화 + 전신 초음파" data-zh="肝纤维化+全身超声波">Liver Fibrosis Scan + Full Ultrasound</span></div>
            </div>

            <a href="tel:18997529" class="mt-2 block w-full text-center text-white rounded-xl py-2.5 text-sm font-semibold transition-colors"
               style="background:linear-gradient(135deg,#059669,#1a7a3e)"
               data-en="Book This Package" data-ko="이 패키지 예약하기" data-zh="预约此套餐">
              Book This Package
            </a>
          </div>
        </article>

      </div>

      <!-- Notes -->
      <div class="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-4">
        <h4 class="text-sm font-bold text-min-blue mb-2"
            data-en="📋 Important Notes" data-ko="📋 중요 안내" data-zh="📋 重要说明">📋 Important Notes</h4>
        <ul class="space-y-1.5 text-xs text-gray-600">
          <li class="flex gap-2"><span class="text-min-blue font-bold">•</span>
            <span data-en="Sedation (anesthesia) fee is FREE for all endoscopy procedures"
                  data-ko="모든 내시경 수면비 무료"
                  data-zh="所有内窥镜手术的镇静费用免费">Sedation (anesthesia) fee is FREE for all endoscopy procedures</span>
          </li>
          <li class="flex gap-2"><span class="text-min-blue font-bold">•</span>
            <span data-en="Polyp removal during colonoscopy may incur additional charges"
                  data-ko="용종 절제술 시행 시 추가 비용 발생"
                  data-zh="结肠镜检查期间切除息肉可能会产生额外费用">Polyp removal during colonoscopy may incur additional charges</span>
          </li>
          <li class="flex gap-2"><span class="text-min-blue font-bold">•</span>
            <span data-en="Biopsy for thyroid/breast cancer findings available on-site (surgical hospital advantage)"
                  data-ko="갑상선·유방암 유소견자 조직 검사 가능 (외과병원 장점)"
                  data-zh="甲状腺/乳腺癌发现时可在现场进行活检（外科医院优势）">Biopsy for thyroid/breast cancer findings available on-site (surgical hospital advantage)</span>
          </li>
          <li class="flex gap-2"><span class="text-min-blue font-bold">•</span>
            <span data-en="Early gastric cancer detected can be treated immediately (endoscopic resection)"
                  data-ko="조기 위암 발견 시 치료 내시경으로 즉시 치료 가능"
                  data-zh="早期胃癌发现后可立即进行内镜切除治疗">Early gastric cancer detected can be treated immediately (endoscopic resection)</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Comparison Table -->
  <section class="py-10 px-4 bg-white" aria-labelledby="compare-title">
    <div class="max-w-5xl mx-auto">
      <h2 id="compare-title" class="text-2xl font-bold text-center text-min-blue mb-6"
          data-en="Package Comparison" data-ko="패키지 비교" data-zh="套餐对比">Package Comparison</h2>
      <div class="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table class="w-full text-xs" style="min-width:550px">
          <thead>
            <tr style="background:linear-gradient(135deg,#1a4a8a,#2563b0);" class="text-white">
              <th class="py-3 px-3 text-left font-semibold" data-en="Package" data-ko="패키지" data-zh="套餐">Package</th>
              <th class="py-3 px-2 text-center font-semibold" data-en="Price" data-ko="가격" data-zh="价格">Price</th>
              <th class="py-3 px-2 text-center font-semibold">CT</th>
              <th class="py-3 px-2 text-center font-semibold" data-en="Ultrasound" data-ko="초음파" data-zh="超声波">US</th>
              <th class="py-3 px-2 text-center font-semibold" data-en="Genetics" data-ko="유전자" data-zh="基因">DNA</th>
              <th class="py-3 px-2 text-center font-semibold" data-en="Tumor Markers" data-ko="암표지자" data-zh="肿瘤标志">Tumor</th>
              <th class="py-3 px-2 text-center font-semibold" data-en="Time" data-ko="시간" data-zh="时间">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
              <td class="py-3 px-3 font-medium text-min-blue">NICE [2030]</td>
              <td class="py-3 px-2 text-center font-bold text-green-600">₩230K</td>
              <td class="py-3 px-2 text-center text-red-400">—</td>
              <td class="py-3 px-2 text-center text-green-500">✓</td>
              <td class="py-3 px-2 text-center text-red-400">—</td>
              <td class="py-3 px-2 text-center text-red-400">—</td>
              <td class="py-3 px-2 text-center text-gray-500">2-3h</td>
            </tr>
            <tr class="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
              <td class="py-3 px-3 font-medium text-min-blue" data-en="Digestive Precision" data-ko="소화기정밀" data-zh="消化精密">Digestive Precision</td>
              <td class="py-3 px-2 text-center font-bold text-green-600">₩290K</td>
              <td class="py-3 px-2 text-center text-red-400">—</td>
              <td class="py-3 px-2 text-center text-green-500">✓✓</td>
              <td class="py-3 px-2 text-center text-red-400">—</td>
              <td class="py-3 px-2 text-center text-green-500">✓</td>
              <td class="py-3 px-2 text-center text-gray-500">3-4h</td>
            </tr>
            <tr class="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
              <td class="py-3 px-3 font-medium text-min-blue">NICE [4050]</td>
              <td class="py-3 px-2 text-center font-bold text-green-600">₩350K</td>
              <td class="py-3 px-2 text-center text-green-500">Pick2</td>
              <td class="py-3 px-2 text-center text-green-500">✓✓</td>
              <td class="py-3 px-2 text-center text-red-400">—</td>
              <td class="py-3 px-2 text-center text-green-500">✓</td>
              <td class="py-3 px-2 text-center text-gray-500">3-4h</td>
            </tr>
            <tr class="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
              <td class="py-3 px-3 font-medium text-purple-700" data-en="Women's Precision" data-ko="여성정밀" data-zh="女性精密">Women's Precision</td>
              <td class="py-3 px-2 text-center font-bold text-green-600">₩390K</td>
              <td class="py-3 px-2 text-center text-green-500">Pick2</td>
              <td class="py-3 px-2 text-center text-green-500">✓✓</td>
              <td class="py-3 px-2 text-center text-red-400">—</td>
              <td class="py-3 px-2 text-center text-green-500">✓</td>
              <td class="py-3 px-2 text-center text-gray-500">3-4h</td>
            </tr>
            <tr class="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
              <td class="py-3 px-3 font-medium text-green-700" data-en="Brain & Genetics" data-ko="뇌·유전자정밀" data-zh="脑部及基因">Brain & Genetics</td>
              <td class="py-3 px-2 text-center font-bold text-green-600">₩400K</td>
              <td class="py-3 px-2 text-center text-green-500">Brain</td>
              <td class="py-3 px-2 text-center text-green-500">✓✓</td>
              <td class="py-3 px-2 text-center text-green-500">✓✓</td>
              <td class="py-3 px-2 text-center text-green-500">✓</td>
              <td class="py-3 px-2 text-center text-gray-500">3-4h</td>
            </tr>
            <tr class="bg-yellow-50 hover:bg-yellow-100/50 transition-colors">
              <td class="py-3 px-3 font-bold text-min-blue">NICE [6070] ⭐</td>
              <td class="py-3 px-2 text-center font-bold text-green-600">₩490K</td>
              <td class="py-3 px-2 text-center text-green-500">Pick3</td>
              <td class="py-3 px-2 text-center text-green-500">✓✓✓</td>
              <td class="py-3 px-2 text-center text-green-500">✓</td>
              <td class="py-3 px-2 text-center text-green-500">✓✓</td>
              <td class="py-3 px-2 text-center text-gray-500">3-4h</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- How to Book -->
  <section class="py-10 px-4 bg-min-gray" aria-labelledby="booking-title">
    <div class="max-w-5xl mx-auto">
      <h2 id="booking-title" class="text-2xl font-bold text-center text-min-blue mb-2"
          data-en="How to Book" data-ko="예약 방법" data-zh="如何预约">How to Book</h2>
      <p class="text-center text-gray-500 text-sm mb-8"
         data-en="Simple 3-step process to get your health check-up"
         data-ko="간편한 3단계 예약 절차"
         data-zh="简单3步完成健康检查预约">Simple 3-step process to get your health check-up</p>

      <div class="grid sm:grid-cols-3 gap-4">
        <div class="text-center">
          <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl font-bold" style="background:linear-gradient(135deg,#1a4a8a,#2563b0)">1</div>
          <h3 class="font-bold text-min-blue mb-1" data-en="Contact Us" data-ko="연락하기" data-zh="联系我们">Contact Us</h3>
          <p class="text-sm text-gray-500"
             data-en="Call 1899-7529 or visit minhospital.co.kr to inquire about packages"
             data-ko="1899-7529로 전화하거나 minhospital.co.kr 방문하여 패키지 문의"
             data-zh="拨打1899-7529或访问minhospital.co.kr咨询套餐">Call 1899-7529 or visit minhospital.co.kr to inquire about packages</p>
        </div>
        <div class="text-center">
          <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl font-bold" style="background:linear-gradient(135deg,#e8a020,#f5bc40)">2</div>
          <h3 class="font-bold text-min-blue mb-1" data-en="Make Reservation" data-ko="예약 확정" data-zh="确认预约">Make Reservation</h3>
          <p class="text-sm text-gray-500"
             data-en="Select your package and preferred date. Fasting required from the night before"
             data-ko="패키지 선택 후 방문 날짜 확정. 전날 저녁부터 금식 필요"
             data-zh="选择套餐和日期。前一晚需开始禁食">Select your package and preferred date. Fasting required from the night before</p>
        </div>
        <div class="text-center">
          <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl font-bold" style="background:linear-gradient(135deg,#059669,#1a7a3e)">3</div>
          <h3 class="font-bold text-min-blue mb-1" data-en="Visit & Check-up" data-ko="방문 & 검진" data-zh="就诊&体检">Visit & Check-up</h3>
          <p class="text-sm text-gray-500"
             data-en="Visit Min Hospital, complete 2-4hr check-up, receive results & consultation"
             data-ko="민병원 방문, 2-4시간 검진 후 결과 상담"
             data-zh="到访民病院，完成2-4小时体检，获得结果咨询">Visit Min Hospital, complete 2-4hr check-up, receive results & consultation</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="py-10 px-4 bg-white" aria-labelledby="faq-title">
    <div class="max-w-3xl mx-auto">
      <h2 id="faq-title" class="text-2xl font-bold text-center text-min-blue mb-8"
          data-en="Frequently Asked Questions" data-ko="자주 묻는 질문" data-zh="常见问题">Frequently Asked Questions</h2>

      <div class="space-y-3">
        <div class="border border-gray-100 rounded-xl overflow-hidden">
          <button class="w-full text-left px-4 py-3.5 flex items-center justify-between font-semibold text-sm text-min-blue hover:bg-blue-50 transition-colors" onclick="toggleFAQ(this)">
            <span data-en="Do I need to speak Korean for the check-up?" data-ko="검진 시 한국어가 필요한가요?" data-zh="体检需要会说韩语吗？">Do I need to speak Korean for the check-up?</span>
            <i class="fas fa-plus text-xs text-gray-400 transition-transform"></i>
          </button>
          <div class="accordion-content px-4 text-sm text-gray-600">
            <p class="py-3" data-en="Min Hospital is a certified foreign patient institution. English assistance is available. Please inform us of your language preference when booking." data-ko="민병원은 외국인환자 유치 인증 의료기관입니다. 영어 안내가 가능합니다. 예약 시 언어 선호도를 알려주세요." data-zh="民病院是认证的外国患者医疗机构。可提供英语服务。预约时请告知您的语言偏好。">Min Hospital is a certified foreign patient institution. English assistance is available. Please inform us of your language preference when booking.</p>
          </div>
        </div>
        <div class="border border-gray-100 rounded-xl overflow-hidden">
          <button class="w-full text-left px-4 py-3.5 flex items-center justify-between font-semibold text-sm text-min-blue hover:bg-blue-50 transition-colors" onclick="toggleFAQ(this)">
            <span data-en="Do I need to fast before the check-up?" data-ko="검진 전 금식이 필요한가요?" data-zh="体检前需要禁食吗？">Do I need to fast before the check-up?</span>
            <i class="fas fa-plus text-xs text-gray-400 transition-transform"></i>
          </button>
          <div class="accordion-content px-4 text-sm text-gray-600">
            <p class="py-3" data-en="Yes, fasting from the night before (after 10 PM) is required for accurate blood tests and endoscopy. Water is permitted until 2 hours before." data-ko="정확한 혈액 검사와 내시경을 위해 전날 밤 10시부터 금식이 필요합니다. 검진 2시간 전까지는 물은 가능합니다." data-zh="是的，为了准确的血液检查和内窥镜检查，需要从前一天晚上10点开始禁食。检查前2小时可以喝水。">Yes, fasting from the night before (after 10 PM) is required for accurate blood tests and endoscopy. Water is permitted until 2 hours before.</p>
          </div>
        </div>
        <div class="border border-gray-100 rounded-xl overflow-hidden">
          <button class="w-full text-left px-4 py-3.5 flex items-center justify-between font-semibold text-sm text-min-blue hover:bg-blue-50 transition-colors" onclick="toggleFAQ(this)">
            <span data-en="How long does the check-up take?" data-ko="검진 시간은 얼마나 걸리나요?" data-zh="体检需要多长时间？">How long does the check-up take?</span>
            <i class="fas fa-plus text-xs text-gray-400 transition-transform"></i>
          </button>
          <div class="accordion-content px-4 text-sm text-gray-600">
            <p class="py-3" data-en="The NICE [2030] package takes approximately 2-3 hours. All other packages take 3-4 hours. Plan to spend half a day at the hospital." data-ko="나이스 [2030] 패키지는 약 2-3시간, 다른 패키지는 3-4시간 소요됩니다. 오전 반나절을 병원에서 보낼 계획을 세우세요." data-zh="NICE [2030]套餐大约需要2-3小时。其他所有套餐需要3-4小时。请计划在医院度过半天时间。">The NICE [2030] package takes approximately 2-3 hours. All other packages take 3-4 hours. Plan to spend half a day at the hospital.</p>
          </div>
        </div>
        <div class="border border-gray-100 rounded-xl overflow-hidden">
          <button class="w-full text-left px-4 py-3.5 flex items-center justify-between font-semibold text-sm text-min-blue hover:bg-blue-50 transition-colors" onclick="toggleFAQ(this)">
            <span data-en="Can I get my results in English?" data-ko="영문 결과지를 받을 수 있나요?" data-zh="可以获得英文检查结果吗？">Can I get my results in English?</span>
            <i class="fas fa-plus text-xs text-gray-400 transition-transform"></i>
          </button>
          <div class="accordion-content px-4 text-sm text-gray-600">
            <p class="py-3" data-en="Yes, Min Hospital provides medical reports for foreign patients. Please request English documentation when booking your appointment." data-ko="네, 외국인 환자를 위한 영문 의료 보고서를 제공합니다. 예약 시 영문 서류를 요청해 주세요." data-zh="是的，民病院为外国患者提供医疗报告。预约时请申请英文文件。">Yes, Min Hospital provides medical reports for foreign patients. Please request English documentation when booking your appointment.</p>
          </div>
        </div>
        <div class="border border-gray-100 rounded-xl overflow-hidden">
          <button class="w-full text-left px-4 py-3.5 flex items-center justify-between font-semibold text-sm text-min-blue hover:bg-blue-50 transition-colors" onclick="toggleFAQ(this)">
            <span data-en="How do I get to Min Hospital?" data-ko="민병원에 어떻게 가나요?" data-zh="如何前往民病院？">How do I get to Min Hospital?</span>
            <i class="fas fa-plus text-xs text-gray-400 transition-transform"></i>
          </button>
          <div class="accordion-content px-4 text-sm text-gray-600">
            <p class="py-3">
              <span data-en="By Subway: Line 4, Mia Station (미아역) Exit 5, 5-minute walk. Address: 155 Dobong-ro, Gangbuk-gu, Seoul. Parking is also available at the hospital."
                    data-ko="지하철: 4호선 미아역 5번 출구에서 도보 5분. 주소: 서울 강북구 도봉로 155. 병원 내 주차 가능."
                    data-zh="地铁：4号线美亚站（미아역）5号出口步行5分钟。地址：首尔江北区道峰路155号。医院内可停车。">By Subway: Line 4, Mia Station (미아역) Exit 5, 5-minute walk. Address: 155 Dobong-ro, Gangbuk-gu, Seoul. Parking is also available at the hospital.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact & Location -->
  <section class="py-10 px-4" style="background:linear-gradient(135deg,#0d2b5e,#1a4a8a)" id="contact" aria-labelledby="contact-title">
    <div class="max-w-5xl mx-auto">
      <h2 id="contact-title" class="text-2xl font-bold text-center text-white mb-8"
          data-en="Contact & Location" data-ko="연락처 및 위치" data-zh="联系方式及位置">Contact & Location</h2>

      <div class="grid sm:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="flex items-start gap-4 bg-white/10 rounded-2xl p-4">
            <div class="w-10 h-10 bg-min-gold rounded-xl flex items-center justify-center flex-shrink-0">
              <i class="fas fa-phone-alt text-white"></i>
            </div>
            <div>
              <div class="text-blue-200 text-xs mb-1" data-en="Phone" data-ko="전화" data-zh="电话">Phone</div>
              <a href="tel:18997529" class="text-white font-bold text-lg">1899-7529</a>
              <div class="text-blue-200 text-xs" data-en="Mon-Fri 09:00-18:00" data-ko="평일 09:00-18:00" data-zh="周一至周五 09:00-18:00">Mon-Fri 09:00-18:00</div>
            </div>
          </div>
          <div class="flex items-start gap-4 bg-white/10 rounded-2xl p-4">
            <div class="w-10 h-10 bg-min-gold rounded-xl flex items-center justify-center flex-shrink-0">
              <i class="fas fa-map-marker-alt text-white"></i>
            </div>
            <div>
              <div class="text-blue-200 text-xs mb-1" data-en="Address" data-ko="주소" data-zh="地址">Address</div>
              <div class="text-white font-semibold text-sm">155 Dobong-ro,<br>Gangbuk-gu, Seoul</div>
              <div class="text-blue-200 text-xs mt-1">서울 강북구 도봉로 155</div>
            </div>
          </div>
          <div class="flex items-start gap-4 bg-white/10 rounded-2xl p-4">
            <div class="w-10 h-10 bg-min-gold rounded-xl flex items-center justify-center flex-shrink-0">
              <i class="fas fa-subway text-white"></i>
            </div>
            <div>
              <div class="text-blue-200 text-xs mb-1" data-en="How to Get There" data-ko="교통편" data-zh="交通方式">How to Get There</div>
              <div class="text-white font-semibold text-sm" 
                   data-en="Line 4 Mia Station Exit 5 (5 min walk)" data-ko="4호선 미아역 5번 출구 (도보 5분)" data-zh="4号线美亚站5号出口（步行5分钟）">Line 4 Mia Station Exit 5 (5 min walk)</div>
              <div class="text-blue-200 text-xs mt-1" data-en="Parking available at hospital" data-ko="병원 내 주차 가능" data-zh="医院内可停车">Parking available at hospital</div>
            </div>
          </div>
          <div class="flex items-start gap-4 bg-white/10 rounded-2xl p-4">
            <div class="w-10 h-10 bg-min-gold rounded-xl flex items-center justify-center flex-shrink-0">
              <i class="fas fa-globe text-white"></i>
            </div>
            <div>
              <div class="text-blue-200 text-xs mb-1" data-en="Website" data-ko="홈페이지" data-zh="网站">Website</div>
              <a href="https://minhospital.co.kr" target="_blank" class="text-white font-semibold text-sm hover:text-yellow-300 transition-colors">minhospital.co.kr</a>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="rounded-2xl overflow-hidden" style="min-height:280px">
          <iframe
            title="Min Hospital Location Map"
            src="https://maps.google.com/maps?q=서울+강북구+도봉로+155+민병원&output=embed&z=16"
            width="100%"
            height="100%"
            style="border:0;min-height:280px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <!-- Final CTA -->
      <div class="mt-8 text-center">
        <p class="text-blue-200 text-sm mb-4"
           data-en="Ready to schedule your health check-up? Contact us today!"
           data-ko="건강검진 예약을 지금 시작하세요!"
           data-zh="准备好预约健康检查了吗？立即联系我们！">
          Ready to schedule your health check-up? Contact us today!
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:18997529" class="bg-min-gold text-gray-900 font-bold rounded-full px-8 py-3.5 text-base shadow-lg hover:bg-yellow-400 transition-colors">
            <i class="fas fa-phone mr-2"></i>Call 1899-7529
          </a>
          <a href="https://minhospital.co.kr" target="_blank" class="bg-white/10 border border-white/30 text-white font-semibold rounded-full px-8 py-3.5 text-base hover:bg-white/20 transition-colors">
            <i class="fas fa-external-link-alt mr-2"></i>Visit Website
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-400 py-6 px-4" role="contentinfo">
    <div class="max-w-5xl mx-auto text-center">
      <div class="flex items-center justify-center gap-2 mb-3">
        <div class="w-6 h-6 rounded flex items-center justify-center" style="background:linear-gradient(135deg,#e8a020,#f5bc40)">
          <span class="text-white font-bold text-xs">M</span>
        </div>
        <span class="text-white font-bold text-sm">MIN HOSPITAL (민병원)</span>
      </div>
      <p class="text-xs mb-2">서울특별시 강북구 도봉로 155 | Tel: 1899-7529 | Since 2008</p>
      <p class="text-xs">
        <span data-en="© 2025 Min Hospital. All rights reserved. Medical information is for reference only."
              data-ko="© 2025 민병원. 의료 정보는 참고용이며 진료는 의료진과 상담하세요."
              data-zh="© 2025 民病院。医疗信息仅供参考，请与医疗人员协商诊疗。">
          © 2025 Min Hospital. All rights reserved. Medical information is for reference only.
        </span>
      </p>
    </div>
  </footer>

  <!-- Floating CTA (Mobile) -->
  <div class="float-cta sm:hidden">
    <a href="tel:18997529" class="bg-min-gold text-gray-900 font-bold rounded-full px-6 py-3 text-sm shadow-2xl flex items-center gap-2 pulse-ring">
      <i class="fas fa-phone-alt"></i>
      <span data-en="Book Now · 1899-7529" data-ko="예약하기 · 1899-7529" data-zh="立即预约 · 1899-7529">Book Now · 1899-7529</span>
    </a>
  </div>

  <script>
    // Language management
    let currentLang = 'en';

    function setLang(lang) {
      currentLang = lang;
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
        btn.classList.toggle('text-white', btn.dataset.lang === lang);
        btn.classList.toggle('text-blue-200', btn.dataset.lang !== lang);
      });
      document.querySelectorAll('[data-' + lang + ']').forEach(el => {
        el.textContent = el.getAttribute('data-' + lang);
      });
    }

    // Package filter
    function filterPackages(category) {
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('tab-active');
        btn.classList.add('bg-gray-100', 'text-gray-600');
      });
      event.target.classList.add('tab-active');
      event.target.classList.remove('bg-gray-100', 'text-gray-600');

      document.querySelectorAll('.package-card').forEach(card => {
        if (category === 'all') {
          card.style.display = '';
        } else {
          card.style.display = card.dataset.category === category ? '' : 'none';
        }
      });
    }

    // Accordion toggle
    function toggleAccordion(toggle) {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('.fa-chevron-down');
      const isOpen = content.classList.contains('open');
      content.classList.toggle('open', !isOpen);
      icon.style.transform = isOpen ? '' : 'rotate(180deg)';
      const span = toggle.querySelector('span');
      if (span) {
        span.textContent = isOpen
          ? (span.getAttribute('data-' + currentLang) || '+ View all included tests')
          : '- Hide tests';
      }
    }

    // FAQ toggle
    function toggleFAQ(btn) {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.fa-plus');
      const isOpen = content.classList.contains('open');
      // Close all others
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      document.querySelectorAll('.fa-plus').forEach(i => {
        i.classList.remove('fa-minus');
        i.classList.add('fa-plus');
      });
      if (!isOpen) {
        content.classList.add('open');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Initialize language
    setLang('en');
  </script>
</body>
</html>`)
})

export default app
