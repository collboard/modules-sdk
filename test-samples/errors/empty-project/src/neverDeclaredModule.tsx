import * as React from 'react';
import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '../../../../src/runtime/runtime';

const makedModule = makeExtrajsxModule({
    manifest: {
        name: '@collboard/never-declared-module',
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
            <button className="button button-primary button-vertical">
                <div>Nothing happen here</div>
            </button>
        );
    },
});

// Do not run declareModule with makedModule
makedModule;
declareModule;
