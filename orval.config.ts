import { defineConfig } from 'orval'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default defineConfig({
  api: {
    input: `${API_URL}/docs/json`, // url da documentação da api
    output: {
      target: './src/http/api.ts', // arquivo que vai ser gerado conforme a doc
      client: 'fetch', // vamos fazer chamadas por meio do fetch nativo
      httpClient: 'fetch', // especificando fetch (padrão é axios)
      clean: true, // quando gerar o arquivo apaga o anterior
      baseUrl: API_URL, // url dobackend

      override: {
        fetch: {
          // faz as respostas retornarem só os dados (sem http status code)
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})

// npx orval
