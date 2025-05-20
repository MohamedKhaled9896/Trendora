window.onload = function() {
    // --- Simple Theme Switch ---
    const simpleSwitch = document.getElementById('simple-theme-switch');
    const body = document.body;
    const sliderIcon = document.querySelector('.slider-icon');

    function setTheme(dark) {
        if (simpleSwitch) {
            if (dark) {
                body.classList.add('dark');
                simpleSwitch.checked = true;
                if (sliderIcon) sliderIcon.textContent = '🌙';
            } else {
                body.classList.remove('dark');
                simpleSwitch.checked = false;
                if (sliderIcon) sliderIcon.textContent = '🌞';
            }
        }
    }

    if (simpleSwitch) {
        simpleSwitch.addEventListener('change', () => {
            const isDark = simpleSwitch.checked;
            setTheme(isDark);
            localStorage.setItem('trendora-theme', isDark ? 'dark' : 'light');
        });
    }

    const savedTheme = localStorage.getItem('trendora-theme');
    setTheme(savedTheme === 'dark');

    // --- Modal logic ---
    const products = document.querySelectorAll('.product');
    const modal = document.getElementById('product-modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalPrice = document.querySelector('.modal-price');
    const modalDesc = document.querySelector('.modal-desc');
    const closeModal = document.querySelector('.close-modal');
    const modalImg = document.getElementById('modal-img');

    products.forEach((product) => {
        const viewBtn = product.querySelector('.view-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const title = product.querySelector('h2').textContent;
                const price = product.querySelector('.price').textContent;
                const desc = product.querySelector('.desc').textContent;
                const imgSrc = product.querySelector('img').src;
                if (modalTitle) modalTitle.textContent = title;
                if (modalPrice) modalPrice.textContent = price;
                if (modalDesc) {
                    if (title.trim() === 'ماجيك دراي') {
                        modalDesc.innerHTML = `
<b>المميزات الرئيسية:</b>
<ol style="margin-top:1rem;">
<li><b>تبريد وتجفيف بالهواء البارد (Cool Air Drying)</b><br>
نظام مخصص لتجفيف الأقمشة الحساسة دون التسبب في تلف أو انكماش. مناسب للأنواع التالية:
<ul>
<li>الحرير والصوف</li>
<li>الطبعات الرقيقة أو المزخرفة</li>
</ul>
يمكنك تجفيف ملابسك الحساسة بأمان تام وراحة بال.
</li>
<li><b>التعقيم بالأيونات السالبة (Anion Sterilization)</b><br>
تقنية فعالة توفر حماية وتنظيفًا فائقين من خلال إطلاق الأيونات السالبة، وتساعد على:
<ul>
<li>تقليل نسبة البكتيريا</li>
<li>الحد من الروائح غير المرغوبة</li>
<li>تقليل الكهرباء الساكنة</li>
</ul>
</li>
<li><b>شاشة رقمية للتحكم</b><br>
واجهة استخدام سهلة تتيح لك ضبط الإعدادات بدقة.
</li>
<li><b>إعدادات ذكية للوقت والحرارة</b><br>
تحكم مرن يضمن نتائج مثالية حسب نوع القماش ودرجة التجفيف المطلوبة.
</li>
<li><b>تشغيل هادئ</b><br>
مصمم ليعمل بأقل مستوى من الضجيج لضمان راحة المستخدم.
</li>
</ol>`;
                    } else if (title.trim() === 'مروحة تكييف') {
                        modalDesc.innerHTML = `
<b>مكيف محمول متعدد الوظائف – تكييف، مروحة، فواحة، وإضاءة ليلية في جهاز واحد</b><br><br>
وفرنا لك الحل المثالي لمواجهة حرارة الصيف: جهاز ذكي يجمع بين التكييف، المروحة، الفواحة، وإضاءة ليلية، ليمنحك هواءً منعشًا أينما كنت، دون الحاجة إلى أجهزة متعددة أو استهلاك كهرباء عالي.<br><br>
<b>المميزات:</b>
<ol style="margin-top:1rem;">
<li><b>4 استخدامات في جهاز واحد:</b> يمكنك استخدامه كمكيف، مروحة، فواحة، أو إضاءة ليلية حسب الحاجة.</li>
<li><b>حل عملي ومناسب لكل منزل:</b> مثالي للاستخدام في الأجواء الحارة، ويوفر تجربة مريحة وفعالة.</li>
<li><b>تشغيل عبر USB:</b> لا يعتمد على الكهرباء المنزلية، يمكنك تشغيله بسهولة باستخدام اللابتوب أو باور بنك.</li>
<li><b>محمول وسهل النقل:</b> حجمه مناسب للاستخدام في المنزل، المكتب، السيارة أو أثناء التواجد في الكافيهات.</li>
<li><b>تبريد فوري باستخدام الثلج:</b> فقط أضف بعض مكعبات الثلج للحصول على هواء بارد ومنعش.</li>
<li><b>وحدة تحكم ذكية:</b> مزود بثلاثة مستويات للتحكم في قوة الهواء وسرعة التبريد.</li>
<li><b>مرونة في الاستخدام:</b> يعمل كمكيف عند إضافة الثلج، أو كمروحة عادية دون الحاجة للمياه.</li>
</ol>`;
                    } else if (title.trim() === 'غسالة متنقلة') {
                        modalDesc.innerHTML = `
<b>غسالة محمولة صغيرة بالموجات فوق الصوتية</b><br><br>
غسالة محمولة صغيرة تعمل بالموجات فوق الصوتية، تعمل بالطاقة توربو، تزيل الأوساخ، تنظيف الملابس، المنزل، السفر.<br><br>
<b>الاستخدامات والمميزات:</b>
<ol style="margin-top:1rem;">
<li>يمكنها غسل الأطباق والمواعين وتنظيف الملابس الخفيفة مثل: القمصان، الملابس الداخلية، الجوارب.</li>
<li>تستخدم أيضًا لتنظيف الخضروات والفواكه.</li>
<li>صغيرة الحجم، يمكن وضع الجهاز في الجيب أو حملها في الحقيبة.</li>
<li>غسالة تعمل بالموجات فوق الصوتية.</li>
<li>بها قواعد كواتش لتلتصق وتثبت على أي جانب.</li>
<li>تعمل الغسالة لمدة 30 دقيقة.</li>
<li>يتم توصيلها للعمل بمدخل USB.</li>
</ol>`;
                    } else {
                        modalDesc.textContent = desc;
                    }
                }
                if (modalImg) modalImg.src = imgSrc;
                // منطق عرض الوسائط حسب المنتج
                const modalSlider = document.querySelector('.magicdry-modal-slider');
                const modalVideo = document.querySelector('.magicdry-modal-video');
                const airfanSlider = document.querySelector('.airfan-modal-slider');
                const airfanVideo = document.querySelector('.airfan-modal-video');
                const clothescleanSlider = document.querySelector('.clothesclean-modal-slider');
                const clothescleanVideo = document.querySelector('.clothesclean-modal-video');
                const modalImgContainer = document.getElementById('modal-img-container');
                if (title.trim() === 'ماجيك دراي' && modalSlider && modalImgContainer) {
                    modalSlider.style.display = '';
                    if (modalVideo) {
                        modalVideo.style.display = '';
                        modalVideo.currentTime = 0;
                        modalVideo.play();
                    }
                    if (airfanSlider) airfanSlider.style.display = 'none';
                    if (airfanVideo) { airfanVideo.pause(); airfanVideo.style.display = 'none'; }
                    modalImgContainer.style.display = 'none';
                    // تفعيل السلايدر التلقائي
                    const images = modalSlider.querySelectorAll('img');
                    let current = 0;
                    function showImage(idx) {
                        images.forEach((img, i) => {
                            img.classList.toggle('active', i === idx);
                        });
                    }
                    showImage(current);
                    if (window.magicdryModalSliderInterval) clearInterval(window.magicdryModalSliderInterval);
                    window.magicdryModalSliderInterval = setInterval(() => {
                        current = (current + 1) % images.length;
                        showImage(current);
                    }, 3000);
                } else if (title.trim() === 'مروحة تكييف' && airfanSlider && airfanVideo && modalImgContainer) {
                    if (modalSlider) modalSlider.style.display = 'none';
                    if (modalVideo) { modalVideo.pause(); modalVideo.style.display = 'none'; }
                    airfanSlider.style.display = '';
                    airfanVideo.style.display = '';
                    airfanVideo.currentTime = 0;
                    airfanVideo.play();
                    modalImgContainer.style.display = 'none';
                } else if (title.trim() === 'غسالة متنقلة' && clothescleanSlider && clothescleanVideo && modalImgContainer) {
                    if (modalSlider) modalSlider.style.display = 'none';
                    if (modalVideo) { modalVideo.pause(); modalVideo.style.display = 'none'; }
                    if (airfanSlider) airfanSlider.style.display = 'none';
                    if (airfanVideo) { airfanVideo.pause(); airfanVideo.style.display = 'none'; }
                    clothescleanSlider.style.display = '';
                    clothescleanVideo.style.display = '';
                    clothescleanVideo.currentTime = 0;
                    clothescleanVideo.play();
                    modalImgContainer.style.display = 'none';
                    // تفعيل السلايدر التلقائي
                    const images = clothescleanSlider.querySelectorAll('img');
                    let current = 0;
                    function showImage(idx) {
                        images.forEach((img, i) => {
                            img.classList.toggle('active', i === idx);
                            img.style.display = i === idx ? '' : 'none';
                        });
                    }
                    showImage(current);
                    if (window.clothescleanModalSliderInterval) clearInterval(window.clothescleanModalSliderInterval);
                    window.clothescleanModalSliderInterval = setInterval(() => {
                        current = (current + 1) % images.length;
                        showImage(current);
                    }, 3000);
                } else {
                    if (modalSlider) modalSlider.style.display = 'none';
                    if (modalVideo) { modalVideo.pause(); modalVideo.style.display = 'none'; }
                    if (airfanSlider) airfanSlider.style.display = 'none';
                    if (airfanVideo) { airfanVideo.pause(); airfanVideo.style.display = 'none'; }
                    if (clothescleanSlider) clothescleanSlider.style.display = 'none';
                    if (clothescleanVideo) { clothescleanVideo.pause(); clothescleanVideo.style.display = 'none'; }
                    if (modalImgContainer) modalImgContainer.style.display = '';
                    if (modalImg) modalImg.src = imgSrc;
                }
                if (modal) modal.classList.add('show');
                // إزالة كلاس expanded حتى يظهر السكرول إذا زاد النص
                if (modalDesc) {
                    const oldBtn = modalDesc.parentElement.querySelector('.read-more-btn');
                    if (oldBtn) oldBtn.remove();
                    modalDesc.classList.remove('expanded');
                }
            });
        }
    });

    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

    // --- سلايدر صور منتج ماجيك دراي (تلقائي) ---
    const slider = document.querySelector('.magicdry-slider');
    if (slider) {
        const images = slider.querySelectorAll('img');
        let current = 0;
        function showImage(idx) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === idx);
            });
        }
        function nextImage() {
            current = (current + 1) % images.length;
            showImage(current);
        }
        showImage(current);
        setInterval(nextImage, 3000);
    }

    // --- Image Viewer Modal ---
    const imageViewerModal = document.getElementById('image-viewer-modal');
    const imageViewerImg = document.getElementById('image-viewer-img');
    const imageViewerPrev = document.getElementById('image-viewer-prev');
    const imageViewerNext = document.getElementById('image-viewer-next');
    const closeImageViewer = document.getElementById('close-image-viewer');
    // تعريف صور كل منتج
    const productImages = [
        [
            'magicdryprouduct/square_1.jpg',
            'magicdryprouduct/square_2.jpeg',
            'magicdryprouduct/square_3.jpeg'
        ],
        [
            'airfan/1.jpg',
            'airfan/main.avif'
        ],
        [
            'clothesclean/main.jpg',
            'clothesclean/1.jpg',
            'clothesclean/2.jpg',
            'clothesclean/3.jpg',
            'clothesclean/4.jpg'
        ]
    ];
    let currentProductIndex = 0;
    let currentImageIndex = 0;
    // إزالة تفعيل نافذة الصور من صور القائمة الرئيسية
    // document.querySelectorAll('.product-image img').forEach((img, idx) => {
    //     img.addEventListener('click', function(e) {
    //         e.stopPropagation();
    //         currentProductIndex = Math.floor(idx);
    //         currentImageIndex = 0;
    //         showImageViewer();
    //     });
    // });
    // تفعيل نافذة الصور فقط عند الضغط على الصور داخل النافذة المنبثقة
    // ماجيك دراي
    document.querySelectorAll('.magicdry-modal-slider img').forEach((img, idx) => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            currentProductIndex = 0;
            currentImageIndex = idx;
            showImageViewer();
        });
    });
    // مروحة تكييف
    document.querySelectorAll('.airfan-modal-slider img').forEach((img, idx) => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            currentProductIndex = 1;
            currentImageIndex = idx;
            showImageViewer();
        });
    });
    // صور غسالة متنقلة (المنتج الثالث)
    document.querySelectorAll('.clothesclean-modal-slider img').forEach((img, idx) => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            currentProductIndex = 2;
            currentImageIndex = idx;
            showImageViewer();
        });
    });
    function showImageViewer() {
        const images = productImages[currentProductIndex] || [];
        if (!images.length) return;
        imageViewerImg.src = images[currentImageIndex];
        imageViewerModal.style.display = 'flex';
        updateNavBtns();
    }
    function updateNavBtns() {
        const images = productImages[currentProductIndex] || [];
        imageViewerPrev.style.display = images.length > 1 ? '' : 'none';
        imageViewerNext.style.display = images.length > 1 ? '' : 'none';
    }
    imageViewerPrev.onclick = function(e) {
        e.stopPropagation();
        const images = productImages[currentProductIndex];
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImageViewer();
    };
    imageViewerNext.onclick = function(e) {
        e.stopPropagation();
        const images = productImages[currentProductIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImageViewer();
    };
    closeImageViewer.onclick = function() {
        imageViewerModal.style.display = 'none';
    };
    imageViewerModal.addEventListener('click', function(e) {
        if (e.target === imageViewerModal) imageViewerModal.style.display = 'none';
    });
}; 