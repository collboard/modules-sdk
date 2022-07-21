import * as React from 'react';
import { declareModule, makeUserInterfaceModule, UserInterfaceElementPlace } from '../../../src/runtime/runtime';

// Note: Testing that URL object working during the build process.
console.log(new URL(`https://github.com/collboard/collboard`));

for (const [key, moduleVariant] of Object.entries({ a: '🍎 Red apple', b: '🍏 Green apple' })) {
    declareModule(
        makeUserInterfaceModule({
            manifest: {
                // Note: Just for fulltext search: @collboard/module-a @collboard/module-b
                name: `@collboard/module-${key}`,
                version: '1.0.0',
                title: { en: moduleVariant },
                description: {
                    en: 'Sample of multiple modules in one package',
                },
                keywords: [],
                categories: ['Productivity', 'Buttons', 'Template'],
                icon: '/assets/icons/copy-material.svg',
                flags: {
                    isHidden: true,
                    isExperimental: true,
                    isDevelopment: true,
                },
            },
            place: UserInterfaceElementPlace.EdgeRight,
            createElement() {
                return (
                    <button
                        onClick={async () => {
                            alert(`Hello from testing of Collboard modules SDK!`);
                        }}
                        className="button button-primary button-vertical"
                    >
                        <span>{moduleVariant}</span>
                    </button>
                );
            },
        }),
    );
}
