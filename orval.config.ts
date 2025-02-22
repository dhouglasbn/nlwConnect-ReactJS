import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'http://localhost:3333/docs/json', // url da documentação da api
    output: {
      target: './src/http/api.ts', // arquivo que vai ser gerado conforme a doc
      client: 'fetch', // vamos fazer chamadas por meio do fetch nativo
      httpClient: 'fetch', // especificando fetch (padrão é axios)
      clean: true, // quando gerar o arquivo apaga o anterior
      baseUrl: 'http://localhost:3333', // url dobackend

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
