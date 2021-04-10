import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.FunctionColorRelative,
  reject: [
    {
      name: 'should disallow regular color function "saturate"',
      code: `
        .test {
          color: saturate(blue, 20%);
        }
      `,
      expect: {
        errored: true,
        messages: ['Expected the scale-color function to be used'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow regular color function "desaturate"',
      code: `
        .test {
          color: desaturate(blue, 20%);
        }
      `,
      expect: {
        errored: true,
        messages: ['Expected the scale-color function to be used'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow regular color function "darken"',
      code: `
        .test {
          color: darken(blue, .2);
        }
      `,
      expect: {
        errored: true,
        messages: ['Expected the scale-color function to be used'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow regular color function "lighten"',
      code: `
        .test {
          color: lighten(blue, .2);
        }
      `,
      expect: {
        errored: true,
        messages: ['Expected the scale-color function to be used'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow regular color function "opacify"',
      code: `
        .test {
          color: opacify(blue, .2);
        }
      `,
      expect: {
        errored: true,
        messages: ['Expected the scale-color function to be used'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow regular color function "fade-in"',
      code: `
        .test {
          color: fade-in(blue, .2);
        }
      `,
      expect: {
        errored: true,
        messages: ['Expected the scale-color function to be used'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow regular color function "fade-out"',
      code: `
        .test {
          color: fade-out(blue, .2);
        }
      `,
      expect: {
        errored: true,
        messages: ['Expected the scale-color function to be used'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow regular color function "transparentize"',
      code: `
        .test {
          color: transparentize(blue, .2);
        }
      `,
      expect: {
        errored: true,
        messages: ['Expected the scale-color function to be used'],
        severities: ['error'],
      },
    },
  ],
});
