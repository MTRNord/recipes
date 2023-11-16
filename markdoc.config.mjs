import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
    tags: {
        card_grid: {
            render: component('@astrojs/starlight/components', 'CardGrid'),
            attributes: {
                // Markdoc requires type defs for each attribute.
                // These should mirror the `Props` type of the component
                // you are rendering.
                // See Markdoc's documentation on defining attributes
                // https://markdoc.dev/docs/attributes#defining-attributes
                stagger: { type: Boolean },
            },
        },
        card: {
            render: component('@astrojs/starlight/components', 'Card'),
            attributes: {
                title: { type: String },
                icon: { type: String },
            },
        },
    },
});