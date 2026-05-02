import { type SchemaTypeDefinition } from 'sanity';
import { sermon } from './sermon';
import { event } from './event';
import prayerRequest from './prayerRequest';
import themeVerse from './themeVerse';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sermon, event, prayerRequest, themeVerse],
};
