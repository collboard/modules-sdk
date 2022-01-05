import * as React from 'react';
import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '../../../src/runtime/runtime';

for (const [key, moduleVariant] of Object.entries({ a: '🍎 Red apple', b: '🍏 Green apple' })) {
    declareModule(
        makeExtrajsxModule({
            manifest: {
                name: `@collboard/module-${key}`,
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
            place: ExtraJsxPlace.EdgeRight,
            createExtraJsx() {
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
