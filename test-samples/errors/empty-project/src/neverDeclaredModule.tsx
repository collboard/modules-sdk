import * as React from 'react';
import { declareModule, makeUserInterfaceModule, UserInterfaceElementPlace } from '../../../../src/runtime/runtime';

const makedModule = makeUserInterfaceModule({
    manifest: {
        name: '@collboard/never-declared-module',
        version: '1.0.0',
        title: { en: 'Hello world' },
        description: {
            en: 'Simple sample hello world button for Collboard.com',
        },
        keywords: [],
        categories: ['Productivity', 'Buttons', 'Template'],
        icon: '/assets/icons/copy-material.svg',
    },
    place: UserInterfaceElementPlace.EdgeRight,
    createElement() {
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
