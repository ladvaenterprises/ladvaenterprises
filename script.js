/* ═══════════════ EMAILJS INITIALIZATION ═══════════════ */
// Initialize EmailJS with your public key
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
emailjs.init('CexFmsp-OgulbLQ86');

/* ═══════════════ CASE STUDY DATA ═══════════════ */
var caseStudies = [
  {
    tag: 'Financial Advisory',
    client: 'Horizon Industries Ltd.',
    scope: 'Financial Restructuring &amp; Fundraising Strategy',
    headerClass: 'c1',
    metrics: [
      { num: '₹180Cr', lbl: 'Debt Restructured' },
      { num: '34%', lbl: 'Cost Reduction' },
      { num: '18mo', lbl: 'Turnaround Time' }
    ],
    challenge: 'Horizon Industries was grappling with severe liquidity pressure following two years of declining revenue. With ₹180 Crore in outstanding debt, deteriorating lender relationships, and mounting operational costs, the company faced the real risk of insolvency. Board confidence was at an all-time low and management lacked a clear strategic path forward.',
    approach: [
      'Comprehensive balance sheet diagnostic and cash-flow stress testing across 4 business units.',
      'Restructured ₹180Cr of debt through renegotiated repayment schedules and revised covenant packages with 3 lenders.',
      'Identified and executed ₹60Cr in sustainable cost reductions across procurement, overheads, and workforce optimization.',
      'Prepared Series B fundraising materials including investor decks, financial models, and due-diligence documentation.',
      'Facilitated introductions with 12 strategic investors, resulting in a successful Series B close.'
    ],
    outcome: 'Within 18 months, Horizon Industries restored profitability, fully stabilized lender relationships, and successfully raised Series B funding. The company\'s credit rating improved by two notches and management reported a complete restoration of board and investor confidence.',
    consultant: 'Priya Shah, Head of Financial Advisory'
  },
  {
    tag: 'Digital Transformation',
    client: 'BrightPath Ventures',
    scope: 'Legacy ERP Migration &amp; Cloud Adoption',
    headerClass: 'c2',
    metrics: [
      { num: '4mo', lbl: 'Migration Time' },
      { num: '0', lbl: 'Downtime Hours' },
      { num: '62%', lbl: 'Efficiency Gain' }
    ],
    challenge: 'BrightPath Ventures was running on a 12-year-old on-premise ERP system that had become a critical bottleneck to growth. Manual processes, siloed data, and near-zero real-time visibility into operations were costing the business an estimated ₹3Cr per year in inefficiency. Multiple failed previous migration attempts had left leadership wary of further disruption.',
    approach: [
      'Comprehensive legacy system audit mapping 140+ business processes across finance, procurement, HR, and operations.',
      'Designed a phased, zero-downtime cloud migration plan using a parallel-run approach to eliminate business risk.',
      'Selected and implemented a cloud-native ERP platform aligned with BrightPath\'s 5-year growth roadmap.',
      'Built custom integration layers for 8 third-party tools including CRM, payroll, and logistics systems.',
      'Delivered change management training for 200+ staff across 4 locations over 6 weeks.'
    ],
    outcome: 'The full migration was completed in just 4 months with zero operational downtime — a first in BrightPath\'s history. Process cycle times dropped by 62%, real-time reporting became available across all departments, and the business saved ₹3.5Cr annually in operational overhead within the first year.',
    consultant: 'Arjun Desai, Director of Digital Transformation'
  },
  {
    tag: 'HR Strategy',
    client: 'Apex Manufacturing Ltd.',
    scope: 'Talent Scale-up &amp; Culture Transformation',
    headerClass: 'c3',
    metrics: [
      { num: '50→200', lbl: 'Headcount Growth' },
      { num: '82%', lbl: '1-Year Retention' },
      { num: '12mo', lbl: 'Duration' }
    ],
    challenge: 'Apex Manufacturing needed to quadruple its workforce from 50 to 200 employees within 12 months following a major contract win. The business had no formal HR function, no structured interview process, and no employer brand presence in the talent market. Leadership feared rapid growth would destroy the tight-knit culture that had driven early success.',
    approach: [
      'Built an end-to-end HR function from scratch including policies, processes, HRIS, and a dedicated HR team.',
      'Designed a structured competency-based interview process with role-specific assessment frameworks for 18 job families.',
      'Created a compelling employer brand — careers page, LinkedIn presence, and campus partnership program with 3 engineering colleges.',
      'Implemented a 30-60-90 day structured onboarding program ensuring cultural immersion from day one.',
      'Designed and delivered management training for all 12 team leads covering feedback, delegation, and performance culture.'
    ],
    outcome: 'Apex successfully scaled from 50 to 200 employees within 12 months, meeting all project staffing requirements on schedule. The 1-year retention rate of 82% exceeded the industry average of 67%. Apex was subsequently listed as one of "Best Workplaces in Manufacturing" by a leading industry body — a direct result of the culture work undertaken.',
    consultant: 'Kavya Iyer, Head of HR &amp; Talent Strategy'
  }
];

