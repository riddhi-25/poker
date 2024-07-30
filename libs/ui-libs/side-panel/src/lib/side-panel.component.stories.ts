import { Meta, moduleMetadata } from '@storybook/angular';
import { SidePanelComponent } from './side-panel.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'SidePanelComponent',
  component: SidePanelComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule]
    }),
  ],
  argTypes: {
    isVisible: { control: 'boolean' },
  },
} as Meta<SidePanelComponent>;

export const Primary = {
  render: (args: SidePanelComponent) => ({
    props: args,
    template: `
    <planning-poker-app-side-panel [isVisible]="isVisible">
      <div side-panel-header>Header Content</div>
      <div side-panel-content>Main Content</div>
    </planning-poker-app-side-panel>
  `,
  }),
  args: {
    isVisible: false,
  },
};
