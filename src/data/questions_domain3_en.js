// Domain 3: Algorithms, programming, robotics, AI (3.1–3.3.1)

export const domain3QuestionsEn = [
    // 3.1.1 Recognizing and analyzing algorithms
    {
        id: 'd3-1a', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.1', tag: 'practice',
        title: 'Algorithms in everyday life',
        task: 'Which is the best example of an algorithm from everyday life?',
        options: [
            'A cake recipe step-by-step',
            'A beautiful picture',
            'A favorite song',
            'A number'
        ],
        correctAnswer: 'A cake recipe step-by-step',
        explanation: 'An algorithm is an exact sequence of steps to achieve a goal – just like a recipe!',
    },

    // 3.1.2 Flowcharts
    {
        id: 'd3-2a', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.2', tag: 'practice',
        title: 'Flowchart shapes',
        task: 'What does a diamond shape represent in a flowchart?',
        options: ['Start/end', 'Decision (yes/no)', 'Action/step', 'Input/output'],
        correctAnswer: 'Decision (yes/no)',
        explanation: 'Diamond = decision, rectangle = action, rounded rectangle = start/end, parallelogram = input/output.',
    },
    {
        id: 'd3-2b', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.2', tag: 'practice',
        title: 'Interpreting a flowchart',
        task: '"Is it raining?" → If YES → ___. What is the logical step?',
        options: [
            'Take an umbrella!',
            'Put on sunglasses!',
            'Go for a run!',
            'Open the window!'
        ],
        correctAnswer: 'Take an umbrella!',
        explanation: 'Flowcharts show the decision-making process step by step. Rain → umbrella.',
    },

    // 3.1.3 Input, output, variables
    {
        id: 'd3-3a', grade: '7-8', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.1.3', tag: 'practice',
        title: 'Input and output',
        task: 'Fill in the programming concepts!',
        sentences: [
            { text: 'Data entered by the user is the program\'s ___.', options: ['input', 'output', 'variable'], correct: 'input' },
            { text: 'The result of the program that is displayed is the ___.', options: ['input', 'output', 'loop'], correct: 'output' },
            { text: 'A temporary storage location for data in a program is a ___.', options: ['input', 'output', 'variable'], correct: 'variable' },
        ],
        explanation: 'Input = incoming data, output = result, variable = named storage location.',
    },
    {
        id: 'd3-3b', grade: '9-11', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.3', tag: 'practice',
        title: 'Variable types',
        task: 'What type of variable is "Anna Smith" in a program?',
        options: ['Integer (whole number)', 'Boolean (logical)', 'String (text)', 'Float (decimal)'],
        correctAnswer: 'String (text)',
        explanation: 'String = text, Integer = whole number, Boolean = true/false, Float = decimal number.',
    },

    // 3.1.4 Control structures
    {
        id: 'd3-4a', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Recognizing loops',
        task: 'Which concept repeats the same step multiple times?',
        options: ['Branch (If/Else)', 'Loop', 'Variable', 'Function'],
        correctAnswer: 'Loop',
        explanation: 'A loop repeats a block of code. A branch makes a decision.',
    },
    {
        id: 'd3-4b', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Interpreting a branch',
        task: 'Set Score = 5 → If Score > 4 Then Say "Great" → Else Say "Try again!" What will it print?',
        options: ['Great', 'Try again!', '5', 'Error'],
        correctAnswer: 'Great',
        explanation: 'Score = 5, which is > 4, so the If condition is true → "Great".',
    },
    {
        id: 'd3-4c', grade: '5-6', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Control structures',
        task: 'Match the concepts!',
        sentences: [
            { text: 'Executing steps one after another: ___.', options: ['sequence', 'branching', 'loop'], correct: 'sequence' },
            { text: 'Two different paths based on a condition: ___.', options: ['sequence', 'branching', 'loop'], correct: 'branching' },
            { text: 'Repeating steps: ___.', options: ['sequence', 'branching', 'loop'], correct: 'loop' },
        ],
        explanation: 'Sequence = order, branching = decision, loop = repetition.',
    },

    // 3.1.4.1 Programming a robot
    {
        id: 'd3-5a', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.4.1', tag: 'practice',
        title: 'Guiding a robot to the target',
        task: 'A robot is standing in the bottom left corner of a 3×3 grid, facing right. The target is the top right corner. What is the shortest path?',
        options: [
            'Forward 2, Turn left, Forward 2',
            'Forward 2, Turn right, Forward 2',
            'Left 2, Forward 2',
            'Backward 2, Right 2'
        ],
        correctAnswer: 'Forward 2, Turn left, Forward 2',
        explanation: 'Facing right → move 2 forward (travels right) → turn left (now facing up) → move 2 forward.',
    },

    // 3.1.5 Block programming
    {
        id: 'd3-6a', grade: '5-6', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.1.5', tag: 'practice',
        title: 'Block programming',
        task: 'Which are block programming platforms?',
        options: ['Scratch', 'Microsoft Word', 'Code.org', 'Blockly', 'Excel'],
        correctAnswers: ['Scratch', 'Code.org', 'Blockly'],
        explanation: 'Scratch, Code.org, and Blockly are visual block programming environments.',
    },
    {
        id: 'd3-6b', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.5', tag: 'practice',
        title: 'Standard algorithms: finding the maximum',
        task: 'We are looking for the largest element in the list [3, 7, 2, 9, 1]. What is the "maximum selection" algorithm?',
        options: [
            'Take the first element as the maximum, then compare every other element to it',
            'Sort the list',
            'Choose randomly',
            'Sum the elements'
        ],
        correctAnswer: 'Take the first element as the maximum, then compare every other element to it',
        explanation: 'Finding the maximum: first element = candidate maximum, then iterate and replace it if a larger one is found.',
    },

    // 3.1.6 Testing, debugging
    {
        id: 'd3-7a', grade: '9-11', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.6', tag: 'practice',
        title: 'Infinite loop debugging',
        task: 'i=1; while(i<=10) { print(i); } – Why is this an infinite loop?',
        options: [
            'Missing the i = i + 1 increment',
            'The condition is wrong',
            'The print is incorrect',
            'There is no error'
        ],
        correctAnswer: 'Missing the i = i + 1 increment',
        explanation: 'If i never increases, the while condition remains true forever → infinite loop.',
    },
    {
        id: 'd3-7b', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.6', tag: 'practice',
        title: 'Syntax error',
        task: 'Your program reports an error and will not start. What could be the cause?',
        options: [
            'A syntax (typing) error in the code',
            'Slow internet',
            'The screen is too big',
            'It does not like the color'
        ],
        correctAnswer: 'A syntax (typing) error in the code',
        explanation: 'A syntax error is the most common issue: misspelled keyword, missing brackets, etc.',
    },

    // 3.2 Robots, sensors
    {
        id: 'd3-8a', grade: '5-6', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.2', tag: 'practice',
        title: 'Sensor types',
        task: 'Which are sensor types used in robots?',
        options: ['Distance sensor', 'Light sensor', 'Printer', 'Temperature sensor', 'Monitor'],
        correctAnswers: ['Distance sensor', 'Light sensor', 'Temperature sensor'],
        explanation: 'Sensors detect things: distance, light, heat, etc. The printer and monitor are output devices.',
    },
    {
        id: 'd3-8b', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.2', tag: 'practice',
        title: 'Event-driven programming',
        task: 'What is "event-driven control" in programming?',
        options: [
            'The program runs randomly',
            'The program executes code in response to an event (e.g., button press)',
            'The program stops by itself',
            'There is no such concept'
        ],
        correctAnswer: 'The program executes code in response to an event (e.g., button press)',
        explanation: 'Event-driven: the code runs when something happens (click, key press, sensor signal).',
    },

    // 3.3 Basics of AI
    {
        id: 'd3-9a', grade: '7-8', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.3', tag: 'practice',
        title: 'Basics of Machine Learning',
        task: 'Which statements are true about machine learning?',
        options: [
            'It learns from large datasets',
            'AI understands emotions exactly like a human',
            'The output depends on the quality of the input data',
            'AI can program itself without intervention'
        ],
        correctAnswers: [
            'It learns from large datasets',
            'The output depends on the quality of the input data'
        ],
        explanation: 'ML: learns from lots of data, "garbage in, garbage out". It does not understand emotions.',
    },
    {
        id: 'd3-9b', grade: '9-11', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.3', tag: 'practice',
        title: 'AI hallucination',
        task: 'What does it mean when an AI chatbot "hallucinates"?',
        options: [
            'It shows visual effects',
            'It confidently states false information',
            'It answers more slowly',
            'It breaks down'
        ],
        correctAnswer: 'It confidently states false information',
        explanation: 'AI hallucination: the model generates false data confidently as if it were true.',
    },

    // 3.3.1 Large Language Models, chatbots
    {
        id: 'd3-10a', grade: '7-8', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.3.1', tag: 'practice',
        title: 'Writing an AI prompt',
        task: 'Fill in the rules for a good AI prompt!',
        sentences: [
            { text: 'For the best result, provide the ___ to the AI.', options: ['context', 'password', 'e-mail address'], correct: 'context' },
            { text: 'Specify the format: e.g. summarize in ___.', options: ['3 bullet points', '500 pages', 'a drawing'], correct: '3 bullet points' },
        ],
        explanation: 'Good prompt: context + role + specific format requirement.',
    },
    {
        id: 'd3-10b', grade: '9-11', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.3.1', tag: 'practice',
        title: 'AI bias and ethics',
        task: 'Fill in the sentences about AI ethics!',
        sentences: [
            { text: 'If an AI is trained exclusively on English data, the result will be ___.', options: ['biased', 'perfect', 'random'], correct: 'biased' },
            { text: 'Text generated by AI must always be ___.', options: ['verified', 'accepted', 'deleted'], correct: 'verified' },
        ],
        explanation: 'Biased data leads to biased results. AI output must always be verified.',
    },

    {
        id: 'd3-11a', grade: '9-11', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.1', tag: 'practice',
        title: 'Logic gates',
        task: 'Fill in the results of the logic gates!',
        sentences: [
            { text: 'AND: A=TRUE, B=TRUE → ___', options: ['TRUE', 'FALSE'], correct: 'TRUE' },
            { text: 'OR: A=TRUE, B=FALSE → ___', options: ['TRUE', 'FALSE'], correct: 'TRUE' },
            { text: 'NOT: A=TRUE → ___', options: ['TRUE', 'FALSE'], correct: 'FALSE' },
        ],
        explanation: 'AND: both must be true; OR: at least one true; NOT: reverses the value.',
    },

    // Additional Questions
    {
        id: 'd3-ext-1', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.5', tag: 'practice',
        title: 'Scratch: Broadcast Message',
        task: 'In Scratch, what is the purpose of the "broadcast message" feature?',
        options: ['To send an email to the creator', 'To allow different sprites to communicate and trigger scripts in each other', 'To display text on the screen', 'To increase the volume of the game'],
        correctAnswer: 'To allow different sprites to communicate and trigger scripts in each other',
        explanation: 'Broadcasting sends a hidden signal that other sprites can "listen" for using the "When I receive [message]" block.',
    },
    {
        id: 'd3-ext-2', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Functions and Subroutines',
        task: 'Why do programmers use "functions" or "subroutines"?',
        options: ['To make the computer slower', 'To break the code into smaller, reusable, and easier-to-read blocks', 'To change the language to binary', 'To automatically fix all errors'],
        correctAnswer: 'To break the code into smaller, reusable, and easier-to-read blocks',
        explanation: 'Functions allow you to write a piece of code once and reuse it multiple times without copying and pasting.',
    },
    {
        id: 'd3-ext-3', grade: '9-11', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.1.6', tag: 'practice',
        title: 'Types of Programming Errors',
        task: 'Which of the following are distinct types of programming errors?',
        options: ['Syntax Error', 'Hardware Error', 'Runtime Error', 'Semantic (Logical) Error', 'Electric Error'],
        correctAnswers: ['Syntax Error', 'Runtime Error', 'Semantic (Logical) Error'],
        explanation: 'Syntax (typos), Runtime (crashing while running), and Semantic (running but producing the wrong output) are the 3 main types of code errors.',
    },
    {
        id: 'd3-ext-4', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.3', tag: 'practice',
        title: 'Arrays and Lists',
        task: 'What is an "array" or "list" in programming used for?',
        options: ['Storing a single true/false value', 'Storing a collection or sequence of multiple values under a single variable name', 'Deleting files from the hard drive', 'Connecting to the internet'],
        correctAnswer: 'Storing a collection or sequence of multiple values under a single variable name',
        explanation: 'An array conceptually looks like a list: e.g., shopping_list = ["apples", "bananas", "milk", "bread"].',
    },
    {
        id: 'd3-ext-5', grade: '9-11', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Loop Varieties',
        task: 'Match the loop description to its common name.',
        sentences: [
            { text: 'A loop that repeats a specific number of times (e.g., counting from 1 to 10): ___', options: ['For loop', 'While loop', 'Infinite loop'], correct: 'For loop' },
            { text: 'A loop that continues repeating AS LONG AS a certain condition is true: ___', options: ['For loop', 'While loop', 'Infinite loop'], correct: 'While loop' },
        ],
        explanation: 'For loops are count-controlled (run exactly X times). While loops are condition-controlled (run until something changes).',
    },
    {
        id: 'd3-ext-6', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.2', tag: 'practice',
        title: 'Actuators in Robotics',
        task: 'If a sensor is the "eye/ear" of a robot, what is a motor considered?',
        options: ['A brain', 'An actuator (muscle/output)', 'A power supply', 'A network card'],
        correctAnswer: 'An actuator (muscle/output)',
        explanation: 'Sensors take input in. Actuators (like motors, lights, speakers) produce the physical output or action.',
    },
    {
        id: 'd3-ext-7', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.2', tag: 'practice',
        title: 'Flowchart Rules',
        task: 'In a standard flowchart, what shape is used to take INPUT from the user or output a result?',
        options: ['Rectangle', 'Diamond', 'Parallelogram', 'Circle'],
        correctAnswer: 'Parallelogram',
        explanation: 'A parallelogram naturally Slants In (Input) and Out (Output). A rectangle is for normal processes.',
    },
    {
        id: 'd3-ext-8', grade: '9-11', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Sorting and Searching',
        task: 'Select the true statements about computer algorithms.',
        options: ['Binary Search is generally much faster than Linear Search on sorted data', 'Linear Search requires the list to be perfectly sorted first', 'Bubble Sort is the fastest sorting algorithm known', 'Algorithms are independent of the programming language used'],
        correctAnswers: ['Binary Search is generally much faster than Linear Search on sorted data', 'Algorithms are independent of the programming language used'],
        explanation: 'Binary search splits data in half each time (very fast). Algorithms are abstract math concepts, independent of Java, Python, etc.',
    },
    {
        id: 'd3-ext-9', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.3.1', tag: 'practice',
        title: 'Prompt Engineering: Persona',
        task: 'Why might you start an AI prompt with "Act as an expert middle school science teacher"?',
        options: ['To hack the AI', 'To trick the AI into giving its password', 'To give the AI a specific persona, which helps it adopt the appropriate tone and vocabulary', 'To make the AI run faster'],
        correctAnswer: 'To give the AI a specific persona, which helps it adopt the appropriate tone and vocabulary',
        explanation: 'Assigning a persona forces the Large Language Model to pull contextually accurate information tailored to that specific audience.',
    },
    {
        id: 'd3-ext-10', grade: '9-11', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.3', tag: 'practice',
        title: 'Generative AI',
        task: 'What distinguishes "Generative AI" (like Midjourney or ChatGPT) from traditional AI?',
        options: ['It only uses physical robots', 'It is capable of creating brand new, original content (text, image, audio) rather than just categorizing existing data', 'It does not use machine learning', 'It is entirely rule-based'],
        correctAnswer: 'It is capable of creating brand new, original content (text, image, audio) rather than just categorizing existing data',
        explanation: 'Traditional AI often classifies or analyzes (e.g. self-driving vision). Generative AI creates net-new pixels or words.',
    },
    {
        id: 'd3-ext-11', grade: '5-6', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.1.3', tag: 'practice',
        title: 'Variable Rules',
        task: 'Which of the following are generally BAD or invalid names for a variable in programming?',
        options: ['player_score', '1stPlayerScore', 'player score', 'totalCoins', 'score'],
        correctAnswers: ['1stPlayerScore', 'player score'],
        explanation: 'Variables usually cannot start with numbers, and they cannot contain spaces. Use underscores (_).',
    },
    {
        id: 'd3-ext-12', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.6', tag: 'practice',
        title: 'Semantic Errors',
        task: 'Your program runs perfectly without crashing, but the character jumps DOWN instead of UP when you press space. What kind of error is this?',
        options: ['Syntax Error', 'Compiler Error', 'Semantic (Logical) Error', 'Network Error'],
        correctAnswer: 'Semantic (Logical) Error',
        explanation: 'The grammar of the code is correct (no syntax error), but the logic tells the computer to do the wrong thing.',
    },
    {
        id: 'd3-ext-13', grade: '9-11', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.3', tag: 'practice',
        title: 'AI Terminology',
        task: 'Match the AI terms to their definitions.',
        sentences: [
            { text: 'A subset of AI where the system learns patterns from data without explicit programming: ___', options: ['Machine Learning', 'Turing Test', 'Deep Learning'], correct: 'Machine Learning' },
            { text: 'A technique inspired by the human brain that uses multi-layered artificial neural networks: ___', options: ['Machine Learning', 'Turing Test', 'Deep Learning'], correct: 'Deep Learning' },
        ],
        explanation: 'AI is the broad field. Machine Learning is the method. Deep Learning is the advanced sub-technique using neural networks.',
    },
    {
        id: 'd3-ext-14', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1', tag: 'practice',
        title: 'Boolean Expressions',
        task: 'If A is TRUE and B is FALSE, what is the result of the expression: (A OR B) AND A ?',
        options: ['TRUE', 'FALSE', 'Syntax Error', '0'],
        correctAnswer: 'TRUE',
        explanation: '(TRUE OR FALSE) becomes TRUE. Then, TRUE AND TRUE results in TRUE.',
    },
    {
        id: 'd3-ext-15', grade: '5-6', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1', tag: 'practice',
        title: 'Programming Languages',
        task: 'Which of the listed items is NOT a programming language?',
        options: ['Python', 'JavaScript', 'HTML', 'C++'],
        correctAnswer: 'HTML',
        explanation: 'HTML is a "Markup" Language used to structure websites. It does not have logic (like loops or if statements).',
    },
    {
        id: 'd3-ext-16', grade: '9-11', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.3.1', tag: 'practice',
        title: 'AI Bias Example',
        task: 'If a facial recognition AI struggles to recognize certain ethnic groups, what is the most likely cause?',
        options: ['The camera lens was dirty', 'The AI became self-aware and malicious', 'The training data predominantly consisted of faces from only one demographic group', 'The programmers purposefully wrote rules to ignore those groups'],
        correctAnswer: 'The training data predominantly consisted of faces from only one demographic group',
        explanation: 'AI models reflect the biases present in the data they were fed. A lack of diverse training data causes biased recognition.',
    },
    {
        id: 'd3-ext-17', grade: '7-8', type: 'dropdown', domain: 'Algoritmizálás', topic: '3.2', tag: 'practice',
        title: 'IoT (Internet of Things)',
        task: 'Identify the components of an IoT system.',
        sentences: [
            { text: 'A smart thermostat gathering room temperature data acts as a ___.', options: ['Cloud Server', 'Sensor', 'Smartphone'], correct: 'Sensor' },
            { text: 'The data is sent over the internet to be analyzed by a ___.', options: ['Cloud Server', 'Sensor', 'Battery'], correct: 'Cloud Server' },
        ],
        explanation: 'IoT relies on physical devices equipped with sensors transmitting data over the internet to centralized servers (cloud).',
    },
    {
        id: 'd3-ext-18', grade: '9-11', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.3', tag: 'practice',
        title: 'The Turing Test',
        task: 'What was Alan Turing\'s original purpose for the "Turing Test" (The Imitation Game)?',
        options: ['To test if a computer could defeat a human in chess', 'To measure a computer\'s processing speed in Megahertz', 'To determine if a machine can exhibit intelligent behavior indistinguishable from that of a human', 'To check if a machine can hold a believable text conversation'],
        correctAnswers: ['To determine if a machine can exhibit intelligent behavior indistinguishable from that of a human', 'To check if a machine can hold a believable text conversation'],
        explanation: 'The test involves a human evaluator trying to distinguish between a human and machine response in a text-based chat.',
    },
    {
        id: 'd3-ext-19', grade: '7-8', type: 'multiple-choice', domain: 'Algoritmizálás', topic: '3.1.4', tag: 'practice',
        title: 'Modularity',
        task: 'What is the main advantage of "modular programming"?',
        options: ['It uses 100% of the CPU', 'The code is broken down into separate, interchangeable modules making it easier to debug and team-program', 'It prevents all viruses', 'It requires writing everything on a single line'],
        correctAnswer: 'The code is broken down into separate, interchangeable modules making it easier to debug and team-program',
        explanation: 'Modularity means dividing a large program into smaller, independent chunks for better management.',
    },
    {
        id: 'd3-ext-20', grade: '5-6', type: 'multiple-select', domain: 'Algoritmizálás', topic: '3.1.6', tag: 'practice',
        title: 'Debugging Steps',
        task: 'When you encounter a bug in your code, which steps are helpful to fix it?',
        options: ['Reading the error message provided by the computer', 'Changing random lines of code until it works', 'Adding "print" statements to see variable values', 'Deleting the entire file and starting over'],
        correctAnswers: ['Reading the error message provided by the computer', 'Adding "print" statements to see variable values'],
        explanation: 'Good debugging involves reading errors and tracing logic (e.g. using print). Random changes or deleting everything rarely helps.',
    }
];
