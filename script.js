(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var P = [
    { t: 'Credit Card Fraud Detection & Customer Churn Forecasting', c: ['Machine Learning', 'Predictive Analytics', 'Customer Analytics'], tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'], r: 'https://github.com/Ananth-ajs/credit-card-fraud', one: 'Compares classification models and handles imbalanced data with SMOTE.', pts: ['Data exploration and cleaning', 'Feature engineering', 'Logistic Regression, Decision Tree and K-Nearest Neighbors', 'Random Forest with SMOTE for handling class imbalance', 'Model comparison and model deployment coverage'] },
    { t: 'Travel Insurance Purchase Prediction', c: ['Machine Learning', 'Predictive Analytics'], tags: ['Data Visualization', 'Feature Engineering', 'Model Validation'], r: 'https://github.com/Ananth-ajs/travel-insurance', one: 'Predicts insurance purchases from cleaned and engineered features.', pts: ['Data exploration', 'Data cleaning', 'Data visualization', 'Feature engineering', 'Model training', 'Model validation'] },
    { t: 'RFM Cohort Analysis', c: ['Customer Analytics', 'Machine Learning'], tags: ['RFM', 'K-Means', 'Segmentation'], r: 'https://github.com/Ananth-ajs/RFM-COHORT-ANALYSIS', one: 'Segments customers by recency, frequency and monetary value.', pts: ['Recency, Frequency and Monetary analysis', 'Customer segmentation', 'Data preprocessing', 'K-Means clustering', 'Customer behaviour analysis'] },
    { t: 'IPL Predictive Analysis of Match Outcomes', c: ['Predictive Analytics'], tags: ['Match Data', 'Pattern Analysis'], r: 'https://github.com/Ananth-ajs/IPL-Cricket-Analysis', one: 'Explores historical IPL data to study match outcomes.', pts: ['Historical IPL match data analysis', 'Identification of match patterns', 'Predictive analysis of IPL match outcomes'] },
    { t: 'Uber Ride Analysis', c: ['Data Analysis'], tags: ['EDA', 'Data Visualization', 'Trend Analysis'], r: 'https://github.com/Ananth-ajs/uber_project', one: 'Exploratory analysis of ride usage patterns and trends.', pts: ['Exploratory Data Analysis', 'Ride usage pattern analysis', 'Data visualization', 'Trend analysis'] },
    { t: 'Google Pay Expense Sharing', c: ['Data Analysis'], tags: ['Transaction Analysis', 'Expense Data'], r: '', one: 'Analyzes expense-sharing data and transaction patterns.', pts: ['Analyzed expense-sharing data', 'Explored transaction patterns', 'Derived insights from expense-related data'] }
  ];
  var CATS = ['Machine Learning', 'Predictive Analytics', 'Data Analysis', 'Customer Analytics'];
  var SK = [
    ['Programming', ['Python']],
    ['Data Manipulation', ['Pandas', 'NumPy']],
    ['Machine Learning', ['Linear Regression', 'Multiple Linear Regression', 'Logistic Regression', 'Decision Tree', 'KNN', 'Random Forest', 'K-Means Clustering', 'Hierarchical Clustering', 'Anomaly Detection', 'Dimensionality Reduction']],
    ['Statistics', ['Mean', 'Median', 'Mode', 'Variance', 'Standard Deviation', 'IQR', 'Quartiles', 'Percentiles', 'Normal Distribution', 'Skewness', 'Covariance', 'Probability', 'Sampling', 'CLT', 'Confidence Intervals', 'Hypothesis Testing']],
    ['Data Analysis', ['EDA', 'Data Cleaning', 'Preprocessing', 'Feature Engineering', 'Model Evaluation', 'Validation']],
    ['Visualization', ['Matplotlib', 'Seaborn', 'Plotly']],
    ['Tools', ['Jupyter Notebook', 'VS Code', 'Git', 'GitHub']]
  ];
  var DIST = [['Programming', ['Python']], ['Libraries', ['Pandas', 'NumPy', 'Scikit-learn']], ['Visualization', ['Matplotlib', 'Seaborn', 'Plotly']], ['Machine Learning', ['Regression', 'Classification', 'Clustering', 'Anomaly Detection']], ['Statistical Analysis', ['Descriptive Statistics', 'Inferential Statistics', 'Probability', 'Hypothesis Testing']]];
  var EXP = ['Python Programming', 'Statistics & Probability', 'Data Analysis', 'Machine Learning', 'Predictive Analytics', 'Data Visualization'];
  var li = function (a) { return a.map(function (x) { return '<li>' + x + '</li>'; }).join(''); };

  $('#expertise').innerHTML = li(EXP);
  $('#skillgrid').innerHTML = SK.map(function (s) { return '<div class="panel sk"><h3>' + s[0] + '<span>' + s[1].length + '</span></h3><ul class="tags">' + li(s[1]) + '</ul></div>'; }).join('');
  $('#dist').innerHTML = DIST.map(function (d) {
    return '<div class="bar" title="' + d[1].join(', ') + '"><span>' + d[0] + '</span><i><b style="width:' + d[1].length / 5 * 100 + '%"></b></i><em>' + d[1].length + '</em></div>';
  }).join('') + '<p class="muted tiny">' + DIST.map(function (d) { return d[0] + ': ' + d[1].join(', '); }).join('. ') + '.</p>';
  $('#landscape').innerHTML = CATS.map(function (c) {
    var n = P.filter(function (p) { return p.c.indexOf(c) > -1; }).length;
    return '<div class="bar"><span>' + c + '</span><i><b style="width:' + n / P.length * 100 + '%"></b></i><em>' + n + '</em></div>';
  }).join('') + '<p class="muted tiny">' + P.length + ' projects in total.</p>';

  var fbox = $('#filters'), grid = $('#projgrid'), cur = 'All Projects';
  function card(p, i) {
    return '<article class="panel proj"><div class="proj-h"><b>Project ' + String(i + 1).padStart(2, '0') + '</b><span class="cat">' + p.c[0] + '</span></div><h3>' + p.t + '</h3><p>' + p.one + '</p><ul class="tags">' + li(p.tags) + '</ul><div class="row">' +
      (p.r ? '<a class="btn sm" href="' + p.r + '" target="_blank" rel="noopener noreferrer">View GitHub</a>' : '<span class="btn sm off" aria-disabled="true">No repository link</span>') +
      '<button class="btn sm ghost" data-i="' + i + '">More Details</button></div></article>';
  }
  function draw() {
    grid.innerHTML = P.map(function (p, i) { return (cur === 'All Projects' || p.c.indexOf(cur) > -1) ? card(p, i) : ''; }).join('');
    fbox.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b.textContent === cur); });
  }
  fbox.innerHTML = ['All Projects'].concat(CATS).map(function (c) { return '<button type="button" aria-pressed="false">' + c + '</button>'; }).join('');
  fbox.addEventListener('click', function (e) { if (e.target.tagName === 'BUTTON') { cur = e.target.textContent; draw(); } });
  draw();

  var dlg = $('#dlg');
  grid.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-i]'); if (!b) return;
    var p = P[b.dataset.i];
    $('#dbody').innerHTML = '<p class="cat" style="display:inline-block">GUVI course project</p><h2 id="dt" style="font-size:20px;margin-top:10px">' + p.t + '</h2><p class="muted">' + p.c.join(', ') + '</p><ul>' + li(p.pts) + '</ul><ul class="tags">' + li(p.tags) + '</ul>' +
      '<div class="row">' + (p.r ? '<a class="btn" href="' + p.r + '" target="_blank" rel="noopener noreferrer">View GitHub</a>' : '') + '</div>';
    dlg.showModal();
  });
  $('#dx').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  var side = $('#side'), scrim = $('#scrim'), menu = $('#menu');
  function toggle(o) { side.classList.toggle('open', o); scrim.classList.toggle('open', o); menu.setAttribute('aria-expanded', o); }
  menu.addEventListener('click', function () { toggle(!side.classList.contains('open')); });
  scrim.addEventListener('click', function () { toggle(false); });
  $('#nav').addEventListener('click', function (e) { if (e.target.closest('a')) toggle(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(false); });

  var links = {}; document.querySelectorAll('#nav a').forEach(function (a) { links[a.hash.slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.remove('on'); links[k].removeAttribute('aria-current'); });
        var a = links[e.target.id]; a.classList.add('on'); a.setAttribute('aria-current', 'true');
        $('#crumb').textContent = a.textContent.toUpperCase();
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(links).forEach(function (k) { io.observe(document.getElementById(k)); });
  }
  var up = $('#totop');
  window.addEventListener('scroll', function () { up.hidden = window.scrollY < 600; }, { passive: true });
  up.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
  $('#today').textContent = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  $('#yr').textContent = new Date().getFullYear();
})();
