import { fn } from "storybook/test";

export default {
  title: "Component/Icon",
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-icon` do `@nodusjs/x`. Renderiza glyphs do Google Material Symbols dentro de um `<span>` com classe `material-symbols-outlined`, suporte a tamanhos configuráveis e ocultação via atributo.",
      },
    },
  },
  args: {
    use: "local_cafe",
    size: "md",
    hidden: false,
    on: "",
  },
  render: ({ use, size, hidden }) => {
    const icon = document.createElement("x-icon");
    icon.setAttribute("use", use);
    icon.setAttribute("size", size);
    hidden && icon.setAttribute("hidden", "");
    return icon;
  },
  argTypes: {
    use: {
      control: "text",
      description:
        "Nome do glyph do Google Material Symbols a ser exibido (ex.: `local_cafe`, `home`, `settings`).",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description:
        "Tamanho do ícone. Cada token corresponde a uma escala de `font-size` na biblioteca de design.",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    hidden: {
      control: "boolean",
      description:
        "Oculta o ícone tanto visualmente quanto do fluxo de layout.",
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
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};
