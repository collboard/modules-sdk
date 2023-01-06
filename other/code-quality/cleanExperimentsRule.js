const Lint = require('tslint');

class Rule extends Lint.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithFunction(sourceFile, (ctx) => {
            // Note: We do not appear this line when searching across the repositiory for (`! ! !` <- without spaces)
            /* eslint-disable no-useless-escape */
            const pattern = /^\s*(?<line>.*\@\@\@\s*(?<content>.*))\s*$/gm;
            let match;
            while ((match = pattern.exec(sourceFile.text))) {
                ctx.addFailureAt(
                    // TODO: Report position
                    0,
                    0,
                    `missing experiment to cleanup "${match.groups.line}"`,
                );
            }
        });
    }
}

module.exports = { Rule };

/**
 * TODO: We should search (`@ @ @` <- without spaces) also across non-typescript files
 */
