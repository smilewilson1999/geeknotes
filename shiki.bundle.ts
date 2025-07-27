/* Generate by @shikijs/codegen */
import type {
  DynamicImportLanguageRegistration,
  DynamicImportThemeRegistration,
  HighlighterGeneric
} from '@shikijs/types'
import { createSingletonShorthands, createdBundledHighlighter } from '@shikijs/core'
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript'

type BundledLanguage =
  | 'javascript'
  | 'js'
  | 'typescript'
  | 'ts'
  | 'python'
  | 'py'
  | 'java'
  | 'sql'
  | 'go'
  | 'c'
  | 'rust'
  | 'rs'
type BundledTheme = 'one-light' | 'dark-plus'
type Highlighter = HighlighterGeneric<BundledLanguage, BundledTheme>

const bundledLanguages = {
  javascript: () => import('@shikijs/langs-precompiled/javascript'),
  js: () => import('@shikijs/langs-precompiled/javascript'),
  typescript: () => import('@shikijs/langs-precompiled/typescript'),
  ts: () => import('@shikijs/langs-precompiled/typescript'),
  python: () => import('@shikijs/langs-precompiled/python'),
  py: () => import('@shikijs/langs-precompiled/python'),
  java: () => import('@shikijs/langs-precompiled/java'),
  sql: () => import('@shikijs/langs-precompiled/sql'),
  go: () => import('@shikijs/langs-precompiled/go'),
  c: () => import('@shikijs/langs-precompiled/c'),
  rust: () => import('@shikijs/langs-precompiled/rust'),
  rs: () => import('@shikijs/langs-precompiled/rust')
} as Record<BundledLanguage, DynamicImportLanguageRegistration>

const bundledThemes = {
  'one-light': () => import('@shikijs/themes/one-light'),
  'dark-plus': () => import('@shikijs/themes/dark-plus')
} as Record<BundledTheme, DynamicImportThemeRegistration>

const createHighlighter = /* @__PURE__ */ createdBundledHighlighter<BundledLanguage, BundledTheme>({
  langs: bundledLanguages,
  themes: bundledThemes,
  engine: () => createJavaScriptRegexEngine()
})

const {
  codeToHtml,
  codeToHast,
  codeToTokensBase,
  codeToTokens,
  codeToTokensWithThemes,
  getSingletonHighlighter,
  getLastGrammarState
} = /* @__PURE__ */ createSingletonShorthands<BundledLanguage, BundledTheme>(createHighlighter)

export {
  bundledLanguages,
  bundledThemes,
  codeToHast,
  codeToHtml,
  codeToTokens,
  codeToTokensBase,
  codeToTokensWithThemes,
  createHighlighter,
  getLastGrammarState,
  getSingletonHighlighter
}
export type { BundledLanguage, BundledTheme, Highlighter }
