// Domain 1: Digital Literacy (1.1–1.13)
// Each question tagged with its tartalmi keret subtopic

export const domain1QuestionsEn = [
    // 1.1 Files and directories, operations
    {
        id: 'd1-1a', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.1', tag: 'practice',
        title: 'Files and folders',
        task: 'Which statements are TRUE about files and folders?',
        options: [
            'Folders can contain other folders',
            'A file does not have an extension',
            'File size is measured in bytes',
            'Folder and directory mean the same thing',
            'A file name can contain spaces'
        ],
        correctAnswers: [
            'Folders can contain other folders',
            'File size is measured in bytes',
            'Folder and directory mean the same thing',
            'A file name can contain spaces'
        ],
        explanation: 'Files always have an extension (e.g. .docx, .jpg). Folder = directory. Folders can be nested.',
    },
    {
        id: 'd1-1b', grade: '7-8', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.1', tag: 'practice',
        title: 'Matching file extensions',
        task: 'Match the extensions to the file types!',
        sentences: [
            { text: 'The .pdf extension indicates a ___ type file.', options: ['text document', 'cross-platform document', 'image', 'audio'], correct: 'cross-platform document' },
            { text: 'The .mp3 extension indicates a ___ type file.', options: ['text', 'image', 'audio', 'video'], correct: 'audio' },
            { text: 'The .xlsx extension indicates a ___ type file.', options: ['text', 'spreadsheet', 'image', 'presentation'], correct: 'spreadsheet' },
        ],
        explanation: 'PDF = cross-platform, MP3 = audio file, XLSX = Excel spreadsheet.',
    },
    {
        id: 'd1-1c', grade: '9-11', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.1', tag: 'exam',
        title: 'File system hierarchy',
        task: 'What is the absolute path of a file on a Windows system?',
        options: [
            'C:\\Users\\Gábor\\Dokumentumok\\dolgozat.docx',
            'dolgozat.docx',
            '../Dokumentumok/dolgozat',
            'Dokumentumok/dolgozat.docx'
        ],
        correctAnswer: 'C:\\Users\\Gábor\\Dokumentumok\\dolgozat.docx',
        explanation: 'The absolute path starts from the root directory (e.g. C:\\) and specifies the exact location of the file.',
    },

    // 1.2 Internet usage, browsers and search engines
    {
        id: 'd1-2a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.2', tag: 'practice',
        title: 'Browsers',
        task: 'Which is NOT an internet browser?',
        options: ['Google Chrome', 'Mozilla Firefox', 'Microsoft Word', 'Safari'],
        correctAnswer: 'Microsoft Word',
        explanation: 'Microsoft Word is a word processor, not a browser.',
    },
    {
        id: 'd1-2b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.2', tag: 'practice',
        title: 'Search operators',
        task: 'How do you search Google for the EXACT phrase "digital culture"?',
        options: ['digital culture', '"digital culture"', 'digital OR culture', '-digital culture'],
        correctAnswer: '"digital culture"',
        explanation: 'Quotes find an exact match. Without quotes, the words can be searched independently.',
    },
    {
        id: 'd1-2c', grade: '9-11', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.2', tag: 'practice',
        title: 'URL structure',
        task: 'Fill in the parts of the URL!',
        sentences: [
            { text: 'The https:// is the ___ part of the URL.', options: ['protocol', 'domain', 'path'], correct: 'protocol' },
            { text: 'The www.example.com is the ___ part of the URL.', options: ['protocol', 'domain name', 'parameter'], correct: 'domain name' },
            { text: 'The .com indicates the ___ level domain.', options: ['top (TLD)', 'second', 'third'], correct: 'top (TLD)' },
        ],
        explanation: 'Protocol = https://, domain = website name, TLD = top-level domain (.com, .hu).',
    },

    // 1.3 Free and paid services, forms
    {
        id: 'd1-3a', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.3', tag: 'practice',
        title: 'Free online services',
        task: 'Which are generally free online services?',
        options: ['Google Docs', 'E-mail (Gmail)', 'Adobe Photoshop full version', 'Wikipedia', 'Netflix'],
        correctAnswers: ['Google Docs', 'E-mail (Gmail)', 'Wikipedia'],
        explanation: 'Google Docs, Gmail, and Wikipedia are free. Photoshop and Netflix are paid subscription services.',
    },
    {
        id: 'd1-3b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.3', tag: 'practice',
        title: 'Online form filling',
        task: 'When filling out an online form, what does a red asterisk (*) next to a field mean?',
        options: ['Optional field', 'Required field', 'Username field', 'Error field'],
        correctAnswer: 'Required field',
        explanation: 'The * (asterisk) indicates required fields that must be filled out to submit the form.',
    },

    // 1.4 Word processing
    {
        id: 'd1-4a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.4', tag: 'practice',
        title: 'Keyboard shortcuts',
        task: 'Which keyboard shortcut makes the text bold?',
        options: ['Ctrl + I', 'Ctrl + B', 'Ctrl + U', 'Ctrl + S'],
        correctAnswer: 'Ctrl + B',
        explanation: 'Ctrl+B = Bold, Ctrl+I = Italic, Ctrl+U = Underline, Ctrl+S = Save.',
    },
    {
        id: 'd1-4b', grade: '7-8', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.4', tag: 'practice',
        title: 'Word processing elements',
        task: 'Fill in the word processing terms!',
        sentences: [
            { text: 'Repeating text at the bottom of the pages is found in the ___.', options: ['header', 'footer', 'footnote'], correct: 'footer' },
            { text: 'Repeating text at the top of the pages is called the ___.', options: ['header', 'footer', 'table of contents'], correct: 'header' },
            { text: 'An explanatory note at the bottom of the text is a ___.', options: ['footer', 'footnote', 'style'], correct: 'footnote' },
        ],
        explanation: 'Header = top of page, footer = bottom of page, footnote = explanatory note at the bottom of a specific page.',
    },
    {
        id: 'd1-4c', grade: '9-11', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.4', tag: 'practice',
        title: 'Mail merge and table of contents',
        task: 'Which are true about mail merge? Select all that apply!',
        options: [
            'Generates personalized letters from a data source',
            'You have to type every name manually',
            'The data source can be a spreadsheet or database',
            'Can only be used for e-mail'
        ],
        correctAnswers: [
            'Generates personalized letters from a data source',
            'The data source can be a spreadsheet or database'
        ],
        explanation: 'Mail merge automatically personalizes letters based on a data source like an Excel sheet.',
    },

    // 1.5 Presentation creation
    {
        id: 'd1-5a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.5', tag: 'practice',
        title: 'Presentation basics',
        task: 'Which is NOT a good practice in a presentation?',
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
        id: 'd1-5b', grade: '7-8', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.5', tag: 'practice',
        title: 'Presentation elements',
        task: 'Fill in the presentation terms!',
        sentences: [
            { text: 'The visual change between slides is called a ___.', options: ['animation', 'transition', 'background'], correct: 'transition' },
            { text: 'The movement of an element within a slide is an ___.', options: ['animation', 'transition', 'layout'], correct: 'animation' },
        ],
        explanation: 'Transition = change between slides, animation = movement of elements within a slide.',
    },

    // 1.6 Graphics, image editing
    {
        id: 'd1-6a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.6', tag: 'practice',
        title: 'Raster vs. vector',
        task: 'What happens to a raster image (e.g. .jpg) if we enlarge it significantly?',
        options: [
            'It stays sharp',
            'It becomes pixelated and blocky',
            'It disappears',
            'It automatically improves'
        ],
        correctAnswer: 'It becomes pixelated and blocky',
        explanation: 'Raster graphics consist of pixels, so they become pixelated when enlarged. Vector graphics stay sharp when scaled.',
    },
    {
        id: 'd1-6b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.6', tag: 'practice',
        title: 'Vector graphics benefits',
        task: 'Which format is vector graphics?',
        options: ['.jpg', '.png', '.svg', '.bmp'],
        correctAnswer: '.svg',
        explanation: 'SVG (Scalable Vector Graphics) is a vector format, the others are raster graphics.',
    },

    // 1.7 Multimedia content
    {
        id: 'd1-7a', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.7', tag: 'practice',
        title: 'Multimedia elements',
        task: 'Which are considered multimedia content?',
        options: ['Text', 'Image', 'Audio file', 'Video', 'Animation'],
        correctAnswers: ['Text', 'Image', 'Audio file', 'Video', 'Animation'],
        explanation: '"Multi-media" means multiple types of media elements: text, image, audio, video, animation.',
    },
    {
        id: 'd1-7b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.7', tag: 'practice',
        title: 'Video formats',
        task: 'Which is the most common video format on the internet?',
        options: ['.avi', '.mp4', '.wmv', '.flv'],
        correctAnswer: '.mp4',
        explanation: 'MP4 is the most common because it provides good quality with a small file size. Almost all devices can play it.',
    },

    // 1.8 Web design
    {
        id: 'd1-8a', grade: '7-8', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.8', tag: 'practice',
        title: 'HTML basics',
        task: 'Fill in the HTML code snippets!',
        sentences: [
            { text: 'The tag for the main heading is: ___.', options: ['<h1>', '<p>', '<div>', '<span>'], correct: '<h1>' },
            { text: 'The tag for a paragraph is: ___.', options: ['<h1>', '<p>', '<img>', '<a>'], correct: '<p>' },
            { text: 'To insert an image, we use the ___ tag.', options: ['<p>', '<h1>', '<img>', '<link>'], correct: '<img>' },
        ],
        explanation: '<h1> = main heading, <p> = paragraph, <img> = image.',
    },
    {
        id: 'd1-8b', grade: '9-11', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.8', tag: 'practice',
        title: 'HTML links',
        task: 'Which HTML tag creates a hyperlink?',
        options: ['<link>', '<a href="...">', '<url>', '<ref>'],
        correctAnswer: '<a href="...">',
        explanation: 'The <a> (anchor) tag with the href attribute creates a link.',
    },

    // 1.9 Critical interpretation of information
    {
        id: 'd1-9a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.9', tag: 'practice',
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
        id: 'd1-9b', grade: '7-8', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.9', tag: 'practice',
        title: 'Source checking',
        task: 'How do you check if online information is true?',
        options: [
            'I look it up in multiple independent sources',
            'If it got many likes, it\'s true',
            'I check who the author is',
            'I check the publication date',
            'If the site looks nice, I trust it'
        ],
        correctAnswers: [
            'I look it up in multiple independent sources',
            'I check who the author is',
            'I check the publication date'
        ],
        explanation: 'Always verify information across multiple sources, check the author, and verify the date.',
    },

    // 1.10 Fake news
    {
        id: 'd1-10a', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.10', tag: 'practice',
        title: 'Spotting fake news',
        task: 'Which sign indicates that a news story is likely fake?',
        options: [
            'It contains scientific references',
            'It uses an overly emotional title with many exclamation marks',
            'It names the author and date',
            'Multiple news portals are reporting it'
        ],
        correctAnswer: 'It uses an overly emotional title with many exclamation marks',
        explanation: 'Fake news often appeals to strong emotions. Credible news uses factual language.',
    },
    {
        id: 'd1-10b', grade: '9-11', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.10', tag: 'practice',
        title: 'Deepfake detection',
        task: 'How can you check if a video is a deepfake?',
        options: [
            'I look for unnatural blinking',
            'I believe it because I see it in the video',
            'I look for confirmation in a reliable news source',
            'I check the audio sync with the lips'
        ],
        correctAnswers: [
            'I look for unnatural blinking',
            'I look for confirmation in a reliable news source',
            'I check the audio sync with the lips'
        ],
        explanation: 'Deepfakes can show visual and audio errors. Always check with independent sources!',
    },

    // 1.11 Ethical online behavior
    {
        id: 'd1-11a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.11', tag: 'practice',
        title: 'Netiquette',
        task: 'What is "netiquette"?',
        options: [
            'An antivirus program',
            'The rules of etiquette for internet behavior',
            'A social media site',
            'An email provider'
        ],
        correctAnswer: 'The rules of etiquette for internet behavior',
        explanation: 'Netiquette (network etiquette) refers to the unwritten rules of online communication.',
    },
    {
        id: 'd1-11b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.11', tag: 'practice',
        title: 'Creative Commons',
        task: 'What does a Creative Commons (CC) license mean for an image?',
        options: [
            'It is free to use, but conditions may apply',
            'It is forbidden to download',
            'It can only be used after purchase',
            'It contains a virus'
        ],
        correctAnswer: 'It is free to use, but conditions may apply',
        explanation: 'A CC license allows free use, but you must follow the author\'s conditions (e.g. attribution).',
    },

    // 1.12 Digital footprint
    {
        id: 'd1-12a', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.12', tag: 'practice',
        title: 'Digital footprint',
        task: 'Which actions leave a digital footprint? Select all that apply!',
        options: [
            'A social media post',
            'Online shopping',
            'Reading a paper book',
            'Browsing a website',
            'Online gaming'
        ],
        correctAnswers: [
            'A social media post',
            'Online shopping',
            'Browsing a website',
            'Online gaming'
        ],
        explanation: 'Every online activity leaves a footprint. Reading on paper is not digital.',
    },
    {
        id: 'd1-12b', grade: '7-8', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.12', tag: 'exam',
        title: 'Negative digital footprint',
        task: 'Which actions leave a NEGATIVE digital footprint?',
        options: [
            'Sharing a school project',
            'Publicly bullying a classmate',
            'Sharing personal data publicly',
            'Posting rule-breaking content'
        ],
        correctAnswers: [
            'Publicly bullying a classmate',
            'Sharing personal data publicly',
            'Posting rule-breaking content'
        ],
        explanation: 'Bullying, sharing personal data, and posting rule-breaking content leave a lasting negative footprint.',
    },

    // 1.13 Online communication
    {
        id: 'd1-13a', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.13', tag: 'practice',
        title: 'Parts of an e-mail',
        task: 'Which is NOT a part of an e-mail?',
        options: ['Recipient', 'Subject', 'Password field', 'Attachment'],
        correctAnswer: 'Password field',
        explanation: 'Parts of an e-mail: recipient, subject, body, attachment. The password is required to log in.',
    },
    {
        id: 'd1-13b', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.13', tag: 'practice',
        title: 'Using BCC',
        task: 'Peter is sending an e-mail to a group of 30, but does not want them to see each other\'s addresses. What does he use?',
        options: ['To', 'CC', 'BCC', 'Subject'],
        correctAnswer: 'BCC',
        explanation: 'BCC (Blind Carbon Copy) hides the recipients from each other.',
    },
    {
        id: 'd1-13c', grade: '9-11', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.13', tag: 'practice',
        title: 'Collaboration tools',
        task: 'Which are tools suitable for real-time collaboration?',
        options: ['Google Docs', 'Microsoft Teams', 'Printed paper', 'Notion', 'Fax'],
        correctAnswers: ['Google Docs', 'Microsoft Teams', 'Notion'],
        explanation: 'Google Docs, Teams, and Notion allow for real-time online collaboration.',
    },

    // Additional Questions
    {
        id: 'd1-ext-1', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.1', tag: 'practice',
        title: 'File Compression',
        task: 'What is the main purpose of a .zip file?',
        options: ['To make the computer run faster', 'To compress files into a smaller size', 'To scan for viruses', 'To create a backup of the operating system'],
        correctAnswer: 'To compress files into a smaller size',
        explanation: 'ZIP files compress one or more files to take up less storage space and make them easier to share.',
    },
    {
        id: 'd1-ext-2', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.2', tag: 'practice',
        title: 'Reverse Image Search',
        task: 'How can you find the original source of an image you downloaded?',
        options: ['By renaming the file', 'By using a reverse image search engine (like Google Images)', 'By opening it in Microsoft Word', 'By printing the image'],
        correctAnswer: 'By using a reverse image search engine (like Google Images)',
        explanation: 'Reverse image search allows you to upload an image and find where else it appears on the web.',
    },
    {
        id: 'd1-ext-3', grade: '9-11', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.3', tag: 'practice',
        title: 'Cloud Storage',
        task: 'Which of the following are cloud storage services? Select all that apply.',
        options: ['Google Drive', 'Microsoft Word', 'Dropbox', 'OneDrive', 'Mozilla Firefox'],
        correctAnswers: ['Google Drive', 'Dropbox', 'OneDrive'],
        explanation: 'Google Drive, Dropbox, and OneDrive are popular cloud storage platforms.',
    },
    {
        id: 'd1-ext-4', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.4', tag: 'practice',
        title: 'Document Export',
        task: 'Why might you save a completed Word document as a PDF before sending it?',
        options: ['To make it editable for everyone', 'To ensure the formatting looks the same on every device', 'To add an animation to the text', 'To translate it automatically'],
        correctAnswer: 'To ensure the formatting looks the same on every device',
        explanation: 'PDF (Portable Document Format) locks the layout so it displays consistently regardless of the software or device used to open it.',
    },
    {
        id: 'd1-ext-5', grade: '9-11', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.5', tag: 'practice',
        title: 'Master Slide',
        task: 'In a presentation software, what is the "Slide Master" used for?',
        options: ['To add a password to the file', 'To practice presenting with a timer', 'To apply a consistent layout, logo, or font to all slides at once', 'To compress all images in the presentation'],
        correctAnswer: 'To apply a consistent layout, logo, or font to all slides at once',
        explanation: 'The Slide Master controls the overall design and layout of the entire presentation centrally.',
    },
    {
        id: 'd1-ext-6', grade: '7-8', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.6', tag: 'practice',
        title: 'Image Formats with Transparency',
        task: 'Which image formats support transparent backgrounds?',
        options: ['.jpg', '.png', '.bmp', '.gif'],
        correctAnswers: ['.png', '.gif'],
        explanation: 'PNG and GIF support transparency, while JPG and BMP always have a solid background (often white).',
    },
    {
        id: 'd1-ext-7', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.7', tag: 'practice',
        title: 'Streaming',
        task: 'What does "streaming" a video mean?',
        options: ['Downloading the entire video before watching it', 'Watching the video in real-time over the internet without downloading the file permanently', 'Burning the video to a DVD', 'Editing the video colors'],
        correctAnswer: 'Watching the video in real-time over the internet without downloading the file permanently',
        explanation: 'Streaming allows media delivery in a continuous flow, so you don\'t have to store the file on your device.',
    },
    {
        id: 'd1-ext-8', grade: '9-11', type: 'dropdown', domain: 'Digitális írástudás', topic: '1.8', tag: 'practice',
        title: 'HTML Tables',
        task: 'Fill in the HTML tags for a table.',
        sentences: [
            { text: 'The tag for creating a table row is ___.', options: ['<table>', '<tr>', '<td>', '<th>'], correct: '<tr>' },
            { text: 'The tag for a standard table cell (data) is ___.', options: ['<tr>', '<td>', '<th>', '<tbody>'], correct: '<td>' },
            { text: 'The tag for a table header cell is ___.', options: ['<head>', '<th>', '<td>', '<tr>'], correct: '<th>' }
        ],
        explanation: 'tr = table row, td = table data (cell), th = table header.',
    },
    {
        id: 'd1-ext-9', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.9', tag: 'practice',
        title: 'Clickbait',
        task: 'What is the primary goal of a "clickbait" headline?',
        options: ['To provide accurate scientific information', 'To encourage users to click the link using sensationalism or misleading text', 'To warn users about computer viruses', 'To teach digital literacy'],
        correctAnswer: 'To encourage users to click the link using sensationalism or misleading text',
        explanation: 'Clickbait relies on curiosity gaps and exaggeration to generate ad revenue through page views.',
    },
    {
        id: 'd1-ext-10', grade: '9-11', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.10', tag: 'practice',
        title: 'Fact-checking',
        task: 'What is a "fact-checking" website used for?',
        options: ['To generate passwords', 'To verify the accuracy of claims, news, and rumors circulating online', 'To correct spelling errors in an essay', 'To track your daily screen time'],
        correctAnswer: 'To verify the accuracy of claims, news, and rumors circulating online',
        explanation: 'Organizations like Snopes or Reuters Fact Check independently investigate the truthfulness of viral claims.',
    },
    {
        id: 'd1-ext-11', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.11', tag: 'practice',
        title: 'ALL CAPS',
        task: 'In online communication, typing a message ENTIRELY IN CAPITAL LETTERS is generally considered equivalent to:',
        options: ['Whispering', 'Being very polite', 'Shouting', 'Singing'],
        correctAnswer: 'Shouting',
        explanation: 'Netiquette states that typing in all caps is aggressive and interpreted as shouting.',
    },
    {
        id: 'd1-ext-12', grade: '7-8', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.12', tag: 'practice',
        title: 'Incognito Mode',
        task: 'What does "Incognito" or "Private Browsing" mode actually do? Select all that apply.',
        options: ['Makes you completely invisible to websites', 'Prevents your browser from saving your history and cookies locally', 'Hides your activity from your internet service provider (ISP)', 'Automatically blocks all viruses'],
        correctAnswers: ['Prevents your browser from saving your history and cookies locally'],
        explanation: 'Incognito mode only stops your device from saving local history. Your ISP, school/work network, and the websites can still track you.',
    },
    {
        id: 'd1-ext-13', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.13', tag: 'practice',
        title: 'Phishing',
        task: 'You receive an email claiming your bank account is locked and supplying a link to "verify your details immediately". What is this likely called?',
        options: ['Spam', 'A newsletter', 'Phishing', 'Cyberbullying'],
        correctAnswer: 'Phishing',
        explanation: 'Phishing is a scam where attackers impersonate trusted entities to steal sensitive information like passwords or credit card numbers.',
    },
    {
        id: 'd1-ext-14', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.1', tag: 'practice',
        title: 'Data Backup',
        task: 'Which of the following are good ways to back up your important files?',
        options: ['Saving them to an external hard drive', 'Printing all of them', 'Copying them to a cloud storage service', 'Deleting them immediately', 'Putting them in the Recycle Bin'],
        correctAnswers: ['Saving them to an external hard drive', 'Copying them to a cloud storage service'],
        explanation: 'Backups should be stored on separate physical media or securely in the cloud to protect against data loss.',
    },
    {
        id: 'd1-ext-15', grade: '5-6', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.2', tag: 'practice',
        title: 'Bookmarks',
        task: 'What is the purpose of "Bookmarks" (or Favorites) in a web browser?',
        options: ['To read books online', 'To save web addresses so you can easily find them later', 'To block annoying advertisements', 'To translate webpages'],
        correctAnswer: 'To save web addresses so you can easily find them later',
        explanation: 'Bookmarks store URLs so you do not have to type them or search for them again.',
    },
    {
        id: 'd1-ext-16', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.4', tag: 'practice',
        title: 'Text Alignment',
        task: 'What does "Justified" text alignment do in a document?',
        options: ['Aligns text only to the left margin', 'Centers every line of text', 'Aligns text evenly to both the left and right margins', 'Makes the text bold'],
        correctAnswer: 'Aligns text evenly to both the left and right margins',
        explanation: 'Justified alignment spaces the words out so that both the left and right edges of the paragraph are straight (common in newspapers).',
    },
    {
        id: 'd1-ext-17', grade: '9-11', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.6', tag: 'practice',
        title: 'Image Cropping',
        task: 'When editing an image, what does the "Crop" tool do?',
        options: ['Changes the colors to black and white', 'Removes unwanted outer areas to change the framing or aspect ratio', 'Makes the image file size larger', 'Turns a photo into a vector graphic'],
        correctAnswer: 'Removes unwanted outer areas to change the framing or aspect ratio',
        explanation: 'Cropping cuts off the edges of an image to focus on a specific part or fit a certain shape.',
    },
    {
        id: 'd1-ext-18', grade: '7-8', type: 'multiple-choice', domain: 'Digitális írástudás', topic: '1.7', tag: 'practice',
        title: 'Podcasts',
        task: 'What is a podcast?',
        options: ['A type of computer virus', 'A digital audio program available for download or streaming, often in an episodic format', 'A website that only shows images', 'A hardware device for playing video games'],
        correctAnswer: 'A digital audio program available for download or streaming, often in an episodic format',
        explanation: 'A podcast is typically an audio show, similar to a radio program, distributed over the internet.',
    },
    {
        id: 'd1-ext-19', grade: '5-6', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.11', tag: 'practice',
        title: 'Handling Cyberbullying',
        task: 'What should you do if you or a friend are a victim of cyberbullying?',
        options: ['Bully the person back', 'Save evidence (like screenshots)', 'Delete the app and never use the internet again', 'Tell a trusted adult or teacher', 'Block and report the user'],
        correctAnswers: ['Save evidence (like screenshots)', 'Tell a trusted adult or teacher', 'Block and report the user'],
        explanation: 'Never retaliate. Save evidence, use technical tools (block/report), and seek help from an adult.',
    },
    {
        id: 'd1-ext-20', grade: '7-8', type: 'multiple-select', domain: 'Digitális írástudás', topic: '1.13', tag: 'practice',
        title: 'Video Call Etiquette',
        task: 'Which of the following are good practices during a professional or school video call?',
        options: ['Muting your microphone when not speaking', 'Walking around the house constantly', 'Having a messy and distracting background', 'Ensuring good lighting on your face', 'Looking at the camera when speaking'],
        correctAnswers: ['Muting your microphone when not speaking', 'Ensuring good lighting on your face', 'Looking at the camera when speaking'],
        explanation: 'Muting prevents background noise. Good lighting and eye contact improve communication.',
    }
];