function openCaseModal(index) {
  var cs = caseStudies[index];
  var header = document.getElementById('caseModalHeader');
  var body = document.getElementById('caseModalBody');

  header.className = 'case-modal-header case-header ' + cs.headerClass;
  header.innerHTML = '<button class="case-modal-close" onclick="closeCaseModalBtn()" aria-label="Close">✕</button>'
    + '<div class="case-tag">' + cs.tag + '</div>'
    + '<div class="case-client">' + cs.client + '</div>'
    + '<div class="case-scope">' + cs.scope + '</div>';

  var metricsHtml = cs.metrics.map(function(m) {
    return '<div class="case-modal-metric"><div class="case-modal-metric-num">' + m.num + '</div><div class="case-modal-metric-lbl">' + m.lbl + '</div></div>';
  }).join('');

  var approachItems = cs.approach.map(function(a) { return '<li>' + a + '</li>'; }).join('');

  body.innerHTML = '<div class="case-modal-metrics">' + metricsHtml + '</div>'
    + '<div class="case-modal-section"><h4>The Challenge</h4><p>' + cs.challenge + '</p></div>'
    + '<div class="case-modal-section"><h4>Our Approach</h4><ul>' + approachItems + '</ul></div>'
    + '<div class="case-modal-section"><h4>The Outcome</h4><p>' + cs.outcome + '</p></div>'
    + '<div class="case-modal-section" style="font-size:13px;color:var(--muted);margin-top:16px;padding-top:16px;border-top:1px solid var(--border)">Led by: <strong style="color:var(--navy)">' + cs.consultant + '</strong></div>'
    + '<div class="case-modal-cta"><a href="#contact" class="btn-navy" onclick="closeCaseModalBtn()">Discuss a Similar Project →</a><a href="#contact" class="btn-outline" onclick="closeCaseModalBtn()">Book Free Consultation</a></div>';

  document.getElementById('caseModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  // Scroll modal to top
  document.getElementById('caseModal').scrollTop = 0;
}

function closeCaseModal(e) {
  if (e.target === document.getElementById('caseModalOverlay')) { closeCaseModalBtn(); }
}
function closeCaseModalBtn() {
  document.getElementById('caseModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════ LEGAL MODALS ═══════════════ */
function openLegalModal(type) {
  var id = type === 'privacy' ? 'privacyModal' : 'termsModal';
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLegalModal(type, e) {
  var id = type === 'privacy' ? 'privacyModal' : 'termsModal';
  if (e.target === document.getElementById(id)) { closeLegalModalBtn(type); }
}
function closeLegalModalBtn(type) {
  var id = type === 'privacy' ? 'privacyModal' : 'termsModal';
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════ MOBILE MENU ═══════════════ */
var hamburger   = document.getElementById('hamburger');
var mobileMenu  = document.getElementById('mobileMenu');
var mobileClose = document.getElementById('mobileClose');

function openMobile() {
  mobileMenu.classList.add('open'); hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded','true'); document.body.classList.add('menu-open');
}
function closeMobile() {
  mobileMenu.classList.remove('open'); hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open');
}
hamburger.addEventListener('click', function() { mobileMenu.classList.contains('open') ? closeMobile() : openMobile(); });
mobileClose.addEventListener('click', closeMobile);
document.querySelectorAll('.mobile-nav-link').forEach(function(l){ l.addEventListener('click', closeMobile); });
mobileMenu.addEventListener('click', function(e){ if(e.target===mobileMenu) closeMobile(); });
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') {
    closeMobile();
    closeCaseModalBtn();
    closeLegalModalBtn('privacy');
    closeLegalModalBtn('terms');
  }
});

/* ═══════════════ SCROLL REVEAL ═══════════════ */
var revealEls = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale');
if ('IntersectionObserver' in window && revealEls.length) {
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e, i) {
      if (e.isIntersecting) {
        setTimeout(function() { e.target.classList.add('up'); }, i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  revealEls.forEach(function(el) { io.observe(el); });
} else {
  revealEls.forEach(function(el) { el.classList.add('up'); });
}

/* ═══════════════ ACTIVE NAV ═══════════════ */
var sections = ['hero','about','services','industries','process','features','case-studies','team','why-us','testimonials','awards','blog','faq','contact'];
var navLinks = document.querySelectorAll('.nav-links a[data-section]');
function updateActiveNav() {
  var current = '';
  sections.forEach(function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    if (window.scrollY >= el.offsetTop - 140) current = id;
  });
  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.dataset.section === current) link.classList.add('active');
  });
}

