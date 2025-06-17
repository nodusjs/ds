import { fn } from "storybook/test";

export default {
  title: "Typography/Heading",
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-heading` do `@nodusjs/x`. Fornece títulos semânticos (`h1`–`h6`) com tipografia consistente e adaptável ao contexto da interface.",
      },
    },
  },
  args: {
    align: "left",
    as: "h1",
    color: "primary",
    hidden: false,
    innerText: "Título padrão",
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
    const heading = document.createElement("x-heading");
    heading.innerText = innerText;
    heading.setAttribute("align", align);
    heading.setAttribute("as", as);
    heading.setAttribute("color", color);
    heading.setAttribute("size", size);
    heading.setAttribute("weight", weight);
    heading.setAttribute("wrap", wrap);
    hidden && heading.setAttribute("hidden", "");
    onBrand && heading.setAttribute("on-brand", "");
    return heading;
  },
  argTypes: {
    align: {
      control: { type: "select" },
      description: "Alinhamento horizontal do título.",
      options: ["left", "center", "right", "justify"],
      table: {
        defaultValue: { summary: "left" },
      },
    },
    as: {
      control: { type: "select" },
      description: "Nível semântico do título (h1–h6).",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      table: {
        defaultValue: { summary: "h1" },
      },
    },
    color: {
      control: { type: "select" },
      description: "Cor visual aplicada ao título.",
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
      description: "Texto exibido dentro do título.",
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
      description: "Tamanho da fonte do título.",
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    weight: {
      control: { type: "select" },
      description: "Peso (espessura) da fonte do título.",
      options: ["regular", "medium", "semibold", "bold"],
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    wrap: {
      control: { type: "select" },
      description: "Comportamento de quebra de linha do título.",
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
