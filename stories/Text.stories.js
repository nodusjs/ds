import { fn } from "storybook/test";

export default {
  title: "Typography/Text",
  tags: ["autodocs"],
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
    innerText: {
      control: "text",
      description: "Conteúdo textual interno exibido pelo componente.",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
      description: "Alinhamento horizontal do texto.",
      table: {
        defaultValue: { summary: "left" },
      },
    },
    as: {
      control: { type: "select" },
      options: ["p", "span", "strong", "em", "small", "label", "legend"],
      description: "Tag HTML semântica usada para renderizar o texto.",
      table: {
        defaultValue: { summary: "p" },
      },
    },
    color: {
      control: { type: "select" },
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
      description: "Cor visual aplicada ao texto.",
      table: {
        defaultValue: { summary: "primary" },
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
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Tamanho da fonte do texto.",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    weight: {
      control: { type: "select" },
      options: ["regular", "medium", "semibold", "bold"],
      description: "Peso (espessura) da fonte.",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    wrap: {
      control: { type: "select" },
      options: ["wrap", "nowrap", "truncate"],
      description: "Comportamento de quebra de linha do texto.",
      table: {
        defaultValue: { summary: "wrap" },
      },
    },
    hidden: {
      control: "boolean",
      description: "Oculta o componente visualmente e do layout.",
      table: {
        defaultValue: { summary: false },
      },
    },
    on: {
      control: "text",
      description:
        "O atributo `on` conecta eventos de outros elementos a este componente de forma declarativa, usando a sintaxe `source/event:target/handler|filtro`.",
      table: {
        category: "Echo",
      },
    },
  },
  args: {
    innerText: "Texto padrão",
    align: "left",
    as: "p",
    color: "primary",
    on: "",
    onBrand: false,
    size: "md",
    weight: "medium",
    wrap: "wrap",
    hidden: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-text` do `@nodusjs/x`. Tipografia versátil e semântica, adaptável ao contexto visual e semântico da interface.",
      },
    },
  },
};

export const Default = {
  args: {},
};
