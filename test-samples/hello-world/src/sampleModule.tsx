import * as React from 'react';
import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '../../../src/runtime/runtime';

declareModule(
    makeExtrajsxModule({
        manifest: {
            name: '@collboard/sample-colldev-module',
            title: { en: 'Hello world' },
            description: {
                en: 'Simple sample hello world button for Collboard.com',
            },
            keywords: [],
            categories: ['Productivity', 'Buttons', 'Template'],
            icon: '/assets/icons/copy-material.svg',
        },
        place: ExtraJsxPlace.EdgeRight,
        createExtraJsx() {
            return (
                <button
                    onClick={async () => {
                        alert(`Hello from testing of Collboard modules SDK!`);
                    }}
                    className="button button-primary button-vertical"
                >
                    <span>🥑 Hello World!</span>
                </button>
            );
        },
    }),
);
