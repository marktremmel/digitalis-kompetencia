// Comprehensive vocabulary for OKM Digital Competency
// Organized by the 4 content framework domains

export const vocabularyEn = [
    // ════════ DIGITAL LITERACY ════════
    {
        id: 'v01', term: 'File', category: 'Digital Literacy',
        definition: 'A unit containing data, identified by a name and an extension, stored by a computer.',
        essential: true, didYouKnow: 'A file\'s name and extension (e.g., .docx, .jpg) determine which program can open it!'
    },
    {
        id: 'v02', term: 'Directory (Folder)', category: 'Digital Literacy',
        definition: 'A container used to organize files and other folders on a computer.',
        essential: true
    },
    {
        id: 'v03', term: 'Extension', category: 'Digital Literacy',
        definition: 'The part after the file name (e.g., .pdf, .mp3) that indicates the file type.',
        essential: true, didYouKnow: 'Windows hides extensions by default – it\'s a good idea to turn on their display!'
    },
    {
        id: 'v04', term: 'Browser', category: 'Digital Literacy',
        definition: 'A program used to view websites (e.g., Chrome, Firefox, Safari, Edge).',
        essential: true
    },
    {
        id: 'v05', term: 'URL', category: 'Digital Literacy',
        definition: 'Uniform Resource Locator – the unique "internet address" of a webpage (e.g., https://www.example.com/page).',
        essential: false, didYouKnow: 'A URL has three main parts: protocol (https), domain name (example.com), and path (/page).'
    },
    {
        id: 'v06', term: 'Search Engine', category: 'Digital Literacy',
        definition: 'A service that searches the web based on keywords (e.g., Google, Bing, DuckDuckGo).',
        essential: true
    },
    {
        id: 'v07', term: 'Raster Graphics', category: 'Digital Literacy',
        definition: 'An image format made up of pixels. Becomes blocky when zoomed in (e.g., .jpg, .png, .bmp).',
        essential: false
    },
    {
        id: 'v08', term: 'Vector Graphics', category: 'Digital Literacy',
        definition: 'An image format made of mathematical shapes. Stays sharp even when zoomed in (e.g., .svg).',
        essential: false
    },
    {
        id: 'v09', term: 'Fake News', category: 'Digital Literacy',
        definition: 'Intentionally misleading information that appears to be true, spread as news.',
        essential: true, didYouKnow: 'Fake news spreads 6x faster on social media than real news!'
    },
    {
        id: 'v10', term: 'Digital Footprint', category: 'Digital Literacy',
        definition: 'All the data and traces we leave behind online (posts, searches, purchases).',
        essential: true, didYouKnow: 'Even deleted posts can leave a trace on servers or in others\' screenshots!'
    },
    {
        id: 'v11', term: 'Netiquette', category: 'Digital Literacy',
        definition: 'The unwritten rules of online behavior (don\'t write in all caps, be polite, etc.).',
        essential: true
    },
    {
        id: 'v12', term: 'Deepfake', category: 'Digital Literacy',
        definition: 'An AI-generated, highly realistic but fake image, audio, or video.',
        essential: true, didYouKnow: 'The word deepfake comes from "deep learning" and "fake".'
    },
    {
        id: 'v13', term: 'Creative Commons (CC)', category: 'Digital Literacy',
        definition: 'A licensing system that determines how you can use freely shared content.',
        essential: false
    },
    {
        id: 'v14', term: 'BCC (Blind Carbon Copy)', category: 'Digital Literacy',
        definition: 'An email field where recipients cannot see each other\'s email addresses.',
        essential: false
    },
    {
        id: 'v15', term: 'HTML', category: 'Digital Literacy',
        definition: 'HyperText Markup Language – the markup language used to structure web pages.',
        essential: false, didYouKnow: 'Tim Berners-Lee invented it in 1991, and it has been the foundation of the web ever since!'
    },
    {
        id: 'v16', term: 'Header and Footer', category: 'Digital Literacy',
        definition: 'Repeating text at the top (header) and bottom (footer) of every page in a document.',
        essential: false
    },
    {
        id: 'v17', term: 'Mail Merge', category: 'Digital Literacy',
        definition: 'Automated generation of personalized letters from a data source (e.g., an Excel spreadsheet).',
        essential: false
    },

    // ════════ DATA & DATABASE MANAGEMENT ════════
    {
        id: 'v20', term: 'Data', category: 'Data & Database Management',
        definition: 'A raw, unprocessed fact or figure (e.g., 37, "Budapest", 2025).',
        essential: true
    },
    {
        id: 'v21', term: 'Information', category: 'Data & Database Management',
        definition: 'Processed data placed into a meaningful context (e.g., "The patient\'s body temperature is 37°C").',
        essential: true
    },
    {
        id: 'v22', term: 'GDPR', category: 'Data & Database Management',
        definition: 'General Data Protection Regulation – the EU\'s data protection regulation that protects personal data.',
        essential: true, didYouKnow: 'Violating the GDPR can result in a fine of up to 4% of a company\'s revenue!'
    },
    {
        id: 'v23', term: 'Personal Data', category: 'Data & Database Management',
        definition: 'Any information by which a person can be identified (name, address, SSN, email).',
        essential: true
    },
    {
        id: 'v24', term: 'Cell Reference', category: 'Data & Database Management',
        definition: 'A reference to a cell in a spreadsheet using its coordinates, e.g., A1, B3, C10.',
        essential: false
    },
    {
        id: 'v25', term: 'Function (Spreadsheet)', category: 'Data & Database Management',
        definition: 'A predefined calculation in a spreadsheet, e.g., SUM, AVERAGE, MAX, MIN.',
        essential: true
    },
    {
        id: 'v26', term: 'Primary Key (PK)', category: 'Data & Database Management',
        definition: 'A unique identifier in a database table – every row has a different value.',
        essential: false, didYouKnow: 'An auto-incrementing number (ID) is usually the primary key.'
    },
    {
        id: 'v27', term: 'Foreign Key (FK)', category: 'Data & Database Management',
        definition: 'A field that links to the primary key of another table, connecting the tables.',
        essential: false
    },
    {
        id: 'v28', term: 'SQL', category: 'Data & Database Management',
        definition: 'Structured Query Language – a language used to query and manage databases.',
        essential: false, didYouKnow: 'SQL dates back to the 1970s, but it remains the most widely used database language today!'
    },
    {
        id: 'v29', term: 'Big Data', category: 'Data & Database Management',
        definition: 'Massive amounts of varied and rapidly generated datasets.',
        essential: false, didYouKnow: 'The 3 Vs: Volume, Variety, and Velocity.'
    },
    {
        id: 'v30', term: 'Data Mining', category: 'Data & Database Management',
        definition: 'The automated discovery of hidden patterns and correlations in large datasets.',
        essential: false
    },
    {
        id: 'v31', term: 'Conditional Formatting', category: 'Data & Database Management',
        definition: 'A spreadsheet feature that automatically formats cells based on rules (e.g., red if < 50).',
        essential: false
    },

    // ════════ ALGORITHMS & PROGRAMMING ════════
    {
        id: 'v40', term: 'Algorithm', category: 'Algorithms & Programming',
        definition: 'A precise, unambiguous sequence of steps to solve a problem.',
        essential: true, didYouKnow: 'The word comes from the name of the Arab mathematician, al-Khwarizmi!'
    },
    {
        id: 'v41', term: 'Flowchart', category: 'Algorithms & Programming',
        definition: 'A graphical representation showing the steps of an algorithm with shapes (diamond=decision, rectangle=process).',
        essential: true
    },
    {
        id: 'v42', term: 'Variable', category: 'Algorithms & Programming',
        definition: 'A named storage location in a program whose value can change.',
        essential: true
    },
    {
        id: 'v43', term: 'Loop', category: 'Algorithms & Programming',
        definition: 'A programming structure that repeats a block of code based on a condition.',
        essential: true, didYouKnow: 'If the exit condition is never met, an infinite loop occurs!'
    },
    {
        id: 'v44', term: 'Conditional Statement (If/Else)', category: 'Algorithms & Programming',
        definition: 'A programming structure that chooses between two different paths based on a condition.',
        essential: true
    },
    {
        id: 'v45', term: 'Sequence', category: 'Algorithms & Programming',
        definition: 'The sequential execution of steps in order.',
        essential: false
    },
    {
        id: 'v46', term: 'Block Programming', category: 'Algorithms & Programming',
        definition: 'Visual programming using interlocking blocks (e.g., Scratch, Blockly).',
        essential: true
    },
    {
        id: 'v47', term: 'Sensor', category: 'Algorithms & Programming',
        definition: 'A device that measures the environment (temperature, light, distance) and signals the controller.',
        essential: false
    },
    {
        id: 'v48', term: 'Machine Learning (ML)', category: 'Algorithms & Programming',
        definition: 'A branch of artificial intelligence where the machine learns to recognize patterns from data.',
        essential: true, didYouKnow: 'AI doesn\'t "think" – it recognizes statistical patterns in large datasets!'
    },
    {
        id: 'v49', term: 'AI Hallucination', category: 'Algorithms & Programming',
        definition: 'When an AI model confidently generates false information as if it were true.',
        essential: true
    },
    {
        id: 'v50', term: 'Large Language Model (LLM)', category: 'Algorithms & Programming',
        definition: 'An AI trained on a massive body of text, capable of generating text (e.g., ChatGPT, Gemini).',
        essential: false, didYouKnow: 'LLMs don\'t "know" the truth – they predict the most likely next word.'
    },
    {
        id: 'v51', term: 'Prompt', category: 'Algorithms & Programming',
        definition: 'An instruction or question given to an AI chatbot to elicit a desired response.',
        essential: false
    },

    // ════════ IT TOOLS & SYSTEMS ════════
    {
        id: 'v60', term: 'CPU (Processor)', category: 'IT Tools & Systems',
        definition: 'Central Processing Unit – the "brain" of the computer that performs calculations.',
        essential: true
    },
    {
        id: 'v61', term: 'RAM', category: 'IT Tools & Systems',
        definition: 'Random Access Memory – temporary memory that is cleared when powered off.',
        essential: true, didYouKnow: 'The more RAM you have, the more programs you can run simultaneously!'
    },
    {
        id: 'v62', term: 'SSD / HDD', category: 'IT Tools & Systems',
        definition: 'Permanent storage: SSD (faster, more expensive), HDD (slower, cheaper, spinning disk).',
        essential: false
    },
    {
        id: 'v63', term: 'Operating System', category: 'IT Tools & Systems',
        definition: 'Software that manages hardware and runs programs (e.g., Windows, macOS, Linux, Android).',
        essential: true
    },
    {
        id: 'v64', term: 'LAN', category: 'IT Tools & Systems',
        definition: 'Local Area Network – a local network, e.g., within a school or office.',
        essential: false
    },
    {
        id: 'v65', term: 'WAN', category: 'IT Tools & Systems',
        definition: 'Wide Area Network – a large-scale network, e.g., the internet itself.',
        essential: false
    },
    {
        id: 'v66', term: 'IoT (Internet of Things)', category: 'IT Tools & Systems',
        definition: 'Everyday objects with internet connectivity that exchange data.',
        essential: true, didYouKnow: 'There are expected to be over 30 billion IoT devices globally by 2030!'
    },
    {
        id: 'v67', term: 'Cloud Service', category: 'IT Tools & Systems',
        definition: 'Remote servers providing computing power and storage, accessible via the internet (e.g., Google Drive).',
        essential: true
    },
    {
        id: 'v68', term: 'Phishing', category: 'IT Tools & Systems',
        definition: 'Scammers trying to acquire passwords and data through seemingly trustworthy messages.',
        essential: true, didYouKnow: 'Always check the exact email address of the sender, not just the display name!'
    },
    {
        id: 'v69', term: 'Smishing', category: 'IT Tools & Systems',
        definition: 'An SMS-based phishing attack (e.g., a fake package delivery SMS link).',
        essential: false
    },
    {
        id: 'v70', term: 'Ransomware', category: 'IT Tools & Systems',
        definition: 'Malware that encrypts files and demands a ransom for their restoration.',
        essential: false, didYouKnow: 'The best defense is regular backups (the 3-2-1 rule)!'
    },
    {
        id: 'v71', term: 'MFA / 2FA', category: 'IT Tools & Systems',
        definition: 'Multi-factor authentication – requires another device (e.g., phone code) in addition to a password.',
        essential: true
    },
    {
        id: 'v72', term: 'VPN', category: 'IT Tools & Systems',
        definition: 'Virtual Private Network – creates an encrypted channel for browsing, protecting privacy.',
        essential: false
    },
    {
        id: 'v73', term: 'HTTPS', category: 'IT Tools & Systems',
        definition: 'An encrypted web connection (indicated by a padlock icon in the browser). HTTP is not encrypted.',
        essential: true
    },
    {
        id: 'v74', term: 'Binary System', category: 'IT Tools & Systems',
        definition: 'A base-2 numeral system (0 and 1) on which computers operate.',
        essential: false, didYouKnow: '8 bits = 1 byte. The computer builds EVERYTHING out of 0s and 1s!'
    },
    {
        id: 'v75', term: 'Crowdsourcing', category: 'IT Tools & Systems',
        definition: 'A project built from the voluntary contributions of many people (e.g., Wikipedia, OpenStreetMap).',
        essential: false
    },
    {
        id: 'v76', term: 'Bluetooth', category: 'IT Tools & Systems',
        definition: 'A short-range wireless technology for data transfer between devices.',
        essential: false
    },
    {
        id: 'v77', term: 'NFC', category: 'IT Tools & Systems',
        definition: 'Near Field Communication – technology used for contactless payments and short-range communication.',
        essential: false
    },
    {
        id: 'v78', term: 'E-administration', category: 'IT Tools & Systems',
        definition: 'Managing official matters online (e.g., tax returns, document requests).',
        essential: false
    },
    {
        id: 'v79', term: 'Screen Time', category: 'IT Tools & Systems',
        definition: 'A built-in feature of devices that measures and can limit app usage.',
        essential: false, didYouKnow: 'The WHO recommends a maximum of 2 hours of screen time per day for teenagers!'
    },
];
