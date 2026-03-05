// Domain 2: Data and database management (2.1–2.13)

export const domain2QuestionsEn = [
    // 2.1 Concept of data and information
    {
        id: 'd2-1a', grade: '5-6', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.1', tag: 'practice',
        title: 'Data vs. Information',
        task: 'What is the difference between data and information?',
        options: [
            'There is no difference',
            'Data is a raw fact, information is processed, meaningful data',
            'Information is always a number',
            'Data is always text'
        ],
        correctAnswer: 'Data is a raw fact, information is processed, meaningful data',
        explanation: 'Data by itself is a raw fact (e.g., 37°C). When placed in context (body temperature), it becomes information.',
    },

    // 2.2 Data protection, data security, GDPR
    {
        id: 'd2-2a', grade: '7-8', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.2', tag: 'practice',
        title: 'GDPR principles',
        task: 'What are the principles of GDPR?',
        options: [
            'Personal data must only be collected for specified purposes',
            'Anyone can freely access others\' data',
            'There is a right to have data deleted',
            'Companies can store data indefinitely',
            'Consent is required for data processing'
        ],
        correctAnswers: [
            'Personal data must only be collected for specified purposes',
            'There is a right to have data deleted',
            'Consent is required for data processing'
        ],
        explanation: 'GDPR: purpose limitation, right to erasure (right to be forgotten), consent is required.',
    },

    // 2.3 Personal data, sensitive data, public data
    {
        id: 'd2-3a', grade: '5-6', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.3', tag: 'practice',
        title: 'Personal data',
        task: 'Which are personal data? Select all that apply!',
        options: ['Date of birth', 'Favorite season', 'Social security number (TAJ)', 'Home address', 'Today\'s weather'],
        correctAnswers: ['Date of birth', 'Social security number (TAJ)', 'Home address'],
        explanation: 'Personal data makes a person identifiable: name, date of birth, social security number, address.',
    },
    {
        id: 'd2-3b', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.3', tag: 'practice',
        title: 'Sensitive data',
        task: 'Which counts as "special" (sensitive) data according to GDPR?',
        options: ['E-mail address', 'Health data', 'Phone number', 'Name of workplace'],
        correctAnswer: 'Health data',
        explanation: 'Special category data: health, biometric, ethnic, religious, political views – these fall under enhanced protection.',
    },

    // 2.4 Spreadsheets
    {
        id: 'd2-4a', grade: '7-8', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Spreadsheet functions',
        task: 'Select the correct function!',
        sentences: [
            { text: 'Sum of values: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'COUNT'], correct: 'SUM' },
            { text: 'Largest value: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'MIN'], correct: 'MAX' },
            { text: 'Average of values: ___.', options: ['SUM', 'AVERAGE', 'MAX', 'COUNT'], correct: 'AVERAGE' },
        ],
        explanation: 'SUM = total, MAX = largest, AVERAGE = running average.',
    },
    {
        id: 'd2-4b', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'IF function',
        task: 'We give a 10% discount if the amount > 10000. Cell A2 contains the amount. Which is the correct formula?',
        options: ['=IF(A2>10000; A2*0.9; A2)', '=IF(A2<10000; A2*0.1; A2)', '=SUM(A2*0.9)', '=AVERAGE(A2; 0.9)'],
        correctAnswer: '=IF(A2>10000; A2*0.9; A2)',
        explanation: 'IF: if amount > 10000 → ×0.9 (10% discount), otherwise the original price.',
    },
    {
        id: 'd2-4c', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'COUNTIF',
        task: 'How many times does the grade 5 appear? Which is correct?',
        options: ['=SUM(A1:A30)', '=COUNTIF(A1:A30; 5)', '=AVERAGE(A1:A30)', '=MAX(A1:A30)'],
        correctAnswer: '=COUNTIF(A1:A30; 5)',
        explanation: 'COUNTIF counts how many times a condition is met in a range.',
    },
    {
        id: 'd2-4d', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Chart types',
        task: 'Which chart is most suitable for displaying proportions (%)?',
        options: ['Column chart', 'Line chart', 'Pie chart', 'Scatter plot'],
        correctAnswer: 'Pie chart',
        explanation: 'A pie chart is ideal for percentages because the whole = 100%.',
    },

    // 2.5 Data management, data controllers
    {
        id: 'd2-5a', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.5', tag: 'practice',
        title: 'Data controller',
        task: 'What is the definition of a "data controller"?',
        options: [
            'A person who operates the printer',
            'The organization/person who determines the purpose of data processing',
            'An antivirus program',
            'The RAM memory'
        ],
        correctAnswer: 'The organization/person who determines the purpose of data processing',
        explanation: 'The data controller decides on the collection, purpose, and use of data (e.g., a school, a company).',
    },

    // 2.6 Data types, database, data modeling, relations
    {
        id: 'd2-6a', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.6', tag: 'practice',
        title: 'Data types',
        task: 'Match the data with its type!',
        sentences: [
            { text: '"Anna Smith" → ___ type.', options: ['text (TEXT)', 'number (INTEGER)', 'logical (BOOLEAN)'], correct: 'text (TEXT)' },
            { text: '42 → ___ type.', options: ['text', 'whole number (INTEGER)', 'logical'], correct: 'whole number (INTEGER)' },
            { text: 'TRUE/FALSE → ___ type.', options: ['text', 'number', 'logical (BOOLEAN)'], correct: 'logical (BOOLEAN)' },
        ],
        explanation: 'TEXT = text string, INTEGER = whole number, BOOLEAN = true/false.',
    },

    // 2.7 Entity, relationship, attribute
    {
        id: 'd2-7a', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.7', tag: 'practice',
        title: 'ER model concepts',
        task: 'Fill in the database modeling concepts!',
        sentences: [
            { text: 'A "Student" in the database is an ___.', options: ['entity', 'attribute', 'relationship'], correct: 'entity' },
            { text: 'The student\'s "name" is an ___.', options: ['entity', 'attribute (property)', 'relationship'], correct: 'attribute (property)' },
            { text: 'The "Student ATTENDS A CLASS" connection is a ___.', options: ['entity', 'attribute', 'relationship (relation)'], correct: 'relationship (relation)' },
        ],
        explanation: 'Entity = table (e.g. Student), attribute = column/property (e.g. name), relationship = connection between tables.',
    },

    // 2.8 Tables, relationships, relationship types
    {
        id: 'd2-8a', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.8', tag: 'practice',
        title: 'Relationship types',
        task: 'A student can study multiple subjects, and a subject can be studied by multiple students. What kind of relationship is this?',
        options: ['1:1 (one-to-one)', '1:N (one-to-many)', 'N:M (many-to-many)', '0:1 (zero-to-one)'],
        correctAnswer: 'N:M (many-to-many)',
        explanation: 'N:M (many-to-many) relationship: multiple elements on both sides can be connected to each other.',
    },

    // 2.9 Primary and foreign keys
    {
        id: 'd2-9a', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.9', tag: 'practice',
        title: 'Keys in databases',
        task: 'Fill in the sentences about database keys!',
        sentences: [
            { text: 'Every student has a unique identifier, this is the ___.', options: ['primary key', 'foreign key', 'index'], correct: 'primary key' },
            { text: 'In the Grades table, the student_id refers to the Students table, this is the ___.', options: ['primary key', 'foreign key', 'attribute'], correct: 'foreign key' },
        ],
        explanation: 'Primary key (PK) = unique identifier. Foreign key (FK) = refers to the PK of another table.',
    },

    // 2.10 Queries, SQL
    {
        id: 'd2-10a', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.10', tag: 'practice',
        title: 'SQL query',
        task: 'We are looking for books after 2000 in alphabetical order!',
        sentences: [
            { text: '___ title, author FROM books', options: ['SELECT', 'INSERT', 'DELETE', 'UPDATE'], correct: 'SELECT' },
            { text: '___ year > 2000', options: ['WHERE', 'HAVING', 'GROUP BY', 'JOIN'], correct: 'WHERE' },
            { text: '___ title ASC', options: ['ORDER BY', 'SORT BY', 'GROUP BY', 'FILTER BY'], correct: 'ORDER BY' },
        ],
        explanation: 'SELECT chooses columns, WHERE filters rows, ORDER BY sorts the results.',
    },
    {
        id: 'd2-10b', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.10', tag: 'exam',
        title: 'Selection and projection',
        task: 'What is a projection in database management?',
        options: ['Filtering rows based on a condition', 'Selecting columns', 'Joining tables together', 'Deleting data'],
        correctAnswer: 'Selecting columns',
        explanation: 'Projection = selecting columns. Selection = filtering rows based on a condition.',
    },

    // 2.11 Online databases
    {
        id: 'd2-11a', grade: '5-6', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.11', tag: 'practice',
        title: 'Online databases in everyday life',
        task: 'Which are online databases used in everyday life?',
        options: ['Spotify playlist', 'Webshop product catalog', 'Online train schedule', 'Paper phone book', 'Digital library catalog'],
        correctAnswers: ['Spotify playlist', 'Webshop product catalog', 'Online train schedule', 'Digital library catalog'],
        explanation: 'Spotify, webshops, online schedules, and digital libraries are all online databases.',
    },

    // 2.12 Big data, crowdsourcing
    {
        id: 'd2-12a', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.12', tag: 'practice',
        title: 'Big Data',
        task: 'Which is a characteristic of Big Data?',
        options: [
            'Small amounts of quickly processable data',
            'Massive amounts of varied, rapidly generating data',
            'Only text data',
            'Only necessary for banks'
        ],
        correctAnswer: 'Massive amounts of varied, rapidly generating data',
        explanation: 'Big Data: 3V – Volume, Variety, Velocity.',
    },
    {
        id: 'd2-12b', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.12', tag: 'practice',
        title: 'Crowdsourcing',
        task: 'What is crowdsourcing?',
        options: [
            'A type of virus',
            'Voluntary contribution from a large group to a project',
            'The work of a single person',
            'Data stored in the cloud'
        ],
        correctAnswer: 'Voluntary contribution from a large group to a project',
        explanation: 'Crowdsourcing = the "power of the crowd" – built from small contributions of many people (e.g., Wikipedia).',
    },

    // 2.13 Data mining
    {
        id: 'd2-13a', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.13', tag: 'practice',
        title: 'Data mining',
        task: 'What is the goal of data mining?',
        options: [
            'Physical storage of data',
            'Discovering hidden patterns and correlations in large datasets',
            'Deleting data',
            'Creating websites'
        ],
        correctAnswer: 'Discovering hidden patterns and correlations in large datasets',
        explanation: 'Data mining uses statistical methods to look for patterns and trends in large datasets.',
    },
];
