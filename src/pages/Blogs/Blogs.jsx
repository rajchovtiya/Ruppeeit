import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const blogs = [
    {
        title: "Documents Required for UPSC Interview Checklist",
        desc: "Know exactly which documents to carry for your UPSC interview, how to prepare them right, and avoid common mistakes that can cost you the opportunity.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/d6e15005-0b9b-4691-a818-1260e7311ad4/e9ba2fd2b50547a1bbf95164ece97bd9.webp",
        date: "28 Aug 2025",
    },
    {
        title: "UPSC Rank Required for IRS Entry",
        desc: "Wondering about the UPSC rank required for IRS? Get clear insights on category-wise cut-offs, recent trends, and practical tips to help you secure your spot.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/1faeda2b-0959-4076-bbab-f6a0be533fba/da5bb472a54f4da2a45770c25dd51289.webp",
        date: "15 Sep 2025",
    },
    {
        title: "Best Personal Loan App in India Without Salary Slip",
        desc: "Searching for personal loans without a salary slip? Find top loan apps in India offering fast, hassle-free loans with minimal documentation requirements.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/d910c3e0-605a-4cd2-9756-d1f29c13ced6/8376eef327424641b5a33aca1af7d4db.webp",
        date: "30 Sep 2025",
    },
    {
        title: "16 Hours Study Timetable for Effective Learning",
        desc: "Falling behind in studies? Use this 16 hours study timetable to structure your day, improve focus, and complete your syllabus stress-free.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/c9eb8707-75e6-4833-88c9-553c7cded6d5/eb180d2f15ea45a9bdabb5fbd4f0b92c.webp",
        date: "27 Aug 2025",
    },
    {
        title: "Effective Study Timetable for Class 12 Success",
        desc: "Plan your success with a smart study timetable for class 12. Learn how to balance subjects, revision, and breaks to stay calm, consistent, and confident.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/f2e85fd2-3b98-4145-9ca8-546c56e34a43/2de772a0c444483ebc309c07b4366720.webp",
        date: "27 Aug 2025",
    },
    {
        title: "Best Personal Loan Apps for Self-Employed in India",
        desc: "Need a loan as a self-employed professional? Find the best personal loan apps offering quick disbursal and flexible repayment options to meet your needs.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/c1f9a3d3-ce59-4eef-bc2c-ae034fcfdfc5/fc55bac71b95445c9dc48bac818ebd4f.webp",
        date: "27 Aug 2025",
    },
    {
        title: "What are the Books Required for UPSC Prelims and Mains?",
        desc: "Overwhelmed by UPSC preparation? Discover the best books required for UPSC, with a clear roadmap for each subject in this detailed guide.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/f7d79cc5-21be-4f10-847f-a193d27229d2/3c84f6d8eb2a490199dded24a0aa85eb.webp",
        date: "27 Aug 2025",
    },
    {
        title: "Best 8 Reasons for Getting a Personal Loan",
        desc: "Need quick financial relief? Learn how personal loans help with emergencies, education, and weddings, offering flexibility and fast approval without collateral",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/5a13b4c6-11f6-4e7a-98cc-c8743d003735/88a3fef8099d432e892405141ee14d34.webp",
        date: "27 Aug 2025",
    },
    {
        title: "Height Required for UPSC – IAS, IPS, IFS & Other Services",
        desc: "What’s the height required for UPSC? Explore all physical criteria, from height to vision, to ensure you meet the medical standards.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/91f1ce60-9329-491c-8b9f-d4397f6ec592/fcc6be578eb7438db2b713053fe7a389.webp",
        date: "27 Aug 2025",
    },
    {
        title: "18-Hour Study Timetable for NEET Preparation",
        desc: "Master your NEET prep with our detailed 18 hours study timetable for NEET, designed to boost focus, cover the syllabus, and improve retention effectively.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/02cd17fc-8767-4acb-a218-902e1e42857b/7325fc15b33548f7868b86787cf6efd9.webp",
        date: "20 Aug 2025",
    },
    {
        title: "NEET 2026 Syllabus: Subject-wise Details & Changes",
        desc: "Struggling to navigate the NEET 2026 syllabus? Get a detailed breakdown of subject-wise topics to plan your preparation effectively.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/b11885f7-8bdc-4f37-b28b-4c91eea6854d/d11378ea453144eeb7a29d96efa92454.webp",
        date: "20 Aug 2025",
    },
    {
        title: "Domestic Content Requirement in UPSC Preparation",
        desc: "Need clarity on the Domestic content requirement for UPSC? Learn how India’s renewable energy policy affects your prep and key areas like energy security.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/e0f33128-22db-42f5-97f3-ebb98f55dc01/e1f9b4b446a54fcca2db75778bab2c28.webp",
        date: "20 Aug 2025",
    },
    {
        title: "Margin Requirements in Monetary Policy Explained",
        desc: "Margin requirements explained for UPSC: Learn how RBI uses them as a credit control tool in its monetary policy framework.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/e64a8cc4-2eec-41b3-9de0-4e304e1f45cc/9d120cba604d4ba381b99ecb7fccb5e8.webp",
        date: "20 Aug 2025",
    },
    {
        title: "Best Personal Loans from NBFCs in 2025: A Quick Guide",
        desc: "Need a quick loan without the bank drama? Discover top NBFCs in 2025 offering fast, hassle-free personal loans; low paperwork, faster approvals!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/48fa8eb7-4e3b-4ca8-9983-37cf28ffe4be/c8978fe98eae49f2bba9689e467acf19.webp",
        date: "20 Aug 2025",
    },
    {
        title: "Understanding Upstream and Downstream Requirements for UPSC",
        desc: "Falling behind in UPSC? Get a clear breakdown of upstream and downstream processes in UPSC preparation to boost your exam performance and efficiency.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/e5946df3-5e3a-4f32-afb1-a083f8dc422c/6b439a2c29e44cc883749475bb566f4a.webp",
        date: "20 Aug 2025",
    },
    {
        title: "How Many Marks Are Required to Clear UPSC in 2025?",
        desc: "Find out how many marks are required to clear UPSC and learn the best strategies for tackling the Prelims and Mains in this comprehensive guide.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/9d1615f4-f4b6-4530-908d-c13cc69dd3e6/f8aa0deb5e674af19562d9361418c622.webp",
        date: "13 Aug 2025",
    },
    {
        title: "How Many Years of Current Affairs Required for UPSC Preparation?",
        desc: "Curious about how many years of current affairs are required for UPSC? Get insights on covering the right timeframes for a smart, efficient prep.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/23797701-0202-4dba-b53d-98a351ea277a/e85ca29fa3b14b91863944cce2f4bb70.webp",
        date: "13 Aug 2025",
    },
    {
        title: "NEET 2026 Exam Date and Schedule Overview",
        desc: "Get the complete overview of NEET 2026 exam dates, registration schedule, admit card release, and result timeline. Stay updated and plan preparation effectively.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/ffee4125-f9b1-45ad-947e-6e194038f4ad/1770db8a34b94c878711eef5c29439e0.webp",
        date: "24 Jul 2025",
    },
    {
        title: "How Much Time is Required for UPSC Preparation",
        desc: "Curious how much time is required to prepare for UPSC? Discover realistic timelines, prep strategies, and what toppers actually recommend for success.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/10ad652b-14f7-4126-a6bd-cbc50aa3b536/6da34fb55ec545399da506a7b9175b2f.webp",
        date: "24 Jul 2025",
    },
    {
        title: "Best Loan Apps for Students in 2025",
        desc: "Running low on cash again? Discover 2025’s best personal loan app for students - fast, secure, and built to handle real college life needs.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/cdcef921-2767-4ef9-a293-39397d37934d/52396f9f7c5046ea8c43ba487c024892.webp",
        date: "24 Jul 2025",
    },
    {
        title: "UPSC Eligibility Criteria 2025: Age Limit and Qualification",
        desc: "Discover the complete UPSC Eligibility Criteria for 2025, including age limits and category-wise relaxations. Stay updated and plan your preparation smartly.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/3cd94c0d-1b85-452f-bbcb-2598f91012e2/201a20bec6fe4f97912d6ac379400537.webp",
        date: "16 Jul 2025",
    },
    {
        title: "10 Hours Study Timetable for Effective Daily Schedule",
        desc: "Master a 10 hours study time table with tailored schedules, focus techniques, and health tips. Start your daily study plan now for effective learning!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/9f65a510-b720-462c-b8e4-a44d43372567/7f9411af5ee14322b40240e6918a1235.webp",
        date: "16 Jul 2025",
    },
    {
        title: "UPSC Study Timetable for 2025 Preparation",
        desc: "Plan your UPSC 2025 preparation with a study timetable. Get subject-wise schedules and exam strategies to stay consistent with the Civil Services Exam!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/2a96271f-d522-49e1-ba62-c511a3498feb/3ac7302dd3f44503ac3400733b26b4ce.webp",
        date: "16 Jul 2025",
    },
    {
        title: "Documents Required for UPSC Prelims & Mains Exam 2025",
        desc: "A complete guide on documents required for UPSC Prelims, Mains, and Interview stages. Learn what to carry, what to avoid, and how to stay exam-ready!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/5fe07621-bea5-45b3-aff0-621363648bfd/93f1d6944d0a4aa982426deeb561f4cf.webp",
        date: "16 Jul 2025",
    },
    {
        title: "Top Online Learning Platforms in 2025",
        desc: "Discover the top online learning platforms with flexible, high-quality videos across topicss. Explore tools for upskilling, growth, and lifelong learning!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/ab9dd196-6869-491e-b6cd-c8c62bbe0eac/1cb4ae53023b4d3ab82636f34442de98.webp",
        date: "7 Jul 2025",
    },
    {
        title: "15+ Easy Online Jobs to Earn Money from Home in India",
        desc: "Discover practical and flexible ways to make money part-time. Explore side hustles, gigs, and income ideas that fit your schedule and boost your earnings!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/23a38da3-7a1c-4d61-a64b-91952f6010ab/9d67f94d454d46328c8422692dc0311d.webp",
        date: "7 Jul 2025",
    },
    {
        title: "CBSE Class 10 Study Time Table 2025-26: Daily Guide",
        desc: "Master your CBSE Class 10 exams with an effective study time table for class 10. Plan your subjects, manage time, and reduce stress. Create your personalized schedule.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/eaa9f0d6-c110-451b-94a3-faf815d701c2/e2c1a2e6bf1b45679bae40cab8c30d66.webp",
        date: "7 Jul 2025",
    },
    {
        title: "Best Apps for Instant Personal Loans in India",
        desc: "Looking for fast, hassle-free personal loans? Explore the best instant loan apps in India with features, pros, and cons, and apply directly from your smartphone.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/6a9ebbdd-ddc5-44c1-a956-ea5118047cac/5bab2fa032ab448d8693155144b4d8a9.webp",
        date: "7 Jul 2025",
    },
    {
        title: "How to Use Online Surveys to Earn Money?",
        desc: "Discover how to use online surveys to earn money from home. Learn which platforms pay the most, how to avoid scams, and to maximise your earnings efficiently!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/7d0c689b-c561-484e-8cb5-1df291dbc744/869c4cd62d8343c5b6efe7bf9302d141.webp",
        date: "2 Jul 2025",
    },
    {
        title: "How to Record Google Meet on Any Device with Audio",
        desc: "Learn how to record Google Meet sessions with audio on any device, including Android and iOS. Step-by-step guide for capturing meetings with clear sound!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/2b30eb7f-6c04-4741-b983-12a98761da36/d510deefc66c4b2882301188c5388a3d.webp",
        date: "2 Jul 2025",
    },
    {
        title: "Top AI Applications and Examples in the Real World",
        desc: "Discover how AI revolutionizes real-world tasks. Learn how to leverage AI to boost efficiency, enhance customer experience, and stay ahead of the competition!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/3c0f890d-bcd4-4d54-a4b2-5731ee989489/82fbb7b78eed40e1aac081fe1cf0cc20.webp",
        date: "17 Jun 2025",
    },
    {
        title: "Setting Up a WhatsApp Business Profile: Step-by-Step Guide",
        desc: "Quickly set up a WhatsApp Business account! Download the app, verify your number, personalize your profile, and enhance communication.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/d24e6215-8944-44bc-81e0-9cdef9c32e65/ff5d02cee843485c9fae7c977d8b5ed3.webp",
        date: "17 Jun 2025",
    },
    {
        title: "Setting Up a WhatsApp Business Profile: Step-by-Step Guide",
        desc: "Quickly set up a WhatsApp Business account! Download the app, verify your number, personalize your profile, and enhance communication.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/d24e6215-8944-44bc-81e0-9cdef9c32e65/ff5d02cee843485c9fae7c977d8b5ed3.webp",
        date: "17 Jun 2025",
    },
    {
        title: "How Artificial Intelligence is Used in Daily Life",
        desc: "Discover examples of artificial intelligence in daily life, from smart assistants to fraud detection. Explore how AI is making daily tasks faster and smarter!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/d24e6215-8944-44bc-81e0-9cdef9c32e65/ff5d02cee843485c9fae7c977d8b5ed3.webp",
        date: "6 Jun 2025",
    },
    {
        title: "Top Online Learning Platforms for 2025",
        desc: "Explore the top online course platforms with powerful features and offerings, perfect for you to learn and grow holistically. Find your ideal platform with us!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/7adc385b-e7a8-4c99-9e95-6aff16655e90/46f1b9cbec6f48abbb14e49eda86968d.webp",
        date: "6 Jun 2025",
    },
    {
        title: "Government Online Part-Time Jobs in India",
        desc: "Looking for flexible government online part-time jobs in India? Explore online roles that offer work-from-home convenience. Start your application today!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/c207a141-f676-449c-8673-f047445648e0/a4ffe86dc6eb45f19aa375ec12187346.webp",
        date: "6 Jun 2025",
    },
    {
        title: "How to Find Part-Time Work Opportunities in India",
        desc: "Discover flexible part-time job opportunities across India. Build valuable experience, and enjoy the freedom to work on your terms. Start your journey today!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/1e4bf236-a6ba-4f99-a58b-6461c3e85b88/6ed1f33d12bd4b1789867dbc11b67874.webp",
        date: "6 Jun 2025",
    },
    {
        title: "How to Find Part-Time Jobs for Students",
        desc: "Looking for ways to balance studies and earn extra income? Discover how to find part-time jobs for students, explore popular job portals, and get tips to manage work",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/883c968b-8059-4a8c-abc0-9cb24e97cb59/2afff8ea728747a9939ddb5da9a4391e.webp",
        date: "6 Jun 2025",
    },
    {
        title: "How to take a screenshot on Android, iPhone or Samsung phone?",
        desc: "Find out how to take a screenshot on a mobile phone, whether you use Android, iPhone, or Samsung. Follow simple, step-by-step methods to capture your screen easily.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/ca2beb79-9cc2-4edc-9bf0-02c532038c26/db70682cf02a4d1083c97de2e945c369.webp",
        date: "6 Jun 2025",
    },
    {
        title: "How to Change Your Android Phone's Ringtone Using a Song",
        desc: "Set a song as a ringtone on your Android. Learn how to set a ringtone in Android. Open Settings, navigate to Ringtone, add a song, and save. Personalise your calls now!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/f6de7a3e-f369-4555-b14f-0c6fd97bf715/e64e0d72e7384b0aa0de2974e9039beb.webp",
        date: "6 Jun 2025",
    },
    {
        title: "Creating a PDF File Using your Mobile Device",
        desc: "Learn how to make a PDF on your phone using built-in features. No third-party apps are needed. Convert documents, photos, or emails to PDF quickly on Android or iPhone.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/e22a2bce-e9cb-48f2-af2c-09c9d892e568/342a0234d9dd499b968cc3b72094e814.webp",
        date: "6 Jun 2025",
    },
    {
        title: "Unique Ideas for YouTube Channel That Bring Real Views",
        desc: "Find unique ideas for YouTube channel success to attract real viewers and rapidly grow your channel, using anonymous content or niche hobbies.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/93020571-c877-45af-8dfb-88463f823e1c/f3e1c3aa0ce54062855135fe1ba39a16.webp",
        date: "31 May 2025",
    },
    {
        title: "Your First 10 Videos Will Be Trash — And That’s Normal",
        desc: "Discover the best content for YouTube beginners and why your first 10 videos being imperfect is actually a good sign for future success!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/0f0e0d39-2c71-4a6f-9039-b145bf98f961/c43ec9b8031349488fae97d323ba448f.webp",
        date: "31 May 2025",
    },
    {
        title: "Speak English Like Indians. Stop Copying American Accent",
        desc: "Explore the differences between the American accent vs Indian accent, and why it's better to embrace your unique Indian way of speaking English.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/0b43f459-4e25-4c21-82b2-5f3773c5b030/1923418c691847d88179a092d304940a.webp",
        date: "31 May 2025",
    },
    {
        title: "Learn to Speak English Without Learning Grammar First",
        desc: "Discover practical ways to learn English without grammar rules. Focus on speaking, listening, and using real phrases instead of complex rules.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/3d706133-cad0-4bf6-b42f-7cf0c78b167b/78c9cacb7a2c4c72833e70a95a434a91.webp",
        date: "30 May 2025",
    },
    {
        title: "Watching Movies Won’t Make You Fluent — Do This Instead",
        desc: "Want to learn to speak English fluently? Discover why movies aren’t enough and how to actively practice English for real-life conversations and fluency!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/3e03b692-4bdb-4c25-bd0a-2c986b5bd75f/5bc4e1a616eb46b3951dc6649bf7d0de.webp",
        date: "29 May 2025",
    },
    {
        title: "MrBeast Didn’t Go Viral Overnight — Why You’re Not Failing",
        desc: "Struggling with how to viral video on YouTube? Learn why MrBeast's success wasn't overnight and why your YouTube journey isn't failing",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/79335ca4-dd50-41d2-98a3-0a7d3718b73b/8ce8473a199944fa8bc17eca312e523a.webp",
        date: "27 May 2025",
    },
    {
        title: "50+ YouTube Gaming Channel Name Ideas for Every Gamer",
        desc: "Grab the best youtube gaming channel name ideas to create a fun, catchy, and unique gaming brand that your viewers will remember and love!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/61d50e5d-eb14-4877-bd70-02edd3d4bc4a/8c6ab85a6f324db195d1b35970474d0c.webp",
        date: "27 May 2025",
    },
    {
        title: "Find an Instagram Account Using Phone Number",
        desc: "Learn how to find an Instagram account by phone number. Ensure contact sync, log in, access settings, and initiate the discovery process. Read on and learn more!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/ee402895-3b31-4ad7-9605-3bdd09f9b50c/b01976af8c98428abb4eb6ddf844c0ea.webp",
        date: "26 May 2025",
    },
    {
        title: "How to Check Bank Balance from Phone",
        desc: "Learn how to check bank account balance from phone in an effortless way. Ensure security and convenience. Read further to know about the detailed process!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/bf2fcc18-7305-4acd-893e-13d72ca33345/13d83b1aca9b489c8d178e7024e3daf8.webp",
        date: "26 May 2025",
    },
    {
        title: "Check Your Android Phone's Model Number: A Simple Guide",
        desc: "Check your Android phone model number easily. Use Settings, printed info, or apps for reliable results. Click to find your method!",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/8ffb5458-112f-4786-afea-62e0c0c663fa/369254e152ec4d54bd6a2f26ad765ce8.webp",
        date: "26 May 2025",
    },
    {
        title: "How to Scan a QR Code on Android and iPhone",
        desc: "Learn how to quickly scan a QR code on Android and iPhone using your phone’s camera or Google Lens. Discover easy steps to enable fast access on iPhone’s Control Center.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/eaf51361-ccc7-468a-9377-211f404c93c8/ae943a1423bb4daea8e7fab2bccad6b3.webp",
        date: "26 May 2025",
    },
    {
        title: "8 Faceless YouTube Channel Ideas That Don’t Need Face Reveal",
        desc: "Find 8 faceless YouTube channel ideas that let you share gaming content without revealing your identity and still connect with fans.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/f28248c9-15ab-407d-b9a4-f6fe08f32d47/5238130474ad40a880e61ce4ffc26cd7.webp",
        date: "26 May 2025",
    },
    {
        title: "Creative Instagram Bio Ideas to Make Your Profile Pop",
        desc: "Elevate your profile with creative Instagram bio ideas that reflect your personality. Stand out with unique, catchy, and fun bios that make a statement.",
        img: "https://cloudflare-images.seekho.in/blog-image/compressed-banner/a719a076-f0db-4e09-9054-477cdad2a7ab/f886f3cf8ba24c5f88033fbb7c64d6df.webp",
        date: "23 May 2025",
    },
];


