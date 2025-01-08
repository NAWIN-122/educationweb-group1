//ปุ่มถัดไปเเละย้อมกลับ
document.addEventListener('DOMContentLoaded', function () {
    const pages = [
        { url: 'topic1.html', title: '1. ความหมายของคุณธรรม' },
        { url: 'topic2.html', title: '2. วินัยและการรักษาวินัย' },
        { url: 'topic3.html', title: '3. โทษผิดวินัยมี 5 สถาน' },
        { url: 'topic4.html', title: '4. คุณธรรม จริยธรรมของครู' },
        { url: 'topic5.html', title: '5. จรรยาบรรณวิชาชีพครู' },
        { url: 'topic6.html', title: '6. แนวทางการพัฒนาคุณธรรม' },
        { url: 'topic7.html', title: '7. การพัฒนาคุณธรรม' }
    ];

    // หาหน้าปัจจุบัน
    const currentPage = window.location.pathname.split('/').pop();
    const currentIndex = pages.findIndex(page => page.url === currentPage);

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (currentIndex > 0) {
        prevButton.href = pages[currentIndex - 1].url;
        prevButton.style.display = 'inline-block';
    } else {
        prevButton.style.display = 'none';
    }

    if (currentIndex < pages.length - 1) {
        nextButton.href = pages[currentIndex + 1].url;
        nextButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'none';
    }
});

// ปุ่มham
/*document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });
});*/


//รูปสไลด์
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto slide
setInterval(() => {
    changeSlide(1);
}, 5000);

//ham
document.addEventListener('DOMContentLoaded', function () {
    // เลือก elements ที่จำเป็น
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');

    // ตรวจสอบว่ามี elements ครบ
    if (!hamburger || !mobileMenu || !overlay) {
        console.warn('Required mobile menu elements not found');
        return;
    }

    // ฟังก์ชันสำหรับเปิด/ปิดเมนู
    function toggleMobileMenu() {
        // สลับ class active ที่ elements ต่างๆ
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');

        // ถ้าปิดเมนู ให้ปิด dropdowns ทั้งหมดด้วย
        if (!mobileMenu.classList.contains('active')) {
            const dropdownMenus = mobileMenu.querySelectorAll('.dropdown-menu');
            dropdownMenus.forEach(menu => {
                menu.style.display = 'none';
            });
        }
    }

    // จัดการ click ที่ hamburger
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMobileMenu();
    });

    // จัดการ click ที่ overlay
    overlay.addEventListener('click', toggleMobileMenu);

    // จัดการ dropdowns ในเมนูมือถือ
    const dropdownToggles = mobileMenu.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const currentDropdown = this.nextElementSibling;
            const allDropdowns = mobileMenu.querySelectorAll('.dropdown-menu');

            // ปิด dropdowns อื่นๆ
            allDropdowns.forEach(dropdown => {
                if (dropdown !== currentDropdown) {
                    dropdown.style.display = 'none';
                }
            });

            // สลับการแสดงผล dropdown ปัจจุบัน
            const isDisplayed = currentDropdown.style.display === 'block';
            currentDropdown.style.display = isDisplayed ? 'none' : 'block';
        });
    });

    // ปิดเมนูเมื่อคลิกนอกเมนู
    document.addEventListener('click', function (e) {
        if (mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                toggleMobileMenu();
            }
        }
    });

    // ปิดเมนูเมื่อหน้าจอกว้างกว่า 768px
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
});