/* ═══════════════ SCROLL PROGRESS + BACK TO TOP + NAV SCROLLED ═══════════════ */
var scrollProgress = document.getElementById('scrollProgress');
var backToTop = document.getElementById('backToTop');
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  var scrolled = window.scrollY;
  var total = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (scrolled / total * 100) + '%';
  backToTop.classList.toggle('show', scrolled > 400);
  navbar.classList.toggle('scrolled', scrolled > 40);
  updateActiveNav();
}, { passive: true });
updateActiveNav();

/* ═══════════════ FAQ ACCORDION — + / × ═══════════════ */
document.querySelectorAll('.faq-question').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var item = btn.closest('.faq-item');
    var isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(function(i) {
      i.classList.remove('open');
      var ch = i.querySelector('.faq-chevron');
      if (ch) ch.textContent = '+';
    });
    // Open clicked if was closed
    if (!isOpen) {
      item.classList.add('open');
      var chevron = item.querySelector('.faq-chevron');
      if (chevron) chevron.textContent = '×';
    }
  });
});

/* ═══════════════ CURSOR GLOW ═══════════════ */
var cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', function(e) {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
}, { passive: true });

/* ═══════════════ CONTACT FORM ═══════════════ */
/* ═══════════════ CONTACT FORM (FINAL FIX) ═══════════════ */

const btn = document.getElementById('formSubmitBtn');

if (!btn.dataset.listenerAdded) {
  btn.dataset.listenerAdded = "true";   // 🔒 prevent duplicate binding

  let isSending = false;

  btn.addEventListener('click', function(e) {
    e.preventDefault();

    console.log("🟡 Button Clicked");

    if (isSending) {
      console.log("⛔ Blocked duplicate send");
      return;
    }

    let valid = true;

    const fields = [
      { id:'firstName', err:'firstNameErr', check: v => v.trim().length > 0 },
      { id:'lastName',  err:'lastNameErr',  check: v => v.trim().length > 0 },
      { id:'email',     err:'emailErr',     check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id:'company',   err:'companyErr',   check: v => v.trim().length > 0 },
      { id:'service',   err:'serviceErr',   check: v => v !== '' },
      { id:'message',   err:'messageErr',   check: v => v.trim().length > 10 }
    ];

    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const err   = document.getElementById(f.err);

      if (!input) return;

      if (!f.check(input.value)) {
        input.classList.add('error');
        if (err) err.classList.add('show');
        valid = false;
      } else {
        input.classList.remove('error');
        if (err) err.classList.remove('show');
      }
    });

    if (!document.getElementById('consent').checked) {
      btn.innerText = "Accept Policy ⚠️";
      setTimeout(() => btn.innerText = "Send Message", 2000);
      return;
    }

    if (!valid) return;

    const templateParams = {
      to_email: 'ladventerprises@gmail.com',
      first_name: document.getElementById('firstName').value.trim(),
      last_name: document.getElementById('lastName').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim() || 'Not provided',
      company: document.getElementById('company').value.trim(),
      company_size: document.getElementById('companySize').value || 'Not specified',
      service: document.getElementById('service').value,
      message: document.getElementById('message').value.trim(),
      time: new Date().toLocaleString()
    };

    console.log("📤 Sending Email");

    isSending = true;
    btn.innerText = "Sending...";
    btn.disabled = true;

    emailjs.send('service_czfvrff', 'template_5g5vlk5', templateParams)
      .then(function(response) {
        console.log("✅ SUCCESS", response);

        btn.innerText = "Sent ✅";

        document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select')
          .forEach(el => el.type === 'checkbox' ? el.checked = false : el.value = '');

        setTimeout(() => {
          btn.innerText = "Send Message";
          btn.disabled = false;
          isSending = false;
        }, 3000);
      })
      .catch(function(error) {
        console.log("❌ FAILED", error);

        btn.innerText = "Failed ❌";

        setTimeout(() => {
          btn.innerText = "Try Again";
          btn.disabled = false;
          isSending = false;
        }, 3000);
      });

  });
}
/* ═══════════════ STAGGER STAT COUNTER ═══════════════ */
function animateCounter(el, target, suffix, duration) {
  var start = 0; var step = target / (duration / 16);
  var timer = setInterval(function() {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start) + suffix;
  }, 16);
}
var statObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var nums = entry.target.querySelectorAll('.stat-num');
      nums.forEach(function(n) {
        var text = n.textContent;
        var match = text.match(/(\d+)/);
        if (!match) return;
        var target = parseInt(match[1]);
        var suffix = text.replace(match[0], '').replace(/\d/g,'');
        var span = n.querySelector('span');
        var spanHtml = span ? '<span style="font-size:26px">' + span.textContent + '</span>' : '';
        n.innerHTML = '0' + spanHtml;
        animateCounter(n, target, '', 1200);
      });
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.stat-card').forEach(function(c) { statObserver.observe(c); });

/* ═══════════════ TESTIMONIAL SLIDER (Swiper) ═══════════════ */
(function () {
  if (typeof Swiper === 'undefined') return;

  new Swiper('.testi-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    speed: 600,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    pagination: {
      el: '.testi-pagination',
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
})();