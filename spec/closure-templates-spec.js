'use babel'

import grammarTest from 'atom-grammar-test'
import path from 'path'

describe('Closure Templates grammar', () => {
  let grammar = null

  beforeEach(() => {
    waitsForPromise(() => atom.packages.activatePackage('language-closure-templates'))
    waitsForPromise(() => atom.packages.activatePackage('language-html'))

    runs(() => grammar = atom.grammars.grammarForScopeName('text.html.soy'))
  })

  it('should activate grammar', () => {
    expect(grammar).not.toBeNull()
  })

  grammarTest(path.join(__dirname, 'fixtures/syntax_test_closure_templates.soy'))
})
