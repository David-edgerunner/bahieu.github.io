        // ══════════════════════════════════════
        // CUSTOM CURSOR
        // ══════════════════════════════════════
        (function () {
            const dot = document.getElementById('cur-dot');
            const ring = document.getElementById('cur-ring');
            if (!dot || !ring) return;
            let mx = -100, my = -100, rx = -100, ry = -100;
            document.addEventListener('mousemove', e => {
                mx = e.clientX; my = e.clientY;
                dot.style.left = mx + 'px'; dot.style.top = my + 'px';
            });
            (function loop() {
                rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
                ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
                requestAnimationFrame(loop);
            })();
            document.querySelectorAll('a,.media-card,.proj-card,.about-card,.feed-entry').forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('cur-gold'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('cur-gold'));
            });
            document.querySelectorAll('button,.feed-filter,.pill').forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('cur-btn'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('cur-btn'));
            });
        })();

        // ══════════════════════════════════════
        // ══════════════════════════════════════
        // VIDEO SYSTEM — SMART LOADING
        // one video plays at a time, pause when offscreen,
        // load only when section is near viewport
        // ══════════════════════════════════════
        const isMobile = window.matchMedia('(max-width:767px)').matches;

        function loadAndPlay(video) {
            if (video.dataset.loaded) { video.play().catch(() => { }); return; }
            video.dataset.loaded = '1';
            const sourceEl = video.querySelector('source');

            let src;
            if (isMobile) {
                src = video.dataset.srcSd || sourceEl?.dataset.srcSd || video.dataset.src || sourceEl?.dataset.src;
            } else {
                src = video.dataset.src || sourceEl?.dataset.src;
            }

            if (!src) return;
            if (video.tagName === 'VIDEO' && sourceEl) {
                sourceEl.src = src;
            } else {
                video.src = src;
            }
            video.load();
            video.addEventListener('canplay', function onReady() {
                video.play().catch(() => { });
                setTimeout(() => video.classList.add('loaded'), 80);
                video.removeEventListener('canplay', onReady);
            }, { once: true });
        }

        // Hero — load immediately
        const heroVideo = document.getElementById('hero-video');
        loadAndPlay(heroVideo);

        // Section videos — load only when 300px from viewport
        // pause immediately when leaving viewport (saves bandwidth + CPU)
        const secVideos = document.querySelectorAll('.sec-video[data-src]');

        const playObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const v = entry.target;
                if (entry.isIntersecting) {
                    loadAndPlay(v);
                } else {
                    if (!v.paused) v.pause();
                }
            });
        }, { rootMargin: '0px', threshold: 0.01 });

        secVideos.forEach(v => {
            v.setAttribute('preload', 'none');
            playObserver.observe(v);
        });

        // ══════════════════════════════════════
        // NAV SCROLL EFFECT
        // ══════════════════════════════════════
        const nav = document.getElementById('main-nav');
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });

        // ══════════════════════════════════════
        // FILM CUT TRANSITIONS
        // ══════════════════════════════════════
        const cut = document.getElementById('film-cut');
        const sections = document.querySelectorAll('section.content-sec');
        const cutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cut.classList.add('flash');
                    setTimeout(() => cut.classList.remove('flash'), 120);
                }
            });
        }, { threshold: 0.15 });
        sections.forEach(s => cutObserver.observe(s));

        // ══════════════════════════════════════
        // FADE-IN ON SCROLL
        // ══════════════════════════════════════
        const fadeEls = document.querySelectorAll('.fade-in');
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 60);
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        fadeEls.forEach(el => fadeObserver.observe(el));

        // ══════════════════════════════════════
        // LAZY LOAD BACKGROUND IMAGES
        // ══════════════════════════════════════
        const bgEls = document.querySelectorAll('[data-bg]');
        const bgObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const bgUrl = el.getAttribute('data-bg');
                    if (bgUrl) {
                        el.style.backgroundImage = `url('${bgUrl}')`;
                        el.removeAttribute('data-bg');
                    }
                    bgObserver.unobserve(el);
                }
            });
        }, { rootMargin: '400px 0px' });
        bgEls.forEach(el => bgObserver.observe(el));

        // ══════════════════════════════════════
        // PARALLAX (desktop only)
        // ══════════════════════════════════════
        if (!isMobile) {
            const parallaxEls = document.querySelectorAll('.parallax-bg');
            window.addEventListener('scroll', () => {
                const sy = window.scrollY;
                parallaxEls.forEach(el => {
                    const parent = el.closest('section');
                    if (!parent) return;
                    const rect = parent.getBoundingClientRect();
                    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
                    const offset = (rect.top / window.innerHeight) * 40;
                    el.style.transform = `translateY(${offset}px)`;
                });
            }, { passive: true });
        }

        // ══════════════════════════════════════
        // BUTTON HINTS
        // ══════════════════════════════════════
        const timers = {};
        function showHint(el, ms, key) {
            el.classList.add('show');
            clearTimeout(timers[key]);
            timers[key] = setTimeout(() => el.classList.remove('show'), ms);
        }
        document.getElementById('say-hello-btn').addEventListener('click', () => showHint(document.getElementById('say-hello-hint'), 3000, 'hello'));
        document.getElementById('explore-btn').addEventListener('click', () => showHint(document.getElementById('explore-hint'), 2000, 'explore'));

        // ══════════════════════════════════════
        // FEED — LOAD FROM feed.json
        // ══════════════════════════════════════
        const typeClass = { building: 'ft-building', watching: 'ft-watching', listening: 'ft-listening', thinking: 'ft-thinking', shipping: 'ft-shipping' };
        let feedData = [];
        let activeFilters = new Set(['all']);

        function renderFeed() {
            const list = document.getElementById('feed-list');
            const empty = document.getElementById('feed-empty');
            const isAll = activeFilters.has('all');
            const filtered = isAll ? feedData : feedData.filter(entry => {
                const allTags = [entry.type, ...(entry.tags || [])];
                return [...activeFilters].every(f => allTags.includes(f));
            });
            list.querySelectorAll('.feed-entry').forEach(e => e.remove());
            if (filtered.length === 0) {
                empty.style.display = 'block';
                return;
            }
            empty.style.display = 'none';
            filtered.forEach(entry => {
                const el = document.createElement('div');
                el.className = 'feed-entry glass';
                const tc = typeClass[entry.type] || 'ft-thinking';
                const d = new Date(entry.date);
                const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                const linkHTML = entry.link ? `<a href="${entry.link}" target="_blank" rel="noopener">↗</a>` : '';
                const tagsHTML = (entry.tags || []).map(t => `<span class="feed-tag">${t}</span>`).join('');
                el.innerHTML = `<div class="feed-top"><span class="feed-type ${tc}">${entry.type}</span><span class="feed-date">${dateStr}</span></div><div class="feed-text">${entry.text} ${linkHTML}</div>${tagsHTML ? `<div class="feed-tags">${tagsHTML}</div>` : ''}`;
                list.appendChild(el);
            });
        }

        async function loadFeed() {
            try {
                const res = await fetch('./feed.json');
                feedData = await res.json();
                feedData.sort((a, b) => new Date(b.date) - new Date(a.date));
                renderFeed();
            } catch (e) {
                feedData = [
                    { date: '2026-03-27', type: 'building', text: 'New site just dropped. La La Land aesthetic, glass cards, video backgrounds per section. Took a while but felt right.', tags: ['building', 'proud of this'] },
                    { date: '2026-03-25', type: 'thinking', text: 'The hardest part of a personal site isn\'t the code. It\'s deciding who you want to be when someone googles you.', tags: ['thinking', 'late night'] },
                    { date: '2026-03-22', type: 'building', text: 'IDOMA HUB — restarting from scratch with a clearer idea. 5 learner archetypes, CEFR scoring. This one feels real.', tags: ['building', 'in progress', 'obsessing'] },
                    { date: '2026-03-18', type: 'watching', text: 'Rewatched Happy Together. Still devastates. The Buenos Aires footage hits different at 1am.', tags: ['watching', 'melancholy', 'late night'] },
                    { date: '2026-03-14', type: 'shipping', text: 'Sketchs is done. 40 pages, a whole story. My first completed comic. Nano Banana2 made it better than I could alone.', tags: ['shipping', 'proud of this'] },
                    { date: '2026-03-10', type: 'listening', text: 'Black Country, New Road — Basketball Shoes on repeat. The outro alone is 8 minutes and I\'ve listened to it 14 times.', tags: ['listening', 'obsessing'] }
                ];
                renderFeed();
            }
        }

        document.getElementById('feed-filters').addEventListener('click', e => {
            const btn = e.target.closest('.feed-filter');
            if (!btn) return;
            const filter = btn.dataset.filter;
            if (filter === 'all') {
                activeFilters.clear();
                activeFilters.add('all');
            } else {
                activeFilters.delete('all');
                if (activeFilters.has(filter)) {
                    activeFilters.delete(filter);
                    if (activeFilters.size === 0) activeFilters.add('all');
                } else {
                    activeFilters.add(filter);
                }
            }
            document.querySelectorAll('.feed-filter').forEach(f => {
                f.classList.toggle('active', activeFilters.has(f.dataset.filter));
            });
            renderFeed();
        });

        loadFeed();

        // ══════════════════════════════════════
        // SPOTIFY NOW PLAYING (plug in your worker URL)
        // ══════════════════════════════════════
        (function () {
            const WORKER_URL = '';  // ← paste your Cloudflare Worker URL here
            if (!WORKER_URL) return;
            const widget = document.getElementById('now-playing-widget');
            const art = document.getElementById('np-art');
            const title = document.getElementById('np-title');
            const artist = document.getElementById('np-artist');
            const label = document.getElementById('np-label');
            const fill = document.getElementById('np-progress-fill');
            async function fetchNow() {
                try {
                    const data = await fetch(WORKER_URL).then(r => r.json());
                    if (data.isPlaying) {
                        widget.classList.add('playing'); widget.classList.remove('idle');
                        widget.href = data.songUrl;
                        art.src = data.albumArt || '';
                        title.textContent = data.title;
                        artist.textContent = data.artist;
                        label.textContent = 'Now playing';
                        fill.style.width = ((data.progress / data.duration) * 100) + '%';
                    } else {
                        widget.classList.add('idle'); widget.classList.remove('playing');
                        widget.href = 'https://open.spotify.com';
                        title.textContent = 'Not listening right now';
                        artist.textContent = 'Last seen: Saigon, 6PM gym playlist';
                        label.textContent = 'Offline';
                        fill.style.width = '0%';
                    }
                } catch (e) { }
            }
            fetchNow();
            setInterval(fetchNow, 30000);
        })();

        // ══════════════════════════════════════
        // BACKGROUND MUSIC
        // ══════════════════════════════════════
        (function () {
            const audio = new Audio('./music.mp3');
            audio.loop = true;
            audio.preload = 'auto';
            audio.volume = 0;

            let started = false;
            let isStarting = false;
            let muted = false;

            // Fade volume in/out smoothly
            function fadeTo(target, duration) {
                const start = audio.volume;
                const diff = target - start;
                const steps = 40;
                const interval = duration / steps;
                let step = 0;
                const t = setInterval(() => {
                    step++;
                    audio.volume = Math.min(1, Math.max(0, start + diff * (step / steps)));
                    if (step >= steps) clearInterval(t);
                }, interval);
            }

            function startMusic() {
                if (started || isStarting) return;
                isStarting = true;
                audio.play().then(() => {
                    started = true;
                    fadeTo(0.28, 2000);
                }).catch(() => {
                    // Keep music startable on next user gesture if the first attempt is blocked.
                    started = false;
                }).finally(() => {
                    isStarting = false;
                });
            }

            // Start on first click anywhere on the page.
            document.addEventListener('click', startMusic, { once: true, capture: true });

            // ── MUSIC BUTTON ──
            const btn = document.getElementById('music-toggle-btn');
            if (!btn) return;

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!started) { startMusic(); return; }
                muted = !muted;
                if (muted) {
                    fadeTo(0, 800);
                    btn.classList.add('muted');
                    btn.title = 'Play music';
                } else {
                    fadeTo(0.28, 800);
                    btn.classList.remove('muted');
                    btn.title = 'Mute music';
                }
            });

            // Fade down when tab hidden, back up when visible
            document.addEventListener('visibilitychange', () => {
                if (!started || muted) return;
                document.hidden ? fadeTo(0.06, 600) : fadeTo(0.28, 800);
            });
        })();
