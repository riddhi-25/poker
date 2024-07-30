import { Meta } from '@storybook/angular';
import { VoteCardComponent } from './vote-card.component';

export default {
  title: 'VoteCardComponent',
  component: VoteCardComponent,
} as Meta<VoteCardComponent>;

export const Primary = {
  render: (args: VoteCardComponent) => ({
    props: args,
  }),
  args: {
    inputNum:1,
    state:'voting'
  },
};
