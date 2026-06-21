        // ══════════════════════════════════════
        // TRANSLATIONS
        // ══════════════════════════════════════
        const translations = {
            en: {
                "nav.home": "Home", "nav.about": "About", "nav.projects": "Projects", "nav.feed": "Feed", "nav.films": "Films", "nav.music": "Music", "nav.contact": "Contact",
                "hero.eyebrow": "Nguyen Ba Hieu",
                "hero.sayHello": "Say hello", "hero.sayHelloHint": "hello! really glad you're here!",
                "hero.title": "Student. Creator.", "hero.explore": "Explore my world", "hero.exploreHint": "scroll down!",
                "hero.sub": "self-taught in everything that matters, freshman in everything else.",
                "about.label": "Who am I", "about.title": "A little about me", "about.sub": "Authentic, a little weird, always building something.",
                "about.card1.title": "IB Freshman, Saigon University", "about.card1.body": "Studying International Business in HCMC, class DKQ1252. Learning how the world does business — and why culture is everything.",
                "about.card2.title": "Builder & Entrepreneur", "about.card2.body": "Shipping projects while still in school — comics, websites, platforms. I build things before I fully know how.(with the help of ai) That's the point( i'm still learning the funamendal though).",
                "about.card3.title": "Music + Movies + Vibes", "about.card3.body": "Big music person. Goated movie taste. Gym at 6 PM, café for everything else. Introverted (I'm trying not to be).",
                "about.spanish": "🇪🇸 Spanish (learning)",
                "about.pill1": "🏋️ gym @ 6pm daily", "about.pill2": "☕ café worker bee", "about.pill3": "🎬 certified film nerd", "about.pill4": "🎵 music obsessed", "about.pill5": "✨ does weird stuff proudly", "about.pill6": "📖 lore enthusiast", "about.pill7": "🤖 learning json",
                "projects.label": "My work", "projects.title": "Projects", "projects.sub": "Comics, platforms, and a multiverse or two.",
                "badge.done": "✓ Completed", "badge.ongoing": "⚡ Ongoing", "badge.lazy": "😴 In progress",
                "proj1.cat": "Comic Book", "proj1.desc": "40 pages. A quiet homo love story, a bit cringe(a lot). My first completed photorealistic comic — it has pages, a cover, and a soul.i have some more similar stories i wrote in highschool ready to develop too, and i'll do it. ", "proj1.credit": "Made with Nano Banana2, claude, me ( i have the secret recipe, you won't find it anywhere cause no one actually make it nowadays).",
                "proj2.cat": "Comic Book + Novel", "proj2.desc": "the next realistic project made base on the framework i adopted from sketches production. Now also completed.", "proj2.credit": "Made with Nano Banana2, claude, me.",
                "proj3.cat": "EdTech / Business", "proj3.desc": "English testing platform for Vietnamese learners. 5 learner archetypes, CEFR scoring, differentiated results. Building it. now i have the completed diagnostic site. ",
                "tag.origip": "Original IP", "tag.completed": "Completed", "tag.novel": "Novel", "tag.language": "Language",
                "feed.label": "What I'm up to", "feed.title": "The Feed", "feed.sub": "A running log of what I'm building, watching, listening to, and thinking about.",
                "movies.label": "Hieu's watchlist", "movies.title": "My Movies", "movies.sub": "Films I love — and exactly why you should watch them too.",
                "movie1.why": "Two lonely cops, two missed connections, one city that pulses like a heartbeat. It makes you fall in love with sadness and neon lights simultaneously — pure 1990s Hong Kong vibe. I watched it for the first time while drunk.",
                "movie2.why": "For someone who has a lot of dreams — this film about chasing them at the cost of comfort was made for you. Bittersweet and beautiful. I remember every quote except I'm not.",
                "movie3.why": "A golden, aching summer that rewires you completely. The authenticity you value bleeds out of every frame. The score alone will haunt you for weeks.",
                "movie4.why": "Two people pulling apart in Buenos Aires. Beautifully shot, emotionally devastating. If Chungking Express hit you, this one will wreck you — in the best way.",
                "movie5.why": "One afternoon, one car ride, a conversation that changes everything. Raw and precisely 18 years old. You'll watch this and feel seen in a way that's almost uncomfortable.",
                "movie6.why": "Rough, quiet, and deeply human. No drama for drama's sake — just two people being real with each other. Authenticity in its purest, most unpolished form.",
                "mtag.mood": "Mood film", "mtag.urban": "Urban poetry", "mtag.lonely": "Loneliness", "mtag.dreams": "Dreams", "mtag.music": "Music", "mtag.bittersweet": "Bittersweet", "mtag.authentic": "Authentic", "mtag.sensory": "Sensory", "mtag.coming": "Coming of age", "mtag.heartbreak": "Heartbreak", "mtag.identity": "Identity", "mtag.visual": "Visual poetry", "mtag.intimacy": "Intimacy", "mtag.youth": "Youth", "mtag.oneday": "One day", "mtag.raw": "Raw", "mtag.quiet": "Quiet intensity", "mtag.human": "Human",
                "music.label": "Hieu's playlist", "music.title": "My Artists", "music.sub": "The artists living rent-free in my head — and why they should live in yours too.",
                "since.2010": "Since 2010", "since.2004": "Since 2004", "since.2018": "Since 2018", "since.2002": "Since 2002", "since.2010b": "Since 2010",
                "artist1.why": "She writes like someone who makes movies in their head — melancholic, cinematic, American mythology filtered through sadness and beauty. If you love Wong Kar-wai films, you already love Lana. Same melancholy, different medium. Funfact: I can sing all her songs!",
                "artist2.why": "Pure energy and emotional honesty — they've reinvented themselves multiple times without losing their core. The kind of band that hits differently depending on where you are in life. Perfect for gym at 6 PM.",
                "artist3.why": "Chaotic, literary, and completely unlike anything else. Their songs feel like reading a great novel — dense with meaning, always changing. I like Basketball Shoes the most!",
                "artist4.why": "Alex Turner writes lyrics like a novelist — sharp, witty, loaded with imagery. Every album is a different world. A band that rewards you for paying attention. Start with <em>Humbug</em> if you haven't.",
                "artist5.why": "She builds entirely new sonic universes from scratch. Weird, beautiful, futuristic, and completely uncompromising. Authentic in the most alien way possible. You respect that.",
                "atag.cinematic": "Cinematic", "atag.nostalgic": "Nostalgic", "atag.poetic": "Poetic", "atag.energy": "High energy", "atag.emotional": "Emotional", "atag.anthemic": "Anthemic", "atag.literary": "Literary", "atag.complex": "Complex", "atag.story": "Storytelling", "atag.sharp": "Sharp lyrics", "atag.world": "World-building", "atag.universe": "Universe-builder", "atag.futurist": "Futurist", "atag.uncompromising": "Uncompromising",
                "footer.text": "Made with ♥ somewhere between a lecture and the gym · Let's connect, Hieu.",
                "footer.social": "Not gr*ndr"
            },
            vi: {
                "nav.home": "Trang chủ", "nav.about": "Về mình", "nav.projects": "Dự án", "nav.feed": "Nhật ký", "nav.films": "Phim", "nav.music": "Nhạc", "nav.contact": "Liên hệ",
                "hero.eyebrow": "Nguyễn Bá Hiếu · Sài Gòn",
                "hero.sayHello": "Chào bạn 👋", "hero.sayHelloHint": "chào bạn! rất vui vì bạn ghé thăm!",
                "hero.title": "Sinh viên. Người sáng tạo.", "hero.explore": "Khám phá thế giới của mình 🌍", "hero.exploreHint": "cuộn xuống xem nhé!",
                "hero.sub": "tự học mọi thứ quan trọng, tân sinh viên trong mọi thứ còn lại.",
                "about.label": "Mình là ai", "about.title": "Đôi nét về mình", "about.sub": "Chân thật, hơi lạ một chút, luôn luôn đang xây dựng thứ gì đó.",
                "about.card1.title": "Sinh viên năm nhất, ĐH Sài Gòn", "about.card1.body": "Học Kinh doanh Quốc tế tại TP.HCM, lớp DKQ1252. Đang tìm hiểu xem thế giới làm ăn như thế nào — và tại sao văn hoá mới là yếu tố quyết định.",
                "about.card2.title": "Builder & Khởi nghiệp", "about.card2.body": "Xây dựng dự án liên tục song song với việc học trên trường — truyện tranh, website, nền tảng. Mình bắt tay vào làm trước cả khi biết chính xác phải làm thế nào (với sự hỗ trợ của AI). Đó mới là điều thú vị (tất nhiên mình vẫn đang củng cố lại kiến thức nền tảng).",
                "about.card3.title": "Nhạc + Phim + Vibe", "about.card3.body": "Nghiện nhạc nặng. Gu phim ổn. Tập gym lúc 6h tối, thời gian còn lại thì gắn liền với quán cà phê. Hướng nội (nhưng đang cố khắc phục).",
                "about.spanish": "🇪🇸 Tiếng Tây Ban Nha (đang học)",
                "about.pill1": "🏋️ gym lúc 6h tối mỗi ngày", "about.pill2": "☕ cư dân quán cà phê", "about.pill3": "🎬 mọt phim chính hiệu", "about.pill4": "🎵 đam mê âm nhạc", "about.pill5": "✨ tự hào với sự đặcv biệt của mình", "about.pill6": "📖 đam mê bối cảnh truyện", "about.pill7": "🤖 đang vọc vạch json",
                "projects.label": "Công việc của mình", "projects.title": "Các dự án", "projects.sub": "Truyện tranh, những dự án nền tảng, và đôi ba vũ trụ song song.",
                "badge.done": "✓ Hoàn thành", "badge.ongoing": "⚡ Đang làm", "badge.lazy": "😴 Đang tiến hành",
                "proj1.cat": "Truyện tranh", "proj1.desc": "40 trang. Một câu chuyện tình yêu nhẹ nhàng. Cuốn truyện tranh chân thực đầu tiên mà mình hoàn thành — có số trang đàng hoàng, có bìa, và có chiều sâu. Mình vẫn còn vài kịch bản tương tự hồi cấp 3 đã sẵn sàng, và mình sẽ triển khai.", "proj1.credit": "Được tạo ra cùng Nano Banana2, Claude, và bản thân mình (đây là công thức bí mật, khó mà tìm thấy ở đâu khác).",
                "proj2.cat": "Truyện tranh + Tiểu thuyết", "proj2.desc": "Dự án phong cách chân thực tiếp theo được xây dựng dựa trên quy trình mà mình áp dụng từ bộ Sketches. Bây giờ cũng đã hoàn thành.", "proj2.credit": "Được tạo ra cùng Nano Banana2, Claude và mình.",
                "proj3.cat": "EdTech / Kinh doanh", "proj3.desc": "Nền tảng kiểm tra tiếng Anh dành cho người Việt. Phân loại 5 nhóm người học, chấm điểm theo chuẩn CEFR, kết quả được phân tích chi tiết. Mình đang trong quá trình xây dựng, hiện tại đã hoàn thiện giao diện phần chẩn đoán.",
                "tag.origip": "IP gốc", "tag.completed": "Hoàn thành", "tag.novel": "Tiểu thuyết", "tag.language": "Ngôn ngữ",
                "feed.label": "Mình đang làm gì", "feed.title": "Dòng thời gian", "feed.sub": "Ghi chép về những thứ mình đang phát triển, xem, nghe, và trăn trở.",
                "movies.label": "Danh sách phim của Hiếu", "movies.title": "Những bộ phim yêu thích", "movies.sub": "Những tác phẩm mình cực kỳ yêu thích — và lý do tại sao bạn cũng nên thử xem qua.",
                "movie1.why": "Hai anh cảnh sát cô đơn, hai cuộc gặp gỡ lỡ hẹn, một thành phố nhịp đập liên hồi. Phim khiến bạn yêu luôn cảm giác rầu rĩ lẫn những ánh đèn neon nhòe nhoẹt. Thú thật là mình lần đầu xem bộ này lúc đang hơi say.",
                "movie2.why": "Dành cho những ai ấp ủ nhiều ước mơ — bộ phim về hành trình theo đuổi đam mê và cái giá của sự đánh đổi sinh ra là dành cho bạn. Nuối tiếc nhưng đẹp đẽ. Mình thậm chí thuộc lòng không sót câu thoại nào, à mà có vẻ như mình hơi phóng đại một chút.",
                "movie3.why": "Một mùa hè sôi động nhưng day dứt, đủ để làm thế giới quan của bạn đổi thay. Sự chân thực hiện diện trọn vẹn qua từng khung hình. Chỉ riêng phần nhạc phim thôi cũng đã có độ ám ảnh khó quên.",
                "movie4.why": "Hai người dường như ngày càng xa cách tại vùng đất Buenos Aires. Góc máy đẹp tuyệt vời, nhưng xúc cảm thì quá đỗi nặng nề. Nếu Chungking Express làm bạn nghẹn ngào, thì phần phim này sẽ để lại vết xước trong bạn — theo một cách hoàn mỹ nhất.",
                "movie5.why": "Một chiều muộn, một chuyến hành trình, và cuộc đối thoại đã thay đổi toàn bộ góc nhìn. Chất liệu thô ráp và đượm đà màu sắc tuổi 18 mãnh liệt. Đảm bảo khi xem bạn cũng sẽ thoáng thấy mình trong đó.",
                "movie6.why": "Một tác phẩm thô ráp, tĩnh lặng và mộc mạc tính con người. Hoàn toàn thiếu vắng các câu chuyện bị đẩy lên khiên cưỡng — chỉ đơn giản là hai tâm hồn sống thật cùng nhau. Giá trị chân thật được ưu tiên ở trạng thái bản nguyên nhất.",
                "mtag.mood": "Phim cảm xúc", "mtag.urban": "Thơ ca đô thị", "mtag.lonely": "Sự cô đơn", "mtag.dreams": "Bản tình ca ước mơ", "mtag.music": "Yêu nhạc", "mtag.bittersweet": "Nuối tiếc và lãng mạn", "mtag.authentic": "Đời thường", "mtag.sensory": "Tác động cảm giác", "mtag.coming": "Chuyến đi tuổi trẻ", "mtag.heartbreak": "Đau đáu", "mtag.identity": "Định dạng bản sắc", "mtag.visual": "Cái đẹp thị giác", "mtag.intimacy": "Gần gũi và sâu sắc", "mtag.youth": "Cơn lốc tuổi trẻ", "mtag.oneday": "Khoảnh khắc", "mtag.raw": "Chân thật mộc mạc", "mtag.quiet": "Vẻ trầm ngâm", "mtag.human": "Tinh thần nhân văn",
                "music.label": "Playlist của Hiếu", "music.title": "Giới nghệ sĩ nổi bật", "music.sub": "Những cái tên vẫn chưa lúc nào ngừng văng vẳng trong tiềm thức — và bạn cũng nên thử nghe một lần.",
                "since.2010": "Khởi đầu từ 2010", "since.2004": "Bắt đầu năm 2004", "since.2018": "Ra mắt từ 2018", "since.2002": "Hành trình từ 2002", "since.2010b": "Xuất hiện từ 2010",
                "artist1.why": "Cô ấy viết âm nhạc dường như đem cả thước phim vào suy nghĩ — đượm nét u hoài, như màn bạc đầy tâm trạng, phác họa hình ảnh nước Mỹ thông qua chất lãng tử của cái đẹp và màn sương hoài niệm. Nếu bạn đồng điệu cùng phong cách của tác giả Wong Kar-wai, hãy nghe thử Lana nha. Niềm vui nho nhỏ là mình biết mặt hát hệt mọi bài của cô.",
                "artist2.why": "Mang đúng năng lượng thuần khiết và sự thành thật chạm vào xúc cảm — ban nhạc đã liên tục chuyển mình nhưng vẫn níu lại chất lôi cuốn ban đầu. Một dòng nhạc thấm thía đến từng nhịp thở cho dù bạn đang ở khoảng trầm bổng nào. Tuyệt hảo cho các buổi đi tập cơ hằng chiều tối.",
                "artist3.why": "Pha trộn hỗn loạn, tràn ngập nghệ thuật ngôn từ và đi ngược lại công thức đại trà. Nghe nhạc hệt như bạn lật giở những cuốn truyện tiểu thuyết ngập tràn tâm thái — luôn có sự biến ảo trong đó. Đoạn hát yêu thích của mình phải kể tới Basketball Shoes.",
                "artist4.why": "Alex Turner gieo vần sắc cạnh tựa văn sĩ chuyên nghiệp — thông minh, chất thơ và lôi cuốn bằng đa dạng lối mường tượng. Mỗi một quyển album thả trọn ra các vũ trụ không đụng lặp. Nếu chưa từng thử qua nhạc của họ, hãy chạy qua Humbug một chút xem sao.",
                "artist5.why": "Nữ ca sĩ này đã độc lập vận hành cho bản thân hệ hình tượng âm thanh từ thời mông muội. Đậm sự lạ lùng, đẹp cứng cỏi, rẽ hướng tiên phong thế kỉ mới một cách can trường. Sự kỳ dị mà nhất định bạn có thể gật gù khen gợi.",
                "atag.cinematic": "Chất rạp phim", "atag.nostalgic": "Hoài niệm xa xôi", "atag.poetic": "Đầy chất thơ", "atag.energy": "Thực lực bùng nổ", "atag.emotional": "Gia vị cảm xúc", "atag.anthemic": "Anthemic", "atag.literary": "Phong thái ngữ văn", "atag.complex": "Đầy chiêm nghiệm", "atag.story": "Lối kể đặc thù", "atag.sharp": "Ca từ sắc nhọn", "atag.world": "Tái tạo thế giới", "atag.universe": "Lập nên vũ trụ nhạc", "atag.futurist": "Nguồn sáng tương lai", "atag.uncompromising": "Hoàn toàn giữ vững lập trường",
                "footer.text": "Được viết bằng ♥ đâu đó giữa giờ đến lớp và giờ ra phòng tập · Kết nối với Hiếu nhé.",
                "footer.social": "Không phải gr*ndr đâu nha"
            }
        };

        // ══════════════════════════════════════
        // LANGUAGE SWITCHER
        // ══════════════════════════════════════
        let currentLang = 'en';
        function applyLanguage(lang) {
            document.querySelectorAll('[data-i18n]').forEach(el => el.classList.add('switching'));
            setTimeout(() => {
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    const text = translations[lang][key];
                    if (text !== undefined) el.innerHTML = text;
                });
                if (lang === 'en') {
                    document.querySelector('[data-i18n="footer.text"]').innerHTML = 'Made with <span class="heart">♥</span> somewhere between a lecture and the gym · Let\'s connect, Hieu.';
                } else {
                    document.querySelector('[data-i18n="footer.text"]').innerHTML = 'Được viết bằng <span class="heart">♥</span> đâu đó giữa giờ đến lớp và giờ ra phòng tập · Kết nối với Hiếu nhé.';
                }
                document.documentElement.lang = lang;
                document.querySelectorAll('[data-i18n]').forEach(el => el.classList.remove('switching'));
            }, 180);
        }
        document.getElementById('lang-toggle-btn').addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'vi' : 'en';
            applyLanguage(currentLang);
            document.getElementById('lang-flag').textContent = currentLang === 'vi' ? '🇺🇸 EN' : '🇻🇳 VI';
            document.getElementById('lang-label').textContent = 'Switch to';
        });

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
