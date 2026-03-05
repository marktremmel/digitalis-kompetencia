// Central questions index – combines all domain files + original questions
import { domain1Questions } from './questions_domain1';
import { domain2Questions } from './questions_domain2';
import { domain3Questions } from './questions_domain3';
import { domain4Questions } from './questions_domain4';
import { questions as originalQuestions } from './questions_original';

// English translations
import { domain1QuestionsEn } from './questions_domain1_en';
import { domain2QuestionsEn } from './questions_domain2_en';
import { domain3QuestionsEn } from './questions_domain3_en';
import { domain4QuestionsEn } from './questions_domain4_en';
import { originalQuestionsEn } from './questions_original_en';

// Map old domain names → new tartalmi keret names
const domainMap = {
    'IT Eszközök': 'IT Eszközök',
    'Információ': 'Digitális írástudás',
    'Tartalomalkotás': 'Adat- és adatbázis-kezelés',
    'Kommunikáció & Biztonság': 'IT Eszközök',
};

const remappedOriginalsHu = originalQuestions.map(q => ({
    ...q,
    domain: domainMap[q.domain] || q.domain,
}));

const remappedOriginalsEn = originalQuestionsEn.map(q => ({
    ...q,
    domain: domainMap[q.domain] || q.domain,
}));

export const questionsHu = [
    ...remappedOriginalsHu,
    ...domain1Questions,
    ...domain2Questions,
    ...domain3Questions,
    ...domain4Questions,
];

export const questionsEn = [
    ...remappedOriginalsEn,
    ...domain1QuestionsEn,
    ...domain2QuestionsEn,
    ...domain3QuestionsEn,
    ...domain4QuestionsEn,
];

// Helper to get questions based on language
export const getQuestions = (language = 'hu') => {
    return language === 'en' ? questionsEn : questionsHu;
};

// All unique domains for filtering
export const DOMAINS = [
    'Digitális írástudás',
    'Adat- és adatbázis-kezelés',
    'Algoritmizálás',
    'IT Eszközök',
];

// Domain translation map for UI
export const DOMAIN_TRANSLATIONS = {
    'Digitális írástudás': 'Digital Literacy',
    'Adat- és adatbázis-kezelés': 'Data & Database Management',
    'Algoritmizálás': 'Algorithms & Programming',
    'IT Eszközök': 'IT Tools & Systems',
};

// Domain display colors
export const DOMAIN_COLORS = {
    'Digitális írástudás': 'bg-blue-500/20 text-blue-400',
    'Adat- és adatbázis-kezelés': 'bg-green-500/20 text-green-400',
    'Algoritmizálás': 'bg-purple-500/20 text-purple-400',
    'IT Eszközök': 'bg-orange-500/20 text-orange-400',
};
