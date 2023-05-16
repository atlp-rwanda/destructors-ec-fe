import Button from "../components/buttons/Button";

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A reusable button component with support for primary and secondary variants.',
      },
    },
  },
};

export const Default = () => (
  <Button label="Default Button" onClick={() => alert('Button clicked!')} />
);

export const Primary = () => (
  <Button label="Primary Button" onClick={() => alert('Button clicked!')} variant="primary" />
);

export const Secondary = () => (
  <Button label="Secondary Button" onClick={() => alert('Button clicked!')} variant="secondary" />
);
