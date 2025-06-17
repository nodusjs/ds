import { fn } from "storybook/test";

export default {
  title: "Data/Dataset",
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-dataset` do `@nodusjs/x`. Gerencia um conjunto de registros em memória e dispara eventos `change` sempre que você chama `push()`, `delete()` ou `reset()`. Use o atributo `upsert` para indicar qual campo é a chave única de cada registro e inclua um `<x-find>` como filho para expor cada valor ao template.",
      },
    },
  },
  args: {
    name: "users",
    on: "",
    onChange: fn(),
    upsert: "id",
  },
  render: ({ name, onChange, upsert }) => {
    const dataset = document.createElement("x-dataset");
    dataset.setAttribute("name", name);
    dataset.setAttribute("upsert", upsert);
    dataset.addEventListener("change", (e) => onChange(e.detail));
    return dataset;
  },
  argTypes: {
    name: {
      control: "text",
      description:
        "Nome do dataset, que prefixa os nomes de evento (`<name>/change`, `<name>/push`, etc.).",
    },
    on: {
      control: "text",
      description:
        "O atributo `on` conecta eventos de outros elementos a este componente de forma declarativa, usando a sintaxe `source/event:target/handler|filtro`.",
      table: {
        category: "Echo",
      },
    },
    onClick: {
      action: "onClick",
      description: "Evento disparado ao clicar no botão (detail incluído).",
      table: {
        category: "Echo",
      },
    },
    upsert: {
      control: "text",
      description:
        "Campo que identifica cada registro unicamente dentro do dataset (será usado pelo `<x-find>` e no payload dos eventos).",
    },
  },
  tags: ["autodocs"],
};

export const Default = {};
