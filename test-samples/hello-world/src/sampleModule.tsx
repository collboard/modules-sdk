import * as React from 'react';
import { declareModule, ExtraJsxPlace, makeExtrajsxModule } from '../../../src/runtime/runtime';
import logo4 from '../asset-on-root.svg';
import logo5 from '../assets/a/b/c/deeply-nested-asset.svg';
import logo from '../assets/logo.svg';
import ylogo from './default.png';
import xlogo from './xlogo.svg';

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
            icon: '/assets/logo.svg',
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
                    <img src={logo} {...{ style }} />
                    <img src={xlogo} {...{ style }} />
                    <img src={ylogo} {...{ style }} />
                    <img src={logo4} {...{ style }} />
                    <img src={logo5} {...{ style }} />
                    <img
                        src="https://collboard.fra1.cdn.digitaloceanspaces.com/assets/18.3.1/logo-small.png"
                        {...{ style }}
                    />
                    <span>🥑 Hello World!</span>
                </button>
            );
        },
    }),
);

/**
 * !!! Make Assets working
 * TODO: !!! Cleanup sample assets and pick some representative
 * TODO: !!! Make some separate sample just for testing assers (and its various locations and types)
 */
