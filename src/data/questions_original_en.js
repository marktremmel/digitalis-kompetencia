// Comprehensive question bank for OKM Digital Competency practice
// Each question maps to one of 4 domains: 'IT Eszközök', 'Információ', 'Tartalomalkotás', 'Kommunikáció & Biztonság'
// Types: 'multiple-choice', 'multiple-select', 'dropdown'
// tag: 'practice' | 'exam' — exam-only questions won't appear in practice mode

export const originalQuestionsEn = [

    // ╔══════════════════════════════════════════════╗
    // ║            GRADES 5–6 (Foundations)          ║
    // ╚══════════════════════════════════════════════╝

    // --- IT Eszközök (IT Tools) ---
    {
        id: 'q56-01', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', tag: 'practice',
        title: 'Input devices',
        task: 'Which device is considered an input device? Select all that apply!',
        options: ['Keyboard', 'Monitor', 'Mouse', 'Printer', 'Scanner', 'Microphone'],
        correctAnswers: ['Keyboard', 'Mouse', 'Scanner', 'Microphone'],
        explanation: 'Input devices bring data into the computer. The monitor and printer are output devices.',
    },
    {
        id: 'q56-02', grade: '5-6', type: 'multiple-select', domain: 'IT Eszközök', tag: 'practice',
        title: 'Smart devices (IoT)',
        task: 'Which of the following are considered "smart devices" that can connect to the internet?',
        options: ['Wi-Fi refrigerator', 'Traditional toaster', 'Smartwatch', 'Traditional wall clock', 'Smart speaker', 'Traditional bicycle'],
        correctAnswers: ['Wi-Fi refrigerator', 'Smartwatch', 'Smart speaker'],
        explanation: 'IoT (Internet of Things) devices have an internet connection and exchange data.',
    },
    {
        id: 'q56-03', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'File extensions',
        task: 'Which extension belongs to an image file?',
        options: ['.docx', '.jpg', '.xlsx', '.mp3'],
        correctAnswer: '.jpg',
        explanation: '.jpg (JPEG) is an image format. .docx is a text document, .xlsx is a spreadsheet, .mp3 is an audio file.',
    },
    {
        id: 'q56-04', grade: '5-6', type: 'dropdown', domain: 'IT Eszközök', tag: 'practice',
        title: 'Parts of a computer',
        task: 'Fill in the sentences with the parts of the computer!',
        sentences: [
            { text: 'The "brain" of the computer that performs calculations is the ___.', options: ['RAM', 'CPU (processor)', 'Monitor', 'Hard drive'], correct: 'CPU (processor)' },
            { text: 'The ___ is used for temporary data storage.', options: ['RAM', 'CPU', 'Pendrive', 'Printer'], correct: 'RAM' },
            { text: 'Files are permanently stored by the ___.', options: ['RAM', 'Hard drive/SSD', 'Keyboard', 'Monitor'], correct: 'Hard drive/SSD' },
        ],
        explanation: 'The CPU performs calculations, RAM is temporary memory, and the hard drive (HDD) or SSD is permanent storage.',
    },
    {
        id: 'q56-05', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'exam',
        title: 'Output devices',
        task: 'Which of the following is NOT an output device?',
        options: ['Monitor', 'Projector', 'Keyboard', 'Speaker'],
        correctAnswer: 'Keyboard',
        explanation: 'The keyboard is an input device, while the monitor, projector, and speaker are output devices.',
    },
    {
        id: 'q56-06', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Ergonomics',
        task: 'Which is a correct piece of advice for sitting in front of a computer?',
        options: [
            'Slouch your back comfortably',
            'The monitor should be at eye level',
            'Sit as close to the monitor as possible',
            'Type with one hand'
        ],
        correctAnswer: 'The monitor should be at eye level',
        explanation: 'Proper posture and monitor distance protect our eyes, back, and neck.',
    },

    // --- Információ (Information) ---
    {
        id: 'q56-07', grade: '5-6', type: 'multiple-choice', domain: 'Információ', tag: 'practice',
        title: 'Data sizes',
        task: 'Which is the correct order from smallest to largest?',
        options: ['Byte < KB < MB < GB', 'KB < Byte < GB < MB', 'GB < MB < KB < Byte', 'MB < KB < Byte < GB'],
        correctAnswer: 'Byte < KB < MB < GB',
        explanation: '1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB.',
    },
    {
        id: 'q56-08', grade: '5-6', type: 'multiple-choice', domain: 'Információ', tag: 'practice',
        title: 'Reliable information',
        task: 'A website is likely more reliable if...',
        options: [
            'It contains many pop-up ads',
            'It does not have an author name',
            'It is operated by an official institution (.gov, .edu)',
            'It is an anonymous blog post'
        ],
        correctAnswer: 'It is operated by an official institution (.gov, .edu)',
        explanation: 'Official institutions (.gov, .edu) generally provide verified and reliable sources.',
    },
    {
        id: 'q56-09', grade: '5-6', type: 'multiple-select', domain: 'Információ', tag: 'practice',
        title: 'Good search habits',
        task: 'Which are good habits when searching online? Select all that apply!',
        options: [
            'I check the information from multiple sources',
            'I always believe the first result',
            'I examine the author of the website',
            'I only read the title',
            'I check the date'
        ],
        correctAnswers: ['I check the information from multiple sources', 'I examine the author of the website', 'I check the date'],
        explanation: 'Always verify from multiple sources, check who wrote it, and when! The first result isn\'t always the best.',
    },
    {
        id: 'q56-10', grade: '5-6', type: 'multiple-choice', domain: 'Információ', tag: 'exam',
        title: 'Search engine',
        task: 'What does a search in quotation marks (e.g. "digital competency") mean in a search engine?',
        options: [
            'It excludes this phrase',
            'It searches for exactly this phrase',
            'It only searches for images',
            'It searches in multiple languages'
        ],
        correctAnswer: 'It searches for exactly this phrase',
        explanation: 'Searching in quotes instructs the search engine to look for exactly that phrase.',
    },

    // --- Tartalomalkotás (Content Creation) ---
    {
        id: 'q56-11', grade: '5-6', type: 'multiple-select', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Digitizing photos',
        task: 'How can you digitize old paper photos? Select all correct answers!',
        options: [
            'I scan them with a scanner',
            'I take a picture of them with a digital camera',
            'I print them out',
            'I photocopy them',
            'I take a picture of them with a phone'
        ],
        correctAnswers: ['I scan them with a scanner', 'I take a picture of them with a digital camera', 'I take a picture of them with a phone'],
        explanation: 'Scanning and taking photos (with a camera or phone) are all digitization methods.',
    },
    {
        id: 'q56-12', grade: '5-6', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Text formatting',
        task: 'Which keyboard shortcut makes the selected text bold?',
        options: ['Ctrl + I', 'Ctrl + B', 'Ctrl + U', 'Ctrl + S'],
        correctAnswer: 'Ctrl + B',
        explanation: 'Ctrl+B = Bold, Ctrl+I = Italic, Ctrl+U = Underline, Ctrl+S = Save.',
    },
    {
        id: 'q56-13', grade: '5-6', type: 'dropdown', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Drawing program tools',
        task: 'Match the tool names to their functions!',
        sentences: [
            { text: 'The function of the "Paint bucket" tool: ___.', options: ['Freehand drawing', 'Fill area with color', 'Insert text'], correct: 'Fill area with color' },
            { text: 'The function of the "A" letter icon: ___.', options: ['Draw a line', 'Insert text', 'Fill area with color'], correct: 'Insert text' },
        ],
        explanation: 'The paint bucket fills a closed area, the "A" icon inserts a text box.',
    },
    {
        id: 'q56-14', grade: '5-6', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'exam',
        title: 'File formats',
        task: 'Which file format is generally used for presentations?',
        options: ['.xlsx', '.pptx', '.docx', '.pdf'],
        correctAnswer: '.pptx',
        explanation: '.pptx is the format for PowerPoint presentations. .xlsx is a spreadsheet, .docx is text, .pdf is cross-platform.',
    },

    // --- Kommunikáció & Biztonság (Communication & Security) ---
    {
        id: 'q56-15', grade: '5-6', type: 'dropdown', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Secure password',
        task: 'Fill in the sentence with the most appropriate answer!',
        sentences: [
            { text: 'A strong password consists of at least ___ characters.', options: ['4', '8', '12'], correct: '12' },
            { text: 'We store our passwords most securely ___.', options: ['on a sticky note on the monitor', 'in a password manager application', 'in an e-mail to ourselves'], correct: 'in a password manager application' },
        ],
        explanation: 'A long, complex password and the use of a password manager application is the most secure.',
    },
    {
        id: 'q56-16', grade: '5-6', type: 'multiple-choice', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Sharing rights',
        task: 'You want to share a school project so your partner can read it but not modify it. What right do you give?',
        options: ['Editor right', 'Viewer right', 'Owner right', 'Download right'],
        correctAnswer: 'Viewer right',
        explanation: 'The "Viewer" right only allows reading, not modifying.',
    },
    {
        id: 'q56-17', grade: '5-6', type: 'dropdown', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Digital wellbeing',
        task: 'Fill in the sentences!',
        sentences: [
            { text: 'Continuous scrolling creates a ___ loop in the brain.', options: ['dopamine', 'adrenaline', 'oxygen'], correct: 'dopamine' },
            { text: 'Before sleep, we can reduce blue light with the ___ feature.', options: ['Night Shift / Blue light filter', 'Airplane mode', 'Bluetooth'], correct: 'Night Shift / Blue light filter' },
            { text: 'We can limit app usage with the phone\'s ___ settings.', options: ['Screen Time', 'Volume', 'Wallpaper'], correct: 'Screen Time' },
        ],
        explanation: 'Mindful screen use is important for digital wellbeing. Blue light filters help with sleep.',
    },
    {
        id: 'q56-18', grade: '5-6', type: 'multiple-select', domain: 'Kommunikáció & Biztonság', tag: 'exam',
        title: 'Protecting personal data',
        task: 'Which data should you NOT share with strangers online? Select all that apply!',
        options: [
            'Your home address',
            'Your favorite color',
            'Your phone number',
            'The exact name and address of your school',
            'Your favorite movies'
        ],
        correctAnswers: ['Your home address', 'Your phone number', 'The exact name and address of your school'],
        explanation: 'Home address, phone number, and exact school details are personal information that should not be shared with strangers.',
    },
    {
        id: 'q56-19', grade: '5-6', type: 'multiple-choice', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Online etiquette',
        task: 'What is "netiquette"?',
        options: [
            'An antivirus program',
            'The etiquette rules of internet behavior',
            'A social media site',
            'An e-mail provider'
        ],
        correctAnswer: 'The etiquette rules of internet behavior',
        explanation: 'Netiquette refers to the unwritten etiquette rules of online communication.',
    },
    {
        id: 'q56-20', grade: '5-6', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'exam',
        title: 'Operating systems',
        task: 'Which is NOT an operating system?',
        options: ['Windows', 'macOS', 'Google Chrome', 'Linux'],
        correctAnswer: 'Google Chrome',
        explanation: 'Google Chrome is a web browser, not an operating system. Windows, macOS, and Linux are operating systems.',
    },

    // ╔══════════════════════════════════════════════╗
    // ║            GRADES 7–8 (Intermediate)         ║
    // ╚══════════════════════════════════════════════╝

    // --- IT Eszközök ---
    {
        id: 'q78-01', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Interpreting a flowchart',
        task: 'A flowchart says: "Is it raining?" → If YES → ___. What is the logical step?',
        options: ['Take the umbrella!', 'Put on sunglasses!', 'Go for a run!', 'Open the window!'],
        correctAnswer: 'Take the umbrella!',
        explanation: 'Flowcharts show the decision-making process step by step. Rain → umbrella is logical.',
    },
    {
        id: 'q78-02', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Block code output',
        task: 'What will it output? Set Score = 5 → If Score > 4 Then Say "Great" → Else Say "Try again!"',
        options: ['Great', 'Try again!', '5', 'Error'],
        correctAnswer: 'Great',
        explanation: 'Score = 5, which is > 4, so the If condition is true → "Great" belongs here.',
    },
    {
        id: 'q78-03', grade: '7-8', type: 'dropdown', domain: 'IT Eszközök', tag: 'practice',
        title: 'Ports and connectors',
        task: 'Match the port to its function!',
        sentences: [
            { text: 'The main function of the HDMI port: ___.', options: ['Internet connection', 'Video output', 'Audio output', 'Charging'], correct: 'Video output' },
            { text: 'The main function of the Ethernet port: ___.', options: ['Video output', 'Wired internet connection', 'USB data transfer', 'Audio output'], correct: 'Wired internet connection' },
            { text: 'The main function of the USB port: ___.', options: ['General data transfer and charging', 'Charging only', 'Video only', 'Audio only'], correct: 'General data transfer and charging' },
        ],
        explanation: 'HDMI = video/audio output, Ethernet = wired internet, USB = universal data transfer/charging.',
    },
    {
        id: 'q78-04', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Loop recognition',
        task: 'Which programming concept repeats the same step multiple times?',
        options: ['Branching (If/Else)', 'Loop', 'Variable', 'Function'],
        correctAnswer: 'Loop',
        explanation: 'A loop repeats a code block according to a condition. A branch makes a decision.',
    },
    {
        id: 'q78-05', grade: '7-8', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'exam',
        title: 'Network concepts',
        task: 'What is Wi-Fi?',
        options: [
            'An operating system',
            'A wireless network connection',
            'A programming language',
            'A hosting service'
        ],
        correctAnswer: 'A wireless network connection',
        explanation: 'Wi-Fi is a wireless network standard that allows internet connection without cables.',
    },
    {
        id: 'q78-06', grade: '7-8', type: 'multiple-select', domain: 'IT Eszközök', tag: 'practice',
        title: 'Data transfer methods',
        task: 'Which are wireless data transfer methods? Select all that apply!',
        options: ['Bluetooth', 'USB cable', 'Wi-Fi', 'Ethernet cable', 'NFC', 'HDMI cable'],
        correctAnswers: ['Bluetooth', 'Wi-Fi', 'NFC'],
        explanation: 'Bluetooth, Wi-Fi, and NFC are wireless technologies. Cabled solutions (USB, Ethernet, HDMI) are not.',
    },

    // --- Információ ---
    {
        id: 'q78-07', grade: '7-8', type: 'multiple-choice', domain: 'Információ', tag: 'practice',
        title: 'Spotting fake news',
        task: 'Which is the strongest sign that a news story might be fake?',
        options: [
            'It appeared on an official news portal',
            'It uses an overly emotional title with exclamation marks',
            'It names the author',
            'It contains scientific references'
        ],
        correctAnswer: 'It uses an overly emotional title with exclamation marks',
        explanation: 'Fake news often appeals to strong emotions. Credible news uses factual language.',
    },
    {
        id: 'q78-08', grade: '7-8', type: 'multiple-select', domain: 'Információ', tag: 'practice',
        title: 'Types of digital footprint',
        task: 'Which leave a NEGATIVE digital footprint? Select all that apply!',
        options: [
            'Sharing a school project',
            'Publicly bullying a classmate',
            'Reading news',
            'Sharing personal data publicly',
            'Posting rule-breaking content'
        ],
        correctAnswers: ['Publicly bullying a classmate', 'Sharing personal data publicly', 'Posting rule-breaking content'],
        explanation: 'Hurtful comments, sharing personal data, and rule-breaking content leave a lasting negative footprint.',
    },
    {
        id: 'q78-09', grade: '7-8', type: 'multiple-choice', domain: 'Információ', tag: 'exam',
        title: 'Sponsored content',
        task: 'What indicates that a social media post is a paid advertisement?',
        options: [
            'It received a lot of likes',
            'It contains the #ad or #sponsored tag',
            'It looks interesting',
            'A friend shared it'
        ],
        correctAnswer: 'It contains the #ad or #sponsored tag',
        explanation: 'According to regulations, paid content must be marked (e.g., #ad, #sponsored, "paid partnership").',
    },
    {
        id: 'q78-10', grade: '7-8', type: 'dropdown', domain: 'Információ', tag: 'practice',
        title: 'Filter bubble',
        task: 'Fill in the sentences about algorithms!',
        sentences: [
            { text: 'Social media shows content based on a(n) ___.', options: ['randomly', 'algorithm', 'alphabetical order'], correct: 'algorithm' },
            { text: 'If we only see similar content, a so-called ___ develops.', options: ['filter bubble', 'virus protection', 'encryption'], correct: 'filter bubble' },
        ],
        explanation: 'Algorithms filter visible content based on past behavior, which creates a filter bubble.',
    },

    // --- Tartalomalkotás (Content Creation) ---
    {
        id: 'q78-11', grade: '7-8', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'E-mail – Using BCC',
        task: 'Peter is sending invitations to 30 classmates via e-mail so they cannot see each other\'s addresses. Which field does he use?',
        options: ['To (Címzett)', 'CC (Másolat)', 'BCC (Titkos másolat)', 'Subject (Tárgy)'],
        correctAnswer: 'BCC (Titkos másolat)',
        explanation: 'BCC (Blind Carbon Copy) hides the recipients from each other.',
    },
    {
        id: 'q78-12', grade: '7-8', type: 'dropdown', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Spreadsheet functions',
        task: 'Select the correct function!',
        sentences: [
            { text: 'The sum of all values: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'COUNT'], correct: 'SUM' },
            { text: 'The largest value: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'MIN'], correct: 'MAX' },
            { text: 'The average of the values: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'COUNT'], correct: 'AVERAGE' },
        ],
        explanation: 'SUM = total, MAX = largest, AVERAGE = average. These are the most basic spreadsheet functions.',
    },
    {
        id: 'q78-13', grade: '7-8', type: 'multiple-select', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Conditional formatting',
        task: 'Which feature automatically sets a cell\'s background color to red if the score is below 50?',
        options: ['Conditional Formatting', 'Sort A-Z', 'Find and Replace', 'Cell Styles'],
        correctAnswers: ['Conditional Formatting'],
        explanation: '"Conditional Formatting" automatically formats cells based on rules.',
    },
    {
        id: 'q78-14', grade: '7-8', type: 'dropdown', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Cloud collaboration',
        task: 'Fill in the text about cloud collaboration!',
        sentences: [
            { text: 'For the group project, we first create a shared ___ in the cloud.', options: ['folder', 'e-mail', 'antivirus'], correct: 'folder' },
            { text: 'We give group members ___ access.', options: ['editor', 'viewer', 'blocked'], correct: 'editor' },
            { text: 'To share it with them, we send the ___ to the document.', options: ['password', 'link', 'serial number'], correct: 'link' },
        ],
        explanation: 'The basis of cloud collaboration: shared folder, editor rights, and sending a link.',
    },
    {
        id: 'q78-15', grade: '7-8', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'Bad presentation habits',
        task: 'Which is NOT a good habit in a presentation?',
        options: [
            'Little text per slide',
            'Easily readable font size',
            'Yellow text on a white background',
            'Using images alongside text'
        ],
        correctAnswer: 'Yellow text on a white background',
        explanation: 'Yellow text on a white background is almost unreadable. Always use good contrast!',
    },
    {
        id: 'q78-16', grade: '7-8', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'exam',
        title: 'Chart types',
        task: 'Which chart type is most suitable for displaying proportions (%)?',
        options: ['Column chart', 'Line chart', 'Pie chart', 'Scatter plot'],
        correctAnswer: 'Pie chart',
        explanation: 'The pie chart is ideal for visualizing percentages because the whole represents 100%.',
    },

    // --- Kommunikáció & Biztonság (Communication & Security) ---
    {
        id: 'q78-17', grade: '7-8', type: 'multiple-select', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Handling online bullying',
        task: 'A classmate writes hurtful comments about you online. What are the correct steps?',
        options: [
            'Delete my profile',
            'Delete the hurtful messages, if possible',
            'Curse back at them immediately',
            'Report to the administrator',
            'Ask an adult for help'
        ],
        correctAnswers: ['Delete the hurtful messages, if possible', 'Report to the administrator', 'Ask an adult for help'],
        explanation: 'Never answer out of anger! Deleting, reporting, and asking an adult for help are correct.',
    },
    {
        id: 'q78-18', grade: '7-8', type: 'dropdown', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'AI-based prompt writing',
        task: 'Fill in the prompt for the best result!',
        sentences: [
            { text: 'For the best result, provide the ___ (role) to the AI.', options: ['context', 'password', 'e-mail address'], correct: 'context' },
            { text: 'Specify the answer format as well: e.g. summarize in ___.', options: ['3 bullet points', '500 pages', 'a drawing'], correct: '3 bullet points' },
        ],
        explanation: 'A good AI prompt contains context, role, and a specific format requirement.',
    },
    {
        id: 'q78-19', grade: '7-8', type: 'multiple-choice', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Creative Commons',
        task: 'What does a Creative Commons (CC) license on an image mean?',
        options: [
            'It is free to use, but conditions may apply',
            'It is forbidden to download',
            'It can only be used after purchase',
            'It contains a virus'
        ],
        correctAnswer: 'It is free to use, but conditions may apply',
        explanation: 'A CC license allows free use, but the author\'s conditions (e.g., attribution) must be followed.',
    },
    {
        id: 'q78-20', grade: '7-8', type: 'multiple-choice', domain: 'Kommunikáció & Biztonság', tag: 'exam',
        title: 'Security of data transfer',
        task: 'What ensures that your data sent on a website is encrypted?',
        options: [
            'The site has many ads',
            'The address starts with http://',
            'The address starts with https:// and has a padlock icon',
            'The site has a beautiful design'
        ],
        correctAnswer: 'The address starts with https:// and has a padlock icon',
        explanation: 'HTTPS and the padlock icon mean an encrypted connection. HTTP is not encrypted.',
    },

    // ╔══════════════════════════════════════════════╗
    // ║         GRADES 9–11 (Advanced)               ║
    // ╚══════════════════════════════════════════════╝

    // --- IT Eszközök (IT Tools) ---
    {
        id: 'q911-01', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', tag: 'practice',
        title: 'SQL query',
        task: 'Query books after 2000 from a book database!',
        sentences: [
            { text: '___ title, author FROM books', options: ['SELECT', 'INSERT', 'DELETE', 'UPDATE'], correct: 'SELECT' },
            { text: '___ year > 2000', options: ['WHERE', 'HAVING', 'GROUP BY', 'JOIN'], correct: 'WHERE' },
            { text: '___ title ASC', options: ['ORDER BY', 'SORT BY', 'GROUP BY', 'FILTER BY'], correct: 'ORDER BY' },
        ],
        explanation: 'SELECT chooses, WHERE filters, ORDER BY sorts. This is the basic SQL query.',
    },
    {
        id: 'q911-02', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Infinite loop debugging',
        task: 'The code is supposed to count from 1 to 10 but enters an infinite loop: i=1; while(i<=10) { print(i); }. What is the error?',
        options: ['Missing the i = i + 1 increment', 'The condition is wrong', 'The print is incorrect', 'There is no error'],
        correctAnswer: 'Missing the i = i + 1 increment',
        explanation: 'If i never increases, the while condition remains true forever → infinite loop.',
    },
    {
        id: 'q911-03', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', tag: 'practice',
        title: 'Relational database keys',
        task: 'Fill in the database concepts!',
        sentences: [
            { text: 'In the "Students" ___, every student has a unique identifier.', options: ['table', 'program', 'browser'], correct: 'table' },
            { text: 'The name of the unique identifier is: ___.', options: ['Primary key', 'Foreign key', 'Table name'], correct: 'Primary key' },
            { text: 'When this ID also appears in the "Grades" table, it is called a ___.', options: ['Primary key', 'Foreign key', 'Index'], correct: 'Foreign key' },
        ],
        explanation: 'Primary Key = unique identifier, Foreign Key = a field referring to another table\'s primary key.',
    },
    {
        id: 'q911-04', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Network topology',
        task: '5 computers connected in a circle – what topology is this?',
        options: ['Star', 'Ring', 'Bus', 'Tree'],
        correctAnswer: 'Ring',
        explanation: 'In a ring topology, devices are connected in a circle. A star has a central hub.',
    },
    {
        id: 'q911-05', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'exam',
        title: 'LAN vs WAN',
        task: 'What is the difference between LAN and WAN?',
        options: [
            'LAN is wireless, WAN is not',
            'LAN is local, WAN covers a larger area',
            'LAN is faster than the internet',
            'There is no difference'
        ],
        correctAnswer: 'LAN is local, WAN covers a larger area',
        explanation: 'LAN = Local Area Network (e.g., school network). WAN = Wide Area Network (e.g., the internet).',
    },
    {
        id: 'q911-06', grade: '9-11', type: 'multiple-choice', domain: 'IT Eszközök', tag: 'practice',
        title: 'Variable types',
        task: 'What type of variable is the text "Anna Smith" in a program?',
        options: ['Integer (whole number)', 'Boolean (logical)', 'String (text)', 'Float (decimal number)'],
        correctAnswer: 'String (text)',
        explanation: 'String stores textual data, Integer a whole number, Boolean a true/false value, Float a decimal number.',
    },
    {
        id: 'q911-07', grade: '9-11', type: 'dropdown', domain: 'IT Eszközök', tag: 'practice',
        title: 'Logic gates',
        task: 'Fill in the results of the logic gates!',
        sentences: [
            { text: 'AND gate: If A=TRUE and B=TRUE, the result is: ___.', options: ['TRUE', 'FALSE'], correct: 'TRUE' },
            { text: 'OR gate: If A=TRUE and B=FALSE, the result is: ___.', options: ['TRUE', 'FALSE'], correct: 'TRUE' },
            { text: 'NOT gate: If A=TRUE, the result is: ___.', options: ['TRUE', 'FALSE'], correct: 'FALSE' },
        ],
        explanation: 'AND: both are needed; OR: at least one is needed; NOT: reverses the value.',
    },

    // --- Információ (Information) ---
    {
        id: 'q911-08', grade: '9-11', type: 'multiple-select', domain: 'Információ', tag: 'practice',
        title: 'Basics of machine learning',
        task: 'Which statements are true about machine learning (ML)? Select all that apply!',
        options: [
            'Large datasets are necessary to recognize patterns',
            'AI understands emotions exactly like a human',
            'The quality of the output depends on the quality of the input data',
            'AI can program itself without human intervention',
        ],
        correctAnswers: ['Large datasets are necessary to recognize patterns', 'The quality of the output depends on the quality of the input data'],
        explanation: 'ML: learns from lots of data, "garbage in, garbage out". It doesn\'t understand emotions and doesn\'t program itself.',
    },
    {
        id: 'q911-09', grade: '9-11', type: 'multiple-select', domain: 'Információ', tag: 'practice',
        title: 'Deepfake detection',
        task: 'How can you check if a video is a deepfake?',
        options: [
            'I look for unnatural blinking',
            'I believe it because I see it in the video',
            'I look for confirmation in a reliable news source',
            'I check the audio sync with the lips',
        ],
        correctAnswers: ['I look for unnatural blinking', 'I look for confirmation in a reliable news source', 'I check the audio sync with the lips'],
        explanation: 'Deepfakes can show visual and audio errors. Always cross-check with independent sources!',
    },
    {
        id: 'q911-10', grade: '9-11', type: 'multiple-choice', domain: 'Információ', tag: 'practice',
        title: 'AI hallucinations',
        task: 'What does it mean when an AI chatbot "hallucinates"?',
        options: [
            'It shows visual effects',
            'It confidently states false information',
            'It answers more slowly',
            'Its answer is too short'
        ],
        correctAnswer: 'It confidently states false information',
        explanation: 'AI hallucination: the model confidently generates false data as if it were true.',
    },
    {
        id: 'q911-11', grade: '9-11', type: 'dropdown', domain: 'Információ', tag: 'exam',
        title: 'AI bias and ethics',
        task: 'Fill in the sentences about AI ethics!',
        sentences: [
            { text: 'If an AI model is trained exclusively on English data, the result will be ___.', options: ['biased', 'perfect', 'random'], correct: 'biased' },
            { text: 'Text generated by AI must always be ___ with original sources.', options: ['verified', 'accepted', 'deleted'], correct: 'verified' },
        ],
        explanation: 'Biased data leads to biased results (bias). AI output must always be verified.',
    },

    // --- Tartalomalkotás (Content Creation) ---
    {
        id: 'q911-12', grade: '9-11', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'VLOOKUP',
        task: 'We have 500 products. We need to fetch the price from sheet 1 to sheet 2 based on ID. What is the last parameter of VLOOKUP for an exact match?',
        options: ['TRUE', 'FALSE', '0 and FALSE are equivalent', '1'],
        correctAnswer: '0 and FALSE are equivalent',
        explanation: 'VLOOKUP exact match: last parameter = FALSE or 0.',
    },
    {
        id: 'q911-13', grade: '9-11', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'IF function',
        task: 'Which formula gives a 10% discount if the amount is > 10000? Cell A2 contains the amount.',
        options: ['=IF(A2>10000; A2*0.9; A2)', '=IF(A2<10000; A2*0.1; A2)', '=SUM(A2*0.9)', '=AVERAGE(A2; 0.9)'],
        correctAnswer: '=IF(A2>10000; A2*0.9; A2)',
        explanation: 'IF evaluates a logical condition. If true (amount > 10000), it gives a 10% discount (×0.9), otherwise the original price.',
    },
    {
        id: 'q911-14', grade: '9-11', type: 'dropdown', domain: 'Tartalomalkotás', tag: 'practice',
        title: 'HTML basics',
        task: 'Fill in the HTML code snippets!',
        sentences: [
            { text: 'The tag for the main heading: ___.', options: ['<h1>', '<p>', '<div>', '<span>'], correct: '<h1>' },
            { text: 'The tag for a paragraph: ___.', options: ['<h1>', '<p>', '<img>', '<a>'], correct: '<p>' },
            { text: 'To insert an image, we use the ___ tag.', options: ['<p>', '<h1>', '<img>', '<link>'], correct: '<img>' },
        ],
        explanation: '<h1> = main heading, <p> = paragraph, <img> = image. These are basic HTML elements.',
    },
    {
        id: 'q911-15', grade: '9-11', type: 'multiple-choice', domain: 'Tartalomalkotás', tag: 'exam',
        title: 'COUNTIF',
        task: 'Which function counts how many times the grade "5" appears in the range A1:A30?',
        options: ['=SUM(A1:A30)', '=COUNTIF(A1:A30; 5)', '=AVERAGE(A1:A30)', '=MAX(A1:A30)'],
        correctAnswer: '=COUNTIF(A1:A30; 5)',
        explanation: 'COUNTIF counts how many times a condition is met within a range.',
    },

    // --- Kommunikáció & Biztonság (Communication & Security) ---
    {
        id: 'q911-16', grade: '9-11', type: 'dropdown', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Cybersecurity',
        task: 'Fill in the cybersecurity sentences!',
        sentences: [
            { text: 'Alongside a password, you should enable the ___ feature.', options: ['MFA/2FA', 'VPN', 'Firewall'], correct: 'MFA/2FA' },
            { text: 'A password request message arriving via SMS is called: ___.', options: ['Phishing', 'Smishing', 'Spamming'], correct: 'Smishing' },
            { text: 'Never do banking on a ___ network.', options: ['home Wi-Fi', 'public Wi-Fi', 'mobile data'], correct: 'public Wi-Fi' },
        ],
        explanation: 'MFA = multi-factor authentication, Smishing = SMS-based phishing, public Wi-Fi = insecure.',
    },
    {
        id: 'q911-17', grade: '9-11', type: 'multiple-select', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'GDPR principles',
        task: 'What are the principles of the GDPR (General Data Protection Regulation)? Select all that apply!',
        options: [
            'Personal data must only be collected for specified purposes',
            'Anyone can freely access others\' data',
            'The data subject has the right to have their data deleted',
            'Companies can store data indefinitely',
            'Consent is required for data processing',
        ],
        correctAnswers: ['Personal data must only be collected for specified purposes', 'The data subject has the right to have their data deleted', 'Consent is required for data processing'],
        explanation: 'GDPR protects personal data: purpose limitation, right to erasure, and the principle of consent.',
    },
    {
        id: 'q911-18', grade: '9-11', type: 'dropdown', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'Cyber threats',
        task: 'Match the cyber threat with its description!',
        sentences: [
            { text: 'Encrypts your files and demands a ransom: ___.', options: ['Ransomware', 'Phishing', 'DDoS'], correct: 'Ransomware' },
            { text: 'Tries to steal your password with a fake e-mail: ___.', options: ['Ransomware', 'Phishing', 'Malware'], correct: 'Phishing' },
            { text: 'Overloads a website to make it unavailable: ___.', options: ['Ransomware', 'Phishing', 'DDoS'], correct: 'DDoS' },
        ],
        explanation: 'Ransomware = ransom virus, Phishing = data theft, DDoS = denial of service through overloading.',
    },
    {
        id: 'q911-19', grade: '9-11', type: 'multiple-choice', domain: 'Kommunikáció & Biztonság', tag: 'practice',
        title: 'VPN',
        task: 'What is a VPN (Virtual Private Network) used for?',
        options: [
            'Speeds up the internet',
            'Creates an encrypted channel for browsing',
            'Deletes viruses',
            'Blocks ads'
        ],
        correctAnswer: 'Creates an encrypted channel for browsing',
        explanation: 'A VPN encrypts internet traffic and hides the IP address, increasing security.',
    },
    {
        id: 'q911-20', grade: '9-11', type: 'multiple-select', domain: 'Kommunikáció & Biztonság', tag: 'exam',
        title: 'Backup – 3-2-1 rule',
        task: 'What does the 3-2-1 backup rule mean? Select all that apply!',
        options: [
            '3 copies of data',
            'On 2 different storage media',
            '1 copy at another location',
            '3 different passwords',
            '2 antivirus programs',
        ],
        correctAnswers: ['3 copies of data', 'On 2 different storage media', '1 copy at another location'],
        explanation: '3-2-1: 3 copies, on 2 different media (e.g., HDD + cloud), 1 offsite (remote location).',
    },
];
