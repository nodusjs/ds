import { fn } from "storybook/test";

export default {
  title: "Data/Find",
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-find` do `@nodusjs/x`. Deve ser usado como filho de um `<x-dataset>` para extrair individualmente o registro cujo campo `key` (igual ao `upsert` do dataset) corresponda ao atributo `value`. Quando encontra, emite o evento `find` com o registro completo em `detail`.",
      },
    },
  },
  args: {
    key: "",
    on: "",
    onFind: fn(),
    value: "",
  },
  render: ({ key, on, onFind, value }) => {
    const find = document.createElement("x-find");
    find.setAttribute("key", key);
    find.setAttribute("value", value);
    find.setAttribute("on", on);
    find.addEventListener("find", (e) => onFind(e.detail));
    return find;
  },
  argTypes: {
    key: {
      control: "text",
      description:
        "Nome do campo cuja igualdade com `value` determina o registro a ser buscado (deve coincidir com o `upsert` do `<x-dataset>`).",
    },
    on: {
      control: "text",
      description:
        "O atributo `on` conecta eventos de outros elementos a este componente de forma declarativa, usando a sintaxe `source/event:target/handler|filtro`.",
      table: {
        category: "Echo",
      },
    },
    onFind: {
      action: "find",
      description:
        "Callback disparado quando o registro correspondente é encontrado (recebe o objeto todo em `detail`).",
      table: {
        category: "Echo",
      },
    },
    value: {
      control: "text",
      description:
        "Valor a ser comparado com o campo `key` do dataset para encontrar o registro.",
    },
  },
  tags: ["autodocs"],
};

export const Default = {};
