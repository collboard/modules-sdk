module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testRegex: '(/__tests__/.*|(\\.|/)(test))\\.(jsx?|tsx?)$',
    coverageDirectory: './coverage/',
    collectCoverage: true,
    testPathIgnorePatterns: ['dist/*'],
};
