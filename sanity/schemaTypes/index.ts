import { type SchemaTypeDefinition } from 'sanity';
import { sermon } from './sermon';
import { event } from './event';
import prayerRequest from './prayerRequest';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sermon, event, prayerRequest],
};
