module.exports = {
  // 기본 설정
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  
  // JSX 설정
  jsxSingleQuote: true,
  bracketSameLine: false,
  
  // 기타 설정
  arrowParens: 'avoid',
  endOfLine: 'lf',
  bracketSpacing: true,
  
  // 플러그인 설정
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  
  // Import 정렬 설정
  importOrder: [
    '^react$',
    '^react-dom',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  
  // 파일별 설정
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.{css,scss}',
      options: {
        parser: 'css',
      },
    },
    {
      files: '*.{json,md}',
      options: {
        tabWidth: 2,
      },
    },
  ],
}; 