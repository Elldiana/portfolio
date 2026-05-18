// HTML'deki hamburger ikonunu ve menü linklerini seçiyoruz
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Hamburger ikonuna tıklandığında bir olay tetikliyoruz
hamburger.addEventListener('click', () => {
    // navLinks elementine 'active' sınıfını ekle/çıkar (toggle)
    navLinks.classList.toggle('active');
});


// Proje detay sayfasında gösterilecek projelerin verilerini tanımlıyoruz

const projectsData = {
    "craftify": {
        title: "Craftify Web Portalı",
        subtitle: "Dinamik İçerik Yönetim Sistemi ve Veri Tabanı Entegrasyonu",
        about: "Craftify, kullanıcıların sürdürülebilir yaşam, DIY (Kendin Yap) projeleri ve ev trendleri hakkında içerikler üretebileceği, paylaşabileceği dinamik bir web portalıdır. Projenin temel amacı, karmaşık veri yapılarını optimize ederek kullanıcılara akıcı ve hızlı bir içerik tüketim deneyimi sunmaktır.",
        process: "Projenin backend mimarisinde ilişkisel veri tabanı tasarımı (MySQL) aktif olarak rol oynamıştır. Kullanıcı etkileşimleri, yorum satırları ve beğeni sistemleri asenkron JavaScript süreçleri ile desteklenmiştir. Tasarım tarafında ise Bootstrap kullanılarak tamamen mobil uyumlu (responsive) bir arayüz inşa edilmiştir.",
        languages: ["PHP", "JavaScript", "HTML5", "CSS3"],
        infrastructure: ["MySQL", "Bootstrap"],
        role: "Full-Stack Developer",
        date: "Aralık 2025",
        github: "https://github.com/Elldiana/craftify",
        images: ["assets/img/screens/craftify1.png", "assets/img/screens/craftify2.png", "assets/img/screens/craftify3.png", "assets/img/screens/craftify4.png",
        "assets/img/screens/craftify1a.png", "assets/img/screens/craftify1b.png", "assets/img/screens/craftify1c.png", "assets/img/screens/craftify1g.png"
        ]
    },
    "gunluk-mood": {
        title: "Günlük Mood Mobil Uygulaması",
        subtitle: "React Native ve Convex ile Gerçek Zamanlı Duygu Takibi",
        about: "Kullanıcıların günlük duygu durumlarını ve dijital alışkanlıklarını takip ederek anlamlı verilere dönüştürmelerini sağlayan mobil bir uygulamadır. Mobil Programlama dersi final projesi kapsamında baştan sona tasarlanıp geliştirilmiştir.",
        process: "Frontend mimarisinde React Native ve Expo kullanılarak çapraz platform (cross-platform) uyumlu bir arayüz inşa edilmiştir. Tip güvenliği ve ölçeklenebilirlik için proje %92 oranında TypeScript ile yazılmıştır. Backend ve veritabanı yönetimi için Convex kullanılarak, kullanıcı verilerinin sunucu ile anlık (real-time) senkronizasyonu sağlanmıştır.",
        languages: ["TypeScript", "JavaScript", "React Native"],
        infrastructure: ["Expo", "Convex (BaaS)", "npm"],
        role: "Mobile App Developer",
        date: "Bahar 2026",
        github: "https://github.com/Elldiana/Gunluk_Mood_ReactNative",
        isMobile: true,
        images: ["assets/img/screens/gm1.png", "assets/img/screens/gm2.png", "assets/img/screens/gm3.png", "assets/img/screens/gm4.png",
        "assets/img/screens/gm6.png", "assets/img/screens/gm7.png"
        ]
    },
   "miniweb": {
        title: "EmeliDiana Mini Web",
        subtitle: "Tailwind CSS ile Geliştirilmiş Statik Web Platformu",
        about: "Kullanıcı arayüzü tasarımında modern yaklaşımları test etmek ve temiz, hızlı prototipler oluşturmak amacıyla tasarlanmış bir web projesidir.",
        process: "Geliştirme sürecinde Tailwind CSS'in 'utility-first' (fayda odaklı) yaklaşımı kullanılarak, harici bir CSS dosyasına ihtiyaç duymadan doğrudan HTML üzerinden esnek ve duyarlı (responsive) bir tasarım inşa edilmiştir. Proje kaynak kodları GitHub üzerinde barındırılmakta olup, CI/CD mantığına uygun olarak GitHub Pages üzerinden anlık olarak canlı yayına (deploy) alınmıştır.",
        languages: ["HTML5", "CSS3","Tailwind CSS"],
        infrastructure: [],
        role: "Front-End Developer",
        date: "2024",
        github: "https://github.com/Elldiana/EmeliDiana-miniweb",
        isMobile: false, /* Bu bir web projesi olduğu için resimler tam ekran (alt alta) çıkacak */
        images: ["assets/img/screens/em1.png", "assets/img/screens/em2.png", "assets/img/screens/em3.png", "assets/img/screens/em4.png"]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

if (projectId && projectsData[projectId]) {
    const project = projectsData[projectId];

    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-subtitle').textContent = project.subtitle;
    document.getElementById('project-about').textContent = project.about;
    document.getElementById('project-process').textContent = project.process;
    document.getElementById('project-role').textContent = project.role;
    document.getElementById('project-date').textContent = project.date;
    document.getElementById('project-github-link').href = project.github;

    const langContainer = document.getElementById('project-languages');
    langContainer.innerHTML = '';
    project.languages.forEach(lang => {
        const span = document.createElement('span');
        span.textContent = lang;
        langContainer.appendChild(span);
    });

    const infraContainer = document.getElementById('project-infrastructure');
    infraContainer.innerHTML = '';
    project.infrastructure.forEach(infra => {
        const span = document.createElement('span');
        span.textContent = infra;
        infraContainer.appendChild(span);
    });

   // JS Kodumuzdaki bu kısım işi çözüyor:
    // Resim Galerisi Kısmını Şununla Değiştir:
    const galleryContainer = document.getElementById('project-gallery');
    if (galleryContainer) {
        galleryContainer.innerHTML = '';
        
        // Önce galerinin sınıfını varsayılana sıfırla
        galleryContainer.className = 'screenshot-gallery'; 
        
        // Eğer proje mobilse, özel sınıfımızı ekle
        if (project.isMobile) {
            galleryContainer.classList.add('mobile-gallery');
        }

        project.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = project.title;
            galleryContainer.appendChild(img);
        });
    }
}