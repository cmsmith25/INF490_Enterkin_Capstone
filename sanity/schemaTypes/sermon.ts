import { defineType, defineField } from 'sanity'

export const sermon = defineType({
    name: 'sermon',
    title: 'Sermons',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'videoUrl',
            title: 'YouTube Video URL',
            type: 'url',
            description: 'Paste the YouTube video link here',
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),

        defineField({
            name: 'speaker',
            title: 'Speaker',
            type: 'string',
            initialValue: 'Pastor Eric Taylor',
        }),

    ],
})