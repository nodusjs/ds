import { fn } from "storybook/test";

export default {
  title: "Directive/On",
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-on` do `@nodusjs/std`. Diretiva headless que lê o atributo `value` no formato `source/event:target/handler|filtro` e registra esse fluxo no elemento pai. Não emite eventos visuais por si só, mas conecta o arco de dados no host.",
      },
    },
  },
  args: {
    value: "",
  },
  render: ({ value }) => {
    const on = document.createElement("x-on");
    on.setAttribute("value", value);
    return on;
  },
  argTypes: {
    value: {
      control: "text",
      description:
        "Instruções de fluxo de dados no formato `source/event:target/handler|filtro`.",
    },
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};
