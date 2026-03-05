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

    // 3.3 Logic gates
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
];
