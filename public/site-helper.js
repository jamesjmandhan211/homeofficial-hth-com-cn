// public/site-helper.js

(function() {
  'use strict';

  var CONFIG = {
    siteUrl: 'https://homeofficial-hth.com.cn',
    keyword: '华体会',
    bannerText: '欢迎访问我们的体育资讯平台',
    tipCardClass: 'site-tip-card',
    badgeClass: 'site-badge',
    noticeClass: 'site-access-notice'
  };

  var CARD_DATA = [
    {
      title: '最新赛事',
      description: '实时更新各大联赛比分与赛程。' + CONFIG.keyword + '为您提供深度分析。',
      icon: '🏆'
    },
    {
      title: '专家推荐',
      description: '基于大数据模型，每日精选高价值比赛预测，助您洞察先机。',
      icon: '📊'
    },
    {
      title: '社区互动',
      description: '与千万球迷一起讨论热点赛事，分享您的独到见解。',
      icon: '💬'
    }
  ];

  var BADGE_LIST = [
    { label: '足球', count: 128 },
    { label: '篮球', count: 96 },
    { label: '网球', count: 45 },
    { label: '电竞赛事', count: 67 },
    { label: '综合体育', count: 112 }
  ];

  function createCard(cardObj) {
    var card = document.createElement('div');
    card.className = CONFIG.tipCardClass;

    var iconSpan = document.createElement('span');
    iconSpan.textContent = cardObj.icon;
    iconSpan.style.fontSize = '2rem';
    iconSpan.style.display = 'block';

    var titleEl = document.createElement('h4');
    titleEl.textContent = cardObj.title;

    var descEl = document.createElement('p');
    descEl.textContent = cardObj.description;

    card.appendChild(iconSpan);
    card.appendChild(titleEl);
    card.appendChild(descEl);

    return card;
  }

  function createBadge(badgeObj) {
    var badge = document.createElement('span');
    badge.className = CONFIG.badgeClass;
    badge.textContent = badgeObj.label + ' (' + badgeObj.count + ')';
    badge.style.display = 'inline-block';
    badge.style.margin = '4px';
    badge.style.padding = '4px 10px';
    badge.style.borderRadius = '12px';
    badge.style.background = '#e9ecef';
    badge.style.fontSize = '0.85rem';
    return badge;
  }

  function createNotice() {
    var notice = document.createElement('div');
    notice.className = CONFIG.noticeClass;
    notice.style.padding = '12px 16px';
    notice.style.margin = '12px 0';
    notice.style.background = '#fff3cd';
    notice.style.border = '1px solid #ffc107';
    notice.style.borderRadius = '6px';

    var strong = document.createElement('strong');
    strong.textContent = '访问提示：';

    var text = document.createElement('span');
    text.textContent = '当前信息来源：' + CONFIG.siteUrl + ' ，请确保使用正版渠道获取最新资讯。';

    notice.appendChild(strong);
    notice.appendChild(text);

    return notice;
  }

  function renderCards(container) {
    var fragment = document.createDocumentFragment();
    CARD_DATA.forEach(function(item) {
      fragment.appendChild(createCard(item));
    });
    container.appendChild(fragment);
  }

  function renderBadges(container) {
    var fragment = document.createDocumentFragment();
    BADGE_LIST.forEach(function(item) {
      fragment.appendChild(createBadge(item));
    });
    container.appendChild(fragment);
  }

  function renderNotice(container) {
    container.appendChild(createNotice());
  }

  function init() {
    var cardsContainer = document.querySelector('[data-role="tip-cards"]');
    if (cardsContainer) {
      renderCards(cardsContainer);
    }

    var badgesContainer = document.querySelector('[data-role="keyword-badges"]');
    if (badgesContainer) {
      renderBadges(badgesContainer);
    }

    var noticeContainer = document.querySelector('[data-role="access-notice"]');
    if (noticeContainer) {
      renderNotice(noticeContainer);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();