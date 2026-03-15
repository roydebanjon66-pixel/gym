// ⚙️ TITAN ELITE CONFIGURATION & DATA
const TRAINER_DATA = {
    1: {
        name: "VIKTOR KANE",
        role: "Head Strength Coach",
        bio: "With over 12 years of experience in collegiate strength training, Viktor specializes in powerlifting and structural hypertrophy. He has trained national-level athletes and focuses on biomechanical efficiency.",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2070&auto=format&fit=crop",
        socials: { instagram: "#", twitter: "#" }
    },
    2: {
        name: "SARAH VANCE",
        role: "Nutrition Specialist",
        bio: "Sarah is a certified performance dietician. She blends clinical nutrition with practical performance modeling to help athletes achieve body recomposition without sacrificing energy levels.",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2070&auto=format&fit=crop",
        socials: { instagram: "#", facebook: "#" }
    },
    3: {
        name: "MARCUS STEEL",
        role: "Conditioning Lead",
        bio: "Marcus specializes in metabolic conditioning and high-intensity interval training. His routines are designed to push cardiovascular limits while maintaining lean muscle mass.",
        image: "https://images.unsplash.com/photo-1567013127596-14098816c23b?q=80&w=2070&auto=format&fit=crop",
        socials: { twitter: "#", youtube: "#" }
    },
    4: {
        name: "ELARA VOSS",
        role: "Yoga & Mobility Specialist",
        bio: "Elara focuses on functional range conditioning and athletic mobility. She helps power-focused athletes maintain flexibility and prevent injury through specialized recovery flows.",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
        socials: { instagram: "#", facebook: "#" }
    },
    5: {
        name: "JAXON REED",
        role: "Combat Specialist",
        bio: "A former professional kickboxer, Jaxon brings technical striking and tactical combat conditioning to TITAN ELITE. He specializes in hand speed and explosive power delivery.",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2070&auto=format&fit=crop",
        socials: { instagram: "#", youtube: "#" }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    initCursorGlow();
    initTrainerModal();
});

// 1. Navigation Logic
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links a');

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}

// 2. Scroll Reveal (GPU Accelerated)
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
}

// 3. Trainer Modal Logic
function initTrainerModal() {
    const modal = document.getElementById('trainerModal');
    const closeModal = document.getElementById('closeModal');
    const modalBody = document.getElementById('modalBody');

    if (!modal) return;

    // Handle Closing
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
}

function openTrainerModal(id) {
    const trainer = TRAINER_DATA[id];
    if (!trainer) return;

    const modal = document.getElementById('trainerModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-body-grid">
            <div class="modal-img">
                <img src="${trainer.image}" alt="${trainer.name}" style="width: 100%; border-radius: 8px;">
            </div>
            <div class="modal-text">
                <h2 class="text-accent" style="font-size: 2.5rem; margin-bottom: 10px;">${trainer.name}</h2>
                <h4 style="color: #fff; margin-bottom: 25px; letter-spacing: 2px;">${trainer.role}</h4>
                <p style="color: #a0a0a0; font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px;">${trainer.bio}</p>
                <div class="trainer-socials" style="opacity: 1; transform: none; display: flex; gap: 20px; font-size: 24px;">
                    ${Object.entries(trainer.socials).map(([platform, link]) => `
                        <a href="${link}" style="color: var(--primary)"><i class="fa-brands fa-${platform}"></i></a>
                    `).join('')}
                </div>
                <div style="margin-top: 40px;">
                    <a href="contact.html" class="btn btn-primary">BOOK A SESSION</a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

// 4. Cursor Glow
function initCursorGlow() {
    const glow = document.querySelector('.cursor-glow');
    if (!glow) return;

    window.addEventListener('mousemove', (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
}

// 5. Form Handling (Mock)
const ctaForm = document.querySelector('.cta-form');
if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = ctaForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = "SUCCESS ✓";
        btn.style.backgroundColor = "#00ff00";
        ctaForm.reset();
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "";
        }, 3000);
    });
}