// Central questions index – combines all domain files + original questions
import { domain1Questions } from './questions_domain1';
import { domain2Questions } from './questions_domain2';
import { domain3Questions } from './questions_domain3';
import { domain4Questions } from './questions_domain4';

// Import original questions and remap old domain names to updated ones
import { questions as originalQuestions } from './questions_original';

// Map old domain names → new tartalmi keret names
const domainMap = {
    'IT Eszközök': 'IT Eszközök',
    'Információ': 'Digitális írástudás',
    'Tartalomalkotás': 'Adat- és adatbázis-kezelés',
    'Kommunikáció & Biztonság': 'IT Eszközök',
};

const remappedOriginals = originalQuestions.map(q => ({
    ...q,
    domain: domainMap[q.domain] || q.domain,
}));

export const questions = [
    ...remappedOriginals,
    ...domain1Questions,
    ...domain2Questions,
    ...domain3Questions,
    ...domain4Questions,
];

// All unique domains for filtering
export const DOMAINS = [
    'Digitális írástudás',
    'Adat- és adatbázis-kezelés',
    'Algoritmizálás',
    'IT Eszközök',
];

// Domain display colors
export const DOMAIN_COLORS = {
    'Digitális írástudás': 'bg-blue-500/20 text-blue-400',
    'Adat- és adatbázis-kezelés': 'bg-green-500/20 text-green-400',
    'Algoritmizálás': 'bg-purple-500/20 text-purple-400',
    'IT Eszközök': 'bg-orange-500/20 text-orange-400',
};
