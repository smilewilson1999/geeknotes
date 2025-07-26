module.exports = {
  theme: {
    extend: {
      typography: ({ theme }) => ({
        caffeine: {
          css: {
            '--tw-prose-body': theme('colors.amber.900'),
            '--tw-prose-headings': theme('colors.amber.900'),
            '--tw-prose-lead': theme('colors.amber.800'),
            '--tw-prose-links': theme('colors.amber.700'),
            '--tw-prose-bold': theme('colors.amber.900'),
            '--tw-prose-counters': theme('colors.amber.600'),
            '--tw-prose-bullets': theme('colors.amber.400'),
            '--tw-prose-hr': theme('colors.amber.300'),
            '--tw-prose-quotes': theme('colors.amber.800'),
            '--tw-prose-quote-borders': theme('colors.amber.300'),
            '--tw-prose-captions': theme('colors.amber.700'),
            '--tw-prose-code': theme('colors.amber.700'),
            '--tw-prose-pre-code': theme('colors.amber.100'),
            '--tw-prose-pre-bg': theme('colors.amber.900'),
            '--tw-prose-th-borders': theme('colors.amber.300'),
            '--tw-prose-td-borders': theme('colors.amber.200'),
            '--tw-prose-invert-body': theme('colors.amber.200'),
            '--tw-prose-invert-headings': theme('colors.amber.100'),
            '--tw-prose-invert-lead': theme('colors.amber.300'),
            '--tw-prose-invert-links': theme('colors.amber.300'),
            '--tw-prose-invert-bold': theme('colors.amber.100'),
            '--tw-prose-invert-counters': theme('colors.amber.400'),
            '--tw-prose-invert-bullets': theme('colors.amber.600'),
            '--tw-prose-invert-hr': theme('colors.amber.700'),
            '--tw-prose-invert-quotes': theme('colors.amber.200'),
            '--tw-prose-invert-quote-borders': theme('colors.amber.600'),
            '--tw-prose-invert-captions': theme('colors.amber.400'),
            '--tw-prose-invert-code': theme('colors.amber.300'),
            '--tw-prose-invert-pre-code': theme('colors.amber.900'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.amber.600'),
            '--tw-prose-invert-td-borders': theme('colors.amber.700')
          }
        }
      })
    }
  }
}
