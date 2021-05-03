import { Box, Text } from 'ink';
import Table from 'ink-table';
import { observer } from 'mobx-react';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { OutputStats } from './OutputStats';

export const Output = observer(({ outputStats }: { outputStats: OutputStats }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((previousCounter) => previousCounter + 1);
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box borderStyle="double" marginRight={2}>
            <Box borderStyle="round" marginRight={2}>
                <Text color="green">
                    {counter} tests passed {outputStats.test}
                </Text>
            </Box>
            <Table
                data={[
                    {
                        name: 'Sosa Saunders',
                        gender: 'male',
                        age: 17,
                        email: 'sosa.saunders@mail.com',
                        phone: '+1 (809) 435-2786',
                    },
                    {
                        name: 'Angelina Kirk',
                        gender: 'female',
                        age: 3,
                        email: 'angelina@kirk.io',
                        phone: '+1 (870) 567-3516',
                    },
                    {
                        name: 'Bradford Rosales',
                        gender: 'male',
                        age: 20,
                        email: 'bradfordrosales@fast.com',
                        phone: '+1 (918) 573-3240',
                    },
                    {
                        name: 'Gwen Schroeder',
                        gender: 'female',
                        age: 17,
                        email: 'gwen@corp.xyz',
                        phone: '+1 (987) 417-2062',
                    },
                    {
                        name: 'Ellison Mann',
                        gender: 'male',
                        age: 5,
                        email: 'ellisonmann@katakana.com',
                        phone: '+1 (889) 411-2186',
                    },
                ]}
            />
        </Box>
    );

    // TODO: Testing on mobile (with some localtunnel) and QR code
});
