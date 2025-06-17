import { fn } from "storybook/test";

export default {
  title: "Directive/Render",
  parameters: {
    docs: {
      description: {
        component:
          "Componente `x-render` do `@nodusjs/std`. Usa o conteúdo de um `<template>` filho e o método `render(payload)` para injetar HTML interpolado no Shadow DOM. Conecte eventos que disparem `render(...)` via o atributo `on`, no formato `source/event:target/method/render|filtro`.",
      },
    },
  },
  args: {
    on: "",
    template: "",
  },
  render: ({ on, template }) => {
    const render = document.createElement("x-render");
    render.setAttribute("value", on);
    return render;
  },
  argTypes: {
    on: {
      control: "text",
      description:
        "Instrução declarativa que conecta um evento externo (`source/event`) ao método interno `render(payload)` deste componente.",
      table: {
        category: "Echo",
      },
    },
    template: {
      control: "text",
      description:
        "ID do elemento `<template>` (filho) que contém o markup a ser interpolado pelo `x-render`.",
    },
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};
