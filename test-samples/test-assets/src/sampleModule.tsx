import * as React from 'react';
import { declareModule, makeModalModule } from '../../../src/runtime/runtime';
import logo4 from '../asset-on-root.svg';
import logo5 from '../assets/a/b/c/deeply-nested-asset.svg';
import logo from '../assets/logo.svg';
import ylogo from './default.png';
import xlogo from './xlogo.svg';

declareModule(
    makeModalModule({
        manifest: {
            name: '@collboard/test-assets-module',
            version: '1.0.0',
            title: { en: 'Showcase of assets' },
            description: {
                en: 'Showcase of assets for Collboard modules SDK',
            },
            keywords: [],
            categories: ['Productivity', 'Buttons', 'Template'],
            flags: {
                isHidden: true,
                isExperimental: true,
                isDevelopment: true,
            },
            icon: logo,
        },
        async createModal() {
            const style = { display: 'inline-block', width: 100, height: 100 };

            return {
                content: (
                    <>
                        {' '}
                        <img src={logo} {...{ style }} />
                        <img src={xlogo} {...{ style }} />
                        <img src={ylogo} {...{ style }} />
                        <img src={logo4} {...{ style }} />
                        <img src={logo5} {...{ style }} />
                        <img
                            src="https://collboard.fra1.cdn.digitaloceanspaces.com/assets/18.3.1/logo-small.png"
                            {...{ style }}
                        />{' '}
                    </>
                ),
            };
        },
    }),
);

/**
 * TODO: Pick some more representative assets
 */
