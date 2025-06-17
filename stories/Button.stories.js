import { fn } from "storybook/test";

export default {
  title: "Component/Button",
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-button` do `@nodusjs/x`. Utilizado para ações principais e secundárias da interface.",
      },
    },
  },
  args: {
    color: "brand",
    disabled: false,
    hidden: false,
    innerText: "Button",
    on: "",
    onBrand: false,
    onClick: fn(),
    size: "md",
    type: "submit",
    value: "",
    variant: "solid",
    width: "hug",
  },
  render: ({
    color,
    disabled,
    hidden,
    innerText,
    on,
    onBrand,
    onClick,
    size,
    type,
    value,
    variant,
    width,
  }) => {
    const button = document.createElement("x-button");
    button.innerText = innerText;
    button.addEventListener("click", (e) => onClick(e.detail));
    button.setAttribute("color", color);
    button.setAttribute("size", size);
    button.setAttribute("type", type);
    button.setAttribute("value", value);
    button.setAttribute("variant", variant);
    button.setAttribute("width", width);
    disabled && button.setAttribute("disabled", "");
    hidden && button.setAttribute("hidden", "");
    onBrand && button.setAttribute("on-brand", "");
    return button;
  },
  argTypes: {
    color: {
      control: { type: "select" },
      description: "Define a cor visual principal do botão.",
      options: ["brand", "error"],
      table: {
        defaultValue: { summary: "brand" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o botão, impedindo interações do usuário.",
      table: {
        defaultValue: { summary: false },
      },
    },
    hidden: {
      control: "boolean",
      description:
        "Oculta o botão visualmente e do layout (equivale ao atributo HTML `hidden`).",
      table: {
        defaultValue: { summary: false },
      },
    },
    innerText: {
      control: "text",
      description: "Texto visível dentro do botão.",
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
      description: "Indica se o botão está sobre uma área com cor de marca.",
      table: {
        defaultValue: { summary: false },
      },
    },
    onClick: {
      action: "onClick",
      description: "Evento disparado ao clicar no botão (detail incluído).",
      table: {
        category: "Echo",
      },
    },
    size: {
      control: { type: "select" },
      description: "Tamanho do botão.",
      options: ["sm", "md", "lg", "xl"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    type: {
      control: { type: "select" },
      description: "Tipo de botão HTML nativo.",
      options: ["submit", "reset"],
      table: {
        defaultValue: { summary: "submit" },
      },
    },
    value: {
      control: "text",
      description:
        "Valor que será submetido com o formulário (caso aplicável).",
    },
    variant: {
      control: { type: "select" },
      description: "Estilo visual do botão.",
      options: ["solid", "outlined", "ghost", "link"],
      table: {
        defaultValue: { summary: "solid" },
      },
    },
    width: {
      control: "text",
      description: "Tamanho horizontal (ex: 'hug', 'fill', 'px', '%').",
      table: {
        defaultValue: { summary: "hug" },
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};
