import type { Spell, Houses, Characters, Books } from '../types';

const lang = 'en';
const BASE_URL = 'https://potterapi-fedeperin.vercel.app/' + lang;

const PARAMETERS_HP = {
  SPELLS: "spells",
  BOOKS: "books",
  CHARS: "characters",
  HOUSES: "houses"
} as const;

async function fetchApi<Type>(endpoint: string): Promise<Type> {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) throw new Error('Failed to fetch spells');
  return res.json();
}

export function getSpells() {
  return fetchApi<Spell[]>(PARAMETERS_HP.SPELLS);
}

export function getBooks() {
  return fetchApi<Books[]>(PARAMETERS_HP.BOOKS);
}

export function getChars() {
  return fetchApi<Characters[]>(PARAMETERS_HP.CHARS);
}

export function getHouses() {
  return fetchApi<Houses[]>(PARAMETERS_HP.HOUSES);
}

async function fetchApiByIndex<Type>(
  category: keyof typeof PARAMETERS_HP, 
  index: number
): Promise<Type> {
  const endpoint = PARAMETERS_HP[category]; 
  const res = await fetch(`${BASE_URL}/${endpoint}?index=${index}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export function getSpellByIndex(index: number): Promise<Spell> {
  return fetchApiByIndex<Spell>('SPELLS', index);
}

export function getHouseByIndex(index: number): Promise<Houses> {
  return fetchApiByIndex<Houses>('HOUSES', index);
}

export function getCharacterByIndex(index: number): Promise<Characters> {
  return fetchApiByIndex<Characters>('CHARS', index);
}

export function getBookByIndex(index: number): Promise<Books> {
  return fetchApiByIndex<Books>('BOOKS', index);
}
