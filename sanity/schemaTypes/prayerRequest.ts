export default {
    name: "prayerRequest",
    title: "Prayer Request",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name (optional)",
            type: "string"
        },
        {
            name: "email",
            title: "Email (optional)",
            type: "string"
        },
        {
            name: "request",
            title: "Prayer Request",
            type: "text",
            validation: (Rule) => Rule.required()
        },
        {
            name: "isPublic",
            title: "Display Publicly",
            type: "boolean",
            initialValue: false
        }
    ]
};