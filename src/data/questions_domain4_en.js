// Domain 4: Information technologies, smart devices and systems (4.1–4.13)

export const domain4QuestionsEn = [
    // 4.1 Concept of IT and ICT
    {
        id: 'd4-1a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.1', tag: 'practice',
        title: 'Concept of ICT',
        task: 'What does ICT (Information and Communication Technology) mean?',
        options: [
            'Only computers',
            'All digital devices and systems used for information processing and communication',
            'Only the internet',
            'Only phones'
        ],
        correctAnswer: 'All digital devices and systems used for information processing and communication',
        explanation: 'ICT = computers, networks, software, phones – everything that enables digital processing and communication.',
    },

    // 4.2 Hardware and software
    {
        id: 'd4-2a', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Input devices',
        task: 'Which device is an input device?',
        options: ['Keyboard', 'Monitor', 'Mouse', 'Printer', 'Scanner', 'Microphone'],
        correctAnswers: ['Keyboard', 'Mouse', 'Scanner', 'Microphone'],
        explanation: 'Input devices put data into the computer. Monitor and printer are output.',
    },
    {
        id: 'd4-2b', grade: '5-6', type: 'dropdown', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Parts of a computer',
        task: 'Fill in the blanks!',
        sentences: [
            { text: 'The "brain" of the computer: ___.', options: ['RAM', 'CPU (processor)', 'Monitor', 'Hard drive'], correct: 'CPU (processor)' },
            { text: 'Temporary memory: ___.', options: ['RAM', 'CPU', 'Pendrive', 'Printer'], correct: 'RAM' },
            { text: 'Permanent storage: ___.', options: ['RAM', 'Hard drive/SSD', 'Keyboard', 'Monitor'], correct: 'Hard drive/SSD' },
        ],
        explanation: 'CPU = computation, RAM = temporary memory, HDD/SSD = permanent storage.',
    },
    {
        id: 'd4-2c', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Software types',
        task: 'Which is NOT software?',
        options: ['Windows 11', 'Google Chrome', 'Hard drive', 'Microsoft Excel'],
        correctAnswer: 'Hard drive',
        explanation: 'A hard drive is hardware (physical part). The rest are software (programs).',
    },

    // 4.3 Bit and byte, number systems
    {
        id: 'd4-3a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.3', tag: 'practice',
        title: 'Data size order',
        task: 'Which is the correct order from smallest to largest?',
        options: ['Byte < KB < MB < GB', 'KB < Byte < GB < MB', 'GB < MB < KB < Byte', 'MB < KB < Byte < GB'],
        correctAnswer: 'Byte < KB < MB < GB',
        explanation: '1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB.',
    },
    {
        id: 'd4-3b', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.3', tag: 'practice',
        title: 'Binary numeral system',
        task: 'What is the number 13 in the base-2 (binary) numeral system?',
        options: ['1101', '1011', '1110', '1001'],
        correctAnswer: '1101',
        explanation: '13 = 8+4+1 = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 1101.',
    },

    // 4.4 Operating systems
    {
        id: 'd4-4a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.4', tag: 'practice',
        title: 'Operating systems',
        task: 'Which is NOT an operating system?',
        options: ['Windows', 'macOS', 'Google Chrome', 'Linux'],
        correctAnswer: 'Google Chrome',
        explanation: 'Chrome is a browser. Windows, macOS, and Linux are operating systems.',
    },
    {
        id: 'd4-4b', grade: '7-8', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.4', tag: 'practice',
        title: 'Mobile operating systems',
        task: 'Which are mobile operating systems?',
        options: ['Android', 'iOS', 'Windows 11', 'Linux Mint', 'HarmonyOS'],
        correctAnswers: ['Android', 'iOS', 'HarmonyOS'],
        explanation: 'Android, iOS, and HarmonyOS are mobile operating systems. Windows (desktop), Linux Mint (desktop).',
    },

    // 4.5 Audio, image, and data transmission
    {
        id: 'd4-5a', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', topic: '4.5', tag: 'practice',
        title: 'Ports and connectors',
        task: 'Match the port to its function!',
        sentences: [
            { text: 'HDMI port: ___.', options: ['Internet connection', 'Video+audio output', 'USB data transfer'], correct: 'Video+audio output' },
            { text: 'Ethernet port: ___.', options: ['Video output', 'Wired internet', 'Audio output'], correct: 'Wired internet' },
            { text: 'USB-C port: ___.', options: ['General data transfer and charging', 'Audio only', 'Video only'], correct: 'General data transfer and charging' },
        ],
        explanation: 'HDMI = video+audio, Ethernet = wired internet, USB-C = universal.',
    },

    // 4.6 Networks (PAN, LAN, MAN, WAN)
    {
        id: 'd4-6a', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Wi-Fi',
        task: 'What is Wi-Fi?',
        options: ['An operating system', 'A wireless network connection', 'A programming language', 'A hosting service'],
        correctAnswer: 'A wireless network connection',
        explanation: 'Wi-Fi = a wireless network for cable-free internet connection.',
    },
    {
        id: 'd4-6b', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'LAN vs WAN',
        task: 'What is the difference between LAN and WAN?',
        options: ['LAN is wireless', 'LAN is local, WAN covers a larger area', 'There is no difference', 'WAN is slower'],
        correctAnswer: 'LAN is local, WAN covers a larger area',
        explanation: 'LAN = Local Area Network (local, e.g., school). WAN = Wide Area Network (e.g., the internet).',
    },
    {
        id: 'd4-6c', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Network topology',
        task: '5 computers connected in a circle – what topology is this?',
        options: ['Star', 'Ring', 'Bus', 'Tree'],
        correctAnswer: 'Ring',
        explanation: 'Ring: connected in a circle. Star: central hub.',
    },

    // 4.7 Mobile technology
    {
        id: 'd4-7a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.7', tag: 'practice',
        title: 'Mobile devices',
        task: 'Which is NOT a mobile device?',
        options: ['Smartphone', 'Tablet', 'Desktop computer', 'Smartwatch'],
        correctAnswer: 'Desktop computer',
        explanation: 'A desktop computer is not portable, not a mobile device.',
    },

    // 4.8 Social media, applications
    {
        id: 'd4-8a', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Sponsored content',
        task: 'What indicates that a post is a paid advertisement?',
        options: ['It got a lot of likes', '#ad or #sponsored tag', 'It looks interesting', 'A friend shared it'],
        correctAnswer: '#ad or #sponsored tag',
        explanation: 'Paid content must be labeled: #ad, #sponsored, "paid partnership".',
    },
    {
        id: 'd4-8b', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Filter bubble',
        task: 'Fill in the blanks!',
        sentences: [
            { text: 'Social media shows content based on a(n) ___.', options: ['randomly', 'algorithm', 'alphabetical order'], correct: 'algorithm' },
            { text: 'If we only see similar content, a(n) ___ develops.', options: ['filter bubble', 'virus protection', 'encryption'], correct: 'filter bubble' },
        ],
        explanation: 'An algorithm filters what you see → a filter bubble is created.',
    },

    // 4.9 Cloud services
    {
        id: 'd4-9a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.9', tag: 'practice',
        title: 'What is the cloud?',
        task: 'What does "cloud storage" mean?',
        options: [
            'Data in the sky',
            'Data on remote servers, accessible via the internet',
            'Data on a pendrive',
            'Data on the printer'
        ],
        correctAnswer: 'Data on remote servers, accessible via the internet',
        explanation: 'The cloud = remote servers accessible via the internet. E.g., Google Drive, OneDrive.',
    },
    {
        id: 'd4-9b', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', topic: '4.9', tag: 'practice',
        title: 'Cloud collaboration',
        task: 'Fill in the blanks!',
        sentences: [
            { text: 'For a group project, we create a shared ___.', options: ['folder', 'e-mail', 'antivirus'], correct: 'folder' },
            { text: 'We give group members ___ access.', options: ['editor', 'viewer', 'blocked'], correct: 'editor' },
            { text: 'To share it, we send them the ___.', options: ['password', 'link', 'serial number'], correct: 'link' },
        ],
        explanation: 'Cloud collaboration: shared folder + editor rights + sending the link.',
    },

    // 4.10 Sensors, controllers, actuators
    {
        id: 'd4-10a', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.10', tag: 'practice',
        title: 'Sensor vs. actuator',
        task: 'What is the difference between a sensor and an actuator?',
        options: [
            'There is no difference',
            'A sensor measures/detects, an actuator takes action/moves',
            'Both measure',
            'Both move'
        ],
        correctAnswer: 'A sensor measures/detects, an actuator takes action/moves',
        explanation: 'Sensor = detector (e.g., thermometer). Actuator = executor (e.g., motor, valve).',
    },

    // 4.11 IoT (Internet of Things)
    {
        id: 'd4-11a', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.11', tag: 'practice',
        title: 'IoT devices',
        task: 'Which are IoT (Internet of Things) devices?',
        options: ['Wi-Fi refrigerator', 'Traditional toaster', 'Smartwatch', 'Traditional wall clock', 'Smart speaker'],
        correctAnswers: ['Wi-Fi refrigerator', 'Smartwatch', 'Smart speaker'],
        explanation: 'IoT devices have an internet connection and exchange data.',
    },

    // 4.12 Smart devices
    {
        id: 'd4-12a', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.12', tag: 'practice',
        title: 'Smart home',
        task: 'Which is an example of a smart home?',
        options: [
            'Traditional light switch',
            'Blinds and heating controlled from a phone',
            'Shopping list written on the wall',
            'Hand-wound clock'
        ],
        correctAnswer: 'Blinds and heating controlled from a phone',
        explanation: 'Smart home devices can be controlled remotely (e.g., from a phone) and automated.',
    },
    {
        id: 'd4-12b', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.12', tag: 'exam',
        title: 'Smart city',
        task: 'Which is NOT typical of a smart city?',
        options: [
            'Monitors traffic with sensors',
            'Uses a smart parking system',
            'Handwritten traffic signs',
            'Energy-efficient public lighting'
        ],
        correctAnswer: 'Handwritten traffic signs',
        explanation: 'A smart city uses digital systems: sensors, automation, energy optimization.',
    },

    // 4.13 Information society
    {
        id: 'd4-13a', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'E-services',
        task: 'Fill in the sentences about e-services!',
        sentences: [
            { text: 'Online bank transfer is called: ___.', options: ['e-banking', 'e-learning', 'e-administration'], correct: 'e-banking' },
            { text: 'Completing an online course: ___.', options: ['e-banking', 'e-learning', 'e-administration'], correct: 'e-learning' },
            { text: 'Official administration through a portal: ___.', options: ['e-banking', 'e-learning', 'e-administration'], correct: 'e-administration' },
        ],
        explanation: 'E-banking = online banking, e-learning = online training, e-administration = digital government services.',
    },
    {
        id: 'd4-13b', grade: '9-11', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Digital identity',
        task: 'Which are methods of digital identification?',
        options: [
            'Client Gate (Ügyfélkapu) login',
            'Showing ID card to the camera',
            'Entering an e-mail address without registration',
            'Electronic signature',
            'QR code pass'
        ],
        correctAnswers: ['Client Gate (Ügyfélkapu) login', 'Electronic signature', 'QR code pass'],
        explanation: 'Client Gate, electronic signatures, and QR codes are ways to authenticate digitally.',
    },

    // 4.6 extra – Security
    {
        id: 'd4-biz1', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Cybersecurity',
        task: 'Fill in the blanks!',
        sentences: [
            { text: 'Alongside a password, you should enable: ___.', options: ['MFA/2FA', 'VPN', 'Firewall'], correct: 'MFA/2FA' },
            { text: 'An SMS message asking for a password is: ___.', options: ['Phishing', 'Smishing', 'Spamming'], correct: 'Smishing' },
            { text: 'Never do banking on a ___ network.', options: ['home Wi-Fi', 'public Wi-Fi', 'mobile data'], correct: 'public Wi-Fi' },
        ],
        explanation: 'MFA = multi-factor authentication, Smishing = SMS phishing, public Wi-Fi is not secure.',
    },
    {
        id: 'd4-biz2', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Cyber threats',
        task: 'Match the terms!',
        sentences: [
            { text: 'Encrypts files, asks for ransom: ___.', options: ['Ransomware', 'Phishing', 'DDoS'], correct: 'Ransomware' },
            { text: 'Steals passwords using fake e-mails: ___.', options: ['Ransomware', 'Phishing', 'Malware'], correct: 'Phishing' },
            { text: 'Overloads a website: ___.', options: ['Ransomware', 'Phishing', 'DDoS'], correct: 'DDoS' },
        ],
        explanation: 'Ransomware = ransom virus, Phishing = data theft, DDoS = denial of service attack.',
    },
    {
        id: 'd4-biz3', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'HTTPS security',
        task: 'What ensures that your data is encrypted?',
        options: [
            'The site looks nice',
            'The address is http://',
            'The address is https:// and has a padlock icon',
            'There are many ads on the site'
        ],
        correctAnswer: 'The address is https:// and has a padlock icon',
        explanation: 'HTTPS + padlock = encrypted connection. HTTP is not encrypted.',
    },
    {
        id: 'd4-biz4', grade: '5-6', type: 'dropdown', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Secure password',
        task: 'Fill in the blanks!',
        sentences: [
            { text: 'A strong password consists of at least ___ characters.', options: ['4', '8', '12'], correct: '12' },
            { text: 'We store our passwords most securely ___.', options: ['on a sticky note on the monitor', 'in a password manager app', 'in an e-mail to ourselves'], correct: 'in a password manager app' },
        ],
        explanation: 'Long, complex password + password manager app = most secure.',
    },
    {
        id: 'd4-biz5', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Personal data online',
        task: 'Which of these should you NOT share with strangers?',
        options: ['Your home address', 'Your favorite color', 'Your phone number', 'Your exact school address', 'Your favorite movies'],
        correctAnswers: ['Your home address', 'Your phone number', 'Your exact school address'],
        explanation: 'Home address, phone number, school address = personal, not for strangers.',
    },

    // 4.5 extra – Ergonomics
    {
        id: 'd4-erg1', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Ergonomics',
        task: 'Which is good advice for sitting in front of a computer?',
        options: [
            'Slouch your back',
            'Monitor at eye level',
            'Sit as close as possible',
            'Type with one hand'
        ],
        correctAnswer: 'Monitor at eye level',
        explanation: 'Proper posture and monitor distance protect the eyes, back, and neck.',
    },

    // Digital wellbeing (kiegészítő)
    {
        id: 'd4-well1', grade: '5-6', type: 'dropdown', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Digital wellbeing',
        task: 'Fill in the blanks!',
        sentences: [
            { text: 'Continuous scrolling creates a ___ loop.', options: ['dopamine', 'adrenaline', 'oxygen'], correct: 'dopamine' },
            { text: 'Blue light is reduced by the ___ feature.', options: ['Night Shift / Blue light filter', 'Airplane mode', 'Bluetooth'], correct: 'Night Shift / Blue light filter' },
            { text: 'App usage is limited by: ___.', options: ['Screen Time', 'Volume', 'Wallpaper'], correct: 'Screen Time' },
        ],
        explanation: 'Mindful screen time is important. Blue light filters help with sleep.',
    },

    // Wireless data transfer
    {
        id: 'd4-wl1', grade: '7-8', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.5', tag: 'practice',
        title: 'Wireless data transfer',
        task: 'Which are wireless methods?',
        options: ['Bluetooth', 'USB cable', 'Wi-Fi', 'Ethernet', 'NFC', 'HDMI'],
        correctAnswers: ['Bluetooth', 'Wi-Fi', 'NFC'],
        explanation: 'Bluetooth, Wi-Fi, NFC = wireless. Cabled = USB, Ethernet, HDMI.',
    },

    // 3-2-1 backup
    {
        id: 'd4-321', grade: '9-11', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.9', tag: 'practice',
        title: '3-2-1 backup',
        task: 'What does the 3-2-1 rule mean?',
        options: ['3 copies', 'On 2 different storage media', '1 copy at another location', '3 passwords', '2 antiviruses'],
        correctAnswers: ['3 copies', 'On 2 different storage media', '1 copy at another location'],
        explanation: '3-2-1: 3 copies, 2 media types (e.g., HDD + cloud), 1 offsite location.',
    },

    // VPN
    {
        id: 'd4-vpn1', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'VPN',
        task: 'What is a VPN used for?',
        options: ['Speeds up the internet', 'Creates an encrypted channel', 'Deletes viruses', 'Blocks ads'],
        correctAnswer: 'Creates an encrypted channel',
        explanation: 'VPN encrypts traffic and hides the IP address.',
    },

    {
        id: 'd4-zak1', grade: '7-8', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Handling online bullying',
        task: 'A classmate writes hurtful things about you online. What are the right steps?',
        options: ['Delete my profile', 'Save a screenshot', 'Curse back at them', 'Report to the admin', 'Ask an adult for help'],
        correctAnswers: ['Save a screenshot', 'Report to the admin', 'Ask an adult for help'],
        explanation: 'Do not curse back! Save evidence, report, and ask for help.',
    },

    // Additional Questions
    {
        id: 'd4-ext-1', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Hardware Components',
        task: 'What is the primary function of a GPU (Graphics Processing Unit)?',
        options: ['To store files permanently', 'To handle everything related to rendering images, video, and 3D graphics', 'To connect the computer to the internet', 'To print documents'],
        correctAnswer: 'To handle everything related to rendering images, video, and 3D graphics',
        explanation: 'While the CPU is the general brain, the GPU is a specialized processor dedicated to accelerating graphics rendering.',
    },
    {
        id: 'd4-ext-2', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Storage Drives',
        task: 'Why are SSDs (Solid State Drives) generally preferred over traditional HDDs (Hard Disk Drives) today?',
        options: ['SSDs are much cheaper per Gigabyte', 'SSDs have no moving parts, making them significantly faster and more durable', 'SSDs are heavier and act as a paperweight', 'HDDs cannot store photos'],
        correctAnswer: 'SSDs have no moving parts, making them significantly faster and more durable',
        explanation: 'HDDs use spinning magnetic disks. SSDs use flash memory (like a giant USB drive), which is much faster and less prone to mechanical failure.',
    },
    {
        id: 'd4-ext-3', grade: '9-11', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Filter Bubbles & Echo Chambers',
        task: 'Which of the following describes an "Echo Chamber" on social media?',
        options: ['An environment where a person only encounters information or opinions that reflect and reinforce their own', 'A feature to test microphone audio', 'The result of algorithms prioritizing high-engagement, agreeable content to the user', 'A forum where users debate opposing viewpoints respectfully'],
        correctAnswers: ['An environment where a person only encounters information or opinions that reflect and reinforce their own', 'The result of algorithms prioritizing high-engagement, agreeable content to the user'],
        explanation: 'Echo chambers form when algorithms feed you only what you already agree with, isolating you from differing perspectives.',
    },
    {
        id: 'd4-ext-4', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Deepfakes',
        task: 'What is a "Deepfake"?',
        options: ['A highly secure password', 'A synthetic media (video/audio) digitally manipulated usually using AI to convincingly replace a person\'s likeness', 'A deep sea internet cable', 'A type of computer virus that hides deep in the C: drive'],
        correctAnswer: 'A synthetic media (video/audio) digitally manipulated usually using AI to convincingly replace a person\'s likeness',
        explanation: 'Deepfakes use Deep Learning AI to swap faces or clone voices, making it look like someone said/did something they never did.',
    },
    {
        id: 'd4-ext-5', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Malware Types',
        task: 'Match the cyber threat to its description.',
        sentences: [
            { text: 'A malicious program disguised as legitimate software to trick users into installing it: ___', options: ['Trojan Horse', 'Spyware', 'Worm'], correct: 'Trojan Horse' },
            { text: 'Self-replicating malware that spreads across networks without needing human action: ___', options: ['Trojan Horse', 'Spyware', 'Worm'], correct: 'Worm' },
        ],
        explanation: 'A Trojan disguises itself (like the mythological horse). A Worm spreads automatically across networks.',
    },
    {
        id: 'd4-ext-6', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Digital Footprint',
        task: 'What forms your "passive digital footprint"?',
        options: ['A photo you intentionally upload to Instagram', 'Data collected about you without you actively sharing it, like your IP address or search history tracked by cookies', 'A comment you leave on a YouTube video', 'An email you send'],
        correctAnswer: 'Data collected about you without you actively sharing it, like your IP address or search history tracked by cookies',
        explanation: 'Active footprints are things you deliberately post. Passive footprints are data trails collected behind the scenes.',
    },
    {
        id: 'd4-ext-7', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.8', tag: 'practice',
        title: 'Creative Commons',
        task: 'What is the purpose of a "Creative Commons (CC)" license?',
        options: ['To ban anyone from ever using the image', 'To charge a high fee for downloading a file', 'To allow creators to easily grant permission for others to use their work under certain conditions (e.g., must give credit)', 'To make all artwork belong to the government'],
        correctAnswer: 'To allow creators to easily grant permission for others to use their work under certain conditions (e.g., must give credit)',
        explanation: 'CC licenses are a flexible way to share creative work while keeping some rights, rather than standard "All Rights Reserved" copyright.',
    },
    {
        id: 'd4-ext-8', grade: '9-11', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Network Security: Firewall',
        task: 'What does a network Firewall do?',
        options: ['It puts out electrical fires in the server room', 'It monitors and controls incoming and outgoing network traffic based on predetermined security rules', 'It acts as a barrier between a trusted internal network and untrusted external networks (like the internet)', 'It makes Wi-Fi faster'],
        correctAnswers: ['It monitors and controls incoming and outgoing network traffic based on predetermined security rules', 'It acts as a barrier between a trusted internal network and untrusted external networks (like the internet)'],
        explanation: 'A firewall is the "bouncer" of your network, checking data packets to see if they are allowed in or out.',
    },
    {
        id: 'd4-ext-9', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Recognizing Phishing',
        task: 'Which of these is a strong indicator of a phishing email?',
        options: ['It uses your correct first name', 'It has a sense of extreme urgency ("Your account will be deleted in 24 hours! Click here!")', 'It is sent during business hours', 'It comes from a known friend with a normal message'],
        correctAnswer: 'It has a sense of extreme urgency ("Your account will be deleted in 24 hours! Click here!")',
        explanation: 'Scammers use urgency/panic to make you click bad links without thinking critically first.',
    },
    {
        id: 'd4-ext-10', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.9', tag: 'practice',
        title: 'Cloud Computing Models',
        task: 'Google Workspace (Docs, Sheets, Gmail) running entirely in the browser is an example of which Cloud model?',
        options: ['IaaS (Infrastructure as a Service)', 'PaaS (Platform as a Service)', 'SaaS (Software as a Service)', 'Hardware as a Service'],
        correctAnswer: 'SaaS (Software as a Service)',
        explanation: 'SaaS delivers fully functional software over the internet directly to end-users on a subscription or free model.',
    },
    {
        id: 'd4-ext-11', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Output Devices',
        task: 'Which of the following are output devices?',
        options: ['Speaker', 'Webcam', 'Projector', 'Keyboard', 'Headphones'],
        correctAnswers: ['Speaker', 'Projector', 'Headphones'],
        explanation: 'Output devices bring information OUT of the computer to you (sound, visuals, print).',
    },
    {
        id: 'd4-ext-12', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.4', tag: 'practice',
        title: 'Operating System Functions',
        task: 'Which is a core responsibility of an Operating System (OS)?',
        options: ['Designing websites', 'Managing the computer\'s hardware resources (CPU, memory) and providing a platform for apps to run', 'Creating 3D games', 'Cooling down the CPU fans automatically'],
        correctAnswer: 'Managing the computer\'s hardware resources (CPU, memory) and providing a platform for apps to run',
        explanation: 'The OS is the manager that acts as the bridge between the hardware and your software applications.',
    },
    {
        id: 'd4-ext-13', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', topic: '4.6', tag: 'practice',
        title: 'Password Attacks',
        task: 'Match the password cracking method.',
        sentences: [
            { text: 'Trying every possible combination of letters and numbers sequentially: ___', options: ['Brute-force attack', 'Dictionary attack', 'Social Engineering'], correct: 'Brute-force attack' },
            { text: 'Using a list of common words, phrases, and leaked passwords to guess: ___', options: ['Brute-force attack', 'Dictionary attack', 'Social Engineering'], correct: 'Dictionary attack' },
        ],
        explanation: 'Brute-force tries literally everything (AAA, AAB, AAC). Dictionary attacks try likely words (Password123, Admin).',
    },
    {
        id: 'd4-ext-14', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Web Tracking & Cookies',
        task: 'What is a "browser cookie" in computing?',
        options: ['A small text file saved on your computer by a website to remember your preferences or track your activity', 'A virus that eats your files', 'A reward given to you for visiting a site', 'A hardware token for logging in'],
        correctAnswer: 'A small text file saved on your computer by a website to remember your preferences or track your activity',
        explanation: 'Cookies are used constructively (keeping you logged in) and also for tracking (following you to show targeted ads).',
    },
    {
        id: 'd4-ext-15', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.12', tag: 'practice',
        title: 'IoT Privacy',
        task: 'What privacy risk is associated with "Smart Speakers" (like Alexa or Google Home)?',
        options: ['They use too much electricity', 'They are constantly listening for their "wake word," which raises concerns about accidental audio recording', 'They can only play country music', 'They might order pizza without asking'],
        correctAnswer: 'They are constantly listening for their "wake word," which raises concerns about accidental audio recording',
        explanation: 'Because voice assistants must constantly analyze room audio to hear "Hey Siri/Alexa", there are privacy concerns regarding mic data.',
    },
    {
        id: 'd4-ext-16', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Zero-Day Exploit',
        task: 'What does "Zero-Day Exploit" mean in cybersecurity?',
        options: ['A cyberattack that happens at midnight', 'A newly discovered software vulnerability that hackers exploit BEFORE the software creator knows about it or has time to release a patch', 'When you have zero days left on your antivirus trial', 'A completely harmless bug'],
        correctAnswer: 'A newly discovered software vulnerability that hackers exploit BEFORE the software creator knows about it or has time to release a patch',
        explanation: 'It is called "zero-day" because the developers have had zero days to fix it—making it initially undefendable.',
    },
    {
        id: 'd4-ext-17', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', topic: '4.2', tag: 'practice',
        title: 'Digital Displays / Pixels',
        task: 'Identify the screen terminology.',
        sentences: [
            { text: 'The smallest individual colored dot on a screen is a ___.', options: ['Pixel', 'Resolution', 'Byte'], correct: 'Pixel' },
            { text: 'The number of these dots measured horizontally and vertically (e.g., 1920x1080) is the screen\'s ___.', options: ['Pixel', 'Resolution', 'Frame rate'], correct: 'Resolution' },
        ],
        explanation: 'Screens are made of millions of tiny Pixels. Resolution dictates how many pixels fit on the display.',
    },
    {
        id: 'd4-ext-18', grade: '9-11', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.5', tag: 'practice',
        title: 'Health and Ergonomics (RSI)',
        task: 'Which are recommended ways to prevent Repetitive Strain Injury (RSI) when using computers long-term?',
        options: ['Using an ergonomic split keyboard or vertical mouse', 'Taking frequent micro-breaks to stretch hands and wrists', 'Typing harder on the keys', 'Working 8 hours straight without standing up'],
        correctAnswers: ['Using an ergonomic split keyboard or vertical mouse', 'Taking frequent micro-breaks to stretch hands and wrists'],
        explanation: 'RSI (like carpal tunnel) is caused by repetitive, unnatural stress on joints. Breaks and ergonomic peripherals prevent it.',
    },
    {
        id: 'd4-ext-19', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Pseudonymity online',
        task: 'What is the difference between being "Anonymous" and "Pseudonymous" online?',
        options: ['There is no difference', 'Anonymous means no identity at all; Pseudonymous means using a consistent fake name/handle (like a gamer tag)', 'Anonymous requires a passport; Pseudonymous does not', 'Pseudonymous means you use your real legal name'],
        correctAnswer: 'Anonymous means no identity at all; Pseudonymous means using a consistent fake name/handle (like a gamer tag)',
        explanation: 'Reddit or Discord users are pseudonymous (they have a profile and reputation, just under a fake name). 4chan is entirely anonymous.',
    },
    {
        id: 'd4-ext-20', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', topic: '4.13', tag: 'practice',
        title: 'Safe E-Shopping',
        task: 'Which signs indicate an online web-shop might be a SCAM?',
        options: ['Prices that are unbelievably low (e.g., a new iPhone for $50)', 'The website url strongly mimics a real one with a typo (amazzon.com)', 'They offer credit card payment via a verified bank gateway', 'There is no contact information or physical address listed on the site'],
        correctAnswers: ['Prices that are unbelievably low (e.g., a new iPhone for $50)', 'The website url strongly mimics a real one with a typo (amazzon.com)', 'There is no contact information or physical address listed on the site'],
        explanation: 'Too good to be true prices, lack of contact info, and spoofed URLs are massive red flags for scam webshops.',
    }
];
