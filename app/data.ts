export const personalInfo = {
    name: "Ronny Gunadi",
    role: "Portfolio Project",
    contact: {
        phone: "087797942735", // Updated to WhatsApp number
        email: "office.ronny.gunadi@gmail.com", // Preserving from previous knowledge
        linkedin: "https://www.linkedin.com/in/ronny-gunadi-860728128/", // Preserving from previous knowledge
        location: "Jakarta, Indonesia", // Preserving from previous knowledge
        github: "https://github.com/ronnygunadi97",
    },
    summary: "Portfolio Project by Ronny Gunadi. Source code cannot be provided, all confidential to each bank / clients.",
};

// Extracted from Portofolio Project.docx
// Order logic for images:
// image1.png -> PermataMobileX? (Wait, I need to guess the mapping or use generic ordering)
// Based on file names usually following document order:
// But unzip order might be arbitrary.
// Let's assign them sequentially and user can swap.
// 1. PermataMobileX
// 2. New BTN Mobile Banking
// 3. bale Syariah by BSN
// 4. New OCTO Mobile
// 5. BYOND by BSI
// 6. Tring! By Pegadaian

export const experience = [
    {
        company: "Portfolio Projects",
        role: "Project Showcase",
        period: "2018 - 2025",
        location: "Indonesia",
        highlights: [],
        projects: [
            {
                title: "PermataMobileX",
                year: "February 2018 - March 2021", // Inferred from 'less than 2 year joined' context
                tech: "Kony Visualizer Enterprise IDE, Java/Objective-C FFI",
                image: "/projects/permata_preview.png",
                link: "https://apps.apple.com/us/app/permata-me/id1323973644",
                description: "A full-featured digital banking app (rebranded as Permata ME in stores) for retail customers that supports account management, transfers, bill payments, card services, and app-based cardless ATM transactions with a focus on simple UX and wide product access."
            },
            {
                title: "New BTN Mobile Banking (bale by BTN)",
                year: "March 2021 - September 2021", // Review needed
                tech: "Swift, Carthage, VIPER architecture",
                image: "/projects/btn_preview.png",
                link: "https://apps.apple.com/us/app/bale-by-btn/id6443466424",
                description: "BTN’s transformed mobile app / super-app that consolidates BTN services into one interface with features like cashflow tracking, split-bill, product access and integrated BTN services aimed at retail and mortgage customers."
            },
            {
                title: "bale Syariah by BSN",
                year: "April 2024 - December 2025",
                tech: "Swift, Carthage, VIPER architecture",
                image: "/projects/bsn_preview.png",
                link: "https://apps.apple.com/us/app/bale-syariah-by-bsn/id6590610395",
                description: "BSN’s Sharia-compliant mobile banking variant offering standard mobile-banking transactions built around Islamic banking principles (sharia-compliant products and flows) for retail customers."
            },
            {
                title: "New OCTO Mobile",
                year: "September 2021 - March 2022",
                tech: "Swift, RxSwift, Cocoapods, VIPER architecture",
                image: "/projects/octo_preview.jpg",
                link: "https://apps.apple.com/us/app/octo-by-cimb-niaga/id505917174",
                description: "A modern “super-app” style mobile bank offering standard banking (transfer, payments, top-up), financial overview tools (cash-flow / assets), cardless ATM, regional/cross-border capabilities and lifestyle perks — positioned as an integrated digital branch experience."
            },
            {
                title: "BYOND by BSI",
                year: "April 2022 - November 2024",
                tech: "Swift, RxSwift, Cocoapods, VIPER architecture",
                image: "/projects/byond_preview.jpg",
                link: "https://apps.apple.com/us/app/byond-by-bsi/id6444697752",
                description: "A hybrid financial and lifestyle app from BSI that couples conventional banking functions (payments, transfers, investment) with Islamic-oriented features (prayer reminders, kiblat direction, Quranic content) plus social/charity tools (donations, zakat)."
            },
            {
                title: "Tring! By Pegadaian",
                year: "March 2025 - December 2025",
                tech: "SwiftUI, MVVM+R, Cocoapods",
                image: "/projects/tring_preview.png",
                link: "https://apps.apple.com/us/app/tring-by-pegadaian/id1350501409",
                description: "Pegadaian’s consumer finance app focused heavily on gold savings & micro-investment plus pawn, installment and bill-payment services — it combines financial services (gadai, cicil, buy/sell gold) with education, branch locator and loyalty features."
            }
        ]
    }
];

export const education = {
    institution: "Sanata Dharma University",
    degree: "Bachelor Degree of Computer Science",
    period: "2013 - 2017",
    logo: "/usd_logo.png"
};

export const skills = {
    technical: [
        "Swift", "RxSwift", "VIPER", "MVVM+R", "SwiftUI", "Cocoapods",
        "Carthage", "Kony Visualizer", "Java", "Objective-C", "PortSIP-SDK", "Anyline OCR",
        "Git", "SVN", "Swift Package Manager", "JavaScript", "UIKit", "Clean Architecture"
    ],
    management: [
        "Technical Leadership", "Delivery Management", "Budget Optimization",
        "Client Negotiation", "Source Code Management", "Timeline Planning"
    ],
    tools: [
        "Jira", "Confluence", "Git", "Postman", "Firebase", "Asana",
        "XCode", "Android Studio", "TRAE", "Antigravity",
        "XCode GPT-5 Coding Assistant", "Visual Studio", "JuneAI"
    ]
};