gsap.registerPlugin(ScrollTrigger);

function Blogs() {
    const blogRefs = useRef([]);

    useEffect(() => {
        // clear previous refs (in case of hot reload)
        const elements = blogRefs.current;

        // Animate each blog card separately
        elements.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 100 }, // start state
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el, // each blog card is its own trigger
                        start: "top 80%", // start animation when 80% of viewport hits
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);


    return (
        <div className="padding bg-black min-h-screen py-12 mt-10">
            <div className="max-w-[1100px] mx-auto">
                <div className="flex flex-col gap-8">
                    {blogs.map((blog, i) => (
                        <article
                            key={i}
                            ref={(el) => (blogRefs.current[i] = el)} // store each card ref
                            className="bg-[#0b0b0b] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-xl scrolstrigs"
                        >
                            <div className="flex flex-col md:flex-row items-stretch">
                                {/* Image */}
                                <div className="md:w-1/3 w-full overflow-hidden">
                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        className="w-full h-48 md:h-full object-cover about-img"
                                    />
                                </div>

                                {/* Content */}
                                <div className="md:w-2/3 w-full p-6 flex flex-col justify-between about-text">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-semibold text-[#FEB201] mb-3">
                                            {blog.title}
                                        </h2>
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                            {blog.desc}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="./img/logoru.png"
                                                alt="Rupeeit"
                                                className=" rounded-full object-cover max-w-[100px]"
                                            />
                                            <div>
                                                <p className="text-sm text-white font-light">
                                                    Rupeeit Official
                                                </p>
                                                <p className="text-xs text-gray-400">{blog.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
