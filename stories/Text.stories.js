import { fn } from "storybook/test";

export default {
  title: "Typography/Text",
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-text` do `@nodusjs/x`. Tipografia versátil e semântica, adaptável ao contexto visual e semântico da interface.",
      },
    },
  },
  args: {
    align: "left",
    as: "p",
    color: "primary",
    hidden: false,
    innerText: "Texto padrão",
    on: "",
    onBrand: false,
    size: "md",
    weight: "medium",
    wrap: "wrap",
  },
  render: ({
    innerText,
    align,
    as,
    color,
    onBrand,
    size,
    weight,
    wrap,
    hidden,
  }) => {
    const text = document.createElement("x-text");
    text.innerText = innerText;
    text.setAttribute("align", align);
    text.setAttribute("as", as);
    text.setAttribute("color", color);
    text.setAttribute("size", size);
    text.setAttribute("weight", weight);
    text.setAttribute("wrap", wrap);
    hidden && text.setAttribute("hidden", "");
    onBrand && text.setAttribute("on-brand", "");
    return text;
  },
  argTypes: {
    align: {
      control: { type: "select" },
      description: "Alinhamento horizontal do texto.",
      options: ["left", "center", "right", "justify"],
      table: {
        defaultValue: { summary: "left" },
      },
    },
    as: {
      control: { type: "select" },
      description: "Tag HTML semântica usada para renderizar o texto.",
      options: ["p", "span", "strong", "em", "small", "label", "legend"],
      table: {
        defaultValue: { summary: "p" },
      },
    },
    color: {
      control: { type: "select" },
      description: "Cor visual aplicada ao texto.",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "quaternary",
        "brand-primary",
        "brand-secondary",
        "brand-tertiary",
        "error-primary",
        "warning-primary",
        "success-primary",
      ],
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    hidden: {
      control: "boolean",
      description: "Oculta o componente visualmente e do layout.",
      table: {
        defaultValue: { summary: false },
      },
    },
    innerText: {
      control: "text",
      description: "Conteúdo textual interno exibido pelo componente.",
    },
    on: {
      control: "text",
      description:
        "O atributo `on` conecta eventos de outros elementos a este componente de forma declarativa, usando a sintaxe `source/event:target/handler|filtro`.",
      table: {
        category: "Echo",
      },
    },
    onBrand: {
      control: "boolean",
      description: "Aplica estilo otimizado para áreas com fundo de marca.",
      table: {
        defaultValue: { summary: false },
      },
    },
    size: {
      control: { type: "select" },
      description: "Tamanho da fonte do texto.",
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    weight: {
      control: { type: "select" },
      description: "Peso (espessura) da fonte.",
      options: ["regular", "medium", "semibold", "bold"],
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    wrap: {
      control: { type: "select" },
      description: "Comportamento de quebra de linha do texto.",
      options: ["wrap", "nowrap", "truncate"],
      table: {
        defaultValue: { summary: "wrap" },
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};
