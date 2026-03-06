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

    // Additional Questions
    {
        id: 'd2-ext-1', grade: '5-6', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Cell References',
        task: 'In a spreadsheet, what does the dollar sign ($) do in a cell reference like $A$1?',
        options: ['Converts the number to currency', 'Creates an absolute reference that does not change when copied', 'Highlights the cell in green', 'Multiplies the value by 100'],
        correctAnswer: 'Creates an absolute reference that does not change when copied',
        explanation: 'The $ sign locks the column and/or row so the reference remains absolute and does not shift when you drag formulas.',
    },
    {
        id: 'd2-ext-2', grade: '7-8', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.2', tag: 'practice',
        title: 'Data Breaches',
        task: 'According to GDPR, what should a company usually do if a severe data breach occurs?',
        options: ['Delete the entire database immediately', 'Notify the relevant supervisory authority within 72 hours', 'Inform the affected users', 'Keep it a secret to avoid panic'],
        correctAnswers: ['Notify the relevant supervisory authority within 72 hours', 'Inform the affected users'],
        explanation: 'GDPR requires organizations to report significant data breaches to authorities and often directly to the impacted users.',
    },
    {
        id: 'd2-ext-3', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.10', tag: 'practice',
        title: 'SQL INSERT',
        task: 'Which SQL command is used to add a new row of data to a table?',
        options: ['ADD ROW', 'INSERT INTO', 'UPDATE TABLE', 'NEW RECORD'],
        correctAnswer: 'INSERT INTO',
        explanation: 'The INSERT INTO statement is used to insert new records in a table.',
    },
    {
        id: 'd2-ext-4', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Spreadsheet Filtering',
        task: 'What is the purpose of the "Filter" tool in a spreadsheet?',
        options: ['To delete unwanted data permanently', 'To temporarily hide rows that do not meet specific criteria', 'To change the font color of every cell', 'To automatically translate the text'],
        correctAnswer: 'To temporarily hide rows that do not meet specific criteria',
        explanation: 'Filtering allows you to quickly view only the data you care about by hiding the rest without deleting it.',
    },
    {
        id: 'd2-ext-5', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.8', tag: 'practice',
        title: 'Database Normalization',
        task: 'Fill in the blanks regarding database normalization.',
        sentences: [
            { text: 'The main goal of normalization is to reduce data ___.', options: ['speed', 'security', 'redundancy (duplication)'], correct: 'redundancy (duplication)' },
            { text: 'Normalization divides larger tables into smaller ones and links them using ___.', options: ['passwords', 'relationships (keys)', 'macros'], correct: 'relationships (keys)' },
        ],
        explanation: 'Normalization organizes a database to reduce redundancy and improve data integrity by establishing clear relationships.',
    },
    {
        id: 'd2-ext-6', grade: '5-6', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.3', tag: 'practice',
        title: 'Public Data',
        task: 'Which of the following describes "Open Data" (Nyílt adatok)?',
        options: ['Data that requires a high-level password to access', 'Personal medical records', 'Data that is freely available to everyone to use and republish (e.g., public transport schedules)', 'Classified government secrets'],
        correctAnswer: 'Data that is freely available to everyone to use and republish (e.g., public transport schedules)',
        explanation: 'Open data is public information that anyone can access, use, or share without restrictions.',
    },
    {
        id: 'd2-ext-7', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.13', tag: 'practice',
        title: 'Data Mining Example',
        task: 'How might a supermarket use data mining?',
        options: ['To physically print receipts', 'To analyze purchase history and discover that people who buy diapers on Fridays often buy beer, allowing targeted sales', 'To clean the floors using robots', 'To lock the doors at night'],
        correctAnswer: 'To analyze purchase history and discover that people who buy diapers on Fridays often buy beer, allowing targeted sales',
        explanation: 'Data mining looks for hidden correlations in huge datasets to help businesses make strategic decisions.',
    },
    {
        id: 'd2-ext-8', grade: '9-11', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.7', tag: 'practice',
        title: 'ER Diagram Shapes',
        task: 'Identify what the shapes represent in a standard Entity-Relationship (ER) diagram.',
        sentences: [
            { text: 'A rectangle represents an ___.', options: ['attribute', 'entity', 'relationship'], correct: 'entity' },
            { text: 'An oval represents an ___.', options: ['attribute', 'entity', 'relationship'], correct: 'attribute' },
            { text: 'A diamond represents a ___.', options: ['attribute', 'entity', 'relationship'], correct: 'relationship' }
        ],
        explanation: 'In ER diagrams: Rectangle = Entity/Table, Oval = Attribute/Column, Diamond = Relationship.',
    },
    {
        id: 'd2-ext-9', grade: '7-8', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Spreadsheet Errors',
        task: 'Which of the following are common error messages in spreadsheet software (like Excel)?',
        options: ['#DIV/0!', '#NAME?', 'ERROR_404', '#VALUE!'],
        correctAnswers: ['#DIV/0!', '#NAME?', '#VALUE!'],
        explanation: '#DIV/0! (division by zero), #NAME? (unrecognized function name), and #VALUE! (wrong data type) are common Excel errors.',
    },
    {
        id: 'd2-ext-10', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.10', tag: 'practice',
        title: 'SQL UPDATE',
        task: 'What does the SQL UPDATE statement do?',
        options: ['Creates a new table', 'Deletes all data in the database', 'Modifies existing records in a table', 'Restarts the database server'],
        correctAnswer: 'Modifies existing records in a table',
        explanation: 'UPDATE is used to change existing values in the database, usually combined with a WHERE clause.',
    },
    {
        id: 'd2-ext-11', grade: '5-6', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.1', tag: 'practice',
        title: 'Digital Information',
        task: 'Which of the following are examples of how computers store data?',
        options: ['Binary code (1s and 0s)', 'Analog sound waves', 'Megabytes and Gigabytes', 'Handwritten notes'],
        correctAnswers: ['Binary code (1s and 0s)', 'Megabytes and Gigabytes'],
        explanation: 'Computers store all digital information using binary code, measured in units like MB or GB.',
    },
    {
        id: 'd2-ext-12', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.5', tag: 'practice',
        title: 'Data Processor',
        task: 'What is the role of a "Data Processor" (Adatfeldolgozó)?',
        options: ['They decide why the data is collected', 'They act on behalf of the Data Controller to process the data (e.g., a cloud hosting company)', 'They are the person whose data is being collected', 'They legally own the data'],
        correctAnswer: 'They act on behalf of the Data Controller to process the data (e.g., a cloud hosting company)',
        explanation: 'The Controller decides the purpose, while the Processor handles the technical processing on the Controller\'s behalf.',
    },
    {
        id: 'd2-ext-13', grade: '9-11', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.12', tag: 'practice',
        title: 'NoSQL Databases',
        task: 'Which characteristics generally apply to NoSQL databases compared to traditional Relational (SQL) databases?',
        options: ['They use strict, rigid tables and columns only', 'They are often better suited for unstructured Big Data', 'They can store data as JSON documents', 'They cannot be used on the internet'],
        correctAnswers: ['They are often better suited for unstructured Big Data', 'They can store data as JSON documents'],
        explanation: 'NoSQL databases (like MongoDB) are flexible and document-oriented, making them great for vast, unstructured Big Data.',
    },
    {
        id: 'd2-ext-14', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.9', tag: 'practice',
        title: 'Auto-increment',
        task: 'What is the benefit of an "Auto-increment" primary key in a database?',
        options: ['It automatically encrypts the database', 'It automatically generates a unique sequential number for every new row', 'It corrects spelling mistakes', 'It deletes old rows automatically'],
        correctAnswer: 'It automatically generates a unique sequential number for every new row',
        explanation: 'Auto-increment ensures that every new record gets a unique ID number without manual intervention.',
    },
    {
        id: 'd2-ext-15', grade: '5-6', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.11', tag: 'practice',
        title: 'Database Searching',
        task: 'When using a library\'s online catalog, what are you doing?',
        options: ['Writing a new book', 'Querying an online database to find a specific record', 'Hacking the school server', 'Installing an operating system'],
        correctAnswer: 'Querying an online database to find a specific record',
        explanation: 'A catalog is a database. When you search for an author or title, you are running a query to retrieve information.',
    },
    {
        id: 'd2-ext-16', grade: '9-11', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.8', tag: 'practice',
        title: '1:N Relationship',
        task: 'Which is a realistic example of a "One-to-Many" (1:N) relationship?',
        options: ['One student has exactly one fingerprint', 'One student can check out multiple books, but each physical book can only be checked out by one student at a time', 'Many students attend many different courses', 'One teacher only teaches one student'],
        correctAnswer: 'One student can check out multiple books, but each physical book can only be checked out by one student at a time',
        explanation: 'One person (1) -> Multiple books (N). This is the classic 1:N structure.',
    },
    {
        id: 'd2-ext-17', grade: '7-8', type: 'dropdown', domain: 'Adat- és adatbázis-kezelés', topic: '2.6', tag: 'practice',
        title: 'Validating Data Types',
        task: 'Choose the correct data type for the information.',
        sentences: [
            { text: 'A user\'s birth date (e.g., 2005-04-12): ___.', options: ['TEXT', 'DATE', 'BOOLEAN'], correct: 'DATE' },
            { text: 'A user\'s profile picture: ___.', options: ['BLOB / IMAGE', 'INTEGER', 'BOOLEAN'], correct: 'BLOB / IMAGE' },
            { text: 'Does the user have a premium account?: ___.', options: ['TEXT', 'INTEGER', 'BOOLEAN'], correct: 'BOOLEAN' }
        ],
        explanation: 'DATE for time, BLOB (Binary Large Object) for files/images, BOOLEAN for Yes/No questions.',
    },
    {
        id: 'd2-ext-18', grade: '9-11', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.10', tag: 'practice',
        title: 'SQL DELETE vs DROP',
        task: 'What is the difference between DELETE and DROP in SQL?',
        options: ['There is no difference', 'DELETE removes specific rows from a table', 'DROP deletes the entire table or database structure', 'DROP is used to lower the volume'],
        correctAnswers: ['DELETE removes specific rows from a table', 'DROP deletes the entire table or database structure'],
        explanation: 'DELETE removes data inside a table but keeps the table structure. DROP completely destroys the table/database itself.',
    },
    {
        id: 'd2-ext-19', grade: '7-8', type: 'multiple-choice', domain: 'Adat- és adatbázis-kezelés', topic: '2.2', tag: 'practice',
        title: 'Right to Data Portability',
        task: 'Under GDPR, what does the "Right to Data Portability" mean?',
        options: ['You can carry your laptop anywhere', 'You have the right to receive your personal data in a structured, machine-readable format to move it to another service', 'Your data must be stored on a USB drive', 'Companies can sell your data to anyone'],
        correctAnswer: 'You have the right to receive your personal data in a structured, machine-readable format to move it to another service',
        explanation: 'Data portability allows you to take your data (like Spotify playlists or Facebook posts) and easily transfer it to a competing service.',
    },
    {
        id: 'd2-ext-20', grade: '5-6', type: 'multiple-select', domain: 'Adat- és adatbázis-kezelés', topic: '2.4', tag: 'practice',
        title: 'Spreadsheet Formatting',
        task: 'Which capabilities are available in most spreadsheet applications (like Excel or Google Sheets)?',
        options: ['Changing cell background colors', 'Playing 3D video games', 'Merging two or more cells together', 'Sorting data alphabetically'],
        correctAnswers: ['Changing cell background colors', 'Merging two or more cells together', 'Sorting data alphabetically'],
        explanation: 'Spreadsheets are built for formatting, merging, and sorting data, not for playing 3D video games.',
    }
];
