export default {
    name: 'themeVerse',
    title: 'Theme Verse',
    type: 'document',
    fields: [
        {
            name: 'reference',
            title: 'Reference (e.g. John 3:16)',
            type: 'string',
        },
        {
            name: 'verse',
            title: 'Verse Text',
            type: 'text',
        },
    ],
};