import { fn } from "storybook/test";

export default {
  title: "Data/Fetch",
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-fetch` do `@nodusjs/x`. Faz requisições HTTP para a URL configurada via atributo `url`, suportando os métodos `get`, `post`, `put` e `delete`. Emite eventos `ok` (quando a resposta chega sem erros) e `error` (quando há falha na requisição), passando o body como `detail`.",
      },
    },
  },
  args: {
    on: "",
    onError: fn(),
    onOk: fn(),
    url: "",
  },
  render: ({ on, onError, onOk, url }) => {
    const fetchEl = document.createElement("x-fetch");
    fetchEl.setAttribute("on", on);
    fetchEl.setAttribute("url", url);
    fetchEl.addEventListener("error", (e) => onError(e.detail));
    fetchEl.addEventListener("ok", (e) => onOk(e.detail));
    return fetchEl;
  },
  argTypes: {
    on: {
      control: "text",
      description:
        "O atributo `on` conecta eventos de outros elementos a este componente de forma declarativa, usando a sintaxe `source/event:target/handler|filtro`.",
      table: {
        category: "Echo",
      },
    },
    onError: {
      action: "error",
      description:
        "Callback disparado quando a requisição falha (recebe o payload de erro).",
      table: {
        category: "Echo",
      },
    },
    onOk: {
      action: "ok",
      description:
        "Callback disparado quando a requisição é bem-sucedida (recebe o payload de dados).",
      table: {
        category: "Echo",
      },
    },
    url: {
      control: "text",
      description:
        "URL base para as requisições HTTP (ex.: `https://api.example.com/resource`).",
    },
  },
  tags: ["autodocs"],
};

export const Default = {};
