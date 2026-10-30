/**
 * ShopNest - Global Typo-Tolerant Search & Real-Time Autocomplete Engine
 * All client-side functionality consolidated in script.js
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. PRODUCT CATALOG DATASET (12 Curated Items)
  // =========================================================================
  const PRODUCTS_CATALOG = [
    {
      id: 'product-1',
      numId: 1,
      title: 'Minimalist Chrono Watch',
      category: 'Accessories',
      sku: 'SKU-ACC-001',
      price: '$149.00',
      oldPrice: '$199.00',
      priceNum: 149.0,
      rating: 4.9,
      reviews: 184,
      badge: 'Popular',
      badgeClass: 'product-tag-popular',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
      alt: 'Minimalist Chronograph Watch with stainless steel bezel and clean dial',
      tags: [
        'watch', 'watches', 'chrono', 'chronograph', 'accessories', 'analog',
        'stainless', 'waterproof', 'silver', 'wrist watch', 'timepiece', 'luxury', 'gift'
      ],
      description: 'Minimalist chronograph watch crafted with Japanese quartz movement, scratch-resistant sapphire crystal glass, and a stainless steel mesh strap for everyday elegance.'
    },
    {
      id: 'product-2',
      numId: 2,
      title: 'Pro Wireless Headphones',
      category: 'Electronics',
      sku: 'SKU-ELE-002',
      price: '$189.00',
      oldPrice: '$249.00',
      priceNum: 189.0,
      rating: 4.8,
      reviews: 240,
      badge: '-25% OFF',
      badgeClass: '',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
      alt: 'Matte black wireless noise-cancelling headphones',
      tags: [
        'headphone', 'headphones', 'wireless', 'bluetooth', 'audio', 'noise cancelling',
        'anc', 'music', 'matte black', 'over ear', 'earphones', 'sound', 'gadgets', 'tech'
      ],
      description: 'Matte black wireless noise-cancelling headphones featuring 40mm neodymium acoustic drivers, 36-hour battery life, and ultra-plush memory foam cushions.'
    },
    {
      id: 'product-3',
      numId: 3,
      title: 'Artisanal Ceramic Vase',
      category: 'Home Decor',
      sku: 'SKU-HOM-003',
      price: '$48.00',
      oldPrice: '$65.00',
      priceNum: 48.0,
      rating: 4.9,
      reviews: 95,
      badge: 'Artisan',
      badgeClass: '',
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80',
      alt: 'Handcrafted textured ceramic vase in warm terracotta and stone finish',
      tags: [
        'vase', 'vases', 'ceramic', 'pottery', 'artisan', 'home decor', 'terracotta',
        'interior', 'living room', 'flower', 'handcrafted', 'table decor', 'sculpture'
      ],
      description: 'Handcrafted textured ceramic vase in warm terracotta and stone finish, individually wheel-thrown and kiln-glazed for a distinctive natural silhouette.'
    },
    {
      id: 'product-4',
      numId: 4,
      title: 'Italian Leather Crossbody',
      category: 'Fashion',
      sku: 'SKU-FAS-004',
      price: '$165.00',
      oldPrice: '$220.00',
      priceNum: 165.0,
      rating: 5.0,
      reviews: 112,
      badge: 'Trending',
      badgeClass: 'product-tag-popular',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80',
      alt: 'Handmade Italian full-grain leather crossbody handbag in saddle brown',
      tags: [
        'bag', 'bags', 'crossbody', 'handbag', 'purse', 'leather', 'italian',
        'fashion', 'shoulder bag', 'saddle brown', 'apparel', 'accessories', 'tote'
      ],
      description: 'Handmade Italian full-grain leather crossbody handbag in saddle brown with gold-plated brass hardware and adjustable comfort shoulder strap.'
    },
    {
      id: 'product-5',
      numId: 5,
      title: 'Mechanical Work Keyboard',
      category: 'Electronics',
      sku: 'SKU-ELE-005',
      price: '$119.00',
      oldPrice: '$159.00',
      priceNum: 119.0,
      rating: 4.9,
      reviews: 310,
      badge: 'Bestseller',
      badgeClass: '',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
      alt: 'Custom mechanical keyboard with tactile switches and custom keycaps',
      tags: [
        'keyboard', 'keyboards', 'mechanical', 'switches', 'tactile', 'typing',
        'coding', 'gaming', 'office', 'computer', 'usb-c', 'bluetooth', 'gadgets'
      ],
      description: 'Custom 75% mechanical work keyboard equipped with hot-swappable lubricated tactile switches, sound-dampening silicone foam, and double-shot PBT keycaps.'
    },
    {
      id: 'product-6',
      numId: 6,
      title: 'Ambient Smart Desk Lamp',
      category: 'Home Decor',
      sku: 'SKU-HOM-006',
      price: '$79.00',
      oldPrice: '$99.00',
      priceNum: 79.0,
      rating: 4.7,
      reviews: 88,
      badge: 'Smart Home',
      badgeClass: '',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
      alt: 'Contemporary dimmable LED desk lamp casting warm atmospheric illumination',
      tags: [
        'lamp', 'lamps', 'desk lamp', 'lighting', 'light', 'smart home', 'led',
        'dimmable', 'home decor', 'reading', 'nightstand', 'study', 'luminaire'
      ],
      description: 'Contemporary dimmable LED desk lamp featuring stepless capacitive touch dimming, 3 color temperatures (2700K-6500K), and integrated Qi wireless charging pad.'
    },
    {
      id: 'product-7',
      numId: 7,
      title: 'Woven Organic Throw',
      category: 'Home Decor',
      sku: 'SKU-HOM-007',
      price: '$54.00',
      oldPrice: '$72.00',
      priceNum: 54.0,
      rating: 4.8,
      reviews: 74,
      badge: 'Eco-Linen',
      badgeClass: '',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
      alt: 'Woven natural organic linen throw blanket folded neatly',
      tags: [
        'throw', 'throws', 'blanket', 'blankets', 'linen', 'organic', 'woven',
        'textile', 'sofa', 'bedding', 'cozy', 'scandinavian', 'cotton', 'living room'
      ],
      description: 'Woven natural organic linen and combed Turkish cotton throw blanket with delicate fringed edges, breathable all-season warmth, and OEKO-TEX certification.'
    },
    {
      id: 'product-8',
      numId: 8,
      title: 'Botanical Glow Serum',
      category: 'Beauty',
      sku: 'SKU-BEA-008',
      price: '$38.00',
      oldPrice: '$52.00',
      priceNum: 38.0,
      rating: 4.9,
      reviews: 215,
      badge: 'Organic',
      badgeClass: 'product-tag-popular',
      image: 'https://images.unsplash.com/photo-1608248597359-54845579d4cf?auto=format&fit=crop&w=600&q=80',
      alt: 'Botanical hydrating facial serum in glass dropper bottle',
      tags: [
        'serum', 'serums', 'skincare', 'glow', 'botanical', 'face oil', 'beauty',
        'cosmetics', 'facial', 'hyaluronic', 'vitamin c', 'organic', 'dropper', 'moisturizer'
      ],
      description: 'Ultra-nourishing botanical facial serum formulated with cold-pressed rosehip seed oil, vitamin C, and multi-molecular hyaluronic acid for radiant, plump skin.'
    },
    {
      id: 'product-9',
      numId: 9,
      title: 'Tailored Linen Pant',
      category: 'Fashion',
      sku: 'SKU-FAS-009',
      price: '$89.00',
      oldPrice: '$115.00',
      priceNum: 89.0,
      rating: 4.8,
      reviews: 62,
      badge: 'New Arrival',
      badgeClass: '',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80',
      alt: 'Relaxed tailored linen trousers with drawstring waist in natural sand',
      tags: [
        'pant', 'pants', 'trouser', 'trousers', 'linen', 'apparel', 'clothing',
        'bottoms', 'fashion', 'casual', 'tailored', 'summer', 'slacks', 'chino'
      ],
      description: 'Relaxed tailored linen pants crafted from 100% Normandy flax linen with an elasticated drawstring waistband, pleats, and breathable summer comfort.'
    },
    {
      id: 'product-10',
      numId: 10,
      title: 'Polarized Studio Sunglasses',
      category: 'Accessories',
      sku: 'SKU-ACC-010',
      price: '$95.00',
      oldPrice: '$130.00',
      priceNum: 95.0,
      rating: 4.9,
      reviews: 145,
      badge: 'Trending',
      badgeClass: 'product-tag-popular',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
      alt: 'Hand-finished Italian acetate sunglasses with polarized mineral lenses',
      tags: [
        'sunglasses', 'sunglass', 'glasses', 'shades', 'eyewear', 'polarized',
        'accessories', 'summer', 'uv', 'acetate', 'fashion', 'tortoise', 'optics'
      ],
      description: 'Hand-finished Italian acetate sunglasses with category 3 UV400 polarized mineral lenses and reinforced 5-barrel hinges for crisp glare-free vision.'
    },
    {
      id: 'product-11',
      numId: 11,
      title: 'Minimalist Cotton Oversized Tee',
      category: 'Fashion',
      sku: 'SKU-FAS-011',
      price: '$42.00',
      oldPrice: '$58.00',
      priceNum: 42.0,
      rating: 4.7,
      reviews: 104,
      badge: 'Essential',
      badgeClass: '',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
      alt: 'Heavyweight organic combed cotton relaxed t-shirt in chalk white',
      tags: [
        'shirt', 'shirts', 'tee', 'tshirt', 't-shirt', 'cotton', 'apparel',
        'clothing', 'fashion', 'oversized', 'crewneck', 'minimalist', 'top'
      ],
      description: 'Heavyweight 240 GSM combed organic cotton t-shirt with dropped shoulders, dense ribbed collar, and relaxed modern drape.'
    },
    {
      id: 'product-12',
      numId: 12,
      title: 'Aromatic Soy Wax Candle',
      category: 'Home Decor',
      sku: 'SKU-HOM-012',
      price: '$32.00',
      oldPrice: '$44.00',
      priceNum: 32.0,
      rating: 4.9,
      reviews: 88,
      badge: 'Artisan',
      badgeClass: '',
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80',
      alt: 'Hand-poured amber glass natural soy wax scented candle with wooden wick',
      tags: [
        'candle', 'candles', 'scented', 'aromatherapy', 'soy wax', 'amber',
        'sandalwood', 'home decor', 'wellness', 'cozy', 'fragrance', 'scent'
      ],
      description: 'Hand-poured 100% natural soy wax candle infused with essential oils of cedarwood, amber, and Madagascar vanilla, offering 55 hours of clean burn.'
    }
  ];

  // =========================================================================
  // 2. STEMMING & TYPO-TOLERANCE ALGORITHMS
  // =========================================================================

  function stemWord(word) {
    if (!word || word.length < 3) return word ? word.toLowerCase() : '';
    word = word.toLowerCase();

    const irregularMap = {
      pant: 'pant',
      pants: 'pant',
      trouser: 'trouser',
      trousers: 'trouser',
      watch: 'watch',
      watches: 'watch',
      headphone: 'headphone',
      headphones: 'headphone',
      earphone: 'earphone',
      earphones: 'earphone',
      glass: 'glass',
      glasses: 'glass',
      sunglass: 'sunglass',
      sunglasses: 'sunglass',
      accessory: 'accessory',
      accessories: 'accessory',
      vase: 'vase',
      vases: 'vase',
      lamp: 'lamp',
      lamps: 'lamp',
      bag: 'bag',
      bags: 'bag',
      throw: 'throw',
      throws: 'throw',
      serum: 'serum',
      serums: 'serum',
      candle: 'candle',
      candles: 'candle',
      shirt: 'shirt',
      shirts: 'shirt',
      keyboard: 'keyboard',
      keyboards: 'keyboard',
      device: 'device',
      devices: 'device'
    };

    if (irregularMap[word]) return irregularMap[word];

    if (word.endsWith('ies') && word.length > 4) {
      return word.slice(0, -3) + 'y';
    }
    if (
      word.endsWith('sses') ||
      word.endsWith('shes') ||
      word.endsWith('ches') ||
      word.endsWith('xes')
    ) {
      return word.slice(0, -2);
    }
    if (word.endsWith('es') && word.length > 3) {
      return word.slice(0, -1);
    }
    if (word.endsWith('s') && !word.endsWith('ss') && word.length > 3) {
      return word.slice(0, -1);
    }

    return word;
  }

  function extractTokens(text) {
    if (!text) return [];
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, ' ')
      .split(/[\s-]+/)
      .filter((t) => t.length > 0)
      .map((t) => ({
        raw: t,
        stem: stemWord(t)
      }));
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    const la = a.length;
    const lb = b.length;
    if (!la) return lb;
    if (!lb) return la;
    if (Math.abs(la - lb) > 2) return 999;

    const row = new Array(lb + 1);
    for (let j = 0; j <= lb; j++) row[j] = j;

    for (let i = 1; i <= la; i++) {
      let prev = i;
      for (let j = 1; j <= lb; j++) {
        let val;
        if (a[i - 1] === b[j - 1]) {
          val = row[j - 1];
        } else {
          val = Math.min(row[j - 1] + 1, prev + 1, row[j] + 1);
        }
        row[j - 1] = prev;
        prev = val;
      }
      row[lb] = prev;
    }
    return row[lb];
  }

  function isFuzzyMatch(queryWord, targetWord) {
    if (!queryWord || !targetWord) return false;
    if (queryWord === targetWord) return true;

    if (targetWord.startsWith(queryWord) || queryWord.startsWith(targetWord)) {
      return true;
    }

    const qStem = stemWord(queryWord);
    const tStem = stemWord(targetWord);
    if (qStem === tStem || tStem.startsWith(qStem)) {
      return true;
    }

    const qLen = queryWord.length;
    if (qLen >= 4 && qLen <= 6) {
      if (
        levenshtein(queryWord, targetWord) <= 1 ||
        levenshtein(qStem, tStem) <= 1
      ) {
        return true;
      }
    } else if (qLen >= 7) {
      if (
        levenshtein(queryWord, targetWord) <= 2 ||
        levenshtein(qStem, tStem) <= 2
      ) {
        return true;
      }
    }

    return false;
  }

  function scoreProduct(product, queryTokens, rawQuery) {
    let totalScore = 0;
    const cleanRawQuery = rawQuery.toLowerCase().trim();

    const fullTitle = product.title.toLowerCase();
    const fullSku = product.sku.toLowerCase();
    const fullCat = product.category.toLowerCase();

    if (fullTitle === cleanRawQuery) totalScore += 200;
    else if (fullTitle.startsWith(cleanRawQuery)) totalScore += 120;
    else if (fullTitle.includes(cleanRawQuery)) totalScore += 80;

    if (fullSku === cleanRawQuery || fullSku.includes(cleanRawQuery)) {
      totalScore += 150;
    }

    if (fullCat === cleanRawQuery || fullCat.includes(cleanRawQuery)) {
      totalScore += 90;
    }

    const titleTokens = extractTokens(product.title);
    const catTokens = extractTokens(product.category);
    const skuTokens = extractTokens(product.sku);
    const tagTokens = product.tags.map((t) => ({
      raw: t.toLowerCase(),
      stem: stemWord(t)
    }));
    const descTokens = extractTokens(product.description);

    let allQueryTokensMatched = true;

    for (const q of queryTokens) {
      let matchedThisQueryToken = false;
      let tokenMaxScore = 0;

      // Title
      for (const t of titleTokens) {
        if (q.raw === t.raw) {
          tokenMaxScore = Math.max(tokenMaxScore, 100);
          matchedThisQueryToken = true;
        } else if (q.stem === t.stem) {
          tokenMaxScore = Math.max(tokenMaxScore, 95);
          matchedThisQueryToken = true;
        } else if (t.raw.startsWith(q.raw) || t.stem.startsWith(q.stem)) {
          tokenMaxScore = Math.max(tokenMaxScore, 80);
          matchedThisQueryToken = true;
        } else if (isFuzzyMatch(q.raw, t.raw)) {
          tokenMaxScore = Math.max(tokenMaxScore, 65);
          matchedThisQueryToken = true;
        }
      }

      // SKU
      for (const s of skuTokens) {
        if (s.raw.includes(q.raw) || q.raw.includes(s.raw)) {
          tokenMaxScore = Math.max(tokenMaxScore, 90);
          matchedThisQueryToken = true;
        }
      }

      // Category
      for (const c of catTokens) {
        if (q.raw === c.raw || q.stem === c.stem) {
          tokenMaxScore = Math.max(tokenMaxScore, 85);
          matchedThisQueryToken = true;
        } else if (c.raw.startsWith(q.raw)) {
          tokenMaxScore = Math.max(tokenMaxScore, 70);
          matchedThisQueryToken = true;
        } else if (isFuzzyMatch(q.raw, c.raw)) {
          tokenMaxScore = Math.max(tokenMaxScore, 55);
          matchedThisQueryToken = true;
        }
      }

      // Tags
      for (const tag of tagTokens) {
        if (q.raw === tag.raw || q.stem === tag.stem) {
          tokenMaxScore = Math.max(tokenMaxScore, 80);
          matchedThisQueryToken = true;
        } else if (tag.raw.startsWith(q.raw)) {
          tokenMaxScore = Math.max(tokenMaxScore, 65);
          matchedThisQueryToken = true;
        } else if (isFuzzyMatch(q.raw, tag.raw)) {
          tokenMaxScore = Math.max(tokenMaxScore, 50);
          matchedThisQueryToken = true;
        }
      }

      // Description
      if (!matchedThisQueryToken) {
        for (const d of descTokens) {
          if (q.raw === d.raw || q.stem === d.stem) {
            tokenMaxScore = Math.max(tokenMaxScore, 45);
            matchedThisQueryToken = true;
          } else if (d.raw.startsWith(q.raw)) {
            tokenMaxScore = Math.max(tokenMaxScore, 35);
            matchedThisQueryToken = true;
          } else if (isFuzzyMatch(q.raw, d.raw)) {
            tokenMaxScore = Math.max(tokenMaxScore, 30);
            matchedThisQueryToken = true;
          }
        }
      }

      if (matchedThisQueryToken) {
        totalScore += tokenMaxScore;
      } else {
        allQueryTokensMatched = false;
      }
    }

    if (!allQueryTokensMatched && totalScore < 100) {
      return 0;
    }

    return totalScore;
  }

  function executeSearch(query) {
    if (!query || query.trim().length === 0) return [];
    const rawQuery = query.trim();
    const queryTokens = extractTokens(rawQuery);
    if (queryTokens.length === 0) return [];

    const scored = [];
    for (const prod of PRODUCTS_CATALOG) {
      const score = scoreProduct(prod, queryTokens, rawQuery);
      if (score > 0) {
        scored.push({ product: prod, score: score });
      }
    }
    scored.sort((a, b) => b.score - a.score);
    return scored.map((s) => s.product);
  }

  // =========================================================================
  // 3. HTML FORMATTING & RENDERING HELPERS
  // =========================================================================

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function highlightMatches(text, query) {
    if (!text || !query) return escapeHtml(text);
    const tokens = extractTokens(query)
      .map((t) => t.raw)
      .filter((t) => t.length > 1);
    if (tokens.length === 0) return escapeHtml(text);

    const escapedTokens = tokens.map((t) =>
      t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    const regex = new RegExp(`(${escapedTokens.join('|')})`, 'gi');

    const parts = text.split(regex);
    return parts
      .map((part) => {
        if (tokens.some((t) => t.toLowerCase() === part.toLowerCase())) {
          return `<mark class="search-highlight">${escapeHtml(part)}</mark>`;
        }
        return escapeHtml(part);
      })
      .join('');
  }

  function renderProductCardHtml(product) {
    const starsHtml = [];
    const fullStars = Math.floor(product.rating);
    const hasHalf = product.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      starsHtml.push('<i class="bi bi-star-fill"></i>');
    }
    if (hasHalf) {
      starsHtml.push('<i class="bi bi-star-half"></i>');
    }
    while (starsHtml.length < 5) {
      starsHtml.push('<i class="bi bi-star"></i>');
    }

    return `
      <article class="product-card" id="${product.id}" data-product-id="${product.numId}" data-sku="${product.sku}" data-category="${product.category}">
        <div class="product-media">
          ${product.badge ? `<span class="product-tag ${product.badgeClass}">${escapeHtml(product.badge)}</span>` : ''}
          <img 
            src="${product.image}" 
            alt="${escapeHtml(product.alt)}"
            class="product-img"
            width="300"
            height="240"
            loading="lazy"
          >
        </div>
        <div class="product-body">
          <div class="product-meta-row">
            <span class="product-category">${escapeHtml(product.category)}</span>
            <span class="product-sku-badge">${escapeHtml(product.sku)}</span>
          </div>
          <h3 class="product-title"><a href="#${product.id}">${escapeHtml(product.title)}</a></h3>
          <p class="product-desc-snippet">${escapeHtml(product.description)}</p>
          <div class="product-rating" aria-label="Rated ${product.rating} out of 5 stars">
            <div class="stars" aria-hidden="true">
              ${starsHtml.join('')}
            </div>
            <span class="rating-score">${product.rating}</span>
            <span class="rating-count">(${product.reviews})</span>
          </div>
          <div class="product-price-row">
            <span class="current-price">${product.price}</span>
            ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ''}
          </div>
          <button type="button" class="btn-add-cart" aria-label="Add ${escapeHtml(product.title)} to cart">
            <i class="bi bi-cart-plus" aria-hidden="true"></i> Add to Cart
          </button>
        </div>
      </article>
    `;
  }

  // =========================================================================
  // 4. SEARCH CONTROLLER CLASS
  // =========================================================================

  class SearchController {
    constructor() {
      // Inputs & Buttons
      this.desktopInput = document.getElementById('site-search');
      this.desktopForm = document.getElementById('desktop-search-form');
      this.desktopDropdown = document.getElementById('search-autocomplete-desktop');
      this.desktopClearBtn = document.getElementById('search-clear-desktop');

      this.mobileInput = document.getElementById('mobile-site-search');
      this.mobileForm = document.getElementById('mobile-search-form');
      this.mobileDropdown = document.getElementById('search-autocomplete-mobile');
      this.mobileClearBtn = document.getElementById('search-clear-mobile');
      this.mobileSearchContainer = document.getElementById('mobile-search-container');
      this.mobileSearchToggle = document.getElementById('mobile-search-toggle');

      this.productsGrid = document.getElementById('products-grid');
      this.searchFilterBanner = document.getElementById('search-filter-banner');
      this.searchZeroResults = document.getElementById('search-zero-results');
      this.fallbackFeatured = document.getElementById('search-fallback-featured');
      this.fallbackGrid = document.getElementById('fallback-products-grid');

      this.currentQuery = '';
      this.currentResults = [];
      this.debounceTimer = null;
      this.activeSuggestionIndex = -1;

      this.init();
    }

    init() {
      // Ensure catalog has all 12 items rendered initially
      this.renderFullGrid();

      // Desktop listeners
      if (this.desktopInput) {
        this.desktopInput.addEventListener('input', (e) => this.handleInput(e, 'desktop'));
        this.desktopInput.addEventListener('keydown', (e) => this.handleKeydown(e, 'desktop'));
        this.desktopInput.addEventListener('focus', () => this.handleFocus('desktop'));
      }
      if (this.desktopForm) {
        this.desktopForm.addEventListener('submit', (e) => this.handleSubmit(e, 'desktop'));
      }
      if (this.desktopClearBtn) {
        this.desktopClearBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.clearSearch(true);
        });
      }

      // Mobile listeners
      if (this.mobileInput) {
        this.mobileInput.addEventListener('input', (e) => this.handleInput(e, 'mobile'));
        this.mobileInput.addEventListener('keydown', (e) => this.handleKeydown(e, 'mobile'));
        this.mobileInput.addEventListener('focus', () => this.handleFocus('mobile'));
      }
      if (this.mobileForm) {
        this.mobileForm.addEventListener('submit', (e) => this.handleSubmit(e, 'mobile'));
      }
      if (this.mobileClearBtn) {
        this.mobileClearBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.clearSearch(true);
        });
      }

      // Mobile search toggle
      if (this.mobileSearchToggle && this.mobileSearchContainer) {
        this.mobileSearchToggle.addEventListener('click', () => {
          const isHidden = this.mobileSearchContainer.classList.contains('mobile-search-hidden');
          if (isHidden) {
            this.mobileSearchContainer.classList.remove('mobile-search-hidden');
            this.mobileSearchToggle.setAttribute('aria-expanded', 'true');
            if (this.mobileInput) this.mobileInput.focus();
          } else {
            this.mobileSearchContainer.classList.add('mobile-search-hidden');
            this.mobileSearchToggle.setAttribute('aria-expanded', 'false');
            this.closeDropdowns();
          }
        });
      }

      // Dismiss dropdown on click outside
      document.addEventListener('click', (e) => {
        const insideDesktop = this.desktopForm && this.desktopForm.contains(e.target);
        const insideMobile = this.mobileForm && this.mobileForm.contains(e.target);
        if (!insideDesktop && !insideMobile) {
          this.closeDropdowns();
        }
      });

      // Global hotkeys: Ctrl+K, Cmd+K, "/"
      document.addEventListener('keydown', (e) => {
        const tag = (e.target.tagName || '').toLowerCase();
        const isEditing = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          this.focusAppropriateInput();
        } else if (e.key === '/' && !isEditing) {
          e.preventDefault();
          this.focusAppropriateInput();
        }
      });

      // Delegate actions for chips, immediate action buttons, and recommendation cards
      document.addEventListener('click', (e) => {
        // Search chips / pills
        const chip = e.target.closest('[data-search-pill], .search-pill, .chip-btn');
        if (chip) {
          e.preventDefault();
          const term =
            chip.getAttribute('data-search-pill') ||
            chip.getAttribute('data-search') ||
            chip.getAttribute('data-query') ||
            chip.textContent.trim();
          if (term) {
            this.applyQuery(term, true);
          }
          return;
        }

        // Dropdown Immediate Action Button: Clear Search
        const dropdownClearBtn = e.target.closest('#dropdown-btn-clear, .btn-clear-search-trigger');
        if (dropdownClearBtn) {
          e.preventDefault();
          this.clearSearch(true);
          return;
        }

        // Dropdown Immediate Action Button: Browse All Products
        const dropdownBrowseBtn = e.target.closest('#dropdown-btn-browse, .btn-browse-all-trigger');
        if (dropdownBrowseBtn) {
          e.preventDefault();
          this.clearSearch(true);
          const shopSec = document.getElementById('shop');
          if (shopSec) shopSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        // Suggestion item or Recommendation card click
        const cardTarget = e.target.closest('.search-suggestion-item, .rec-product-card');
        if (cardTarget) {
          const productId = cardTarget.getAttribute('data-product-id');
          if (productId) {
            e.preventDefault();
            this.selectProductItem(productId);
            return;
          }
        }

        // View All Results button inside dropdown
        const viewAllBtn = e.target.closest('.btn-view-all-results');
        if (viewAllBtn) {
          e.preventDefault();
          this.executeAndShowResults(this.currentQuery);
          return;
        }

        // Clear filter banner button
        const clearBannerBtn = e.target.closest('#btn-clear-search-filter, #btn-reset-catalog');
        if (clearBannerBtn) {
          e.preventDefault();
          this.clearSearch(true);
          return;
        }
      });
    }

    focusAppropriateInput() {
      const isMobile = window.innerWidth < 992;
      if (isMobile) {
        if (this.mobileSearchContainer && this.mobileSearchContainer.classList.contains('mobile-search-hidden')) {
          this.mobileSearchContainer.classList.remove('mobile-search-hidden');
          if (this.mobileSearchToggle) this.mobileSearchToggle.setAttribute('aria-expanded', 'true');
        }
        if (this.mobileInput) {
          this.mobileInput.focus();
          this.mobileInput.select();
        }
      } else {
        if (this.desktopInput) {
          this.desktopInput.focus();
          this.desktopInput.select();
        }
      }
    }

    handleInput(e, source) {
      const value = e.target.value;
      this.syncInputs(value, source);

      clearTimeout(this.debounceTimer);
      this.toggleClearButtons(value.length > 0);

      // Requirement: Auto-complete suggestions trigger after 2 characters
      if (value.trim().length >= 2) {
        this.debounceTimer = setTimeout(() => {
          this.runAutocomplete(value.trim(), source);
        }, 150);
      } else {
        this.closeDropdowns();
      }
    }

    handleFocus(source) {
      const input = source === 'desktop' ? this.desktopInput : this.mobileInput;
      if (input && input.value.trim().length >= 2) {
        this.runAutocomplete(input.value.trim(), source);
      }
    }

    handleKeydown(e, source) {
      const dropdown = source === 'desktop' ? this.desktopDropdown : this.mobileDropdown;
      if (!dropdown || dropdown.hidden) return;

      const items = dropdown.querySelectorAll('.search-suggestion-item, .rec-product-card');
      if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.activeSuggestionIndex = (this.activeSuggestionIndex + 1) % items.length;
        this.updateActiveSuggestion(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.activeSuggestionIndex = (this.activeSuggestionIndex - 1 + items.length) % items.length;
        this.updateActiveSuggestion(items);
      } else if (e.key === 'Enter') {
        if (this.activeSuggestionIndex >= 0 && this.activeSuggestionIndex < items.length) {
          e.preventDefault();
          const targetItem = items[this.activeSuggestionIndex];
          const productId = targetItem.getAttribute('data-product-id');
          if (productId) {
            this.selectProductItem(productId);
          }
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        this.closeDropdowns();
      }
    }

    updateActiveSuggestion(items) {
      items.forEach((item, idx) => {
        if (idx === this.activeSuggestionIndex) {
          item.classList.add('active');
          item.setAttribute('aria-selected', 'true');
          item.scrollIntoView({ block: 'nearest' });
        } else {
          item.classList.remove('active');
          item.setAttribute('aria-selected', 'false');
        }
      });
    }

    handleSubmit(e, source) {
      e.preventDefault();
      const input = source === 'desktop' ? this.desktopInput : this.mobileInput;
      const query = input ? input.value.trim() : '';
      if (query.length > 0) {
        this.executeAndShowResults(query);
      }
    }

    syncInputs(value, source) {
      this.currentQuery = value;
      if (source !== 'desktop' && this.desktopInput) {
        this.desktopInput.value = value;
      }
      if (source !== 'mobile' && this.mobileInput) {
        this.mobileInput.value = value;
      }
    }

    toggleClearButtons(visible) {
      if (this.desktopClearBtn) {
        if (visible) this.desktopClearBtn.classList.remove('d-none');
        else this.desktopClearBtn.classList.add('d-none');
      }
      if (this.mobileClearBtn) {
        if (visible) this.mobileClearBtn.classList.remove('d-none');
        else this.mobileClearBtn.classList.add('d-none');
      }
    }

    runAutocomplete(query, source) {
      this.currentQuery = query;
      this.currentResults = executeSearch(query);
      this.activeSuggestionIndex = -1;

      const dropdown = source === 'desktop' ? this.desktopDropdown : this.mobileDropdown;
      const input = source === 'desktop' ? this.desktopInput : this.mobileInput;

      if (!dropdown) return;

      if (this.currentResults.length > 0) {
        this.renderDropdownResults(dropdown, query, this.currentResults);
      } else {
        this.renderDropdownNoResults(dropdown, query);
      }

      dropdown.hidden = false;
      if (input) input.setAttribute('aria-expanded', 'true');
    }

    /**
     * Render suggestions when matches exist
     */
    renderDropdownResults(dropdown, query, results) {
      const topResults = results.slice(0, 5);
      const matchingCategories = [...new Set(results.map((r) => r.category))];

      const html = `
        <div class="search-dropdown-content">
          <div class="search-dropdown-header">
            <span class="dropdown-header-title">
              <i class="bi bi-search text-primary"></i> Products (${results.length} found)
            </span>
            <span class="dropdown-header-shortcut">
              <span class="key-hint">↑↓</span> to navigate <span class="key-hint">↵</span> to select
            </span>
          </div>

          ${
            matchingCategories.length > 0
              ? `
            <div class="search-category-chips">
              <span class="chip-label">Filter:</span>
              ${matchingCategories
                .map(
                  (cat) => `
                <button type="button" class="search-pill category-pill" data-search-pill="${escapeHtml(cat)}">
                  <i class="bi bi-tag-fill"></i> ${escapeHtml(cat)}
                </button>
              `
                )
                .join('')}
            </div>
          `
              : ''
          }

          <ul class="search-suggestions-list" role="listbox">
            ${topResults
              .map(
                (product, idx) => `
              <li 
                class="search-suggestion-item" 
                role="option" 
                id="suggestion-item-${idx}"
                data-product-id="${product.id}"
                tabindex="-1"
              >
                <div class="suggestion-thumb-wrapper">
                  <img 
                    src="${product.image}" 
                    alt="${escapeHtml(product.title)}"
                    class="suggestion-thumb" 
                    loading="lazy"
                  >
                  ${product.badge ? `<span class="suggestion-mini-badge">${escapeHtml(product.badge)}</span>` : ''}
                </div>
                <div class="suggestion-info">
                  <div class="suggestion-top-row">
                    <span class="suggestion-title">${highlightMatches(product.title, query)}</span>
                    <span class="suggestion-price">${product.price}</span>
                  </div>
                  <div class="suggestion-meta-row">
                    <span class="suggestion-category-tag">${escapeHtml(product.category)}</span>
                    <span class="suggestion-sku-tag">${escapeHtml(product.sku)}</span>
                    <span class="suggestion-rating">
                      <i class="bi bi-star-fill text-warning"></i> ${product.rating}
                    </span>
                  </div>
                </div>
                <div class="suggestion-action" title="View product">
                  <i class="bi bi-arrow-right-short"></i>
                </div>
              </li>
            `
              )
              .join('')}
          </ul>

          <div class="search-dropdown-footer">
            <button type="button" class="btn-view-all-results">
              View all <strong>${results.length}</strong> matching products <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      `;

      dropdown.innerHTML = html;
    }

    /**
     * Render redesigned, centered, balanced, engaging empty state
     */
    renderDropdownNoResults(dropdown, query) {
      // Pick 2 top rated items for engaging e-commerce recommendation cards
      const topPicks = PRODUCTS_CATALOG.filter((p) => p.rating >= 4.9).slice(0, 2);

      const html = `
        <div class="search-dropdown-content search-empty-dropdown">
          <!-- Centered Header Block with Purposeful Icon -->
          <div class="empty-header-block text-center">
            <div class="empty-icon-wrap">
              <i class="bi bi-search"></i>
            </div>
            <h4 class="empty-title">No products found for "${escapeHtml(query)}"</h4>
            <p class="empty-desc">
              We couldn't find an exact match. Try adjusting your spelling or explore customer favorites below.
            </p>
          </div>

          <!-- Immediate Action Buttons -->
          <div class="empty-action-btns">
            <button type="button" class="btn-dropdown-action btn-clear-search-trigger" id="dropdown-btn-clear">
              <i class="bi bi-x-circle"></i> Clear Search
            </button>
            <button type="button" class="btn-dropdown-action btn-browse-all-trigger" id="dropdown-btn-browse">
              <i class="bi bi-grid"></i> Browse All Products
            </button>
          </div>

          <!-- Balanced Popular Searches (Title Case, Cohesive Typography) -->
          <div class="dropdown-section popular-searches-section">
            <div class="dropdown-section-header">
              <span class="dropdown-section-title"><i class="bi bi-fire text-primary"></i> Popular Searches</span>
            </div>
            <div class="popular-pills-row">
              <button type="button" class="search-pill" data-search-pill="watch">Watches</button>
              <button type="button" class="search-pill" data-search-pill="headphones">Headphones</button>
              <button type="button" class="search-pill" data-search-pill="pant">Linen Pants</button>
              <button type="button" class="search-pill" data-search-pill="lamp">Desk Lamp</button>
              <button type="button" class="search-pill" data-search-pill="serum">Glow Serum</button>
              <button type="button" class="search-pill" data-search-pill="ceramic">Vases</button>
            </div>
          </div>

          <!-- Engaging E-commerce Customer Favorites Recommendations -->
          <div class="dropdown-section customer-favorites-section">
            <div class="dropdown-section-header">
              <span class="dropdown-section-title"><i class="bi bi-star-fill text-warning"></i> Customer Favorites</span>
            </div>
            <div class="rec-products-list">
              ${topPicks
                .map(
                  (prod) => `
                <div class="rec-product-card" data-product-id="${prod.id}">
                  <div class="rec-thumb-wrap">
                    <img src="${prod.image}" alt="${escapeHtml(prod.title)}" class="rec-thumb" loading="lazy">
                  </div>
                  <div class="rec-details">
                    <div class="rec-meta-top">
                      <span class="rec-category">${escapeHtml(prod.category)}</span>
                      <span class="rec-rating"><i class="bi bi-star-fill text-warning"></i> ${prod.rating}</span>
                    </div>
                    <span class="rec-title">${escapeHtml(prod.title)}</span>
                    <div class="rec-price-row">
                      <span class="rec-current-price">${prod.price}</span>
                      <span class="rec-old-price">${prod.oldPrice}</span>
                    </div>
                  </div>
                  <div class="rec-action-wrap">
                    <button type="button" class="btn-rec-view" aria-label="View ${escapeHtml(prod.title)}">
                      <span>View</span> <i class="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      `;

      dropdown.innerHTML = html;
    }

    closeDropdowns() {
      if (this.desktopDropdown) this.desktopDropdown.hidden = true;
      if (this.mobileDropdown) this.mobileDropdown.hidden = true;
      if (this.desktopInput) this.desktopInput.setAttribute('aria-expanded', 'false');
      if (this.mobileInput) this.mobileInput.setAttribute('aria-expanded', 'false');
      this.activeSuggestionIndex = -1;
    }

    applyQuery(term, submitImmediate) {
      this.syncInputs(term, 'external');
      this.toggleClearButtons(true);
      if (submitImmediate) {
        this.executeAndShowResults(term);
      } else {
        this.runAutocomplete(term, 'desktop');
      }
    }

    selectProductItem(productId) {
      this.closeDropdowns();
      this.renderFullGrid();
      if (this.searchFilterBanner) this.searchFilterBanner.classList.add('d-none');
      if (this.searchZeroResults) this.searchZeroResults.classList.add('d-none');
      if (this.fallbackFeatured) this.fallbackFeatured.classList.add('d-none');

      const targetCard = document.getElementById(productId);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.remove('product-card-spotlight');
        void targetCard.offsetWidth; // Reflow
        targetCard.classList.add('product-card-spotlight');

        setTimeout(() => {
          targetCard.classList.remove('product-card-spotlight');
        }, 3000);
      }
    }

    executeAndShowResults(query) {
      this.closeDropdowns();
      const results = executeSearch(query);

      const shopSection = document.getElementById('shop');
      if (shopSection) {
        shopSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (results.length > 0) {
        this.renderFilteredGrid(results);

        if (this.searchFilterBanner) {
          this.searchFilterBanner.innerHTML = `
            <div class="search-banner-box">
              <div class="banner-left">
                <span class="banner-badge">Search Results</span>
                <span class="banner-text">
                  Found <strong>${results.length}</strong> matching ${results.length === 1 ? 'product' : 'products'} for 
                  <span class="query-chip">"${escapeHtml(query)}"</span>
                </span>
              </div>
              <button type="button" class="btn-clear-filter" id="btn-clear-search-filter" aria-label="Clear search filter">
                <i class="bi bi-x-circle-fill"></i> Clear Filter (Show All)
              </button>
            </div>
          `;
          this.searchFilterBanner.classList.remove('d-none');
        }

        if (this.searchZeroResults) this.searchZeroResults.classList.add('d-none');
        if (this.fallbackFeatured) this.fallbackFeatured.classList.add('d-none');
      } else {
        this.handleZeroResultsState(query);
      }
    }

    handleZeroResultsState(query) {
      if (this.searchFilterBanner) this.searchFilterBanner.classList.add('d-none');
      if (this.productsGrid) this.productsGrid.innerHTML = '';

      if (this.searchZeroResults) {
        this.searchZeroResults.innerHTML = `
          <div class="zero-results-card">
            <div class="zero-icon-wrapper">
              <i class="bi bi-bag-x"></i>
            </div>
            <h3 class="zero-title">No products found for "${escapeHtml(query)}"</h3>
            <p class="zero-subtitle">
              We couldn't locate any products matching your search criteria. Review our helpful search tips or explore popular collections.
            </p>

            <div class="zero-suggestions-box">
              <h4 class="suggestions-heading"><i class="bi bi-lightbulb-fill text-warning"></i> Helpful Suggestions:</h4>
              <ul class="suggestions-list">
                <li><i class="bi bi-check2"></i> Check your search for typos or spelling mistakes</li>
                <li><i class="bi bi-check2"></i> Try using singular or plural variants (e.g. "pant", "watches")</li>
                <li><i class="bi bi-check2"></i> Try general terms like "audio", "lamp", "accessories", "bag"</li>
                <li><i class="bi bi-check2"></i> Search by SKU code (e.g. <code>SKU-ACC-001</code>, <code>SKU-ELE-002</code>)</li>
              </ul>
            </div>

            <div class="zero-chips-container">
              <span class="chips-label">Quick Search Recommendations:</span>
              <div class="chips-row">
                <button type="button" class="chip-btn" data-search-pill="watch"><i class="bi bi-search"></i> Watches</button>
                <button type="button" class="chip-btn" data-search-pill="pant"><i class="bi bi-search"></i> Linen Pants</button>
                <button type="button" class="chip-btn" data-search-pill="headphones"><i class="bi bi-search"></i> Headphones</button>
                <button type="button" class="chip-btn" data-search-pill="desk lamp"><i class="bi bi-search"></i> Smart Lamps</button>
                <button type="button" class="chip-btn" data-search-pill="leather"><i class="bi bi-search"></i> Leather Bags</button>
                <button type="button" class="chip-btn" data-search-pill="serum"><i class="bi bi-search"></i> Glow Serum</button>
                <button type="button" class="chip-btn" data-search-pill="keyboard"><i class="bi bi-search"></i> Keyboards</button>
              </div>
            </div>

            <div class="zero-cta-group">
              <button type="button" class="btn-custom btn-primary-custom" id="btn-reset-catalog">
                <i class="bi bi-arrow-counterclockwise"></i> View Full Collection (12 Products)
              </button>
            </div>
          </div>
        `;
        this.searchZeroResults.classList.remove('d-none');
      }

      if (this.fallbackFeatured && this.fallbackGrid) {
        const topBestsellers = PRODUCTS_CATALOG.filter((p) => p.rating >= 4.9).slice(0, 4);
        this.fallbackGrid.innerHTML = topBestsellers.map(renderProductCardHtml).join('');
        this.fallbackFeatured.classList.remove('d-none');
      }
    }

    renderFilteredGrid(products) {
      if (!this.productsGrid) return;
      this.productsGrid.innerHTML = products.map(renderProductCardHtml).join('');
    }

    renderFullGrid() {
      if (!this.productsGrid) return;
      this.productsGrid.innerHTML = PRODUCTS_CATALOG.map(renderProductCardHtml).join('');
    }

    clearSearch(resetGrid) {
      this.syncInputs('', 'external');
      this.toggleClearButtons(false);
      this.closeDropdowns();

      if (resetGrid) {
        this.renderFullGrid();
        if (this.searchFilterBanner) this.searchFilterBanner.classList.add('d-none');
        if (this.searchZeroResults) this.searchZeroResults.classList.add('d-none');
        if (this.fallbackFeatured) this.fallbackFeatured.classList.add('d-none');
      }
    }
  }

  // =========================================================================
  // 5. INITIALIZATION
  // =========================================================================
  function initController() {
    const controller = new SearchController();
    controller.catalog = PRODUCTS_CATALOG;
    controller.executeSearch = executeSearch;
    controller.stemWord = stemWord;
    controller.levenshtein = levenshtein;
    window.shopNestSearch = controller;
    return controller;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initController);
  } else {
    initController();
  }
})();
