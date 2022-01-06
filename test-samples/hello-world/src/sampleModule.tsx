import * as React from 'react';
import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '../../../src/runtime/runtime';

declareModule(
    makeExtrajsxModule({
        manifest: {
            name: '@collboard/sample-colldev-module',
            version: '1.0.0',
            title: { en: 'Hello world' },
            description: {
                en: 'Simple sample hello world button for Collboard.com',
            },
            keywords: [],
            categories: ['Productivity', 'Buttons', 'Template'],
            icon: '🥑',
            flags: {
                isHidden: true,
                isExperimental: true,
                isDevelopment: true,
            },
        },
        place: ExtraJsxPlace.EdgeRight,
        createExtraJsx() {
            const style = { display: 'inline-block', width: 20, height: 20 };
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
