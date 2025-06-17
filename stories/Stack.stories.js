import { fn } from "storybook/test";

export default {
  title: "Layout/Stack",
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-stack` do `@nodusjs/x`. Um container flexível que empilha elementos, configurando direção, alinhamento, espaçamento e dimensões de forma declarativa.",
      },
    },
  },
  args: {
    align: "start",
    direction: "row",
    gap: "md",
    height: "",
    hidden: false,
    justify: "flex-start",
    on: "",
    width: "",
  },
  render: ({ align, direction, gap, height, hidden, justify, on, width }) => {
    const stack = document.createElement("x-stack");
    stack.setAttribute("align", align);
    stack.setAttribute("direction", direction);
    stack.setAttribute("gap", gap);
    stack.setAttribute("height", height);
    stack.setAttribute("hidden", hidden);
    stack.setAttribute("justify", justify);
    stack.setAttribute("on", on);
    stack.setAttribute("width", width);

    stack.innerHTML = `
      <x-text>Item 1</x-text>
      <x-text>Item 2</x-text>
      <x-text>Item 3</x-text>
    `;

    return stack;
  },
  argTypes: {
    align: {
      control: { type: "select" },
      options: ["start", "center", "end", "stretch"],
      description: "Alinhamento cruzado dos itens (align-items).",
      table: { defaultValue: { summary: "start" } },
    },
    direction: {
      control: { type: "select" },
      options: ["row", "column", "row-reverse", "column-reverse"],
      description: "Direção do empilhamento dos filhos.",
      table: { defaultValue: { summary: "row" } },
    },
    gap: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Espaçamento entre cada item.",
      table: { defaultValue: { summary: "md" } },
    },
    height: {
      control: "text",
      description: "Altura do container (ex: `100px`, `fill`).",
    },
    hidden: {
      control: "boolean",
      description: "Oculta o container visualmente e do layout.",
      table: { defaultValue: { summary: false } },
    },
    justify: {
      control: { type: "select" },
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      description: "Distribuição dos itens no main axis (justify-content).",
      table: { defaultValue: { summary: "flex-start" } },
    },
    on: {
      control: "text",
      description:
        "Atributo `on` para encadear eventos via Echo (sintaxe `source/event:target/handler|filtro`).",
      table: { category: "Echo" },
    },
    width: {
      control: "text",
      description: "Largura do container (ex: `200px`, `fill`, `100%`).",
    },
  },
  tags: ["autodocs"],
};

export const Default = {};
